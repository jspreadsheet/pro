title: NOMINAL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NOMINAL function in Jspreadsheet

# NOMINAL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `NOMINAL` function in Jspreadsheet Formulas Pro is a handy tool that allows you to calculate the nominal annual interest rate. You use this when you have the effective interest rate and the number of times interest is compounded annually. This function is particularly useful for understanding the underlying annual interest rate before the effect of compounding is factored in.

## Documentation

Returns the nominal annual interest rate, given the effective rate and the number of compounding periods per year.

### Category

Financial

### Syntax

NOMINAL(effective_rate, npery)

| Parameter | Description |
| ----------- | ------------- |
| `effective_rate` | The effective annual interest rate. |
| `npery` | The number of compounding periods per year. |


### Behavior

The `NOMINAL` function in spreadsheets is used to calculate the nominal interest rate given the effective rate and the number of compounding periods per year. This function requires two numerical inputs: the effective rate and the number of compounding periods. Here's how it handles various inputs:

- **Empty cells**: If any of the required inputs (effective rate or number of compounding periods) are left empty or contain non-numerical values, the function will return an error.
- **Text**: Text values are not applicable for this function. If text is entered in place of a numerical argument, the function will return an error.
- **Booleans**: Boolean values are not applicable for this function. If a boolean value is entered in place of a numerical argument, the function will return an error.
- **Errors**: If any of the inputs are less than or equal to zero, the function will return a `#NUM!` error. In addition, if the provided arguments are not numerical, the function will return a `#VALUE!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#NUM!` | This error occurs when the effective rate or the number of compounding periods is less than or equal to zero. |
| `#VALUE!` | This error occurs when the provided arguments are non-numerical, such as text or boolean values. |
| `#DIV/0!` | This error occurs when the number of compounding periods is zero, causing a division by zero error. |

### Best practices

> - Always ensure that the inputs to the `NOMINAL` function are numerical and greater than zero. 
> - Use cell references instead of hard-coded values for the function arguments. This will make your spreadsheet more dynamic and easier to update.
> - Always check your data for errors before using it as input for the `NOMINAL` function.
> - Remember that the `NOMINAL` function calculates nominal interest rate, not the actual interest paid. If you need to calculate the latter, consider using other financial functions.

### Usage

A few examples using the NOMINAL function.

```
NOMINAL(0.1,12)  
NOMINAL(0.083,4)  
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
        "Effective Rate",
        "Compounding Periods",
        "Nominal Rate"
    ],
    [
        0.1047,
        12,
        "=NOMINAL(A2,B2)"
    ],
    [
        0.0824,
        4,
        "=NOMINAL(A3,B3)"
    ],
    [
        0.1268,
        52,
        "=NOMINAL(A4,B4)"
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
        "Effective Rate",
        "Compounding Periods",
        "Nominal Rate"
    ],
    [
        0.1047,
        12,
        "=NOMINAL(A2,B2)"
    ],
    [
        0.0824,
        4,
        "=NOMINAL(A3,B3)"
    ],
    [
        0.1268,
        52,
        "=NOMINAL(A4,B4)"
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
        "Effective Rate",
        "Compounding Periods",
        "Nominal Rate"
    ],
    [
        0.1047,
        12,
        "=NOMINAL(A2,B2)"
    ],
    [
        0.0824,
        4,
        "=NOMINAL(A3,B3)"
    ],
    [
        0.1268,
        52,
        "=NOMINAL(A4,B4)"
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
        "Effective Rate",
        "Compounding Periods",
        "Nominal Rate"
    ],
    [
        0.1047,
        12,
        "=NOMINAL(A2,B2)"
    ],
    [
        0.0824,
        4,
        "=NOMINAL(A3,B3)"
    ],
    [
        0.1268,
        52,
        "=NOMINAL(A4,B4)"
    ]
]
            }]
        });
    }
}
```

