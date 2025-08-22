title: WEIBULL.DIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the WEIBULL.DIST function in Jspreadsheet

# WEIBULL.DIST function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `WEIBULL.DIST` function in Jspreadsheet Formulas Pro is a tool that provides the Weibull distribution, commonly utilized in reliability analysis. It assists in predicting the lifespan of products or the time until a specific event occurs. This function requires specific inputs such as the shape and scale parameters of the distribution. Using this function, you can perform advanced analyses within your Jspreadsheet projects.

## Documentation

Returns the Weibull distribution, which is often used in reliability analysis.

### Category

Statistical

### Syntax

WEIBULL.DIST(x, alpha, beta, cumulative)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which to evaluate the distribution. |
| `alpha` | A parameter to set the shape of the distribution. |
| `beta` | A parameter to set the scale of the distribution. |
| `[cumulative]` | A logical value that indicates which form of the Weibull distribution to use:
TRUE or omitted: The cumulative distribution function
FALSE: The probability density function |


### Behavior

The 'WEIBULL.DIST' function in spreadsheets calculates the Weibull distribution, often used in reliability analysis and life data analysis. The function takes four arguments: `x`, `alpha`, `beta`, and `cumulative`. 

- If `x` is less than 0, or if `alpha` or `beta` is less than or equal to 0, the function will return an error.
- If any argument is non-numeric, the function will return an error.
- If any argument is a logical value or text, the function will attempt to convert it into a number. If unsuccessful, it will return an error.
- Empty cells within the range specified will be treated as zeros.
- The `cumulative` argument is a logical value that determines the form of the function. If `cumulative` is TRUE, WEIBULL.DIST returns the cumulative distribution function; if it is FALSE, it returns the probability density function.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the `x` value is less than 0, or if either `alpha` or `beta` is less than or equal to 0. |
| #VALUE! | Occurs if any of the supplied arguments are non-numeric or cannot be logically interpreted as numeric. |

### Best practices

> - Always ensure the input parameters `x`, `alpha`, and `beta` are greater than 0 to avoid errors. 
> - Be mindful of the `cumulative` argument. If you want to compute the cumulative distribution function, set `cumulative` to TRUE; set it to FALSE for the probability density function.
> - Use numeric values for arguments. While the function attempts to convert logical values and text to numbers, it's best to directly input numeric values for accuracy and error avoidance.
> - Keep in mind that the WEIBULL.DIST function is intended for advanced statistical analysis. Make sure you understand the implications of the Weibull distribution before using this function.

### Usage

A few examples using the WEIBULL.DIST function.

```
WEIBULL.DIST(60, 50, 10, TRUE)  
WEIBULL.DIST(100, 50, 10, FALSE)  
WEIBULL.DIST(A2, B2, C2, TRUE)  
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
        "Time (hours)",
        "Alpha",
        "Beta",
        "Cumulative Prob",
        "Probability Density"
    ],
    [
        100,
        2,
        150,
        "=WEIBULL.DIST(A2,B2,C2,TRUE)",
        "=WEIBULL.DIST(A2,B2,C2,FALSE)"
    ],
    [
        200,
        1.5,
        180,
        "=WEIBULL.DIST(A3,B3,C3,TRUE)",
        "=WEIBULL.DIST(A3,B3,C3,FALSE)"
    ],
    [
        300,
        2.2,
        200,
        "=WEIBULL.DIST(A4,B4,C4,TRUE)",
        "=WEIBULL.DIST(A4,B4,C4,FALSE)"
    ],
    [
        500,
        1.8,
        250,
        "=WEIBULL.DIST(A5,B5,C5,TRUE)",
        "=WEIBULL.DIST(A5,B5,C5,FALSE)"
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
        "Time (hours)",
        "Alpha",
        "Beta",
        "Cumulative Prob",
        "Probability Density"
    ],
    [
        100,
        2,
        150,
        "=WEIBULL.DIST(A2,B2,C2,TRUE)",
        "=WEIBULL.DIST(A2,B2,C2,FALSE)"
    ],
    [
        200,
        1.5,
        180,
        "=WEIBULL.DIST(A3,B3,C3,TRUE)",
        "=WEIBULL.DIST(A3,B3,C3,FALSE)"
    ],
    [
        300,
        2.2,
        200,
        "=WEIBULL.DIST(A4,B4,C4,TRUE)",
        "=WEIBULL.DIST(A4,B4,C4,FALSE)"
    ],
    [
        500,
        1.8,
        250,
        "=WEIBULL.DIST(A5,B5,C5,TRUE)",
        "=WEIBULL.DIST(A5,B5,C5,FALSE)"
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
        "Time (hours)",
        "Alpha",
        "Beta",
        "Cumulative Prob",
        "Probability Density"
    ],
    [
        100,
        2,
        150,
        "=WEIBULL.DIST(A2,B2,C2,TRUE)",
        "=WEIBULL.DIST(A2,B2,C2,FALSE)"
    ],
    [
        200,
        1.5,
        180,
        "=WEIBULL.DIST(A3,B3,C3,TRUE)",
        "=WEIBULL.DIST(A3,B3,C3,FALSE)"
    ],
    [
        300,
        2.2,
        200,
        "=WEIBULL.DIST(A4,B4,C4,TRUE)",
        "=WEIBULL.DIST(A4,B4,C4,FALSE)"
    ],
    [
        500,
        1.8,
        250,
        "=WEIBULL.DIST(A5,B5,C5,TRUE)",
        "=WEIBULL.DIST(A5,B5,C5,FALSE)"
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
        "Time (hours)",
        "Alpha",
        "Beta",
        "Cumulative Prob",
        "Probability Density"
    ],
    [
        100,
        2,
        150,
        "=WEIBULL.DIST(A2,B2,C2,TRUE)",
        "=WEIBULL.DIST(A2,B2,C2,FALSE)"
    ],
    [
        200,
        1.5,
        180,
        "=WEIBULL.DIST(A3,B3,C3,TRUE)",
        "=WEIBULL.DIST(A3,B3,C3,FALSE)"
    ],
    [
        300,
        2.2,
        200,
        "=WEIBULL.DIST(A4,B4,C4,TRUE)",
        "=WEIBULL.DIST(A4,B4,C4,FALSE)"
    ],
    [
        500,
        1.8,
        250,
        "=WEIBULL.DIST(A5,B5,C5,TRUE)",
        "=WEIBULL.DIST(A5,B5,C5,FALSE)"
    ]
]
            }]
        });
    }
}
```

