title: PROB function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PROB function in Jspreadsheet

# PROB function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PROB` function in Jspreadsheet Formulas Pro is a tool that calculates the likelihood of a specific result based on a set of values and their corresponding probabilities. For instance, if you have a dataset with different outcomes and each outcome has a certain probability attached to it, the `PROB` function can tell you the probability of a specific outcome occurring. It's a handy function for statistical analysis, predicting trends or making forecasts based on previous data.

## Documentation

Returns the probability of an outcome occurring given a range of values and associated probabilities.

### Category

Statistical

### Syntax

PROB(range, probability, [lower], [upper])

| Parameter | Description |
| ----------- | ------------- |
| `range` | The range of numeric values to consider for the probability calculation. |
| `probability` | The probabilities associated with each value in the range argument. |
| `lower` | Optional. The lower bound of the range of values to consider for the probability calculation. If omitted, defaults to the minimum value in the range argument. |
| `upper` | Optional. The upper bound of the range of values to consider for the probability calculation. If omitted, defaults to the maximum value in the range argument. |


### Behavior

The `PROB` function in spreadsheets is used to return the probability that values in a range are between two limits. If the upper limit is not specified, the function will return the probability that values in the range are equal to the lower limit.

- If the array or probability array contains logical values or empty cells, those values are ignored.
- The function requires that the array and prob_array arguments be of equal size, otherwise, it returns an error.
- Both the array and prob_array should contain numeric values. If they contain text, the function will return an error.
- The function will return an error if the sum of the probabilities in the prob_array is not equal to 1.
- If the lower limit is greater than the upper limit, the function will return 0.

### Common Errors

| Error | Description |
| ------| ----------- |
| #N/A  | This error occurs when the sum of the probabilities in the prob_array is not equal to 1. |
| #VALUE! | This error is returned when the array and prob_array arguments are not of equal size. |
| #NUM! | This error occurs when the lower limit is greater than the upper limit. |

### Best practices

> - Ensure that the array and prob_array arguments are of equal size to avoid a #VALUE! error.
> - Make sure that the sum of the probabilities in the prob_array is equal to 1 to avoid a #N/A error.
> - Always check that the lower limit is not greater than the upper limit to prevent a #NUM! error.
> - It's a good practice to make sure the array and prob_array contain numeric values only as text values can lead to errors.

### Usage

A few examples using the PROB function.

```
PROB(A1:A5,B1:B5) returns the probability of any value from A1 to A5 occurring, based on the corresponding probabilities in B1 to B5  
PROB(A1:A5,B1:B5,10,20) returns the probability of any value from A1 to A5 between 10 and 20, based on the corresponding probabilities in B1 to B5  
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
        "Sales Amount",
        "Probability",
        "Prob Formula"
    ],
    [
        1000,
        0.2,
        "=PROB(A2:A6,B2:B6)"
    ],
    [
        2000,
        0.3,
        "=PROB(A2:A6,B2:B6,1500,2500)"
    ],
    [
        3000,
        0.25,
        ""
    ],
    [
        4000,
        0.15,
        ""
    ],
    [
        5000,
        0.1,
        ""
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
        "Sales Amount",
        "Probability",
        "Prob Formula"
    ],
    [
        1000,
        0.2,
        "=PROB(A2:A6,B2:B6)"
    ],
    [
        2000,
        0.3,
        "=PROB(A2:A6,B2:B6,1500,2500)"
    ],
    [
        3000,
        0.25,
        ""
    ],
    [
        4000,
        0.15,
        ""
    ],
    [
        5000,
        0.1,
        ""
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
        "Sales Amount",
        "Probability",
        "Prob Formula"
    ],
    [
        1000,
        0.2,
        "=PROB(A2:A6,B2:B6)"
    ],
    [
        2000,
        0.3,
        "=PROB(A2:A6,B2:B6,1500,2500)"
    ],
    [
        3000,
        0.25,
        ""
    ],
    [
        4000,
        0.15,
        ""
    ],
    [
        5000,
        0.1,
        ""
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
        "Sales Amount",
        "Probability",
        "Prob Formula"
    ],
    [
        1000,
        0.2,
        "=PROB(A2:A6,B2:B6)"
    ],
    [
        2000,
        0.3,
        "=PROB(A2:A6,B2:B6,1500,2500)"
    ],
    [
        3000,
        0.25,
        ""
    ],
    [
        4000,
        0.15,
        ""
    ],
    [
        5000,
        0.1,
        ""
    ]
]
            }]
        });
    }
}
```

