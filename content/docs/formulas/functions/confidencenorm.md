title: CONFIDENCE.NORM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CONFIDENCE.NORM function in Jspreadsheet

# CONFIDENCE.NORM function

`PRO`{.jtag}

The `CONFIDENCE.NORM` function in Jspreadsheet Formulas Pro is a handy tool that provides the confidence interval for a population mean. In simpler terms, it tells you the range in which you can expect to find the average value of a population based on your sample data, assuming a normal distribution. This function is particularly useful in statistical analysis and forecasting, helping to predict future values with a certain level of confidence.

## Documentation

Returns the confidence interval for a population mean, using a normal distribution.

### Category

Statistical

### Syntax

CONFIDENCE.NORM(alpha, standard_dev, size)

| Parameter | Description |
| ----------- | ------------- |
| `alpha` | The significance level used to compute the confidence level. Often represented as a decimal; for example, use 0.05 for a 95% confidence level. |
| `standard_dev` | The population standard deviation for the data range and is assumed to be known. Must be greater than 0. |
| `size` | The sample size. |


### Behavior

The `CONFIDENCE.NORM` function in spreadsheets is used to compute the confidence interval for a population mean, using a normal distribution. The function requires three arguments: `alpha`, `standard_dev`, and `size`. 

- If any of the arguments are empty cells, the function will return an error. 
- If any of the arguments are text, the function will attempt to convert the text to numbers. If the conversion is not possible, the function will return an error. 
- The function treats booleans as numbers, with TRUE being equivalent to 1 and FALSE being equivalent to 0. 
- If the `standard_dev` argument is less than or equal to 0, or the `size` argument is less than or equal to 1, the function will return an error. 
- If the `alpha` argument is less than or equal to 0, or greater than or equal to 1, the function will return an error. 
- The function is not affected by the formatting of the cells. 

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The function returns this error when it fails to convert text to numbers. |
| #NUM! | The function returns this error when `alpha` is less than or equal to 0, or greater than or equal to 1; `standard_dev` is less than or equal to 0; or `size` is less than or equal to 1. |
| #N/A | The function returns this error when it is missing one or more of the required arguments. |

### Best practices

> - Make sure all input cells contain numeric values. Text or boolean values can lead to errors or unexpected results.
> - Be careful when choosing values for `alpha`, `standard_dev`, and `size`. Incorrect values can lead to errors or significantly alter the results of the function. 
> - Use appropriate decimal places in your input to ensure accuracy of the results.
> - Always check the validity of the data and the assumptions of normal distribution before using the `CONFIDENCE.NORM` function.

### Usage

A few examples using the CONFIDENCE.NORM function.

```
CONFIDENCE.NORM(0.05, 1.5, 30)  
CONFIDENCE.NORM(0.01, 2, 50)  
CONFIDENCE.NORM(0.1, 3, 20)  
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
        1.5,
        30,
        "=CONFIDENCE.NORM(A2,B2,C2)"
    ],
    [
        0.01,
        2.3,
        50,
        "=CONFIDENCE.NORM(A3,B3,C3)"
    ],
    [
        0.1,
        0.8,
        25,
        "=CONFIDENCE.NORM(A4,B4,C4)"
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
        1.5,
        30,
        "=CONFIDENCE.NORM(A2,B2,C2)"
    ],
    [
        0.01,
        2.3,
        50,
        "=CONFIDENCE.NORM(A3,B3,C3)"
    ],
    [
        0.1,
        0.8,
        25,
        "=CONFIDENCE.NORM(A4,B4,C4)"
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
        1.5,
        30,
        "=CONFIDENCE.NORM(A2,B2,C2)"
    ],
    [
        0.01,
        2.3,
        50,
        "=CONFIDENCE.NORM(A3,B3,C3)"
    ],
    [
        0.1,
        0.8,
        25,
        "=CONFIDENCE.NORM(A4,B4,C4)"
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
        1.5,
        30,
        "=CONFIDENCE.NORM(A2,B2,C2)"
    ],
    [
        0.01,
        2.3,
        50,
        "=CONFIDENCE.NORM(A3,B3,C3)"
    ],
    [
        0.1,
        0.8,
        25,
        "=CONFIDENCE.NORM(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

