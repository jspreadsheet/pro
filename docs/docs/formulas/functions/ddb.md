title: DDB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DDB function in Jspreadsheet

# DDB function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DDB` function in Jspreadsheet Formulas Pro is a handy tool that helps you figure out the depreciation of an asset over a given time period using the double-declining balance method. This method accelerates depreciation, allowing for higher depreciation expenses in earlier periods compared to later ones. You can use this function by inputting specific parameters such as the cost of the asset, its expected lifetime, and the period for which you want to calculate the depreciation. The `DDB` function then provides the depreciated value for that specified period.

## Documentation

Calculates the depreciation of an asset for a specified period using the double-declining balance method.

### Category

Financial

### Syntax

DDB(cost, salvage, life, period, [factor])

| Parameter | Description |
| ----------- | ------------- |
| `cost` | The initial cost of the asset. |
| `salvage` | The value of the asset at the end of its useful life. |
| `life` | The number of periods over which the asset will be depreciated. |
| `period` | The period for which you want to calculate the depreciation. Must be greater than or equal to 1 and less than or equal to the life of the asset. |
| `[factor]` | Optional. The rate at which the balance declines during the first year of depreciation. If omitted or zero, defaults to 2 (double-declining balance). |


### Behavior

The `DDB` function in spreadsheets is used to compute the depreciation of an asset for a specified period using the double-declining balance method. It requires five arguments: cost, salvage, life, period, and factor. Here's how it handles different types of inputs:

1. **Numbers:** The function expects all its arguments to be numerical. The cost, salvage, life, period, and factor should all be positive numbers. 

2. **Empty cells:** If any of the required arguments are missing or refer to empty cells, the `DDB` function will return an error.

3. **Text:** Text inputs are not applicable for the `DDB` function. If any of the arguments are text, the function will return an error.

4. **Booleans:** Boolean values are not applicable for the `DDB` function. If any of the arguments are boolean values, the function will return an error.

5. **Errors:** If any of the arguments contain error values or refer to cells with error values, the `DDB` function will propagate the error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs if any of the supplied arguments are non-numeric. |
| #NUM! | Occurs if the supplied period is < 1, if the period is greater than the life of the asset, or if the factor is <= 0. |
| #DIV/0! | Occurs if the life of the asset is zero, causing a division by zero error. |

### Best practices

> - Always ensure that all the required arguments are provided to avoid errors. 
> - Be cautious about the period argument. It should not be less than 1 or greater than the life of the asset.
> - Avoid using non-numeric values as input to the `DDB` function to prevent `#VALUE!` errors.
> - It's advisable to always make sure that the factor is greater than 0 to prevent `#NUM!` errors.

### Usage

A few examples using the DDB function.

```
DDB(10000, 2000, 10, 2) returns $1600 (depreciation for second year)  
DDB(50000, 5000, 5, 3, 1.5) returns $7350 (depreciation for third year with factor of 1.5)  
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
        "Year 1 Depreciation",
        "Year 2 Depreciation",
        "Year 3 Depreciation"
    ],
    [
        25000,
        2000,
        8,
        1,
        "=DDB(A2,B2,C2,D2)",
        "=DDB(A2,B2,C2,2)",
        "=DDB(A2,B2,C2,3)"
    ],
    [
        45000,
        5000,
        6,
        2,
        "=DDB(A3,B3,C3,1)",
        "=DDB(A3,B3,C3,D3)",
        "=DDB(A3,B3,C3,3)"
    ],
    [
        80000,
        8000,
        10,
        3,
        "=DDB(A4,B4,C4,1)",
        "=DDB(A4,B4,C4,2)",
        "=DDB(A4,B4,C4,D4)"
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
        "Year 1 Depreciation",
        "Year 2 Depreciation",
        "Year 3 Depreciation"
    ],
    [
        25000,
        2000,
        8,
        1,
        "=DDB(A2,B2,C2,D2)",
        "=DDB(A2,B2,C2,2)",
        "=DDB(A2,B2,C2,3)"
    ],
    [
        45000,
        5000,
        6,
        2,
        "=DDB(A3,B3,C3,1)",
        "=DDB(A3,B3,C3,D3)",
        "=DDB(A3,B3,C3,3)"
    ],
    [
        80000,
        8000,
        10,
        3,
        "=DDB(A4,B4,C4,1)",
        "=DDB(A4,B4,C4,2)",
        "=DDB(A4,B4,C4,D4)"
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
        "Year 1 Depreciation",
        "Year 2 Depreciation",
        "Year 3 Depreciation"
    ],
    [
        25000,
        2000,
        8,
        1,
        "=DDB(A2,B2,C2,D2)",
        "=DDB(A2,B2,C2,2)",
        "=DDB(A2,B2,C2,3)"
    ],
    [
        45000,
        5000,
        6,
        2,
        "=DDB(A3,B3,C3,1)",
        "=DDB(A3,B3,C3,D3)",
        "=DDB(A3,B3,C3,3)"
    ],
    [
        80000,
        8000,
        10,
        3,
        "=DDB(A4,B4,C4,1)",
        "=DDB(A4,B4,C4,2)",
        "=DDB(A4,B4,C4,D4)"
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
        "Year 1 Depreciation",
        "Year 2 Depreciation",
        "Year 3 Depreciation"
    ],
    [
        25000,
        2000,
        8,
        1,
        "=DDB(A2,B2,C2,D2)",
        "=DDB(A2,B2,C2,2)",
        "=DDB(A2,B2,C2,3)"
    ],
    [
        45000,
        5000,
        6,
        2,
        "=DDB(A3,B3,C3,1)",
        "=DDB(A3,B3,C3,D3)",
        "=DDB(A3,B3,C3,3)"
    ],
    [
        80000,
        8000,
        10,
        3,
        "=DDB(A4,B4,C4,1)",
        "=DDB(A4,B4,C4,2)",
        "=DDB(A4,B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

