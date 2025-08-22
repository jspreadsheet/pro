title: NORMDIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NORMDIST function in Jspreadsheet

# NORMDIST function

`PRO`{.jtag}

The `NORMDIST` function in Jspreadsheet Formulas Pro is used to calculate the normal distribution, given a specific mean and standard deviation. In simpler terms, it helps to understand how data is spread out around the average in a set of data. It generates a probability that a random variable will fall within a certain range, based on the mean (average) and standard deviation (spread) you provide. This function is particularly useful in statistical analysis and forecasting.

## Documentation

Returns the normal distribution for the specified mean and standard deviation.

### Category

Statistical

### Syntax

NORMDIST(x, mean, standard_dev, cumulative)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which to evaluate the function. |
| `mean` | The arithmetic mean of the distribution. |
| `standard_dev` | The standard deviation of the distribution. |
| `cumulative` | Logical value that specifies the form of the function. If cumulative is true, NORMDIST returns the cumulative distribution function; if false, it returns the probability density function. If omitted, cumulative defaults to true. |


### Behavior

The `NORMDIST` function in spreadsheet programs calculates the normal probability density for a given set of parameters. It requires four arguments: the value for which you want the distribution, the arithmetic mean of the distribution, the standard deviation, and a logical value to determine the type of distribution.

- If any of the cells referenced in the function are empty, the function will return an error.
- If non-numeric values (text, booleans) are provided as arguments, the function will return an error.
- If the standard deviation argument is less than or equal to 0, the function will return an error.
- If the logical value for the cumulative argument is neither 0 (for the probability density function) nor 1 (for the cumulative distribution function), the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the given arguments are non-numeric, such as text or boolean values. |
| #NUM! | This error occurs when the standard deviation is less than or equal to 0, or if the logical value for cumulative function is not 0 or 1. |
| #DIV/0! | This error occurs when the standard deviation is 0, which would result in division by zero. |
| #N/A | This error occurs when any of the required arguments are missing. |

### Best practices

> - Always ensure the data used for the mean and standard deviation arguments are numeric.
> - Be careful to enter a logical value for the cumulative argument as either 0 or 1; 0 for the probability density function and 1 for the cumulative distribution function.
> - The `NORMDIST` function is useful for statistical analysis; ensure your data sample is large enough for a robust result.
> - Handle errors effectively by using error handling functions alongside `NORMDIST` to avoid disruption in data analysis.

### Usage

A few examples using the NORMDIST function.

```
NORMDIST(1.96,0,1,FALSE)  
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
        "x",
        "Mean",
        "Standard Dev",
        "Probability Density",
        "Cumulative Probability"
    ],
    [
        1.5,
        2,
        0.5,
        "=NORMDIST(A2,B2,C2,FALSE)",
        "=NORMDIST(A2,B2,C2,TRUE)"
    ],
    [
        2.0,
        2,
        0.5,
        "=NORMDIST(A3,B3,C3,FALSE)",
        "=NORMDIST(A3,B3,C3,TRUE)"
    ],
    [
        2.5,
        2,
        0.5,
        "=NORMDIST(A4,B4,C4,FALSE)",
        "=NORMDIST(A4,B4,C4,TRUE)"
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
        "x",
        "Mean",
        "Standard Dev",
        "Probability Density",
        "Cumulative Probability"
    ],
    [
        1.5,
        2,
        0.5,
        "=NORMDIST(A2,B2,C2,FALSE)",
        "=NORMDIST(A2,B2,C2,TRUE)"
    ],
    [
        2.0,
        2,
        0.5,
        "=NORMDIST(A3,B3,C3,FALSE)",
        "=NORMDIST(A3,B3,C3,TRUE)"
    ],
    [
        2.5,
        2,
        0.5,
        "=NORMDIST(A4,B4,C4,FALSE)",
        "=NORMDIST(A4,B4,C4,TRUE)"
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
        "x",
        "Mean",
        "Standard Dev",
        "Probability Density",
        "Cumulative Probability"
    ],
    [
        1.5,
        2,
        0.5,
        "=NORMDIST(A2,B2,C2,FALSE)",
        "=NORMDIST(A2,B2,C2,TRUE)"
    ],
    [
        2.0,
        2,
        0.5,
        "=NORMDIST(A3,B3,C3,FALSE)",
        "=NORMDIST(A3,B3,C3,TRUE)"
    ],
    [
        2.5,
        2,
        0.5,
        "=NORMDIST(A4,B4,C4,FALSE)",
        "=NORMDIST(A4,B4,C4,TRUE)"
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
        "x",
        "Mean",
        "Standard Dev",
        "Probability Density",
        "Cumulative Probability"
    ],
    [
        1.5,
        2,
        0.5,
        "=NORMDIST(A2,B2,C2,FALSE)",
        "=NORMDIST(A2,B2,C2,TRUE)"
    ],
    [
        2.0,
        2,
        0.5,
        "=NORMDIST(A3,B3,C3,FALSE)",
        "=NORMDIST(A3,B3,C3,TRUE)"
    ],
    [
        2.5,
        2,
        0.5,
        "=NORMDIST(A4,B4,C4,FALSE)",
        "=NORMDIST(A4,B4,C4,TRUE)"
    ]
]
            }]
        });
    }
}
```

