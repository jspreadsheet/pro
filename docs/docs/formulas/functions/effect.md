title: EFFECT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EFFECT function in Jspreadsheet

# EFFECT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `EFFECT` function is used to determine the actual annual interest rate, taking into account the number of times the interest is compounded in a year. You provide the nominal annual interest rate and the number of compounding periods as inputs. The function then gives you the effective interest rate, which is typically higher due to the compounding effect. This is useful in financial calculations and analyses.

## Documentation

The EFFECT function calculates the effective annual interest rate given the nominal annual interest rate and the number of compounding periods per year.

### Category

Financial

### Syntax

EFFECT(nominal_rate, npery)

| Parameter | Description |
| ----------- | ------------- |
| `nominal_rate` | The nominal annual interest rate. |
| `npery` | The number of compounding periods per year. |


### Behavior

The `EFFECT` function in spreadsheets is used to calculate the effective annual interest rate based on the nominal annual interest rate and the number of compounding periods per year. 

- Empty Cells: If either of the arguments (nominal interest rate or number of periods) is an empty cell, the `EFFECT` function will return an error. Both arguments are required for the function to calculate the result.
- Text: If text is entered as an argument, the `EFFECT` function will not be able to interpret it and will return an error.
- Booleans: Booleans are not acceptable inputs for the `EFFECT` function. If a Boolean value is used, the function will return an error.
- Errors: If any of the arguments have errors, the `EFFECT` function will propagate that error. 

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error is returned when the nominal interest rate is less than or equal to 0, or when the number of compounding periods per year is less than 1. |
| #VALUE! | This error is returned when any of the function's arguments are non-numeric or if the arguments are not in the correct format. |
| #DIV/0! | This error is returned when the nominal interest rate is equal to zero, which results in a division by zero error. |

### Best practices

> - Always ensure that both arguments (nominal interest rate and the number of compounding periods per year) are provided to the `EFFECT` function. 
> - Make sure to enter the nominal interest rate as a decimal (for example, for a 5% rate, enter 0.05), not as a percentage.
> - Be cautious when inputting the number of compounding periods per year. It should be an integer and greater than zero.
> - Use error-checking mechanisms to handle potential errors, such as providing non-numeric inputs or out-of-range values.

### Usage

A few examples using the EFFECT function.

```
EFFECT(0.06, 12) returns 0.061678  
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
        "Nominal Rate",
        "Compounding Periods",
        "Effective Rate"
    ],
    [
        0.06,
        12,
        "=EFFECT(A2,B2)"
    ],
    [
        0.08,
        4,
        "=EFFECT(A3,B3)"
    ],
    [
        0.05,
        365,
        "=EFFECT(A4,B4)"
    ],
    [
        0.07,
        2,
        "=EFFECT(A5,B5)"
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
        "Nominal Rate",
        "Compounding Periods",
        "Effective Rate"
    ],
    [
        0.06,
        12,
        "=EFFECT(A2,B2)"
    ],
    [
        0.08,
        4,
        "=EFFECT(A3,B3)"
    ],
    [
        0.05,
        365,
        "=EFFECT(A4,B4)"
    ],
    [
        0.07,
        2,
        "=EFFECT(A5,B5)"
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
        "Nominal Rate",
        "Compounding Periods",
        "Effective Rate"
    ],
    [
        0.06,
        12,
        "=EFFECT(A2,B2)"
    ],
    [
        0.08,
        4,
        "=EFFECT(A3,B3)"
    ],
    [
        0.05,
        365,
        "=EFFECT(A4,B4)"
    ],
    [
        0.07,
        2,
        "=EFFECT(A5,B5)"
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
        "Nominal Rate",
        "Compounding Periods",
        "Effective Rate"
    ],
    [
        0.06,
        12,
        "=EFFECT(A2,B2)"
    ],
    [
        0.08,
        4,
        "=EFFECT(A3,B3)"
    ],
    [
        0.05,
        365,
        "=EFFECT(A4,B4)"
    ],
    [
        0.07,
        2,
        "=EFFECT(A5,B5)"
    ]
]
            }]
        });
    }
}
```

