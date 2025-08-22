title: IMSQRT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMSQRT function in Jspreadsheet

# IMSQRT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMSQRT` function in Jspreadsheet Formulas Pro is a useful tool when dealing with complex numbers. It is designed to return the square root of a complex number that you provide. In other words, it calculates the number which when multiplied by itself gives the original complex number. This function is especially helpful in fields like engineering or physics where complex number calculations are common.

## Documentation

Returns the square root of a complex number.

### Category

Engineering

### Syntax

IMSQRT(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the square root. |


### Behavior

The `IMSQRT` function in spreadsheets is used to calculate the square root of a complex number. Here's how it handles various inputs:

- **Empty Cells**: If the `IMSQRT` function is used with an empty cell as its argument, it returns `#NUM!` error indicating that the argument is either non-numeric or is an invalid numeric value.
- **Text**: If the input is a pure text string that cannot be interpreted as a complex number, the `IMSQRT` function returns a `#VALUE!` error.
- **Booleans**: Boolean values are not valid inputs for the `IMSQRT` function. Using a boolean value as the argument will return `#VALUE!` error.
- **Errors**: If the argument in the `IMSQRT` function is another function or formula that results in an error, then `IMSQRT` will also result in an error.
- **Complex Numbers**: The `IMSQRT` function works best with complex numbers. The function calculates the square root of the given complex number.

### Common Errors

| Error | Description |
| ------| ------------|
| #NUM! | Occurs if the argument to `IMSQRT` function is either non-numeric or is an invalid numeric value.|
| #VALUE! | Occurs if the input is a pure text string which cannot be interpreted as a complex number or if the argument is a boolean value. |
| Error passed from argument | If the argument in the `IMSQRT` function is another function or formula that results in an error, then `IMSQRT` will result in the same error. |

### Best practices

> - Always ensure that the input to the `IMSQRT` function is a valid complex number.
> - Handle errors properly to ensure that your spreadsheets remain clean and easy to read. Use error functions like `IFERROR` to handle errors and provide a default value if an error occurs.
> - Be careful about the cell references and ranges when using `IMSQRT` function to avoid unexpected `#NUM!` and `#VALUE!` errors.
> - Remember that `IMSQRT` function cannot be used with logical values or pure text strings which cannot be interpreted as complex numbers.

### Usage

A few examples using the IMSQRT function.

```
IMSQRT("1+i") returns "1.0987+0.4551i"  
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
        "Square Root"
    ],
    [
        "1+i",
        "=IMSQRT(A2)"
    ],
    [
        "4+3i",
        "=IMSQRT(A3)"
    ],
    [
        "2-2i",
        "=IMSQRT(A4)"
    ],
    [
        "-1+0i",
        "=IMSQRT(A5)"
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
        "Square Root"
    ],
    [
        "1+i",
        "=IMSQRT(A2)"
    ],
    [
        "4+3i",
        "=IMSQRT(A3)"
    ],
    [
        "2-2i",
        "=IMSQRT(A4)"
    ],
    [
        "-1+0i",
        "=IMSQRT(A5)"
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
        "Square Root"
    ],
    [
        "1+i",
        "=IMSQRT(A2)"
    ],
    [
        "4+3i",
        "=IMSQRT(A3)"
    ],
    [
        "2-2i",
        "=IMSQRT(A4)"
    ],
    [
        "-1+0i",
        "=IMSQRT(A5)"
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
        "Square Root"
    ],
    [
        "1+i",
        "=IMSQRT(A2)"
    ],
    [
        "4+3i",
        "=IMSQRT(A3)"
    ],
    [
        "2-2i",
        "=IMSQRT(A4)"
    ],
    [
        "-1+0i",
        "=IMSQRT(A5)"
    ]
]
            }]
        });
    }
}
```

