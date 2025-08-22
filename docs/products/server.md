title: Spreadsheet Real-time Collaboration with Jspreadsheet Server
keywords: Jspreadsheet, Jexcel, javascript, grid, data grid, real-time spreadsheet collaboration, Jspreadsheet Server, data persistence, real-time collaboration, JavaScript plugin, data management, data grid plugin
description: Jspreadsheet Server is a powerful product designed to facilitate data persistence and enable real-time collaboration.

![Data Grid Server](img/data-grid/server.svg){.icon}

# Jspreadsheet Server

The Jspreadsheet Server extension is a JavaScript plugin designed for real-time data sharing and persistence in Jspreadsheet. It is a web-socket-based service hosted on your server that allows collaboration and interactivity within spreadsheets while your data is 100% under your control.

## Highlights

* **Private Service**: Host on your servers for total data privacy;
* **Custom Authentication**: Use your authentication methods;
* **Custom Storage**: Add your persistence mechanisms;
* **Real-time Collaboration**: Work together on spreadsheets in real time;
* **Lightweight**: Experience seamless use with intuitive controls;
* **WebSockets**: Ensure smooth communication with Jspreadsheet;


{.green}
> Jspreadsheet Server enhances your applications with real-time collaboration and data persistence securely hosted on your servers.  

> Version 11.9.0+
> There are changes on the method signature for auth, connect and disconnect. Now the argument is query defined on the frontend.

## Documentation

The Jspreadsheet Server maintains a remote spreadsheet configuration for sharing across different users.  

### Changelog

#### 11.11.0

- Added compression support;
- Introduced `before` events for authentication and request transformations;
- The auth property has been dropped; please use `beforeConnect` and `beforeLoad`;

#### 11.9.0+

- There are changes on the method signature for auth, connect and disconnect. Now the argument is query defined on the frontend.


### How to install

```bash
npm install @jspreadsheet/server
```

### Settings

| **Description**                                                                                                                                                    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `port: number`<br>The service port the server will listen on. Default: 3000.                                                                                       |
| `config: object`<br>Defines extra headers, such as CORS configurations.                                                                                            |
| `license: object`<br>License information required for server deployment.                                                                                           |
| `extensions: object`<br>Allows loading additional features or customizations via extensions.                                                                       |
| `beforeConnect: async function(auth) => boolean`<br>Intercepts and validates user connections before they are established.                                         |
| `beforeLoad: async function(guid, auth) => boolean`<br>Intercepts and authorizes access before loading a spreadsheet by its GUID.                                  |
| `beforeChange: async function(guid, changes, auth) => boolean`<br>Intercepts and processes changes before they are applied to a spreadsheet.                       |
| `load: async function(guid, auth, cache) => object \| boolean`<br>Loads the spreadsheet configuration by its GUID. Returns the configuration object or a boolean.  |
| `create: async function(string, config, auth) => object`<br>Creates a new spreadsheet with the given configuration.                                                |
| `change: async function(string, changes, auth, onerror) => object`<br>Updates a spreadsheet with the specified data and configuration.                             |
| `replace: async function(string, config, auth) => boolean`<br>Overwrites the spreadsheet’s settings, including the data.                                           |
| `destroy: async function(string, auth) => boolean`<br>Deletes a spreadsheet using its GUID.                                                                        |
| `error: async function(e) => void`<br>Handles and logs errors, providing custom error management.                                                                  |


## Development considerations

Jspreadsheet Server is really flexible and requires you to declare some features such as authentication and some persistent events. So, we the following table gives you some considerations for each available event.

### Before Events
The events can be used to ensure that users have appropriate access to the spreadsheets.

### Error
Allows the developer to save the error in a file for debug purposes for example.

### Limitations
Functions or references cannot be persisted from the client to the server. Therefore, you must manage your events on the front end.

{.green}
> **Server Monitoring**
> Employing tools like `pm2` or `supervisor` is essential for server monitoring. These tools automate process management, ensuring your server remains operational and enhances deployment reliability.  

## Basic template

### Create a Server With Persistence

This template demonstrates setting up a Jspreadsheet server for collaborative editing and persistence, detailing server initialization, user authentication, and spreadsheet event handling functions.

{.ignore}
```javascript
const server = require('@jspreadsheet/server');

// Jspreadsheet license: Both available on your profile
const license = {
    clientId: 'your-client-id',
    licenseKey: 'your-certificate-license'
}

// Create a new server
server({
    port: 3000,
    error: async function(e) {
        // Save the error in a file  
    },
    load: async function(guid, auth) {
        // Load an existing spredasheet based on the guid identifier
    },
    create: async function(guid, config, auth) {
        // Create a new spreadsheet
    },
    destroy: async function(guid, auth) {
        // Destroy an existing spreadsheet
    },
    change: async function(guid, changes, auth, onerror) {
        // Update an existing spradsheet
    },
    replace: async function(guid, config, auth) {
        // Overwrite the existing spreadsheet
    },
    license: license,
});
```

## Example

### Saving the data with Redis

#### Server Side

