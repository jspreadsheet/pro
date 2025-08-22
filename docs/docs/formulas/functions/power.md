title: POWER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the POWER function in Jspreadsheet

# POWER function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `POWER` function in Jspreadsheet Formulas Pro is a beneficial tool that gives you the result of a number raised to a certain power. For instance, if you want to calculate 2 raised to the power of 3, you can use this function and it will return 8, as 2*2*2 equals 8. It's a simple and swift way to perform exponential calculations, enhancing the efficiency of your spreadsheet tasks.

## Documentation

Returns the result of a number raised to a power.

### Category

Math and trigonometry

### Syntax

POWER(number, power)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The base number. |
| `power` | The exponent by which to raise the base. |


### Behavior

The `POWER` function in spreadsheets is used to raise a number to a specific power. The function takes two arguments: the base number and the exponent. Here's how it handles different types of data:

- **Numbers**: The function works best with numerical data. Both the base and the exponent should be numbers. For example, `POWER(2,3)` will return `8`, as it raises `2` to the power of `3`.

- **Empty Cells**: If either the base or the exponent is an empty cell, the function will return an error.

- **Text**: If either the base or the exponent is a text string, the function will return an error, as it expects numerical input.

- **Booleans**: If the function encounters a Boolean value (`TRUE` or `FALSE`), it converts `TRUE` to `1` and `FALSE` to `0`. For example, `POWER(TRUE, 3)` will return `1`.

- **Errors**: If either the base or the exponent contains an error, the `POWER` function will also return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when either the base or the exponent is non-numeric.|
| #NUM! | This error is displayed when the base is a negative number and the exponent is a non-integer.|
| #DIV/0! | This error is displayed when the base is `0` and the exponent is `0` or negative.|

### Best practices

> - Always ensure that both the base and the exponent are numeric. The `POWER` function does not work with text strings and may produce unexpected results with Boolean values.
> - Be aware that the `POWER` function can handle decimal exponents, but if you provide a negative base with a non-integer exponent, it will return an error.
> - When using cell references as arguments, make sure those cells contain the expected numeric data to avoid errors.
> - Use the `POWER` function to perform complex mathematical operations, but remember that for simple squares and cubes, using `^2` or `^3` can be more straightforward and efficient.

### Usage

A few examples using the POWER function.

```
POWER(2,3) returns 8, which is 2 raised to the power of 3  
POWER(A1,B1) returns the value of cell A1 raised to the power of the value in cell B1  
POWER(10,-2) returns 0.01, which is 10 raised to the power of -2  
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
        "Base",
        "Exponent",
        "Result"
    ],
    [
        2,
        3,
        "=POWER(A2,B2)"
    ],
    [
        5,
        2,
        "=POWER(A3,B3)"
    ],
    [
        10,
        -1,
        "=POWER(A4,B4)"
    ],
    [
        4,
        0.5,
        "=POWER(A5,B5)"
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
        "Base",
        "Exponent",
        "Result"
    ],
    [
        2,
        3,
        "=POWER(A2,B2)"
    ],
    [
        5,
        2,
        "=POWER(A3,B3)"
    ],
    [
        10,
        -1,
        "=POWER(A4,B4)"
    ],
    [
        4,
        0.5,
        "=POWER(A5,B5)"
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
        "Base",
        "Exponent",
        "Result"
    ],
    [
        2,
        3,
        "=POWER(A2,B2)"
    ],
    [
        5,
        2,
        "=POWER(A3,B3)"
    ],
    [
        10,
        -1,
        "=POWER(A4,B4)"
    ],
    [
        4,
        0.5,
        "=POWER(A5,B5)"
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
        "Base",
        "Exponent",
        "Result"
    ],
    [
        2,
        3,
        "=POWER(A2,B2)"
    ],
    [
        5,
        2,
        "=POWER(A3,B3)"
    ],
    [
        10,
        -1,
        "=POWER(A4,B4)"
    ],
    [
        4,
        0.5,
        "=POWER(A5,B5)"
    ]
]
            }]
        });
    }
}
```

