title: DIVIDE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DIVIDE function in Jspreadsheet

# DIVIDE function

`PRO`{.jtag}

The `DIVIDE` function in Jspreadsheet Formulas Pro is a mathematical tool that gives you the result of dividing one number by another. It takes two numbers as input; the first number is the dividend (the number to be divided) and the second is the divisor (the number to divide by). This function will perform the calculation and return the quotient. It's a simple, straightforward way to perform division operations within your spreadsheet.

## Documentation

Returns the division result of two numbers.

### Category

Math and trigonometry

### Syntax

DIVIDE(number1, number2)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The dividend. |
| `number2` | The divisor. |


### Behavior

The 'DIVIDE' function in spreadsheet applications is used to divide one number by another. The function requires two arguments, the numerator and the denominator. Here's how it handles different types of inputs:

- **Numbers**: As expected, 'DIVIDE' will divide the first number by the second number.
- **Empty Cells**: Empty cells are treated as zero in the calculation, which could lead to a division by zero error if the empty cell is the denominator.
- **Text**: If the 'DIVIDE' function is used with text, it generally returns a value error.
- **Booleans**: Boolean values are treated as numbers, with TRUE as 1 and FALSE as 0. Thus, a TRUE in the denominator will result in a division by one, while FALSE will result in a division by zero error.
- **Errors**: If either of the arguments is an error, the 'DIVIDE' function will return an error.

### Common Errors

| Error | Description |
| ------| ------------|
| #DIV/0! | This error occurs when the second argument (the denominator) in the 'DIVIDE' function is zero or empty, as division by zero is undefined.|
| #VALUE! | This error is displayed when either one or both of the arguments in the 'DIVIDE' function are text that cannot be translated into numbers. |

### Best Practices

> - Always ensure that the denominator in your 'DIVIDE' function is not zero or an empty cell, to avoid a #DIV/0! error.
> - Be aware that text inputs will return a #VALUE! error. Always ensure your inputs are numerical.
> - Use error handling functions like 'IFERROR' in conjunction with 'DIVIDE' to return a specific value or message when there is an error.
> - When using cell references in your 'DIVIDE' function, make sure the referenced cells contain numerical values.

### Usage

A few examples using the DIVIDE function.

```
DIVIDE(10, 2) returns 5  
DIVIDE(A2, B2) returns the division result of the values in cells A2 and B2  
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
        "Total Revenue",
        "Number of Units",
        "Price per Unit"
    ],
    [
        1200,
        40,
        "=DIVIDE(A2,B2)"
    ],
    [
        2500,
        50,
        "=DIVIDE(A3,B3)"
    ],
    [
        1800,
        30,
        "=DIVIDE(A4,B4)"
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
        "Total Revenue",
        "Number of Units",
        "Price per Unit"
    ],
    [
        1200,
        40,
        "=DIVIDE(A2,B2)"
    ],
    [
        2500,
        50,
        "=DIVIDE(A3,B3)"
    ],
    [
        1800,
        30,
        "=DIVIDE(A4,B4)"
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
        "Total Revenue",
        "Number of Units",
        "Price per Unit"
    ],
    [
        1200,
        40,
        "=DIVIDE(A2,B2)"
    ],
    [
        2500,
        50,
        "=DIVIDE(A3,B3)"
    ],
    [
        1800,
        30,
        "=DIVIDE(A4,B4)"
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
        "Total Revenue",
        "Number of Units",
        "Price per Unit"
    ],
    [
        1200,
        40,
        "=DIVIDE(A2,B2)"
    ],
    [
        2500,
        50,
        "=DIVIDE(A3,B3)"
    ],
    [
        1800,
        30,
        "=DIVIDE(A4,B4)"
    ]
]
            }]
        });
    }
}
```

