title: Worksheets operations
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, worksheets
description: Learn more information about creating new worksheets, delete existing worksheets, change the worksheets positions, rename worksheets

Worksheets
==========

Programmatically changes on the worksheet level are available through the following operations.  

Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet worksheets programmatically.  

| Method | Description |
| --- | --- |
| createWorksheet | Create a new worksheet.  <br>@param options - worksheet options.  <br>  <br>`Jspreadsheet createWorksheet(options: Partial<Worksheet> & { worksheetName: string; }, index?: number): Promise<IJworksheet>`  <br>  <br>`POST /api/:guid/worksheet` |
| renameWorksheet | Rename the worksheet.  <br>@param worksheet - worksheet position  <br>@param newValue - new title  <br>  <br>`Jspreadsheet renameWorksheet(worksheet: number, newValue: string): Promise<void>`  <br>  <br>`POST /api/:guid/worksheet/rename` |
| moveWorksheet | Move a worksheet position.  <br>@param from - worksheet position.  <br>@param to - new position.  <br>  <br>`Jspreadsheet moveWorksheet(from: number, to: number): Promise<void>`  <br>  <br>`POST /api/:guid/worksheet/move` |
| deleteWorksheet | Delete a worksheet by its position.  <br>@param worksheetPosition - worksheet position.  <br>  <br>`Jspreadsheet deleteWorksheet(worksheetPosition: number): Promise<void>`  <br>  <br>`DELETE /api/:guid/worksheet/:worksheetPosition` |

Examples
--------

### Create a new worksheet

The worksheet position and unique-id is returned.  
  
```javascript
import { Client } from "@intrasheets/client";

// Create a new client
const client = new Client({
  // API Server
  baseUrl: "http://localhost:8009/api",
  // Your authentication token
  token: "eyJhbGciOiJIUzUxMiIsInR5cCJ9.eyJkb21haW4iOiJsb2NhbGhvc3Q6ODAPQSJ9.Xr2Ir2-zEc_tqV5y6i",
});

// Spreadsheet Guid
const guid = '15eb1171-5a64-45bf-be96-f52b6125a045';

// Get the spreadsheet instance
const spreadsheet = client.getSpreadsheet(guid);

// Options for the new worksheet @See Jspreadsheet documentation for more options
const options = {
  worksheetName: "New worksheet",
  minDimensions: [10, 10],
};

// Result
spreadsheet.createWorksheet(options).then(async (newWorksheet) => {
  console.log(await newWorksheet.getConfig());
});
```

### Rename worksheet

How to rename a remote worksheet.  
  
```javascript
import { Client } from "@intrasheets/client";

// Create a new client
const client = new Client({
  // API Server
  baseUrl: "http://localhost:8009/api",
  // Your authentication token
  token: "eyJhbGciOiJIUzUxMiIsInR5cCJ9.eyJkb21haW4iOiJsb2NhbGhvc3Q6ODAPQSJ9.Xr2Ir2-zEc_tqV5y6i",
});

// Spreadsheet Guid
const guid = '15eb1171-5a64-45bf-be96-f52b6125a045';

// Get the spreadsheet instance
const spreadsheet = client.getSpreadsheet(guid);

// Rename the first worksheet
spreadsheet.renameWorksheet(0, "New title for the first worksheet").then(() => {
    // It worked correctly
})
.catch((err) => {
    // Something went wrong
    console.log(err);
});
```

### Update worksheet position

How to change the worksheet order on a remote spreadsheet.  
  
```javascript
import { Client } from "@intrasheets/client";

// Create a new client
const client = new Client({
  // API Server
  baseUrl: "http://localhost:8009/api",
  // Your authentication token
  token: "eyJhbGciOiJIUzUxMiIsInR5cCJ9.eyJkb21haW4iOiJsb2NhbGhvc3Q6ODAPQSJ9.Xr2Ir2-zEc_tqV5y6i",
});

// Spreadsheet Guid
const guid = '15eb1171-5a64-45bf-be96-f52b6125a045';

// Get the spreadsheet instance
const spreadsheet = client.getSpreadsheet(guid);

// Update the second worksheet to the third position
spreadsheet.moveWorksheet(1, 0).then(() => {
    // It worked correctly
})
.catch((err) => {
    console.log(err);
});
```
  
  

### Delete worksheet

How to delete a remote worksheet.  
  
```javascript
import { Client } from "@intrasheets/client";

// Create a new client
const client = new Client({
  // API Server
  baseUrl: "http://localhost:8009/api",
  // Your authentication token
  token: "eyJhbGciOiJIUzUxMiIsInR5cCJ9.eyJkb21haW4iOiJsb2NhbGhvc3Q6ODAPQSJ9.Xr2Ir2-zEc_tqV5y6i",
});

// Spreadsheet Guid
const guid = '15eb1171-5a64-45bf-be96-f52b6125a045';

// Get the spreadsheet instance
const spreadsheet = client.getSpreadsheet(guid);

// Delete the first worksheet
spreadsheet.deleteWorksheet(0).then(() => {
    // It worked correctly
})
.catch((err) => {
    // Something went wrong
    console.log(err);
});
```