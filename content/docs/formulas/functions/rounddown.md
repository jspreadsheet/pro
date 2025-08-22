title: ROUNDDOWN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ROUNDDOWN function in Jspreadsheet

# ROUNDDOWN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ROUNDDOWN` function in Jspreadsheet Formulas Pro is a handy tool that allows you to reduce a number to a specified number of digits. Essentially, it removes extra decimal places, rounding the number down to a simpler form. For instance, if you're dealing with a figure like 3.14159 and only need two decimal places, this function can adjust it to 3.14 for you. It's a great way to maintain precision control in your data processing.

## Documentation

Rounds a number down to a specified number of digits.

### Category

Math and trigonometry

### Syntax

ROUNDDOWN(number, num_digits)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number you want to round down. |
| `num_digits` | The number of digits to which you want to round down the number. |


### Behavior

The `ROUNDDOWN` function in spreadsheets rounds a number down, towards zero, to a certain number of decimal places specified. It operates as follows:

- If a positive number or zero is entered, the function will round down towards zero.
- If a negative number is entered, the function will round down away from zero.
- If an empty cell is referenced, the function will consider it as zero.
- If text or booleans (TRUE/FALSE) are used as input, the function will return an error.
- If a non-numeric value is used for the number of digits to round to, the function will return an error.
- If an error is input to the function, the function will propagate that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when non-numeric values are used as the input, or if the number of digits to round to is non-numeric. |
| #REF! | This error occurs when a cell reference is invalid. |
| #NUM! | This error occurs when the number of digits to round to is less than -1 or greater than 15. |

### Best practices

> - Always ensure the inputs are numeric. The `ROUNDDOWN` function does not handle non-numeric values well.
> - Be careful when rounding negative numbers. The `ROUNDDOWN` function rounds negative numbers away from zero, which may not be the expected behavior.
> - Validate cell references before using them. Invalid cell references can cause errors.
> - Do not use a number of digits to round to that is less than -1 or greater than 15. This is outside the valid range and will result in an error.

### Usage

A few examples using the ROUNDDOWN function.

```
ROUNDDOWN(3.14159, 2) returns 3.14  
ROUNDDOWN(99.95, 0) returns 99  
ROUNDDOWN(1234.56789, -2) returns 1200  
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
        "Decimal Places",
        "Rounded Down"
    ],
    [
        3.14159,
        2,
        "=ROUNDDOWN(A2,B2)"
    ],
    [
        99.95,
        0,
        "=ROUNDDOWN(A3,B3)"
    ],
    [
        1234.56789,
        -2,
        "=ROUNDDOWN(A4,B4)"
    ],
    [
        87.999,
        1,
        "=ROUNDDOWN(A5,B5)"
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
        "Decimal Places",
        "Rounded Down"
    ],
    [
        3.14159,
        2,
        "=ROUNDDOWN(A2,B2)"
    ],
    [
        99.95,
        0,
        "=ROUNDDOWN(A3,B3)"
    ],
    [
        1234.56789,
        -2,
        "=ROUNDDOWN(A4,B4)"
    ],
    [
        87.999,
        1,
        "=ROUNDDOWN(A5,B5)"
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
        "Decimal Places",
        "Rounded Down"
    ],
    [
        3.14159,
        2,
        "=ROUNDDOWN(A2,B2)"
    ],
    [
        99.95,
        0,
        "=ROUNDDOWN(A3,B3)"
    ],
    [
        1234.56789,
        -2,
        "=ROUNDDOWN(A4,B4)"
    ],
    [
        87.999,
        1,
        "=ROUNDDOWN(A5,B5)"
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
        "Decimal Places",
        "Rounded Down"
    ],
    [
        3.14159,
        2,
        "=ROUNDDOWN(A2,B2)"
    ],
    [
        99.95,
        0,
        "=ROUNDDOWN(A3,B3)"
    ],
    [
        1234.56789,
        -2,
        "=ROUNDDOWN(A4,B4)"
    ],
    [
        87.999,
        1,
        "=ROUNDDOWN(A5,B5)"
    ]
]
            }]
        });
    }
}
```

