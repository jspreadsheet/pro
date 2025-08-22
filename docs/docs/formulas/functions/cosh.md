title: COSH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COSH function in Jspreadsheet

# COSH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `COSH` function is used to calculate the hyperbolic cosine of a number. This is a mathematical operation that is often used in complex calculations, particularly in the fields of engineering and physics. You simply input the value you want to calculate the hyperbolic cosine for, and the `COSH` function will give you the result. It's a helpful tool for performing advanced mathematical calculations quickly and accurately.

## Documentation

Returns the hyperbolic cosine of a number.

### Category

Math and trigonometry

### Syntax

COSH(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which you want to calculate the hyperbolic cosine. |


### Behavior

The `COSH` function in spreadsheets calculates the hyperbolic cosine of a given number. Here are some of the expected behaviors:

- The function takes one argument, which can be a number, a cell reference containing a number, or a mathematical expression that results in a number.
- If the cell reference or expression results in non-numeric content (like text or booleans), the function will return a `#VALUE!` error.
- If the cell is empty or the argument is missing, the function will return a `#NUM!` error.
- When the function encounters other errors like `#DIV/0!`, `#N/A`, `#REF!`, `#NAME?`, or `#NULL!`, it will return the respective error without attempting to compute the hyperbolic cosine.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | Occurs when the supplied argument is non-numeric |
| `#NUM!` | Occurs when the cell is empty or the argument is missing |
| Other errors (`#DIV/0!`, `#N/A`, `#REF!`, `#NAME?`, `#NULL!`) | The function returns the respective error if it encounters these while evaluating the argument |

### Best practices

> - Always ensure that the argument to the `COSH` function is a number, a cell reference containing a number, or a mathematical expression that evaluates to a number to avoid a `#VALUE!` error.
> - Avoid leaving the argument field blank or pointing the function to an empty cell to prevent a `#NUM!` error.
> - In case you're using a complex mathematical expression as an argument, double-check the expression for any potential errors that might occur during its evaluation.
> - Remember that `COSH` function returns hyperbolic cosine, which varies differently from regular cosine. Make sure it suits your mathematical or data analysis needs.

### Usage

A few examples using the COSH function.

```
COSH(0) returns 1  
COSH(1) returns 1.543  
COSH(-1) returns 1.543  
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
        "Input (x)",
        "COSH(x)",
        "Description"
    ],
    [
        0,
        "=COSH(A2)",
        "Hyperbolic cosine of 0"
    ],
    [
        1,
        "=COSH(A3)",
        "Hyperbolic cosine of 1"
    ],
    [
        -1,
        "=COSH(A4)",
        "Hyperbolic cosine of -1"
    ],
    [
        2,
        "=COSH(A5)",
        "Hyperbolic cosine of 2"
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
        "Input (x)",
        "COSH(x)",
        "Description"
    ],
    [
        0,
        "=COSH(A2)",
        "Hyperbolic cosine of 0"
    ],
    [
        1,
        "=COSH(A3)",
        "Hyperbolic cosine of 1"
    ],
    [
        -1,
        "=COSH(A4)",
        "Hyperbolic cosine of -1"
    ],
    [
        2,
        "=COSH(A5)",
        "Hyperbolic cosine of 2"
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
        "Input (x)",
        "COSH(x)",
        "Description"
    ],
    [
        0,
        "=COSH(A2)",
        "Hyperbolic cosine of 0"
    ],
    [
        1,
        "=COSH(A3)",
        "Hyperbolic cosine of 1"
    ],
    [
        -1,
        "=COSH(A4)",
        "Hyperbolic cosine of -1"
    ],
    [
        2,
        "=COSH(A5)",
        "Hyperbolic cosine of 2"
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
        "Input (x)",
        "COSH(x)",
        "Description"
    ],
    [
        0,
        "=COSH(A2)",
        "Hyperbolic cosine of 0"
    ],
    [
        1,
        "=COSH(A3)",
        "Hyperbolic cosine of 1"
    ],
    [
        -1,
        "=COSH(A4)",
        "Hyperbolic cosine of -1"
    ],
    [
        2,
        "=COSH(A5)",
        "Hyperbolic cosine of 2"
    ]
]
            }]
        });
    }
}
```

