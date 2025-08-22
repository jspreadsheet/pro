title: Create JavaScript Custom Excel-Like Formulas
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like formulas, formulas, calculations, spreadsheet calculations, spreadsheet formulas, spreadsheet-like formulas, Excel formulas, Google Sheet formulas, event handling, customizations, internationalization
description: Create JavaScript Custom Excel-like formulas and run those directly in your Jspreadsheet Data Grid applications.

# Custom Excel-like Formulas

Jspreadsheet enables developers to create custom Excel-like formulas and methods. These methods can interact with APIs and return specific outputs, such as content or DOM elements for cells, facilitating the creation of dynamic and interactive applications within spreadsheets.

> **IMPORTANT** : All method names should be created using capital letters.

## Documentation

Related methods, object and attributes. 

| Method                         | Description                                                                                                                                                                            |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| worksheet.setTracking          | This method, part of the worksheet instance, adds a cell to a monitored list that automatically updates whenever the worksheet's structure changes, such as inserting rows or columns. |
| worksheets.records[y][x]       | Cell object, this object is created when is in use.                                                                                                                                    |
| worksheets.records[y][x].chain | Object that keeps a reference to all cells that need to be updated when a cell changes.                                                                                                |


### Formula Scope Object

In Jspreadsheet Pro, invoking a method from a cell provides access to that cell's coordinates via `this.x`, `this.y` and the worksheet instance using `this.instance`. This allows developers to create rich functions to connect to external APIs or perform custom operations within the worksheet.

{.ignore}
```javascript
let COORDS = function() {
    // Return the coordinates to the cell
    return this.x + ',' + this.y;
}
```

### Declare the Methods

To utilize a custom method in your spreadsheets, declare it using `formula.setFormulas` as below.

{.ignore}
```javascript
formula.setFormulas({ COORDS });
```

## Examples

### Using DOM elements 

Create a custom method to return a DOM element to the cell.

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

// Create a custom javascript method (capital case)
const COLORIZE = function(v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

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
import React, {useRef} from "react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Create a custom javascript method (capital case)
const COLORIZE = function (v) {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({COLORIZE})

// Extensions
const extensions = {formula};

// Create the component
export default function App() {
    // Array with all the data grids
    const spreadsheet = useRef();
    // Data
    const data = [
        ['red', '=COLORIZE(A1)'],
        ['green', '=COLORIZE(A2)'],
        ['blue', '=COLORIZE(A3)'],
    ]
    const columns = [
        {type: 'text', width: '300px'},
        {type: 'text', width: '200px'},
    ]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} extensions={extensions}>
            <Worksheet data={data} columns={columns}/>
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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
        ]
        const columns = [
            { type: 'text', width:'300px' },
            { type: 'text', width:'200px' },
        ]

        return {
            extensions,
            data,
            columns,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ formula })

// Create a custom javascript method (capital case)
const COLORIZE = (v: string) => {
    let d = document.createElement('span');
    d.style.color = v;
    d.innerText = v.toUpperCase();
    return d;
}

// Send custom formula to the correct scope
formula.setFormula({ COLORIZE })

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
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    [ 'red', '=COLORIZE(A1)' ],
                    [ 'green', '=COLORIZE(A2)' ],
                    [ 'blue', '=COLORIZE(A3)' ],
                ],
                columns: [
                    { type: 'text', width: 300  },
                    { type: 'text', width: 200  },
                ]
            }]
        });
    }
}
```


### Formula Chain

In this example, a custom formula calculates the sum of all values in the same column above the cell where the formula is applied. Since the formula itself doesn't reference other cells, a manual chain of dependencies is created to ensure that changes in the column values are dynamically updated in the calculation.

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

// Create a custom javascript method (capital case)
const SUMCOL = function () {
    // Update formula chain when a new row is added
    this.instance.setTracking.call(this, true);
    // Get the column data
    let data = this.instance.getColumnData(this.x);
    // Total
    let total = 0;
    // Sum all values in the column from zero to the row number
    for (let y = 0; y < this.y; y++) {
        // Get the cell object
        let cell = this.instance.getCellObject(this.x, y);
        // Total
        total += parseInt(data[y]);
        // Formula chain
        if (typeof(cell.chain) === 'undefined') {
            cell.chain = new Map;
        }
        // Keep reference in the formula
        cell.chain.set(this.instance.records[this.y][this.x], this.instance);
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
        minDimensions: [6,4],
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

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ formula });

// Create a custom javascript method (capital case)
const SUMCOL = function () {
    // Update formula chain when a new row is added
    this.instance.setTracking.call(this, true);
    // Get the column data
    let data = this.instance.getColumnData(this.x);
    // Total
    let total = 0;
    // Sum all values in the column from zero to the row number
    for (let y = 0; y < this.y; y++) {
        // Get the cell object
        let cell = this.instance.getCellObject(this.x, y);
        // Total
        total += parseInt(data[y]);
        // Formula chain
        if (typeof(cell.chain) === 'undefined') {
            cell.chain = new Map;
        }
        // Keep reference in the formula
        cell.chain.set(this.instance.records[this.y][this.x], this.instance);
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
        <Spreadsheet ref={spreadsheet}>
            <Worksheet data={data} />
        </Spreadsheet>
    );
}
```
```vue
<template>
  <Spreadsheet ref="spreadsheet">
    <Worksheet :data="data" />
  </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from '@jspreadsheet/vue';
import formula from '@jspreadsheet/formula-pro';
import 'jsuites/dist/jsuites.css';
import 'jspreadsheet/dist/jspreadsheet.css';

// Add here your data grid license
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ formula });

// Create a custom javascript method (capital case)
const SUMCOL = function () {
  // Update formula chain when a new row is added
  this.instance.setTracking.call(this, true);
  // Get the column data
  let data = this.instance.getColumnData(this.x);
  // Total
  let total = 0;
  // Sum all values in the column from zero to the row number
  for (let y = 0; y < this.y; y++) {
    // Get the cell object
    let cell = this.instance.getCellObject(this.x, y);
    // Total
    total += parseInt(data[y]);
    // Formula chain
    if (typeof cell.chain === 'undefined') {
      cell.chain = new Map();
    }
    // Keep reference in the formula
    cell.chain.set(this.instance.records[this.y][this.x], this.instance);
  }

  return total;
};

// Send custom formula to the correct scope
formula.setFormula({ SUMCOL });

export default {
  components: {
    Spreadsheet,
    Worksheet,
  },
  data() {
    // Data
    const data = [
      ['Apple', 931],
      ['Google', 431],
      ['Amazon', 534],
      ['Total', '=SUMCOL()'],
    ];

    return {
      data,
    };
  },
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set extensions
jspreadsheet.setExtensions({ formula });

// Create a custom javascript method (capital case)
const SUMCOL = function (this: any) {
    // Update formula chain when a new row is added
    this.instance.setTracking.call(this, true);
    // Get the column data
    let data = this.instance.getColumnData(this.x);
    // Total
    let total = 0;
    // Sum all values in the column from zero to the row number
    for (let y = 0; y < this.y; y++) {
        // Get the cell object
        let cell = this.instance.getCellObject(this.x, y);
        // Total
        total += parseInt(data[y]);
        // Formula chain
        if (typeof(cell.chain) === 'undefined') {
            cell.chain = new Map;
        }
        // Keep reference in the formula
        cell.chain.set(this.instance.records[this.y][this.x], this.instance);
    }

    return total;
}

// Send custom formula to the correct scope
formula.setFormula({ SUMCOL })

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
                    minDimensions: [6,4],
                }
            ]
        });
    }
}
```
