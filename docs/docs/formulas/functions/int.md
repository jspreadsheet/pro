title: INT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the INT function in Jspreadsheet

# INT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `INT` function in Jspreadsheet Formulas Pro is a handy tool that helps you to find the integer part of a number. Essentially, it works by rounding down your number to the closest integer. For example, if you have the number 4.8 and you apply the `INT` function to it, you'll get the number 4 as your result. This function is particularly useful when you are dealing with calculations that require whole numbers only.

## Documentation

Returns the integer part of a number by rounding down to the nearest integer.

### Category

Math and trigonometry

### Syntax

INT(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which you want to retrieve the integer part. |


### Behavior

The 'INT' function in a spreadsheet is used to round down a number to the nearest integer. It discards all the decimal points and returns the integer part of the number. Here's how it handles different types of inputs:

- **Numbers**: If a number with decimal points is given as input, it will return the integer part by rounding down the number.
- **Empty cells**: If the 'INT' function is applied on an empty cell, it will return a zero.
- **Text**: When applied to a cell containing text or a string, the 'INT' function will return a #VALUE! error.
- **Booleans**: If the function is used on a cell containing a Boolean value, TRUE is considered as 1 and FALSE as 0.
- **Errors**: If the function is applied to a cell that contains an error, it will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the 'INT' function is applied to a cell that contains non-numeric values like text or strings. |
| #REF! | This error is displayed when the cell reference provided in the 'INT' function is not valid. |
| #NAME? | This error occurs when the spreadsheet does not recognize the function name. This can happen if you misspell 'INT'. |

### Best practices

> - Always ensure that the 'INT' function is applied to cells containing numeric values to avoid errors.
> - Be aware that 'INT' will always round down, not to the nearest integer. So, if you have 5.9, INT will return 5, not 6.
> - Use 'INT' function when you need to convert a float to an integer but don't want to round it to the nearest integer.
> - Check for error messages like #VALUE! and handle them appropriately, to avoid misinterpretation of the results.

### Usage

A few examples using the INT function.

```
INT(3.14) returns 3  
INT(-3.14) returns -4  
INT(5) returns 5  
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
        "Price",
        "Discounted Price",
        "Dollars Only"
    ],
    [
        23.99,
        21.59,
        "=INT(B2)"
    ],
    [
        45.67,
        41.1,
        "=INT(B3)"
    ],
    [
        12.34,
        11.11,
        "=INT(B4)"
    ],
    [
        78.95,
        71.06,
        "=INT(B5)"
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
        "Price",
        "Discounted Price",
        "Dollars Only"
    ],
    [
        23.99,
        21.59,
        "=INT(B2)"
    ],
    [
        45.67,
        41.1,
        "=INT(B3)"
    ],
    [
        12.34,
        11.11,
        "=INT(B4)"
    ],
    [
        78.95,
        71.06,
        "=INT(B5)"
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
        "Price",
        "Discounted Price",
        "Dollars Only"
    ],
    [
        23.99,
        21.59,
        "=INT(B2)"
    ],
    [
        45.67,
        41.1,
        "=INT(B3)"
    ],
    [
        12.34,
        11.11,
        "=INT(B4)"
    ],
    [
        78.95,
        71.06,
        "=INT(B5)"
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
        "Price",
        "Discounted Price",
        "Dollars Only"
    ],
    [
        23.99,
        21.59,
        "=INT(B2)"
    ],
    [
        45.67,
        41.1,
        "=INT(B3)"
    ],
    [
        12.34,
        11.11,
        "=INT(B4)"
    ],
    [
        78.95,
        71.06,
        "=INT(B5)"
    ]
]
            }]
        });
    }
}
```

