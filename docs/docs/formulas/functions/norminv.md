title: NORMINV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NORMINV function in Jspreadsheet

# NORMINV function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `NORMINV` function is used to find the inverse of the normal cumulative distribution given a certain mean and standard deviation. This function is especially useful in statistics, as it can help you determine the value below which a certain percentage of data falls. You just need to provide the probability, mean, and standard deviation, and the function will return the corresponding value from the normal distribution.

## Documentation

Returns the inverse of the normal cumulative distribution for a specified mean and standard deviation.

### Category

Statistical

### Syntax

NORMINV(probability, mean, standard_dev)

| Parameter | Description |
| ----------- | ------------- |
| `probability` | The probability associated with the normal distribution. |
| `mean` | The arithmetic mean of the distribution. |
| `standard_dev` | The standard deviation of the distribution. |


### Behavior

The `NORMINV` spreadsheet function is used to return the inverse of the normal distribution for a specified mean and standard deviation. This function calculates the inverse of the cumulative log-normal probability density function for a given probability, mean, and standard deviation.

- When the cell references or values for probability, mean, and standard deviation are positive numerical values, the function will return the corresponding inverse of the normal distribution.
- If the probability argument is not between 0 and 1, the function returns a #NUM! error.
- If the standard deviation argument is less than or equal to 0, the function returns a #NUM! error.
- The function will also return a #NUM! error if given a non-numeric value.
- Empty cells within the range are treated as 0.
- Text representations of numbers that are directly provided as arguments are processed correctly.
- Booleans and logical values are not supported by the `NORMINV` function and will result in a #VALUE! error.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #NUM! | Occurs when the given probability is not between 0 and 1, or when the standard deviation is less than or equal to 0, or when given a non-numeric value. |
| #VALUE! | Occurs when boolean values or logical values are given as input to the function. |

### Best practices
> - Always ensure that the probability value is between 0 and 1 when using the `NORMINV` function to avoid a #NUM! error.
> - Standard deviation values should always be greater than 0. Inputting a value of 0 or less will result in a #NUM! error.
> - Avoid using boolean or logical values as input for the `NORMINV` function to prevent a #VALUE! error.
> - It's recommended to use cell references rather than direct numerical inputs as it allows for greater flexibility and automatic updating when the referenced cell values change.

### Usage

A few examples using the NORMINV function.

```
NORMINV(0.75, 80, 6) returns approximately 84.04  
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
        "Mean",
        "Std Dev",
        "Critical Value"
    ],
    [
        0.95,
        100,
        15,
        "=NORMINV(A2,B2,C2)"
    ],
    [
        0.9,
        85,
        12,
        "=NORMINV(A3,B3,C3)"
    ],
    [
        0.75,
        75,
        8,
        "=NORMINV(A4,B4,C4)"
    ],
    [
        0.5,
        90,
        10,
        "=NORMINV(A5,B5,C5)"
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
        "Mean",
        "Std Dev",
        "Critical Value"
    ],
    [
        0.95,
        100,
        15,
        "=NORMINV(A2,B2,C2)"
    ],
    [
        0.9,
        85,
        12,
        "=NORMINV(A3,B3,C3)"
    ],
    [
        0.75,
        75,
        8,
        "=NORMINV(A4,B4,C4)"
    ],
    [
        0.5,
        90,
        10,
        "=NORMINV(A5,B5,C5)"
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
        "Mean",
        "Std Dev",
        "Critical Value"
    ],
    [
        0.95,
        100,
        15,
        "=NORMINV(A2,B2,C2)"
    ],
    [
        0.9,
        85,
        12,
        "=NORMINV(A3,B3,C3)"
    ],
    [
        0.75,
        75,
        8,
        "=NORMINV(A4,B4,C4)"
    ],
    [
        0.5,
        90,
        10,
        "=NORMINV(A5,B5,C5)"
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
        "Mean",
        "Std Dev",
        "Critical Value"
    ],
    [
        0.95,
        100,
        15,
        "=NORMINV(A2,B2,C2)"
    ],
    [
        0.9,
        85,
        12,
        "=NORMINV(A3,B3,C3)"
    ],
    [
        0.75,
        75,
        8,
        "=NORMINV(A4,B4,C4)"
    ],
    [
        0.5,
        90,
        10,
        "=NORMINV(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

