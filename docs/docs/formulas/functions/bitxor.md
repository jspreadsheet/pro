title: BITXOR Function – Bitwise XOR Operations in Jspreadsheet
keywords: Jspreadsheet, BITXOR, bitwise XOR, binary logic, engineering functions, spreadsheet binary operations, JavaScript spreadsheet formulas, custom formulas, Excel-like spreadsheet
description: How to use the BITXOR function in Jspreadsheet to return the result of a bitwise XOR operation between two integers. Ideal for logic calculations, flag toggling, and binary data processing.

# BITXOR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BITXOR` function in Jspreadsheet Formulas Pro is a tool used to perform a bitwise 'XOR' operation on two numbers. In simpler terms, it compares the binary representations of two numbers and Returns a new integer where each bit is 1 if the input bits differ, and 0 if they are the same.. This function goes through each bit of the binary representation and returns 1 if the two bits are different, and 0 if they are the same. This is a handy function for performing advanced mathematical calculations, data analysis or creating digital circuits in Jspreadsheet.

## Documentation

Returns a bitwise 'XOR' of two numbers.

### Category

Engineering

### Syntax

BITXOR(number1, number2)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number to be used in the bitwise operation. |
| `number2` | The second number to be used in the bitwise operation. |


### Behavior

The `BITXOR` function in spreadsheets performs an exclusive OR operation on two numbers. This function takes two arguments, both of which should be integers and returns the result as an integer. The behavior of this function with different types of inputs is as follows:

- **Empty Cells**: Treated as `0`
- **Text Strings**: Return `#VALUE!` error
- **Booleans**: `TRUE` is treated as `1`, `FALSE` as `0`
- **Errors**: If either input is an error, it propagates
- **Decimals**: Truncated (not rounded) to integers
- **Limits**: Valid range is from `0` to `(2^48) - 1`

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when one or both of the inputs to the function are not numbers. It also occurs when the function encounters a text string as input. |
| #NUM!  | This error is returned when the input numbers are less than 0 or greater than (2^48)-1. |

### Best practices

> - Always ensure that the inputs to the `BITXOR` function are integers. If the inputs are not integers, the function will truncate them.
> - Be careful when using cells that might contain non-numeric values. Non-numeric values can cause the `BITXOR` function to return errors.
> - Use error handling functions like `IFERROR` with `BITXOR` to catch and handle errors gracefully.
> - Avoid using large numbers as inputs to the `BITXOR` function, as it might return a `#NUM!` error. The function works best with numbers between 0 and (2^48)-1.

### Usage

A few examples using the BITXOR function.

```
BITXOR(5, 3) returns 6 (Binary: 0101 XOR 0011 = 0110 → 6)
BITXOR(12, 8) returns 4 (Binary: 1100 XOR 1000 = 0100 → 4)
BITXOR(25, 18) returns 11 (Binary: 11001 XOR 10010 = 01011 → 11)
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
        "Number 1",
        "Number 2",
        "BITXOR Result"
    ],
    [
        5,
        3,
        "=BITXOR(A2,B2)"
    ],
    [
        12,
        8,
        "=BITXOR(A3,B3)"
    ],
    [
        25,
        18,
        "=BITXOR(A4,B4)"
    ],
    [
        7,
        15,
        "=BITXOR(A5,B5)"
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
        "Number 1",
        "Number 2",
        "BITXOR Result"
    ],
    [
        5,
        3,
        "=BITXOR(A2,B2)"
    ],
    [
        12,
        8,
        "=BITXOR(A3,B3)"
    ],
    [
        25,
        18,
        "=BITXOR(A4,B4)"
    ],
    [
        7,
        15,
        "=BITXOR(A5,B5)"
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
        "Number 1",
        "Number 2",
        "BITXOR Result"
    ],
    [
        5,
        3,
        "=BITXOR(A2,B2)"
    ],
    [
        12,
        8,
        "=BITXOR(A3,B3)"
    ],
    [
        25,
        18,
        "=BITXOR(A4,B4)"
    ],
    [
        7,
        15,
        "=BITXOR(A5,B5)"
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
        "Number 1",
        "Number 2",
        "BITXOR Result"
    ],
    [
        5,
        3,
        "=BITXOR(A2,B2)"
    ],
    [
        12,
        8,
        "=BITXOR(A3,B3)"
    ],
    [
        25,
        18,
        "=BITXOR(A4,B4)"
    ],
    [
        7,
        15,
        "=BITXOR(A5,B5)"
    ]
]
            }]
        });
    }
}
```

