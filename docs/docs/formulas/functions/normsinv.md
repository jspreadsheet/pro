title: NORMSINV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NORMSINV function in Jspreadsheet

# NORMSINV function

`PRO`{.jtag}

The `NORMSINV` function in Jspreadsheet Formulas Pro is a powerful tool that gives you the inverse of the standard normal cumulative distribution. To put it simply, it translates a probability into a score on a normally distributed curve, often used in statistical analysis. This function is useful in scenarios like forecasting and predicting data trends, by converting percentages back into raw scores. It gives you the z-score associated with a particular cumulative probability in a standard normal distribution.

## Documentation

Returns the inverse of the standard normal cumulative distribution.

### Category

Statistical

### Syntax

NORMSINV(probability)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | The probability associated with a normal distribution. |


### Behavior

The `NORMSINV` function in spreadsheets calculates the inverse of the standard normal cumulative distribution function. This function takes a single argument, which should be a probability value between 0 and 1.

- If the cell is empty, `NORMSINV` will return a `#NUM!` error since it expects a numeric value between 0 and 1.
- If the cell contains text, `NORMSINV` will return a `#VALUE!` error as it cannot process text.
- If the cell contains a boolean, it will be converted to a binary number (TRUE as 1 and FALSE as 0) before calculating.
- If the cell contains a probability value less than 0 or greater than 1, `NORMSINV` will return a `#NUM!` error.
- If the cell contains an error, the function will propagate the error.

### Common Errors

| Error | Description |
| --- | --- |
| `#NUM!` | This error occurs when the given probability value is less than 0 or greater than 1, or if the cell is empty. |
| `#VALUE!` | This error occurs when the provided argument is non-numeric, such as text. |
| Error propagation | If the argument of the `NORMSINV` function is another function that returns an error, `NORMSINV` will also return an error. |

### Best practices

> - Always ensure that the argument given to `NORMSINV` is a probability value between 0 and 1.
> - Avoid using text or boolean values as the argument to `NORMSINV`. If necessary, convert these values to numbers before using the function.
> - Be cautious of error propagation when using `NORMSINV` in combination with other functions.
> - Use error handling functions like `IFERROR` or `ISNUMBER` to handle potential errors and maintain the cleanliness of your data.

### Usage

A few examples using the NORMSINV function.

```
NORMSINV(0.025)  
NORMSINV(0.97725)  
NORMSINV(0.398942)  
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
        "Z-Score",
        "Description"
    ],
    [
        0.025,
        "=NORMSINV(A2)",
        "Lower 2.5% tail"
    ],
    [
        0.5,
        "=NORMSINV(A3)",
        "50th percentile (median)"
    ],
    [
        0.975,
        "=NORMSINV(A4)",
        "Upper 2.5% tail"
    ],
    [
        0.95,
        "=NORMSINV(A5)",
        "95th percentile"
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
        "Z-Score",
        "Description"
    ],
    [
        0.025,
        "=NORMSINV(A2)",
        "Lower 2.5% tail"
    ],
    [
        0.5,
        "=NORMSINV(A3)",
        "50th percentile (median)"
    ],
    [
        0.975,
        "=NORMSINV(A4)",
        "Upper 2.5% tail"
    ],
    [
        0.95,
        "=NORMSINV(A5)",
        "95th percentile"
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
        "Z-Score",
        "Description"
    ],
    [
        0.025,
        "=NORMSINV(A2)",
        "Lower 2.5% tail"
    ],
    [
        0.5,
        "=NORMSINV(A3)",
        "50th percentile (median)"
    ],
    [
        0.975,
        "=NORMSINV(A4)",
        "Upper 2.5% tail"
    ],
    [
        0.95,
        "=NORMSINV(A5)",
        "95th percentile"
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
        "Z-Score",
        "Description"
    ],
    [
        0.025,
        "=NORMSINV(A2)",
        "Lower 2.5% tail"
    ],
    [
        0.5,
        "=NORMSINV(A3)",
        "50th percentile (median)"
    ],
    [
        0.975,
        "=NORMSINV(A4)",
        "Upper 2.5% tail"
    ],
    [
        0.95,
        "=NORMSINV(A5)",
        "95th percentile"
    ]
]
            }]
        });
    }
}
```

