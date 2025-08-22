title: NORMSDIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NORMSDIST function in Jspreadsheet

# NORMSDIST function

`PRO`{.jtag}

The `NORMSDIST` function in Jspreadsheet Formulas Pro is used to return the standard normal cumulative distribution function. In simpler terms, it calculates the probability that a random variable with a standard normal distribution (mean of 0 and standard deviation of 1) is less than or equal to a specified value. This function is commonly used in statistical analysis and predictions. Hence, it's a useful tool for data analysis and interpretation in Jspreadsheet Formulas Pro.

## Documentation

Returns the standard normal cumulative distribution function.

### Category

Statistical

### Syntax

NORMSDIST(z)

| Parameter | Description |
| ----------- | ------------- |
| `z` | The value for which you want the distribution. |


### Behavior

The 'NORMSDIST' spreadsheet function calculates the standard Normal cumulative distribution (also known as the Gaussian distribution) for a supplied value. It is predominantly used in statistics, probability and data analysis. 

- It expects a single numerical value as input. This number represents the value for which you want to calculate the distribution.
- The function does not handle empty cells; it requires a valid numerical input to execute. 
- If a text string is supplied instead of a number, the function will return a `#VALUE!` error.
- If a boolean value is supplied, it will be treated as 0 for FALSE and 1 for TRUE.

### Common Errors

| Error | Description | 
| --- | --- |
| #VALUE! | This error occurs if the provided argument is non-numeric or if the provided argument is a text string. |
| #NUM! | This error occurs if the supplied value is less than 0. |

### Best practices

> - Always ensure that the input value is a valid numerical value to avoid any errors. 
> - Remember that 'NORMSDIST' function assumes a mean of 0 and a standard deviation of 1.
> - Use the 'NORMSDIST' function when you need to understand the probability of a particular outcome, especially in data analysis and forecasting.
> - Be aware that 'NORMSDIST' function is not suitable for datasets that do not follow a normal distribution. In such cases, other statistical functions might be more appropriate.

### Usage

A few examples using the NORMSDIST function.

```
NORMSDIST(-1.96) returns approximately 0.025  
NORMSDIST(2) returns approximately 0.97725  
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
        "Probability"
    ],
    [
        -1.96,
        "=NORMSDIST(A2)"
    ],
    [
        0,
        "=NORMSDIST(A3)"
    ],
    [
        1.64,
        "=NORMSDIST(A4)"
    ],
    [
        2.33,
        "=NORMSDIST(A5)"
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
        "Probability"
    ],
    [
        -1.96,
        "=NORMSDIST(A2)"
    ],
    [
        0,
        "=NORMSDIST(A3)"
    ],
    [
        1.64,
        "=NORMSDIST(A4)"
    ],
    [
        2.33,
        "=NORMSDIST(A5)"
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
        "Probability"
    ],
    [
        -1.96,
        "=NORMSDIST(A2)"
    ],
    [
        0,
        "=NORMSDIST(A3)"
    ],
    [
        1.64,
        "=NORMSDIST(A4)"
    ],
    [
        2.33,
        "=NORMSDIST(A5)"
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
        "Probability"
    ],
    [
        -1.96,
        "=NORMSDIST(A2)"
    ],
    [
        0,
        "=NORMSDIST(A3)"
    ],
    [
        1.64,
        "=NORMSDIST(A4)"
    ],
    [
        2.33,
        "=NORMSDIST(A5)"
    ]
]
            }]
        });
    }
}
```

