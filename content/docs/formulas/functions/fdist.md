title: FDIST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FDIST function in Jspreadsheet

# FDIST function

`PRO`{.jtag}

The `FDIST` function in Jspreadsheet Formulas Pro is a useful tool for statistical analysis. It returns the cumulative distribution function of the F-distribution, which is a probability that is used in hypothesis testing. Essentially, this function can help you determine the likelihood of a particular outcome based on specific data inputs. It's especially valuable in fields like research, where data analysis and interpretation are key.

## Documentation

Returns the cumulative distribution function of the F-distribution.

### Category

Statistical

### Syntax

FDIST(x, degrees_freedom1, degrees_freedom2)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The value at which to evaluate the function. |
| `degrees_freedom1` | The numerator degrees of freedom for the distribution. |
| `degrees_freedom2` | The denominator degrees of freedom for the distribution. |


### Behavior

The 'FDIST' function in spreadsheets is used to calculate the F Probability Distribution, which is often used in analysis of variance. Here's how it handles different situations:

- **Empty cells**: If the cell is empty, the function will treat it as a zero.
- **Text**: Text input in 'FDIST' function will result in an error.
- **Booleans**: Spreadsheet functions do not accept boolean values. So, if a boolean value is passed, it will return an error.
- **Errors**: If any of the input cells have errors, the function will propagate the error.
- **Non-numeric values**: If non-numeric value is passed as an argument, 'FDIST' function will return an error.
- **Negative values**: 'FDIST' function does not accept negative values. If passed, it will return a #NUM! error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when any of the input arguments are non-numeric or boolean values. |
| #NUM! | This error is displayed when negative values are passed as input arguments. |
| #DIV/0! | This error occurs when the denominator in the 'FDIST' function is zero. |

### Best practices

> - Always ensure that the input values are numeric and non-negative to avoid errors.
> - Remember that 'FDIST' function treats empty cells as zero.
> - Avoid using text or boolean values as input arguments in 'FDIST' function.
> - Always check your input cell for errors to avoid error propagation.

### Usage

A few examples using the FDIST function.

```
FDIST(15.206,3,5)  
FDIST(20,5,10)  
FDIST(8.15,2,10)  
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
        "F-Value",
        "df1",
        "df2",
        "P-Value"
    ],
    [
        2.45,
        2,
        12,
        "=FDIST(A2,B2,C2)"
    ],
    [
        3.89,
        3,
        15,
        "=FDIST(A3,B3,C3)"
    ],
    [
        1.75,
        4,
        20,
        "=FDIST(A4,B4,C4)"
    ],
    [
        5.12,
        1,
        8,
        "=FDIST(A5,B5,C5)"
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
        "F-Value",
        "df1",
        "df2",
        "P-Value"
    ],
    [
        2.45,
        2,
        12,
        "=FDIST(A2,B2,C2)"
    ],
    [
        3.89,
        3,
        15,
        "=FDIST(A3,B3,C3)"
    ],
    [
        1.75,
        4,
        20,
        "=FDIST(A4,B4,C4)"
    ],
    [
        5.12,
        1,
        8,
        "=FDIST(A5,B5,C5)"
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
        "F-Value",
        "df1",
        "df2",
        "P-Value"
    ],
    [
        2.45,
        2,
        12,
        "=FDIST(A2,B2,C2)"
    ],
    [
        3.89,
        3,
        15,
        "=FDIST(A3,B3,C3)"
    ],
    [
        1.75,
        4,
        20,
        "=FDIST(A4,B4,C4)"
    ],
    [
        5.12,
        1,
        8,
        "=FDIST(A5,B5,C5)"
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
        "F-Value",
        "df1",
        "df2",
        "P-Value"
    ],
    [
        2.45,
        2,
        12,
        "=FDIST(A2,B2,C2)"
    ],
    [
        3.89,
        3,
        15,
        "=FDIST(A3,B3,C3)"
    ],
    [
        1.75,
        4,
        20,
        "=FDIST(A4,B4,C4)"
    ],
    [
        5.12,
        1,
        8,
        "=FDIST(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

