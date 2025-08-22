title: BITLSHIFT Function – Shift Bits to the Left in Jspreadsheet
keywords: Jspreadsheet, BITLSHIFT, bitwise shift, binary logic, left shift, JavaScript formulas, spreadsheet formulas, Excel-like formulas, engineering functions, binary operations, custom spreadsheet logic, logical operations
description: How to use the BITLSHIFT function in Jspreadsheet to perform a bitwise left shift. This operation moves the bits of a number to the left by a specified amount, padding with zeroes on the right. It's useful for manipulating binary data and performing efficient multiplication by powers of two.

# BITLSHIFT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BITLSHIFT` function in Jspreadsheet Formulas Pro is a tool you can use to manipulate binary numbers, which are numbers made up only of 0s and 1s. It specifically "shifts" these binary numbers to the left, which means it moves all the existing digits in a binary number to the left by a certain amount. As it does this, it fills in any new, empty spaces on the right side of the number with zeroes.

## Documentation

Shifts the bits of a number to the left by a specified number of places, filling in with zeroes from the right.

### Category

Engineering

### Syntax

BITLSHIFT(number, shift_amount)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number whose bits you want to shift. |
| `shift_amount` | The number of bits to shift. A positive value shifts the bits to the left and a negative value shifts them to the right. |


### Behavior

- Multiplies number by 2^shift_amount, returning an integer.
- Inputs are floored if they contain decimal points.
- Negative values for either argument result in a #NUM! error.
- Does not accept text or boolean values — results in #VALUE!.
- Empty cells may be treated as zero or return an error depending on context.
- Maximum shift supported: typically up to 48 bits, depending on engine limits.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error occurs if either of the arguments are not numeric values. |
| #NUM! | This error occurs if the number is less than 0, if the shift_amount is less than 0, or if the shift_amount is greater than 48. |
| #N/A | This error occurs if the required arguments (number, shift_amount) are not provided. |

### Best practices

> - Always ensure that you are working with positive integers. `BITLSHIFT` does not handle negative numbers or non-integer values well.
> - Keep in mind that `BITLSHIFT` can handle up to 48 bits for the number. Shifting beyond this limit will result in a #NUM! error.
> - Remember that `BITLSHIFT` does not work with text or booleans. Always provide numeric inputs.
> - Use error handling functions like `IFERROR` to handle possible errors and keep your spreadsheet clean.

### Usage

A few examples using the BITLSHIFT function.

```
BITLSHIFT(8, 2)   → 32    // 8 × 2² = 32
BITLSHIFT(5, 3)   → 40    // 5 × 2³ = 40
BITLSHIFT(1, 0)   → 1     // Shift by 0 bits = unchanged
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
        4,
        2,
        "=BITLSHIFT(A2,B2)"
    ],
    [
        12,
        1,
        "=BITLSHIFT(A3,B3)"
    ],
    [
        7,
        3,
        "=BITLSHIFT(A4,B4)"
    ],
    [
        20,
        -2,
        "=BITLSHIFT(A5,B5)"
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
        4,
        2,
        "=BITLSHIFT(A2,B2)"
    ],
    [
        12,
        1,
        "=BITLSHIFT(A3,B3)"
    ],
    [
        7,
        3,
        "=BITLSHIFT(A4,B4)"
    ],
    [
        20,
        -2,
        "=BITLSHIFT(A5,B5)"
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
        4,
        2,
        "=BITLSHIFT(A2,B2)"
    ],
    [
        12,
        1,
        "=BITLSHIFT(A3,B3)"
    ],
    [
        7,
        3,
        "=BITLSHIFT(A4,B4)"
    ],
    [
        20,
        -2,
        "=BITLSHIFT(A5,B5)"
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
        4,
        2,
        "=BITLSHIFT(A2,B2)"
    ],
    [
        12,
        1,
        "=BITLSHIFT(A3,B3)"
    ],
    [
        7,
        3,
        "=BITLSHIFT(A4,B4)"
    ],
    [
        20,
        -2,
        "=BITLSHIFT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

