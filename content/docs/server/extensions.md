title: Jspreadsheet Extensions
keywords: Jspreadsheet Extensions, NodeJS Extensions, Spreadsheet Extensions, Jspreadsheet Premium
description: Extend the default Jspreadsheet capabilities using powerful server-side extensions including OpenAI integration and programmatic API access.

# Extensions

Jspreadsheet supports server-side extensions that enhance its default capabilities. These allow deeper integrations—such as AI assistance or API control—and enable developers to expand the server's behavior for custom use cases.

## Premium Extensions

| Extension | Description                                                                                                               |
|-----------|---------------------------------------------------------------------------------------------------------------------------|
| `openai`  | Integrate OpenAI capabilities into your spreadsheet workflows, enabling intelligent data manipulation and generation.     |
| `api`     | Enable a full-fledged API to interact with the spreadsheet server programmatically, providing robust server-side control. |

## Custom Extensions

You can build your own extensions by creating modules that follow Jspreadsheet’s plugin structure. These extensions are initialized with the server and license context, giving you access to the current server instance and configuration options.

To create one:

1. Define a wrapper that registers your plugin globally, via CommonJS, or AMD.
2. Create an object or function to manage your extension logic.
3. Implement the `license` method, which will receive the license and server instance when the extension is initialized.

The extension can interact with the Jspreadsheet server’s events, configurations, and connected clients, allowing advanced integrations tailored to your backend systems.

> 📌 Tip: Store configuration in the `options` parameter passed during initialization to make your extension reusable across different setups.

{.ignore}
```javascript
;(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.yourExtension = factory();
}(this, (function() {

    // Jspreadsheet running on the backend
    let JSS;

    // Jspradsheet server global container
    let Server;

    /**
     * Create a plugin object
     */
    let Extension = function(options) {
        // You can save options to be used during execution
    }

    /**
     * Will be executed to initialize the extension
     * @param license
     * @param server
     */
    Extension.license = function(license, server) {
        // Jspreadsheet instance
        if (JSS === null) {
            JSS = this;
        }
        // Server instance
        Server = server;
    }

    return Extension;

})));
```

```javascript
const server = require('@jspreadsheet/server');
const yourExtension = require('./yourExtension');

// License
const license = {
    clientId: '356a192b7913b04c54574d18c28d46e6395428ab',
    licenseKey: 'MmIyMDhmYmY4NGI1ZDY1ODAwNThjMGZkOTVkNjg2MmQ1NzZmYTFhOTBmZWI3N2M3ZmQ1N2Q3YjMwNDNhMjRhYmViYmRkNGVjZjZlMmNkNDVhODJhYzg1ZmRiY2E3OTJhYjA1ODQzNTliZGZiMmYwNWM4YmRmMjAyZmUwODA1NmEsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pU25Od2NtVmhaSE5vWldWMElpd2laR0YwWlNJNk1UYzBNak0wTWpRd01Dd2laRzl0WVdsdUlqcGJJbXB6YUdWc2JDNXVaWFFpTENKamMySXVZWEJ3SWl3aWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0luVmxMbU52YlM1aWNpSXNJbU5rY0c0dWFXOGlMQ0pwYm5SeVlYTm9aV1YwY3k1amIyMGlMQ0p6Wm1OdlpHVmliM1F1WTI5dElpd2lkMlZpSWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpOQ0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1admNtMXpJaXdpWm05eWJYVnNZU0lzSW5KbGJtUmxjaUlzSW5CaGNuTmxjaUlzSW1sdGNHOXlkR1Z5SWl3aWRtRnNhV1JoZEdsdmJuTWlMQ0pqYjIxdFpXNTBjeUlzSW5ObFlYSmphQ0lzSW1Ob1lYSjBjeUlzSW5CeWFXNTBJaXdpWW1GeUlpd2ljMmhsWlhSeklpd2lZMnh2ZFdRaUxDSnRZWE5ySWl3aWMyaGxaWFJ6SWl3aWMyVnlkbVZ5SWl3aWFXNTBjbUZ6YUdWbGRITWlYWDA9'
}

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
    extensions: { yourExtension },
});
```

The `Server` variable contains several core properties that will allow you to extend the Jspreadsheet server capabilities. For example, broadcast a message to all spreadsheets.

{.ignore}
```javascript
const data = [[1,2,3]]
// Prepare data for ZIP
const compressed = await Server.helpers.encodeZip({
    method: 'setData',
    worksheet: `the-worksheetId-id`,
    args: [data]
});
// Emit broadcast
Server.io.to(spreadsheetGuid).emit("JSS", compressed);
```