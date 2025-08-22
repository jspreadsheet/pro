title: Maximizing Performance in Jspreadsheet Data Grids
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, excel-like features, spreadsheet data, data tables, data persistence, data storage, frontend data saving, client-side storage, data retrieval, AJAX requests, server integration, persistent data storage, data security, client-server communication, data management, data persistence methods, saving and retrieving data
description: This section covers how to boost your Jspreadsheet Data Grid performance when working with big datasets, detailing the best setups for fast, smooth data management in larger applications.

# Data Grid Performance

This section delves into key considerations for enhancing the performance of your data grid when handling extensive datasets. 

## Overview

There are significant improvements and performance optimizations on our latest version. A smart management only creates
cell objects as needed making possible to create large datasets keeping the response on the navigation ultra smooth and fast.

### The One Billion Cells Data Grid

The following example will create a new empty spreadsheet with one billion cells [10000 columns x 100000 rows] 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p id="console"></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Initial time before creating the table
let s = Date.now();

// Create the table
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10000,100000],
        tableOverflow: true,
        tableWidth: '600px',
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
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Create a new data grid
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const console = useRef();


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
                <Worksheet tableOverflow={true} minDimensions={[10000, 100000]} tableWidth="800px" tableHeight="300px"/>
            </Spreadsheet>
            <div ref={console}></div>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet :license="license" id="spreadsheet" @onload="onload">
        <Worksheet
            tableOverflow
            tableWidth="800px"
            tableHeight="300px"
            :minDimensions="minDimensions"
        />
    </Spreadsheet>
    <div ref="console"></div>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        return {
            license: license,
            minDimensions: [100, 100], // Reduced size to avoid browser crash on stackblitz
            startTime: null,
        };
    },
    methods: {
        onload() {
            const endTime = Date.now();
            this.$refs.console.innerText = 'The table was created in: ' + (endTime - this.startTime) + 'ms';
        },
    },
    mounted() {
        this.startTime = Date.now();
    },
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from '@angular/core';
import jspreadsheet from 'jspreadsheet';

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense(
  '###license###'
);

// Initial time before creating the table
let s = Date.now();

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<div #spreadsheet></div><div id="console"></div>`,
})
export class AppComponent {
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  // Worksheets
  worksheets: jspreadsheet.worksheetInstance[];
  // Create a new data grid
  ngAfterViewInit() {
    // Create spreadsheet
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          minDimensions: [10000, 100000],
          tableOverflow: true,
          tableWidth: '800px',
          tableHeight: '300px',
        },
      ],
      onload: function () {
        // Final time
        let e = Date.now();
        // Update console
        let console = document.getElementById('console');
        if (console) {
          console.innerText = 'The table was created in: ' + (e - s) + 'ms';
        }
      },
    });
  }
}

```

## Smart Viewport Management

You can enable smart viewport management by pagination, setting table overflow, or activating full-screen mode.

### Table Overflow

Activate ` tableOverflow: true` to set the viewport's dimensions with tableWidth and tableHeight.

### Fullscreen Mode

The `fullscreen` mode adjusts the grid to display as many cells as possible, utilizing the available screen space.

### Pagination

The `pagination` limits the display to a set number of rows per page, enhancing performance for large datasets.

## Browser Limitations

While Jspreadsheet supports extensive spreadsheets, browser constraints on DOM element sizes may impact performance. For datasets exceeding 320K rows or if you encounter rendering issues, pagination is advised.