title: QUARTILE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the QUARTILE function in Jspreadsheet

# QUARTILE function

`PRO`{.jtag}

The `QUARTILE` function in Jspreadsheet Formulas Pro is a tool used to calculate the quartile of a dataset. Essentially, it helps identify a value that separates the lower 25% of values from the upper 75%. This function ensures a simple and efficient way to analyze and understand the distribution of values in your dataset. It's a powerful tool for statistical analysis and understanding the spread of your data.

## Documentation

Calculates the quartile of a dataset, which is a value that separates the lowest 25% from the highest 75% of values.

### Category

Compatibility

### Syntax

QUARTILE(array, quart)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range of data for which to determine the quartile. |
| `quart` | The quartile to return. 1 returns the minimum value, 2 returns the value at the first quartile, 3 returns the value at the median (second quartile), and 4 returns the value at the third quartile. |


### Behavior

The `QUARTILE` function in spreadsheets is used to calculate the specified quartile of a data set. Quartiles are values that divide a data set into four equal parts, and the `QUARTILE` function can return the minimum value, first quartile, second quartile, third quartile, or maximum value.

- If the range contains empty cells, those cells are ignored.
- If the range contains text, boolean values, or errors, those cells are also ignored and will not interfere with the calculation.
- The function requires two arguments: the array or cell range of data, and the quartile value (0-4) to return. If the quartile value is not a whole number between 0 and 4, the function will return an error.
- If the data set contains fewer than four data points, the function will return an error because it cannot calculate quartiles.

### Common Errors

| Error | Description |
|---|---|
| `#NUM!` | Occurs if the second argument (quartile) is less than 0 or greater than 4. |
| `#DIV/0!` | Occurs if the data set has fewer than four data points. |
| `#VALUE!` | Occurs if the second argument (quartile) is non-numeric. |

### Best practices

> - Always ensure that you have a large enough data set (more than four data points) to calculate quartiles.
> - Be mindful of the quartile value you specify. Remember, 0 returns the minimum value, 1 returns the first quartile, 2 returns the second quartile (median), 3 returns the third quartile, and 4 returns the maximum value.
> - Avoid including text, boolean values, or error cells in your data range as they are ignored by the function.
> - Always double-check your data range to ensure it does not include any empty cells. Although the function ignores these, they may skew your understanding of the data set size.

### Usage

A few examples using the QUARTILE function.

```
QUARTILE(A1:A10, 2) returns the value at the first quartile (the value separating the lowest 25% of values from the highest 75%) for the range A1:A10  
QUARTILE(B2:B20, 3) returns the value at the median (the second quartile) for the range B2:B20  
QUARTILE(C1:C100, 4) returns the value at the third quartile (the value separating the lowest 75% of values from the highest 25%) for the range C1:C100  
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
        "Sales Rep",
        "Monthly Sales",
        "Q1 (25th percentile)",
        "Q2 (Median)",
        "Q3 (75th percentile)"
    ],
    [
        "John",
        45000
    ],
    [
        "Sarah",
        52000
    ],
    [
        "Mike",
        38000
    ],
    [
        "Lisa",
        61000
    ],
    [
        "Tom",
        47000
    ],
    [
        "",
        "",
        "=QUARTILE(B2:B6,1)",
        "=QUARTILE(B2:B6,2)",
        "=QUARTILE(B2:B6,3)"
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
        "Sales Rep",
        "Monthly Sales",
        "Q1 (25th percentile)",
        "Q2 (Median)",
        "Q3 (75th percentile)"
    ],
    [
        "John",
        45000
    ],
    [
        "Sarah",
        52000
    ],
    [
        "Mike",
        38000
    ],
    [
        "Lisa",
        61000
    ],
    [
        "Tom",
        47000
    ],
    [
        "",
        "",
        "=QUARTILE(B2:B6,1)",
        "=QUARTILE(B2:B6,2)",
        "=QUARTILE(B2:B6,3)"
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
        "Sales Rep",
        "Monthly Sales",
        "Q1 (25th percentile)",
        "Q2 (Median)",
        "Q3 (75th percentile)"
    ],
    [
        "John",
        45000
    ],
    [
        "Sarah",
        52000
    ],
    [
        "Mike",
        38000
    ],
    [
        "Lisa",
        61000
    ],
    [
        "Tom",
        47000
    ],
    [
        "",
        "",
        "=QUARTILE(B2:B6,1)",
        "=QUARTILE(B2:B6,2)",
        "=QUARTILE(B2:B6,3)"
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
        "Sales Rep",
        "Monthly Sales",
        "Q1 (25th percentile)",
        "Q2 (Median)",
        "Q3 (75th percentile)"
    ],
    [
        "John",
        45000
    ],
    [
        "Sarah",
        52000
    ],
    [
        "Mike",
        38000
    ],
    [
        "Lisa",
        61000
    ],
    [
        "Tom",
        47000
    ],
    [
        "",
        "",
        "=QUARTILE(B2:B6,1)",
        "=QUARTILE(B2:B6,2)",
        "=QUARTILE(B2:B6,3)"
    ]
]
            }]
        });
    }
}
```

