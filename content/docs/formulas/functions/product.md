title: PRODUCT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PRODUCT function in Jspreadsheet

# PRODUCT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PRODUCT` function in Jspreadsheet Formulas Pro is a useful tool for multiplying numbers together. You simply specify a range of cells, and it calculates the total product of all the values within those cells. This can be especially handy for calculations involving large sets of data, as it simplifies the process and eliminates the need to individually multiply each value.

## Documentation

Returns the product of all values in a given range of cells.

### Category

Math and trigonometry

### Syntax

PRODUCT(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers to multiply. |
| `[numberN]` | Optional. Additional numbers or ranges of numbers to multiply. |


### Behavior

The `PRODUCT` function in spreadsheets multiplies all the numbers given as arguments and returns the product. Here's how it behaves with different types of data:

- **Empty cells**: If an argument is an empty cell, the function treats it as a 1.
- **Text**: If an argument is a text, the function returns an error. However, if the text is enclosed in quotation marks, it is treated as a string and ignored.
- **Booleans**: The function treats `TRUE` as 1 and `FALSE` as 0.
- **Errors**: If any of the arguments are an error, the `PRODUCT` function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The function returns this error when an argument is non-numeric or a cell reference that contains text. |
| #REF! | This error occurs when a cell reference is not valid. This can happen if you delete a cell that is referenced in the function. |
| #DIV/0! | This error is unlikely with the `PRODUCT` function because you're multiplying numbers, not dividing. However, if you nest a division function within `PRODUCT` that results in division by zero, you would get this error. |

### Best practices

> - Use the `PRODUCT` function when you have more than two cells to multiply. If you only have two cells to multiply, it's simpler to use the asterisk (*) operator.
> - Be careful to only include numeric values or cell references containing numeric values as arguments. Including text will result in an error.
> - Take advantage of the fact that the `PRODUCT` function ignores boolean values and empty cells. You can use this to your advantage when you have a range with some empty cells or cells with `TRUE` or `FALSE` values.
> - To avoid `#REF!` errors, avoid deleting cells that are being referenced by your `PRODUCT` function.

### Usage

A few examples using the PRODUCT function.

```
PRODUCT(A1:A5) returns the product of all values in the range A1 to A5  
PRODUCT(2,4,6,8) returns 384, which is the product of 2*4*6*8  
PRODUCT(B1:B10,C1:C10) returns the product of the values in columns B and C from rows 1 to 10  
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
        "Length",
        "Width",
        "Height",
        "Volume"
    ],
    [
        3,
        4,
        5,
        "=PRODUCT(A2:C2)"
    ],
    [
        2,
        6,
        3,
        "=PRODUCT(A3:C3)"
    ],
    [
        4,
        2,
        8,
        "=PRODUCT(A4:C4)"
    ],
    [
        "Total Product:",
        "",
        "",
        "=PRODUCT(D2:D4)"
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
        "Length",
        "Width",
        "Height",
        "Volume"
    ],
    [
        3,
        4,
        5,
        "=PRODUCT(A2:C2)"
    ],
    [
        2,
        6,
        3,
        "=PRODUCT(A3:C3)"
    ],
    [
        4,
        2,
        8,
        "=PRODUCT(A4:C4)"
    ],
    [
        "Total Product:",
        "",
        "",
        "=PRODUCT(D2:D4)"
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
        "Length",
        "Width",
        "Height",
        "Volume"
    ],
    [
        3,
        4,
        5,
        "=PRODUCT(A2:C2)"
    ],
    [
        2,
        6,
        3,
        "=PRODUCT(A3:C3)"
    ],
    [
        4,
        2,
        8,
        "=PRODUCT(A4:C4)"
    ],
    [
        "Total Product:",
        "",
        "",
        "=PRODUCT(D2:D4)"
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
        "Length",
        "Width",
        "Height",
        "Volume"
    ],
    [
        3,
        4,
        5,
        "=PRODUCT(A2:C2)"
    ],
    [
        2,
        6,
        3,
        "=PRODUCT(A3:C3)"
    ],
    [
        4,
        2,
        8,
        "=PRODUCT(A4:C4)"
    ],
    [
        "Total Product:",
        "",
        "",
        "=PRODUCT(D2:D4)"
    ]
]
            }]
        });
    }
}
```

