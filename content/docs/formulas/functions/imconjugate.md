title: IMCONJUGATE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMCONJUGATE function in Jspreadsheet

# IMCONJUGATE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The IMCONJUGATE function within Jspreadsheet Formulas Pro is designed to return the complex conjugate of a given complex number. In simpler terms, it generates a twin of a complex number, but with an opposite sign between the real and imaginary parts. This function is particularly useful in mathematical calculations involving complex numbers, where the complex conjugate often holds key information.

## Documentation

The IMCONJUGATE function is used to return the complex conjugate of a complex number.

### Category

Engineering

### Syntax

IMCONJUGATE(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which to find the complex conjugate. |


### Behavior

The `IMCONJUGATE` function in spreadsheets returns the complex conjugate of a complex number. The complex conjugate of a number is obtained by changing the sign of its imaginary component. The function takes the format `IMCONJUGATE(complex_number)`, where `complex_number` is the complex number for which you want to find the complex conjugate.

- If `complex_number` is a valid complex number, `IMCONJUGATE` will return its complex conjugate.
- If `complex_number` is a real number, `IMCONJUGATE` will return the same real number since the imaginary part is 0.
- If `complex_number` is a boolean value, `IMCONJUGATE` will treat TRUE as 1 and FALSE as 0, and return the real number accordingly.
- If `complex_number` is a text string that cannot be interpreted as a complex number, `IMCONJUGATE` will return a `#VALUE!` error.
- If `complex_number` is an empty cell, `IMCONJUGATE` will return a `#NUM!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#VALUE!` | This error occurs when the `complex_number` argument is non-numeric or is a text string that cannot be interpreted as a complex number. |
| `#NUM!` | This error is displayed when the `complex_number` argument is an empty cell. |

### Best practices

> - Always ensure that the `complex_number` argument is a valid complex number or a real number.
> - Use the `IMCONJUGATE` function in combination with other complex number functions for calculations involving complex numbers.
> - Be mindful of the format in which you input the complex number. It should be in the form of "x+yi" or "x-yi", where x is the real part and y is the imaginary part of the complex number.
> - Handle errors effectively by using error checking functions like `ISERROR` or `IFERROR` in your formulas to prevent your spreadsheet from displaying error messages if something goes wrong.

### Usage

A few examples using the IMCONJUGATE function.

```
IMCONJUGATE("3+4i") returns 3-4i  
IMCONJUGATE("-2-5i") returns -2+5i  
IMCONJUGATE("0+8i") returns 0-8i  
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
        "Complex Conjugate"
    ],
    [
        "3+4i",
        "=IMCONJUGATE(A2)"
    ],
    [
        "-2-5i",
        "=IMCONJUGATE(A3)"
    ],
    [
        "0+8i",
        "=IMCONJUGATE(A4)"
    ],
    [
        "7-3i",
        "=IMCONJUGATE(A5)"
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
        "Complex Conjugate"
    ],
    [
        "3+4i",
        "=IMCONJUGATE(A2)"
    ],
    [
        "-2-5i",
        "=IMCONJUGATE(A3)"
    ],
    [
        "0+8i",
        "=IMCONJUGATE(A4)"
    ],
    [
        "7-3i",
        "=IMCONJUGATE(A5)"
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
        "Complex Conjugate"
    ],
    [
        "3+4i",
        "=IMCONJUGATE(A2)"
    ],
    [
        "-2-5i",
        "=IMCONJUGATE(A3)"
    ],
    [
        "0+8i",
        "=IMCONJUGATE(A4)"
    ],
    [
        "7-3i",
        "=IMCONJUGATE(A5)"
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
        "Complex Conjugate"
    ],
    [
        "3+4i",
        "=IMCONJUGATE(A2)"
    ],
    [
        "-2-5i",
        "=IMCONJUGATE(A3)"
    ],
    [
        "0+8i",
        "=IMCONJUGATE(A4)"
    ],
    [
        "7-3i",
        "=IMCONJUGATE(A5)"
    ]
]
            }]
        });
    }
}
```

