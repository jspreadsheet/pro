title: UMINUS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the UMINUS function in Jspreadsheet

# UMINUS function

`PRO`{.jtag}

The `UMINUS` function in Jspreadsheet Formulas Pro is a simple yet powerful tool that gives you the negative of a given number. Basically, it changes the sign of the number you input. For instance, if you use `UMINUS` on a positive number, it will return a negative number and vice versa. This function can be especially useful when you're dealing with financial data or any calculations that involve both gains and losses.

## Documentation

Returns the negation of a number.

### Category

Math and trigonometry

### Syntax

UMINUS(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number to be negated. |


### Behavior

The `UMINUS` function in spreadsheets is used to reverse the sign of a given value. It is mostly used with numeric values. Here are some behaviors associated with this function:

- For Numeric Values: The `UMINUS` function converts positive numbers to negative and vice versa.
- For Empty Cells: If the `UMINUS` function is applied to an empty cell, it will return a `0`.
- For Text: Applying `UMINUS` to a cell containing text will result in a `#VALUE!` error, as the function is not designed to work with text.
- For Booleans: If the `UMINUS` function is applied to a cell containing a boolean value, it will treat `TRUE` as `1` and `FALSE` as `0`. Consequently, it will return `-1` for `TRUE` and `0` for `FALSE`.
- For Errors: If the cell to which the `UMINUS` function is applied contains an error, the function will return that same error.

### Common Errors

|Error|Description|
|---|---|
|`#VALUE!`|This error occurs when the `UMINUS` function is applied to a cell containing non-numeric values like text.|
|`#REF!`|This error is returned when the reference provided in the function is invalid or does not exist.|
|`#NAME?`|This error is returned when the spreadsheet does not recognize the function name. This usually occurs due to a typo or if the function is not supported in the software.|

### Best practices

> - Always ensure the cell to which the `UMINUS` function is applied contains a numeric value to avoid a `#VALUE!` error.
> - Use the `UMINUS` function with boolean values wisely. Remember that it treats `TRUE` as `1` and `FALSE` as `0`.
> - Ensure the cell references used in the function are valid to prevent `#REF!` errors.
> - Double-check the function name for typos or incorrect syntax to avoid `#NAME?` errors.

### Usage

A few examples using the UMINUS function.

```
UMINUS(5) returns -5  
UMINUS(-10) returns 10  
UMINUS(A1) returns the negation of the value in cell A1  
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
        "Temperature (\u00b0C)",
        "Opposite Temperature",
        "Net Change"
    ],
    [
        25,
        "=UMINUS(A2)",
        "=UMINUS(C4)"
    ],
    [
        -15,
        "=UMINUS(A3)",
        8
    ],
    [
        0,
        "=UMINUS(A4)",
        -8
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
        "Temperature (\u00b0C)",
        "Opposite Temperature",
        "Net Change"
    ],
    [
        25,
        "=UMINUS(A2)",
        "=UMINUS(C4)"
    ],
    [
        -15,
        "=UMINUS(A3)",
        8
    ],
    [
        0,
        "=UMINUS(A4)",
        -8
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
        "Temperature (\u00b0C)",
        "Opposite Temperature",
        "Net Change"
    ],
    [
        25,
        "=UMINUS(A2)",
        "=UMINUS(C4)"
    ],
    [
        -15,
        "=UMINUS(A3)",
        8
    ],
    [
        0,
        "=UMINUS(A4)",
        -8
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
        "Temperature (\u00b0C)",
        "Opposite Temperature",
        "Net Change"
    ],
    [
        25,
        "=UMINUS(A2)",
        "=UMINUS(C4)"
    ],
    [
        -15,
        "=UMINUS(A3)",
        8
    ],
    [
        0,
        "=UMINUS(A4)",
        -8
    ]
]
            }]
        });
    }
}
```

