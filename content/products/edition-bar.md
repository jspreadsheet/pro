title: Spreadsheet Edition Bar Extension
keywords: Jspreadsheet, edition bar extension, JavaScript spreadsheet enhancements, data grid input bar, spreadsheet editing tools
description: The edition bar extension for Jspreadsheet adds an Excel-like editable input bar above the worksheets, enhancing data manipulation. This section guides you through the installation and integration process for your spreadsheets.

{.icon}
![Spreadsheet-like Edition Bar](img/data-grid/bar.svg){.icon}

# Edition Bar

The Data Grid Edition Bar is a data input component designed for editing cell content and managing named ranges in spreadsheets. It incorporates a variable selector and offers auto-suggestions, complete with formula documentation, to enhance user efficiency and accuracy in data manipulation. 

## Highlights

- Manages spreadsheet names;
- Edits cell values and formulas;
- Auto-completes formula names;
- Supports cross-worksheet editing;
- Creates Excel-like names and ranges with HTML elements;

## Documentation

### Settings

| Method                         | Description                                |
|--------------------------------|--------------------------------------------|
| suggestions: boolean \| string | Enabled formula suggestion. Default: false |



### Installation

Please choose one of the following options **Using NPM** 

```bash
$ npm install @jspreadsheet/bar
```

#### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/bar/dist/index.min.js"></script>
```

### Dependencies

This extension requires LemonadeJS and @jSuites/css libraries. 

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/bar/dist/style.min.css" />
```

## Examples

### Data grid with spreadsheet controls

The following example integrates the edition bar with Jspreadsheet to include a excel-like edition bar on top of the worksheets. 

```html
<html>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/bar/dist/style.min.css" />

<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/bar/dist/index.min.js"></script>

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.license = '###license###';
// Add-on for Jspreadsheet
jspreadsheet.setExtensions({ bar });
// Allow suggestions
jspreadsheet.bar({ suggestions: true });
// Create the spreadsheets
let grid = jspreadsheet(document.getElementById('spreadsheet'), {
    bar: true,
    tabs: true,
    toolbar: true,
    worksheets: [
        { minDimensions: [6, 8] },
        { minDimensions: [6, 8] },
    ],
});
</script>
</html>
```
```jsx
import React, { useRef, useState } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import bar from "@jspreadsheet/bar";

// CSS dependencies
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@jspreadsheet/bar/dist/style.css";

// Set the global license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ bar });

// Allow suggestions
jspreadsheet.bar({ suggestions: true });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} bar="true" tabs="true" toolbar="true">
            <Worksheet />
            <Worksheet />
        </Spreadsheet>
    );
}
```
```vue
<template>
  <Spreadsheet ref="spreadsheet" :bar="true" :tabs="true" :toolbar="true">
    <Worksheet :minDimensions="[10, 10]" />
    <Worksheet :minDimensions="[10, 10]" />
  </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import bar from "@jspreadsheet/bar";


// CSS dependencies
import "@jspreadsheet/bar/dist/style.css";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the global license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ bar });

// Allow suggestions
jspreadsheet.bar({ suggestions: true });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import bar from "@jspreadsheet/bar";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ bar });

@Component({
    standalone: true,
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
            bar: true,
            tabs: true,
            toolbar: true,
            worksheets: [
                {
                    minDimensions: [10, 10],
                }
            ]
        });
    }
}
```
 
