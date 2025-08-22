title: Jspreadsheet Version 10 Performance Overview
keywords: Jspreadsheet, Jexcel, JavaScript, Excel-like JavaScript plugin, JS spreadsheet, data grid, documentation, performance, spreadsheet benchmark
description: Discover the crucial aspects that impact your JSS data grid performance and learn how to maximize the efficiency of Jspreadsheet Pro.

# Data grid performance

This section will discuss what to consider for optimizing the data grid performance when working with large datasets. 

## What's new

Jspreadsheet version 10 introduces significant improvements and optimizations that enhance the performance and user experience of the application. One of the significant advancements is eliminating duplicate information and using global CSS classes for styling. This approach streamlines the code, making it more efficient and easier to manage. The new version includes a better navigation system that leverages the viewport to load only the data visible to the user. This feature enhances the user experience by creating a seamless and speedy performance while minimizing the application's resource utilization.  

### Smart viewport

You can activate the smarter viewport by enabling pagination, table overflow, or full-screen properties. Overall, the improvements and optimizations in Jspreadsheet version 10 provide users with a more efficient and smoother experience. 

#### tableOverflow: boolean

It defines the viewport width and height dimensions. 

#### fullscreen: boolean

This property is handy for rendering as many cells as possible to fit the screen. 

#### pagination: number

This property activates the pagination feature, which displays a fixed number of rows and creates a pagination bar..  

## Examples

### A data grid with 5 million cells

The following example will create a table from an array with 100 columns x 50000 rows (five million cells) 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>
<br/><div id="console"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Data
let data = [];

// Create the data
for (let j = 0; j < 50000; j++) {
    data[j] = [];
    for (let i = 0; i < 100; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

// Initial time before creating the table
let s = Date.now();

// Create the table
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        tableOverflow: true,
        tableWidth: '800px',
        tableHeight: '300px',
    }],
    onload: function() {
        // Final time 
        let e = Date.now();
        // Update console
        document.getElementById('console').innerText = 'The table was created in: ' + (e - s) + 'ms';
    }
})
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";

const license = '###license###';

// Create a new data grid
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const console = useRef();
    // Data
    const data = [];

    // Create the data
    for (let j = 0; j < 50000; j++) {
        data[j] = [];
        for (let i = 0; i < 100; i++) {
            data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
        }
    }

    // Initial time before creating the table
    let s = Date.now();

    // When the data grid is ready
    const onload = () => {
        // Final time
        let e = Date.now();
        // Update console
        console.current.innerText = 'The table was created in: ' + (e - s) + 'ms';
    };

    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} onload={onload}>
                <Worksheet data={data} tableOverflow={true} tableWidth="800px" tableHeight="300px"/>
            </Spreadsheet>
            <div ref={console}></div>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet :license="license">
        <Worksheet :data="data" tableOverflow tableWidth="800px" tableHeight="300px" />
    </Spreadsheet>
    <div ref="console"></div>
</template>

<script>
import { ref } from 'vue';
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";

const license = '###license###';

// Data
const data = [];

// Create the data
for (let j = 0; j < 1000; j++) {
    data[j] = [];
    for (let i = 0; i < 100; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

export default {
    components: {
        Spreadsheet,
        Worksheet
    },
    setup() {
        const log = ref(null);
        let s = Date.now();

        // When the data grid is ready
        const onload = () => {
            // Final time
            let e = Date.now();
            // Update console
            log.value.innerText = 'The table was created in: ' + (e - s) + 'ms';
        }

        return {
            license,
            data,
            onload,
            log,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Data
const data = [];

// Create the data
for (let j = 0; j < 50000; j++) {
    data[j] = [];
    for (let i = 0; i < 100; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

// Initial time before creating the table
let s = Date.now();

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div><div id="console"></div>`,
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
                 data: data,
                 tableOverflow: true,
                 tableWidth: '800px',
                 tableHeight: '300px',
             }],
             onload: function() {
                 // Final time
                 let e = Date.now();
                 // Update console
                 document.getElementById('console').innerText = 'The table was created in: ' + (e - s) + 'ms';
             }
        });
    }
}
```
 
