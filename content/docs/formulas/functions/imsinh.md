title: IMSINH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMSINH function in Jspreadsheet

# IMSINH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `IMSINH` function is used to calculate the hyperbolic sine of a complex number. This means it can handle numbers that have both a real part and an imaginary part. You simply input the complex number into the function, and it will return the hyperbolic sine value of that number. This is particularly useful in advanced mathematical computations involving complex numbers.

## Documentation

Returns the hyperbolic sine of a complex number.

### Category

Engineering

### Syntax

IMSINH(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the hyperbolic sine. |


### Behavior

The `IMSINH` function in spreadsheets calculates the inverse hyperbolic sine of a complex number. The complex number to calculate is supplied as a text string in the format "x+yi" or "x+yj".

Here are the behaviors to expect:

- If the cell reference or the argument is an empty cell, the `IMSINH` function will return a #VALUE! error.
- If the cell reference or the argument is a text that can't be interpreted as a complex number, the `IMSINH` function will return a #VALUE! error.
- If the cell reference or the argument is a logical value (TRUE or FALSE), the `IMSINH` function will return a #VALUE! error.
- If the cell reference or the argument is an error, the `IMSINH` function will return the same error.
- If the cell reference or the argument is a number, the `IMSINH` function will treat it as a real number and calculate the inverse hyperbolic sine.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs if the supplied argument cannot be interpreted as a complex number. |
| #NAME? | Occurs when the `IMSINH` function is not spelled correctly. |

### Best practices

> - Always ensure the complex number is input as a string in the format "x+yi" or "x+yj". If not, the `IMSINH` function will return a #VALUE! error.
> - Use error handling functions like `IFERROR` or `ISERROR` to handle possible errors that might arise from using the `IMSINH` function.
> - Remember that the `IMSINH` function is for complex numbers. For real numbers, use the `ASINH` function.
> - Ensure that the `IMSINH` function is spelled correctly to prevent the #NAME? error.

### Usage

A few examples using the IMSINH function.

```
IMSINH("1+i") returns "0.63496+1.2985i"  
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
        "Hyperbolic Sine"
    ],
    [
        "1+i",
        "=IMSINH(A2)"
    ],
    [
        "2-3i",
        "=IMSINH(A3)"
    ],
    [
        "0.5+2i",
        "=IMSINH(A4)"
    ],
    [
        "-1+0.5i",
        "=IMSINH(A5)"
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
        "Hyperbolic Sine"
    ],
    [
        "1+i",
        "=IMSINH(A2)"
    ],
    [
        "2-3i",
        "=IMSINH(A3)"
    ],
    [
        "0.5+2i",
        "=IMSINH(A4)"
    ],
    [
        "-1+0.5i",
        "=IMSINH(A5)"
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
        "Hyperbolic Sine"
    ],
    [
        "1+i",
        "=IMSINH(A2)"
    ],
    [
        "2-3i",
        "=IMSINH(A3)"
    ],
    [
        "0.5+2i",
        "=IMSINH(A4)"
    ],
    [
        "-1+0.5i",
        "=IMSINH(A5)"
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
        "Hyperbolic Sine"
    ],
    [
        "1+i",
        "=IMSINH(A2)"
    ],
    [
        "2-3i",
        "=IMSINH(A3)"
    ],
    [
        "0.5+2i",
        "=IMSINH(A4)"
    ],
    [
        "-1+0.5i",
        "=IMSINH(A5)"
    ]
]
            }]
        });
    }
}
```

