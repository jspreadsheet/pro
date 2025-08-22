title: LN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LN function in Jspreadsheet

# LN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `LN` function is used to compute the natural logarithm of a specific number. Essentially, it tells you the power to which the base 'e' (approximately equal to 2.71828) must be raised to obtain the input number. For instance, if you wanted to find the natural logarithm of 10, you would enter `=LN(10)` into a cell and the program would return the calculated value. This function is particularly useful in mathematical and scientific calculations.

## Documentation

Returns the natural logarithm of a number.

### Category

Math and trigonometry

### Syntax

LN(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The positive real number for which you want to find the natural logarithm. |


### Behavior

The 'LN' function in Spreadsheet is used to calculate the natural logarithm of a number. Here is how it behaves in different scenarios:

1. Normal Usage: The 'LN' function takes a single argument, which should be a number. It calculates and returns the natural logarithm of that number. 

2. Empty Cells: If the 'LN' function is applied to an empty cell, it will return an error (#NUM!) because it expects a numerical input. 

3. Text: If the 'LN' function is applied to a cell containing text, it returns an error (#VALUE!) indicating that the input value is not valid.

4. Booleans: When applied to boolean values, 'LN' function treats 'TRUE' as 1 and 'FALSE' as 0 and returns the natural logarithm of 1 and 0 respectively.

5. Errors: If the argument passed to the 'LN' function is less than or equal to zero, it returns an error (#NUM!), as the natural logarithm of zero or negative number is undefined.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #NUM! | This error occurs when a negative number or zero is used as an argument in the 'LN' function. Natural logarithm for zero or negative numbers is undefined |
| #VALUE! | This error occurs when a non-numeric value is used as an argument in the 'LN' function. It expects a number as input |

### Best practices

> - Always remember the 'LN' function only works with positive numbers. It will return an error if used with a negative number or zero.
> - Use error handling functions like 'IFERROR' to manage potential errors when using 'LN' function. It provides a way to handle errors gracefully without breaking your computations.
> - Ensure that the input cell to the 'LN' function does not contain text, as it will return a #VALUE! error.
> - Be careful when applying the 'LN' function to boolean values. Remember that it treats 'TRUE' as 1 and 'FALSE' as 0.

### Usage

A few examples using the LN function.

```
LN(1) returns 0 because e to the power of 0 is 1  
LN(10) returns approximately 2.302585093 as this is the natural logarithm of 10 (i.e. e raised to what power gives 10)  
LN(A1) returns the natural logarithm of the value contained in cell A1.  
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
        "Natural Logarithm"
    ],
    [
        1,
        "=LN(A2)"
    ],
    [
        2.71828,
        "=LN(A3)"
    ],
    [
        10,
        "=LN(A4)"
    ],
    [
        100,
        "=LN(A5)"
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
        "Natural Logarithm"
    ],
    [
        1,
        "=LN(A2)"
    ],
    [
        2.71828,
        "=LN(A3)"
    ],
    [
        10,
        "=LN(A4)"
    ],
    [
        100,
        "=LN(A5)"
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
        "Natural Logarithm"
    ],
    [
        1,
        "=LN(A2)"
    ],
    [
        2.71828,
        "=LN(A3)"
    ],
    [
        10,
        "=LN(A4)"
    ],
    [
        100,
        "=LN(A5)"
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
        "Natural Logarithm"
    ],
    [
        1,
        "=LN(A2)"
    ],
    [
        2.71828,
        "=LN(A3)"
    ],
    [
        10,
        "=LN(A4)"
    ],
    [
        100,
        "=LN(A5)"
    ]
]
            }]
        });
    }
}
```

