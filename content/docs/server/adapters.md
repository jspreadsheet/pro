title: Jspreadsheet Server Adapters for Flexible Data Persistence
keywords: Jspreadsheet Server, data persistence, database storage, spreadsheet collaboration, MongoDB adapter, Redis adapter, server-side events, real-time spreadsheet, backend integration
description: Explore how Jspreadsheet Server supports flexible data persistence with built-in MongoDB and Redis adapters. Learn to handle server-side events and store spreadsheet data in your preferred database with customizable behavior and optimized storage.

# Adapters

## Overview

Jspreadsheet Server allows developers to implement data persistence using event-driven methods, making it easy to integrate with a variety of storage technologies. To simplify common use cases, Jspreadsheet Server provides ready-made adapters for MongoDB and Redis. These adapters include core operations like create, read, update, and delete (CRUD), and plug seamlessly into the server’s event-based architecture.

### Redis Adapter

The Redis adapter provides basic data persistence. It stores the entire spreadsheet as a compressed object every 15 minutes, making it suitable for large documents (up to 512MB).

```bash
npm install @jspreadsheet/server-redis
```

### MongoDB Adapter

The MongoDB adapter supports incremental updates and includes advanced features such as:

- User Ownership  
- Version Control  
- Sharing & Access Control  
- Privacy State  
- Formify Integration

> **Document Size Limit:**  
> MongoDB documents have a 16MB size limit. If a document exceeds this, the server will throw an error. A good practice is to store images on services like **Amazon S3** and link them in your spreadsheet. Learn more about [image handling](/docs/server/images).


```bash
npm install @jspreadsheet/server-mongodb
```

#### Example

{.ignore}
```javascript
const server = require('@jspreadsheet/server');
const adapter = require('@jspreadsheet/server-mongodb');

// Load environment variables
require('dotenv').config();

// License configuration
const license = {
  clientId: process.env.JSS_CLIENT,
  licenseKey: process.env.JSS_LICENSE
};

// Initialize the Jspreadsheet Server
server({
  config: {
      cors: {
          origin: "*"
      },
  },
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
      console.error('Error', e);
  },
  license: license,
});
```

## What’s Next?

Now that your Jspreadsheet Server is connected to a database, you can move on to configuring authentication rules that fit your project’s access model.

\
[Continue to Authentication](/docs/server/authentication){.button}
