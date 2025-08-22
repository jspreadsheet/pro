title: Create new spreadsheet
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets
description: How to create a new online spreadsheet using the cloud API.

Jspreadsheet Cloud API
======================

How to create a new spreadsheet
-------------------------------

Add a new spreadsheet in your Jspreadsheet Cloud or Private Cloud workspace.  
  
PHP
  
```php
<?php
require 'vendor/autoload.php';

use jspreadsheet\Jspreadsheet;

// Access token
$token = 'MSwzMTJmZWQzMWYyYTI1OWQ5OGVhMWYxOWNhMDNhYWY3ZTA2ZmVmMWQz';

// Create the client instance
$client = new Jspreadsheet($token);

// Options for the new worksheet @See Jspreadsheet documentation for more options
$options = [
    'minDimensions' => [10, 10]
];

// Create a new worksheet
$data = $client->create($options);


// Array ( [success] => 1 [token] => 5c609bcc-1b79-48a8-8f2c-5b89572c7d6f  )
```

NodeJS
  
```javascript
import { Client } from '@intrasheets/client';

// Access token
const token = 'MSwzMTJmZWQzMWYyYTI1OWQ5OGVhMWYxOWNhMDNhYWY3ZTA2ZmVmMWQz';

// Create the client instance
$client = new Jspreadsheet(token);

// Options for the new worksheet @See Jspreadsheet documentation for more options
const config = {
    minDimensions: [10, 10],
};

// Create a new worksheet
client.create({ config }).then((newSpreadsheet) => {
    console.log(newSpreadsheet);
});
```