title: ERFC.PRECISE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ERFC.PRECISE function in Jspreadsheet

# ERFC.PRECISE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ERFC.PRECISE` function in Jspreadsheet Formulas Pro gives you the complementary error function of a given number, which is calculated as 1 minus the error function for that number. It's accurate to around 15 digits, making it highly precise. This feature is particularly helpful when dealing with statistical calculations or scientific data analysis.

## Documentation

The ERFC.PRECISE function returns the complementary error function of a number, which is equal to 1 minus the error function of the same number. The result is accurate to approximately 15 digits.

### Category

Engineering

### Syntax

ERFC.PRECISE(x)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number for which to calculate the complementary error function. |


### Behavior

The `ERFC.PRECISE` function in spreadsheets calculates the precise complementary ERF function integrated between a supplied lower limit and infinity. This function is primarily used in statistics and data analysis.

- If provided with an empty cell, the function treats it as a zero.
- This function does not work with text or boolean values, and it would return an error if any such values are inputted.
- If the cell referenced in the function contains an error, the function will return the same error.
- The function only accepts numerical input values.

### Common Errors

| Error | Description |
|---|---|
| #VALUE! | This error shows up when the input is non-numeric, such as text or boolean values. |
| #NUM! | This error occurs if the provided value is less than -1. |

### Best practices

> - Always ensure to input numerical values to avoid errors.
> - Be aware that the function treats empty cells as zero, so ensure to input a value in all referenced cells if zero is not the desired value.
> - Use the function for statistical data analysis, especially when dealing with large datasets.
> - Always double-check your formula for any possible typos or errors to ensure the accuracy of the calculation.

### Usage

A few examples using the ERFC.PRECISE function.

```
ERFC.PRECISE(0)  
ERFC.PRECISE(1.5)  
ERFC.PRECISE(A2) returns the complementary error function of the value in cell A2.  
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
        "X Value",
        "ERFC.PRECISE Result"
    ],
    [
        0,
        "=ERFC.PRECISE(A2)"
    ],
    [
        0.5,
        "=ERFC.PRECISE(A3)"
    ],
    [
        1.0,
        "=ERFC.PRECISE(A4)"
    ],
    [
        1.5,
        "=ERFC.PRECISE(A5)"
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
        "X Value",
        "ERFC.PRECISE Result"
    ],
    [
        0,
        "=ERFC.PRECISE(A2)"
    ],
    [
        0.5,
        "=ERFC.PRECISE(A3)"
    ],
    [
        1.0,
        "=ERFC.PRECISE(A4)"
    ],
    [
        1.5,
        "=ERFC.PRECISE(A5)"
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
        "X Value",
        "ERFC.PRECISE Result"
    ],
    [
        0,
        "=ERFC.PRECISE(A2)"
    ],
    [
        0.5,
        "=ERFC.PRECISE(A3)"
    ],
    [
        1.0,
        "=ERFC.PRECISE(A4)"
    ],
    [
        1.5,
        "=ERFC.PRECISE(A5)"
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
        "X Value",
        "ERFC.PRECISE Result"
    ],
    [
        0,
        "=ERFC.PRECISE(A2)"
    ],
    [
        0.5,
        "=ERFC.PRECISE(A3)"
    ],
    [
        1.0,
        "=ERFC.PRECISE(A4)"
    ],
    [
        1.5,
        "=ERFC.PRECISE(A5)"
    ]
]
            }]
        });
    }
}
```

