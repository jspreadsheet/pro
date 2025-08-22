title: FORECAST.LINEAR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FORECAST.LINEAR function in Jspreadsheet

# FORECAST.LINEAR function

`PRO`{.jtag}

The `FORECAST.LINEAR` function in Jspreadsheet Formulas Pro is a useful tool that helps you calculate or predict an upcoming value using the linear regression method on existing datasets. Essentially, it uses your current data points to determine a trend and then estimates a future value based on this trend. This can be especially useful when you're trying to project future figures for things like sales, costs, or other key metrics in your dataset.

## Documentation

Calculates or predicts a future value based on linear regression of a data set.

### Category

Statistical

### Syntax

FORECAST.LINEAR(x, known_y's, known_x's)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The x-value used to predict the y-value. |
| `known_y's` | An array of y-values representing known data points that you want to use in the regression analysis. |
| `known_x's` | An array of x-values representing known data points that you want to use in the regression analysis. The number of elements in known_x's should be equal to the number of elements in known_y's. |


### Behavior

The `FORECAST.LINEAR` function in spreadsheets is used to predict a future value along a linear trend. It calculates, or predicts, a future value by using existing values. The existing values are used to calculate a linear regression.

- The function requires three arguments: x, known_y's and known_x's.
- If any cells in known_y's or known_x's are empty or contain text or logical values, the `FORECAST.LINEAR` function will ignore those cells.
- The function will return a `#DIV/0!` error if the variance of known_x's equals zero.
- The function will return a `#N/A` error if the length of known_x's is less than the length of known_y's.
- If x is a logical value, the function will consider it as a numerical value.
- If known_y's or known_x's are logical values or text, they are considered as `#VALUE!` error.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | This error is returned if the variance of known_x's equals zero. |
| #N/A | This error is returned if the length of known_x's is less than the length of known_y's. |
| #VALUE! | This error is returned if known_y's or known_x's are logical values or text. |
| #NUM! | This error is returned if the length of known_x's and known_y's is less than 1. |

### Best practices

> - Always ensure that the known_x's and known_y's arrays are of the same length, otherwise, the function will return an error.
> - The `FORECAST.LINEAR` function is sensitive to outliers. Therefore, it is crucial to clean your data and remove any possible outliers before using this function.
> - Avoid using logical values or text within your known_y's or known_x's as they will be considered as `#VALUE!` errors.
> - Be aware that `FORECAST.LINEAR` function ignores cells in known_y's and known_x's that contain text or logical values. It only considers numeric values for computations.

### Usage

A few examples using the FORECAST.LINEAR function.

```
FORECAST.LINEAR(10,A2:A8,B2:B8)  
FORECAST.LINEAR(20,A2:A8,B2:B8)  
FORECAST.LINEAR(30,A2:A8,B2:B8)  
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
        100
    ],
    [
        2,
        150
    ],
    [
        3,
        200
    ],
    [
        4,
        250
    ],
    [
        5,
        300
    ],
    [
        6,
        350
    ],
    [
        7,
        "=FORECAST.LINEAR(7,B2:B7,A2:A7)"
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
        100
    ],
    [
        2,
        150
    ],
    [
        3,
        200
    ],
    [
        4,
        250
    ],
    [
        5,
        300
    ],
    [
        6,
        350
    ],
    [
        7,
        "=FORECAST.LINEAR(7,B2:B7,A2:A7)"
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
        100
    ],
    [
        2,
        150
    ],
    [
        3,
        200
    ],
    [
        4,
        250
    ],
    [
        5,
        300
    ],
    [
        6,
        350
    ],
    [
        7,
        "=FORECAST.LINEAR(7,B2:B7,A2:A7)"
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
        100
    ],
    [
        2,
        150
    ],
    [
        3,
        200
    ],
    [
        4,
        250
    ],
    [
        5,
        300
    ],
    [
        6,
        350
    ],
    [
        7,
        "=FORECAST.LINEAR(7,B2:B7,A2:A7)"
    ]
]
            }]
        });
    }
}
```

