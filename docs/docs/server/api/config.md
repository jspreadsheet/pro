title: Spreadsheet settings
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets
description: Get or set the spreadsheet settings using the cloud API.

Config
======

The configuration defines styles, data, columns and other properties from a spreadsheet.  

Documentation
-------------

### Methods

The following methods are available to interact with the spreadsheet headers programmatically.  

| Method    | Description                                                                                                                                                                                            |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getConfig | Get the worksheet configuration object.  <br>  <br>`Jworksheet getConfig(): Promise<Partial<Worksheet>>;`  <br>  <br>`GET /api/:guid/:worksheetIndex`                                                  |
| setConfig | Set the worksheet configuration.<br>@param config - New definitions.  <br>  <br>`Jworksheet setConfig(config: Partial<Worksheet>): Promise<void>;`  <br>  <br>`POST /api/:guid/:worksheetIndex/config` |

Examples
--------

### Get the configuration

Get the configuration of the remote worksheet by the guid identifier.  
  
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

// Get config
worksheet.getConfig().then((config) => {
  console.log(config);
});
```

### Update the configuration

Change the configuration of a spreadsheet.  
  
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

// New config
const config = {
  filters: true
};

// Set config
worksheet
  .setConfig(config)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    // Something went wrong
    console.log(err);
  });
```