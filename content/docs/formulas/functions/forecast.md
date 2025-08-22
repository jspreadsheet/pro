title: FORECAST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FORECAST function in Jspreadsheet

# FORECAST function

`PRO`{.jtag}

The `FORECAST` function in Jspreadsheet Formulas Pro is a tool used to estimate or predict a future value based on existing data. It operates based on the principle of linear regression, which involves finding the best-fitting straight line through historical data points. By inputting known data points, the `FORECAST` function can calculate and suggest a likely future value. This is particularly useful for trends analysis and budgeting purposes.

## Documentation

Calculates or predicts a future value by using linear regression.

### Category

Statistical

### Syntax

FORECAST(x, known_y's, known_x's)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The x-value used to predict the y-value. |
| `known_y's` | An array of y-values representing known data points that you want to use in the regression analysis. |
| `known_x's` | An array of x-values representing known data points that you want to use in the regression analysis. The number of elements in known_x's should be equal to the number of elements in known_y's. |


### Behavior

The 'FORECAST' function in spreadsheets is used to predict future values by using existing (historical) data. The function uses the linear or an exponential algorithm, depending on the data series.

- If a cell in either 'known_y's' or 'known_x's' range is empty or contains text, the function will ignore that cell and the corresponding data point in the other range.
- If the 'known_y's' or 'known_x's' arrays are different sizes, the function will return an '#N/A' error.
- If the 'known_x's' array contains duplicate values, 'FORECAST' will return a '#DIV/0!' error.
- The 'FORECAST' function does not handle non-numeric data. If the 'known_y's' or 'known_x's' arrays contain non-numeric data (like text or booleans), the function will return a '#VALUE!' error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | The 'known_y's' or 'known_x's' arrays are different sizes |
| #DIV/0! | The 'known_x's' array contains duplicate values |
| #VALUE! | The 'known_y's' or 'known_x's' arrays contain non-numeric data (like text or booleans) |

### Best practices

> - Ensure that your 'known_y's' and 'known_x's' arrays are of the same size to avoid '#N/A' errors.
> - Try to avoid having duplicate values in your 'known_x's' array to prevent '#DIV/0!' errors.
> - Make sure that your 'known_y's' and 'known_x's' arrays contain only numeric data. Non-numeric data will result in '#VALUE!' errors.
> - The 'FORECAST' function is best used for data sets that have a linear relationship. If your data shows an exponential or polynomial trend, consider using other forecasting methods.

### Usage

A few examples using the FORECAST function.

```
FORECAST(10,A2:A8,B2:B8)  
FORECAST(20,A2:A8,B2:B8)  
FORECAST(30,A2:A8,B2:B8)  
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
        "Month",
        "Sales",
        "Forecast for Month 7"
    ],
    [
        1,
        1200
    ],
    [
        2,
        1350
    ],
    [
        3,
        1480
    ],
    [
        4,
        1620
    ],
    [
        5,
        1750
    ],
    [
        6,
        1890
    ],
    [
        7,
        "=FORECAST(7,B2:B7,A2:A7)"
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
        "Month",
        "Sales",
        "Forecast for Month 7"
    ],
    [
        1,
        1200
    ],
    [
        2,
        1350
    ],
    [
        3,
        1480
    ],
    [
        4,
        1620
    ],
    [
        5,
        1750
    ],
    [
        6,
        1890
    ],
    [
        7,
        "=FORECAST(7,B2:B7,A2:A7)"
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
        "Month",
        "Sales",
        "Forecast for Month 7"
    ],
    [
        1,
        1200
    ],
    [
        2,
        1350
    ],
    [
        3,
        1480
    ],
    [
        4,
        1620
    ],
    [
        5,
        1750
    ],
    [
        6,
        1890
    ],
    [
        7,
        "=FORECAST(7,B2:B7,A2:A7)"
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
        "Month",
        "Sales",
        "Forecast for Month 7"
    ],
    [
        1,
        1200
    ],
    [
        2,
        1350
    ],
    [
        3,
        1480
    ],
    [
        4,
        1620
    ],
    [
        5,
        1750
    ],
    [
        6,
        1890
    ],
    [
        7,
        "=FORECAST(7,B2:B7,A2:A7)"
    ]
]
            }]
        });
    }
}
```

