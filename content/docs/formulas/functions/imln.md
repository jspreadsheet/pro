title: IMLN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMLN function in Jspreadsheet

# IMLN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMLN` function in Jspreadsheet Formulas Pro is a mathematical tool that allows you to find the natural logarithm of a complex number. A complex number is a number that includes both a real part and an imaginary part. By using `IMLN`, you input your complex number and the formula will output its natural logarithm. This function is especially useful in advanced math or physics calculations that involve complex numbers.

## Documentation

Returns the natural logarithm of a complex number.

### Category

Engineering

### Syntax

IMLN(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the natural logarithm. |


### Behavior

The `IMLN` function in spreadsheets is used to return the natural logarithm of a complex number. Here is how it handles various inputs:

- Empty cells: If the `IMLN` function is used on an empty cell, it will return an error because it needs a complex number to perform the calculation.
- Text: The `IMLN` function does not work with text. If a cell containing text is used as an argument, the function will return an error.
- Booleans: The `IMLN` function does not work with Boolean values. If a cell containing a Boolean value is used as an argument, the function will return an error.
- Errors: If the cell used as an argument contains an error, the `IMLN` function will also return an error.
- Complex Numbers: The `IMLN` function is designed to work with complex numbers. It will return the natural logarithm of the complex number provided as an argument.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the input to the `IMLN` function is not a valid complex number. |
| #NUM! | This error occurs when the real component of the complex number is negative and the imaginary component is zero. |
| #DIV/0! | This error occurs when the complex number provided as an argument is 0. |

### Best practices

> - Always ensure that the input to the `IMLN` function is a valid complex number.
> - Avoid using cells that contain text, Boolean values, or errors as arguments to the `IMLN` function as this will result in an error.
> - Handle zero input carefully to avoid the #DIV/0! error.

### Usage

A few examples using the IMLN function.

```
IMLN("1+i")  
IMLN("2+2i")  
IMLN("5-3i")  
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
        "Natural Logarithm"
    ],
    [
        "1+i",
        "=IMLN(A2)"
    ],
    [
        "2+2i",
        "=IMLN(A3)"
    ],
    [
        "5-3i",
        "=IMLN(A4)"
    ],
    [
        "-1+0i",
        "=IMLN(A5)"
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
        "Natural Logarithm"
    ],
    [
        "1+i",
        "=IMLN(A2)"
    ],
    [
        "2+2i",
        "=IMLN(A3)"
    ],
    [
        "5-3i",
        "=IMLN(A4)"
    ],
    [
        "-1+0i",
        "=IMLN(A5)"
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
        "Natural Logarithm"
    ],
    [
        "1+i",
        "=IMLN(A2)"
    ],
    [
        "2+2i",
        "=IMLN(A3)"
    ],
    [
        "5-3i",
        "=IMLN(A4)"
    ],
    [
        "-1+0i",
        "=IMLN(A5)"
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
        "Natural Logarithm"
    ],
    [
        "1+i",
        "=IMLN(A2)"
    ],
    [
        "2+2i",
        "=IMLN(A3)"
    ],
    [
        "5-3i",
        "=IMLN(A4)"
    ],
    [
        "-1+0i",
        "=IMLN(A5)"
    ]
]
            }]
        });
    }
}
```

