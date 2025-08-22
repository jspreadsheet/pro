title: SQRT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SQRT function in Jspreadsheet

# SQRT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SQRT` function in Jspreadsheet Formulas Pro is used to calculate the positive square root of a number. This means that it finds a value which, when multiplied by itself, gives the original number. For instance, the square root of 4 is 2 because 2*2 equals 4. It's a simple and useful tool for performing mathematical calculations within Jspreadsheet.

## Documentation

Returns the positive square root of a number.

### Category

Math and trigonometry

### Syntax

SQRT(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the square root. Must be non-negative. |


### Behavior

The 'SQRT' function, short for square root, is a mathematical function that returns the positive square root of a given number. Here is how it handles different types of inputs:

- **Numbers**: 'SQRT' works directly with any positive number. For negative numbers, it returns a '#NUM!' error because square roots of negative numbers are not real numbers.

- **Empty Cells**: If the 'SQRT' function is applied to an empty cell, it will result in a zero.

- **Text**: If the 'SQRT' function is applied to a cell containing text, it will result in a '#VALUE!' error because the function can't perform calculations with text.

- **Booleans**: If the 'SQRT' function is applied to a cell containing a Boolean value (TRUE or FALSE), TRUE will be interpreted as 1 and FALSE as 0, and the function will return their square roots respectively.

- **Errors**: If the cell to which the 'SQRT' function is applied contains an error, the function will also return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error occurs when the 'SQRT' function tries to calculate the square root of a negative number. In mathematics, the square root of a negative number is not a real number. |
| #VALUE! | This error is shown when the 'SQRT' function is applied to a cell containing text. The function cannot perform calculations with text. |
| #REF! | This error occurs if the cell reference provided is not valid. |

### Best practices

> - Always check the input values before applying the 'SQRT' function to avoid '#NUM!' errors. Ensure that the cells to which you're applying the function contain positive numbers or zero.
> - Be aware that 'SQRT' of zero is zero.
> - Remember that 'SQRT' function cannot handle text. Applying the function to such cells will result in a '#VALUE!' error.
> - Be careful when dealing with Boolean values. The function will interpret TRUE as 1 and FALSE as 0.

### Usage

A few examples using the SQRT function.

```
SQRT(25) returns 5  
SQRT(2) returns approximately 1.41421356  
SQRT(A1) returns the square root of the value in cell A1  
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
        "Area (sq ft)",
        "Side Length (ft)"
    ],
    [
        25,
        "=SQRT(A2)"
    ],
    [
        144,
        "=SQRT(A3)"
    ],
    [
        81,
        "=SQRT(A4)"
    ],
    [
        36,
        "=SQRT(A5)"
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
        "Area (sq ft)",
        "Side Length (ft)"
    ],
    [
        25,
        "=SQRT(A2)"
    ],
    [
        144,
        "=SQRT(A3)"
    ],
    [
        81,
        "=SQRT(A4)"
    ],
    [
        36,
        "=SQRT(A5)"
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
        "Area (sq ft)",
        "Side Length (ft)"
    ],
    [
        25,
        "=SQRT(A2)"
    ],
    [
        144,
        "=SQRT(A3)"
    ],
    [
        81,
        "=SQRT(A4)"
    ],
    [
        36,
        "=SQRT(A5)"
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
        "Area (sq ft)",
        "Side Length (ft)"
    ],
    [
        25,
        "=SQRT(A2)"
    ],
    [
        144,
        "=SQRT(A3)"
    ],
    [
        81,
        "=SQRT(A4)"
    ],
    [
        36,
        "=SQRT(A5)"
    ]
]
            }]
        });
    }
}
```

