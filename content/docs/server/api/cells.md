title: Cells operations,
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, data operations,
description: Learn how to manage cell style, cell meta information, cell comments, merged cells, and the cell data from a remote cloud spreadsheet using the cloud API.

Spreadsheet cells
=================

The `cells` methods allows the developer to perform read and write cell operations in their online spreadsheets.  
  

## Documentation

### Methods

The following methods are available to interact with the spreadsheet cells programmatically.  

| Method | Description |
| --- | --- |
| getData | Get the data from the spreadsheet  <br>`getData() : void`  <br>  <br>`GET /api/data` |
| setdATA | Set a new data for your spreadsheet  <br>`setData(data: any[]) : void`  <br>@Param {array} - new data  <br>  <br>`POST /api/data` |

Cell values
-----------

### Update a cell value

  
![](data:image/png;base64,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)  
  

NodeJS

PHP

<?php
require 'vendor/autoload.php';

// Access token
$token = 'MSxlMjE2MWI5YWNjYTg2MzM4MThmN2Y4NjY0YmQzYzBlOGExMmVkZjVk';

// Spreadsheet Guid
$guid = '79b45919-c751-4e2b-a49a-6c1286e2fc03';

// Create a new client
$client = new Jspreadsheet($token);

// Get the spreadsheet instance
$spreadsheet = $client->getSpreadsheet($guid);

// Get the spreadsheet instance and request configuration
$result = $spreadsheet->getCell('C4')->setValue('New value');

// { "success": 1, "message": "Updated" }

import { Client } from '@intrasheets/client';

// Access token
const token = 'MSxlMjE2MWI5YWNjYTg2MzM4MThmN2Y4NjY0YmQzYzBlOGExMmVkZjVk';

// Spreadsheet Guid
const guid = '79b45919-c751-4e2b-a49a-6c1286e2fc03';

// Create a new client
const client = new Client(token);

// Get the spreadsheet instance
const spreadsheet = client.getSpreadsheet(guid);

// Set the new value
spreadsheet.setValue([{
    x: 2,
    y: 3,
    value: "New value",
},
]).then(() => {
    // It worked correctly
}).catch((err) => {
    console.log(err);
});

  

### Retrieve cell values

You can request the data in a spreadsheet by defining a single cell, an array of cells or a range of cells, as below:  
  

#### Get values from cells

It is possible to retrieve the value from one or multiple cells in a single request.  
  

NodeJS

PHP

<?php
require 'vendor/autoload.php';

use jspreadsheet\\Jspreadsheet;

// Access token
$token = 'MSxlMjE2MWI5YWNjYTg2MzM4MThmN2Y4NjY0YmQzYzBlOGExMmVkZjVk';

// Spreadsheet Guid
$guid = '79b45919-c751-4e2b-a49a-6c1286e2fc03';

// Create a new client
$client = new Jspreadsheet($token);

// Get the spreadsheet instance
$spreadsheet = $client->getSpreadsheet($guid);

// Get the spreadsheet instance and request configuration
$result = $spreadsheet->getCell('C4,D4,D5')->getValue();

// [{"x":2,"y":3,"name":"C4","value":"C4"},{"x":3,"y":3,"name":"D4","value":null},{"x":3,"y":4,"name":"D5","value":null}]

import { Client } from '@intrasheets/client';

// Access token
const token = 'MSxlMjE2MWI5YWNjYTg2MzM4MThmN2Y4NjY0YmQzYzBlOGExMmVkZjVk';

// Spreadsheet Guid
const guid = '79b45919-c751-4e2b-a49a-6c1286e2fc03';

// Create a new client
const client = new Client(token);

// Get the spreadsheet instance
const spreadsheet = client.getSpreadsheet(guid);

// Get the values
spreadsheet.getValue("C4,D4,D5").then((values) => {
    console.log(values);
});

// [
//     {
//         x: 2,
//         y: 3,
//         name: "C4",
//         value: "C4",
//     },
//     {
//         x: 3,
//         y: 3,
//         name: "D4",
//         value: null,
//     },
//     {
//         x: 3,
//         y: 4,
//         name: "D5",
//         value: null,
//     },
// ]

  

#### Read the data from multiple cells by range

  

NodeJS

PHP

```php
<?php
require 'vendor/autoload.php';

use jspreadsheet\Jspreadsheet;

// Access token
$token = 'MSxlMjE2MWI5YWNjYTg2MzM4MThmN2Y4NjY0YmQzYzBlOGExMmVkZjVk';

// Spreadsheet Guid
$guid = '79b45919-c751-4e2b-a49a-6c1286e2fc03';

// Create a new client
$client = new Jspreadsheet($token);

// Get the spreadsheet instance
$spreadsheet = $client->getSpreadsheet($guid);

// Get the spreadsheet instance and request configuration
$result = $spreadsheet->getCell('C1:C2')->getValue();

// [{"x":2,"y":0,"name":"C1","value":null},{"x":2,"y":1,"name":"C2","value":null}]
```

```javascript
import { Client } from '@intrasheets/client';

// Access token
const token = 'MSxlMjE2MWI5YWNjYTg2MzM4MThmN2Y4NjY0YmQzYzBlOGExMmVkZjVk';

// Spreadsheet Guid
const guid = '79b45919-c751-4e2b-a49a-6c1286e2fc03';

// Create a new client
const client = new Client(token);

// Get the spreadsheet instance
const spreadsheet = client.getSpreadsheet(guid);

// Get the values
spreadsheet.getValue("C1:C2").then((values) => {
    console.log(values);
});

// [
//     {
//         x: 2,
//         y: 0,
//         name: "C1",
//         value: null,
//     },
//     {
//         x: 2,
//         y: 1,
//         name: "C2",
//         value: null,
//     },
// ]
```