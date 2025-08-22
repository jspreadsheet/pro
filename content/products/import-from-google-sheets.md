title: Import From Google Sheets
keywords: Jspreadsheet, Jexcel, javascript, grid, data grid, edition bar
description: Import from Google Sheets to create amazing JSS data grids.

![Import from Google Sheets](img/data-grid/google-sheets-importer.svg){.icon}

# Google Sheets Importer

The Google Sheets Importer extension for Jspreadsheet is a JavaScript plugin that simplifies importing Google Sheets into your applications. It extracts data, styles, validations, and formatting into a JSON object, which can then populate a Jspreadsheet data grid and replicate the content and appearance of the original sheet.

> **Google Sheets to JSON**  You can convert any public or private Google Sheets directly from its link to a local JSON with the appropriate permissions. It is required a Google API key.

## Documentation

Import public or private Google Sheets using the Sheet's URL or Sheet ID. It requires a proper Google Sheets API configuration, which can be done via the Google Console.  

### Methods

| Method                  | Description                                                                                                           |
| ------------------------|-----------------------------------------------------------------------------------------------------------------------|
| sheets(object?)         | Set the configuration for your Google Sheets extension.<br/>`sheets(config?: Object) => void`                         |
| sheets(string, object?) | Import a new Google Sheets spreadsheet into the JSS JSON format.<br/>`sheets(ident: String, config?: Object) => void` |

 

### Configuration

| Method           | Description                                                                                                                                                                                  |
| -----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onload: Function | Method to be called after the import is finalized. You can use this to send the config to create a new Jspreadsheet Data Grid instance.<br/> `onload: (title: string, config: object) => void` |

 

#### Importing private sheets

| Method              | Description                            |
|---------------------|----------------------------------------|
| clientId: string    | Your Google Client ID, e.g., yourapi.apps.googleusercontent.com |
| apiKey: string      | The Google API Key for authentication and access. |
| redirectUri: string | The URL where users will be redirected after successful authorization. |
| errorUri: string    | The URL to redirect users to in case of an authorization or import error. |
 

### Securing Your API Credentials

it is essential to implement restrictions on your API credentials to ensure the security and proper usage of your API,

- **Restrict API Key Usage**: Limit the usage of your API key to specific IP addresses, HTTP referrers, or applications;
- **Enforce Scopes**: Apply the minimal scope of permissions necessary for your application to function;
- **Monitor API Traffic**: Regularly review the usage logs to identify any suspicious activity or unauthorized access attempts.
- **Rotate Keys Periodically**: Change API keys periodically and update your application accordingly to minimize risk in case of key exposure.

> **Important**  It's important to understand that the information above is not exhaustive, and as a developer, you are solely responsible for ensuring your application's security. We highly recommend further research on best security practices.

### Sample configuration

{.ignore}
```javascript
sheets({
    clientId: 'xyz.apps.googleusercontent.com',
    apiKey: 'xyzxyzxyz-q1',
    redirectUri: 'http://localhost:8000/sheets',
    errorUri: 'http://localhost:8000/sheets/error',
});

// Import from a Google Sheets
sheets('https://docs.google.com/spreadsheets/d/16Es5bj0dSfPXDUsbDfdUc7Y5mHkIL8Skux5YJLOenV0', {
    onload: function(title, config) {
        jspreadsheet(document.getElementById('spreadsheet'), config);
    }
});
```

## Examples

### Import from Google Sheets

Create a new JSS data grid from a remote public Google Sheets document. This example only works for public spreadsheets. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/sheets/dist/index.min.js"></script>

<div id='spreadsheet'></div>

<p><input type="text" value="https://docs.google.com/spreadsheets/d/16Es5bj0dSfPXDUsbDfdUc7Y5mHkIL8Skux5YJLOenV0" style="min-width: 320px" class="w100" /></p>

<input type='button' value='Import from Google Sheets' id="btn1">

<script>
// Defined your Google API configuration (You need more arguments to download private spreadsheets)
sheets({ apiKey: 'your-api-key' });
    // Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Add-on for Spreadsheet
jspreadsheet.setExtensions({ sheets });
// Root
let root = document.getElementById('spreadsheet');
// Event
document.getElementById("btn1").addEventListener('click', function(e) {
    let url = e.target.previousElementSibling.firstChild.value;
    jspreadsheet.sheets(url, {
        onload: function(title, config) {
            // Destroy any existing data grid
            jspreadsheet.destroy(root);
            // Create a new data grid from the import process
            jspreadsheet(root, config);
        }
    })
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import jspreadsheet from "jspreadsheet";
import sheets from "@jspreadsheet/sheets";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Add-on for your JSS data grid
jspreadsheet.setExtensions({ sheets });
// Defined your Google API configuration (You need more arguments to download private spreadsheets)
sheets({ apiKey: 'your-api-key' });

export default function App() {
    const input = useRef();
    const spreadsheet = useRef();

    const download = () => {
        console.log(input.current.value)
        jspreadsheet.sheets(input.current.value, {
            onload: function(title, config) {
                jspreadsheet(spreadsheet.current, config);
            }
        });
    }

    return (
        <>
            <div ref={spreadsheet}></div>
            <input ref={input} type="text"
                defaultValue="https://docs.google.com/spreadsheets/d/16Es5bj0dSfPXDUsbDfdUc7Y5mHkIL8Skux5YJLOenV0" />
            <input type="button" value="Import from Google Sheets" onClick={download} />
        </>
    );
}
```
```vue
<template>
    <div ref="spreadsheet"></div>
    <input ref="input" type="text" value="https://docs.google.com/spreadsheets/d/16Es5bj0dSfPXDUsbDfdUc7Y5mHkIL8Skux5YJLOenV0" />
    <input type="button" value="Import from Google Sheets" @click="convert" />
</template>

<script>
import { jspreadsheet } from "@jspreadsheet/vue";
import sheets from "@jspreadsheet/sheets";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Define the data grid license
jspreadsheet.setLicense('###license###');
// Define the data grid extensions
jspreadsheet.setLicense({ sheets });
// Defined your Google API configuration (You need more arguments to download private spreadsheets)
sheets({ apiKey: 'your-api-key' });

export default {
    methods: {
        convert() {
            // Spreadsheet instance
            jspreadsheet.sheets(this.$refs.input.current.value, {
                onload: function(title, config) {
                    jspreadsheet(this.$refs.spreadsheet.current, options);
                }
            });
        }
    },
    data() {
        const input = ref(null);
        const spreadsheet = ref(null);

        return {
            spreadsheet,
            input
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import sheets from "@jspreadsheet/sheets";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ sheets });

// Defined your Google API configuration (You need more arguments to download private spreadsheets)
sheets({ apiKey: 'your-api-key' });

@Component({
    standalone: true,
  selector: "app-root",
  template: `<div #spreadsheet></div>
    <input #input type="text" value="https://docs.google.com/spreadsheets/d/16Es5bj0dSfPXDUsbDfdUc7Y5mHkIL8Skux5YJLOenV0"/>
    <input type="button" value="Import from Google Sheets" (click)="import()" />`
})
export class AppComponent {
    @ViewChild("input") input: ElementRef;
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    import() {
        jspreadsheet.sheets(this.input.nativeElement.value, {
            onload: function(title, config) {
                // Destroy any existing data grid
                jspreadsheet.destroy(this.spreadsheet);
                // Create a new data grid from the import process
                jspreadsheet(this.spreadsheet, config);
            }
        });
    }
}
```
 
