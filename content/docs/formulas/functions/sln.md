title: SLN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SLN function in Jspreadsheet

# SLN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SLN` function in Jspreadsheet Formulas Pro is used to calculate the straight-line depreciation of an asset for one period. This is the amount an asset is devalued over time, divided evenly across its useful lifespan. To use this function, you would input the initial cost of the asset, its salvage value (the estimated value at the end of its use), and the total lifespan of the asset. The `SLN` function then provides the depreciation cost for each period.

## Documentation

Returns the straight-line depreciation of an asset for a single period.

### Category

Financial

### Syntax

SLN(cost, salvage, life)

| Parameter | Description |
| ----------- | ------------- |
| `cost` | The initial cost of the asset. |
| `salvage` | The value of the asset at the end of its useful life (also called the salvage value). |
| `life` | The number of periods over which the asset will be depreciated. |


### Behavior

The 'SLN' function in spreadsheets calculates the straight-line depreciation of an asset over a specified period. It requires three arguments: cost of the asset, salvage value (the value of the asset at the end of its useful life), and life (the number of periods, usually years, over which the asset is depreciated). Here's how it behaves:

1. Empty Cells: If any of the arguments (cost, salvage, life) are empty cells, the function will return an error. 

2. Text: If any of the arguments are non-numeric text values, the function will return an error. 

3. Booleans: Boolean values are treated as numbers, with TRUE being equivalent to 1 and FALSE to 0. However, using boolean values in this function rarely makes sense in practice.

4. Errors: If any of the arguments contain error values, the function will propagate the error.

5. Negative Numbers: If the cost or life is a negative number, the function will return an error. If the salvage value is negative, it implies the disposal cost of the asset, and the function will calculate a higher depreciation.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned if any of the arguments are non-numeric. |
| #NUM! | This error is returned if the cost or life is less than zero. |
| #DIV/0! | This error is returned if the life of the asset is zero, as it's not possible to calculate depreciation for an asset with zero lifespan. |

### Best practices

> - Always ensure to input numeric values for all the arguments in the SLN function to avoid errors.
> - Be careful when inputting the salvage value. If it's a negative number, it means there will be a disposal cost for the asset, resulting in higher depreciation.
> - Avoid using boolean values as arguments in the SLN function as they do not represent meaningful cost, salvage, or life values.
> - Use error handling functions like IFERROR to handle possible errors and maintain the cleanliness of your spreadsheet.

### Usage

A few examples using the SLN function.

```
SLN(10000, 2000, 10) returns 800  
SLN(5000, 500, 5) returns 900  
SLN(250000, 10000, 25) returns 9600  
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
        "Asset",
        "Initial Cost",
        "Salvage Value",
        "Useful Life (Years)",
        "Annual Depreciation"
    ],
    [
        "Office Equipment",
        15000,
        1500,
        8,
        "=SLN(B2,C2,D2)"
    ],
    [
        "Delivery Truck",
        35000,
        5000,
        6,
        "=SLN(B3,C3,D3)"
    ],
    [
        "Manufacturing Machine",
        120000,
        8000,
        15,
        "=SLN(B4,C4,D4)"
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
        "Asset",
        "Initial Cost",
        "Salvage Value",
        "Useful Life (Years)",
        "Annual Depreciation"
    ],
    [
        "Office Equipment",
        15000,
        1500,
        8,
        "=SLN(B2,C2,D2)"
    ],
    [
        "Delivery Truck",
        35000,
        5000,
        6,
        "=SLN(B3,C3,D3)"
    ],
    [
        "Manufacturing Machine",
        120000,
        8000,
        15,
        "=SLN(B4,C4,D4)"
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
        "Asset",
        "Initial Cost",
        "Salvage Value",
        "Useful Life (Years)",
        "Annual Depreciation"
    ],
    [
        "Office Equipment",
        15000,
        1500,
        8,
        "=SLN(B2,C2,D2)"
    ],
    [
        "Delivery Truck",
        35000,
        5000,
        6,
        "=SLN(B3,C3,D3)"
    ],
    [
        "Manufacturing Machine",
        120000,
        8000,
        15,
        "=SLN(B4,C4,D4)"
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
        "Asset",
        "Initial Cost",
        "Salvage Value",
        "Useful Life (Years)",
        "Annual Depreciation"
    ],
    [
        "Office Equipment",
        15000,
        1500,
        8,
        "=SLN(B2,C2,D2)"
    ],
    [
        "Delivery Truck",
        35000,
        5000,
        6,
        "=SLN(B3,C3,D3)"
    ],
    [
        "Manufacturing Machine",
        120000,
        8000,
        15,
        "=SLN(B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

