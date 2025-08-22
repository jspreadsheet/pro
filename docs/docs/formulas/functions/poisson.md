title: POISSON function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the POISSON function in Jspreadsheet

# POISSON function

`PRO`{.jtag}

The `POISSON` function in Jspreadsheet Formulas Pro is used to compute the Poisson distribution probability mass function. It's a statistical tool often used when dealing with events that occur at a constant rate within a specific time period. Essentially, this function can help you predict the likelihood of a certain number of events happening in a set timeframe, given the average rate of occurrence. For instance, it can be used to predict the number of calls a call center might receive in an hour.

## Documentation

Calculates the Poisson distribution probability mass function.

### Category

Compatibility

### Syntax

POISSON(x, mean, [cumulative])

| Parameter | Description |
| ----------- | ------------- |
| `x` | The number of events. |
| `mean` | The expected numeric value, or average, of the distribution. |
| `[cumulative]` | Optional. A logical value that determines the form of the function. If cumulative is TRUE, POISSON returns the cumulative distribution function (CDF) value; if FALSE, it returns the probability mass function (PMF) value. |


### Behavior

The POISSON function in spreadsheets computes the Poisson distribution, often used in statistical analysis and probability theory. It is used to predict the probability of certain events when they are independent and occur at a constant rate within a certain period of time. 

- It takes three arguments: x (the actual number of successful events), lambda (the expected or average number of successful events), and cumulative (a logical value that determines the form of the function).
- If the cell references or the values provided are non-numeric, the function will return a #VALUE! error.
- If the x value is less than zero, the function returns #NUM! error.
- If cumulative is TRUE, POISSON returns the cumulative Poisson probability that the number of random events occurring will be between zero and x inclusive; if FALSE or omitted, it returns the Poisson probability mass function that the number of events occurring will be exactly x.
- The function is not case-sensitive.

### Common Errors

| Error | Description |
| ------- | ------------|
| #VALUE! | This error occurs when any of the input cells are non-numeric. |
| #NUM! | This error is returned when the x value is less than zero. |
| #N/A | This error is returned when lambda is non-numeric or less than zero. |

### Best practices

> - Always make sure that your input values are numeric, as text or non-numeric input will result in errors.
> - Use the POISSON function when you are dealing with independent events that occur at a constant rate within a certain timeframe.
> - Be careful with the cumulative argument. Remember that if it's TRUE, the function will return the cumulative Poisson probability; if it's FALSE or omitted, it will return the Poisson probability mass function.
> - Be aware of the limitations of the Poisson distribution. It may not be an accurate model for all types of data or events.

### Usage

A few examples using the POISSON function.

```
POISSON(2,3,FALSE)  
POISSON(A1,B1,C1)  
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
        "Events",
        "Mean Rate",
        "P(X=k)",
        "Cumulative P(X\u2264k)"
    ],
    [
        0,
        2.5,
        "=POISSON(A2,B2,FALSE)",
        "=POISSON(A2,B2,TRUE)"
    ],
    [
        1,
        2.5,
        "=POISSON(A3,B3,FALSE)",
        "=POISSON(A3,B3,TRUE)"
    ],
    [
        2,
        2.5,
        "=POISSON(A4,B4,FALSE)",
        "=POISSON(A4,B4,TRUE)"
    ],
    [
        3,
        2.5,
        "=POISSON(A5,B5,FALSE)",
        "=POISSON(A5,B5,TRUE)"
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
        "Events",
        "Mean Rate",
        "P(X=k)",
        "Cumulative P(X\u2264k)"
    ],
    [
        0,
        2.5,
        "=POISSON(A2,B2,FALSE)",
        "=POISSON(A2,B2,TRUE)"
    ],
    [
        1,
        2.5,
        "=POISSON(A3,B3,FALSE)",
        "=POISSON(A3,B3,TRUE)"
    ],
    [
        2,
        2.5,
        "=POISSON(A4,B4,FALSE)",
        "=POISSON(A4,B4,TRUE)"
    ],
    [
        3,
        2.5,
        "=POISSON(A5,B5,FALSE)",
        "=POISSON(A5,B5,TRUE)"
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
        "Events",
        "Mean Rate",
        "P(X=k)",
        "Cumulative P(X\u2264k)"
    ],
    [
        0,
        2.5,
        "=POISSON(A2,B2,FALSE)",
        "=POISSON(A2,B2,TRUE)"
    ],
    [
        1,
        2.5,
        "=POISSON(A3,B3,FALSE)",
        "=POISSON(A3,B3,TRUE)"
    ],
    [
        2,
        2.5,
        "=POISSON(A4,B4,FALSE)",
        "=POISSON(A4,B4,TRUE)"
    ],
    [
        3,
        2.5,
        "=POISSON(A5,B5,FALSE)",
        "=POISSON(A5,B5,TRUE)"
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
        "Events",
        "Mean Rate",
        "P(X=k)",
        "Cumulative P(X\u2264k)"
    ],
    [
        0,
        2.5,
        "=POISSON(A2,B2,FALSE)",
        "=POISSON(A2,B2,TRUE)"
    ],
    [
        1,
        2.5,
        "=POISSON(A3,B3,FALSE)",
        "=POISSON(A3,B3,TRUE)"
    ],
    [
        2,
        2.5,
        "=POISSON(A4,B4,FALSE)",
        "=POISSON(A4,B4,TRUE)"
    ],
    [
        3,
        2.5,
        "=POISSON(A5,B5,FALSE)",
        "=POISSON(A5,B5,TRUE)"
    ]
]
            }]
        });
    }
}
```

