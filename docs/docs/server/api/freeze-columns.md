title: Freeze Columns
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, freeze columns
description: Learn how to freeze columns in the spreadsheet

Freeze columns
==============

This section covers the methods to handle with the spreadsheet freeze columns.  

Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet freeze columns programmatically.  

| Method | Description |
| --- | --- |
| setFreezeColumns | Set the value of the freezeColumns property.  <br>@param column - new value.  <br>  <br>`Jworksheet setFreezeColumns(columns: number[] \| null): Promise<void>`  <br>`POST /api/:guid/:worksheetIndex/freeze/columns` |

Examples
--------

### Update the freeze columns configuration

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

// Freeze two columns
worksheet
  .setFreezeColumns([2, 3])
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```