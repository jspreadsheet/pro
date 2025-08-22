title: CONFIDENCE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CONFIDENCE function in Jspreadsheet

# CONFIDENCE function

`PRO`{.jtag}

The `CONFIDENCE` function in Jspreadsheet Formulas Pro is a statistical tool that calculates the confidence interval for a population mean. This means that it gives you a range within which the true average (mean) of a whole population is likely to fall. It is often used in data analysis to estimate the reliability of predictions, offering a calculated guess about the actual value based on observed data. So, by using the `CONFIDENCE` function, you can get an understanding of how accurate your data samples are in representing the entire population.

## Documentation

Returns the confidence interval for a population mean.

### Category

Compatibility

### Syntax

CONFIDENCE(alpha, standard_dev, size)

| Parameter | Description |
| ----------- | ------------- |
| `alpha` | The significance level used to compute the confidence level. Often represented as a decimal; for example, use 0.05 for a 95% confidence level. |
| `standard_dev` | The population standard deviation for the data range and is assumed to be known. Must be greater than 0. |
| `size` | The sample size. |


### Behavior

The `CONFIDENCE` function in spreadsheets is used to calculate the confidence interval for a population mean, using a normal distribution. It requires three arguments: `alpha`, `standard_dev` and `size`. Here's how it handles different types of inputs:
- Empty Cells: The function will treat empty cells as zeros. If the empty cell is one of the required arguments, it will return an error.
- Text: If a text string is input into any of the function's arguments, it will return a `#VALUE!` error.
- Booleans: If a boolean value is input, it will be automatically converted to 1 (TRUE) or 0 (FALSE).
- Errors: If any of the arguments contain an error, the `CONFIDENCE` function will return that same error.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #NUM! | Occurs when either the `alpha` argument is ≤ 0 or ≥ 1, `standard_dev` ≤ 0, or `size` < 1. |
| #VALUE! | Occurs when any of the arguments are non-numeric or are text strings. |
| #DIV/0! | Occurs when the `size` argument is zero. This is because you cannot calculate a confidence interval with zero observations. |

### Best practices
> - Always ensure that your `alpha` argument is between 0 and 1, as it represents a probability. Typically, for a 95% confidence interval, `alpha` would be 0.05.
> - The `standard_dev` and `size` arguments should always be positive. `standard_dev` represents the population standard deviation, while `size` represents the number of observations.
> - Be aware that the `CONFIDENCE` function assumes a normal distribution. If your data does not follow a normal distribution, consider using a different statistical method.
> - Always check your data for errors or non-numeric values before inputting it into the `CONFIDENCE` function to prevent erroneous output.

### Usage

A few examples using the CONFIDENCE function.

```
CONFIDENCE(0.05, 1.5, 30) returns 0.5367558243  
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
        "Alpha",
        "Std Dev",
        "Sample Size",
        "Confidence Interval"
    ],
    [
        0.05,
        2.3,
        25,
        "=CONFIDENCE(A2,B2,C2)"
    ],
    [
        0.01,
        1.8,
        50,
        "=CONFIDENCE(A3,B3,C3)"
    ],
    [
        0.1,
        3.2,
        15,
        "=CONFIDENCE(A4,B4,C4)"
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
        "Alpha",
        "Std Dev",
        "Sample Size",
        "Confidence Interval"
    ],
    [
        0.05,
        2.3,
        25,
        "=CONFIDENCE(A2,B2,C2)"
    ],
    [
        0.01,
        1.8,
        50,
        "=CONFIDENCE(A3,B3,C3)"
    ],
    [
        0.1,
        3.2,
        15,
        "=CONFIDENCE(A4,B4,C4)"
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
        "Alpha",
        "Std Dev",
        "Sample Size",
        "Confidence Interval"
    ],
    [
        0.05,
        2.3,
        25,
        "=CONFIDENCE(A2,B2,C2)"
    ],
    [
        0.01,
        1.8,
        50,
        "=CONFIDENCE(A3,B3,C3)"
    ],
    [
        0.1,
        3.2,
        15,
        "=CONFIDENCE(A4,B4,C4)"
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
        "Alpha",
        "Std Dev",
        "Sample Size",
        "Confidence Interval"
    ],
    [
        0.05,
        2.3,
        25,
        "=CONFIDENCE(A2,B2,C2)"
    ],
    [
        0.01,
        1.8,
        50,
        "=CONFIDENCE(A3,B3,C3)"
    ],
    [
        0.1,
        3.2,
        15,
        "=CONFIDENCE(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

