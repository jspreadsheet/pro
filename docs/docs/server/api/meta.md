title: Meta
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, meta
description: Learn to manage cell meta information

Spreadsheet meta
================

Meta information are a useful tool to keep information from a cell hidden from the user. Manage the cell meta information of your online spreadsheets using the following methods.  
  
Documentation
-------------

### Methods

Available methods for cell comments management.  

| Method | Description |
| --- | --- |
| getMeta | Get the meta information of a cell.  <br>@param cellNames - cell names and/or ranges.  <br>  <br>`Jworksheet getMeta(cellNames?: string): Promise<{ [cellName: string]: object; }>`  <br>  <br>`GET /api/:guid/:worksheetIndex/meta/:cellNames` |
| setMeta | Add meta information to the spreadsheet cells.  <br>@param metas[].cellName - reference cell.  <br>@param metas[].value - cell meta information. If null or ommited, remove current meta information from cell.  <br>  <br>`Jworksheet setMeta(metas: { cellName: string; value: object }[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/meta` |
| deleteMeta | Remove meta information.  <br>@param cellNames - cell names and/or ranges. If null or ommited, remove meta information from all cells.  <br>  <br>`Jworksheet deleteMeta(cellNames?: string \| null): Promise<void>`  <br>  <br>`DELETE /api/:guid/:worksheetIndex/meta/:cellNames` |

Examples
--------

### Read the meta information

Get all meta information from a spreadsheet  
  
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

// Get all meta information
worksheet.getMeta().then((metas) => {
  console.log(metas);
});
```

Get the meta information from a cell  
  
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

// Get the meta information
worksheet
  .getMeta("A1") // A1,A2,A3 or A1:A3 for multiple cells
  .then((metas) => {
    console.log(metas);
  });
```

### Add meta information

Meta information are hidden information related to the cells in your spreadsheet.  
  
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

// New meta information
const meta = [
  {
    cellName: "B2",
    value: {
      key: "value",
    },
  },
  {
    cellName: "D4",
    value: {
      key2: "value 2",
    },
  },
];

// Update meta information
worksheet
  .setMeta(meta)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    console.log(err);
  });
```
  
### Reset the meta information

The following code will reset the meta information of the whole table.  
  
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

// Reset
worksheet
  .deleteMeta()
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```