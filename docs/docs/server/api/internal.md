title: Jspreadsheet object internal functions
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets
<!-- description: Learn to manage your online spreadsheet name -->

Internal Functions
=======

This section covers methods that do not communicate with the intrasheets API.

Documentation
-------------

### Methods

| Method | Description |
| --- | --- |
| getSpreadsheetGuid | Get spreadsheet guid.  <br>  <br>`Jspreadsheet getSpreadsheetGuid(): string;` |
| getWorksheet | get a Jworksheet object referring to the worksheet at the given index.  <br>  <br>`Jspreadsheet getWorksheet(worksheetIndex: number): IJworksheet;`  <br>  <br>@param worksheetIndex - worksheet index. |

Examples
--------

### Get Spreadsheet Guid

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

// Get spreadsheet guid
console.log(spreadsheet.getSpreadsheetGuid());
```

### Get Worksheet

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

// Get a Jworksheet object referring to the worksheet at index 0.
const worksheet = spreadsheet.getWorksheet(0);

// Get the worksheet settings just to show one of the features of the Jworksheet object
worksheet.getConfig().then((config) => {
  console.log(config);
});
```