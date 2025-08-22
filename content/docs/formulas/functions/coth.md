title: COTH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COTH function in Jspreadsheet

# COTH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `COTH` function is used to calculate the hyperbolic cotangent of a number. This mathematical operation is often used in complex calculations including trigonometric and hyperbolic functions. To use it, you simply input the number or cell reference you wish to find the hyperbolic cotangent of, for example `COTH(A1)`. Jspreadsheet Formulas Pro then performs the calculation for you and displays the result.

## Documentation

Returns the hyperbolic cotangent of a number.

### Category

Math and trigonometry

### Syntax

COTH(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which you want to calculate the hyperbolic cotangent. |


### Behavior

The 'COTH' function in spreadsheets is used to calculate the hyperbolic cotangent of a given number. Here is what you can expect:

- If the cell is empty, the 'COTH' function will return an error, as it requires a numerical input to perform the calculation.
- If the cell contains text, the 'COTH' function will also return an error because it is not able to perform mathematical operations on text.
- If the cell contains a boolean value, it will convert it into an integer (TRUE as 1 and FALSE as 0) before performing the calculation.
- If the cell contains a numerical value, 'COTH' will calculate the hyperbolic cotangent of that number.
- If the cell contains an error, 'COTH' will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned if the input is non-numeric or if the absolute value of the number is too close to zero (as it approaches infinity). |
| #NUM! | This error is returned if the number is exactly zero because the cotangent of zero is undefined. |
| #DIV/0! | This error is returned if the function tries to divide by zero, which is not possible in mathematical operations. |

### Best practices

> - Always ensure that the input to the 'COTH' function is a numerical value to avoid errors.
> - Avoid using zero as an input to the 'COTH' function, as this will result in an error because the cotangent of zero is undefined.
> - Use error handling functions like 'IFERROR' to handle possible errors when using the 'COTH' function.
> - Always double-check your formulas for correct syntax to avoid unexpected errors.

### Usage

A few examples using the COTH function.

```
COTH(0) returns #DIV/0!  
COTH(1) returns 1.313  
COTH(-1) returns -1.313  
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
        "x Value",
        "COTH(x)",
        "Result"
    ],
    [
        0.5,
        "=COTH(A2)",
        2.164
    ],
    [
        1,
        "=COTH(A3)",
        1.313
    ],
    [
        2,
        "=COTH(A4)",
        1.037
    ],
    [
        -1,
        "=COTH(A5)",
        -1.313
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
        "x Value",
        "COTH(x)",
        "Result"
    ],
    [
        0.5,
        "=COTH(A2)",
        2.164
    ],
    [
        1,
        "=COTH(A3)",
        1.313
    ],
    [
        2,
        "=COTH(A4)",
        1.037
    ],
    [
        -1,
        "=COTH(A5)",
        -1.313
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
        "x Value",
        "COTH(x)",
        "Result"
    ],
    [
        0.5,
        "=COTH(A2)",
        2.164
    ],
    [
        1,
        "=COTH(A3)",
        1.313
    ],
    [
        2,
        "=COTH(A4)",
        1.037
    ],
    [
        -1,
        "=COTH(A5)",
        -1.313
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
        "x Value",
        "COTH(x)",
        "Result"
    ],
    [
        0.5,
        "=COTH(A2)",
        2.164
    ],
    [
        1,
        "=COTH(A3)",
        1.313
    ],
    [
        2,
        "=COTH(A4)",
        1.037
    ],
    [
        -1,
        "=COTH(A5)",
        -1.313
    ]
]
            }]
        });
    }
}
```

