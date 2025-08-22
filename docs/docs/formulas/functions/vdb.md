title: VDB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VDB function in Jspreadsheet

# VDB function



The `VDB` function in Jspreadsheet Formulas Pro is a tool used to calculate the decrease in value, or depreciation, of an asset over a specified period of time. This function utilizes the double-declining balance method, or other methods as defined by the user, to compute the depreciation value. It's especially useful for financial analysis and asset management as it helps in evaluating the current value of assets. With this function, users can accurately track the financial worth of an asset over its lifespan.

## Documentation

Calculates the depreciation of an asset for a specific period using the double-declining balance method or other methods that you specify.

### Category

Financial

### Syntax

VDB(cost, salvage, life, start_period, end_period, [factor], [no_switch])

| Parameter | Description |
| ----------- | ------------- |
| `cost` | The initial cost of the asset. |
| `salvage` | The value of the asset at the end of its useful life. Also called the salvage value or residual value of the asset. |
| `life` | The number of periods over which the asset is depreciated (sometimes called the useful life of the asset). |
| `start_period` | The period for which you want to calculate depreciation. The depreciation begins in this period. |
| `end_period` | The period for which you want to stop calculating depreciation. Depreciation is calculated for all periods between Start_period and End_period. |
| `[factor]` | Optional. The rate at which the balance declines during the useful life of the asset. If Factor is omitted, it defaults to 2 (the double-declining balance method). |
| `[no_switch]` | Optional. A logical value that determines whether to switch to straight-line depreciation when depreciation is greater than the declining balance. If No_switch is TRUE or omitted, switching occurs. If No_switch is FALSE, switching does not occur. |


### Behavior

The 'VDB' function in spreadsheets is used to calculate the depreciation of an asset for a specified or partial period using a declining balance method. It takes up to seven parameters: `cost`, `salvage`, `life`, `start_period`, `end_period`, `factor`, and `no_switch`. 

1. `cost`: The initial cost of the asset.
2. `salvage`: The value at the end of the depreciation.
3. `life`: The number of periods over which the asset is being depreciated.
4. `start_period`: The starting period for which to calculate the depreciation.
5. `end_period`: The ending period for which to calculate the depreciation.
6. `factor`: (Optional) The rate at which the balance declines.
7. `no_switch`: (Optional) A logical value specifying whether to switch to straight-line depreciation when depreciation is greater than the declining balance calculation.

The 'VDB' function handles different data types in the following ways:

- Empty cells are treated as zero.
- Texts are generally not acceptable and may lead to errors if used in place of numerical values.
- Booleans are treated as numbers, with TRUE being equivalent to 1 and FALSE being equivalent to 0.
- The function returns an error if any of the parameters are less than 0, except for `factor`, which can be less than 0.
- If the `start_period` is greater than `end_period`, the function will return an error.
- If the `factor` is missing, the function assumes it to be 2 (double-declining balance).

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error occurs when any of the input parameters are non-numeric or are less than 0 (except for `factor`). It may also occur if the `start_period` is greater than the `end_period`. |
| #NUM!  | This error is displayed when `life`, `start_period`, or `end_period` is equal to or less than 0. |

### Best practices

> - Always ensure that the `cost`, `salvage`, `life`, `start_period`, and `end_period` parameters are greater than or equal to 0.
> - Be careful with the `factor` parameter. If you want to use a method other than the double-declining balance, make sure to specify the `factor` explicitly.
> - The `no_switch` parameter should be used wisely. If you want to switch to straight-line depreciation when it's greater than the declining balance calculation, set `no_switch` to FALSE.
> - Always verify the data types of your parameters to avoid the #VALUE! error. The 'VDB' function expects numerical inputs for all parameters except `no_switch`, which is a logical value.

### Usage

A few examples using the VDB function.

```
VDB(10000, 2000, 5, 1, 3, 1)  
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
        "Start Period",
        "End Period",
        "Depreciation"
    ],
    [
        50000,
        5000,
        10,
        1,
        1,
        "=VDB(A2,B2,C2,D2,E2)"
    ],
    [
        25000,
        2000,
        8,
        2,
        3,
        "=VDB(A3,B3,C3,D3,E3)"
    ],
    [
        75000,
        8000,
        12,
        1,
        2,
        "=VDB(A4,B4,C4,D4,E4)"
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
        "Start Period",
        "End Period",
        "Depreciation"
    ],
    [
        50000,
        5000,
        10,
        1,
        1,
        "=VDB(A2,B2,C2,D2,E2)"
    ],
    [
        25000,
        2000,
        8,
        2,
        3,
        "=VDB(A3,B3,C3,D3,E3)"
    ],
    [
        75000,
        8000,
        12,
        1,
        2,
        "=VDB(A4,B4,C4,D4,E4)"
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
        "Start Period",
        "End Period",
        "Depreciation"
    ],
    [
        50000,
        5000,
        10,
        1,
        1,
        "=VDB(A2,B2,C2,D2,E2)"
    ],
    [
        25000,
        2000,
        8,
        2,
        3,
        "=VDB(A3,B3,C3,D3,E3)"
    ],
    [
        75000,
        8000,
        12,
        1,
        2,
        "=VDB(A4,B4,C4,D4,E4)"
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
        "Start Period",
        "End Period",
        "Depreciation"
    ],
    [
        50000,
        5000,
        10,
        1,
        1,
        "=VDB(A2,B2,C2,D2,E2)"
    ],
    [
        25000,
        2000,
        8,
        2,
        3,
        "=VDB(A3,B3,C3,D3,E3)"
    ],
    [
        75000,
        8000,
        12,
        1,
        2,
        "=VDB(A4,B4,C4,D4,E4)"
    ]
]
            }]
        });
    }
}
```

