title: BITRSHIFT Function – Shift Bits to the Right in Jspreadsheet
keywords: Jspreadsheet, JavaScript spreadsheet, spreadsheet formulas, BITRSHIFT, bitwise functions, binary shift, custom spreadsheet functions, JavaScript formulas, Excel-like spreadsheets, bit manipulation, right shift, engineering formulas
description: How to use the BITRSHIFT function in Jspreadsheet to shift bits to the right. This guide explains its syntax, expected inputs, common errors, and practical use cases for working with binary data.

# BITRSHIFT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `BITRSHIFT` function shifts the bits of a number to the right, effectively dividing the number by a power of two and padding the left with zeroes. The space that is left empty when the bits are moved is then filled with zeroes. This function can be particularly useful when you're working with binary data and need to adjust the value or significance of certain bits.

## Documentation

Shifts bits to the right, padding with zeroes on the left.

### Category

Engineering

### Syntax

BITRSHIFT(num, shift_amount)

| Parameter | Description |
| ----------- | ------------- |
| `num` | The number whose bits you want to shift. |
| `shift_amount` | The number of bits to shift. A positive value shifts the bits to the right and a negative value shifts them to the left. |


### Behavior

- **Valid Inputs**: Both arguments must be numeric. `num` should be ≥ 0. `shift_amount` must be an integer.
- **Empty Cells**: Returns `#VALUE!`.
- **Text or Boolean Inputs**: Returns `#VALUE!`.
- **Negative `num`**: Treated as 32-bit signed integer.
- **Negative `shift_amount`**: Returns `#NUM!`.
- **Non-integer `shift_amount`**: Floored to nearest integer.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | This error is returned if the number is less than 0, or the number of positions to shift is less than 0. |
| #VALUE! | This error is returned if either the number or the number of positions to shift is non-numeric, or if either argument is an empty cell. |

### Best practices

> - Always ensure that the number and the shift amount are valid, positive integers to avoid errors.
> - Be aware that the function treats negative numbers as 32-bit binary numbers. This can result in unexpected behavior if you're not familiar with binary number representation.
> - Keep in mind that the function floors non-integer shift amounts to the nearest integer. To avoid unexpected results, always input the shift amount as an integer.
> - Remember that the `BITRSHIFT` function treats its inputs as base 10 numbers. If you're working with binary or hexadecimal numbers, you'll need to convert them to decimal before using this function.

### Usage

A few examples using the BITRSHIFT function.

```
BITRSHIFT(8, 2) returns `2`  (Shifting `1000` two positions right becomes `0010`, which equals 2)
BITRSHIFT(7, 3) returns `0` (All bits are shifted out of range: `0111` → `0000`)
BITRSHIFT("", 2) returns `#VALUE!`  (Empty input is invalid)
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
        "Shift Amount",
        "Result"
    ],
    [
        8,
        2,
        "=BITRSHIFT(A2,B2)"
    ],
    [
        16,
        -1,
        "=BITRSHIFT(A3,B3)"
    ],
    [
        7,
        3,
        "=BITRSHIFT(A4,B4)"
    ],
    [
        24,
        1,
        "=BITRSHIFT(A5,B5)"
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
        "Shift Amount",
        "Result"
    ],
    [
        8,
        2,
        "=BITRSHIFT(A2,B2)"
    ],
    [
        16,
        -1,
        "=BITRSHIFT(A3,B3)"
    ],
    [
        7,
        3,
        "=BITRSHIFT(A4,B4)"
    ],
    [
        24,
        1,
        "=BITRSHIFT(A5,B5)"
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
        "Shift Amount",
        "Result"
    ],
    [
        8,
        2,
        "=BITRSHIFT(A2,B2)"
    ],
    [
        16,
        -1,
        "=BITRSHIFT(A3,B3)"
    ],
    [
        7,
        3,
        "=BITRSHIFT(A4,B4)"
    ],
    [
        24,
        1,
        "=BITRSHIFT(A5,B5)"
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
        "Shift Amount",
        "Result"
    ],
    [
        8,
        2,
        "=BITRSHIFT(A2,B2)"
    ],
    [
        16,
        -1,
        "=BITRSHIFT(A3,B3)"
    ],
    [
        7,
        3,
        "=BITRSHIFT(A4,B4)"
    ],
    [
        24,
        1,
        "=BITRSHIFT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

