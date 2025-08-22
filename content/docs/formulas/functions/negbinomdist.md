title: NEGBINOMDIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NEGBINOMDIST function in Jspreadsheet

# NEGBINOMDIST function

`PRO`{.jtag}

The `NEGBINOMDIST` function in Jspreadsheet Formulas Pro is used to calculate the negative binomial distribution. In simpler terms, it helps you figure out the likelihood of experiencing a specific number of failures before achieving a certain number of successes, given a fixed probability of success. This function can be incredibly helpful, particularly in situations where you need to predict outcomes over multiple trials or events.

## Documentation

Returns the negative binomial distribution, which is the probability that there will be k failures before the rth success, with probability p of success.

### Category

Statistical

### Syntax

NEGBINOMDIST(number_f, number_s, probability_s)

| Parameter | Description |
| ----------- | ------------- |
| `number_f` | The number of failures. |
| `number_s` | The threshold number of successes. |
| `probability_s` | The probability of a success. |


### Behavior

The `NEGBINOMDIST` function in spreadsheets calculates the negative binomial distribution, which is a probability that describes the number of failures in a sequence of independent and identically distributed Bernoulli trials before a specified number of successes occurs.

The function takes three arguments: number of failures, number of successes, and the probability of success on each trial. 

- If any of the arguments are empty cells, the function will return an error.
- The function does not process text inputs and will return an error if any argument is a text.
- Booleans are not accepted as inputs. If a Boolean value is provided, the function will return an error.
- If an error occurs in one of the cells referenced in the function, it will propagate that error.
- The function expects the number of failures and successes to be non-negative integers and the probability of success to be a number between 0 and 1 inclusive. If these conditions are not met, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned if any of the input arguments are non-numeric, boolean, or text. |
| #NUM! | This error is returned if the number of successes is less than 1, the number of failures is less than 0, or the probability of success is less than 0 or greater than 1. |
| #N/A | This error is returned if the required arguments are not provided. |

### Best practices

> - Always ensure that the input arguments are numeric. The function doesn't handle text or boolean values.
> - Be careful with the values you input for number of successes and number of failures. They should be non-negative integers, and the number of successes should be at least 1.
> - Ensure that the probability of success is a number between 0 and 1 inclusive. Any value outside this range will result in an error.
> - To avoid errors, it's recommended to check the data types and ranges of your input data before using them in the `NEGBINOMDIST` function.

### Usage

A few examples using the NEGBINOMDIST function.

```
NEGBINOMDIST(3,5,0.4)  
NEGBINOMDIST(10,15,0.25)  
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
        "Failures (k)",
        "Successes (r)",
        "Probability (p)",
        "Neg. Binomial Dist"
    ],
    [
        3,
        5,
        0.4,
        "=NEGBINOMDIST(A2,B2,C2)"
    ],
    [
        8,
        10,
        0.3,
        "=NEGBINOMDIST(A3,B3,C3)"
    ],
    [
        12,
        15,
        0.25,
        "=NEGBINOMDIST(A4,B4,C4)"
    ],
    [
        6,
        8,
        0.6,
        "=NEGBINOMDIST(A5,B5,C5)"
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
        "Failures (k)",
        "Successes (r)",
        "Probability (p)",
        "Neg. Binomial Dist"
    ],
    [
        3,
        5,
        0.4,
        "=NEGBINOMDIST(A2,B2,C2)"
    ],
    [
        8,
        10,
        0.3,
        "=NEGBINOMDIST(A3,B3,C3)"
    ],
    [
        12,
        15,
        0.25,
        "=NEGBINOMDIST(A4,B4,C4)"
    ],
    [
        6,
        8,
        0.6,
        "=NEGBINOMDIST(A5,B5,C5)"
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
        "Failures (k)",
        "Successes (r)",
        "Probability (p)",
        "Neg. Binomial Dist"
    ],
    [
        3,
        5,
        0.4,
        "=NEGBINOMDIST(A2,B2,C2)"
    ],
    [
        8,
        10,
        0.3,
        "=NEGBINOMDIST(A3,B3,C3)"
    ],
    [
        12,
        15,
        0.25,
        "=NEGBINOMDIST(A4,B4,C4)"
    ],
    [
        6,
        8,
        0.6,
        "=NEGBINOMDIST(A5,B5,C5)"
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
        "Failures (k)",
        "Successes (r)",
        "Probability (p)",
        "Neg. Binomial Dist"
    ],
    [
        3,
        5,
        0.4,
        "=NEGBINOMDIST(A2,B2,C2)"
    ],
    [
        8,
        10,
        0.3,
        "=NEGBINOMDIST(A3,B3,C3)"
    ],
    [
        12,
        15,
        0.25,
        "=NEGBINOMDIST(A4,B4,C4)"
    ],
    [
        6,
        8,
        0.6,
        "=NEGBINOMDIST(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

