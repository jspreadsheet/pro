title: Footers operations
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets
description: Create or update the spreadsheet footers using the cloud API

Spreadsheet footers
===================

Footers is readonly data that goes in the footer of the spreadsheet. It can provides summary information to the user, and can include text or formulas.  
  
Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet footers programmatically.  

| Method | Description |
| --- | --- |
| getFooters | Get the footers definitions for a spreadsheet.  <br>  <br>`Jworksheet getFooters(): Promise<(string \| number \| boolean \| null)[][]>;`  <br>  <br>`GET /api/:guid/:worksheetIndex/footers` |
| setFooters | Remove the current footer and apply the informed one.  <br>@param footer - new footer data.  <br>  <br>`Jworksheet setFooters(footer: (string \| undefined \| null)[][]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/footers` |
| resetFooter | Remove the footer.  <br>  <br>`Jworksheet resetFooter(): Promise<void>`  <br>  <br>`DELETE /api/:guid/:worksheetIndex/footers` |
| setFooterValue | Change the value of a preexisting cell in the footer.  <br>@param x - cell column to be changed.  <br>@param y - cell row to be changed.  <br>@param value - new cell value.  <br>  <br>`Jworksheet setFooterValue(x: number, y: number, value: string): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/footers/value` |

Examples
--------

### Set the spreadsheet footers

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

// Get Jworksheet object
const worksheet = spreadsheet.getWorksheet(0);

// New footer
const rows = [
  ["1", "2"],
  ["3", "4"],
];

// Create the footers from the array
worksheet
  .setFooters(rows)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```
  

### Retrieving all footers

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

// Get Jworksheet object
const worksheet = spreadsheet.getWorksheet(0);

// Get the footers
worksheet.getFooters().then((footer) => {
  console.log(footer);
});
```
  

### Set the value of a footer cell

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

// Get Jworksheet object
const worksheet = spreadsheet.getWorksheet(0);

// Set the value of the footer cell
worksheet
  .setFooterValue(1, 1, "New Value")
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```

### Delete all footers

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

// Get Jworksheet object
const worksheet = spreadsheet.getWorksheet(0);

// Delete the footer definitions
worksheet
  .resetFooter()
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```