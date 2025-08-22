title: GCD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GCD function in Jspreadsheet

# GCD function

`PRO`{.jtag}

The `GCD` function in Jspreadsheet Formulas Pro is a handy tool that allows you to find the greatest common divisor of two or more integers. To put it simply, it helps you find the largest number that can evenly divide two or more numbers. For example, if you use the `GCD` function for the numbers 8 and 12, it will return 4, as 4 is the highest number that can divide both 8 and 12 without leaving a remainder. This function is extremely useful when you're working with numbers and need to find common factors quickly and easily.

## Documentation

Returns the greatest common divisor of two or more integers.

### Category

Math and trigonometry

### Syntax

GCD(number1, number2,...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first integer for which you want to find the greatest common divisor. |
| `numberN` | The nth integer for which you want to find the greatest common divisor. |


### Behavior

The GCD (Greatest Common Divisor) function in a spreadsheet is used to find the largest number that can divide two numbers without leaving a remainder. Here's how it generally behaves:

1. It requires at least one numerical argument. If no arguments are provided, it returns a `#VALUE!` error.
2. It accepts only numerical values. If a text value is provided, it returns a `#VALUE!` error.
3. It can handle boolean values; `TRUE` is treated as 1 and `FALSE` as 0. 
4. If a reference to a cell that contains an error is included in the arguments, it returns the same error.
5. If a reference to an empty cell is included in the arguments, it treats the empty cell as zero.
6. If the arguments include a fraction, the function uses the integer portion and discards the fractional part. 

### Common Errors

| Error Name | Description |
| --- | --- |
| `#VALUE!` | This error occurs when any argument is non-numeric, or when no argument is provided to the function. |
| `#DIV/0!` | This error occurs if the argument is zero because the greatest common divisor of 0 and any number is undefined. |
| `#NUM!` | This error occurs when the function includes a negative number argument. GCD function only operates on positive numbers |

### Best practices

> - Always ensure that the arguments you provide are numerical values or references to cells containing numerical values. Avoid using text or other non-numerical data types as arguments.
> - Be aware that the GCD function will treat boolean values as integers (with `TRUE` being 1 and `FALSE` being 0), so avoid using boolean values unless this is the desired effect.
> - Remember that the GCD function discards the fractional part of any decimal number provided as an argument. If you need to find the greatest common divisor of two decimal numbers, you may need to adjust your formula or data accordingly.
> - Be careful when referencing cells that may be empty or may contain errors, as this can lead to unexpected results. It may be useful to use error checking functions like ISERROR or IFERROR to handle potential errors.

### Usage

A few examples using the GCD function.

```
GCD(12,18) returns 6  
GCD(50,75,100) returns 25  
GCD(7,13) returns 1  
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
        "Number 1",
        "Number 2",
        "GCD"
    ],
    [
        24,
        36,
        "=GCD(A2,B2)"
    ],
    [
        45,
        60,
        "=GCD(A3,B3)"
    ],
    [
        14,
        21,
        "=GCD(A4,B4)"
    ],
    [
        48,
        72,
        "=GCD(A5,B5)"
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
        "Number 1",
        "Number 2",
        "GCD"
    ],
    [
        24,
        36,
        "=GCD(A2,B2)"
    ],
    [
        45,
        60,
        "=GCD(A3,B3)"
    ],
    [
        14,
        21,
        "=GCD(A4,B4)"
    ],
    [
        48,
        72,
        "=GCD(A5,B5)"
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
        "Number 1",
        "Number 2",
        "GCD"
    ],
    [
        24,
        36,
        "=GCD(A2,B2)"
    ],
    [
        45,
        60,
        "=GCD(A3,B3)"
    ],
    [
        14,
        21,
        "=GCD(A4,B4)"
    ],
    [
        48,
        72,
        "=GCD(A5,B5)"
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
        "Number 1",
        "Number 2",
        "GCD"
    ],
    [
        24,
        36,
        "=GCD(A2,B2)"
    ],
    [
        45,
        60,
        "=GCD(A3,B3)"
    ],
    [
        14,
        21,
        "=GCD(A4,B4)"
    ],
    [
        48,
        72,
        "=GCD(A5,B5)"
    ]
]
            }]
        });
    }
}
```

