title: Custom Excel-Like Formulas
keywords: Jspreadsheet, javascript, plugins, spreadsheet, custom formulas, javascript formulas, Excel-like formulas, spreadsheet-like formulas, formula customization
description: Explore this example to learn how to create custom JavaScript formulas in Jspreadsheet, enhancing the functionality of your spreadsheets. Develop Excel-like formulas using JavaScript for advanced calculations and data manipulation tailored to your needs.

# Custom formulas

Harness the full potential of Jspreadsheet by creating custom formulas that replicate the behavior of traditional spreadsheets. With JSS, you can leverage the power of this feature to return not only strings and numbers but also complex DOM elements that can be used to build rich user interfaces. The methods called by the formulas receive as parameters the coordinates of the cells involved and the worksheet instance, providing a wide range of possibilities for conditional operations and advanced data manipulation. 

> **Requirements**  This feature available with the [Formula Pro](/products/formulas) extension. 

## Special properties

When defining a custom Excel-like formula in Jspreadsheet, the `this` object provides access to three special properties that contain information about the cell where the formula was invoked and the worksheet instance that contains the cell. 

### Example

How to use of cell coordinates and worksheet instances for conditional operations inside excel-like custom methods. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the formula pro extension
jspreadsheet.setExtensions({ formula });

// Create a custom javascript method (capital case)
const SUMCOL = function () {
    // Update formula chain when a new row is added
    this.instance.setTracking.call(this, true);
    // Total
    let total = 0;
    // Sum all values in the column from zero to the row number
    for (let j = 0; j < this.y; j++) {
        total += parseInt(this.instance.options.data[j][this.x]) || 0;
        // Formula chain
        if (typeof(this.instance.records[j][this.x].chain) === 'undefined') {
            this.instance.records[j][this.x].chain = new Map;
        }
        // Keep reference in the formula
        this.instance.records[j][this.x].chain.set(this.instance.records[this.y][this.x], this.instance);
    }

    return total;
}

// Send custom formula to the correct scope
formula.setFormula({ SUMCOL })

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'Apple', 931 ],
            [ 'Google', 431 ],
            [ 'Amazon', 534 ],
            [ 'Total', '=SUMCOL()' ],
        ],
        minDimensions: [8,4],
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Extensions
const extensions = { formula };

// Create a custom javascript method (capital case)
const SUMCOL = function () {
    // Update formula chain when a new row is added
    this.instance.setTracking.call(this, true);
    // Total
    let total = 0;
    // Sum all values in the column from zero to the row number
    for (let j = 0; j < this.y; j++) {
        total += parseInt(this.instance.options.data[j][this.x]) || 0;
        // Formula chain
        if (typeof(this.instance.records[j][this.x].chain) === 'undefined') {
            this.instance.records[j][this.x].chain = new Map;
        }
        // Keep reference in the formula
        this.instance.records[j][this.x].chain.set(this.instance.records[this.y][this.x], this.instance);
    }

    return total;
}

// Send custom formula to the correct scope
formula.setFormula({ SUMCOL })

// Create the component
export default function App() {
    // Array with all the data grids
    const spreadsheet = useRef();
    // Data
    const data = [
        [ 'Apple', 931 ],
        [ 'Google', 431 ],
        [ 'Amazon', 534 ],
        [ 'Total', '=SUMCOL()' ],
    ]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} extensions={extensions}>
            <Worksheet data={data} minDimensions={[8,4]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";

// Add here your data grid license
const license = '###license###';

// Extensions
const extensions = { formula };

// Create a custom javascript method (capital case)
const SUMCOL = function () {
    // Update formula chain when a new row is added
    this.instance.setTracking.call(this, true);
    // Total
    let total = 0;
    // Sum all values in the column from zero to the row number
    for (let j = 0; j < this.y; j++) {
        total += parseInt(this.instance.options.data[j][this.x]) || 0;
        // Formula chain
        if (typeof(this.instance.records[j][this.x].chain) === 'undefined') {
            this.instance.records[j][this.x].chain = new Map;
        }
        // Keep reference in the formula
        this.instance.records[j][this.x].chain.set(this.instance.records[this.y][this.x], this.instance);
    }

    return total;
}

// Send custom formula to the correct scope
formula.setFormula({ SUMCOL })

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ 'Apple', 931 ],
            [ 'Google', 431 ],
            [ 'Amazon', 534 ],
            [ 'Total', '=SUMCOL()' ],
        ];

        return {
            data,
            license,
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set extensions
jspreadsheet.setExtensions({ formula });

// Create a custom javascript method (capital case)
const SUMCOL = function () {
    // Total
    let total = 0;
    // Sum all values in the column up to where the formula was called.
    for (let j = 0; j < this.y; j++) {
        total += parseInt(this.instance.options.data[j][this.x]) || 0;
        // Formula chain
        if (typeof(this.instance.records[j][this.x].chain) === 'undefined') {
            this.instance.records[j][this.x].chain = new Map;
        }
        // Keep reference in the formula
        this.instance.records[j][this.x].chain.set(this.instance.records[this.y][this.x], this.instance);
    }

    return total;
}

// Send custom formula to the correct scope
formula.setFormula({ SUMCOL })

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`;
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        [ 'Apple', 931 ],
                        [ 'Google', 431 ],
                        [ 'Amazon', 534 ],
                        [ 'Total', '=SUMCOL()' ],
                    ],
                    minDimensions: [8,4],
                }
            ]
        });
    }
}
```

## DOM Elements

The cells accept a DOM element returned from a formula, as below: 


```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a custom javascript method (capital case)
const COLORIZE = function(v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

// Set extensions
jspreadsheet.setExtensions({ formula });

// Create spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'red', '=COLORIZE(A1)' ],
            [ 'green', '=COLORIZE(A2)' ],
            [ 'blue', '=COLORIZE(A3)' ],
        ],
        columns: [
            { type: 'text', width:'300' },
            { type: 'text', width:'200' },
        ]
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Create a custom javascript method (capital case)
const COLORIZE = function(v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

// Extensions
const extensions = { formula };

// Create the component
export default function App() {
    // Array with all the data grids
    const spreadsheet = useRef();
    // Data
    const data = [
        [ 'red', '=COLORIZE(A1)' ],
        [ 'green', '=COLORIZE(A2)' ],
        [ 'blue', '=COLORIZE(A3)' ],
    ]
    const columns = [
        { type: 'text', width:'300px' },
        { type: 'text', width:'200px' },
    ]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} extensions={extensions}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Create a custom javascript method (capital case)
const COLORIZE = function(v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

// Extensions
const extensions = { formula };

// Create data grid component
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ 'red', '=COLORIZE(A1)' ],
            [ 'green', '=COLORIZE(A2)' ],
            [ 'blue', '=COLORIZE(A3)' ],
        ];
        const columns = [
            { type: 'text', width:'300px' },
            { type: 'text', width:'200px' },
        ];

        return {
            data,
            columns,
            license,
            extensions,
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a custom javascript method (capital case)
const COLORIZE = (v) => {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

// Set extensions
jspreadsheet.setExtensions({ formula });

// Create the data grid component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`;
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
                data: [
                    [ 'red', '=COLORIZE(A1)' ],
                    [ 'green', '=COLORIZE(A2)' ],
                    [ 'blue', '=COLORIZE(A3)' ],
                ],
                columns: [
                    { type: 'text', width:'300' },
                    { type: 'text', width:'200' },
                ]
            }]
        });
    }
}
```
 
