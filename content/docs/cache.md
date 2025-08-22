title: Data Grid Cell Cache
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like features, spreadsheet, data table, cell comments, cell comments methods, cell comments events, cell comments settings
description: The cache feature stores a processed value, accelerating the loading time of a new spreadsheet.

# Data Grid Cell Caching

## Overview

The cache feature allows a formula's result to be stored, accelerating the loading time of a new spreadsheet. 

## Documentation

### Methods

The following methods can be used to get or set comments in one or multiple data grid cells.

| Method   | Description                                                                                                                                                                                                                                            |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getCache | Get the cache for a cell. <br/>`worksheetInstance.getCache(cellName: String)`                                                                                                                                                                          |
| setCache | Set the cache for one or more cells. <br/>@param {string\|object} cellName - Identification of a cell or an object with multiple definitions <br/>@param {string?} value <br/>`worksheetInstance.setCache(cellName: String \| object, value?: String)` |
 


### Initial Settings

The following properties are available through the initialization of the online spreadsheet.

| Property      | Description                                                                         |
|---------------|-------------------------------------------------------------------------------------|
| cache: object | Object with the initial cache values. Example: `{ A1: 'test', B1: 'another test' }` |

 

## Examples

### Loading formula values from cache 

To optimize formula value caching in Jspreadsheet, initialize the spreadsheet with the configuration set to use cached data for formulas. This approach speeds up the loading of pre-calculated values, improving performance and user experience, particularly in data-heavy scenarios.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
        data: [
            [10,'=SUM(A1)*10'],
        ],
        cache: { B1: 100 },
    }],
});
</script>
</html>
```

```jsx
import React, {useRef, useEffect} from "react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";
import * as formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";


// Set the license
jspreadsheet.setLicense('###license###');

// Create the component
export default function App() {

    const spreadsheet = useRef();

    const data = [
        [10, '=SUM(A1)*10'],
    ]

    // Create spreadsheets
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet data={data} minDimensions={[6, 6]} cache={{B1: 100}}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" :minDimensions="[6, 6]" :cache="cache" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
jspreadsheet.setLicense('###license###');

// Create components
export default {
    components: {
        Spreadsheet, 
        Worksheet
    },
    data() {

        const data = [
            [10,'=SUM(A1)*10'],
        ]

        const cache = {
            B1: 100
        }

        return {
            data,
            cache
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the data grid component
@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
    `,
})
export class AppComponent {
    @ViewChild('spreadsheet') spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [6,6],
                data: [
                    [10,'=SUM(A1)*10'],
                ],
                cache: { B1: 100 },
            }],
        });
    }
}
```
