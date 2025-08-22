title: Spreadsheet Media
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, cell media
description: Manage media in your web-based spreadsheets

Media
========

Manage the media of your online spreadsheets using the following methods.  

## Documentation

### Methods

Available methods for worksheet media management.  

| Method | Description |
| --- | --- |
| setMedia | Set the properties of one or more media.  <br>@param media[].id - media guid.  <br>@param media[].src - media src used in floating images.  <br>  <br>`Jworksheet setMedia(media: { id?: string; src?: string; [key: string]: any; }[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/media` |
| deleteMedia | Remove one or more media.  <br>@param ids - media identifiers.  <br>  <br>`Jworksheet deleteMedia(ids: string[]): Promise<void>`  <br>  <br>`POST /api/:guid/:worksheetIndex/media` |

Examples
--------

### Add media

Add floating image.

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

// New media
const media = [
  {
    id: "1e2d0a59-827d-48dc-b86c-cf30bd7c5ea4",
    src: "https://lemonadejs.com/templates/default/img/components.svg",
    left: 100,
    top: 150,
    width: 200,
    height: 150,
  },
];

// Add floating image
worksheet
  .setMedia(media)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    console.log(err);
  });
```

### Delete media

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

// Remove floating image
worksheet
  .deleteMedia(["1e2d0a59-827d-48dc-b86c-cf30bd7c5ea4"])
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    console.log(err);
  });
```