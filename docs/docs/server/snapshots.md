title: Snapshots
keywords: Data Persistence, Database Storage, Collaboration, Spreadsheet Storage, Custom Adapters, Server-Side Events
description: Jspreadsheet Server provides efficient snapshot-based version control for seamless spreadsheet management.

# Snapshots

## Overview

Jspreadsheet Server offers robust version control through snapshots, enabling users to create and restore spreadsheet versions effortlessly. This feature is exclusive to spreadsheet owners, who can manage snapshots via the interface or automate their creation using API calls at customizable intervals.

{.green}
> **Requirements**\
> Requires the Jspreadsheet Server API Extension and AWS S3.

### Frontend

Spreadsheet owners can utilize the intuitive interface to create new snapshots or restore previous versions, ensuring full control over version management.

![](/templates/default/img/version-history.png){style="width: 480px"}


### Server

#### Setup

Snapshots are compressed and securely stored in your AWS S3 bucket.

{.ignore}
```javascript
const server = require('@jspreadsheet/server');
const adapter = require('@jspreadsheet/server-mongodb');
const api = require('@jspreadsheet/server-api');

// Load from ENV
require('dotenv').config();

// Jspreadsheet license
const license = {
    clientId: process.env.JSS_CLIENT,
    licenseKey: process.env.JSS_LICENSE
};

// Connect API to S3
api({
    s3: {
        key: process.env.AWS_S3_KEY,
        secret: process.env.AWS_S3_SECRET,
        bucket: process.env.AWS_BUCKET,
        region: process.env.AWS_S3_REGION,
        url: process.env.AWS_S3_URL,
    },
    adapter: adapter
});
```

## History API

The API allows developers to implement automated snapshot creation based on custom rules.

### Example

Retrieve a list of all spreadsheet snapshots using the Client API.
  
{.ignore}
```javascript
import { Client } from "@jspreadsheet/client";

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
spreadsheet.getHistory().then((data) => {
    console.log(data);
});
```

### More Information

For additional details on the History API, refer to the documentation.

[History API](/docs/server/api/history){.button}