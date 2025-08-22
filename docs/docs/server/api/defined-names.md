title: Defined Names
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, defined names
description: Get and set your online spreadsheets defined names.

# Spreadsheet Defined Names

Get and set your online spreadsheets defined names.  

## Documentation

### Methods

The following methods are available to interact with the spreadsheet defined names programmatically.  

| Method            | Description                                                                                                                                                                                                                                                                                                                                                                                                       |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `getDefinedNames` | Get the defined names for a spreadsheet  <br>  <br>`Jspreadsheet getDefinedNames(): Promise<{ [definedName: string]: string }>`  <br>  <br>`GET /api/:guid/definedNames`                                                                                                                                                                                                                                         |
| `setDefinedNames` | Set a defined names for a spreadsheet  <br>  <br>`Jspreadsheet setDefinedNames(definedNames: { name: string; value?: string }[]): Promise<void>`  <br>  <br>@param definedNames[].name - new defined name name.  <br>@param definedNames[].value - new defined name value. If the value of this property is an empty string, that defined name, if any, will be removed.  <br>  <br>`POST /api/:guid/definedNames` |

## Examples

### Get the defined names

Get the defined names from an online spreadsheet

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

// Request data
spreadsheet.getDefinedNames().then((data) => {
    console.log(data);
});
```

### Set the defined names

Set new defined names for an online spreadsheet

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

// Defined names
const names = [{
    name: "TEST",
    value: "SHEET1!A1:B3",
}];

// Set Data
spreadsheet.setDefinedNames(names).then(() => {
    // It worked correctly
}).catch((err) => {
    // Something went wrong
    console.log(err);
});
```