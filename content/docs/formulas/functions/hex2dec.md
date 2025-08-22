title: HEX2DEC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the HEX2DEC function in Jspreadsheet

# HEX2DEC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `HEX2DEC` function in Jspreadsheet Formulas Pro is a tool that allows you to convert a hexadecimal number into a decimal number. Hexadecimal is a numbering system that uses 16 different symbols (0-9 and A-F), while decimal is the standard numbering system we use daily (0-9). So, if you input a hexadecimal number into the `HEX2DEC` function, it will output the corresponding decimal value. This function is especially useful when dealing with data that includes hexadecimal numbers.

## Documentation

Converts a hexadecimal number to decimal.

### Category

Engineering

### Syntax

HEX2DEC(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The hexadecimal number you want to convert to decimal. |


### Behavior

The `HEX2DEC` function in a spreadsheet converts a hexadecimal number to decimal. The function takes only one argument which is the hexadecimal number that you want to convert to a decimal number. Here's how it handles various inputs:

- Empty cells: If the `HEX2DEC` function is given an empty cell, it will return a `#VALUE!` error.
- Text: The function will try to interpret any text it's given as a hexadecimal number. If the text can't be interpreted as such, it will return a `#NUM!` error.
- Booleans: Booleans are not valid input for the `HEX2DEC` function and it will return a `#VALUE!` error.
- Errors: If the argument to `HEX2DEC` is an error, it will return that error.
- Hexadecimal number: The function will correctly convert a hexadecimal number to a decimal number.

### Common Errors

| Error | Description |
| --- | --- |
| `#NUM!` | Occurs if the hexadecimal number is invalid or the result of the conversion would be greater than 2^40 - 1 or less than -2^39. |
| `#VALUE!` | Occurs if the given argument is not a valid hexadecimal number, the cell is empty, or the argument is a boolean. |
| `#N/A` | Occurs if the required argument for the function is missing. | 

### Best practices

> - Always ensure that the input to the `HEX2DEC` function is a valid hexadecimal number to avoid errors.
> - The `HEX2DEC` function can handle both positive and negative hexadecimal numbers. But remember, negative hexadecimal numbers must be in two’s complement notation.
> - Keep in mind that the `HEX2DEC` function in a spreadsheet can handle hexadecimal numbers of up to 10 characters (40 bits) only.
> - Use error handling functions like `IFERROR` or `ISERROR` alongside `HEX2DEC` to handle possible errors and keep your spreadsheet clean and professional.

### Usage

A few examples using the HEX2DEC function.

```
HEX2DEC("A") returns 10  
HEX2DEC("1D") returns 29  
HEX2DEC("FFFF") returns 65535  
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
        "Hex Value",
        "Decimal Equivalent"
    ],
    [
        "A",
        "=HEX2DEC(A2)"
    ],
    [
        "1F",
        "=HEX2DEC(A3)"
    ],
    [
        "FF",
        "=HEX2DEC(A4)"
    ],
    [
        "3E8",
        "=HEX2DEC(A5)"
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
        "Hex Value",
        "Decimal Equivalent"
    ],
    [
        "A",
        "=HEX2DEC(A2)"
    ],
    [
        "1F",
        "=HEX2DEC(A3)"
    ],
    [
        "FF",
        "=HEX2DEC(A4)"
    ],
    [
        "3E8",
        "=HEX2DEC(A5)"
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
        "Hex Value",
        "Decimal Equivalent"
    ],
    [
        "A",
        "=HEX2DEC(A2)"
    ],
    [
        "1F",
        "=HEX2DEC(A3)"
    ],
    [
        "FF",
        "=HEX2DEC(A4)"
    ],
    [
        "3E8",
        "=HEX2DEC(A5)"
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
        "Hex Value",
        "Decimal Equivalent"
    ],
    [
        "A",
        "=HEX2DEC(A2)"
    ],
    [
        "1F",
        "=HEX2DEC(A3)"
    ],
    [
        "FF",
        "=HEX2DEC(A4)"
    ],
    [
        "3E8",
        "=HEX2DEC(A5)"
    ]
]
            }]
        });
    }
}
```

