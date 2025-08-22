title: RSQ function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RSQ function in Jspreadsheet

# RSQ function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `RSQ` function in Jspreadsheet Formulas Pro is a useful tool for statistical analysis. It calculates the square of the Pearson product moment correlation coefficient between two sets of data you provide, commonly referred to as `known_y's` and `known_x's`. In simple terms, it measures the strength and direction of the relationship between these two data sets. This function is particularly useful when you want to understand how closely related your two sets of data are.

## Documentation

Returns the square of the Pearson product moment correlation coefficient through data points in known_y's and known_x's.

### Category

Statistical

### Syntax

RSQ(known_y's, known_x's)

| Parameter | Description |
| ----------- | ------------- |
| `known_y's` | An array or range of dependent data points. |
| `known_x's` | An array or range of independent data points. |


### Behavior

The `RSQ` function in spreadsheet calculates the square of the Pearson product-moment correlation coefficient through a given set of data. The Pearson product-moment correlation coefficient, also called Pearson's r, measures the strength and direction of the linear relationship between two variables.

1. For the `RSQ` function to work properly, the two arrays (known_y's and known_x's) need to be numeric and they should contain the same number of data points. The arrays can be in the form of actual numbers, arrays, or references that contain numbers.

2. If either array contains text, logical values, or empty cells, those values are ignored.

3. If the standard deviation of the input data equals zero (all the y-values are the same or all the x-values are the same), `RSQ` function returns a `#DIV/0!` error.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #N/A  | Occurs if the two provided arrays have different lengths. |
| #VALUE! | Occurs if either of the provided arguments is non-numeric. |
| #DIV/0! | Occurs if the standard deviation of the input data equals zero (all y-values are the same or all x-values are the same). |

### Best practices
> - Always ensure that the known_y's and known_x's arrays have the same number of data points to avoid the #N/A error.
> - Avoid non-numeric data in your known_y's and known_x's arrays as they will be ignored or could result in a #VALUE! error.
> - Be cautious when interpreting the result of `RSQ`. A high R-squared does not necessarily indicate that the model fits the data well. It can be artificially high if the model is over-fitted.
> - Always check your data to ensure they follow the linear relationship as `RSQ` calculates the square of the Pearson correlation coefficient, which measures the linear relationship between two datasets.

### Usage

A few examples using the RSQ function.

```
RSQ([2,3,9,1,8], [6,5,11,7,5])  
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
        "Sales ($000)",
        "Marketing Spend ($000)",
        "R-Squared"
    ],
    [
        45,
        12,
        "=RSQ(A2:A6,B2:B6)"
    ],
    [
        62,
        18
    ],
    [
        38,
        8
    ],
    [
        71,
        22
    ],
    [
        55,
        15
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
        "Sales ($000)",
        "Marketing Spend ($000)",
        "R-Squared"
    ],
    [
        45,
        12,
        "=RSQ(A2:A6,B2:B6)"
    ],
    [
        62,
        18
    ],
    [
        38,
        8
    ],
    [
        71,
        22
    ],
    [
        55,
        15
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
        "Sales ($000)",
        "Marketing Spend ($000)",
        "R-Squared"
    ],
    [
        45,
        12,
        "=RSQ(A2:A6,B2:B6)"
    ],
    [
        62,
        18
    ],
    [
        38,
        8
    ],
    [
        71,
        22
    ],
    [
        55,
        15
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
        "Sales ($000)",
        "Marketing Spend ($000)",
        "R-Squared"
    ],
    [
        45,
        12,
        "=RSQ(A2:A6,B2:B6)"
    ],
    [
        62,
        18
    ],
    [
        38,
        8
    ],
    [
        71,
        22
    ],
    [
        55,
        15
    ]
]
            }]
        });
    }
}
```

