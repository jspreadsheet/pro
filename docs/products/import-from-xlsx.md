title: Create JSS Data Grids Directly from XLSX Files with JSS Parser
keywords: Jspreadsheet, Jexcel, javascript, import excel files, XLSX to JSS spreadsheet, JSS Parser, JavaScript plugin, data conversion, XLSX files, JSON format, spreadsheet import, spreadsheet to JSON, Excel to JSS data grid, data transformation, data management, spreadsheet solutions, data grid plugin
description: The JSS Parse extension enables smooth integration of XLSX files into JSS spreadsheets. Effortlessly create JSS spreadsheets by importing Excel data, facilitating seamless data management and organization.

![Import from XLSX](img/data-grid/import-from-xlsx.svg){.icon}

# Import from XLSX

The JSS parser is a JavaScript plugin that converts XLSX files to JSON format. It can be used as a standalone converter or to import XLSX files into the JSS data grid.  

## Documentation

### Settings

| Property              | Description                                                                                         |
|-----------------------|-----------------------------------------------------------------------------------------------------|
| url?: string          | Load the XSLX from a remote URL. Bear in mind any potential CORS restrictions using this property.  |
| locale?: string       | Define the decimal and thousand separator based on a locale.                                        |
| loadingSpin?: boolean | Enable loading spin. `Default: true`                                                                |
| parseHTML?: boolean   | Import embed cell style as HTML.                                                                    |
| file?: object         | load from a local file. This property is used along input type='file'                               |
| onload?: function     | When the file is loaded.                                                                            |
| onerror?: function    | Method to be called when something is wrong.                                                        |


## Installation

Please choose one of the following options 


### Using NPM

```bash
$ npm install @jspreadsheet/parser
```

### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/parser/dist/index.min.js"></script>
```
  

## Example

### Loading from your local computer

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/parser/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<input type="file" name="file" id='file' style='display:none'>

<p><input type='button' value='Load a XLSX file from my local computer' onclick="document.getElementById('file').click()"/></p>

<script>
// Set license
jspreadsheet.setLicense('###license###');
// Set extensions
jspreadsheet.setExtensions({ parser });
// Root
let root = document.getElementById('spreadsheet');
// Create the spreadsheet from a local file
let load = function(e) {
    // Parse XLSX file and create a new spreadsheet
    jspreadsheet.parser({
        file: e.target.files[0],
        // It would be used to updated the formats only
        locale: 'en-GB',
        onload: function(config) {
            jspreadsheet(root, config);
        },
        onerror: function(error) {
            alert(error);
        }
    });
}
document.getElementById("file").onchange = (e) => load(e)
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { jspreadsheet } from "@jspreadsheet/react";
import parser from "@jspreadsheet/parser";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense("###license###");

// Set extensions
jspreadsheet.setExtensions({ parser });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef(null);
    const inputRef = useRef(null);

    // Create the spreadsheet from a local file
    const load = function (e) {
        // Parse XLSX file and create a new spreadsheet
        jspreadsheet.parser({
            file: e.target.files[0],
            // It would be used to update the formats only
            locale: "en-GB",
            onload: function (config) {
                jspreadsheet(spreadsheet.current, config);
            },
            onerror: function (error) {
                alert(error);
            },
        });
    };

    // Render component
    return (
        <>
            <div ref={spreadsheet}></div>
            <input
                ref={inputRef}
                id="file"
                type="file"
                name="file"
                onChange={load}
                style={{ display: "none" }}
            />
            <input
                type="button"
                value="Load a XLSX file from my local computer"
                onClick={() => inputRef.current.click()}
            />
        </>
    );
}
```
```vue
<template>
  <div ref="spreadsheet"></div>
  <input
    type="file"
    name="file"
    ref="fileInput"
    @change="loadFile"
    style="display: none"
  />
  <input
    type="button"
    value="Load a XLSX file from my local computer"
    @click="triggerFileInput"
  />
</template>
  
<script>
import { jspreadsheet } from "@jspreadsheet/vue";
import parser from "@jspreadsheet/parser";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ parser });

export default {
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    loadFile(e) {
      const spreadsheetEl = this.$refs.spreadsheet;
      jspreadsheet.parser({
        file: e.target.files[0],
        locale: "en-GB",
        onload: function (config) {
          jspreadsheet(spreadsheetEl, config);
        },
        onerror: function (error) {
          alert(error);
        },
      });
    },
  },
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import parser from "@jspreadsheet/parser";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ parser });

@Component({
    standalone: true,
    selector: "app-root",
    template: `
    <div #spreadsheet></div>
    <input #file type="file" name="file" style="display:none" />
    <input type="button" value="Load a XLSX file from my local computer" (click)="openFile()" />
  `
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("file") file: ElementRef;

    ngAfterViewInit() {
        let spreadsheet = this.spreadsheet.nativeElement;
        // Add event to the file input
        this.file.nativeElement.onchange = function (e: any) {
            // Parse XLSX file and create a new spreadsheet
            jspreadsheet.parser!({
                file: e.target.files[0],
                locale: "en-GB",
                onload: function (config) {
                    jspreadsheet(spreadsheet, config);
                },
                onerror: function (error) {
                    alert(error);
                }
            });
        };
    }

    openFile() {
        this.file.nativeElement.click();
      }
}
```
 
### Loading from a API

