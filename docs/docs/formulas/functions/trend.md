title: TREND function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TREND function in Jspreadsheet

# TREND function

`PRO`{.jtag}

The `TREND` function in Jspreadsheet Formulas Pro is a useful tool for predicting future values based on existing data points. It operates by identifying a linear trend in your current information and returns estimated values along this trend line. This can be particularly helpful in forecasting sales, revenue, or other trends in your data. It's a great way to make educated guesses about future data points based on what's happened in the past.

## Documentation

Returns values along a linear trend.

### Category

Statistical

### Syntax

TREND(known_y's, [known_x's], [new_x's], [const])

| Parameter | Description |
| ----------- | ------------- |
| `known_y's` | An array or range of dependent data points |
| `[known_x's]` | Optional. Array or range of independent data points. If omitted, the array [1,2,3,...] is used. |
| `[new_x's]` | Optional. Array or range of new x-values for which you want to predict corresponding y-values. If omitted, the same x-values as [known_x's] are used. |
| `[const]` | Optional. Logical value specifying whether to force the constant b to equal 0. If omitted or FALSE, b is calculated normally. If TRUE, b is set equal to 0. |


### Behavior

The `TREND` function in spreadsheets is used for predicting a linear trend based on the known x-values and y-values by using the least squares method. The basic behavior of this function is as follows:

- It accepts both arrays and ranges of cells for x-values and y-values.
- It can handle empty cells, but those will be ignored in the calculation.
- Text or boolean values in the range of cells will result in an error.
- If the x-values and y-values have different lengths, the function will return an error.
- If there is an error in any cell in the range, the function will return an error.
- The function will return an array of predicted y-values if the new_x's are provided, otherwise, it will return a single predicted y-value for a new_x of 1.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the given argument is non-numeric, a boolean, or text. |
| #N/A | This error occurs if the lengths of the known y-values and known x-values are not equal. |
| #REF! | This error occurs if the given cell reference is not valid. |
| #DIV/0! | This error occurs if the function is trying to divide by zero, i.e., known x-values are all the same. |

### Best practices

> - Always ensure that the known y-values and known x-values have the same length to avoid the #N/A error.
> - Avoid using text, boolean values, or non-numeric values in the cells for this function to prevent the #VALUE! error.
> - Check the cell references before using them in the function to avoid the #REF! error.
> - Use the `TREND` function to predict future values but keep in mind that it assumes a linear relationship between x-values and y-values. If the relationship is not linear, the predictions may not be accurate.

### Usage

A few examples using the TREND function.

```
TREND([1,2,3,4],[1,2,3,4]) returns [[1],[2],[3],[4]]  
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
        "Projected Sales"
    ],
    [
        1,
        1000,
        "=TREND(B2:B6,A2:A6,A2:A6)"
    ],
    [
        2,
        1200
    ],
    [
        3,
        1350
    ],
    [
        4,
        1600
    ],
    [
        5,
        1750
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
        "Projected Sales"
    ],
    [
        1,
        1000,
        "=TREND(B2:B6,A2:A6,A2:A6)"
    ],
    [
        2,
        1200
    ],
    [
        3,
        1350
    ],
    [
        4,
        1600
    ],
    [
        5,
        1750
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
        "Projected Sales"
    ],
    [
        1,
        1000,
        "=TREND(B2:B6,A2:A6,A2:A6)"
    ],
    [
        2,
        1200
    ],
    [
        3,
        1350
    ],
    [
        4,
        1600
    ],
    [
        5,
        1750
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
        "Projected Sales"
    ],
    [
        1,
        1000,
        "=TREND(B2:B6,A2:A6,A2:A6)"
    ],
    [
        2,
        1200
    ],
    [
        3,
        1350
    ],
    [
        4,
        1600
    ],
    [
        5,
        1750
    ]
]
            }]
        });
    }
}
```

