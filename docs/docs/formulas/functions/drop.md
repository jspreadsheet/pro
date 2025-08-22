title: DROP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DROP function in Jspreadsheet

# DROP function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `DROP` function is used to eliminate a certain number of rows and columns from an array. This function starts the removal process from the top-left corner of the array. For instance, if you want to remove 2 rows and 1 column from your array, the `DROP` function will eliminate these from the top and left side respectively. This function is particularly useful for simplifying arrays or focusing on specific data within them.

## Documentation

The DROP function removes a specified number of rows and columns from a given array, starting from the top-left corner.

### Category

Lookup and reference

### Syntax

DROP(array, rows, [columns])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array from which you want to remove rows and columns. |
| `rows` | The number of rows to remove from the array. |
| `columns` | The number of columns to remove from the array. This parameter is optional. |


I'm sorry for the confusion, but there doesn't seem to be a 'DROP' function in spreadsheets like Excel, Google Sheets, or similar spreadsheet software. These spreadsheet software typically have functions like 'DROPDOWN' for creating dropdown menus or 'VLOOKUP', 'HLOOKUP' for data lookup, etc. 

If you're referring to a different function or a function from a specific spreadsheet software, could you please provide more details?

### Usage

A few examples using the DROP function.

```
DROP(A1:D5, 2, 1) removes 2 rows and 1 column from the array A1:D5  
```

### Interactive Spreadsheet Demo

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
  worksheets: [{
    data: [
    [
        "Product",
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Laptops",
        100,
        120,
        110,
        130
    ],
    [
        "Tablets",
        80,
        90,
        85,
        95
    ],
    [
        "Phones",
        150,
        160,
        140,
        170
    ],
    [
        "Monitors",
        60,
        70,
        65,
        75
    ],
    [],
    [
        "Filtered Data:",
        "=DROP(A1:E5,2,1)"
    ]
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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Worksheet data
    const data = [
    [
        "Product",
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Laptops",
        100,
        120,
        110,
        130
    ],
    [
        "Tablets",
        80,
        90,
        85,
        95
    ],
    [
        "Phones",
        150,
        160,
        140,
        170
    ],
    [
        "Monitors",
        60,
        70,
        65,
        75
    ],
    [],
    [
        "Filtered Data:",
        "=DROP(A1:E5,2,1)"
    ]
];

    // Render component
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
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import formula from "@jspreadsheet/formula-pro";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Worksheet data
        const data = [
    [
        "Product",
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Laptops",
        100,
        120,
        110,
        130
    ],
    [
        "Tablets",
        80,
        90,
        85,
        95
    ],
    [
        "Phones",
        150,
        160,
        140,
        170
    ],
    [
        "Monitors",
        60,
        70,
        65,
        75
    ],
    [],
    [
        "Filtered Data:",
        "=DROP(A1:E5,2,1)"
    ]
]

        return {
            data
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import * as formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

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
            worksheets: [{
                data: [
    [
        "Product",
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Laptops",
        100,
        120,
        110,
        130
    ],
    [
        "Tablets",
        80,
        90,
        85,
        95
    ],
    [
        "Phones",
        150,
        160,
        140,
        170
    ],
    [
        "Monitors",
        60,
        70,
        65,
        75
    ],
    [],
    [
        "Filtered Data:",
        "=DROP(A1:E5,2,1)"
    ]
]
            }]
        });
    }
}
```

