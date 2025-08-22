title: CEILING function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CEILING function in Jspreadsheet

# CEILING function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CEILING` function in Jspreadsheet Formulas Pro is a handy tool that allows you to round a number upward to the closest multiple of another number you specify. For instance, if you wish to round up 23 to the nearest multiple of 5, the `CEILING` function will return 25, as it is the next multiple of 5 after 23. This function is particularly useful when you need to estimate or calculate values upwards to a certain standard or level.

## Documentation

Rounds a number up to the nearest multiple of a specified value.

### Category

Compatibility

### Syntax

CEILING(num, significance)

| Parameter | Description |
| ----------- | ------------- |
| `num` | The number to be rounded up. |
| `significance` | Optional. The multiple to which you want to round the number. If omitted, the default value is 1. |


### Behavior

The `CEILING` function in spreadsheets rounds a number up to the nearest integer or to the nearest multiple of significance. It is often used in financial calculations where rounding is necessary. The behavior of `CEILING` function is as follows:

- If the value is a number, the `CEILING` function rounds it up to the nearest integer or the nearest multiple of significance.
- When the cell is empty or contains text, the `CEILING` function returns an #VALUE! error.
- When the cell contains a boolean value, it treats TRUE as 1 and FALSE as 0.
- Errors in the input flow through to the output. For instance, if a cell reference in the formula leads to a division by zero error, the `CEILING` function would return a #DIV/0! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the given value is non-numeric, such as text or an empty cell. |
| #DIV/0! | This error occurs when a cell referenced in the formula leads to a division by zero error. |

### Best practices
> - Always ensure that the input value to the `CEILING` function is numeric. Non-numeric values will lead to errors.
> - Use the `CEILING` function for financial calculations where you need to round up to the nearest integer or multiple of significance.
> - Be careful with cell references in the formula. Errors in the input cells will lead to errors in the `CEILING` function.
> - For simple rounding up to the nearest integer, you can leave the significance argument blank as it defaults to 1.

### Usage

A few examples using the CEILING function.

```
CEILING(4.3, 1) returns 5  
CEILING(7.8, 0.5) returns 8  
CEILING(-2.5, -2) returns -2  
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
        "Round Up To",
        "Ceiling Price"
    ],
    [
        4.23,
        1,
        "=CEILING(A2,B2)"
    ],
    [
        7.85,
        0.5,
        "=CEILING(A3,B3)"
    ],
    [
        12.47,
        5,
        "=CEILING(A4,B4)"
    ],
    [
        -8.3,
        -1,
        "=CEILING(A5,B5)"
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
        "Round Up To",
        "Ceiling Price"
    ],
    [
        4.23,
        1,
        "=CEILING(A2,B2)"
    ],
    [
        7.85,
        0.5,
        "=CEILING(A3,B3)"
    ],
    [
        12.47,
        5,
        "=CEILING(A4,B4)"
    ],
    [
        -8.3,
        -1,
        "=CEILING(A5,B5)"
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
        "Round Up To",
        "Ceiling Price"
    ],
    [
        4.23,
        1,
        "=CEILING(A2,B2)"
    ],
    [
        7.85,
        0.5,
        "=CEILING(A3,B3)"
    ],
    [
        12.47,
        5,
        "=CEILING(A4,B4)"
    ],
    [
        -8.3,
        -1,
        "=CEILING(A5,B5)"
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
        "Round Up To",
        "Ceiling Price"
    ],
    [
        4.23,
        1,
        "=CEILING(A2,B2)"
    ],
    [
        7.85,
        0.5,
        "=CEILING(A3,B3)"
    ],
    [
        12.47,
        5,
        "=CEILING(A4,B4)"
    ],
    [
        -8.3,
        -1,
        "=CEILING(A5,B5)"
    ]
]
            }]
        });
    }
}
```

