title: CEILING.PRECISE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CEILING.PRECISE function in Jspreadsheet

# CEILING.PRECISE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CEILING.PRECISE` function in Jspreadsheet Formulas Pro is a mathematical tool that allows you to round a number upwards, getting it as close as possible to another number you specify, known as the 'significance'. This function uses a method called 'bankers' rounding', which means if the number is exactly halfway between two possible outcomes, it rounds up. This can be particularly helpful when you're trying to estimate or calculate values in your spreadsheet.

## Documentation

Rounds a number up to the nearest multiple of a specified significance, using bankers' rounding (round half up).

### Category

Math and trigonometry

### Syntax

CEILING.PRECISE(number, [significance])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number to be rounded up. |
| `[significance]` | Optional. The multiple to which you want to round the number. If omitted, the default value is 1. |


### Behavior

The `CEILING.PRECISE` function in spreadsheets rounds up a number to the nearest integer or to the nearest multiple of significance. The function takes two arguments: `number` and `significance`. If the `significance` is not provided, the function assumes it to be 1. 

Here's how it handles different types of values:

- **Empty cells**: If the `number` or `significance` cell is empty, the function treats it as zero.
- **Text**: If the `number` or `significance` is a text string, the function returns an error.
- **Booleans**: If the `number` or `significance` is a boolean, it gets implicitly converted to a numeric value (True to 1 and False to 0).
- **Errors**: If any of the arguments is an error, the function propagates the error.
- **Negative Numbers**: If the `number` or `significance` is negative, the function rounds away from zero.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when either of the arguments is non-numeric, such as a text string. |
| #NUM! | This error occurs when the `significance` is zero. |
| #DIV/0! | This error occurs when both `number` and `significance` are zero. |

### Best practices

> - Always ensure that the inputs are numeric. If there's a chance they might not be, use error handling functions to manage possible errors.
> - Be aware of the behavior of the function with negative numbers. The function rounds away from zero, which might not be the expected behavior in all scenarios.
> - When dealing with financial calculations, be careful with the `significance` parameter to ensure the rounding aligns with the financial rules in place.
> - If you want the function to always round up regardless of the sign of the `number`, consider using the `CEILING` function instead.

### Usage

A few examples using the CEILING.PRECISE function.

```
CEILING.PRECISE(4.3, 1) returns 5  
CEILING.PRECISE(7.8, 0.5) returns 8  
CEILING.PRECISE(-2.5, -2) returns -2  
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
        "Price",
        "Significance",
        "Rounded Up Price"
    ],
    [
        4.3,
        1,
        "=CEILING.PRECISE(A2,B2)"
    ],
    [
        7.8,
        0.5,
        "=CEILING.PRECISE(A3,B3)"
    ],
    [
        -2.5,
        -2,
        "=CEILING.PRECISE(A4,B4)"
    ],
    [
        23.67,
        5,
        "=CEILING.PRECISE(A5,B5)"
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
        "Price",
        "Significance",
        "Rounded Up Price"
    ],
    [
        4.3,
        1,
        "=CEILING.PRECISE(A2,B2)"
    ],
    [
        7.8,
        0.5,
        "=CEILING.PRECISE(A3,B3)"
    ],
    [
        -2.5,
        -2,
        "=CEILING.PRECISE(A4,B4)"
    ],
    [
        23.67,
        5,
        "=CEILING.PRECISE(A5,B5)"
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
        "Price",
        "Significance",
        "Rounded Up Price"
    ],
    [
        4.3,
        1,
        "=CEILING.PRECISE(A2,B2)"
    ],
    [
        7.8,
        0.5,
        "=CEILING.PRECISE(A3,B3)"
    ],
    [
        -2.5,
        -2,
        "=CEILING.PRECISE(A4,B4)"
    ],
    [
        23.67,
        5,
        "=CEILING.PRECISE(A5,B5)"
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
        "Price",
        "Significance",
        "Rounded Up Price"
    ],
    [
        4.3,
        1,
        "=CEILING.PRECISE(A2,B2)"
    ],
    [
        7.8,
        0.5,
        "=CEILING.PRECISE(A3,B3)"
    ],
    [
        -2.5,
        -2,
        "=CEILING.PRECISE(A4,B4)"
    ],
    [
        23.67,
        5,
        "=CEILING.PRECISE(A5,B5)"
    ]
]
            }]
        });
    }
}
```

