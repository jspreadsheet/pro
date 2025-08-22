title: Cell Values
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, cell values, value
description: Learn how to work with cell values, with methods to get and set the values of a cell

Cell Values
===========

Get and set values for the spreadsheet cells.  

## Documentation

### Methods

The following methods are available to interact with the spreadsheet cell values programmatically.  

| Method | Description |
| --- | --- |
| getValue | Get the value from one or more worksheet cells.  <br>@param cellNames - cell names and/or ranges.  <br>  <br>`Jworksheet getValue(cellNames: string): Promise<{ x: number; y: number; value?: string \| number \| boolean \| null }[]>`  <br>  <br>`GET /api/:guid/:worksheetIndex/value/:cellNames` |
| setValue | Set worksheet cell values.  <br>@param data[].x - cell X coordinate  <br>@param data[].y - cell Y coordinate  <br>@param data[].value - cell new value  <br>  <br>`Jworksheet setValue(data: { x: number; y: number; value: string; }[]): Promise<string[] \| null>`  <br>  <br>`POST /api/:guid/:worksheetIndex/value` |

Examples
--------

### Update the multiple cell values from a spreasdheet in a batch.

The worksheet position and unique-id is returned.  
  
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

// Options for the new worksheet @See Jspreadsheet documentation for more options
const values = [
  { x: 0, y: 0, value: "Á1" },
  { x: 1, y: 0, value: "B1" },
];

// Result
worksheet.setValue(values).then((result) => {
  console.log(result);
});
```