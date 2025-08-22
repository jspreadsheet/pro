title: LOGNORM.DIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LOGNORM.DIST function in Jspreadsheet

# LOGNORM.DIST function

`PRO`{.jtag}

The `LOGNORM.DIST` function in Jspreadsheet Formulas Pro is a tool that gives you the cumulative log-normal distribution given a specific value, mean, and standard deviation. In simpler terms, this function allows you to understand the likelihood of a certain outcome within a log-normally distributed set of data. You just need to input the value you're interested in, along with the average and standard deviation of your dataset. It's a useful tool for probability and statistical analysis.

## Documentation

Returns the cumulative log-normal distribution for a specified value, mean, and standard deviation.

### Category

Statistical

### Syntax

LOGNORM.DIST(x, mean, standard_dev, [cumulative])

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value for which you want to find the log-normal distribution. |
| `mean` | The mean of ln(x), where x is normally distributed. Must be positive. |
| `standard_dev` | The standard deviation of ln(x), where x is normally distributed. Must be positive. |
| `cumulative` | Optional. A logical value that specifies the type of distribution to return. If TRUE, returns the cumulative distribution function; if FALSE or omitted, returns the probability mass function. |


### Behavior

The `LOGNORM.DIST` function in spreadsheets calculates the lognormal distribution of a set of data. Here's how it handles various input types:

- Empty cells: If any of the arguments (x, mean, standard_dev, cumulative) are empty cells, the function will return an error.
- Text: If any of the arguments are text that cannot be converted to a number, the function will return an error.
- Booleans: If any of the arguments are boolean values, they will be coerced to numbers (TRUE to 1 and FALSE to 0).
- Errors: If any of the arguments are cell references that contain error values, the function will propagate that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if any of the input arguments cannot be coerced to numeric values. |
| #NUM! | This error occurs if the 'standard_dev' argument is less than or equal to zero, or if 'mean' is less than zero. |
| #N/A | This error occurs if the input range of values is inappropriate for the lognormal distribution. |

### Best practices

> - Always ensure that the 'standard_dev' argument is greater than zero and 'mean' is not less than zero. The lognormal distribution is undefined for negative values or zero.
> - Be careful with cell references. Make sure they point to cells containing numeric values, not text or error values.
> - Use the 'cumulative' argument wisely. If TRUE, it returns the cumulative distribution function; if FALSE, it returns the probability density function.
> - This function can be used on a data set with a skewed distribution, where the values are greater than zero and there are relatively frequent large values.

### Usage

A few examples using the LOGNORM.DIST function.

```
LOGNORM.DIST(4, 3.5, 1.2) returns approximately 0.0176176  
LOGNORM.DIST(4, 3.5, 1.2) returns approximately 0.0390836  
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
        "Value (x)",
        "Mean",
        "Std Dev",
        "Cumulative Probability"
    ],
    [
        4,
        3.5,
        1.2,
        "=LOGNORM.DIST(A2,B2,C2,TRUE)"
    ],
    [
        2.5,
        3.0,
        1.5,
        "=LOGNORM.DIST(A3,B3,C3,TRUE)"
    ],
    [
        6,
        4.2,
        0.8,
        "=LOGNORM.DIST(A4,B4,C4,TRUE)"
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
        "Value (x)",
        "Mean",
        "Std Dev",
        "Cumulative Probability"
    ],
    [
        4,
        3.5,
        1.2,
        "=LOGNORM.DIST(A2,B2,C2,TRUE)"
    ],
    [
        2.5,
        3.0,
        1.5,
        "=LOGNORM.DIST(A3,B3,C3,TRUE)"
    ],
    [
        6,
        4.2,
        0.8,
        "=LOGNORM.DIST(A4,B4,C4,TRUE)"
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
        "Value (x)",
        "Mean",
        "Std Dev",
        "Cumulative Probability"
    ],
    [
        4,
        3.5,
        1.2,
        "=LOGNORM.DIST(A2,B2,C2,TRUE)"
    ],
    [
        2.5,
        3.0,
        1.5,
        "=LOGNORM.DIST(A3,B3,C3,TRUE)"
    ],
    [
        6,
        4.2,
        0.8,
        "=LOGNORM.DIST(A4,B4,C4,TRUE)"
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
        "Value (x)",
        "Mean",
        "Std Dev",
        "Cumulative Probability"
    ],
    [
        4,
        3.5,
        1.2,
        "=LOGNORM.DIST(A2,B2,C2,TRUE)"
    ],
    [
        2.5,
        3.0,
        1.5,
        "=LOGNORM.DIST(A3,B3,C3,TRUE)"
    ],
    [
        6,
        4.2,
        0.8,
        "=LOGNORM.DIST(A4,B4,C4,TRUE)"
    ]
]
            }]
        });
    }
}
```

