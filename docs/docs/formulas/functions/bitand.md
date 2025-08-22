title: BITAND Function – Perform Bitwise AND Operation in Jspreadsheet
keywords: Jspreadsheet, BITAND, bitwise operations, spreadsheet bitwise AND, binary logic, JavaScript spreadsheet formulas, engineering functions, Excel-like formulas, integer operations, binary functions, logical formulas
description: How to use the BITAND function in Jspreadsheet to perform a bitwise AND operation between two non-negative integers. This function compares the binary form of each number and returns the decimal result of the bitwise logic operation.

# BITAND function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `BITAND` function in Jspreadsheet Formulas Pro returns the bitwise AND of two numbers. It compares the binary representation of both numbers bit by bit, returning a number where each bit is 1 only if the corresponding bits in both input numbers are 1; otherwise, the result bit is 0.

## Documentation

Performs a bitwise AND operation and returns the result as a decimal integer.

### Category

Engineering

### Syntax

BITAND(number1, number2)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number to be used in the bitwise operation. |
| `number2` | The second number to be used in the bitwise operation. |


### Behavior

- Binary comparison: Compares each bit of the inputs and returns the bitwise AND result in decimal.
- Empty cells: May result in #VALUE! if no implicit coercion is possible.
- Text: Causes a #VALUE! error unless coerced.
- Booleans: Treated as TRUE = 1, FALSE = 0.
- Non-integers: Values are floored to the nearest integer.
- Negative values: Cause #NUM! error — only non-negative integers are allowed.
- Error values: Any error in the arguments is propagated.

### Common Errors

| Error | Description |
| ----- | ----------- |
| `#VALUE!` | This error occurs when one or both of the arguments are non-numeric values. |
| `#NUM!` | This error is returned when the function encounters a negative number as an argument. |

### Best practices

> - Always ensure to input positive integer values as arguments to avoid errors.
> - Be careful when using cell references or ranges as arguments. Ensure they contain the appropriate values.
> - Remember that the `BITAND` function truncates decimal numbers to integers. If the integrity of decimal numbers is important, this function may not be suitable.
> - Use error handling functions like `IFERROR` to manage errors that might result from inappropriate inputs. This is especially useful when your `BITAND` function is part of a larger expression or formula.

### Usage

A few examples using the BITAND function.

```
BITAND(7, 3)     → 3    // 111 & 011 = 011
BITAND(10, 6)    → 2    // 1010 & 0110 = 0010
BITAND(25, 18)   → 16   // 11001 & 10010 = 10000
BITAND(TRUE, 3)  → 1    // 0001 & 0011 = 0001 
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
        "BITAND Result"
    ],
    [
        7,
        3,
        "=BITAND(A2,B2)"
    ],
    [
        10,
        6,
        "=BITAND(A3,B3)"
    ],
    [
        25,
        18,
        "=BITAND(A4,B4)"
    ],
    [
        15,
        9,
        "=BITAND(A5,B5)"
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
        "BITAND Result"
    ],
    [
        7,
        3,
        "=BITAND(A2,B2)"
    ],
    [
        10,
        6,
        "=BITAND(A3,B3)"
    ],
    [
        25,
        18,
        "=BITAND(A4,B4)"
    ],
    [
        15,
        9,
        "=BITAND(A5,B5)"
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
        "BITAND Result"
    ],
    [
        7,
        3,
        "=BITAND(A2,B2)"
    ],
    [
        10,
        6,
        "=BITAND(A3,B3)"
    ],
    [
        25,
        18,
        "=BITAND(A4,B4)"
    ],
    [
        15,
        9,
        "=BITAND(A5,B5)"
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
        "BITAND Result"
    ],
    [
        7,
        3,
        "=BITAND(A2,B2)"
    ],
    [
        10,
        6,
        "=BITAND(A3,B3)"
    ],
    [
        25,
        18,
        "=BITAND(A4,B4)"
    ],
    [
        15,
        9,
        "=BITAND(A5,B5)"
    ]
]
            }]
        });
    }
}
```

