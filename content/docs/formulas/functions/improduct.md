title: IMPRODUCT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMPRODUCT function in Jspreadsheet

# IMPRODUCT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMPRODUCT` function in Jspreadsheet Formulas Pro is a useful tool that calculates the multiplication result of complex numbers. Complex numbers consist of a real and an imaginary part. You simply input the complex numbers you want to multiply in the `IMPRODUCT` function, and it will return the product. This is particularly handy for mathematical or engineering calculations involving complex numbers.

## Documentation

Returns the product of complex numbers.

### Category

Engineering

### Syntax

IMPRODUCT(inumber1, [inumber2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `inumber1` | The first complex number in the product. |
| `inumberN` | Optional. Additional complex numbers you want to include in the product. |


### Behavior

The `IMPRODUCT` function multiplies one or more complex numbers in a given range or array. A complex number is of the form `x + yi` where `x` is the real part and `y` is the imaginary part. Here is how it handles various inputs:

- Empty cells: `IMPRODUCT` function ignores empty cells.
- Text: If the text cannot be interpreted as a complex number, `IMPRODUCT` returns a `#VALUE!` error.
- Booleans: Boolean values are treated as numbers - `TRUE` is interpreted as 1 and `FALSE` is interpreted as 0 by the `IMPRODUCT` function.
- Errors: If any cell in the range or array contains an error, `IMPRODUCT` returns that error.
- If no complex numbers are provided as arguments, the `IMPRODUCT` function will return 0.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when one or more of the input values are not recognized as valid complex numbers. |
| #NUM! | This error is returned when the function results in a number too large to be represented in the spreadsheet. |
| #N/A | This error is returned when no arguments are provided to the function. |

### Best practices

> - Ensure that the values you are inputting are valid complex numbers. The function won't work with regular numeric values or other forms of text.
> - Handle errors effectively by using error checking functions such as `IFERROR` or `ISERROR` with `IMPRODUCT`.
> - Avoid including cells with error values in the range or array as it causes the function to return an error.
> - Remember that empty cells are ignored by the `IMPRODUCT` function. If you need to include them in calculations, consider using a method to replace empty cells with a value.

### Usage

A few examples using the IMPRODUCT function.

```
IMPRODUCT("2+3i", "4+5i", "-6+7i") returns "-112-181i"  
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
        "Complex Number 1",
        "Complex Number 2",
        "Product"
    ],
    [
        "3+4i",
        "2-5i",
        "=IMPRODUCT(A2,B2)"
    ],
    [
        "1+2i",
        "3+i",
        "=IMPRODUCT(A3,B3)"
    ],
    [
        "-2+3i",
        "4+2i",
        "=IMPRODUCT(A4,B4)"
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
        "Complex Number 1",
        "Complex Number 2",
        "Product"
    ],
    [
        "3+4i",
        "2-5i",
        "=IMPRODUCT(A2,B2)"
    ],
    [
        "1+2i",
        "3+i",
        "=IMPRODUCT(A3,B3)"
    ],
    [
        "-2+3i",
        "4+2i",
        "=IMPRODUCT(A4,B4)"
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
        "Complex Number 1",
        "Complex Number 2",
        "Product"
    ],
    [
        "3+4i",
        "2-5i",
        "=IMPRODUCT(A2,B2)"
    ],
    [
        "1+2i",
        "3+i",
        "=IMPRODUCT(A3,B3)"
    ],
    [
        "-2+3i",
        "4+2i",
        "=IMPRODUCT(A4,B4)"
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
        "Complex Number 1",
        "Complex Number 2",
        "Product"
    ],
    [
        "3+4i",
        "2-5i",
        "=IMPRODUCT(A2,B2)"
    ],
    [
        "1+2i",
        "3+i",
        "=IMPRODUCT(A3,B3)"
    ],
    [
        "-2+3i",
        "4+2i",
        "=IMPRODUCT(A4,B4)"
    ]
]
            }]
        });
    }
}
```

