title: Spreadsheet Validations
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, validations, validate
description: Learn how to work with validations in the online spreadsheet

Spreadsheet validations
=======================

More information about methods to manage the cells validations.  

Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet headers programmatically.  

| Method | Description |
| --- | --- |
| getValidations | Get the validations from a spreadsheet.  <br>  <br>`Jspreadsheet getValidations(): Promise<Validation[]>`  <br>  <br>`GET /api/:guid/validations` |
| setValidations | Set or update the validations for a spreadsheet.  <br>@param validations[].index - position of this validation.  <br>@param validations[].value - new validation value.  <br>  <br>`Jspreadsheet setValidations(validations: { index: number; value: Validation \| null; }[]): Promise<void>`  <br>  <br>`POST /api/:guid/validations` |

Examples
--------

### Get a new validation object to the spreadsheet.
  
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
spreadsheet.getValidations().then((data) => {
    console.log(data);
});
``` 

### Set new validations for a spreadsheet.

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

// Change validation at position 0
let validations = [{
    index: 0,
    value: {
        range: 'Sheet1!A1:A6',
        action: "warning",
        criteria: "between",
        type: "number",
        allowBlank: false,
        value: [10, 30],
        format: undefined,
    }
}];
// Set Data
spreadsheet.setValidations(validations).then(() => {
    // It worked correctly
}).catch((err) => {
    // Something went wrong
    console.log(err);
});
```