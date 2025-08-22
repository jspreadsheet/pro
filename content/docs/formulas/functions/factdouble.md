title: FACTDOUBLE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FACTDOUBLE function in Jspreadsheet

# FACTDOUBLE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FACTDOUBLE` function in Jspreadsheet Formulas Pro calculates the double factorial of a given number. It performs this by multiplying the specified number by every second preceding number until it reaches 1. For instance, if you input 5, it will calculate 5*3*1. This can be particularly useful in advanced mathematical operations and statistical analysis.

## Documentation

Returns the factorial of a number, multiplied by the factorial of number-2.

### Category

Math and trigonometry

### Syntax

FACTDOUBLE(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The non-negative integer for which to calculate the double factorial. |


### Behavior

The `FACTDOUBLE` function in spreadsheets calculates the double factorial of a given number. This means, for an input n, it calculates the product of all integers from n down to 1 with the same parity (odd or even). Here's how it handles different types of input:

- Numbers: The function works optimally with non-negative integer inputs. For example, `FACTDOUBLE(5)` returns 15, since 5*3*1 = 15.

- Text: If a text value is entered as an argument, the function returns a `#VALUE!` error.

- Booleans: If a boolean value (TRUE or FALSE) is entered as an argument, the function converts the boolean to its numeric equivalent (1 for TRUE, 0 for FALSE) and returns the double factorial of the numeric equivalent.

- Empty cells: If an empty cell is referenced as an argument, the function treats it as a zero and returns 1.

- Errors: If an error is referenced as an argument, the function returns the same error.

- Negative numbers: If a negative number is provided as an argument, the function returns a `#NUM!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when a text value is passed as an argument to the `FACTDOUBLE` function. |
| #NUM! | This error is returned when a negative number is passed as an argument to the `FACTDOUBLE` function. |
| #N/A | This error is returned when a reference error is passed as an argument to the `FACTDOUBLE` function. |

### Best practices

> - Always ensure that the argument passed to the `FACTDOUBLE` function is a non-negative integer. The function does not support text or negative numbers.
> - Be cautious when referencing cells as arguments. If the referenced cell contains a text value or an error, the `FACTDOUBLE` function will return an error.
> - Use the `ISNUMBER` function to validate inputs to the `FACTDOUBLE` function. This can help prevent unexpected errors.
> - Remember that the `FACTDOUBLE` function calculates the double factorial, not the standard factorial. For the standard factorial, use the `FACT` function instead.

### Usage

A few examples using the FACTDOUBLE function.

```
FACTDOUBLE(5) returns 15  
FACTDOUBLE(6) returns 48  
FACTDOUBLE(10) returns 3840  
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
        "Double Factorial",
        "Result"
    ],
    [
        5,
        "=FACTDOUBLE(A2)",
        15
    ],
    [
        6,
        "=FACTDOUBLE(A3)",
        48
    ],
    [
        8,
        "=FACTDOUBLE(A4)",
        384
    ],
    [
        10,
        "=FACTDOUBLE(A5)",
        3840
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
        "Double Factorial",
        "Result"
    ],
    [
        5,
        "=FACTDOUBLE(A2)",
        15
    ],
    [
        6,
        "=FACTDOUBLE(A3)",
        48
    ],
    [
        8,
        "=FACTDOUBLE(A4)",
        384
    ],
    [
        10,
        "=FACTDOUBLE(A5)",
        3840
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
        "Double Factorial",
        "Result"
    ],
    [
        5,
        "=FACTDOUBLE(A2)",
        15
    ],
    [
        6,
        "=FACTDOUBLE(A3)",
        48
    ],
    [
        8,
        "=FACTDOUBLE(A4)",
        384
    ],
    [
        10,
        "=FACTDOUBLE(A5)",
        3840
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
        "Double Factorial",
        "Result"
    ],
    [
        5,
        "=FACTDOUBLE(A2)",
        15
    ],
    [
        6,
        "=FACTDOUBLE(A3)",
        48
    ],
    [
        8,
        "=FACTDOUBLE(A4)",
        384
    ],
    [
        10,
        "=FACTDOUBLE(A5)",
        3840
    ]
]
            }]
        });
    }
}
```

