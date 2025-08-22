title: LOGINV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LOGINV function in Jspreadsheet

# LOGINV function

`PRO`{.jtag}

The `LOGINV` function in Jspreadsheet Formulas Pro is a tool that gives you the inverse of the lognormal cumulative distribution function, using a specific mean and standard deviation. In simpler terms, this function helps you predict the possibility of a certain outcome based on a set of known data. This is useful when you're dealing with issues of probability, where it's necessary to analyze the likelihood of various outcomes. It's especially handy in financial analysis, quality control, and risk management scenarios.

## Documentation

Returns the inverse of the lognormal cumulative distribution function with a specified mean and standard deviation.

### Category

Compatibility

### Syntax

LOGINV(probability, mean, standard_dev)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | The probability for which you want to find the corresponding inverse of the lognormal cumulative distribution function. |
| `mean` | The mean of ln(x), where x is normally distributed. Must be positive. |
| `standard_dev` | The standard deviation of ln(x), where x is normally distributed. Must be positive. |


### Behavior

The `LOGINV` function in spreadsheets is used to return the inverse of the lognormal distribution. It requires three parameters: probability, mean, and standard deviation. The function expects numerical values for all these parameters.

- If empty cells are used as arguments, they are considered as zeros.
- Texts, booleans, or non-numeric values used as arguments will cause the function to return a `#VALUE!` error.
- If any of the arguments are negative, the function will return a `#NUM!` error.
- The function handles errors propagated from other cells. If any of the input cells contain an error, the `LOGINV` function will also return the same error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when any of the arguments to the function are non-numeric. This includes boolean values, text, or any other non-numeric data type. |
| #NUM! | This error is returned when any of the arguments are negative, as the lognormal distribution is undefined for negative values. |
| #N/A | This error is returned when the given probability is less than 0 or greater than 1. |

### Best practices

> - Always ensure that the arguments provided to the `LOGINV` function are numeric. Non-numeric values, including text and boolean values, will cause the function to return a `#VALUE!` error.
> - Be careful with the values you provide for the probability argument. It must be strictly between 0 and 1. Providing a probability value outside this range will result in a `#N/A` error.
> - Avoid using cell references that might contain negative values as the `LOGINV` function does not work with negative values, and it will return a `#NUM!` error.
> - Use error-checking functions like `IFERROR` or `ISNUMBER` to handle potential errors, especially when dealing with data that might contain non-numeric values.

### Usage

A few examples using the LOGINV function.

```
LOGINV(0.5, 1, 1)  
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
        "Standard Dev",
        "LOGINV Result"
    ],
    [
        0.25,
        2,
        0.5,
        "=LOGINV(A2,B2,C2)"
    ],
    [
        0.5,
        1.5,
        0.8,
        "=LOGINV(A3,B3,C3)"
    ],
    [
        0.75,
        3,
        1.2,
        "=LOGINV(A4,B4,C4)"
    ],
    [
        0.9,
        2.5,
        0.6,
        "=LOGINV(A5,B5,C5)"
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
        "Standard Dev",
        "LOGINV Result"
    ],
    [
        0.25,
        2,
        0.5,
        "=LOGINV(A2,B2,C2)"
    ],
    [
        0.5,
        1.5,
        0.8,
        "=LOGINV(A3,B3,C3)"
    ],
    [
        0.75,
        3,
        1.2,
        "=LOGINV(A4,B4,C4)"
    ],
    [
        0.9,
        2.5,
        0.6,
        "=LOGINV(A5,B5,C5)"
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
        "Standard Dev",
        "LOGINV Result"
    ],
    [
        0.25,
        2,
        0.5,
        "=LOGINV(A2,B2,C2)"
    ],
    [
        0.5,
        1.5,
        0.8,
        "=LOGINV(A3,B3,C3)"
    ],
    [
        0.75,
        3,
        1.2,
        "=LOGINV(A4,B4,C4)"
    ],
    [
        0.9,
        2.5,
        0.6,
        "=LOGINV(A5,B5,C5)"
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
        "Standard Dev",
        "LOGINV Result"
    ],
    [
        0.25,
        2,
        0.5,
        "=LOGINV(A2,B2,C2)"
    ],
    [
        0.5,
        1.5,
        0.8,
        "=LOGINV(A3,B3,C3)"
    ],
    [
        0.75,
        3,
        1.2,
        "=LOGINV(A4,B4,C4)"
    ],
    [
        0.9,
        2.5,
        0.6,
        "=LOGINV(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

