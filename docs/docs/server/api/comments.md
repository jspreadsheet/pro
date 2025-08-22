title: Cell Comments
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, cell comments
description: Manage comments for cells in your web-based spreadsheets

Comments
========

Manage the cell comments of your online spreadsheets using the following methods.  

## Documentation

### Methods

Available methods for cell comments management.  

| Method | Description |
| --- | --- |
| setComments | Add or remove comments from a spreadsheet cell.  <br>@param comments[].cellName - reference cell for comment.  <br>@param comments[].value - the comment. If the value of this property is an empty string, the current comment for that cell, if any, will be removed  <br>  <br>`Jworksheet setComments(comments: { cellName: string; value: string \| { comments: string; date: Date; userId?: number; name?: string; }[]; }[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/comments` |
| getComments | Get the comments from a cell.  <br>@param cellNames - cells and/or comments whose comment should be returned.  <br>  <br>`Jworksheet getComments(cellNames?: string): Promise<{ [cellName: string]: string \| { comments: string; date: string; name?: string }[]; }>;`  <br>  <br>`GET /api/:guid/:worksheetIndex/comments/:cellNames` |

Examples
--------

### Set comments

Add a note to cell A1 and a comment to cell B3.

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

// New comments
const comments = [
  { cellName: "A1", value: "first comment" },
  {
    cellName: "B3",
    value: [{ comments: "Something", date: new Date(), name: "Random name" }],
  },
];

// Set new comments
worksheet
  .setComments(comments)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    console.log(err);
  });
```

### Get comments from a cell

It is possible get the comments from multiple cells using comma or a range, such as D1:D4.  
  
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

// Get comments from A1 - You can use D1:D4 or A1,A2,A3 for multiple cells
worksheet.getComments("A1").then((comments) => {
  console.log(comments);
});
```