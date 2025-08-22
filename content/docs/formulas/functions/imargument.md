title: IMARGUMENT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMARGUMENT function in Jspreadsheet

# IMARGUMENT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The IMARGUMENT function is a feature in Jspreadsheet Formulas Pro that helps you find the argument or phase angle of a complex number, but it does so in radians. A complex number is a number that can be expressed in the form a + bi, where 'a' and 'b' are real numbers and 'i' is the imaginary unit. The phase angle is the angle that is formed by the real axis and the line connecting the point to the origin in a complex plane. By using the IMARGUMENT function, you can easily calculate this angle without any complex manual computations.

## Documentation

The IMARGUMENT function is used to return the argument (phase angle) of a complex number in radians.

### Category

Engineering

### Syntax

IMARGUMENT(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which to find the argument. |


### Behavior

The `IMARGUMENT` function in spreadsheets calculates the argument theta of a complex number. The argument is the angle of the complex number in the complex plane, in radians. The complex number can be in the format of `a+bj` or `a+bi`.

1. If the cell is empty, the function returns an error.
2. Text: If the text is not a valid complex number, the function returns an error.
3. Booleans: Boolean values are not valid inputs for this function and will result in an error.
4. Errors: If the reference cell contains an error, the `IMARGUMENT` function will also produce an error.
5. Real Numbers: If the complex number is a real number (i.e., the imaginary part is zero), the function returns 0 if the real part is positive and Pi if the real part is negative.

### Common Errors

| Error | Description |
|------ |------------ |
| #NUM! | Occurs when the provided argument is not a valid complex number. |
| #VALUE! | Occurs if the supplied argument is non-numeric or is a logical value. |
| #DIV/0! | This error appears when the real and imaginary parts of the complex number are both 0. |

### Best practices

> - Always ensure that the cells referenced by the `IMARGUMENT` function contain valid complex numbers.
> - Avoid using logical values as they are not valid inputs for the `IMARGUMENT` function.
> - Handle errors using error-checking functions like `ISERROR` or `IFERROR` to prevent your spreadsheet from breaking.
> - Remember that the result is in radians. If you need the result in degrees, use another function to convert the result from radians to degrees.

### Usage

A few examples using the IMARGUMENT function.

```
IMARGUMENT(2+2i) returns approximately 0.7854  
IMARGUMENT(-3-3i) returns approximately -2.3562  
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
        "Argument (radians)"
    ],
    [
        "3+4i",
        "=IMARGUMENT(A2)"
    ],
    [
        "-1+i",
        "=IMARGUMENT(A3)"
    ],
    [
        "2-2i",
        "=IMARGUMENT(A4)"
    ],
    [
        "-3-3i",
        "=IMARGUMENT(A5)"
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
        "Argument (radians)"
    ],
    [
        "3+4i",
        "=IMARGUMENT(A2)"
    ],
    [
        "-1+i",
        "=IMARGUMENT(A3)"
    ],
    [
        "2-2i",
        "=IMARGUMENT(A4)"
    ],
    [
        "-3-3i",
        "=IMARGUMENT(A5)"
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
        "Argument (radians)"
    ],
    [
        "3+4i",
        "=IMARGUMENT(A2)"
    ],
    [
        "-1+i",
        "=IMARGUMENT(A3)"
    ],
    [
        "2-2i",
        "=IMARGUMENT(A4)"
    ],
    [
        "-3-3i",
        "=IMARGUMENT(A5)"
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
        "Argument (radians)"
    ],
    [
        "3+4i",
        "=IMARGUMENT(A2)"
    ],
    [
        "-1+i",
        "=IMARGUMENT(A3)"
    ],
    [
        "2-2i",
        "=IMARGUMENT(A4)"
    ],
    [
        "-3-3i",
        "=IMARGUMENT(A5)"
    ]
]
            }]
        });
    }
}
```