{.ignore-execution}
```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/parser@5.1.6/dist/index.min.js"></script>

<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="jspreadsheet"></div>

<script>
// Set license
jspreadsheet.setLicense('###license###');
// Set extensions
jspreadsheet.setExtensions({ parser });

const afterChanges = (worksheet) => {
    // Get the updated data from the worksheet
    let data = worksheet.getData();
    // Do something when the user changes the data 
}

fetch('<xlsx_file_url>')
    .then(response => response.blob())
    .then(blob => {
        jspreadsheet.parser({
            file: blob,
            onload: function (config) {
                config.worksheets[0].tableOverflow = true;
                config.worksheets[0].tableHeight = '400px';
                config.worksheets[0].columns = [
                    { width: '80px' },
                    { width: '200px' },
                    { width: '100px' },
                    { width: '200px' },
                    { width: '100px' }
                ];
                // You can intercept the configuration and add JavaScript events
                config.afterChanges = afterChanges;
                // Create the spreadsheet
                jspreadsheet(document.getElementById("jspreadsheet"), config);
            },
            onerror: function(error) {
                alert('Erro ao carregar XLSX: ' + error);
            }
        });
});
</script>
</html>
```
```jsx
import React, { useRef, useEffect } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import parser from "@jspreadsheet/parser";
import { Client } from "./api/Client";

jspreadsheet.setLicense('###license###');
jspreadsheet.setExtensions({ parser });

export default function App() {
    const spreadsheet = useRef();

    const afterChanges = (worksheet) => {
        // Get the updated data from the worksheet
        let data = worksheet.getData();
        // Do something when the user changes the data 
    }

    useEffect(() => {
        const client = new Client('<xlsx_file_url>');
        client.samplefilebytes().then((response) => {
            const byteArray = Base64ToByteArray(response);
            const blob = new Blob([byteArray], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            // Jspreadsheet parser can receive a blob to extract the configuration, them create the spreadsheet
            jspreadsheet.parser({
                file: blob,
                onload: function (config) {
                    // You can intercept the configuration and add JavaScript events
                    config.afterChanges = afterChanges;
                    // Create the spreadsheet
                    jspreadsheet(spreadsheet, config);
                },
            });
        });
    })

    return <div ref={spreadsheet}/>;
}
```
```vue
<template>
    <div ref="root"></div>
</template>

<script>
import { jspreadsheet } from "@jspreadsheet/vue";
import parser from "@jspreadsheet/parser"

// Define the grid license
jspreadsheet.setLicense('###license###');

// Define the grid extensions
jspreadsheet.setExtensions({ parser });

const afterChanges = (worksheet) => {
    // Get the updated data from the worksheet
    let data = worksheet.getData();
    // Do something when the user changes the data 
}

export default {
    mounted() {
        fetch('<xlsx_file_url>')
            .then(response => response.blob())
            .then(blob => {
                jspreadsheet.parser({
                    file: blob,
                    onload: function (config) {
                        // You can intercept the configuration and add JavaScript events
                        config.afterChanges = afterChanges;
                        // Create the spreadsheet
                        jspreadsheet(this.$refs.root, config);
                    },
                });
            })
    },
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import parser from "@jspreadsheet/parser";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ parser });

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        const afterChanges = (worksheet) => {
            // Get the updated data from the worksheet
            let data = worksheet.getData();
            // Do something when the user changes the data 
        }
        
        fetch('<xlsx_file_url>')
            .then(response => response.blob())
            .then(blob => {
                let root = this.spreadsheet.nativeElement;

                jspreadsheet.parser({
                    file: blob,
                    onload: function (config) {
                        // You can intercept the configuration and add JavaScript events
                        config.afterChanges = afterChanges;
                        // Create the spreadsheet
                        jspreadsheet(root, config);
                    },
                });
        });
    }
}
```

### Customize import

This example demonstrates how to use the `jspreadsheet.parser` to load an Excel file and customize its properties before creating a spreadsheet. By tweaking the extracted config, you can tailor features like layout or behavior and save the instance for further programmatic control, empowering flexible spreadsheet creation.

{.ignore}
```javascript
// Root
let root = document.getElementById('spreadsheet');
// Instance of the spreadsheet
let instance = null;
// Create the spreadsheet from a local file
let load = function(e) {
    // Parse XLSX file and create a new spreadsheet
    jspreadsheet.parser({
        file: e.target.files[0],
        onload: function(config) {
            // Customize the extract configuration from the XLSX file
            config.worksheets[0].tableOverflow = true;
            config.worksheets[0].tableWidth = '400px';
            config.onchange = (worksheet, cell, value) => {
                // Add a change event to my new spreadsheet
            }
            // Create a new spreadsheet
            instance = jspreadsheet(root, config);
        }
    });
}

let clone = function() {
    // Save config to your database
    let config = JSON.stringify(instance[0].parent.getConfig());
}
```

### Backend Import

From version Jspreadsheet version 11 you can generate XLSX files on your backend as the example below. 

{.ignore}
```javascript
const { readFile } = require('node:fs/promises');
const jspreadsheet = require('jspreadsheet');
const formula = require('@jspreadsheet/formula-pro');
const parser = require('@jspreadsheet/parser');
const { JSDOM } = require("jsdom");

// DOMParser is mandatory to run the parser in the backend
global.DOMParser = new JSDOM().window.DOMParser;

// Defined the license
jspreadsheet.setLicense({
    clientId: 'your-client-id',
    licenseKey: '###license###'
});

// Parser and formula
jspreadsheet.setExtensions({ formula, parser });

(async () => {
    const file = await readFile('./list.xlsx'); // Your local XLSX file

    jspreadsheet.parser({
        file: file,
        onload: function(result) {
            // Create a virtual instance
            let test = jspreadsheet(null, result);
            // Get the data calculated
            console.log(test[0].getData(null, true));
        }
    });
})();
```