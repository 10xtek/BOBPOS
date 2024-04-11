<?php

namespace App\Console\Commands;

use DB;
use Str;
use Storage;
use ZipArchive;
use Webkul\Contact\Models\Person;
use Webkul\User\Models\User;
use Webkul\Attribute\Models\AttributeValue;
use Illuminate\Console\Command;

class ListBackupRestore extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pos:restore';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Goes through the list of backup zips, unzips the selected one and restore the database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //backups are stored in azure blob storage
		//get the list of backups
		$backups = [];

		//ask to show productions backups
		$show_production = $this->ask('Do you want to see production backups? (y/n)');
		$storage_disk = 'azure_backups';
		if ($show_production == 'y') {
			$storage_disk = 'azure_backups';
			$production_backups = Storage::disk($storage_disk)->allFiles(env('ACTIVE_BACKUP_NAME'));
			$backups = $production_backups;
		}else{
			$storage_disk = 'azure_backups';
			$backups = Storage::disk($storage_disk)->allFiles(env('ACTIVE_BACKUP_NAME'));
		}

		$this->info('The following backups are available:');
		$this->info('----------------------------------');
		$count = 1;
		foreach ($backups as $backup) {
			$this->info(Str::padLeft($count, 3, "0")."] ".$backup);
			$count++;
		}

		//ask the user to select a backup
		$backup_number = $this->ask('Which backup do you want to restore?');
		$backup_file = $backups[$backup_number-1];
		$this->info('You selected '.$backup_file);

		//copy file to local storage
		$contents = Storage::disk($storage_disk)->get($backup_file);
		Storage::disk('local')->put("restore/".$backup_file, $contents);

		//extract the database backup from zip
		$zip = new ZipArchive;
		$res = $zip->open(storage_path('app/restore/'.$backup_file));
		if ($res === TRUE) {
			//if the app/restore exists then delete it
			if (Storage::disk('local')->exists('restore')) {
				$this->info('Deleting old restore folder');
				Storage::disk('local')->deleteDirectory('restore');
			}
			$zip->extractTo(storage_path('app/restore/content'));
			$zip->close();
			$this->info('Database backup extracted');

			//check if the path app/restore/content/db-dumps exists
			if (Storage::disk('local')->exists('restore/content/db-dumps')) {
				//get the list of files in the db-dumps folder
				$files = Storage::disk('local')->allFiles('restore/content/db-dumps');
				//get the latest file
				$latest_file = $files[count($files)-1];
				$this->info('The latest database backup is '.$latest_file);

				//drop all tables in the database
				$this->info('Dropping all tables in the database');
				//wrap inside database transaction
				try{
					DB::transaction(function () {
						$tables = DB::select('SHOW TABLES');
						foreach ($tables as $table) {
							//start a db transaction
							$table_array = get_object_vars($table);
							$table_name = $table_array['Tables_in_'.env('DB_DATABASE')];
							//ignore foreign key checks
							DB::statement('SET FOREIGN_KEY_CHECKS=0;');
							//drop the table
							$sql = 'DROP TABLE `'.$table_name.'`;';
							$this->info($sql);
							DB::statement($sql);
							//enable foreign key checks
							DB::statement('SET FOREIGN_KEY_CHECKS=1;');
						}
					});
				} catch (\Exception $e) {
					$this->error('Database transaction failed');
				}
				//restore the database
				$command = 'mysql --ssl-ca='.env('MYSQL_ATTR_SSL_CA').' -h '.env('DB_HOST').' -u '.env('DB_USERNAME').' -p'.env('DB_PASSWORD').' '.env('DB_DATABASE').' < '.storage_path('app/'.$latest_file);
				//run the command
				$this->info('Restoring the database');
				$this->info($command);

				//execute the command and get the output
				$output = shell_exec($command);
				//display the output
				$this->info($output);

				$this->info('Database restored');


			} else {
				$this->error('Database backup not found');
			}
		} else {
			$this->error('Database backup extraction failed');
		}
        return Command::SUCCESS;
    }
}
