title: SYD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SYD function in Jspreadsheet

# SYD function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SYD` function in Jspreadsheet Formulas Pro is a tool that helps you calculate the depreciation of an asset over a specific period using a method known as the sum-of-years digits method. This method allows you to distribute the cost of the asset over its useful life in a way that accounts for the asset losing more value in earlier years. By inputting the initial cost, salvage value, lifespan and the period of depreciation into the `SYD` function, Jspreadsheet will output the depreciation value for that period.

## Documentation

Returns the straight-line depreciation of an asset for a specific period using the sum-of-years digits method.

### Category

Financial

### Syntax

SYD(cost, salvage, life, period)

| Parameter | Description |
| ----------- | ------------- |
| `cost` | The initial cost of the asset. |
| `salvage` | The value of the asset at the end of its useful life (sometimes called "salvage value"). |
| `life` | The number of periods over which the asset is being depreciated. |
| `period` | The period for which you want to calculate the depreciation. Must be greater than or equal to 1 and less than or equal to the life of the asset. |


### Behavior

The 'SYD' function, short for Sum-of-Years' Digits, is a depreciation method that calculates the depreciation expense for a specific period. The syntax of the 'SYD' function is `SYD(cost, salvage, life, per)`. 

- 'Cost' refers to the initial cost of the asset.
- 'Salvage' is the value at the end of the depreciation (sometimes called the salvage value of the asset).
- 'Life' is the number of periods over which the asset is depreciated (sometimes called the useful life of the asset).
- 'Per' is the period for which you want to calculate the depreciation.

The 'SYD' function handles different types of data as follows:

- Empty cells: If any of the parameters (cost, salvage, life, per) are left empty, the 'SYD' function will return a `#VALUE!` error.
- Text: If any of the parameters are text that cannot be translated into a numerical value, the 'SYD' function will return a `#VALUE!` error.
- Booleans: Booleans are not valid input for the 'SYD' function and will result in a `#VALUE!` error.
- Errors: If any of the parameters are cells containing errors, the 'SYD' function will return that same error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | If any of the parameters (cost, salvage, life, per) are non-numeric, including text, booleans, or empty cells, the 'SYD' function will return a `#VALUE!` error. |
| `#NUM!` | If the 'per' parameter exceeds the 'life' parameter, or if any of the parameters are less than zero, the 'SYD' function will return a `#NUM!` error. |
| `#DIV/0!` | If the 'life' parameter is zero, the 'SYD' function will return a `#DIV/0!` error because it attempts to divide by zero. |

### Best practices

> - Always ensure that all parameters are numeric and greater than zero to avoid `#VALUE!` and `#NUM!` errors.
> - Make sure that the 'per' parameter does not exceed the 'life' parameter to prevent the `#NUM!` error.
> - Avoid setting the 'life' parameter to zero to prevent the `#DIV/0!` error.
> - Use cell references instead of direct numeric input for the parameters. This makes your spreadsheet more flexible and easier to update if the values change.

### Usage

A few examples using the SYD function.

```
SYD(10000, 1000, 5, 3) returns 1800 (the amount the asset depreciates in year 3, calculated using the sum-of-years digits method)  
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
        "Useful Life",
        "Period",
        "SYD Depreciation"
    ],
    [
        25000,
        5000,
        8,
        1,
        "=SYD(A2,B2,C2,D2)"
    ],
    [
        25000,
        5000,
        8,
        2,
        "=SYD(A3,B3,C3,D3)"
    ],
    [
        25000,
        5000,
        8,
        3,
        "=SYD(A4,B4,C4,D4)"
    ],
    [
        25000,
        5000,
        8,
        4,
        "=SYD(A5,B5,C5,D5)"
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
        "Useful Life",
        "Period",
        "SYD Depreciation"
    ],
    [
        25000,
        5000,
        8,
        1,
        "=SYD(A2,B2,C2,D2)"
    ],
    [
        25000,
        5000,
        8,
        2,
        "=SYD(A3,B3,C3,D3)"
    ],
    [
        25000,
        5000,
        8,
        3,
        "=SYD(A4,B4,C4,D4)"
    ],
    [
        25000,
        5000,
        8,
        4,
        "=SYD(A5,B5,C5,D5)"
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
        "Useful Life",
        "Period",
        "SYD Depreciation"
    ],
    [
        25000,
        5000,
        8,
        1,
        "=SYD(A2,B2,C2,D2)"
    ],
    [
        25000,
        5000,
        8,
        2,
        "=SYD(A3,B3,C3,D3)"
    ],
    [
        25000,
        5000,
        8,
        3,
        "=SYD(A4,B4,C4,D4)"
    ],
    [
        25000,
        5000,
        8,
        4,
        "=SYD(A5,B5,C5,D5)"
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
        "Useful Life",
        "Period",
        "SYD Depreciation"
    ],
    [
        25000,
        5000,
        8,
        1,
        "=SYD(A2,B2,C2,D2)"
    ],
    [
        25000,
        5000,
        8,
        2,
        "=SYD(A3,B3,C3,D3)"
    ],
    [
        25000,
        5000,
        8,
        3,
        "=SYD(A4,B4,C4,D4)"
    ],
    [
        25000,
        5000,
        8,
        4,
        "=SYD(A5,B5,C5,D5)"
    ]
]
            }]
        });
    }
}
```

