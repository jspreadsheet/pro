title: Jspreadsheet Advanced Search and Replace
keywords: Jspreadsheet, Jexcel, javascript, data grid, search and replace features, advanced search, advanced replace, data manipulation, spreadsheet solutions, data management, JavaScript plugin, efficient data editing, data grid plugin
description: Optimize your online spreadsheets with the addition of search and replace features. Simplify data editing and manipulation by effortlessly finding and replacing data in Jspreadsheet.

![Advanced Data Grid Search and Replace](img/data-grid/search-and-replace.svg){.icon}

# Advanced Search

Introducing the Advanced Search and Replace extension for JSS spreadsheets and data grids. This powerful extension enhances your data editing experience by incorporating search and replace functionality similar to other spreadsheet software. Seamlessly search for specific data patterns and efficiently replace them throughout your JSS spreadsheets and data grids, empowering you to modify and update your data with ease quickly. 

## Documentation

### Methods

| Method          | Description                                                                                                                                                                                                                                                                                                              |
| ----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| search(object?) | To open the search modal programmatically, you must specify the target worksheet instance or if no instance is provided, the function will use the currently active worksheet by default. However, an alert will be displayed to notify the user if no spreadsheet is in focus.<br/>`search(worksheet?: object) => void` |

 

### Events

| Event    | Description                                                                                                                     |
| ---------|---------------------------------------------------------------------------------------------------------------------------------|
| onsearch | After the search process is completed.<br/>`onbeforesearch(worksheet: Object, terms: String, rowNumber: Array, search: Object)` |

 

## Installation

Please choose one of the following options 

### Using NPM



```bash
$ npm install @jspreadsheet/search
```
 

### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/search/dist/index.min.js"></script>
```
 

## Examples

### Data Grid Search Extension

Click in the search icon in the toolbar to open the search and replace features. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />

<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/search/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<p><input type="button" value="Open Search Modal" id="btn1" /></p>

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ search });

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/tests/demo.csv',
        tableOverflow: true,
        tableWidth: '700px',
        tableHeight: '400px',
        columns: [
            { width: '80px' },
            { width: '200px' },
            { width: '100px' },
            { width: '200px' },
            { width: '100px' }
        ]
    }],
});

document.getElementById("btn1").onclick = () => search(worksheets[0])
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import studio from '@lemonadejs/studio';
import search from "@jspreadsheet/search";

import '@lemonadejs/studio/dist/style.css';
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";
import "@jsuites/css/dist/style.css";

// Set the license
const license = '###license###';

// Define the extensions
const extensions = { search };

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} extensions={extensions}>
                <Worksheet
                    minDimensions={[5, 5]}
                    csv={"/tests/demo.csv"}
                    tableWidth={"700px"}
                    tableHeight={"400px"}
                    tableOverflow
                />
            </Spreadsheet>
            <input type="button" value="Open search modal"
                onClick={() => search(spreadsheet.current[0])}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions" :worksheets="worksheets" />
    <input type="button" value="Open search modal" @click="modal" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import search from "@jspreadsheet/search";
import studio from '@lemonadejs/studio';

import '@lemonadejs/studio/dist/style.css';
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";
import "@jsuites/css/dist/style.css";

// Set the license
const license = '###license###';

// Extensions
const extensions = { search };

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        modal() {
            search(this.$refs.spreadsheet.current[0]);
        }
    },
    data() {
        const worksheets = [{
            csv: "/tests/demo.csv",
            tableOverflow: true,
            tableWidth: "700px",
            tableHeight: "400px",
        }]

        return {
            worksheets,
            license,
            search,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import search from "@jspreadsheet/search";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ search });

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
    <input type="button" value="Open search modal" onclick="search(this.worksheets[0])" />`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [10, 10],
                csv: "https://jspreadsheet.com/tests/demo.csv",
                tableOverflow: true,
                tableWidth: "700px",
                tableHeight: "400px",
            }]
        });
    }
}
```
 
