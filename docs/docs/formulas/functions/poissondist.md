title: POISSON.DIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the POISSON.DIST function in Jspreadsheet

# POISSON.DIST function

`PRO`{.jtag}

The `POISSON.DIST` is a function in Jspreadsheet Formulas Pro that provides the Poisson distribution, a statistical tool that predicts the likelihood of an event happening within a certain timeframe. It's particularly useful when you want to anticipate the frequency of certain events, such as the number of emails you might receive in a day. This function requires you to input the expected occurrence, the actual occurrence, and whether you want the cumulative distribution. It then calculates and provides the probability or distribution of these occurrences.

## Documentation

Returns the Poisson distribution, which is a statistical measure that shows how many times an event is likely to occur within a specified period of time.

### Category

Statistical

### Syntax

POISSON.DIST(x, mean, cumulative)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number of events. |
| `mean` | The expected numeric value, or average, of the distribution. |
| `cumulative` | A logical value that determines the form of the function. If cumulative is TRUE, POISSON.DIST returns the cumulative distribution function (CDF) value; if FALSE, it returns the probability mass function (PMF) value. |


### Behavior

The `POISSON.DIST` function in spreadsheets calculates the Poisson distribution, which can predict the probability of a given number of events happening in a fixed interval of time or space. It is often used in various fields including mathematics, physics, finance, and statistics. Below are the expected behaviors:

- The function takes three arguments: `x` (the number of events), `mean` (the expected numeric value), and `cumulative` (a logical value that determines the form of the function).

- If the `x` or `mean` argument is non-numeric, the function returns a `#VALUE!` error.

- If the `x` argument is less than 0 or if it's not an integer, the function returns a `#NUM!` error.

- If the `mean` argument is less than or equal to 0, the function returns a `#NUM!` error.

- The `cumulative` argument must be either TRUE or FALSE. If it's TRUE, the function calculates the cumulative distribution function; if it's FALSE, it calculates the probability mass function.

- The function ignores empty cells, unless they are part of the arguments.

- If any of the arguments include text or booleans, the function will return a `#VALUE!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | If either `x` or `mean` is non-numeric, the function will return this error. This also occurs when the arguments include text or booleans. |
| `#NUM!` | This error is returned if the `x` value is less than 0 or not an integer, or if the `mean` value is less than or equal to 0.|

### Best practices

> - Always ensure that your `x` and `mean` values are numeric to avoid `#VALUE!` errors.
> - The `x` value should be an integer and greater than or equal to 0, and the `mean` value should be greater than 0 to avoid `#NUM!` errors.
> - Be clear about whether you want to calculate the cumulative distribution function or the probability mass function, and set the `cumulative` argument to TRUE or FALSE accordingly.
> - As `POISSON.DIST` function deals with probability, it's always a good idea to verify the input values and the results to avoid incorrect interpretations.

### Usage

A few examples using the POISSON.DIST function.

```
POISSON.DIST(2,3,FALSE) returns 0.224, which is the probability of observing 2 events in a Poisson distribution with an expected value of 3  
POISSON.DIST(2,3,TRUE) returns 0.423, which is the cumulative probability of observing 0, 1, or 2 events in a Poisson distribution with an expected value of 3  
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
        "Events (x)",
        "Mean Rate",
        "Probability (PMF)",
        "Cumulative Probability"
    ],
    [
        0,
        2.5,
        "=POISSON.DIST(A2,B2,FALSE)",
        "=POISSON.DIST(A2,B2,TRUE)"
    ],
    [
        1,
        2.5,
        "=POISSON.DIST(A3,B3,FALSE)",
        "=POISSON.DIST(A3,B3,TRUE)"
    ],
    [
        2,
        2.5,
        "=POISSON.DIST(A4,B4,FALSE)",
        "=POISSON.DIST(A4,B4,TRUE)"
    ],
    [
        3,
        2.5,
        "=POISSON.DIST(A5,B5,FALSE)",
        "=POISSON.DIST(A5,B5,TRUE)"
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
        "Events (x)",
        "Mean Rate",
        "Probability (PMF)",
        "Cumulative Probability"
    ],
    [
        0,
        2.5,
        "=POISSON.DIST(A2,B2,FALSE)",
        "=POISSON.DIST(A2,B2,TRUE)"
    ],
    [
        1,
        2.5,
        "=POISSON.DIST(A3,B3,FALSE)",
        "=POISSON.DIST(A3,B3,TRUE)"
    ],
    [
        2,
        2.5,
        "=POISSON.DIST(A4,B4,FALSE)",
        "=POISSON.DIST(A4,B4,TRUE)"
    ],
    [
        3,
        2.5,
        "=POISSON.DIST(A5,B5,FALSE)",
        "=POISSON.DIST(A5,B5,TRUE)"
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
        "Events (x)",
        "Mean Rate",
        "Probability (PMF)",
        "Cumulative Probability"
    ],
    [
        0,
        2.5,
        "=POISSON.DIST(A2,B2,FALSE)",
        "=POISSON.DIST(A2,B2,TRUE)"
    ],
    [
        1,
        2.5,
        "=POISSON.DIST(A3,B3,FALSE)",
        "=POISSON.DIST(A3,B3,TRUE)"
    ],
    [
        2,
        2.5,
        "=POISSON.DIST(A4,B4,FALSE)",
        "=POISSON.DIST(A4,B4,TRUE)"
    ],
    [
        3,
        2.5,
        "=POISSON.DIST(A5,B5,FALSE)",
        "=POISSON.DIST(A5,B5,TRUE)"
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
        "Events (x)",
        "Mean Rate",
        "Probability (PMF)",
        "Cumulative Probability"
    ],
    [
        0,
        2.5,
        "=POISSON.DIST(A2,B2,FALSE)",
        "=POISSON.DIST(A2,B2,TRUE)"
    ],
    [
        1,
        2.5,
        "=POISSON.DIST(A3,B3,FALSE)",
        "=POISSON.DIST(A3,B3,TRUE)"
    ],
    [
        2,
        2.5,
        "=POISSON.DIST(A4,B4,FALSE)",
        "=POISSON.DIST(A4,B4,TRUE)"
    ],
    [
        3,
        2.5,
        "=POISSON.DIST(A5,B5,FALSE)",
        "=POISSON.DIST(A5,B5,TRUE)"
    ]
]
            }]
        });
    }
}
```

