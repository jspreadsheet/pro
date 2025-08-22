title: BINOM.DIST.RANGE Function – Calculate Probability Over a Range in Jspreadsheet
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function, , BINOM.DIST.RANGE, binomial distribution, probability functions, spreadsheet statistics, statistical formulas, JavaScript spreadsheet, Excel-like formulas, custom spreadsheet formulas, success probability, trials analysis, data modeling, statistical analysis, range probability, JavaScript formulas, spreadsheet functions, binomial range, plugin formulas
description: How to use the BINOM.DIST.RANGE function in Jspreadsheet to calculate the probability of achieving a specific number or range of successes in a series of independent trials. This function extends the capabilities of BINOM.DIST by allowing you to evaluate ranges rather than single success values.

`PRO`{.jtag}

The `BINOM.DIST.RANGE`  function in Jspreadsheet Formulas Pro calculates the probability of achieving a specific number of successes, or a range of successes, in a given number of independent trials. This function is based on the binomial distribution model, and is used in situations where each trial has only two outcomes (success or failure).

For example, you can use this function to determine the probability of getting between 3 and 5 successful email responses out of 10 sent emails, given a success rate of 40%.

## Documentation

Calculates the probability of achieving a certain number of successes within a particular range of trials using the binomial distribution.

### Category

Statistical

### Syntax

BINOM.DIST.RANGE(trials, probability_s, number_s, [number_s2])

| Parameter | Description |
| ----------- | ------------- |
| `trials` | The number of independent trials. |
| `probability_s` | The probability of success on each trial. |
| `number_s` | The smallest number of successes for which you want to calculate the probability. |
| `number_s2` | Optional. The largest number of successes for which you want to calculate the probability. If omitted, number_s2 defaults to number_s. |


### Behavior

The `BINOM.DIST.RANGE` function in spreadsheets calculates the probability of a range of outcomes in a binomial distribution. Here's how it handles different types of values:

- Calculates the probability of getting exactly number_s successes if number_s2 is omitted.
- If both number_s and number_s2 are specified, it returns the sum of probabilities between those two success counts (inclusive).
- All arguments must be numeric.
- Non-integer values for trials, number_s, or number_s2 are truncated.
- Errors in any argument are propagated.
- Empty required fields will cause errors.

### Common Errors

| Error | Description |
| ----- | ----------- |
| `#VALUE!` | The function's arguments are non-numeric. |
| `#NUM!` | The function's arguments are numeric, but not within the valid range. For example, number_s (the number of successes) or trials (the number of trials) is less than zero, or number_s is greater than trials. |
| `#DIV/0!` | Prob_s (the probability of success on each trial) is zero, resulting in a division by zero error. |

### Best practices

> - Ensure that all arguments are numeric and within the valid range. Otherwise, the function will return an error.
> - Be aware that the function treats empty cells as zeros, which might not always be the desired behavior. If necessary, add checks to ensure that all referenced cells contain valid data.
> - Keep in mind that the function calculates the cumulative probability by default. If you want the probability of a specific number of successes, use the `BINOM.DIST` function instead.
> - Be careful when using decimal values for number_s or trials, as the function will truncate them to integers. If you need more precision, consider using a different statistical function.

### Usage

A few examples using the BINOM.DIST.RANGE function.

```
BINOM.DIST.RANGE(10, 0.4, 4)           → 0.2508   // Exactly 4 successes
BINOM.DIST.RANGE(10, 0.4, 3, 5)        → 0.6664   // Probability of 3 to 5 successes
BINOM.DIST.RANGE(5, 0.2, 0)            → 0.3277   // Zero successes
BINOM.DIST.RANGE(5, 0.5, 0, 5)         → 1.0      // All possible outcomes (sum to 100%)```

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
        "Min Successes",
        "Max Successes",
        "Probability"
    ],
    [
        20,
        0.3,
        4,
        8,
        "=BINOM.DIST.RANGE(A2,B2,C2,D2)"
    ],
    [
        15,
        0.6,
        7,
        "",
        "=BINOM.DIST.RANGE(A3,B3,C3)"
    ],
    [
        25,
        0.25,
        5,
        10,
        "=BINOM.DIST.RANGE(A4,B4,C4,D4)"
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
        "Min Successes",
        "Max Successes",
        "Probability"
    ],
    [
        20,
        0.3,
        4,
        8,
        "=BINOM.DIST.RANGE(A2,B2,C2,D2)"
    ],
    [
        15,
        0.6,
        7,
        "",
        "=BINOM.DIST.RANGE(A3,B3,C3)"
    ],
    [
        25,
        0.25,
        5,
        10,
        "=BINOM.DIST.RANGE(A4,B4,C4,D4)"
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
        "Min Successes",
        "Max Successes",
        "Probability"
    ],
    [
        20,
        0.3,
        4,
        8,
        "=BINOM.DIST.RANGE(A2,B2,C2,D2)"
    ],
    [
        15,
        0.6,
        7,
        "",
        "=BINOM.DIST.RANGE(A3,B3,C3)"
    ],
    [
        25,
        0.25,
        5,
        10,
        "=BINOM.DIST.RANGE(A4,B4,C4,D4)"
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
        "Min Successes",
        "Max Successes",
        "Probability"
    ],
    [
        20,
        0.3,
        4,
        8,
        "=BINOM.DIST.RANGE(A2,B2,C2,D2)"
    ],
    [
        15,
        0.6,
        7,
        "",
        "=BINOM.DIST.RANGE(A3,B3,C3)"
    ],
    [
        25,
        0.25,
        5,
        10,
        "=BINOM.DIST.RANGE(A4,B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

