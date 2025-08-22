title: ERFC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ERFC function in Jspreadsheet

# ERFC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ERFC` function in Jspreadsheet Formulas Pro is a mathematical tool that provides the complementary error function of a given number. Essentially, this means it subtracts the error function of that number from 1. This function plays a crucial role in statistical analysis and probability within Jspreadsheet, allowing for more complex calculations and data interpretations.

## Documentation

The ERFC function returns the complementary error function of a number, which is equal to 1 minus the error function of the same number.

### Category

Engineering

### Syntax

ERFC(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the complementary error function. |


### Behavior

The 'ERFC' function in spreadsheets is used to calculate the complementary ERF function integrated between a specified value 'x' and infinity. The function takes a single argument, which is a numerical value. Here is how it handles different types of inputs:

- **Empty Cells**: If the 'ERFC' function is applied to an empty cell, it will return an error, as it requires a numerical input.
- **Text**: If the function is applied to a cell containing non-numeric text, it will return an error, as it is not capable of converting text to numbers.
- **Booleans**: If the function is applied to a cell containing a boolean value (TRUE or FALSE), the function will treat TRUE as 1 and FALSE as 0, and return a corresponding result.
- **Errors**: If the supplied argument is an error, the 'ERFC' function will also return an error.
- **Non-Numeric Values**: The 'ERFC' function expects a numeric input. If a non-numeric value is supplied, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the input to the 'ERFC' function is non-numeric, such as a text string. |
| #NUM! | This error is returned when the calculated result is a complex number, which is outside the scope of the 'ERFC' function. |
| #DIV/0! | This error is returned when the function tries to divide by zero, which is mathematically undefined. |
| #N/A | This error is returned when the input cell does not have any data. |

### Best practices

> - Always ensure that the input value to the 'ERFC' function is a numeric value to avoid errors.
> - Be aware that the 'ERFC' function is used for specific mathematical calculations related to the error function. Use it only if you understand its purpose and effects.
> - Handle errors appropriately using functions like 'IFERROR' to ensure your spreadsheet remains functional and easy to read.
> - Check your spreadsheet for any potential division by zero errors that may arise as a result of the values you provide to the 'ERFC' function.

### Usage

A few examples using the ERFC function.

```
ERFC(0) returns 1  
ERFC(1.5) returns 0.033894853524654  
ERFC(A2) returns the complementary error function of the value in cell A2.  
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
        "Z-Score",
        "ERFC Value"
    ],
    [
        0,
        "=ERFC(A2)"
    ],
    [
        1,
        "=ERFC(A3)"
    ],
    [
        1.5,
        "=ERFC(A4)"
    ],
    [
        2,
        "=ERFC(A5)"
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
        "Z-Score",
        "ERFC Value"
    ],
    [
        0,
        "=ERFC(A2)"
    ],
    [
        1,
        "=ERFC(A3)"
    ],
    [
        1.5,
        "=ERFC(A4)"
    ],
    [
        2,
        "=ERFC(A5)"
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
        "Z-Score",
        "ERFC Value"
    ],
    [
        0,
        "=ERFC(A2)"
    ],
    [
        1,
        "=ERFC(A3)"
    ],
    [
        1.5,
        "=ERFC(A4)"
    ],
    [
        2,
        "=ERFC(A5)"
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
        "Z-Score",
        "ERFC Value"
    ],
    [
        0,
        "=ERFC(A2)"
    ],
    [
        1,
        "=ERFC(A3)"
    ],
    [
        1.5,
        "=ERFC(A4)"
    ],
    [
        2,
        "=ERFC(A5)"
    ]
]
            }]
        });
    }
}
```

