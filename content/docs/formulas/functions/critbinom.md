title: CRITBINOM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CRITBINOM function in Jspreadsheet

# CRITBINOM function

`PRO`{.jtag}

The `CRITBINOM` function in Jspreadsheet Formulas Pro is used for calculating the minimum value at which the cumulative binomial distribution is equal to or lesser than a set criterion value. In simple terms, it helps in finding the lowest number of successful trials required to meet a certain probability in a series of independent experiments. This function is extremely useful in statistical analysis and probability distribution studies, helping users analyze and predict outcomes.

## Documentation

Calculates the smallest value for which the cumulative binomial distribution is less than or equal to a criterion value.

### Category

Compatibility

### Syntax

CRITBINOM(trials, probability_s, alpha)

| Parameter | Description |
| ----------- | ------------- |
| `trials` | The number of Bernoulli trials. |
| `probability_s` | The probability of success on each trial. |
| `alpha` | The significance level at which to evaluate the probability. |


### Behavior

The 'CRITBINOM' function in spreadsheets is used to calculate the smallest value for which the cumulative binomial distribution is less than or equal to a criterion value. This function requires three arguments: the number of trials, the probability of success on each trial, and the criterion value. 

- If empty cells are fed to the function, they will be treated as zeroes. 
- If text is used as a value in the function, it will return a `#VALUE!` error. 
- Booleans are considered as 1 (TRUE) and 0 (FALSE).
- If any of the arguments is non-numeric, the function returns a `#VALUE!` error.
- If the number of trials is less than zero, the function will return a `#NUM!` error.
- If the probability of success is less than zero or greater than one, the function returns a `#NUM!` error.
- If the criterion value is less than zero, the function returns a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned when one or more of the arguments are non-numeric or if text is used as an argument. |
| `#NUM!` | This error is returned when the number of trials, the probability of success, or the criterion value are less than zero, or if the probability of success is greater than one. |

### Best practices

> - Always ensure that the arguments provided are numeric. Non-numeric values will result in a `#VALUE!` error.
> - Validate that the number of trials and the criterion value are greater than zero. Negative values will result in a `#NUM!` error.
> - Check that the probability of success is within the range of 0 and 1. Values outside this range will return a `#NUM!` error.
> - Use cell references instead of direct number input for arguments in the 'CRITBINOM' function. This makes the function more flexible and allows the spreadsheet to update automatically when the referenced cell values change.

### Usage

A few examples using the CRITBINOM function.

```
CRITBINOM(10,0.2,0.05) returns 0  
CRITBINOM(20,0.5,0.01) returns 5  
CRITBINOM(50,0.3,0.1) returns 8  
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
        "Trials",
        "Probability",
        "Alpha",
        "Critical Value"
    ],
    [
        10,
        0.2,
        0.05,
        "=CRITBINOM(A2,B2,C2)"
    ],
    [
        20,
        0.5,
        0.01,
        "=CRITBINOM(A3,B3,C3)"
    ],
    [
        50,
        0.3,
        0.1,
        "=CRITBINOM(A4,B4,C4)"
    ],
    [
        100,
        0.15,
        0.25,
        "=CRITBINOM(A5,B5,C5)"
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
        "Trials",
        "Probability",
        "Alpha",
        "Critical Value"
    ],
    [
        10,
        0.2,
        0.05,
        "=CRITBINOM(A2,B2,C2)"
    ],
    [
        20,
        0.5,
        0.01,
        "=CRITBINOM(A3,B3,C3)"
    ],
    [
        50,
        0.3,
        0.1,
        "=CRITBINOM(A4,B4,C4)"
    ],
    [
        100,
        0.15,
        0.25,
        "=CRITBINOM(A5,B5,C5)"
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
        "Trials",
        "Probability",
        "Alpha",
        "Critical Value"
    ],
    [
        10,
        0.2,
        0.05,
        "=CRITBINOM(A2,B2,C2)"
    ],
    [
        20,
        0.5,
        0.01,
        "=CRITBINOM(A3,B3,C3)"
    ],
    [
        50,
        0.3,
        0.1,
        "=CRITBINOM(A4,B4,C4)"
    ],
    [
        100,
        0.15,
        0.25,
        "=CRITBINOM(A5,B5,C5)"
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
        "Trials",
        "Probability",
        "Alpha",
        "Critical Value"
    ],
    [
        10,
        0.2,
        0.05,
        "=CRITBINOM(A2,B2,C2)"
    ],
    [
        20,
        0.5,
        0.01,
        "=CRITBINOM(A3,B3,C3)"
    ],
    [
        50,
        0.3,
        0.1,
        "=CRITBINOM(A4,B4,C4)"
    ],
    [
        100,
        0.15,
        0.25,
        "=CRITBINOM(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

