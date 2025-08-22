title: CONFIDENCE.T function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CONFIDENCE.T function in Jspreadsheet

# CONFIDENCE.T function

`PRO`{.jtag}

The `CONFIDENCE.T` function in Jspreadsheet Formulas Pro is a statistical tool that provides the confidence interval for a population mean, based on a Student's t-distribution. It gives you a range in which the true mean of a population is likely to fall, with a specified level of confidence. Essentially, it helps you make predictions about a large group based on a smaller sample. This function is particularly useful in fields like market research, where it's often impractical to gather data from every member of a population.

## Documentation

Returns the confidence interval for a population mean, using a Student's t-distribution.

### Category

Statistical

### Syntax

CONFIDENCE.T(alpha, standard_dev, size)

| Parameter | Description |
| ----------- | ------------- |
| `alpha` | The significance level used to compute the confidence level. Often represented as a decimal; for example, use 0.05 for a 95% confidence level. |
| `standard_dev` | The population standard deviation for the data range and is assumed to be known. Must be greater than 0. |
| `size` | The sample size. |


### Behavior

The `CONFIDENCE.T` function in spreadsheets is used to calculate the confidence interval for a population mean, using a Student's T distribution. The function requires three arguments: `alpha`, `standard_dev`, and `size`. `alpha` is the significance level used to compute the confidence level, `standard_dev` is the population standard deviation, and `size` is the sample size.

- The function ignores empty cells.
- Texts are typically not allowed and will result in error.
- Booleans are treated as integers 0 (false) and 1 (true).
- If the value of `alpha` is ≤ 0 or ≥ 1, the function will return a #NUM! error.
- If the `standard_dev` ≤ 0, it will return a #NUM! error.
- If `size` is < 1, it will return a #NUM! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If any of the supplied arguments are non-numeric. |
| #NUM! | If `alpha` ≤ 0 or ≥ 1, `standard_dev` ≤ 0, or `size` < 1. |
| #N/A | If any of the arguments are missing. |

### Best practices

> - Always check your data to make sure there are no non-numeric values before using the `CONFIDENCE.T` function.
> - Make sure your `alpha` value is between 0 and 1 (exclusive), `standard_dev` is more than 0, and `size` is greater than or equal to 1; otherwise, you will get a #NUM! error.
> - Be aware that the `CONFIDENCE.T` function assumes your data follows a Student's T distribution. If your data does not meet this assumption, the results may not be accurate.
> - Remember that the `CONFIDENCE.T` function gives you the radius of the confidence interval, not the whole range. To get the whole range, subtract the result from the mean to get the lower limit and add the result to the mean to get the upper limit.

### Usage

A few examples using the CONFIDENCE.T function.

```
CONFIDENCE.T(0.05, 1.5, 30)  
CONFIDENCE.T(0.01, 2, 50)  
CONFIDENCE.T(0.1, 3, 20)  
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
        "Sample Size",
        "Standard Dev",
        "Alpha",
        "Confidence Interval"
    ],
    [
        25,
        2.3,
        0.05,
        "=CONFIDENCE.T(C2,B2,A2)"
    ],
    [
        40,
        1.8,
        0.01,
        "=CONFIDENCE.T(C3,B3,A3)"
    ],
    [
        15,
        3.2,
        0.1,
        "=CONFIDENCE.T(C4,B4,A4)"
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
        "Sample Size",
        "Standard Dev",
        "Alpha",
        "Confidence Interval"
    ],
    [
        25,
        2.3,
        0.05,
        "=CONFIDENCE.T(C2,B2,A2)"
    ],
    [
        40,
        1.8,
        0.01,
        "=CONFIDENCE.T(C3,B3,A3)"
    ],
    [
        15,
        3.2,
        0.1,
        "=CONFIDENCE.T(C4,B4,A4)"
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
        "Sample Size",
        "Standard Dev",
        "Alpha",
        "Confidence Interval"
    ],
    [
        25,
        2.3,
        0.05,
        "=CONFIDENCE.T(C2,B2,A2)"
    ],
    [
        40,
        1.8,
        0.01,
        "=CONFIDENCE.T(C3,B3,A3)"
    ],
    [
        15,
        3.2,
        0.1,
        "=CONFIDENCE.T(C4,B4,A4)"
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
        "Sample Size",
        "Standard Dev",
        "Alpha",
        "Confidence Interval"
    ],
    [
        25,
        2.3,
        0.05,
        "=CONFIDENCE.T(C2,B2,A2)"
    ],
    [
        40,
        1.8,
        0.01,
        "=CONFIDENCE.T(C3,B3,A3)"
    ],
    [
        15,
        3.2,
        0.1,
        "=CONFIDENCE.T(C4,B4,A4)"
    ]
]
            }]
        });
    }
}
```

