title: QUOTIENT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the QUOTIENT function in Jspreadsheet

# QUOTIENT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `QUOTIENT` function in Jspreadsheet Formulas Pro is used to return the whole number result of a division operation, disregarding any remainder. This function is useful when you only need the integer part of a division. For example, if you divide 10 by 3, the `QUOTIENT` function will return 3, ignoring the remainder. It's efficient when you need to determine how many times a number can be evenly divided.

## Documentation

Returns the integer portion of a division operation. It discards the remainder and returns only the whole number that divides evenly into the dividend.

### Category

Math and trigonometry

### Syntax

QUOTIENT(numerator, denominator)

| Parameter | Description |
| ----------- | ------------- |
| `numerator` | The number to be divided. |
| `denominator` | The number by which to divide the numerator. |


### Behavior

The QUOTIENT function in spreadsheets is used to return the integer portion of a division operation. Here's how it handles different types of inputs:

- **Numbers**: The function works flawlessly with numeric inputs. For example, QUOTIENT(10, 2) would return 5.
- **Empty Cells**: If either the numerator or the denominator is an empty cell, the function would return a `#DIV/0!` error.
- **Text**: If either of the arguments is a text, the function would return a `#VALUE!` error.
- **Booleans**: The function treats `TRUE` as 1 and `FALSE` as 0. For example, QUOTIENT(TRUE, 2) would return 0.
- **Errors**: If either of the arguments is an error, the function would propagate that error. For instance, if the denominator is `#DIV/0!`, the function would also return `#DIV/0!`.

### Common Errors

| Error | Description |
| ----------- | ----------- |
| #DIV/0! | This error occurs when the denominator is zero or an empty cell. |
| #VALUE! | This error occurs when either the numerator or the denominator is non-numeric. |
| #NAME? | This error occurs when the spreadsheet does not recognize the function name. This might happen if the function name is spelled incorrectly. |

### Best practices

> - Always ensure that the denominator is not zero or an empty cell to avoid the `#DIV/0!` error.
> - Avoid using non-numeric values as arguments to the QUOTIENT function to prevent the `#VALUE!` error.
> - Be mindful of the fact that the QUOTIENT function only returns the integer portion of the result. If you need the remainder or the exact result of the division, consider using other functions such as MOD or DIVIDE.
> - Handle booleans carefully as they are treated as 0 and 1. If you have boolean values in your data, it might be safer to convert them to explicit numeric values before using them in the QUOTIENT function.

### Usage

A few examples using the QUOTIENT function.

```
QUOTIENT(10,3) returns 3 because 3 is the largest whole number that divides evenly into 10 when divided by 3  
QUOTIENT(1000,7) returns 142 because 7 goes into 1000 142 times with a remainder of 6  
QUOTIENT(A1,B1) returns the integer portion of the result of dividing the value in cell A1 by the value in cell B1  
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
        "Items",
        "Per Box",
        "Full Boxes"
    ],
    [
        47,
        12,
        "=QUOTIENT(A2,B2)"
    ],
    [
        128,
        15,
        "=QUOTIENT(A3,B3)"
    ],
    [
        95,
        8,
        "=QUOTIENT(A4,B4)"
    ],
    [
        203,
        25,
        "=QUOTIENT(A5,B5)"
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
        "Items",
        "Per Box",
        "Full Boxes"
    ],
    [
        47,
        12,
        "=QUOTIENT(A2,B2)"
    ],
    [
        128,
        15,
        "=QUOTIENT(A3,B3)"
    ],
    [
        95,
        8,
        "=QUOTIENT(A4,B4)"
    ],
    [
        203,
        25,
        "=QUOTIENT(A5,B5)"
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
        "Items",
        "Per Box",
        "Full Boxes"
    ],
    [
        47,
        12,
        "=QUOTIENT(A2,B2)"
    ],
    [
        128,
        15,
        "=QUOTIENT(A3,B3)"
    ],
    [
        95,
        8,
        "=QUOTIENT(A4,B4)"
    ],
    [
        203,
        25,
        "=QUOTIENT(A5,B5)"
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
        "Items",
        "Per Box",
        "Full Boxes"
    ],
    [
        47,
        12,
        "=QUOTIENT(A2,B2)"
    ],
    [
        128,
        15,
        "=QUOTIENT(A3,B3)"
    ],
    [
        95,
        8,
        "=QUOTIENT(A4,B4)"
    ],
    [
        203,
        25,
        "=QUOTIENT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

