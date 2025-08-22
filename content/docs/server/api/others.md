title: Spreadsheet Name
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, config, delete
<!-- description: Learn to manage your online spreadsheet name -->

Others
=======

This section covers methods not covered by the other sections.

Documentation
-------------

### Methods

| Method | Description |
| --- | --- |
| getConfig | Get spreadsheet config.  <br>  <br>`Jspreadsheet getConfig(): Promise<Spreadsheet>`  <br>  <br>`GET /api/:guid` |
| delete | Delete spreadsheet.  <br>  <br>`Jspreadsheet delete(): Promise<void>`  <br>  <br>`DELETE /api/:guid` |

Examples
--------

### Get config

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

// Set spreadsheet config
spreadsheet.getConfig().then((config) => {
  console.log(config);
});
```

#### Manual request

You can get the configuration of the online spreadsheets using the following route:

```
// Get the configuration properties of the spreadsheet
https://jspreadsheet.com/api/15eb1171-5a64-45bf-be96-f52b6125a045
```

### Delete spreadsheet

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

// Delete spreadsheet
spreadsheet.delete().then(() => {
  console.log("deleted");
});
```