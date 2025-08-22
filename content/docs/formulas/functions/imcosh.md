title: IMCOSH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMCOSH function in Jspreadsheet

# IMCOSH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The IMCOSH function in Jspreadsheet Formulas Pro is a tool that calculates the hyperbolic cosine of a complex number. This mathematical operation is often used in advanced scientific or engineering calculations. Using this function, you just need to provide a complex number, and it will return the hyperbolic cosine of that number. This allows for more complex mathematical operations to be performed within your spreadsheet.

## Documentation

The IMCOSH function is used to return the hyperbolic cosine of a complex number.

### Category

Engineering

### Syntax

IMCOSH(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which to find the hyperbolic cosine. |


### Behavior

The `IMCOSH` function in spreadsheets is used to return the hyperbolic cosine of a complex number in x + yi or x + yj text format. Here's how it handles various inputs:

- Empty cells: If the cell is empty, the `IMCOSH` function will return an error because it requires a complex number as an input.
- Text: If the input is a text value that doesn't represent a complex number, `IMCOSH` will return an error.
- Booleans: Boolean values are not valid inputs for the `IMCOSH` function. If a boolean value is provided, the function will return an error.
- Numbers: The function can handle real numbers, treating them as complex numbers with an imaginary part of 0.
- Errors: If the input is an error, `IMCOSH` will also return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the input value is not a complex number in x + yi or x + yj text format. |
| #NUM! | This error is returned when the real part of the complex number is too large to calculate the hyperbolic cosine. |
| #DIV/0! | This error is returned when the denominator in the calculation becomes zero. |

### Best practices

> - Always ensure that your input is a valid complex number in x + yi or x + yj text format. 
> - Avoid using the `IMCOSH` function for simple real numbers. The function is designed for complex numbers and using it for real numbers might lead to complications.
> - Be aware that the `IMCOSH` function can handle very large numbers, but there's a limit. If the real part of the complex number is too large, the function will return a #NUM! error.
> - Handle errors properly. If the function returns an error, check your input to ensure it's in the correct format.

### Usage

A few examples using the IMCOSH function.

```
IMCOSH("2+3i") returns approximately -5.5569+6.54812i  
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
        "Hyperbolic Cosine"
    ],
    [
        "2+3i",
        "=IMCOSH(A2)"
    ],
    [
        "1+2i",
        "=IMCOSH(A3)"
    ],
    [
        "-1+i",
        "=IMCOSH(A4)"
    ],
    [
        "3-2i",
        "=IMCOSH(A5)"
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
        "Hyperbolic Cosine"
    ],
    [
        "2+3i",
        "=IMCOSH(A2)"
    ],
    [
        "1+2i",
        "=IMCOSH(A3)"
    ],
    [
        "-1+i",
        "=IMCOSH(A4)"
    ],
    [
        "3-2i",
        "=IMCOSH(A5)"
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
        "Hyperbolic Cosine"
    ],
    [
        "2+3i",
        "=IMCOSH(A2)"
    ],
    [
        "1+2i",
        "=IMCOSH(A3)"
    ],
    [
        "-1+i",
        "=IMCOSH(A4)"
    ],
    [
        "3-2i",
        "=IMCOSH(A5)"
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
        "Hyperbolic Cosine"
    ],
    [
        "2+3i",
        "=IMCOSH(A2)"
    ],
    [
        "1+2i",
        "=IMCOSH(A3)"
    ],
    [
        "-1+i",
        "=IMCOSH(A4)"
    ],
    [
        "3-2i",
        "=IMCOSH(A5)"
    ]
]
            }]
        });
    }
}
```

