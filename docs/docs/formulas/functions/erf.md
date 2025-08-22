title: ERF function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ERF function in Jspreadsheet

# ERF function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the ERF function calculates the error function of a given number. This is a mathematical function that is often used in statistical analysis, particularly in the field of probability. To use it, you simply need to input the number you wish to calculate the error function for within the parentheses in the formula. This function then returns a corresponding value, providing insight into the statistical error associated with your original number.

## Documentation

The ERF function returns the error function of a number.

### Category

Engineering

### Syntax

ERF(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the error function. |


### Behavior

The `ERF` function in spreadsheets is used to calculate the error function of a specific number. The function syntax is: `ERF(lower_limit, [upper_limit])`. If only a lower limit is provided, it calculates the error function from zero to the lower limit. If both the lower and upper limits are provided, it calculates the error function from the lower to the upper limit.

Here's how it behaves with the following inputs:

- **Empty cells**: If the cell reference is empty, the function treats it as zero.
- **Text**: If the cell reference contains a text string, the function returns a `#VALUE!` error.
- **Booleans**: If the cell reference contains a boolean value, it is implicitly coerced to numbers: `TRUE` as 1 and `FALSE` as 0.
- **Errors**: If the cell reference contains an error, the function propagates the error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the given input is non-numeric. |
| #NUM! | This error is returned when the function encounters a calculation error. |

### Best practices

> - Always ensure that your input values are numerical. Text or non-numeric values will result in a `#VALUE!` error.
> - Make sure to check the range of your values. Very large values might result in a `#NUM!` error.
> - Be aware that the `ERF` function treats empty cells as zeros.
> - Use absolute cell references if you plan to copy your `ERF` function across multiple cells.

### Usage

A few examples using the ERF function.

```
ERF(0) returns 0  
ERF(1.5) returns 0.96610514647531  
ERF(A2) returns the error function of the value in cell A2.  
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
        "Input Value",
        "Error Function"
    ],
    [
        0,
        "=ERF(A2)"
    ],
    [
        0.5,
        "=ERF(A3)"
    ],
    [
        1,
        "=ERF(A4)"
    ],
    [
        1.5,
        "=ERF(A5)"
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
        "Input Value",
        "Error Function"
    ],
    [
        0,
        "=ERF(A2)"
    ],
    [
        0.5,
        "=ERF(A3)"
    ],
    [
        1,
        "=ERF(A4)"
    ],
    [
        1.5,
        "=ERF(A5)"
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
        "Input Value",
        "Error Function"
    ],
    [
        0,
        "=ERF(A2)"
    ],
    [
        0.5,
        "=ERF(A3)"
    ],
    [
        1,
        "=ERF(A4)"
    ],
    [
        1.5,
        "=ERF(A5)"
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
        "Input Value",
        "Error Function"
    ],
    [
        0,
        "=ERF(A2)"
    ],
    [
        0.5,
        "=ERF(A3)"
    ],
    [
        1,
        "=ERF(A4)"
    ],
    [
        1.5,
        "=ERF(A5)"
    ]
]
            }]
        });
    }
}
```

