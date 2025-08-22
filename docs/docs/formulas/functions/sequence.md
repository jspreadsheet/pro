title: SEQUENCE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SEQUENCE function in Jspreadsheet

# SEQUENCE function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `SEQUENCE` function is used to generate a series of sequential numbers according to specified parameters. It allows you to determine the length of this array, meaning you choose how many numbers you want in the sequence. It also lets you set the step value, which refers to the difference between each consecutive number in the series. This function can be very useful when you need to create a list of numbers in a specific pattern.

## Documentation

Returns an array of sequential numbers with a given length and step value.

### Category

Math and trigonometry

### Syntax

SEQUENCE(rows, [columns], [start], [step])

| Parameter | Description |
| ----------- | ------------- |
| `rows` | The number of rows to return. |
| `[columns]` | Optional. The number of columns to return. Default is 1. |
| `[start]` | Optional. The starting value for the sequence. Default is 1. |
| `[step]` | Optional. The increment between each value in the sequence. Default is 1. |


### Behavior

The `SEQUENCE` function in spreadsheets is used to generate a list or grid of sequential numbers. It can be used to create an array of numbers with a defined number of rows and columns, and starting from a specific number. 

1. If the function is given arguments that are not numbers, it will return an error.
2. Empty cells are treated as zero.
3. Texts are treated as zero unless they can be interpreted as numbers.
4. Booleans are treated as numbers - `TRUE` as 1 and `FALSE` as 0.
5. The function will return an error if the provided number of rows or columns is less than 1.

### Common Errors

| Error | Description |
| ---- | ---- |
| #VALUE! | This error occurs when the function is given arguments that are not numbers. |
| #NUM! | This error is returned when the number of rows or columns provided is less than 1 or if the start or step size is negative when it should be positive. |
| #N/A | This error is returned when the function cannot find a value in the sequence. |

### Best practices

> 1. Always make sure that the arguments given to the `SEQUENCE` function are numeric.
> 2. Ensure the number of rows and columns provided is 1 or more.
> 3. Use positive values for the 'start' and 'step' arguments unless you want the sequence to decrease.
> 4. `SEQUENCE` function can be used with other functions like `ARRAYFORMULA` to create dynamic ranges which can be useful in many scenarios.

### Usage

A few examples using the SEQUENCE function.

```
SEQUENCE(5) returns [[1],[2],[3],[4],[5]]  
SEQUENCE(3,2,-1,0.5) returns [[-1, -0.5], [0, 0.5], [1, 1.5]]  
SEQUENCE(4,1,10) returns [[10], [11], [12], [13]]  
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
        "Rows",
        "Columns",
        "Start",
        "Step",
        "Generated Sequence"
    ],
    [
        5,
        1,
        1,
        1,
        "=SEQUENCE(A2,B2,C2,D2)"
    ],
    [
        3,
        2,
        10,
        5,
        "=SEQUENCE(A3,B3,C3,D3)"
    ],
    [
        4,
        1,
        0,
        2,
        "=SEQUENCE(A4,B4,C4,D4)"
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
        "Rows",
        "Columns",
        "Start",
        "Step",
        "Generated Sequence"
    ],
    [
        5,
        1,
        1,
        1,
        "=SEQUENCE(A2,B2,C2,D2)"
    ],
    [
        3,
        2,
        10,
        5,
        "=SEQUENCE(A3,B3,C3,D3)"
    ],
    [
        4,
        1,
        0,
        2,
        "=SEQUENCE(A4,B4,C4,D4)"
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
        "Rows",
        "Columns",
        "Start",
        "Step",
        "Generated Sequence"
    ],
    [
        5,
        1,
        1,
        1,
        "=SEQUENCE(A2,B2,C2,D2)"
    ],
    [
        3,
        2,
        10,
        5,
        "=SEQUENCE(A3,B3,C3,D3)"
    ],
    [
        4,
        1,
        0,
        2,
        "=SEQUENCE(A4,B4,C4,D4)"
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
        "Rows",
        "Columns",
        "Start",
        "Step",
        "Generated Sequence"
    ],
    [
        5,
        1,
        1,
        1,
        "=SEQUENCE(A2,B2,C2,D2)"
    ],
    [
        3,
        2,
        10,
        5,
        "=SEQUENCE(A3,B3,C3,D3)"
    ],
    [
        4,
        1,
        0,
        2,
        "=SEQUENCE(A4,B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

