title: Rows operations
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, rows operations
description: Learn more information about inserting new rows, delete existing rows, or change row positions. Also, learn how to edit the rows properties

Rows
====

The following methods are available for rows operations.  

## Documentation

### Methods

The following methods are available to interact with the spreadsheet rows programmatically.  

| Method           | Description                                                                                                                                                                                                                                                                                                                                                         |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| insertRow        | Add one or more rows to the worksheet.<br/>@param `rows` - Position, data and options of new rows.<br/><br/>`Jworksheet insertRow(rows: { row: number; data: (string \| number \| boolean \| undefined)[] \| Record<string, string \| number \| boolean>; options: Record<string, any>; }[]): Promise<void>`<br/><br/>`POST /api/:guid/:worksheetIndex/rows/insert` |
| moveRow          | Move one or more rows.<br/>@param `from` - Index of the first row to be moved.<br/>@param `to` - Index where rows should be moved to.<br/>@param `quantity` - Number of rows to be moved.<br/><br/>`Jworksheet moveRow(from: number, to: number, quantity: number): Promise<void>`<br/><br/>`POST /api/:guid/:worksheetIndex/rows/move`                             |
| deleteRow        | Remove one or more rows.<br/>@param `rows` - Indexes of the rows to be removed.<br/><br/>`Jworksheet deleteRow(rows: number[]): Promise<void>`<br/><br/>`DELETE /api/:guid/:worksheetIndex/rows/:rowIndexes`                                                                                                                                                        |
| setHeight        | Update the row height.  <br>@param row - row number.  <br>@param height - new height.  <br>  <br>`Jworksheet setHeight(row: number, height: number): Promise<void>`  <br>`Jworksheet setHeight(row: number[], height: number \| number[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/height`                                                       |
| getHeight        | Get the height of one or multiple rows.  <br>@param rowNumber - row number. If omitted, returns the heights of all rows.  <br>  <br>`Jworksheet getHeight(rowNumber?: number \| number[]): Promise<{ [rowNumber: string]: number; }>`  <br>  <br>`GET /api/:guid/:worksheetIndex/height/:rows`                                                                      |
| setRowVisibility | Change the visibility of one or more rows.  <br>@param rows - affected rows.  <br>@param visible - row visibility.  <br>  <br>`Jworksheet setRowVisibility(rows: number \| number[], visible: boolean): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/rows/show`<br>`POST /api/:guid/:worksheetIndex/rows/hide`                                        |

Examples
--------

### Insert rows

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

// Insert data
worksheet.insertRow([
  {
    row: 1,
    data: ['Apple', '$3.442', 'USA'],
  }
]).then(() => {
    // It worked correctly
});
```

### Row position

#### Change the row position, from the first to the second position.

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

worksheet.moveRow(0, 1, 1).then(() => {
    // It worked correctly
});
```

### Delete rows

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

// Delete three rows from the forth column
worksheet.deleteRow([1, 3]).then(() => {
    // It worked correctly
});
```

### Row height

#### Define the height of a first row to 30px

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

// Set the height
worksheet
  .setHeight(0, 30)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```
  

#### Define the height of multiple rows

  
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

// Set the height
worksheet
  .setHeight([0, 1, 2], 50)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something weng wrong
    console.log(err);
  });
```
  

#### Get the height of the first row

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

// Result
worksheet.getHeight(0).then((heights) => {
  console.log(heights);
});
```
  
#### Get the height of multiple rows

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

// Result
worksheet.getHeight([2, 3, 4]).then((heights) => {
  console.log(heights);
});
```