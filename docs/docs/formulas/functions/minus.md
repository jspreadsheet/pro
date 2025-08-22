title: MINUS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MINUS function in Jspreadsheet

# MINUS function

`PRO`{.jtag}

The `MINUS` function in Jspreadsheet Formulas Pro is a simple mathematical tool that allows you to find the difference between two numbers or cells. You simply need to input the two values you want to subtract from each other. For instance, if you use `MINUS(A1, B1)`, it will subtract the value in cell B1 from the value in cell A1. It's a handy function for calculations like expense tracking, inventory management, and more.

## Documentation

Returns the difference between two numbers or cells.

### Category

Math and trigonometry

### Syntax

MINUS(number1, number2)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or cell. |
| `number2` | The second number or cell. |


### Behavior

The 'MINUS' function in spreadsheets is used to subtract one number from another. The function takes two arguments, both of which must be numeric. Here are some behaviors to expect:

- **Empty cells**: If an empty cell is referenced in the formula, it is interpreted as zero.
- **Text**: If a text string is referenced, it returns an error as the function expects numeric values.
- **Booleans**: Boolean values are interpreted as numbers. TRUE is interpreted as 1 and FALSE as 0.
- **Errors**: If any of the cells referenced in the function contains an error, the MINUS function will also return an error.
- **Non-numeric values**: If non-numeric values are used as arguments, the function returns an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when one or both of the arguments are non-numeric (e.g text or error values). |
| #REF! | This error occurs when a cell reference is not valid.|
| #DIV/0! | This error occurs when you try to divide by zero. It's not directly related to the 'MINUS' function but can occur in a formula if the result of the subtraction is used as a divisor.|

### Best practices

> - Always ensure that the arguments passed to the 'MINUS' function are numeric. If a cell reference is used, ensure the cell contains a numeric value.
> - Be careful when subtracting large numbers as this can lead to overflow errors.
> - Use parentheses to ensure the correct order of operations when using the 'MINUS' function in combination with other functions.
> - Check your references. If a referenced cell is deleted or moved, it can cause a #REF! error.

### Usage

A few examples using the MINUS function.

```
MINUS(10, 5) returns 5  
MINUS(A2, B2) returns the difference between the values in cells A2 and B2  
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
        "Budget",
        "Actual",
        "Variance"
    ],
    [
        5000,
        4200,
        "=MINUS(A2,B2)"
    ],
    [
        3500,
        3750,
        "=MINUS(A3,B3)"
    ],
    [
        2800,
        2400,
        "=MINUS(A4,B4)"
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
        "Budget",
        "Actual",
        "Variance"
    ],
    [
        5000,
        4200,
        "=MINUS(A2,B2)"
    ],
    [
        3500,
        3750,
        "=MINUS(A3,B3)"
    ],
    [
        2800,
        2400,
        "=MINUS(A4,B4)"
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
        "Budget",
        "Actual",
        "Variance"
    ],
    [
        5000,
        4200,
        "=MINUS(A2,B2)"
    ],
    [
        3500,
        3750,
        "=MINUS(A3,B3)"
    ],
    [
        2800,
        2400,
        "=MINUS(A4,B4)"
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
        "Budget",
        "Actual",
        "Variance"
    ],
    [
        5000,
        4200,
        "=MINUS(A2,B2)"
    ],
    [
        3500,
        3750,
        "=MINUS(A3,B3)"
    ],
    [
        2800,
        2400,
        "=MINUS(A4,B4)"
    ]
]
            }]
        });
    }
}
```

