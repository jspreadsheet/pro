title: GAMMALN.PRECISE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GAMMALN.PRECISE function in Jspreadsheet

# GAMMALN.PRECISE function

`PRO`{.jtag}

The `GAMMALN.PRECISE` function in Jspreadsheet Formulas Pro is a tool for performing complex mathematical operations. It calculates the natural logarithm of the gamma function, a sophisticated extension of the factorial function for real and complex numbers. To ensure the highest level of accuracy, `GAMMALN.PRECISE` employs a more precise algorithm than the standard `GAMMALN` function. This makes it an ideal choice for intricate calculations requiring a high degree of precision.

## Documentation

Calculates the natural logarithm of the gamma function, which is a generalization of the factorial function to real and complex numbers, using a more precise algorithm than GAMMALN.

### Category

Statistical

### Syntax

GAMMALN.PRECISE(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which you want to calculate the natural logarithm of the gamma function. |


### Behavior

The `GAMMALN.PRECISE` function in spreadsheets calculates the natural logarithm of the complete gamma function for a specified value. It expects a numerical input and will return an error with non-numerical inputs. Here is how it handles various input types:

- **Empty Cells**: If the input reference is an empty cell, the function will return a `#NUM!` error.
- **Text**: If the input is a text string, the function will return a `#VALUE!` error.
- **Booleans**: Boolean values are treated as numbers in Excel, with TRUE equal to 1 and FALSE equal to 0. So, the function will compute the gamma function's natural logarithm of 1 for TRUE and 0 for FALSE.
- **Errors**: If the cell referenced in the function contains an error, the `GAMMALN.PRECISE` function will also return that error.
- **Numbers**: The function calculates the natural logarithm of the gamma function for positive numbers. For negative numbers and zero, it returns a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#NUM!` | This error occurs when the input number is less than or equal to zero, or if the cell reference is empty. |
| `#VALUE!` | This error is returned when the input is a text string or if the function's argument is not recognized. |
| `#REF!` | This error is returned if the cell reference is not valid. |

### Best practices

> - Ensure that your input values are positive numbers as the `GAMMALN.PRECISE` function doesn't work with negative numbers or zero.
> - Check your data for errors before applying the `GAMMALN.PRECISE` function to avoid error propagation.
> - Avoid using text strings as input for this function to prevent `#VALUE!` errors.
> - Use absolute cell references if you plan to copy the formula to other cells to keep the cell reference constant.

### Usage

A few examples using the GAMMALN.PRECISE function.

```
GAMMALN.PRECISE(0.5) returns 0.5723649429  
GAMMALN.PRECISE(2.5) returns 0.2846828705  
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
        "X Value",
        "GAMMALN.PRECISE Result"
    ],
    [
        0.5,
        "=GAMMALN.PRECISE(A2)"
    ],
    [
        1.5,
        "=GAMMALN.PRECISE(A3)"
    ],
    [
        2.5,
        "=GAMMALN.PRECISE(A4)"
    ],
    [
        3.5,
        "=GAMMALN.PRECISE(A5)"
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
        "X Value",
        "GAMMALN.PRECISE Result"
    ],
    [
        0.5,
        "=GAMMALN.PRECISE(A2)"
    ],
    [
        1.5,
        "=GAMMALN.PRECISE(A3)"
    ],
    [
        2.5,
        "=GAMMALN.PRECISE(A4)"
    ],
    [
        3.5,
        "=GAMMALN.PRECISE(A5)"
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
        "X Value",
        "GAMMALN.PRECISE Result"
    ],
    [
        0.5,
        "=GAMMALN.PRECISE(A2)"
    ],
    [
        1.5,
        "=GAMMALN.PRECISE(A3)"
    ],
    [
        2.5,
        "=GAMMALN.PRECISE(A4)"
    ],
    [
        3.5,
        "=GAMMALN.PRECISE(A5)"
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
        "X Value",
        "GAMMALN.PRECISE Result"
    ],
    [
        0.5,
        "=GAMMALN.PRECISE(A2)"
    ],
    [
        1.5,
        "=GAMMALN.PRECISE(A3)"
    ],
    [
        2.5,
        "=GAMMALN.PRECISE(A4)"
    ],
    [
        3.5,
        "=GAMMALN.PRECISE(A5)"
    ]
]
            }]
        });
    }
}
```

