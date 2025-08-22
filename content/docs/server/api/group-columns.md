title: Spreadsheet Group Columns
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, group columns
description: Manage group columns in your web-based spreadsheets

Group columns
========

Manage the column groups of your online spreadsheets using the following methods.  

## Documentation

### Methods

Available methods for column groups management.  

| Method | Description |
| --- | --- |
| setColumnGroup | Set a group of columns.  <br>@param column - index of the first column of the group.  <br>@param numOfItems - number of columns in the group.  <br>@param state - group state (open or closed).  <br>  <br>`Jworksheet setColumnGroup(column: number, numOfItems: number, state?: boolean): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/group/columns` |
| resetColumnGroup | Undo a group of columns.  <br>@param column - index of the first column of the group.  <br>  <br>`Jworksheet resetColumnGroup(column: number): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/group/columns` |

Examples
--------

### Set column group

Add a group of columns from the second column to the fourth.

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

// Set column group
worksheet
  .setColumnGroup(1, 2)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    console.log(err);
  });
```