<?php

namespace App\Console\Commands;

use Storage;
use Illuminate\Console\Command;

class OrganizeBackupsMonthly extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pos:tidybackups';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Accesses the backups in the azure_backups disk under the active folder env(ACTIVE_BACKUP_NAME) and moves them to the monthly folder outside the active folder if they are within the month to a year/month folder structure.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
		$files = Storage::disk('azure_backups')->allFiles(env('ACTIVE_BACKUP_NAME'));
		foreach ($files as $file) {
			$contents = Storage::disk('azure_backups')->get($file);

			//extract the year and month from the file name and create a folder structure YYYY/Three letter month name
			//remove the active folder name from the file name
			$onlyfile = str_replace(env('ACTIVE_BACKUP_NAME') . '/', '', $file);
			$year = substr($onlyfile, 0, 4);
			$month = substr($onlyfile, 5, 2);
			$month_name = date('M', mktime(0, 0, 0, (int)$month, 10));
			$folder = $year . '/' . $month_name;
			//it should move the backups
			$path = Storage::disk('azure_backups')->put($folder . '/' . $onlyfile, $contents);
			//it should delete the backups
			Storage::disk('azure_backups')->delete($file);
			$this->info('Copied ' . $onlyfile . ' to ' . $path . ' and deleted ' . $file);
		}
		$this->info('All backups are nearly arranged now');
        return Command::SUCCESS;
    }
}
