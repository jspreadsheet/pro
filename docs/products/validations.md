title: Advanced Validation Management: Streamlined Control and Configuration for Data Validations
keywords: Jspreadsheet, Jexcel, javascript, payment calculator spreadsheet, grid, data grid, validations, spreadsheet validations, Advanced Validation Management Modal, validation control, data validation configuration, interactive spreadsheets, data management, JavaScript plugin, data grid plugin
description: Enhance data validation in JSS with an intuitive interface. Add, update, and delete validations directly on grid cells for improved data accuracy and integrity.

![Data Grid Validations](img/data-grid/validations.svg){.icon}

# Validations

The validations extension in Jspreadsheet enhances data integrity by allowing users to manage data validations within their spreadsheets. This interface supports adding, updating, and removing validation rules, ensuring data entries meet predefined criteria and maintaining consistency across the data grid.

## Documentation

For more information on how to set up the data grid with validations or to change them programmatically, please refer to the [Validations Documentation](/docs/validations).  

### Installation

Please choose one of the following options 

#### Using NPM



```bash
$ npm install @jspreadsheet/validations
```
 

#### Using a CDN


{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/validations/dist/index.min.js"></script>
```
  

## Examples

### Basic Data Grid Validations

You can define the data grid or spreadsheet validations during initialization or through programmatic methods. 

```html
<html>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />

<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/validations/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ validations });

// Create the spreadsheet
const spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: [
            [10,"=A1*2"],
            [20,"=A2*2"],
            [30,"=A3*2"],
            [40,"=A4*2"],
            [50,"=A5*2"]
        ],
        minDimensions: [7, 6],
    }],
    validations: [{
        range: 'Sheet1!A1:A6',
        action: "warning",
        criteria: "between",
        type: "number",
        allowBlank: false,
        value: [10, 30],
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import validations from "@jspreadsheet/validations";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@lemonadejs/studio/dist/style.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ validations })

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [10,"=A1*2"],
        [20,"=A2*2"],
        [30,"=A3*2"],
        [40,"=A4*2"],
        [50,"=A5*2"]
    ];
    // Validations
    const rules = [{
        range: 'Sheet1!A1:A6',
        action: "warning",
        criteria: "between",
        type: "number",
        allowBlank: false,
        value: [10, 30],
    }];

    // Render component
    return (
      <Spreadsheet ref={spreadsheet} validations={rules} toolbar={true}>
          <Worksheet data={data} />
      </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :validations="rules" :toolbar="true">
        <Worksheet :data="data" worksheetName="Sheet1" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import validations from "@jspreadsheet/validations";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@lemonadejs/studio/dist/style.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ validations })

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    setup() {
        // Data
        const data = [
            [10, "=A1*2"],
            [20, "=A2*2"],
            [30, "=A3*2"],
            [40, "=A4*2"],
            [50, "=A5*2"],
        ];
        // Validations
        const rules = [
            {
                range: "Sheet1!A1:A6",
                action: "warning",
                criteria: "between",
                type: "number",
                allowBlank: false,
                value: [10, 30],
            },
        ];

        // Return object
        return {
            data,
            rules
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import validations from "@jspreadsheet/validations";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@lemonadejs/studio/dist/style.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ validations });

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [{
                data: [
                    [10,"=A1*2"],
                    [20,"=A2*2"],
                    [30,"=A3*2"],
                    [40,"=A4*2"],
                    [50,"=A5*2"]
                ],
                minDimensions: [6, 6],
            }],
            validations: [{
                range: 'Sheet1!A1:A6',
                action: "warning",
                criteria: "between",
                type: "number",
                allowBlank: false,
                value: [10, 30],
                dropdown: true
            }]
        });
    }
}
```
 
