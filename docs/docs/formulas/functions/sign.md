title: SIGN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SIGN function in Jspreadsheet

# SIGN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SIGN` function in Jspreadsheet Formulas Pro is a handy tool that lets you identify the sign of a given number. If you input a positive number, it will return 1. Conversely, if you input a negative number, it will return -1. And if the number you input is zero, the function will return 0.

## Documentation

Returns the sign of a number: 1 if the number is positive, -1 if negative, and 0 if zero.

### Category

Math and trigonometry

### Syntax

SIGN(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number for which to determine the sign. |


### Behavior

The 'SIGN' function in a spreadsheet is used to determine the sign of a number. It returns 1 if the number is positive, 0 if it's zero, and -1 if it's negative. Here's how it handles different types of input:

- Numbers: The function works as expected with number inputs.
- Empty cells: When the function is applied to an empty cell, it takes it as zero and returns 0.
- Text: If the function is applied to a cell containing text, it will return a `#VALUE!` error. 
- Booleans: Booleans are treated as numbers, where TRUE is 1 and FALSE is 0.
- Errors: If the referenced cell contains an error, the SIGN function will also return that error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned when the input cell contains non-numeric values, like text. |
| `#REF!` | This error is returned when the referenced cell is invalid. |
| `#NAME?` | This error is returned when the spreadsheet does not recognize the function name. This usually happens due to a typo in the function name. |

### Best practices

> - Always ensure that the cell references used in the 'SIGN' function point to cells containing numeric values to prevent `#VALUE!` errors.
> - Use error handling functions like `IFERROR` or `ISERROR` with 'SIGN' to make your spreadsheet more robust and prevent it from breaking due to errors in referenced cells.
> - Remember that the 'SIGN' function treats logical values and empty cells as numbers. Be cautious if your data set contains these types of values.
> - Use the 'SIGN' function to quickly analyze the positivity or negativity of values in large data sets.

### Usage

A few examples using the SIGN function.

```
SIGN(42) returns 1  
SIGN(-3.14) returns -1  
SIGN(0) returns 0  
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
        "Value",
        "Sign"
    ],
    [
        25,
        "=SIGN(A2)"
    ],
    [
        -15,
        "=SIGN(A3)"
    ],
    [
        0,
        "=SIGN(A4)"
    ],
    [
        -7.5,
        "=SIGN(A5)"
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
        "Value",
        "Sign"
    ],
    [
        25,
        "=SIGN(A2)"
    ],
    [
        -15,
        "=SIGN(A3)"
    ],
    [
        0,
        "=SIGN(A4)"
    ],
    [
        -7.5,
        "=SIGN(A5)"
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
        "Value",
        "Sign"
    ],
    [
        25,
        "=SIGN(A2)"
    ],
    [
        -15,
        "=SIGN(A3)"
    ],
    [
        0,
        "=SIGN(A4)"
    ],
    [
        -7.5,
        "=SIGN(A5)"
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
        "Value",
        "Sign"
    ],
    [
        25,
        "=SIGN(A2)"
    ],
    [
        -15,
        "=SIGN(A3)"
    ],
    [
        0,
        "=SIGN(A4)"
    ],
    [
        -7.5,
        "=SIGN(A5)"
    ]
]
            }]
        });
    }
}
```

