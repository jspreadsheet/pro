title: Spreadsheet Properties
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, properties
description: Learn how to manage properties on a online spreadsheet column

Columns and cell properties
===========================

This section covers the methods to manage the properties from a cell or a spreadsheet column.  

Documentation
-------------

### Methods

| Method | Description |
| --- | --- |
| getProperty | Get the properties of one cell.  <br>@param column - cell column.  <br>@param row - cell row.  <br>  <br>`Jworksheet getProperty(column: number, row: number): Promise<{ [property: string]: any; }>`  <br>  <br>`GET /api/:guid/:worksheetIndex/properties/:column/:row` |
| getProperty | Get the properties of one or more columns.  <br>@param columns - column(s) position(s). If omitted, the properties of all columns are returned.  <br>  <br>`Jworksheet getProperty(columns?: number \| number[]): Promise<{ [columnIndex: string]: Column; }>`  <br>  <br>`GET /api/:guid/:worksheetIndex/properties/:columns` |
| setProperty | Set the properties of one or more columns. All old properties are removed.  <br>@param properties.[].column - column number  <br>@param properties.[].options - properties values. If omitted, current settings will be removed.  <br>  <br>`Jworksheet setProperty(properties: { column: number; options?: Column; }[]): Promise<void>`  <br>`POST /api/:guid/:worksheetIndex/properties` |
| setProperty | Set the properties of a cell. All old properties are removed.  <br>@param properties[].column - x coordinate.  <br>@param properties[].row - y coordinate.  <br>@param properties[].options - properties values. If omitted, current settings will be removed.  <br>  <br>`Jworksheet setProperty(properties: { column: number; row: number; options?: { [property: string]: any; }; }[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/properties` |
| updateProperty | Update the properties of one or more columns. Only the specified properties are affected.  <br>@param properties.[].column - column number  <br>@param properties.[].options - properties values  <br>  <br>`Jworksheet updateProperty(properties: { column: number; options: Column; }[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/properties/update` |
| updateProperty | Update the properties of a cell. Only the specified properties are affected.  <br>@param properties[].column - x coordinate.  <br>@param properties[].row - y coordinate.  <br>@param properties[].options - properties values.  <br>  <br>`Jworksheet updateProperty(properties: { column: number; row: number; options: { [property: string]: any; }; }[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/properties/update` |
| resetProperties | Removes all properties of a cell.  <br>@param column - cell column.  <br>@param row - cell row.  <br>  <br>`Jworksheet resetProperties(column: number, row: number): Promise<void>`  <br>`POST /api/:guid/:worksheetIndex/properties` |

Examples
--------

### Column properties

#### Update the column properties

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

// New properties
const properties = {
  type: "checkbox",
  title: "Column A",
  width: 100,
};

// Change the properties from the forth column
worksheet
  .setProperty([
    {
      column: 3,
      options: properties,
    },
  ])
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```

#### Read the properties of a column
  
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

// Get the properties from the first column
worksheet.getProperty(0).then((properties) => {
  console.log(properties);
});
```
  

#### Read the properties of multiple columns

  
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

// Get the properties from multiple columns
worksheet.getProperty([0, 1]).then((properties) => {
  console.log(properties);
});
```