title: Merged Cells
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, merged cells
description: Learn to manage merged cells, get merged cell information, set, remove and reset merges.

Merged cells
============

Manage merged cells of your online spreadsheets using the following methods.  

Documentation
-------------

### Methods

Available methods for cell comments management.  

| Method | Description |
| --- | --- |
| getMerge | Get the merged cell information.  <br>@param cellNames - cell names and/or ranges.  <br>  <br>`Jworksheet getMerge(cellNames?: string): Promise<{ [cellName: string]: [number, number]; }>`  <br>  <br>`GET /api/:guid/:worksheetIndex/merge/:cellNames` |
| setMerge | Merge cells.  <br>@param merge.cellName - cell where the merge starts.  <br>@param merge.spans - number of columns and rows that this merge occupies.  <br>  <br>`Jworksheet setMerge(merges: { cellName: string; spans: [number, number]; } \| { cellName: string; spans: [number, number]; }[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/merge` |
| removeMerge | Revert merged cells to normal visualization.  <br>@param cellNames - cell names.  <br>  <br>`Jworksheet removeMerge(cellNames: string): Promise<void>`  <br>  <br>`DELETE /api/:guid/:worksheetIndex/merge/:cellNames` |
| resetMerge | Revert all merged cells to normal visualization.<br>  <br>`Jworksheet resetMerge(): Promise<void>`  <br>  <br>`DELETE /api/:guid/:worksheetIndex/merge` |

Examples
--------

### Get merge cells

Read merged cells information  
  
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

// Get merge information A1,A2,A3 or A1:A3 for multiple cells
worksheet.getMerge("A1").then((merges) => {
  console.log(merges);
});
```

### Set merge cells

Defining the merging of cells  
  
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

// Merge of A1 with B1, A2 and B2: (Colspan and Rowspan From A1)
worksheet
  .setMerge([{ cellName: "A1", spans: [2, 2] }])
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```

### Reset merged cells

Revert a merged cells to regular cells.  

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

// Remove merge
worksheet
  .removeMerge("A1")
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```

Reset all merged cells  

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
  .resetMerge()
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```