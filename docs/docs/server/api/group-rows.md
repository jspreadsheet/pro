title: Spreadsheet Group Rows
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, group rows
description: Manage group rows in your web-based spreadsheets

Group rows
========

Manage the row groups of your online spreadsheets using the following methods.  

## Documentation

### Methods

Available methods for row groups management.  

| Method | Description |
| --- | --- |
| setRowGroup | Set a group of rows.  <br>@param row - index of the first row of the group.  <br>@param numOfItems - number of rows in the group.  <br>@param state - group state (open or closed).  <br>  <br>`Jworksheet setRowGroup(row: number, numOfItems: number, state?: boolean): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/group/rows` |
| resetRowGroup | Undo a group of rows.  <br>@param row - index of the first row of the group.  <br>  <br>`Jworksheet resetRowGroup(row: number): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/group/rows` |

Examples
--------

### Set row group

Add a group of rows from the second row to the fourth.

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

// Set row group
worksheet
  .setRowGroup(1, 2)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    console.log(err);
  });
```