title: IMEXP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMEXP function in Jspreadsheet

# IMEXP function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `IMEXP` function is used to calculate the exponential of a complex number. This complex number should be input as a string or a formula that leads to a text result. This function is particularly helpful when dealing with advanced mathematical calculations involving complex numbers. It simplifies the process of finding the exponential of these complex numbers in your spreadsheet.

## Documentation

Returns the exponential of a complex number.

### Category

Engineering

### Syntax

IMEXP(inumber)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number for which you want to calculate the exponential value. |


### Behavior

The `IMEXP` function in a spreadsheet is used to return the exponential of a complex number. It accepts one argument which is the complex number in the format `x+yi` or `x+yj`. Here's how it handles different types of input:

- Empty Cells: If the cell referenced is empty, the function will return an error because it requires a complex number as the input.
- Text: The function expects the input in the form of a complex number. If a regular text string is provided, it will return an error.
- Booleans: The function does not accept boolean values. If a cell with a boolean value is referenced, it will return an error.
- Errors: If the cell referenced contains an error, the `IMEXP` function will also return an error.
- Numbers: If the cell referenced contains a real number (without an imaginary part), the function will treat it as a complex number with the imaginary part as zero and return the exponential of the real number.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | This error occurs when the function does not recognize the format of the complex number. |
| #VALUE! | This error occurs when the function does not receive any argument or if the argument is not a complex number. |
| #DIV/0! | This error occurs when the real part of the complex number is zero and the imaginary part is also zero. |

### Best practices

> - Always ensure that the complex number is in the correct format (`x+yi` or `x+yj`), otherwise, the function will return an error.
> - Handle error cases effectively. If there's a possibility that the cell referenced may contain an error or a non-complex number, use error handling functions like `IFERROR` to prevent your formula from breaking.
> - Keep in mind that `IMEXP` expects a complex number as input. If you're referencing a cell with a real number, the function will treat it as a complex number with the imaginary part as zero.
> - Use `IMEXP` in conjunction with other complex number functions to perform complex calculations. For instance, you can use `IMSUM` to add two complex numbers and then use `IMEXP` to find the exponential of the result.

### Usage

A few examples using the IMEXP function.

```
IMEXP("3+4i") returns "-13.12878+15.20078i"  
IMEXP("1+i") returns "1.4687+2.2874i"  
IMEXP("0+1i") returns "0.5403+0.8415i"  
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
        "Exponential Result"
    ],
    [
        "3+4i",
        "=IMEXP(A2)"
    ],
    [
        "1+i",
        "=IMEXP(A3)"
    ],
    [
        "0+1i",
        "=IMEXP(A4)"
    ],
    [
        "-2+3i",
        "=IMEXP(A5)"
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
        "Exponential Result"
    ],
    [
        "3+4i",
        "=IMEXP(A2)"
    ],
    [
        "1+i",
        "=IMEXP(A3)"
    ],
    [
        "0+1i",
        "=IMEXP(A4)"
    ],
    [
        "-2+3i",
        "=IMEXP(A5)"
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
        "Exponential Result"
    ],
    [
        "3+4i",
        "=IMEXP(A2)"
    ],
    [
        "1+i",
        "=IMEXP(A3)"
    ],
    [
        "0+1i",
        "=IMEXP(A4)"
    ],
    [
        "-2+3i",
        "=IMEXP(A5)"
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
        "Exponential Result"
    ],
    [
        "3+4i",
        "=IMEXP(A2)"
    ],
    [
        "1+i",
        "=IMEXP(A3)"
    ],
    [
        "0+1i",
        "=IMEXP(A4)"
    ],
    [
        "-2+3i",
        "=IMEXP(A5)"
    ]
]
            }]
        });
    }
}
```

