<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application. Just store away!
    |
    */

    'default' => env('FILESYSTEM_DRIVER', 'local'),

    /*
    |--------------------------------------------------------------------------
    | Default Cloud Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Many applications store files both locally and in the cloud. For this
    | reason, you may specify a default "cloud" driver here. This driver
    | will be bound as the Cloud disk implementation in the container.
    |
    */

    'cloud' => env('FILESYSTEM_CLOUD', 's3'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    | Supported Drivers: "local", "ftp", "sftp", "s3"
    |
    */

    'disks' => [

        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
        ],

        'snapshots' => [
            'driver' => 'local',
            'root' => storage_path( 'snapshots' ),
        ],

        'public' => [
			'driver'    => 'local', // As this is the name of the driver, this MUST be set to "azure"
            'name'      => env('AZURE_STORAGE_NAME'),
            'key'       => env('AZURE_STORAGE_KEY'),
            'container' => env('AZURE_STORAGE_CONTAINER'),
            'url'       => env('AZURE_STORAGE_URL'),
            'prefix'    => null,
            'connection_string' => env('AZURE_STORAGE_CONNECTION_STRING') // optional, will override default endpoint builder 
        ],

        's3' => [
            'driver' => 's3',
            'key' => env('AWS_ACCESS_KEY_ID'),
            'secret' => env('AWS_SECRET_ACCESS_KEY'),
            'region' => env('AWS_DEFAULT_REGION'),
            'bucket' => env('AWS_BUCKET'),
            'url' => env('AWS_URL'),
            'endpoint' => env('AWS_ENDPOINT'),
        ],
		'azure' => [ // NB This need not be set to "azure", because it's just the name of the connection - feel free to call it what you want, or even set up multiple blobs with different names
            'driver'    => 'azure', // As this is the name of the driver, this MUST be set to "azure"
            'name'      => env('AZURE_STORAGE_NAME'),
            'key'       => env('AZURE_STORAGE_KEY'),
            'container' => env('AZURE_STORAGE_CONTAINER'),
            'url'       => env('AZURE_STORAGE_URL'),
            'prefix'    => null,
            'connection_string' => env('AZURE_STORAGE_CONNECTION_STRING') // optional, will override default endpoint builder 
        ],
		'azure_backups' => [ // NB This need not be set to "azure", because it's just the name of the connection - feel free to call it what you want, or even set up multiple blobs with different names
            'driver'    => 'azure', // As this is the name of the driver, this MUST be set to "azure"
            'name'      => env('AZURE_STORAGE_NAME'),
            'key'       => env('AZURE_STORAGE_KEY'),
            'container' => env('AZURE_STORAGE_BACKUP_CONTAINER'),
            'url'       => env('AZURE_STORAGE_URL'),
            'prefix'    => null,
            'connection_string' => env('AZURE_STORAGE_CONNECTION_STRING') // optional, will override default endpoint builder 
        ],

        'ns' => [
			'driver'    => 'azure', // As this is the name of the driver, this MUST be set to "azure"
            'name'      => env('AZURE_STORAGE_NAME'),
            'key'       => env('AZURE_STORAGE_KEY'),
            'container' => env('AZURE_STORAGE_CONTAINER'),
            'url'       => env('AZURE_STORAGE_URL'),
            'prefix'    => null,
            'connection_string' => env('AZURE_STORAGE_CONNECTION_STRING') // optional, will override default endpoint builder 
        ],

        'ns-public' => [
			'driver'    => 'azure', // As this is the name of the driver, this MUST be set to "azure"
            'name'      => env('AZURE_STORAGE_NAME'),
            'key'       => env('AZURE_STORAGE_KEY'),
            'container' => env('AZURE_STORAGE_CONTAINER'),
            'url'       => env('AZURE_STORAGE_URL'),
            'prefix'    => null,
            'connection_string' => env('AZURE_STORAGE_CONNECTION_STRING') // optional, will override default endpoint builder 
        ],

        'ns-modules' => [
			'driver'    => 'azure', // As this is the name of the driver, this MUST be set to "azure"
            'name'      => env('AZURE_STORAGE_NAME'),
            'key'       => env('AZURE_STORAGE_KEY'),
            'container' => env('AZURE_STORAGE_CONTAINER'),
            'url'       => env('AZURE_STORAGE_URL'),
            'prefix'    => null,
            'connection_string' => env('AZURE_STORAGE_CONNECTION_STRING') // optional, will override default endpoint builder 
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Symbolic Links
    |--------------------------------------------------------------------------
    |
    | Here you may configure the symbolic links that will be created when the
    | `storage:link` Artisan command is executed. The array keys should be
    | the locations of the links and the values should be their targets.
    |
    */

    'links' => [
        public_path('storage') => storage_path('app/public'),
    ],

];
