title: Spreadsheet data operations
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets
description: Learn more about real-time spreadsheet data operations using the cloud API.

Spreadsheet Data
================

Get and set data to and from your online spreadsheets.  

Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet data programmatically.  

| Method | Description |
| --- | --- |
| getData | Get the data from the worksheet  <br>  <br>`Jworksheet getData(): Promise<(string \| number \| boolean \| null)[][] \| Record<string, string \| number \| boolean \| null>[]>`  <br>  <br>`GET /api/:guid/:worksheetIndex/data` |
| setData | Set a new data for your worksheet  <br>@param data - new data  <br>  <br>`Jworksheet setData(data: string[][] \| { row: number; data: string[]; }[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/data` |

Examples
--------

### Get the spreadsheet data

The following example show how to get the data from a worksheet.  
  
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
const guid = '79b45919-c751-4e2b-a49a-6c1286e2fc03';

// Get the spreadsheet instance
const spreadsheet = client.getSpreadsheet(guid);

// Get Jworksheet object
const worksheet = spreadsheet.getWorksheet(0);

// Get data
worksheet.getData().then((data) => {
  console.log(data);
});
```
  
### Set the spreadsheet data

The following example show how to update the data from a worksheet.  
  
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
const guid = '79b45919-c751-4e2b-a49a-6c1286e2fc03';

// Get the spreadsheet instance
const spreadsheet = client.getSpreadsheet(guid);

// Get Jworksheet object
const worksheet = spreadsheet.getWorksheet(0);

// Set Data
worksheet
  .setData([["1", "2", "3"]])
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```