title: Using External Values in the Spreadsheet Calculations
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom formulas, javascript formulas, Excel-like formulas, spreadsheet-like formulas, external values, variables in calculations, dynamic calculations
description: Learn how to utilize external values or variables in Jspreadsheet calculations, empowering you to create dynamic and flexible spreadsheet formulas.

# External variables

How to inject external variable values on your data grid calculations. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the formula pro extension
jspreadsheet.setExtensions({ formula });

// Define custom variables to be use in the calculations
formula.define({ QTY: 10, MAX: 20, HELLO: '"Dealing with strings"' })

// Create spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        columns: [{}, {}, { width: '200px' }],
        data: [
            [ 'Test', '=QTY*MAX', '=HELLO' ],
        ],
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
jspreadsheet.setLicense('###license###');

// Load the extensions
jspreadsheet.setExtensions({ formula })

// Define custom variables to be use in the calculations
formula.define({ QTY: 10, MAX: 20, HELLO: '"Dealing with strings"' })

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [ 'Test', '=QTY*MAX', '=HELLO' ],
    ];
    // Columns
    const columns = [{}, {}, { width: '200px' }];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
jspreadsheet.setLicense('###license###');

// Load the extensions
jspreadsheet.setExtensions({ formula })

// Define custom variables to be use in the calculations
formula.define({ QTY: 10, MAX: 20, HELLO: '"Dealing with strings"' })

// Create components
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ 'Test', '=QTY*MAX', '=HELLO' ],
        ];
        // Columns
        const columns = [{}, {}, { width: '200px' }];

        return {
            data,
            columns
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";

// Set the license
jspreadsheet.setLicense('###license###');

// Load the extensions
jspreadsheet.setExtensions({ formula })

// Define custom variables to be use in the calculations
formula.define({ QTY: 10, MAX: 20, HELLO: '"Dealing with strings"' })

// Create the data grid component
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
        // Create summary spreadsheet
        jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                columns: [{}, {}, { width: '200px' }],
                data: [
                    [ 'Test', '=QTY*MAX', '=HELLO' ],
                ],
            }]
        });
    }
}
```
 
