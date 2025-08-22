title: LOGNORM.INV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LOGNORM.INV function in Jspreadsheet

# LOGNORM.INV function

`PRO`{.jtag}

The `LOGNORM.INV` function in Jspreadsheet Formulas Pro is a statistical tool that calculates and returns the inverse of the cumulative log-normal distribution, based on given parameters of probability, mean, and standard deviation. Simply put, it helps you find out a value X, for which the log-normal distribution is less than or equal to a certain probability. This function is particularly useful in scenarios where you have a skewed distribution of data, rather than a normal or evenly distributed set.

## Documentation

Returns the inverse of the cumulative log-normal distribution for a specified probability, mean, and standard deviation.

### Category

Statistical

### Syntax

LOGNORM.INV(probability, mean, standard_dev)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | The probability for which you want to find the corresponding inverse of the cumulative log-normal distribution. |
| `mean` | The mean of ln(x), where x is normally distributed. Must be positive. |
| `standard_dev` | The standard deviation of ln(x), where x is normally distributed. Must be positive. |


### Behavior

The `LOGNORM.INV` function in spreadsheets returns the inverse of the lognormal cumulative distribution function (CDF) for a specified mean and standard deviation. If the CDF is `PROB`, `LOGNORM.INV(PROB, mean, standard_dev)` is the value `x` such that `LOGNORM.DIST(x, mean, standard_dev, TRUE) = PROB`.

- When the cell references for mean or standard deviation are empty, the function will return a `#NUM!` error.
- It will also return a `#NUM!` error if the probability is not between 0 (exclusive) and 1 (inclusive), or if standard deviation is less than or equal to 0.
- If the input cells contain text or booleans, the function will return a `#VALUE!` error.
- If the input cells contain error values, `LOGNORM.INV` will propagate that error.

### Common Errors

| Error | Description |
| --- | --- |
| `#NUM!` | Occurs if the provided probability is not between 0 (exclusive) and 1 (inclusive), or if standard deviation is less than or equal to 0. Also occurs if either mean or standard deviation cell references are empty. |
| `#VALUE!` | Occurs if the given arguments are not recognized as numeric values, such as text or boolean inputs. |

### Best practices
> - Always ensure that your probability is a number between 0 and 1 (exclusive of 0), as any value outside this range will result in a `#NUM!` error.
> - Make sure that your standard deviation is a positive number. A zero or negative standard deviation will also result in a `#NUM!` error.
> - Be careful with your input data types. Inputs that are text or boolean will cause a `#VALUE!` error.
> - It's always a good idea to check for errors in your referenced cells before using `LOGNORM.INV`, as any error in a referenced cell will propagate through to your function.

### Usage

A few examples using the LOGNORM.INV function.

```
LOGNORM.INV(0.5, 0, 1)  
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
        "Probability",
        "Mean",
        "Std Dev",
        "Log-Normal Inverse"
    ],
    [
        0.25,
        0,
        1,
        "=LOGNORM.INV(A2,B2,C2)"
    ],
    [
        0.5,
        0.5,
        0.8,
        "=LOGNORM.INV(A3,B3,C3)"
    ],
    [
        0.75,
        1,
        1.2,
        "=LOGNORM.INV(A4,B4,C4)"
    ],
    [
        0.9,
        0.2,
        0.6,
        "=LOGNORM.INV(A5,B5,C5)"
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
        "Probability",
        "Mean",
        "Std Dev",
        "Log-Normal Inverse"
    ],
    [
        0.25,
        0,
        1,
        "=LOGNORM.INV(A2,B2,C2)"
    ],
    [
        0.5,
        0.5,
        0.8,
        "=LOGNORM.INV(A3,B3,C3)"
    ],
    [
        0.75,
        1,
        1.2,
        "=LOGNORM.INV(A4,B4,C4)"
    ],
    [
        0.9,
        0.2,
        0.6,
        "=LOGNORM.INV(A5,B5,C5)"
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
        "Probability",
        "Mean",
        "Std Dev",
        "Log-Normal Inverse"
    ],
    [
        0.25,
        0,
        1,
        "=LOGNORM.INV(A2,B2,C2)"
    ],
    [
        0.5,
        0.5,
        0.8,
        "=LOGNORM.INV(A3,B3,C3)"
    ],
    [
        0.75,
        1,
        1.2,
        "=LOGNORM.INV(A4,B4,C4)"
    ],
    [
        0.9,
        0.2,
        0.6,
        "=LOGNORM.INV(A5,B5,C5)"
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
        "Probability",
        "Mean",
        "Std Dev",
        "Log-Normal Inverse"
    ],
    [
        0.25,
        0,
        1,
        "=LOGNORM.INV(A2,B2,C2)"
    ],
    [
        0.5,
        0.5,
        0.8,
        "=LOGNORM.INV(A3,B3,C3)"
    ],
    [
        0.75,
        1,
        1.2,
        "=LOGNORM.INV(A4,B4,C4)"
    ],
    [
        0.9,
        0.2,
        0.6,
        "=LOGNORM.INV(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

