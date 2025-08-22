title: Server API Extension
keywords: Data Persistence, Database Storage, Collaboration, Spreadsheet Storage, Custom Adapters, Server-Side Events
description: Learn how to connect your spreadsheet with any application or automation using the Intrasheets Server API. 

# Server API Extension

The Server API extension adds support for custom API routes, storage adapters, and integrations — enabling automation, external persistence, and advanced server-side features.

## Documentation

### Install

```bash
npm install @jspreadsheet/api
```

### Settings

| Property            | Description                                                    |
|---------------------|----------------------------------------------------------------|
| `s3: object`        | Configuration for S3 bucket used in history and image uploads. |
| `adapter: function` | Initialization function for custom API adapters.               |


### Usage Example

Here’s how to configure the API extension with a MongoDB adapter:

```javascript
const server = require('@jspreadsheet/server');
const adapter = require('@jspreadsheet/server-mongodb');
const api = require('@jspreadsheet/server-api');

// License
const license = {
    clientId: '356a192b7913b04c54574d18c28d46e6395428ab',
    licenseKey: 'MmIyMDhmYmY4NGI1ZDY1ODAwNThjMGZkOTVkNjg2MmQ1NzZmYTFhOTBmZWI3N2M3ZmQ1N2Q3YjMwNDNhMjRhYmViYmRkNGVjZjZlMmNkNDVhODJhYzg1ZmRiY2E3OTJhYjA1ODQzNTliZGZiMmYwNWM4YmRmMjAyZmUwODA1NmEsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pU25Od2NtVmhaSE5vWldWMElpd2laR0YwWlNJNk1UYzBNak0wTWpRd01Dd2laRzl0WVdsdUlqcGJJbXB6YUdWc2JDNXVaWFFpTENKamMySXVZWEJ3SWl3aWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0luVmxMbU52YlM1aWNpSXNJbU5rY0c0dWFXOGlMQ0pwYm5SeVlYTm9aV1YwY3k1amIyMGlMQ0p6Wm1OdlpHVmliM1F1WTI5dElpd2lkMlZpSWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpOQ0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1admNtMXpJaXdpWm05eWJYVnNZU0lzSW5KbGJtUmxjaUlzSW5CaGNuTmxjaUlzSW1sdGNHOXlkR1Z5SWl3aWRtRnNhV1JoZEdsdmJuTWlMQ0pqYjIxdFpXNTBjeUlzSW5ObFlYSmphQ0lzSW1Ob1lYSjBjeUlzSW5CeWFXNTBJaXdpWW1GeUlpd2ljMmhsWlhSeklpd2lZMnh2ZFdRaUxDSnRZWE5ySWl3aWMyaGxaWFJ6SWl3aWMyVnlkbVZ5SWl3aWFXNTBjbUZ6YUdWbGRITWlYWDA9'
}

// Connect API to S3 for history and image upload
api({
    s3: {
        key: "",
        secret: "",
        bucket: "",
        region: "",
        url: "",
    },
    adapter: adapter
});

server({
    port: 3000,
    load: async function(guid, auth, cachedConfiguration) {
        return await adapter.load(guid, auth, cachedConfiguration);
    },
    change: async function(guid, changes, auth, onerror) {
        return await adapter.change(guid, changes, auth, onerror);
    },
    create: async function(guid, config, auth) {
        return await adapter.create(guid, config, auth);
    },
    destroy: async function(guid, auth) {
        return await adapter.destroy(guid, auth);
    },
    replace: async function(guid, config, auth) {
        return await adapter.replace(guid, config, auth);
    },
    error: function(e) {
        console.error('Error', e)
    },
    license: license,
    extensions: { api },
});
```

## Client API

The Client API enables you to programmatically interact with your spreadsheets using JavaScript.

### Installation

```bash
npm install @jspreadsheet/client-api
```

### Example: Updating Comments

{.ignore}
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

// New comments
const comments = [
  { cellName: "A1", value: "first comment" },
  {
    cellName: "B3",
    value: [{ comments: "Something", date: new Date(), name: "Random name" }],
  },
];

// Set new comments
worksheet
  .setComments(comments)
  .then(() => {
    // It worked correctly
  })
  .catch((err) => {
    console.log(err);
  });
```

### Additional Resources

- [Client API Docs](/docs/server/api/getting-started)

