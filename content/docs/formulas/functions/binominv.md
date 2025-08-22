title: BINOM.INV Function – Find Inverse Binomial Distribution in Jspreadsheet
keywords: Jspreadsheet, BINOM.INV, inverse binomial distribution, cumulative probability, success prediction, probability threshold, statistical functions, custom spreadsheet formulas, JavaScript spreadsheet, Excel-like formulas, binomial trials, quantile function, statistical modeling
description: How to use the BINOM.INV function in Jspreadsheet to calculate the smallest number of successes such that the cumulative binomial distribution is greater than or equal to a specified probability. This inverse distribution function is essential in probability modeling and statistical decision-making.

# BINOM.INV function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, `BINOM.INV` is a function that returns the smallest number of successes (x) such that the cumulative binomial distribution is greater than or equal to a given criterion probability (alpha).

This function is useful when you know the probability threshold and want to determine the minimum number of successes that will meet or exceed that probability.

## Documentation

Returns the smallest value for which the cumulative binomial distribution is less than or equal to a criterion value.

### Category

Statistical

### Syntax

BINOM.INV(trials, probability_s, alpha)

| Parameter | Description |
| ----------- | ------------- |
| `trials` | The number of independent trials. |
| `probability_s` | The probability of success on each trial. |
| `alpha` | The criterion value, a number between 0 and 1 inclusive. |


### Behavior

- Returns the smallest integer x such that the cumulative binomial distribution is ≥ alpha.
- trials must be a whole number ≥ 0.
- probability_s and alpha must be between 0 and 1 inclusive.
- Non-numeric inputs → #VALUE!
- Invalid numeric ranges → #NUM!
- Does not accept arrays or ranges — only scalar values or cell references.
- Boolean inputs are not recommended; may cause coercion issues or errors.

### Common Errors

| Error | Description |
| ----- | ----------- |
| `#NUM!` |	trials is negative or non-integer, probability_s or alpha are outside the [0,1] range. |
| `#VALUE!` | One or more arguments are non-numeric (e.g., text or empty cells). |

### Best practices

>- Ensure trials is a non-negative integer.
>- Use decimal values between 0 and 1 for probability_s and alpha.
>- Do not use boolean values — they may be treated inconsistently.
>- Wrap your formula with IFERROR() if working with uncertain inputs.
>- This function is ideal when you need to work backwards from probability to required outcomes.

### Usage

A few examples using the BINOM.INV function.

```
BINOM.INV(10, 0.4, 0.5)     → 4
// Returns 4: At least 4 successes are needed so that the cumulative binomial distribution ≥ 0.5

BINOM.INV(20, 0.2, 0.7)     → 5
// 5 or more successes have a cumulative probability ≥ 70%

BINOM.INV(30, 0.6, 0.9)     → 21
// 21 or more successes give you at least a 90% cumulative chance
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
        "Success Probability",
        "Alpha",
        "Critical Value"
    ],
    [
        10,
        0.4,
        0.5,
        "=BINOM.INV(A2,B2,C2)"
    ],
    [
        20,
        0.2,
        0.7,
        "=BINOM.INV(A3,B3,C3)"
    ],
    [
        30,
        0.6,
        0.9,
        "=BINOM.INV(A4,B4,C4)"
    ],
    [
        15,
        0.3,
        0.8,
        "=BINOM.INV(A5,B5,C5)"
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
        "Success Probability",
        "Alpha",
        "Critical Value"
    ],
    [
        10,
        0.4,
        0.5,
        "=BINOM.INV(A2,B2,C2)"
    ],
    [
        20,
        0.2,
        0.7,
        "=BINOM.INV(A3,B3,C3)"
    ],
    [
        30,
        0.6,
        0.9,
        "=BINOM.INV(A4,B4,C4)"
    ],
    [
        15,
        0.3,
        0.8,
        "=BINOM.INV(A5,B5,C5)"
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
        "Success Probability",
        "Alpha",
        "Critical Value"
    ],
    [
        10,
        0.4,
        0.5,
        "=BINOM.INV(A2,B2,C2)"
    ],
    [
        20,
        0.2,
        0.7,
        "=BINOM.INV(A3,B3,C3)"
    ],
    [
        30,
        0.6,
        0.9,
        "=BINOM.INV(A4,B4,C4)"
    ],
    [
        15,
        0.3,
        0.8,
        "=BINOM.INV(A5,B5,C5)"
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
        "Success Probability",
        "Alpha",
        "Critical Value"
    ],
    [
        10,
        0.4,
        0.5,
        "=BINOM.INV(A2,B2,C2)"
    ],
    [
        20,
        0.2,
        0.7,
        "=BINOM.INV(A3,B3,C3)"
    ],
    [
        30,
        0.6,
        0.9,
        "=BINOM.INV(A4,B4,C4)"
    ],
    [
        15,
        0.3,
        0.8,
        "=BINOM.INV(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