This example a basic data persistence implementation using Redis on the server side without access restrictions.

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
    beforeLoad: async function(guid, auth) {
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

#### Client

Connect to your server and create and open an existing remote spreadsheet using the spreadsheet guid ident.

```html
<html>
<script src="https://cdn.jsdelivr.net/npm/jspreadsheet@11/dist/index.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jspreadsheet@11/dist/jspreadsheet.min.css" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/jsuites/dist/jsuites.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsuites/dist/jsuites.min.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>
<script src="https://cdn.socket.io/4.3.2/socket.io.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/client/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ formula, client });

// Connect
let remote = client.connect({
    // Point this to your own domain server
    url: 'https://jspreadsheet.com',
    // Internal socket path
    path: 's/',
    // Can be used to send extra information to the server to validate this user connection
    token: 'jwt-token'
});

// Create in case does not exist. worksheetName is mandatory
remote.create('53aa4c90-791d-4a65-84a6-8ac25d6b1101', {
    tabs: true,
    toolbar: true,
    worksheets: [{
        minDimensions: [4,6],
        // Worksheet name is mandatory
        worksheetName: 'Sheet1',
    }]
});

// Connect to a spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    guid: '53aa4c90-791d-4a65-84a6-8ac25d6b1101'
});
</script>
```
```jsx
import React, {useRef} from 'react';
import { Spreadsheet, jspreadsheet } from '@jspreadsheet/react';
import formula from '@jspreadsheet/formula-pro';
import client from '@jspreadsheet/client';

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = {
  clientId: '356a192b7913b04c54574d18c28d46e6395428ab',
  licenseKey: 'MmIyMDhmYmY4NGI1ZDY1ODAwNThjMGZkOTVkNjg2MmQ1NzZmYTFhOTBmZWI3N2M3ZmQ1N2Q3YjMwNDNhMjRhYmViYmRkNGVjZjZlMmNkNDVhODJhYzg1ZmRiY2E3OTJhYjA1ODQzNTliZGZiMmYwNWM4YmRmMjAyZmUwODA1NmEsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pU25Od2NtVmhaSE5vWldWMElpd2laR0YwWlNJNk1UYzBNak0wTWpRd01Dd2laRzl0WVdsdUlqcGJJbXB6YUdWc2JDNXVaWFFpTENKamMySXVZWEJ3SWl3aWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0luVmxMbU52YlM1aWNpSXNJbU5rY0c0dWFXOGlMQ0pwYm5SeVlYTm9aV1YwY3k1amIyMGlMQ0p6Wm1OdlpHVmliM1F1WTI5dElpd2lkMlZpSWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpOQ0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1admNtMXpJaXdpWm05eWJYVnNZU0lzSW5KbGJtUmxjaUlzSW5CaGNuTmxjaUlzSW1sdGNHOXlkR1Z5SWl3aWRtRnNhV1JoZEdsdmJuTWlMQ0pqYjIxdFpXNTBjeUlzSW5ObFlYSmphQ0lzSW1Ob1lYSjBjeUlzSW5CeWFXNTBJaXdpWW1GeUlpd2ljMmhsWlhSeklpd2lZMnh2ZFdRaUxDSnRZWE5ySWl3aWMyaGxaWFJ6SWl3aWMyVnlkbVZ5SWl3aWFXNTBjbUZ6YUdWbGRITWlYWDA9'
}

jspreadsheet.setLicense(license);

jspreadsheet.setExtensions({ formula, client });

const guid = '53aa4c90-791d-4a65-84a6-8ac25d6b1105'

// Connect to the server
let remote = client.connect({
    // Point this to your own domain server
    url: 'https://yourserver.com',
    // Internal socket path
    path: 'server/socket.io/',
    // Can be used to send extra information to the server to validate this user connection
    token: 'jwt-token'
});

// Create just one time. Do nothing if already exists
remote.create(guid, {
    tabs: true,
    toolbar: true,
    worksheets: [{
        minDimensions: [4,6],
        // Worksheet name is mandatory
        worksheetName: 'Sheet1',
    }]
}).then((result) => {
    console.log(result);
});

export default function App() {
  // Spreadsheet array of worksheets
  const spreadsheet = useRef();

  // Render component
  return (
      <Spreadsheet ref={spreadsheet} guid={guid} />
  );
}
```
```vue
<template>
  <Spreadsheet ref="spreadsheet" :guid="guid"/>
</template>

<script>
import { Spreadsheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";
import client from "@jspreadsheet/client";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = {
  clientId: '356a192b7913b04c54574d18c28d46e6395428ab',
  licenseKey: 'MmIyMDhmYmY4NGI1ZDY1ODAwNThjMGZkOTVkNjg2MmQ1NzZmYTFhOTBmZWI3N2M3ZmQ1N2Q3YjMwNDNhMjRhYmViYmRkNGVjZjZlMmNkNDVhODJhYzg1ZmRiY2E3OTJhYjA1ODQzNTliZGZiMmYwNWM4YmRmMjAyZmUwODA1NmEsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pU25Od2NtVmhaSE5vWldWMElpd2laR0YwWlNJNk1UYzBNak0wTWpRd01Dd2laRzl0WVdsdUlqcGJJbXB6YUdWc2JDNXVaWFFpTENKamMySXVZWEJ3SWl3aWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0luVmxMbU52YlM1aWNpSXNJbU5rY0c0dWFXOGlMQ0pwYm5SeVlYTm9aV1YwY3k1amIyMGlMQ0p6Wm1OdlpHVmliM1F1WTI5dElpd2lkMlZpSWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpOQ0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1admNtMXpJaXdpWm05eWJYVnNZU0lzSW5KbGJtUmxjaUlzSW5CaGNuTmxjaUlzSW1sdGNHOXlkR1Z5SWl3aWRtRnNhV1JoZEdsdmJuTWlMQ0pqYjIxdFpXNTBjeUlzSW5ObFlYSmphQ0lzSW1Ob1lYSjBjeUlzSW5CeWFXNTBJaXdpWW1GeUlpd2ljMmhsWlhSeklpd2lZMnh2ZFdRaUxDSnRZWE5ySWl3aWMyaGxaWFJ6SWl3aWMyVnlkbVZ5SWl3aWFXNTBjbUZ6YUdWbGRITWlYWDA9'
}

jspreadsheet.setLicense(license);

jspreadsheet.setExtensions({ formula, client });

const guid = '53aa4c90-791d-4a65-84a6-8ac25d6b1105'

// Connect to the server
let remote = client.connect({
  // Point this to your own domain server
  url: 'https://yourserver.com',
  // Can be used to send extra information to the server to validate this user connection
  token: 'jwt-token'
});

// Create just one time. Do nothing if already exists
remote.create(guid, {
  tabs: true,
  toolbar: true,
  worksheets: [{
    minDimensions: [4,6],
    // Worksheet name is mandatory
    worksheetName: 'Sheet1',
  }]
})
.then((result) => {
    console.log(result)
});

export default {
  components: {
      Spreadsheet,
  },
  data() {
      return {
          guid
      };
  }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";
import client from "@jspreadsheet/client";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = {
  clientId: '356a192b7913b04c54574d18c28d46e6395428ab',
  licenseKey: 'MmIyMDhmYmY4NGI1ZDY1ODAwNThjMGZkOTVkNjg2MmQ1NzZmYTFhOTBmZWI3N2M3ZmQ1N2Q3YjMwNDNhMjRhYmViYmRkNGVjZjZlMmNkNDVhODJhYzg1ZmRiY2E3OTJhYjA1ODQzNTliZGZiMmYwNWM4YmRmMjAyZmUwODA1NmEsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pU25Od2NtVmhaSE5vWldWMElpd2laR0YwWlNJNk1UYzBNak0wTWpRd01Dd2laRzl0WVdsdUlqcGJJbXB6YUdWc2JDNXVaWFFpTENKamMySXVZWEJ3SWl3aWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0luVmxMbU52YlM1aWNpSXNJbU5rY0c0dWFXOGlMQ0pwYm5SeVlYTm9aV1YwY3k1amIyMGlMQ0p6Wm1OdlpHVmliM1F1WTI5dElpd2lkMlZpSWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpOQ0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1admNtMXpJaXdpWm05eWJYVnNZU0lzSW5KbGJtUmxjaUlzSW5CaGNuTmxjaUlzSW1sdGNHOXlkR1Z5SWl3aWRtRnNhV1JoZEdsdmJuTWlMQ0pqYjIxdFpXNTBjeUlzSW5ObFlYSmphQ0lzSW1Ob1lYSjBjeUlzSW5CeWFXNTBJaXdpWW1GeUlpd2ljMmhsWlhSeklpd2lZMnh2ZFdRaUxDSnRZWE5ySWl3aWMyaGxaWFJ6SWl3aWMyVnlkbVZ5SWl3aWFXNTBjbUZ6YUdWbGRITWlYWDA9'
}

jspreadsheet.setLicense(license);

// Define the data grid extensions
jspreadsheet.setExtensions({ client, formula });

// Connect
let remote = client.connect({
    // Point this to your own domain server
    url: 'https://yourserver.com',
    // Can be used to send extra information to the server to validate this user connection
    token: 'jwt-token'
});

// Create in case does not exist
remote.create(guid, {
    tabs: true,
    toolbar: true,
    worksheets: [{
        minDimensions: [4,6],
        // Worksheet name is mandatory
        worksheetName: 'Sheet1',
    }]
})
.then((result) => {
    console.log(result)
});

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            guid: '53aa4c90-791d-4a65-84a6-8ac25d6b1105'
        });
    }
}
```

## More resources

### Real-time Spreadsheets with React Typescript

Use this React TypeScript project as a template to set up a real-time collaborative spreadsheet server within minutes.

- [React Spreadsheet Server](https://github.com/jspreadsheet/spreadsheet-react-server)


### Jspreadsheet Server Nginx Setup

You can quickly enable your server using nginx following this tutorial

- [Spreadsheet Server Nginx Configuration](https://github.com/jspreadsheet/server)

