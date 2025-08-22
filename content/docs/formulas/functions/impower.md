title: IMPOWER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IMPOWER function in Jspreadsheet

# IMPOWER function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IMPOWER` function in Jspreadsheet Formulas Pro is used to calculate the power of a complex number. A complex number, in this context, is a number that has a real and an imaginary part. You input the complex number and the power you want to raise it to and the function performs the computation. This is a useful tool for mathematical calculations involving complex numbers.

## Documentation

Returns a complex number raised to a power.

### Category

Engineering

### Syntax

IMPOWER(inumber, number)

| Parameter | Description |
| ----------- | ------------- |
| `inumber` | The complex number that you want to raise to a power. |
| `number` | The power to which you want to raise the complex number. |


### Behavior

The 'IMPOWER' function in spreadsheets is used to return the result of a complex number raised to a given integer power. The function takes two arguments - the complex number in 'x+yi' or 'x+yj' format and the integer power. Here's how it behaves:

- If the cell is empty, the function will return an error.
- Non-numeric or text values result in an error.
- The function does not work with boolean values; it will return an error if the arguments are TRUE or FALSE.
- The function can handle both positive and negative integers as the power.
- If the power is not an integer, the function will return an error.
- If the complex number is not in the correct format, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If either of the arguments is non-numeric, or the power is not an integer, the function returns a #VALUE! error. |
| #NUM! | If the complex number is not in the correct format, the function returns a #NUM! error. |
| #DIV/0! | If the complex number is zero and the power is negative, the function returns a #DIV/0! error since it is mathematically undefined. |

### Best practices

> - Make sure the complex number is in the proper format ('x+yi' or 'x+yj') for the function to work correctly.
> - The power must be an integer. Decimal or non-numeric powers will result in an error.
> - Handle errors effectively using error-checking functions like IFERROR or ISERROR to ensure your spreadsheet functions smoothly.
> - Always check the data types of your arguments before inputting them into the 'IMPOWER' function to avoid errors.

### Usage

A few examples using the IMPOWER function.

```
IMPOWER("2+3i", 3) returns "-46+9i"  
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
        "Complex Number",
        "Power",
        "Result"
    ],
    [
        "2+3i",
        2,
        "=IMPOWER(A2,B2)"
    ],
    [
        "1+i",
        3,
        "=IMPOWER(A3,B3)"
    ],
    [
        "4-2i",
        2,
        "=IMPOWER(A4,B4)"
    ],
    [
        "3+4i",
        0.5,
        "=IMPOWER(A5,B5)"
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
        "Complex Number",
        "Power",
        "Result"
    ],
    [
        "2+3i",
        2,
        "=IMPOWER(A2,B2)"
    ],
    [
        "1+i",
        3,
        "=IMPOWER(A3,B3)"
    ],
    [
        "4-2i",
        2,
        "=IMPOWER(A4,B4)"
    ],
    [
        "3+4i",
        0.5,
        "=IMPOWER(A5,B5)"
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
        "Complex Number",
        "Power",
        "Result"
    ],
    [
        "2+3i",
        2,
        "=IMPOWER(A2,B2)"
    ],
    [
        "1+i",
        3,
        "=IMPOWER(A3,B3)"
    ],
    [
        "4-2i",
        2,
        "=IMPOWER(A4,B4)"
    ],
    [
        "3+4i",
        0.5,
        "=IMPOWER(A5,B5)"
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
        "Complex Number",
        "Power",
        "Result"
    ],
    [
        "2+3i",
        2,
        "=IMPOWER(A2,B2)"
    ],
    [
        "1+i",
        3,
        "=IMPOWER(A3,B3)"
    ],
    [
        "4-2i",
        2,
        "=IMPOWER(A4,B4)"
    ],
    [
        "3+4i",
        0.5,
        "=IMPOWER(A5,B5)"
    ]
]
            }]
        });
    }
}
```

