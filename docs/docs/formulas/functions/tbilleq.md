title: TBILLEQ function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TBILLEQ function in Jspreadsheet

# TBILLEQ function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TBILLEQ` function in Jspreadsheet Formulas Pro is a tool used to determine the bond-equivalent yield for a Treasury bill. This is based on the bill's discount from its face value. Essentially, it allows you to understand the return or 'yield' you would get from a Treasury bill if you were to hold it until its maturity date. This function is especially useful for financial analysis and investment decision-making.

## Documentation

Calculates the bond-equivalent yield for a Treasury bill based on a discount from face value.

### Category

Financial

### Syntax

TBILLEQ(settlement, maturity, discount)

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The Treasury bill's settlement date. |
| `maturity` | The Treasury bill's maturity date. |
| `discount` | The discount from face value, as a percentage (e.g., 98.5 for a 1.5% discount). |


### Behavior

The `TBILLEQ` function in spreadsheets calculates the equivalent annual yield for a Treasury bill. It expects three inputs: `settlement` (the settlement date of the Treasury bill), `maturity` (the maturity date of the Treasury bill), and `discount` (the discount rate of the Treasury bill). 

- The `settlement` and `maturity` dates should be valid dates and can be entered as text that can be interpreted as dates, or as serial numbers representing dates.
- The `discount` should be a numerical value representing the discount rate of the Treasury bill.
- If any of the inputs are left empty or contain text that cannot be interpreted as a date or a number, the function will return a `#VALUE!` error.
- If the `settlement` date is greater than or equal to the `maturity` date, the function will return a `#NUM!` error.
- The function does not handle boolean values. If a boolean value is used as an input, it will be interpreted as `0` or `1`.
- The function propagates any errors present in the input cells.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned if any of the input parameters are left empty or contain text that cannot be interpreted as a date or a number. |
| `#NUM!` | This error is returned if the `settlement` date is greater than or equal to the `maturity` date, or if the `discount` rate is less than 0. |
| `#NAME?` | This error is returned if the function name is misspelled. |

### Best practices

> - Always ensure that the `settlement` date is less than the `maturity` date to avoid a `#NUM!` error.
> - Use valid dates for the `settlement` and `maturity` parameters. If entered as text, make sure the dates are in a format that can be correctly interpreted by your spreadsheet program.
> - Ensure that the `discount` rate is greater than or equal to 0 to avoid a `#NUM!` error.
> - Double check the spelling of the function name to avoid a `#NAME?` error.

### Usage

A few examples using the TBILLEQ function.

```
TBILLEQ('2022-01-01', '2022-06-30', 98.5%)  
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
        "Settlement",
        "Maturity",
        "Discount",
        "Bond Equivalent Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        "0.045",
        "=TBILLEQ(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-05-01",
        "0.038",
        "=TBILLEQ(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-09-10",
        "0.052",
        "=TBILLEQ(A4,B4,C4)"
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
        "Settlement",
        "Maturity",
        "Discount",
        "Bond Equivalent Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        "0.045",
        "=TBILLEQ(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-05-01",
        "0.038",
        "=TBILLEQ(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-09-10",
        "0.052",
        "=TBILLEQ(A4,B4,C4)"
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
        "Settlement",
        "Maturity",
        "Discount",
        "Bond Equivalent Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        "0.045",
        "=TBILLEQ(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-05-01",
        "0.038",
        "=TBILLEQ(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-09-10",
        "0.052",
        "=TBILLEQ(A4,B4,C4)"
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
        "Settlement",
        "Maturity",
        "Discount",
        "Bond Equivalent Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        "0.045",
        "=TBILLEQ(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-05-01",
        "0.038",
        "=TBILLEQ(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-09-10",
        "0.052",
        "=TBILLEQ(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

