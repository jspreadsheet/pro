title: Freeze Rows
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, freeze rows
description: Learn how to freeze rows in the spreadsheet

Freeze rows
===========

This section covers the methods to handle with the spreadsheet freeze rows.  

Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet freeze programmatically.  

| Method | Description |
| --- | --- |
| setFreezeRows | Set the value of the freezeRows property.  <br>@param row - new value.  <br>  <br>`Jworksheet setFreezeRows(rows: number[] \| null): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/freeze/rows` |

Examples
--------

### Update the freeze rows configuration

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

// Freeze two rows
worksheet
  .setFreezeRows([1, 2])
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```