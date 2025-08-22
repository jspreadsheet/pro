title: Table Sorting
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, sorting
description: Learn more about sorting a column in the online spreadsheet

Sorting
=======

This section covers the methods to handle the table sorting  

Documentation
-------------

### Methods

| Method | Description |
| --- | --- |
| orderBy | Sorts the rows of a worksheet based on the values in a column.<br/>@param `columnNumber` - Column that will decide the new order.<br/>@param `direction` - The direction of ordination. false is equivalent to ascending sorting and true is equivalent to descending sorting.  <br/>  <br/>`Jworksheet orderBy(columnNumber: number, direction: boolean): Promise<void>`  <br/>  <br/>`POST /api/:guid/:worksheetIndex/order` |

Examples
--------

### Sorting the data in a column
  
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

// Sort column
worksheet.orderBy(2, false).then(() => {
    // It worked correctly
});
```