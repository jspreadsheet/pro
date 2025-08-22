title: DB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DB function in Jspreadsheet

# DB function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DB` function in Jspreadsheet Formulas Pro is a tool that allows you to calculate the decrease in value of an asset over a certain period of time, using a method called the fixed-declining balance. You would use it when you want to know how much an asset, like equipment or property, has depreciated due to wear and tear, age, or obsolescence. This formula can be very helpful for business financial analysis, tax purposes, and investment decisions.

## Documentation

Calculates the depreciation of an asset for a specified period using the fixed-declining balance method.

### Category

Financial

### Syntax

DB(cost, salvage, life, period, [month])

| Parameter | Description |
| ----------- | ------------- |
| `cost` | The initial cost of the asset. |
| `salvage` | The value of the asset at the end of its useful life. |
| `life` | The number of periods over which the asset will be depreciated. |
| `period` | The period for which you want to calculate the depreciation. Must be greater than or equal to 1 and less than or equal to the life of the asset. |
| `month` | Optional. The month in the first year for which you want to calculate depreciation. If omitted or zero, defaults to 12 (December). |


### Behavior

The 'DB' function in spreadsheets calculates the depreciation of an asset for a specified period using the fixed-declining balance method. This function takes four mandatory arguments: cost (initial cost of the asset), salvage (the value of the asset after the life has expired), life (the number of periods over which the asset is being depreciated), and period (the period for which you want to calculate the depreciation). There is also an optional fifth argument, factor, which is the rate at which the balance declines. If omitted, the factor is assumed to be 2 (the double-declining balance method).

- Empty Cells: If any of the required fields are left blank or contains an empty cell, the DB function will return an error.
- Text: If the function encounters text where it expects a number, it will return an error.
- Booleans: Boolean values are not valid inputs for the DB function. If a Boolean value is used, the function will return an error.
- Errors: If any of the arguments are less than or equal to zero, or if the period is greater than the life, the DB function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | If any of the arguments are less than or equal to zero, or if the period is greater than the life, the DB function will return a #NUM! error. |
| #VALUE! | If any of the required arguments are missing, or if any of the arguments are non-numeric, the DB function will return a #VALUE! error. |

### Best practices

> - Always double-check your inputs to ensure that they are all numeric and greater than zero.
> - Make sure that the period is never greater than the life of the asset, as this will result in an error.
> - If you omit the factor, be aware that the function will automatically assume a factor of 2 (double-declining balance method).
> - Use the DB function in conjunction with other financial functions for more comprehensive analysis of asset depreciation.

### Usage

A few examples using the DB function.

```
DB(10000, 2000, 10, 2)  
DB(50000, 5000, 5, 3, 6)  
DB(2500, 1000, 7, 4)  
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
        "Asset Cost",
        "Salvage Value",
        "Life (Years)",
        "Period",
        "Depreciation"
    ],
    [
        25000,
        3000,
        8,
        1,
        "=DB(A2,B2,C2,D2)"
    ],
    [
        50000,
        5000,
        10,
        3,
        "=DB(A3,B3,C3,D3)"
    ],
    [
        15000,
        2000,
        5,
        2,
        "=DB(A4,B4,C4,D4)"
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
        "Asset Cost",
        "Salvage Value",
        "Life (Years)",
        "Period",
        "Depreciation"
    ],
    [
        25000,
        3000,
        8,
        1,
        "=DB(A2,B2,C2,D2)"
    ],
    [
        50000,
        5000,
        10,
        3,
        "=DB(A3,B3,C3,D3)"
    ],
    [
        15000,
        2000,
        5,
        2,
        "=DB(A4,B4,C4,D4)"
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
        "Asset Cost",
        "Salvage Value",
        "Life (Years)",
        "Period",
        "Depreciation"
    ],
    [
        25000,
        3000,
        8,
        1,
        "=DB(A2,B2,C2,D2)"
    ],
    [
        50000,
        5000,
        10,
        3,
        "=DB(A3,B3,C3,D3)"
    ],
    [
        15000,
        2000,
        5,
        2,
        "=DB(A4,B4,C4,D4)"
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
        "Asset Cost",
        "Salvage Value",
        "Life (Years)",
        "Period",
        "Depreciation"
    ],
    [
        25000,
        3000,
        8,
        1,
        "=DB(A2,B2,C2,D2)"
    ],
    [
        50000,
        5000,
        10,
        3,
        "=DB(A3,B3,C3,D3)"
    ],
    [
        15000,
        2000,
        5,
        2,
        "=DB(A4,B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

