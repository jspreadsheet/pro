title: BITOR Function – Perform Bitwise OR Operation in Jspreadsheet
keywords: Jspreadsheet, BITOR, bitwise OR, binary logic, spreadsheet bit operations, custom formulas, engineering functions, JavaScript formulas, Excel-like spreadsheet, integer binary functions, logic functions
description: How to use the BITOR function in Jspreadsheet to return the result of a bitwise OR operation on two non-negative integers. This logical operation is useful for data masking, flagging, permissions, and manipulating binary-encoded values.

# BITOR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BITOR` function in Jspreadsheet Formulas Pro is a mathematical tool that performs a bitwise 'OR' operation on two numbers. This means it compares the binary representation of these numbers bit by bit and applies the 'OR' logic. If at least one of the corresponding bits in the binary representation is 1, the result bit will be 1. This function is useful when you need to perform binary operations or manipulate data at the bit level.

## Documentation

Returns a bitwise 'OR' of two numbers.

### Category

Engineering

### Syntax

BITOR(number1, number2)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number to be used in the bitwise operation. |
| `number2` | The second number to be used in the bitwise operation. |


### Behavior

- Treats inputs as unsigned binary integers.
- Decimal or float inputs are floored to nearest lower integer.
- Booleans are coerced: TRUE = 1, FALSE = 0.
- Text or empty cells trigger #VALUE! error.
- Negative inputs or numbers > 2^48 - 1 (281,474,976,710,655) return #NUM!.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when one or both of the arguments is non-numeric text. |
| #NUM! | This error occurs when one or both of the arguments is greater than 2^48-1, or when an argument is a negative number and its absolute value is greater than 2^48. |

### Best practices

> - Always ensure that the arguments you pass to `BITOR` are integers. If they are not, consider using functions like `FLOOR`, `ROUND`, or `CEILING` to convert them to integers.
> - Be mindful of the binary representation of negative numbers. `BITOR` uses two's complement representation, which may not produce the expected result if you're considering negative numbers as simple binary.
> - Avoid using non-numeric text or empty cells as arguments to avoid errors.
> - Keep in mind the limit of the `BITOR` function. It can only handle numbers up to 2^48-1.

### Usage

A few examples using the BITOR function.

```
BITOR(5, 3)     → 7    // 0101 OR 0011 = 0111
BITOR(12, 8)    → 12   // 1100 OR 1000 = 1100
BITOR(25, 18)   → 27   // 11001 OR 10010 = 11011
BITOR(0, 0)     → 0    // 0000 OR 0000 = 0000
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
        "BITOR Result"
    ],
    [
        5,
        3,
        "=BITOR(A2,B2)"
    ],
    [
        12,
        8,
        "=BITOR(A3,B3)"
    ],
    [
        25,
        18,
        "=BITOR(A4,B4)"
    ],
    [
        7,
        15,
        "=BITOR(A5,B5)"
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
        "BITOR Result"
    ],
    [
        5,
        3,
        "=BITOR(A2,B2)"
    ],
    [
        12,
        8,
        "=BITOR(A3,B3)"
    ],
    [
        25,
        18,
        "=BITOR(A4,B4)"
    ],
    [
        7,
        15,
        "=BITOR(A5,B5)"
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
        "BITOR Result"
    ],
    [
        5,
        3,
        "=BITOR(A2,B2)"
    ],
    [
        12,
        8,
        "=BITOR(A3,B3)"
    ],
    [
        25,
        18,
        "=BITOR(A4,B4)"
    ],
    [
        7,
        15,
        "=BITOR(A5,B5)"
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
        "BITOR Result"
    ],
    [
        5,
        3,
        "=BITOR(A2,B2)"
    ],
    [
        12,
        8,
        "=BITOR(A3,B3)"
    ],
    [
        25,
        18,
        "=BITOR(A4,B4)"
    ],
    [
        7,
        15,
        "=BITOR(A5,B5)"
    ]
]
            }]
        });
    }
}
```

