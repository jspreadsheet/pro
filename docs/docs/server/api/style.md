title: Cell Style
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, style
description: Learn more about styling your spreadsheet cells, with the methods to get, set and remove css style

Style
=====

Manage the cell style using the following methods.  

Documentation
-------------

### Methods

Available methods for cell style management.  

| Method | Description |
| --- | --- |
| getStyle | Get the style information from one or more cells.  <br>@param cellNames - cell name. If omitted, returns styles for all cells.  <br>@param index - return the cell's style index or its style.  <br>  <br>`Jworksheet getStyle(cellNames?: string \| null, index?: boolean): Promise<{ [cellName: string]: string \| number } \| null>;`  <br>  <br>`GET /api/:guid/:worksheetIndex/style/:cellName` |
| setStyle | Apply or remove styles from one or more cells  <br>@param styles[].cellName - name of the cell to be styled.  <br>@param styles[].value - new cell styles. If a style property is sent without a value (with just blank spaces), it will be removed.  <br>@param overwrite - If true, removes all current styles from cells before applying new ones.  <br>  <br>`Jworksheet setStyle(styles: { cellName: string; value: string \| number; }[], overwrite?: boolean): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/style` |
| removeStyle | Remove all styles from one or more cells.  <br>@param cellNames - Comma-separated cell names.  <br>  <br>`Jworksheet removeStyle(cellNames: string): Promise<void>`  <br>  <br>`DELETE /api/:guid/:worksheetIndex/style/:cellName` |

Examples
--------

### Set style

Define style to the spreadsheet cells.  
  
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

// New styles
const styles = [
  {
    cellName: "A1",
    value: "background-color: #333;color:#fff;",
  },
  {
    cellName: "A2",
    value: "background-color: #ccc",
  },
];

// Apply style
worksheet
  .setStyle(styles)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    console.log(err);
  });
```
  

### Reset style
  
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

// Reset A1,A2,A3 for multiple cells
worksheet
  .removeStyle("A1")
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```