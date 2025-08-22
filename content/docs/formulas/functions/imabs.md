title: IMABS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMABS function in Jspreadsheet

# IMABS function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the IMABS function is utilized to calculate the absolute value or magnitude of a complex number. A complex number is a number that can be expressed in the form a + bi, where 'a' and 'b' are real numbers, and 'i' is an imaginary unit. When you input a complex number into the IMABS function, it will provide you with the number's absolute value, essentially its distance from the origin on a complex number plane. This function is particularly useful in mathematical and engineering calculations.

## Documentation

The IMABS function is used to return the absolute value (magnitude) of a complex number.

### Category

Engineering

### Syntax

IMABS(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which to find the absolute value. |


### Behavior

The `IMABS` function in a spreadsheet takes a complex number in the format `x + yi` or `x + yj` and returns the absolute (modulus) value of the complex number. Here's how it handles different inputs:

- If the input cell is empty, the function will return a `#NUM!` error, as it expects a complex number as an argument.
- If the input is not a valid complex number, the function will return a `#NUM!` error.
- Text inputs that can't be interpreted as complex numbers will result in a `#NUM!` error.
- Booleans are not valid inputs for the `IMABS` function and will result in a `#NUM!` error.
- If the function encounters an error in the input cell (like `#REF!`, `#VALUE!`, `#DIV/0!`, etc.), it will propagate that error.

### Common Errors

| Error | Description |
| ------ | ----------- |
| `#NUM!` | Occurs when the input cell is empty, the input is not a complex number, or if a boolean is used as input. |
| `#VALUE!` | If the function encounters this error in the input cell, it will propagate the same error. Other error types from input cells will also be propagated. |

### Best Practices

> - Ensure that the input to the `IMABS` function is a valid complex number in the format `x + yi` or `x + yj`. 
> - Avoid using the function with empty cells, booleans, and non-complex numbers to prevent a `#NUM!` error.
> - Be careful while referencing cells as the function will propagate any error from the input cell.
> - Use error handling functions like `IFERROR` or `ISERROR` to handle possible errors before using `IMABS`.

### Usage

A few examples using the IMABS function.

```
IMABS("2+3i") returns approximately 3.6056  
IMABS("-4-3i") returns approximately 5  
IMABS("0+10i") returns exactly 10  
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
        "Absolute Value"
    ],
    [
        "3+4i",
        "=IMABS(A2)"
    ],
    [
        "-5+12i",
        "=IMABS(A3)"
    ],
    [
        "0-8i",
        "=IMABS(A4)"
    ],
    [
        "6+0i",
        "=IMABS(A5)"
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
        "Absolute Value"
    ],
    [
        "3+4i",
        "=IMABS(A2)"
    ],
    [
        "-5+12i",
        "=IMABS(A3)"
    ],
    [
        "0-8i",
        "=IMABS(A4)"
    ],
    [
        "6+0i",
        "=IMABS(A5)"
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
        "Absolute Value"
    ],
    [
        "3+4i",
        "=IMABS(A2)"
    ],
    [
        "-5+12i",
        "=IMABS(A3)"
    ],
    [
        "0-8i",
        "=IMABS(A4)"
    ],
    [
        "6+0i",
        "=IMABS(A5)"
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
        "Absolute Value"
    ],
    [
        "3+4i",
        "=IMABS(A2)"
    ],
    [
        "-5+12i",
        "=IMABS(A3)"
    ],
    [
        "0-8i",
        "=IMABS(A4)"
    ],
    [
        "6+0i",
        "=IMABS(A5)"
    ]
]
            }]
        });
    }
}
```

