title: Jspreadsheet Client Extension
keywords: Jspreadsheet, Jexcel, javascript, spreadsheet, grid, data grid, real-time spreadsheet collaboration.
description: Jspreadsheet client is an extension to connect a local spreadsheet to your Jspreadsheet Private Server.
canonical: https://jspreadsheet.com/products/client

# Jspreadsheet Client

The Jspreadsheet client extension provides a interface to connect on a remote jspreadsheet server to create collaborative spreadsheets. It requires [Jspreadsheet Server](/products/server) running on your servers. 

## Documentation

### Settings

| Property                     | Description                                                                                                            |
|------------------------------|------------------------------------------------------------------------------------------------------------------------|
| url: string                  | The url point to the your Jspreadsheet Server.                                                                         |
| path?: string                | The route for the API. Default: api/                                                                                   |
| token: string                | A valid signature to connect to the API and server.                                                                    |
| onbeforesend?: Function      | Intercept all Ajax request headers.<br>`onbeforesend(xhr: Object) => void`                                             |
| onbeforecreate?: Function    | Intercept the configuration before creating the spreadsheet.<br>`(options: Object) => void`                            |
| onbeforeload?: Function      | Intercept the URL.<br>`(string: url) => string `                                                                       |
| onbeforeloadimage?: Function | Before load an image.<br>`onbeforeloadimage(worksheet: object, img: HTMLElement, options: object) => void  \| boolean` |

### Installation

#### using NPM
```bash
$ npm install @jspreadsheet/client
```
#### using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/client/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/socket.io@4.7.5/client-dist/socket.io.min.js"></script>
```

## Example

Create an online spreadsheet from a remote configuration.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/client/dist/index.min.js"></script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ client });

// Connect
let remote = client.connect({
    url: 'https://jspreadsheet.com',
    path: 'server/',
    // Can be used to send extra information to the server to validate this user connection
    token: 'user-identifier-jwt'
});

// Create in case does not exist
remote.create('53aa4c90-791d-4a65-84a6-8ac25d6b1104', {
    tabs: true,
    toolbar: true,
    worksheets: [{
        minDimensions: [4,4]
    }]
});

// Connect to a spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    guid: '53aa4c90-791d-4a65-84a6-8ac25d6b1104'
});
</script>
</html>
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
    url: 'https://jspreadsheet.com',
    // Internal socket path
    path: 'server/socket.io/',
    // Can be used to send extra information to the server to validate this user connection
    token: 'user-identifier'
});

// Create just one time. Do nothing if already exists
remote.create(guid, {
  tabs: true,
  toolbar: true,
  worksheets: [{
    minDimensions: [4,6]
  }]
}).then(() => {});

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
    url: 'https://jspreadsheet.com',
    // Internal socket path
    path: 'server/socket.io/',
    // Can be used to send extra information to the server to validate this user connection
    token: 'user-identifier'
});

// Create just one time. Do nothing if already exists
remote.create(guid, {
        tabs: true,
        toolbar: true,
        worksheets: [
            {
                minDimensions: [4, 6],
            },
        ],
    })
    .then(() => { });

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

// Add license
jspreadsheet.setLicense('NzU0ZWE0YWZhZWIzZWM4N2Q5ZGY3MzYzNjEyZjBkYzQ3NjUxN2UzMTE1YjUwNmU0ODA1OTRhZDYwMTVlMjZjMjcxZmZiM2I2MjU1ZDE0MzRmNzc2ODc1ODllNDkxYWYzMjczZWE3Yzk3OWVmMzk5NDQ1YzAyMjZjMGY2NWFjNzEsZXlKamJHbGxiblJKWkNJNklpSXNJbTVoYldVaU9pSktjM0J5WldGa2MyaGxaWFFpTENKa1lYUmxJam94TnpFME5ETTNOamMxTENKa2IyMWhhVzRpT2xzaWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWFuTm9aV3hzTG01bGRDSXNJbU56WWk1aGNIQWlMQ0ozWldJaUxDSnNiMk5oYkdodmMzUWlYU3dpY0d4aGJpSTZJak0wSWl3aWMyTnZjR1VpT2xzaWRqY2lMQ0oyT0NJc0luWTVJaXdpZGpFd0lpd2lkakV4SWl3aVkyaGhjblJ6SWl3aVptOXliWE1pTENKbWIzSnRkV3hoSWl3aWNHRnljMlZ5SWl3aWNtVnVaR1Z5SWl3aVkyOXRiV1Z1ZEhNaUxDSnBiWEJ2Y25SbGNpSXNJbUpoY2lJc0luWmhiR2xrWVhScGIyNXpJaXdpYzJWaGNtTm9JaXdpY0hKcGJuUWlMQ0p6YUdWbGRITWlMQ0pqYkdsbGJuUWlMQ0p6WlhKMlpYSWlMQ0p6YUdGd1pYTWlYU3dpWkdWdGJ5STZkSEoxWlgwPQ==');
// Define the data grid extensions
jspreadsheet.setExtensions({ client, formula });

// Connect
let remote = client.connect({
    // Point this to your own domain server
    url: 'https://jspreadsheet.com',
    // Internal socket path
    path: 'server/socket.io/',
    // Can be used to send extra information to the server to validate this user connection
    token: 'user-identifier'
});

// Create in case does not exist
remote.create('53aa4c90-791d-4a65-84a6-8ac25d6b1105', {
    tabs: true,
    toolbar: true,
    worksheets: [{
        minDimensions: [4,6]
    }]
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