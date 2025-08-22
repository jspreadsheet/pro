title: PHI function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PHI function in Jspreadsheet

# PHI function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PHI` function in Jspreadsheet Formulas Pro is used to calculate the standard normal cumulative distribution function (CDF) for a given value. In simpler terms, it's a tool used in statistics to determine the probability that a certain event will occur. You provide a specific value, and the `PHI` function calculates the likelihood of an event happening with that value or lower. This function is incredibly useful in a variety of fields, including data analysis, financial forecasting, and risk management.

## Documentation

Returns the value of the standard normal cumulative distribution function (CDF) for a specified value.

### Category

Statistical

### Syntax

PHI(z)

| Parameter | Description |
| ----------- | ------------- |
| `z` | The value for which you want to calculate the standard normal CDF. The standard normal distribution has a mean of zero and a standard deviation of one. |


### Behavior

The `PHI` spreadsheet function returns the value of the standard normal cumulative distribution function at a given value. The standard normal cumulative distribution function has a mean of 0 and a standard deviation of 1. Here is how it behaves under different scenarios:

- Empty cells: If the function is applied to an empty cell, the function will return an error because it requires a numeric input.
- Text: The function cannot be used with text. If text is used as an argument, the function will return an error.
- Booleans: Booleans are interpreted as `0` for `FALSE` and `1` for `TRUE`.
- Errors: If an error is passed as an argument, the function will return that error.
- Non-numeric values: The function will return an error because it requires a numeric input.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | Occurs when the function is used with a non-numeric argument. |
| #NUM! | Occurs when the function is used with a number outside the permissible range. |
| #DIV/0! | Occurs when the function is used with zero as an argument, as the normal distribution function is not defined for zero. |
| #N/A | Occurs when the function is used with no arguments. |

### Best practices

> - Always ensure that the input to the `PHI` function is a number. Non-numeric values will result in an error.
> - Understand that the `PHI` function assumes a standard normal distribution with a mean of 0 and a standard deviation of 1. If your data does not fit this distribution, consider using the `NORM.DIST` function with specified mean and standard deviation.
> - Use the `PHI` function to create a probability plot of your data to visualize how closely it follows a standard normal distribution.
> - Remember that Boolean values will be interpreted as `0` for `FALSE` and `1` for `TRUE`. This may lead to unintended results if Boolean values are used as arguments.

### Usage

A few examples using the PHI function.

```
PHI(1.96)  
PHI(-2.5)  
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
        "Z-Score",
        "Probability",
        "Description"
    ],
    [
        0,
        "=PHI(A2)",
        "Mean (50th percentile)"
    ],
    [
        1.96,
        "=PHI(A3)",
        "95th percentile"
    ],
    [
        -1.96,
        "=PHI(A4)",
        "5th percentile"
    ],
    [
        2.58,
        "=PHI(A5)",
        "99.5th percentile"
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
        "Z-Score",
        "Probability",
        "Description"
    ],
    [
        0,
        "=PHI(A2)",
        "Mean (50th percentile)"
    ],
    [
        1.96,
        "=PHI(A3)",
        "95th percentile"
    ],
    [
        -1.96,
        "=PHI(A4)",
        "5th percentile"
    ],
    [
        2.58,
        "=PHI(A5)",
        "99.5th percentile"
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
        "Z-Score",
        "Probability",
        "Description"
    ],
    [
        0,
        "=PHI(A2)",
        "Mean (50th percentile)"
    ],
    [
        1.96,
        "=PHI(A3)",
        "95th percentile"
    ],
    [
        -1.96,
        "=PHI(A4)",
        "5th percentile"
    ],
    [
        2.58,
        "=PHI(A5)",
        "99.5th percentile"
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
        "Z-Score",
        "Probability",
        "Description"
    ],
    [
        0,
        "=PHI(A2)",
        "Mean (50th percentile)"
    ],
    [
        1.96,
        "=PHI(A3)",
        "95th percentile"
    ],
    [
        -1.96,
        "=PHI(A4)",
        "5th percentile"
    ],
    [
        2.58,
        "=PHI(A5)",
        "99.5th percentile"
    ]
]
            }]
        });
    }
}
```

