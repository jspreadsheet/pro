title: GAMMALN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GAMMALN function in Jspreadsheet

# GAMMALN function

`PRO`{.jtag}

The `GAMMALN` function in Jspreadsheet Formulas Pro is used to calculate the natural logarithm of the gamma function. The gamma function is an extension of the factorial function, but it's not limited to just integers - it can work with real and complex numbers too. So, if you need to perform this specific mathematical operation in Jspreadsheet, you would use the `GAMMALN` function.

## Documentation

Calculates the natural logarithm of the gamma function, which is a generalization of the factorial function to real and complex numbers.

### Category

Statistical

### Syntax

GAMMALN(number)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number for which you want to calculate the natural logarithm of the gamma function. |


### Behavior

The `GAMMALN` function in spreadsheets calculates the natural logarithm of the gamma function for a specified value. The gamma function is a mathematical concept that extends the factorial function to include non-integer values. Here's how it handles various data types:

- Numbers: The function works as expected with numerical values, returning the natural logarithm of the gamma function for the input number.

- Empty cells: If the `GAMMALN` function targets an empty cell, it will return a `#VALUE!` error, as it expects a numerical argument.

- Text: If the function targets a cell containing text, it will return a `#VALUE!` error, as it expects a numerical argument.

- Booleans: If the function targets a cell containing a boolean value (`TRUE` or `FALSE`), the boolean will be implicitly converted to a numerical value (1 for `TRUE`, 0 for `FALSE`), and the function will proceed with this numerical interpretation.

- Errors: If the function targets a cell containing an error, it will return that same error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the input argument is non-numeric, such as text or an empty cell. |
| #NUM! | This error occurs when the input argument is less than or equal to zero. The gamma function is undefined for non-positive integers. |

### Best practices

> - Always make sure the input to the `GAMMALN` function is a positive number. The function is not defined for non-positive integers and will return a `#NUM!` error for such inputs.
> - Use error handling functions like `IFERROR` to handle potential errors and ensure your spreadsheet remains clean and professional.
> - Remember that this function returns the natural logarithm of the gamma function, not the gamma function itself. Convert the result back if necessary.
> - Be aware that boolean values will be implicitly converted into numerical values (1 for `TRUE`, 0 for `FALSE`). Ensure this aligns with your intended calculations.

### Usage

A few examples using the GAMMALN function.

```
GAMMALN(0.5) returns 0.5723649429  
GAMMALN(2.5) returns 0.2846828705  
GAMMALN(4) returns 1.791759469  
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
        "GAMMALN Result"
    ],
    [
        0.5,
        "=GAMMALN(A2)"
    ],
    [
        2.5,
        "=GAMMALN(A3)"
    ],
    [
        4,
        "=GAMMALN(A4)"
    ],
    [
        10,
        "=GAMMALN(A5)"
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
        "GAMMALN Result"
    ],
    [
        0.5,
        "=GAMMALN(A2)"
    ],
    [
        2.5,
        "=GAMMALN(A3)"
    ],
    [
        4,
        "=GAMMALN(A4)"
    ],
    [
        10,
        "=GAMMALN(A5)"
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
        "GAMMALN Result"
    ],
    [
        0.5,
        "=GAMMALN(A2)"
    ],
    [
        2.5,
        "=GAMMALN(A3)"
    ],
    [
        4,
        "=GAMMALN(A4)"
    ],
    [
        10,
        "=GAMMALN(A5)"
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
        "GAMMALN Result"
    ],
    [
        0.5,
        "=GAMMALN(A2)"
    ],
    [
        2.5,
        "=GAMMALN(A3)"
    ],
    [
        4,
        "=GAMMALN(A4)"
    ],
    [
        10,
        "=GAMMALN(A5)"
    ]
]
            }]
        });
    }
}
```

