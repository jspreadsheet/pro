title: EXP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EXP function in Jspreadsheet

# EXP function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The EXP function in Jspreadsheet Formulas Pro is a mathematical tool that calculates the value of the constant "e" raised to the power of a specific number you provide. "e" is a famous mathematical constant approximately equal to 2.71828. So, if you input a number into the EXP function, it will perform the calculation of e to the power of that number. This function is particularly useful in scientific, statistical, or financial calculations where exponential growth or decay is involved.

## Documentation

The EXP function returns the value of e raised to a given power.

### Category

Math and trigonometry

### Syntax

EXP(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The exponent to raise e to. |


### Behavior

The 'EXP' function in spreadsheets is used to calculate the exponentiation of `e` (Euler's Number approximately equal to 2.71828) to the power of a given number. Here's how it handles different types of inputs:

- **Numbers**: The 'EXP' function correctly calculates the value of `e` raised to the power of the input number.
- **Empty Cells**: If the 'EXP' function is provided with an empty cell as its argument, it will treat it as zero and return 1, since any number raised to the power of zero is 1.
- **Text**: If the function is provided with a text string as its argument, it will return a #VALUE! error since it expects a numerical input.
- **Booleans**: If the function is provided with a Boolean value as its argument, it treats TRUE as 1 and FALSE as 0.
- **Errors**: If the function is provided with a cell containing an error as its argument, it will propagate that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the 'EXP' function is provided with a non-numeric input, such as a text string. |
| #NUM! | This error occurs when the result of the 'EXP' function is too large to be represented in the spreadsheet, such as when the input number is too large. |

### Best practices

> - Always ensure that the input to the 'EXP' function is numerical as non-numeric inputs will result in a #VALUE! error.
> - Be aware that extremely large inputs can result in a #NUM! error due to the limitations in the numerical representation in the spreadsheet.
> - Use 'EXP' function in conjunction with other functions to perform more complex calculations involving the natural exponential function.
> - Always check for #VALUE! errors in your 'EXP' function to ensure all inputs are valid numbers.

### Usage

A few examples using the EXP function.

```
EXP(2) returns approximately 7.389056  
EXP(0.5) returns approximately 1.648721  
EXP(A2) returns e raised to the power of the value in cell A2.  
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
        "Power",
        "e^x Result"
    ],
    [
        0,
        "=EXP(A2)"
    ],
    [
        1,
        "=EXP(A3)"
    ],
    [
        2,
        "=EXP(A4)"
    ],
    [
        -1,
        "=EXP(A5)"
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
        "Power",
        "e^x Result"
    ],
    [
        0,
        "=EXP(A2)"
    ],
    [
        1,
        "=EXP(A3)"
    ],
    [
        2,
        "=EXP(A4)"
    ],
    [
        -1,
        "=EXP(A5)"
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
        "Power",
        "e^x Result"
    ],
    [
        0,
        "=EXP(A2)"
    ],
    [
        1,
        "=EXP(A3)"
    ],
    [
        2,
        "=EXP(A4)"
    ],
    [
        -1,
        "=EXP(A5)"
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
        "Power",
        "e^x Result"
    ],
    [
        0,
        "=EXP(A2)"
    ],
    [
        1,
        "=EXP(A3)"
    ],
    [
        2,
        "=EXP(A4)"
    ],
    [
        -1,
        "=EXP(A5)"
    ]
]
            }]
        });
    }
}
```

