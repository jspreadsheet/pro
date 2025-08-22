title: BASE Function – Convert Decimal to Binary, Octal, or Hex in Jspreadsheet
keywords: Jspreadsheet, BASE function, number conversion, decimal to binary, decimal to hexadecimal, spreadsheet formulas, custom formulas, JavaScript spreadsheet, Excel-like formulas, radix conversion, math functions, numeral systems, base conversion
description: How to use the BASE function in Jspreadsheet to convert decimal numbers into binary, octal, hexadecimal, or other numeral systems. Useful for programming, data encoding, and mathematical operations.

# BASE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BASE` function in Jspreadsheet Formulas Pro is a tool utilized to convert a number from the decimal system to other numbering systems such as binary, octal, or hexadecimal. Essentially, it changes the 'base' or foundation of your number system. This is especially useful when working with different programming languages or mathematical problems that require these specific number systems. With the `BASE` function, this conversion process becomes simple and efficient.

## Documentation

Converts a decimal number to a string representation in a specified numeral system (base).

### Category

Math and trigonometry

### Syntax

BASE(number, radix, [min_length])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The decimal number to be converted. |
| `radix` | The base of the numbering system to convert to. Can be 2 (binary), 8 (octal), or 16 (hexadecimal). |
| `min_length` | Optional. The minimum length of the result. If omitted, the result is not padded with leading zeros. |


### Behavior

The `BASE` function in spreadsheets is used to convert a number into a text representation with the given base. The function takes three arguments: the number to convert, the radix or base, and an optional minimum length for the output string. The function will handle different inputs in the following ways:

- **Numbers**: The function will convert the number into a text representation in the given base.
- **Empty cells**: If the cell is empty, the function will return an error because a number is required for the conversion.
- **Text**: If the cell contains text, the function will return an error because a number is required for the conversion.
- **Booleans**: If the cell contains a boolean, the function will convert the boolean into a number (true = 1, false = 0) before performing the conversion.
- **Errors**: If the cell contains an error, the function will return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the provided number is non-numeric, the radix is less than 2 or greater than 36, or the minimum length argument is less than 0. |
| #NUM! | This error occurs when the number to be converted is negative or if it's not an integer. |

### Best practices

> - Ensure that the number you want to convert is a positive integer, as the `BASE` function does not support negative numbers or non-integer values.
> - Make sure the radix or base you want to convert to is between 2 and 36, inclusive. Other values will result in a `#VALUE!` error.
> - Use the optional minimum length argument to control the length of the output string. However, this should not be negative, as it will result in a `#VALUE!` error.
> - Use error handling functions like `IFERROR` to handle potential errors that can occur with invalid inputs.

### Usage

A few examples using the BASE function.

```
BASE(255,2)        // returns "11111111"
BASE(255,16)       // returns "FF"
BASE(10,2,8)      // returns "00001010"
BASE(TRUE,8)       // returns "1"
BASE(FALSE,16)     // returns "0"
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
        "Decimal",
        "Binary",
        "Hexadecimal"
    ],
    [
        15,
        "=BASE(A2,2)",
        "=BASE(A2,16)"
    ],
    [
        255,
        "=BASE(A3,2)",
        "=BASE(A3,16)"
    ],
    [
        64,
        "=BASE(A4,2)",
        "=BASE(A4,16)"
    ],
    [
        128,
        "=BASE(A5,2)",
        "=BASE(A5,16)"
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
        "Decimal",
        "Binary",
        "Hexadecimal"
    ],
    [
        15,
        "=BASE(A2,2)",
        "=BASE(A2,16)"
    ],
    [
        255,
        "=BASE(A3,2)",
        "=BASE(A3,16)"
    ],
    [
        64,
        "=BASE(A4,2)",
        "=BASE(A4,16)"
    ],
    [
        128,
        "=BASE(A5,2)",
        "=BASE(A5,16)"
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
        "Decimal",
        "Binary",
        "Hexadecimal"
    ],
    [
        15,
        "=BASE(A2,2)",
        "=BASE(A2,16)"
    ],
    [
        255,
        "=BASE(A3,2)",
        "=BASE(A3,16)"
    ],
    [
        64,
        "=BASE(A4,2)",
        "=BASE(A4,16)"
    ],
    [
        128,
        "=BASE(A5,2)",
        "=BASE(A5,16)"
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
        "Decimal",
        "Binary",
        "Hexadecimal"
    ],
    [
        15,
        "=BASE(A2,2)",
        "=BASE(A2,16)"
    ],
    [
        255,
        "=BASE(A3,2)",
        "=BASE(A3,16)"
    ],
    [
        64,
        "=BASE(A4,2)",
        "=BASE(A4,16)"
    ],
    [
        128,
        "=BASE(A5,2)",
        "=BASE(A5,16)"
    ]
]
            }]
        });
    }
}
```

