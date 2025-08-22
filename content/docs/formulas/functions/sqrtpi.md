title: SQRTPI function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SQRTPI function in Jspreadsheet

# SQRTPI function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SQRTPI` function in Jspreadsheet Formulas Pro is a mathematical tool that gives you the positive square root of a number after it has been multiplied by pi (π). Simply put, you input a number into the function and it will perform the calculation for you. This can be very useful in various fields including maths and physics where such calculations are frequently needed. It's designed to be straightforward and easy to use, even for beginners.

## Documentation

Returns the positive square root of a number multiplied by pi (π).

### Category

Math and trigonometry

### Syntax

SQRTPI(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the square root, which will then be multiplied by pi (π). Must be non-negative. |


### Behavior

The `SQRTPI` function in a spreadsheet calculates the square root of a number multiplied by pi. This function takes one argument, which should be a non-negative number. Here is how it behaves with different types of values:

- **Empty cells:** If the cell reference is empty, `SQRTPI` treats it as 0.
- **Text:** If the cell reference is text, `SQRTPI` returns a `#VALUE!` error.
- **Booleans:** If the cell reference is a boolean, `SQRTPI` treats `TRUE` as 1 and `FALSE` as 0.
- **Errors:** If the cell reference contains an error, `SQRTPI` propagates that error.
- **Negative numbers:** If the argument is a negative number, `SQRTPI` returns a `#NUM!` error since the square root of a negative number is undefined.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned if the input is text or any non-numeric value. |
| `#NUM!` | This error is returned if the input is a negative number. |

### Best practices

> - Always ensure that the argument you provide to the `SQRTPI` function is a non-negative number to avoid `#NUM!` errors.
> - Avoid referencing cells that could contain text or non-numeric values, as these will result in `#VALUE!` errors.
> - Since `SQRTPI` treats empty cells and `FALSE` as 0, and `TRUE` as 1, ensure your cells contain the correct data types to avoid inaccurate calculations.
> - Use error handling functions like `IFERROR` or `ISNUMBER` to handle potential errors in a user-friendly way.

### Usage

A few examples using the SQRTPI function.

```
SQRTPI(9)  
SQRTPI(2)  
SQRTPI(A1) returns the square root of the value in cell A1, multiplied by pi (π).  
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
        "Number",
        "SQRTPI Result"
    ],
    [
        1,
        "=SQRTPI(A2)"
    ],
    [
        4,
        "=SQRTPI(A3)"
    ],
    [
        9,
        "=SQRTPI(A4)"
    ],
    [
        16,
        "=SQRTPI(A5)"
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
        "Number",
        "SQRTPI Result"
    ],
    [
        1,
        "=SQRTPI(A2)"
    ],
    [
        4,
        "=SQRTPI(A3)"
    ],
    [
        9,
        "=SQRTPI(A4)"
    ],
    [
        16,
        "=SQRTPI(A5)"
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
        "Number",
        "SQRTPI Result"
    ],
    [
        1,
        "=SQRTPI(A2)"
    ],
    [
        4,
        "=SQRTPI(A3)"
    ],
    [
        9,
        "=SQRTPI(A4)"
    ],
    [
        16,
        "=SQRTPI(A5)"
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
        "Number",
        "SQRTPI Result"
    ],
    [
        1,
        "=SQRTPI(A2)"
    ],
    [
        4,
        "=SQRTPI(A3)"
    ],
    [
        9,
        "=SQRTPI(A4)"
    ],
    [
        16,
        "=SQRTPI(A5)"
    ]
]
            }]
        });
    }
}
```

