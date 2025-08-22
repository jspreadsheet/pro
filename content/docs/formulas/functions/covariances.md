title: COVARIANCE.S function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COVARIANCE.S function in Jspreadsheet

# COVARIANCE.S function

`PRO`{.jtag}

The `COVARIANCE.S` function in Jspreadsheet Formulas Pro is a powerful tool that helps measure the relationship between two sets of data. It calculates the sample covariance, giving you an idea of how much the two random variables in your data sets change together. This estimate can be useful in predicting trends or understanding correlations in your data. Using this function can aid in data analysis and decision making in many different fields.

## Documentation

Calculates the sample covariance, which is an estimate of how much two random variables change together, between two specified sets of data.

### Category

Statistical

### Syntax

COVARIANCE.S(array1, array2)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | The first array or range of data. |
| `array2` | The second array or range of data. Must be equal in length to array1. |


### Behavior

The `COVARIANCE.S` function in spreadsheets calculates the sample covariance, the average of the products of deviations for each data point pair in two data sets. The function expects two arrays of numerical data as input. Here's how it handles different types of data:

- **Empty cells**: These are simply ignored; they don't interfere with the calculation.

- **Text**: If a cell contains text, the function will not be able to process it and will return an error.

- **Booleans**: Boolean values are treated as numbers, with TRUE being equivalent to 1 and FALSE equivalent to 0.

- **Errors**: If any cell in the array contains an error, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | Occurs when the two arrays provided do not have the same length. |
| #VALUE! | Occurs when one or more of the cells in the provided arrays contain non-numeric data. |
| #DIV/0! | Occurs when the denominator of the covariance formula equals zero, i.e., when the size of the array is less than or equal to 1. |

### Best practices

> - Always ensure that your input arrays have the same length. If they don't match, you'll get an #N/A error.
> - Avoid non-numeric data in your input arrays. The function cannot process text and will return a #VALUE! error if it encounters any.
> - Use sufficient data for accurate results. If your data set is too small (less than or equal to 1), you'll get a #DIV/0! error.
> - Remember that `COVARIANCE.S` computes the sample covariance. If you want to calculate the population covariance, use the `COVARIANCE.P` function instead.

### Usage

A few examples using the COVARIANCE.S function.

```
COVARIANCE.S([1,2,3,4],[5,6,7,8])  
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
        "Temperature (\u00b0F)",
        "Ice Cream Sales ($)",
        "Covariance"
    ],
    [
        75,
        120
    ],
    [
        82,
        150
    ],
    [
        68,
        95
    ],
    [
        90,
        180
    ],
    [
        77,
        135
    ],
    [
        "",
        "",
        "=COVARIANCE.S(A2:A6,B2:B6)"
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
        "Temperature (\u00b0F)",
        "Ice Cream Sales ($)",
        "Covariance"
    ],
    [
        75,
        120
    ],
    [
        82,
        150
    ],
    [
        68,
        95
    ],
    [
        90,
        180
    ],
    [
        77,
        135
    ],
    [
        "",
        "",
        "=COVARIANCE.S(A2:A6,B2:B6)"
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
        "Temperature (\u00b0F)",
        "Ice Cream Sales ($)",
        "Covariance"
    ],
    [
        75,
        120
    ],
    [
        82,
        150
    ],
    [
        68,
        95
    ],
    [
        90,
        180
    ],
    [
        77,
        135
    ],
    [
        "",
        "",
        "=COVARIANCE.S(A2:A6,B2:B6)"
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
        "Temperature (\u00b0F)",
        "Ice Cream Sales ($)",
        "Covariance"
    ],
    [
        75,
        120
    ],
    [
        82,
        150
    ],
    [
        68,
        95
    ],
    [
        90,
        180
    ],
    [
        77,
        135
    ],
    [
        "",
        "",
        "=COVARIANCE.S(A2:A6,B2:B6)"
    ]
]
            }]
        });
    }
}
```

