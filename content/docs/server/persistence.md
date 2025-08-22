title: Data Persistence in Jspreadsheet Server  
keywords: Data Persistence, Database Storage, Collaboration, Spreadsheet Storage, Custom Adapters, Server-Side Events  
description: Learn how Jspreadsheet Server provides flexible data persistence using custom adapters, and how to implement server-side events to manage spreadsheet data in your preferred database.

# Persistence

Jspreadsheet Server offers an abstract, event-driven layer for handling data persistence. You can use the `create`, `load`, `change`, `destroy`, and `replace` events to integrate your spreadsheets with any database, implement version control, handle queuing, and fully manage your data lifecycle.

## Settings

These are the available events used to persist spreadsheet data:

| Method     | Description                                                                 |
|------------|-----------------------------------------------------------------------------|
| `load`     | Loads a spreadsheet configuration using its GUID.                          |
| `create`   | Creates a new spreadsheet with the specified configuration.                |
| `change`   | Applies updates to the spreadsheet configuration.                          |
| `destroy`  | Deletes the spreadsheet and removes its configuration.                     |
| `replace`  | Replaces the existing configuration, commonly used for snapshot recovery.  |


### Example

#### Persistence with Redis

Below is a basic implementation using Redis, with no access control:

{.ignore}
```javascript
const server = require('@jspreadsheet/server');
const { createClient } = require("redis");

const client = createClient({
    socket: {
        host: 'redis',
        port: 6379
    },
});

// Connect to the server
client.connect();

// Jspreadsheet license
const license = {
    clientId: '356a192b7913b04c54574d18c28d46e6395428ab',
    licenseKey: 'MmIyMDhmYmY4NGI1ZDY1ODAwNThjMGZkOTVkNjg2MmQ1NzZmYTFhOTBmZWI3N2M3ZmQ1N2Q3YjMwNDNhMjRhYmViYmRkNGVjZjZlMmNkNDVhODJhYzg1ZmRiY2E3OTJhYjA1ODQzNTliZGZiMmYwNWM4YmRmMjAyZmUwODA1NmEsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pU25Od2NtVmhaSE5vWldWMElpd2laR0YwWlNJNk1UYzBNak0wTWpRd01Dd2laRzl0WVdsdUlqcGJJbXB6YUdWc2JDNXVaWFFpTENKamMySXVZWEJ3SWl3aWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0luVmxMbU52YlM1aWNpSXNJbU5rY0c0dWFXOGlMQ0pwYm5SeVlYTm9aV1YwY3k1amIyMGlMQ0p6Wm1OdlpHVmliM1F1WTI5dElpd2lkMlZpSWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpOQ0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1admNtMXpJaXdpWm05eWJYVnNZU0lzSW5KbGJtUmxjaUlzSW5CaGNuTmxjaUlzSW1sdGNHOXlkR1Z5SWl3aWRtRnNhV1JoZEdsdmJuTWlMQ0pqYjIxdFpXNTBjeUlzSW5ObFlYSmphQ0lzSW1Ob1lYSjBjeUlzSW5CeWFXNTBJaXdpWW1GeUlpd2ljMmhsWlhSeklpd2lZMnh2ZFdRaUxDSnRZWE5ySWl3aWMyaGxaWFJ6SWl3aWMyVnlkbVZ5SWl3aWFXNTBjbUZ6YUdWbGRITWlYWDA9'
}

server({
    port: 3000,
    // Socker.io server configuration
    config: {
        cors: {
            origin: "*"
        },
    },
    error: async function(e) {
        console.log(e);
        // Kill the thread
        process.exit(1);
    },
    beforeConnect: async function(query) {
        return true;
    },
    load: async function(guid) {
        return await client.get(guid);
    },
    create: async function(guid, config) {
        const result = await client.exists(guid);

        if (result) {
            // A spreadsheet already exists
            return false;
        } else {
            // Create a new spreadsheet
            await client.set(guid, config);

            return true;
        }
    },
    destroy: async function(guid) {
        return await client.del(guid)
            .then(() => true)
            .catch(() => false);
    },
    change: async function(guid, changes) {
        // Get the configuration from the cache
        let config = changes.instance.getConfig();
        // Save that on the redis
        await client.set(guid, JSON.stringify(config));
    },
    license: license,
});
```

#### Considerations about the example

In this setup, the full spreadsheet configuration is saved on every update, regardless of how small. To optimize performance and reduce server load, consider batching changes and writing them to the database periodically instead of on every edit.

## Adapters

Persistence in Jspreadsheet Server is based on event handling, allowing you to use any technology stack. For convenience, adapters are available—these are prebuilt implementations for specific databases that help you get started faster without sacrificing flexibility.

\
[More information](/docs/server/adapters){.button}
