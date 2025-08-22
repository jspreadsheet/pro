title: BIN2DEC Function – Convert Binary to Decimal in Jspreadsheet
keywords: Jspreadsheet, JavaScript, spreadsheet functions, custom formulas, Excel-like functions, binary to decimal, engineering functions, BIN2DEC, binary conversion, JavaScript formulas
description: How to use the BIN2DEC function in Jspreadsheet to convert binary numbers into decimal format. This guide explains syntax, behavior, common errors, and best practices when working with binary inputs in Jspreadsheet’s formula engine.

# BIN2DEC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BIN2DEC` function in Jspreadsheet Formulas Pro is used to convert a binary number into a decimal number. Binary numbers are a series of 1's and 0's used in digital systems, while decimal numbers are what we use in everyday counting. To use this function, you simply input a binary number into the `BIN2DEC` function, and it will output the equivalent decimal number. This is helpful when working with data that is represented in binary format and needs to be understood in decimal terms.

## Documentation

Converts a binary number to decimal.

### Category

Engineering

### Syntax

BIN2DEC(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The binary number to convert to decimal. Must be a string of up to 10 characters containing only 0's and 1's. |


### Behavior

The `BIN2DEC` function in spreadsheets converts a binary number to decimal. It expects a single argument, which is the binary number to be converted. This argument should be a text string containing only the digits 0 and 1, representing a valid binary number. 

- **Empty cells**: If the argument is an empty cell, the function returns an error. 
- **Text**: If the argument is a text string not representing a valid binary number (i.e., containing any characters other than 0 and 1), the function returns an error.
- **Booleans**: If the argument is a boolean value, the function treats `TRUE` as 1 and `FALSE` as 0.
- **Errors**: If the argument is an error value, the function propagates that error.
- **Numeric values**: If the argument is a numeric value, the function first converts it to a text string, then processes it as a binary number. If the number contains any digits other than 0 and 1, the function returns an error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the binary number is greater than 10 digits (because the binary number can't be greater than 1111111111) |
| #VALUE! | Occurs if the argument is not a valid binary number (i.e., it contains any characters other than 0 and 1) |

### Best practices

> - Always ensure that the binary number you input into the `BIN2DEC` function is valid. It should not contain any characters other than 0 and 1.
> - Be cautious when using cell references as arguments. Make sure the referenced cell contains a valid binary number.
> - Remember that the `BIN2DEC` function can only handle binary numbers up to 10 digits. If your binary number is longer, you will need to split it up or use a different method to convert it to decimal.
> - When dealing with binary numbers as results of other calculations, ensure to convert them to text format before using them as arguments for the `BIN2DEC` function.

### Usage

A few examples using the BIN2DEC function.

```
BIN2DEC("110101")     → 53  
BIN2DEC("0000000001") → 1  
BIN2DEC("1111111111") → -1  
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
        "Binary Number",
        "Decimal Equivalent"
    ],
    [
        "1010",
        "=BIN2DEC(A2)"
    ],
    [
        "110101",
        "=BIN2DEC(A3)"
    ],
    [
        "1111",
        "=BIN2DEC(A4)"
    ],
    [
        "101010",
        "=BIN2DEC(A5)"
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
        "Binary Number",
        "Decimal Equivalent"
    ],
    [
        "1010",
        "=BIN2DEC(A2)"
    ],
    [
        "110101",
        "=BIN2DEC(A3)"
    ],
    [
        "1111",
        "=BIN2DEC(A4)"
    ],
    [
        "101010",
        "=BIN2DEC(A5)"
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
        "Binary Number",
        "Decimal Equivalent"
    ],
    [
        "1010",
        "=BIN2DEC(A2)"
    ],
    [
        "110101",
        "=BIN2DEC(A3)"
    ],
    [
        "1111",
        "=BIN2DEC(A4)"
    ],
    [
        "101010",
        "=BIN2DEC(A5)"
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
        "Binary Number",
        "Decimal Equivalent"
    ],
    [
        "1010",
        "=BIN2DEC(A2)"
    ],
    [
        "110101",
        "=BIN2DEC(A3)"
    ],
    [
        "1111",
        "=BIN2DEC(A4)"
    ],
    [
        "101010",
        "=BIN2DEC(A5)"
    ]
]
            }]
        });
    }
}
```

