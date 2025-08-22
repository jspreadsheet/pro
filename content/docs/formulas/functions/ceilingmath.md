title: CEILING.MATH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CEILING.MATH function in Jspreadsheet

# CEILING.MATH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CEILING.MATH` function in Jspreadsheet Formulas Pro is a tool that allows you to round a number upwards to the closest multiple of another number. It operates irrespective of whether the number being rounded is positive or negative. This is particularly useful when you need to standardize values in your spreadsheet or when you need to adjust numbers to a certain scale or increment.

## Documentation

Rounds a number up to the nearest multiple of a specified significance, regardless of the sign of the number.

### Category

Math and trigonometry

### Syntax

CEILING.MATH(number, [significance], [mode])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number to be rounded up. |
| `[significance]` | Optional. The multiple to which you want to round the number. If omitted, the default value is 1. |
| `[mode]` | Optional. A value that determines how to round the number. If omitted, or if the value is 0 or omitted, the function uses the default rounding mode (up). |


### Behavior

The `CEILING.MATH` function in spreadsheets rounds a number up to the nearest integer or to the nearest multiple of significance. Here's how it handles different inputs:

- Numbers: The function rounds up the given number to the nearest integer or multiple of significance.

- Empty cells: If the `CEILING.MATH` function refers to an empty cell, it treats it as a zero.

- Text: If a text string is used as an argument, the function returns an error.

- Booleans: If the function refers to a cell with a boolean value (`TRUE` or `FALSE`), it treats `TRUE` as 1 and `FALSE` as 0.

- Errors: If any cell referred to by the `CEILING.MATH` function contains a `#VALUE!`, `#REF!`, `#NAME?`, `#NUM!`, `#DIV/0!`, `#N/A`, or `#ERROR!`, the function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when one of the arguments is non-numeric or if any non-integer value is provided for the `mode` argument. |
| #NUM! | This error is returned if the number is less than zero but the significance is greater than zero, or vice versa. |

### Best practices

> - Always ensure that the arguments passed to the `CEILING.MATH` function are numeric. Non-numeric values can cause the function to return errors.
> - Be cautious when referring to cells that could contain errors. If `CEILING.MATH` refers to a cell that contains an error, it will return that error.
> - Use the `mode` argument to control the direction of rounding when the number or significance is negative.
> - Remember that `CEILING.MATH` always rounds up. If you want to round down, consider using the `FLOOR.MATH` function instead.

### Usage

A few examples using the CEILING.MATH function.

```
CEILING.MATH(4.3, 1) returns 5  
CEILING.MATH(-7.8, 2) returns -6  
CEILING.MATH(3.5, 0.1, 1) returns 3.6  
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
        "Number",
        "Significance",
        "Rounded Up"
    ],
    [
        4.3,
        1,
        "=CEILING.MATH(A2,B2)"
    ],
    [
        -7.8,
        2,
        "=CEILING.MATH(A3,B3)"
    ],
    [
        3.47,
        0.1,
        "=CEILING.MATH(A4,B4)"
    ],
    [
        -2.3,
        0.5,
        "=CEILING.MATH(A5,B5)"
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
        "Number",
        "Significance",
        "Rounded Up"
    ],
    [
        4.3,
        1,
        "=CEILING.MATH(A2,B2)"
    ],
    [
        -7.8,
        2,
        "=CEILING.MATH(A3,B3)"
    ],
    [
        3.47,
        0.1,
        "=CEILING.MATH(A4,B4)"
    ],
    [
        -2.3,
        0.5,
        "=CEILING.MATH(A5,B5)"
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
        "Number",
        "Significance",
        "Rounded Up"
    ],
    [
        4.3,
        1,
        "=CEILING.MATH(A2,B2)"
    ],
    [
        -7.8,
        2,
        "=CEILING.MATH(A3,B3)"
    ],
    [
        3.47,
        0.1,
        "=CEILING.MATH(A4,B4)"
    ],
    [
        -2.3,
        0.5,
        "=CEILING.MATH(A5,B5)"
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
        "Number",
        "Significance",
        "Rounded Up"
    ],
    [
        4.3,
        1,
        "=CEILING.MATH(A2,B2)"
    ],
    [
        -7.8,
        2,
        "=CEILING.MATH(A3,B3)"
    ],
    [
        3.47,
        0.1,
        "=CEILING.MATH(A4,B4)"
    ],
    [
        -2.3,
        0.5,
        "=CEILING.MATH(A5,B5)"
    ]
]
            }]
        });
    }
}
```

