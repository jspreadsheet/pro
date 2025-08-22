title: OCT2BIN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the OCT2BIN function in Jspreadsheet

# OCT2BIN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `OCT2BIN` function in Jspreadsheet Formulas Pro is a handy tool that allows you to convert an octal number into binary. Octal numbers are base-8, meaning they use digits from 0-7, while binary numbers are base-2, using only 0 and 1. In essence, the `OCT2BIN` function takes your octal number input and gives the equivalent value in binary. This function is especially useful for digital computing and data processing tasks.

## Documentation

Converts a octal number to binary.

### Category

Engineering

### Syntax

OCT2BIN(num, [places])

| Parameter | Description |
| ----------- | ------------- |
| `num` | The octal number you want to convert to binary. The number cannot contain more than 10 characters (10 bits). |
| `places` | Optional. Argument that specifies the minimum number of characters (bits) to use for the binary number. If omitted, Excel uses the smallest number of characters required. |


### Behavior

The `OCT2BIN` function in spreadsheets is used to convert octal numbers to binary. Here's how it handles different types of inputs:

- **Numbers**: This function accurately converts octal numbers into their binary equivalents. For instance, `OCT2BIN(10)` will return `1000`.
- **Empty cells**: If the cell referenced is empty, the function will return a `#NUM!` error. 
- **Text**: If the input is a text string, the function will return a `#NUM!` error unless the text string represents a valid octal number.
- **Booleans**: If a boolean value (TRUE or FALSE) is used as an input, the function will return a `#VALUE!` error.
- **Errors**: If the cell referenced contains an error, the `OCT2BIN` function will also return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | This error is displayed when: <br> - The provided octal number is negative or it's not a valid octal number. <br> - The provided number of digits is negative or non-numeric.|
| #VALUE! | This error is displayed when the provided octal number or number of digits is non-numeric, such as a text string or a boolean value. |

### Best practices

> - Always ensure that the octal number provided is positive and valid to avoid the `#NUM!` error.
> - Be sure to provide the number of digits as a positive integer if you're using this optional argument.
> - `OCT2BIN` function operates on 10 digits (30 bits) for octal numbers. If number_digits is not provided, the function will consider the least significant (rightmost) 10 digits.
> - Be cautious while referencing cells. If the cell contains non-numeric values or errors, the `OCT2BIN` function will return an error.

### Usage

A few examples using the OCT2BIN function.

```
OCT2BIN(63) returns 110011  
OCT2BIN(72) returns 111010  
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
        "Octal Input",
        "Binary Output",
        "Binary (8 places)"
    ],
    [
        63,
        "=OCT2BIN(A2)",
        "=OCT2BIN(A2,8)"
    ],
    [
        72,
        "=OCT2BIN(A3)",
        "=OCT2BIN(A3,8)"
    ],
    [
        147,
        "=OCT2BIN(A4)",
        "=OCT2BIN(A4,8)"
    ],
    [
        25,
        "=OCT2BIN(A5)",
        "=OCT2BIN(A5,8)"
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
        "Octal Input",
        "Binary Output",
        "Binary (8 places)"
    ],
    [
        63,
        "=OCT2BIN(A2)",
        "=OCT2BIN(A2,8)"
    ],
    [
        72,
        "=OCT2BIN(A3)",
        "=OCT2BIN(A3,8)"
    ],
    [
        147,
        "=OCT2BIN(A4)",
        "=OCT2BIN(A4,8)"
    ],
    [
        25,
        "=OCT2BIN(A5)",
        "=OCT2BIN(A5,8)"
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
        "Octal Input",
        "Binary Output",
        "Binary (8 places)"
    ],
    [
        63,
        "=OCT2BIN(A2)",
        "=OCT2BIN(A2,8)"
    ],
    [
        72,
        "=OCT2BIN(A3)",
        "=OCT2BIN(A3,8)"
    ],
    [
        147,
        "=OCT2BIN(A4)",
        "=OCT2BIN(A4,8)"
    ],
    [
        25,
        "=OCT2BIN(A5)",
        "=OCT2BIN(A5,8)"
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
        "Octal Input",
        "Binary Output",
        "Binary (8 places)"
    ],
    [
        63,
        "=OCT2BIN(A2)",
        "=OCT2BIN(A2,8)"
    ],
    [
        72,
        "=OCT2BIN(A3)",
        "=OCT2BIN(A3,8)"
    ],
    [
        147,
        "=OCT2BIN(A4)",
        "=OCT2BIN(A4,8)"
    ],
    [
        25,
        "=OCT2BIN(A5)",
        "=OCT2BIN(A5,8)"
    ]
]
            }]
        });
    }
}
```

