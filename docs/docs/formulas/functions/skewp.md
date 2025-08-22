title: SKEW.P function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SKEW.P function in Jspreadsheet

# SKEW.P function

`PRO`{.jtag}

The `SKEW.P` function in Jspreadsheet Formulas Pro is a statistical tool that provides the population skewness of a distribution - a quantification of how asymmetric the data set is. If the skewness is negative, the data is skewed left, while a positive skewness indicates data skewed right. This function helps you understand the nature of your data distribution better, providing insights into its overall shape and balance.

## Documentation

Returns the population skewness of a distribution, which is a measure of asymmetry.

### Category

Statistical

### Syntax

SKEW.P(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers for which to calculate the population skewness. |
| `numberN` | Optional. Additional numbers or ranges of numbers for which to calculate the population skewness. Up to 255 arguments can be provided. |


### Behavior

The `SKEW.P` function in spreadsheets calculates the skewness of a given dataset. Skewness is a measure of the asymmetry of the probability distribution of a real-valued random variable about its mean. Here is how it behaves with different types of data:

- Empty cells: The `SKEW.P` function ignores empty cells.

- Text: The `SKEW.P` function cannot handle text and will return an error if any cell in the range or array contains text.

- Booleans: Boolean values are treated as 1 for TRUE and 0 for FALSE.

- Errors: If any cell in the range or array contains an error, `SKEW.P` will return an error.

- Data limitation: The `SKEW.P` function requires at least 2 numeric data points in the dataset. If the dataset contains fewer than two data points, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | Occurs when less than two numeric data points are provided. |
| #VALUE! | Occurs when non-numeric data points are included in the dataset. |
| #N/A | Occurs when the function cannot find the specified value or cell. |

### Best practices

> - Always ensure that the dataset provided to the `SKEW.P` function contains at least two numerical values, to avoid a `#DIV/0!` error.
> - Exclude non-numeric values from the dataset to prevent a `#VALUE!` error.
> - Use the `ISNUMBER` function to check whether cells contain numeric values before using them in `SKEW.P`.
> - For a sample of a population, use `SKEW` instead of `SKEW.P` as `SKEW.P` is biased and is appropriate only for population, not for a sample.

### Usage

A few examples using the SKEW.P function.

```
SKEW.P(A1:A100) returns the population skewness of the values in cells A1 through A100  
SKEW.P(1,2,3,4,5) returns 0  
SKEW.P(-1,0,1,2) returns approximately 0.37139  
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
        "Sales Data",
        "Population Skewness"
    ],
    [
        120,
        "=SKEW.P(A2:A6)"
    ],
    [
        150
    ],
    [
        180
    ],
    [
        200
    ],
    [
        350
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
        "Sales Data",
        "Population Skewness"
    ],
    [
        120,
        "=SKEW.P(A2:A6)"
    ],
    [
        150
    ],
    [
        180
    ],
    [
        200
    ],
    [
        350
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
        "Sales Data",
        "Population Skewness"
    ],
    [
        120,
        "=SKEW.P(A2:A6)"
    ],
    [
        150
    ],
    [
        180
    ],
    [
        200
    ],
    [
        350
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
        "Sales Data",
        "Population Skewness"
    ],
    [
        120,
        "=SKEW.P(A2:A6)"
    ],
    [
        150
    ],
    [
        180
    ],
    [
        200
    ],
    [
        350
    ]
]
            }]
        });
    }
}
```

