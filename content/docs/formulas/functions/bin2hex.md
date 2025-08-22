title: BIN2HEX Function – Convert Binary to Hexadecimal in Jspreadsheet
keywords: Jspreadsheet, JavaScript, spreadsheet functions, custom formulas, Excel-like functions, BIN2HEX, binary to hex, hexadecimal, engineering formulas, number systems, spreadsheet conversion
description: How to use the BIN2HEX function in Jspreadsheet to convert binary numbers into hexadecimal format. This guide provides the syntax, expected behaviors, common errors, and best practices for effectively working with different numeral systems in spreadsheet formulas.

# BIN2HEX function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BIN2HEX` function in Jspreadsheet Formulas Pro converts a binary number (a string of 0s and 1s) into its hexadecimal equivalent (base-16 format using digits 0–9 and letters A–F). This is especially useful for engineers and developers who need to work with data across binary and hexadecimal systems.

Just input the binary value into the formula, and it will return the corresponding hexadecimal representation. An optional second parameter allows you to specify the minimum length of the result by padding with zeros.

## Documentation

Converts a binary number to hexadecimal.

### Category

Engineering

### Syntax

BIN2HEX(number, [places])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The binary number to convert to hexadecimal. Must be a string of up to 10 characters containing only 0's and 1's. |
| `[places]` | Optional. The number of characters to use. If omitted, places defaults to the minimum number necessary to represent the number. |


### Behavior

The 'BIN2HEX' function in spreadsheets is designed to convert a binary number, provided as a string, to a hexadecimal number. Here's how it handles different types of values:

- **Empty cells**: If the cell is empty, the function will return an error, as it requires a binary number to perform the conversion.
- **Text**: If the cell contains non-binary text, the function will return an error. It only accepts binary numbers (i.e., numbers composed of 0s and 1s).
- **Booleans**: The function does not support boolean values. If a cell with a boolean value is referenced, it will return an error.
- **Errors**: If the referenced cell contains an error, the 'BIN2HEX' function will also return an error.
- **Non-binary numbers**: If the number provided is not a binary number, the function will return an error.
- **Negative numbers**: If the binary number provided is negative, the function will convert it to two's complement hexadecimal representation.
- **Places argument**: 'BIN2HEX' function has an optional second argument that specifies the minimum number of characters to use. If the places argument is nonnumeric, the function will return an error.
- **Range**: The input binary must be between -512 and 10922 (decimal equivalent). Binary values beyond this cause

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs if the provided binary number is not a valid binary number or the places argument is nonnumeric. |
| #NUM! | Occurs if the binary number provided is greater than 10922 or less than -512. |
| #N/A | Occurs if the binary number or the places argument is missing. |

### Best practices

> - Always ensure that the binary number you are providing is a valid binary number (composed of only 0s and 1s).
> - Be mindful of the range of the binary number. The function supports binary numbers from -512 to 10922.
> - Use the places argument to specify the minimum number of characters to use. It can be useful for formatting the hexadecimal output.
> - Always check your cells for any errors before using them as a reference for the 'BIN2HEX' function to avoid cascading the error.

### Usage

A few examples using the BIN2HEX function.

```
BIN2HEX("110101")          → "35"
BIN2HEX("110101", 4)       → "0035"
BIN2HEX("1111111111")      → "FFFFFFFFFF"
BIN2HEX("1111111111", "x") → #VALUE!
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
        "Hexadecimal",
        "Hex (4 places)"
    ],
    [
        "1010",
        "=BIN2HEX(A2)",
        "=BIN2HEX(A2,4)"
    ],
    [
        "110101",
        "=BIN2HEX(A3)",
        "=BIN2HEX(A3,4)"
    ],
    [
        "1111",
        "=BIN2HEX(A4)",
        "=BIN2HEX(A4,4)"
    ],
    [
        "10110011",
        "=BIN2HEX(A5)",
        "=BIN2HEX(A5,4)"
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
        "Hexadecimal",
        "Hex (4 places)"
    ],
    [
        "1010",
        "=BIN2HEX(A2)",
        "=BIN2HEX(A2,4)"
    ],
    [
        "110101",
        "=BIN2HEX(A3)",
        "=BIN2HEX(A3,4)"
    ],
    [
        "1111",
        "=BIN2HEX(A4)",
        "=BIN2HEX(A4,4)"
    ],
    [
        "10110011",
        "=BIN2HEX(A5)",
        "=BIN2HEX(A5,4)"
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
        "Hexadecimal",
        "Hex (4 places)"
    ],
    [
        "1010",
        "=BIN2HEX(A2)",
        "=BIN2HEX(A2,4)"
    ],
    [
        "110101",
        "=BIN2HEX(A3)",
        "=BIN2HEX(A3,4)"
    ],
    [
        "1111",
        "=BIN2HEX(A4)",
        "=BIN2HEX(A4,4)"
    ],
    [
        "10110011",
        "=BIN2HEX(A5)",
        "=BIN2HEX(A5,4)"
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
        "Hexadecimal",
        "Hex (4 places)"
    ],
    [
        "1010",
        "=BIN2HEX(A2)",
        "=BIN2HEX(A2,4)"
    ],
    [
        "110101",
        "=BIN2HEX(A3)",
        "=BIN2HEX(A3,4)"
    ],
    [
        "1111",
        "=BIN2HEX(A4)",
        "=BIN2HEX(A4,4)"
    ],
    [
        "10110011",
        "=BIN2HEX(A5)",
        "=BIN2HEX(A5,4)"
    ]
]
            }]
        });
    }
}
```

