title: BINOM.DIST Function – Calculate Binomial Distribution in Jspreadsheet
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the BINOM.DIST function in Jspreadsheet to calculate individual or cumulative binomial probabilities. Ideal for statistical modeling, this function determines the likelihood of a number of successes over a given number of trials.

# BINOM.DIST function

`PRO`{.jtag}

The `BINOM.DIST` function in Jspreadsheet Formulas Pro is a powerful tool that calculates the individual term binomial distribution probability. Essentially, it helps to determine the likelihood of a particular outcome in a series of events, given the total number of events, the number of successful events, and the probability of success on each event. This function can be incredibly useful in statistics and probability analysis, making it easier to predict outcomes and make data-driven decisions.

## Documentation

Returns the individual term binomial distribution probability.

### Category

Compatibility

### Syntax

BINOM.DIST(number_s, trials, probability_s, [cumulative])

| Parameter | Description |
| ----------- | ------------- |
| `number_s` | The number of successes in trials. |
| `trials` | The number of independent trials. |
| `probability_s` | The probability of success on each trial. |
| `cumulative` | Optional. A logical value that specifies whether to return the cumulative distribution or the individual term binomial distribution probability. If omitted, cumulative defaults to TRUE (cumulative distribution). |


### Behavior

The 'BINOM.DIST' function in a spreadsheet calculates the individual term binomial distribution probability. This function will take four arguments:

1. Number_s - the number of successful trials.
2. Trials - the number of independent trials.
3. Probability_s - the probability of success on each trial.
4. Cumulative - a logical value that determines the form of the function. 

The function behaves in the following ways:

- If any of the cells referenced are empty, the function will return an error.
- It does not accept text inputs. If the function encounters a text input, it will return an error.
- It does not handle boolean inputs. If a boolean value is input, the function will return an error.
- It is sensitive to non-integer values for the 'number_s' and 'trials' arguments. If non-integer values are entered, it will return an error.
- It handles error values as per the standard propagation rules for spreadsheet functions. If any of the inputs contain an error value, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If any of the arguments are non-numeric, 'BINOM.DIST' will return a #VALUE! error. |
| #NUM! | If 'number_s' < 0 or if 'number_s' > 'trials', 'BINOM.DIST' will return a #NUM! error. |
| #NUM! | If 'probability_s' < 0 or if 'probability_s' > 1, 'BINOM.DIST' will return a #NUM! error. |
| #NUM! | If 'trials' is not an integer, 'BINOM.DIST' will return a #NUM! error. |

### Best practices

> - Ensure all input values are numeric. The 'BINOM.DIST' function does not handle text or boolean values.
> - Make sure 'number_s' and 'trials' are integers and 'probability_s' is a decimal between 0 and 1, inclusive. The function will not calculate properly with non-integer or out-of-bounds values.
> - Be aware that 'BINOM.DIST' calculates the probability of exactly 'number_s' successes in 'trials' trials, not the probability of 'number_s' or fewer successes. To calculate the latter, use the 'BINOM.DIST.RANGE' function instead.
> - Always double-check your data ranges to avoid mistakingly including incorrect cells in your calculation. This could result in a #VALUE! or #NUM! error.

### Usage

A few examples using the BINOM.DIST function.

```
BINOM.DIST(3, 5, 0.5, FALSE)  → 0.3125   // Exact probability of 3 successes
BINOM.DIST(3, 5, 0.5, TRUE)   → 0.8125   // Probability of 3 or fewer successes
BINOM.DIST(0, 10, 0.2, TRUE)  → 0.1074   // Low-probability event
BINOM.DIST(5, 5, 1, FALSE)    → 1        // Certainty (100% success rate)
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
        "Number of Successes",
        "Trials",
        "Probability",
        "Binomial Probability"
    ],
    [
        3,
        10,
        0.3,
        "=BINOM.DIST(A2,B2,C2,FALSE)"
    ],
    [
        5,
        12,
        0.4,
        "=BINOM.DIST(A3,B3,C3,FALSE)"
    ],
    [
        2,
        8,
        0.25,
        "=BINOM.DIST(A4,B4,C4,FALSE)"
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
        "Number of Successes",
        "Trials",
        "Probability",
        "Binomial Probability"
    ],
    [
        3,
        10,
        0.3,
        "=BINOM.DIST(A2,B2,C2,FALSE)"
    ],
    [
        5,
        12,
        0.4,
        "=BINOM.DIST(A3,B3,C3,FALSE)"
    ],
    [
        2,
        8,
        0.25,
        "=BINOM.DIST(A4,B4,C4,FALSE)"
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
        "Number of Successes",
        "Trials",
        "Probability",
        "Binomial Probability"
    ],
    [
        3,
        10,
        0.3,
        "=BINOM.DIST(A2,B2,C2,FALSE)"
    ],
    [
        5,
        12,
        0.4,
        "=BINOM.DIST(A3,B3,C3,FALSE)"
    ],
    [
        2,
        8,
        0.25,
        "=BINOM.DIST(A4,B4,C4,FALSE)"
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
        "Number of Successes",
        "Trials",
        "Probability",
        "Binomial Probability"
    ],
    [
        3,
        10,
        0.3,
        "=BINOM.DIST(A2,B2,C2,FALSE)"
    ],
    [
        5,
        12,
        0.4,
        "=BINOM.DIST(A3,B3,C3,FALSE)"
    ],
    [
        2,
        8,
        0.25,
        "=BINOM.DIST(A4,B4,C4,FALSE)"
    ]
]
            }]
        });
    }
}
```

