title: Columns operations
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, column operations
description: Learn how to edit the column properties

Columns
=======

The following methods are available for column operations.

Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet columns programmatically.

| Method | Description |
| --- | --- |
| insertColumn | Add one or more columns.<br/>@param `columns` - position, data and options of new columns.<br/><br/>`Jworksheet insertColumn(columns: { column: number; data?: (string \| number \| boolean)[]; options?: Record<string, any>; }[]): Promise<void>`<br><br/>`POST /api/:guid/:worksheetIndex/columns/insert` |
| moveColumn | Move one or more columns.<br/>@param `from` - Index of the first column to be moved.<br/>@param `to` - Index where columns should be moved to.<br/>@param `quantity` - Number of columns to be moved.<br/><br/>`Jworksheet moveColumn(from: number, to: number, quantity: number): Promise<void>`<br><br/>`POST /api/:guid/:worksheetIndex/columns/move` |
| deleteColumn | Remove one or more columns.<br/>@param `columns` - Indexes of the columns that should be removed.<br/><br/>`Jworksheet deleteColumn(columns: number[]): Promise<void>`<br><br/>`DELETE /api/:guid/:worksheetIndex/columns/:columnIndexes` |
| setWidth | Define the width of one or multiple columns.  <br>@param column - column number(s).  <br>@param width - new width.  <br>  <br>`Jworksheet setWidth(column: number, width: number): Promise<void>`<br> `Jworksheet setWidth(column: number[], width: number \| number[]): Promise<void>` <br>  <br>`POST /api/:guid/:worksheetIndex/width` |
| getWidth | Get the with of one or multiple columns.  <br>@param columns - column number. If not informed, all columns will be returned.  <br>  <br>`Jworksheet getWidth(columns?: number \| number[] : Promise<{ [columnNumber: string]: number; }>`<br/>`Jworksheet getWidth(columns?: undefined): Promise<number[]>;`  <br>  <br>`GET /api/:guid/:worksheetIndex/width/:columns` |
| setColumnVisibility | Change the visibility of one or more columns.  <br>@param columns - affected columns.  <br>@param visible - column visibility.  <br>  <br>`Jworksheet setColumnVisibility(columns: number \| number[], visible: boolean): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/columns/show`<br>`POST /api/:guid/:worksheetIndex/columns/hide` |

Examples
--------

### Insert columns

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

// Column data
const data = ["1", "2", "3", "4", "5"];

// Column properties
const options = {
    title: "new A",
    type: "text",
};

// Add a new column on the second position. Position start on zero
worksheet.insertColumn([{
    column: 1,
    data,
    options,
}]).then(() => {
    // It worked correctly
});
```

#### Change a column position

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

// Move the first column to the second position
worksheet.moveColumn(0, 1, 1).then(() => {
    // It worked correctly
});
```

### Delete columns

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

// Delete first column
worksheet.deleteColumn([0, 2]).then(() => {
    // It worked correctly
});
```

### Column width

#### Define the width of a column

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

// Set the position of the third column to 200px
worksheet
  .setWidth(2, 200)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```

#### Define the width of multiple columns

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

// Define the width of the forth and fifth columns to 250px
worksheet
  .setWidth([3, 4], 250)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```

#### Get the width from multiple columns

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

// Get the width from multiple columns
worksheet.getWidth([3, 4]).then((widths) => {
  console.log(widths);
});
```