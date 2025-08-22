title: IMSECH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMSECH function in Jspreadsheet

# IMSECH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMSECH` function in Jspreadsheet Formulas Pro is a mathematical tool that computes the hyperbolic secant of a complex number. In simpler terms, it is used to find the reciprocal of the hyperbolic cosine of a given complex number. This function is especially useful in advanced mathematical calculations involving complex numbers. To use it, simply input the complex number you're working with and the `IMSECH` function will do the rest.

## Documentation

Returns the hyperbolic secant of a complex number.

### Category

Engineering

### Syntax

IMSECH(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the hyperbolic secant. |


### Behavior

The `IMSECH` function in spreadsheets is used to calculate the hyperbolic secant of a complex number. This function requires a complex number provided in text format (either as "x+yi" or "x+yj") as an argument.

- If an empty cell is provided as the argument, the function will return `#NUM!` error.
- If a text that doesn't represent a valid complex number is provided, the function will also return `#NUM!` error.
- The function doesn't support boolean values. If a boolean value is provided as the argument, the function will treat it as an integer (TRUE as 1 and FALSE as 0).
- If an error is encountered during the calculation, the function will return that error. For example, if the formula inside the `IMSECH` function results in an error, that error will be returned.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error is displayed if the supplied argument is not recognized as a complex number.|
| #VALUE! | This error is displayed if the supplied argument is non-numeric.|

### Best practices

> - Always ensure that the complex number provided as the argument is in the correct format (either "x+yi" or "x+yj").
> - Avoid using boolean values as the argument for the `IMSECH` function. Although the function can handle boolean values, the result may not be as expected.
> - Use error handling functions like `IFERROR` or `ISERROR` to handle possible errors that the `IMSECH` function may return.
> - The `IMSECH` function can handle real and imaginary numbers. However, it's best to use `SECH` function for real numbers and `IMSECH` for complex numbers to ensure accuracy.

### Usage

A few examples using the IMSECH function.

```
IMSECH("1+i")  
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
        "Complex Number",
        "Hyperbolic Secant"
    ],
    [
        "1+i",
        "=IMSECH(A2)"
    ],
    [
        "2-3i",
        "=IMSECH(A3)"
    ],
    [
        "0.5+0.5i",
        "=IMSECH(A4)"
    ],
    [
        "-1+2i",
        "=IMSECH(A5)"
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
        "Complex Number",
        "Hyperbolic Secant"
    ],
    [
        "1+i",
        "=IMSECH(A2)"
    ],
    [
        "2-3i",
        "=IMSECH(A3)"
    ],
    [
        "0.5+0.5i",
        "=IMSECH(A4)"
    ],
    [
        "-1+2i",
        "=IMSECH(A5)"
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
        "Complex Number",
        "Hyperbolic Secant"
    ],
    [
        "1+i",
        "=IMSECH(A2)"
    ],
    [
        "2-3i",
        "=IMSECH(A3)"
    ],
    [
        "0.5+0.5i",
        "=IMSECH(A4)"
    ],
    [
        "-1+2i",
        "=IMSECH(A5)"
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
        "Complex Number",
        "Hyperbolic Secant"
    ],
    [
        "1+i",
        "=IMSECH(A2)"
    ],
    [
        "2-3i",
        "=IMSECH(A3)"
    ],
    [
        "0.5+0.5i",
        "=IMSECH(A4)"
    ],
    [
        "-1+2i",
        "=IMSECH(A5)"
    ]
]
            }]
        });
    }
}
```

