title: Headers operations
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets
description: Create or update the spreadsheet headers using the cloud API

Spreadsheet Headers
===================

This section covers the methods to handle with the spreadsheet headers.  
  
Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet headers programmatically.  

| Method | Description |
| --- | --- |
| getHeaders | Get the header title by column number.  <br>  <br>`Jworksheet getHeaders(column?: number \| number[]): Promise<string[]>`  <br>  <br>@param column - get the header title by column number starting on zero. If no value is passed, returns the titles of all columns  <br>  <br>`GET /api/:guid/:worksheetIndex/header/:columns` |
| setHeader | Set a custom header title.  <br>@param title - new title  <br>@param column - column number starting on zero  <br>  <br>`Jworksheet setHeader(column: number, title: string): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/header` |

Examples
--------

### How to change the title of a column

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

// Change the header title for the first column
worksheet
  .setHeader(0, "New title")
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```

### Get the current column titles

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

worksheet.getHeaders().then((titles) => {
  console.log(titles);
});
```

### Get the title from a specified column number

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

worksheet.getHeaders(1).then((titles) => {
  console.log(titles);
});

// ["B"]
```