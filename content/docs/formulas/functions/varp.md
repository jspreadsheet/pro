title: VAR.P function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VAR.P function in Jspreadsheet

# VAR.P function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `VAR.P` function in Jspreadsheet Formulas Pro is used to calculate the variance of a whole data set or population. In simple terms, it gives you an idea of how much the values in your data set differ from the average. It's a useful tool when you want to analyze the distribution and diversity of your data. This function takes a range of cells as input and returns the variance of these cells' values.

## Documentation

Calculates the variance based on an entire population.

### Category

Statistical

### Syntax

VAR.P(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers that you want to calculate the variance of. At least one number is required. |
| `[numberN]` | Optional. Additional numbers or ranges of numbers that you want to include in the calculation. You can include up to 255 numbers or ranges. |


### Behavior

The `VAR.P` function in spreadsheet programs calculates the variance of a data set based on the entire population. It treats the following cases in these ways:

- **Empty cells**: `VAR.P` ignores empty cells in the data set.
- **Text**: If the cell contains text, `VAR.P` function ignores it.
- **Booleans**: The function treats `TRUE` as 1 and `FALSE` as 0.
- **Errors**: If any cell in the range contains an error, the `VAR.P` function will return an error.
- **Non-numeric values**: These are ignored by `VAR.P` function.
- **Zero values**: Zero values are included in the calculation of variance.

### Common Errors

| Error | Description |
| --- | --- |
| `#DIV/0!` | If no numbers are supplied or if a single number is supplied as input, the `VAR.P` function will return a `#DIV/0!` error. This means that it requires at least two numbers for the calculation. |
| `#VALUE!` | This error occurs when the supplied arguments are non-numeric values. |
| `#N/A` | If the supplied range of cells does not exist, `VAR.P` will return the `#N/A` error. |

### Best practices

> - Ensure that you have at least two numeric data points in your dataset before using the `VAR.P` function. Using it with a single number or no numbers will result in an error.
> - Use `VAR.P` when you're dealing with a complete data set or the entire population. If you have a sample of a larger population, use `VAR.S` instead.
> - Remember that `VAR.P` ignores text and cannot process non-numeric values. Make sure your data range primarily includes numbers.
> - Be aware that `VAR.P` treats `TRUE` as 1 and `FALSE` as 0. If you're using boolean values in your data set, make sure this won't distort your results.

### Usage

A few examples using the VAR.P function.

```
VAR.P(1,2,3,4,5) returns 2 (because the variance of these numbers as a population is exactly 2)  
VAR.P(A1:A10) returns the variance of the values in cells A1 through A10 as a population  
VAR.P(B1:B10, C1:C10) returns the variance of the combined sets of values in cells B1 through B10 and C1 through C10 as a population.  
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
        "Student",
        "Test Score",
        "Population Variance"
    ],
    [
        "Alice",
        85,
        "=VAR.P(B2:B6)"
    ],
    [
        "Bob",
        92,
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "David",
        88,
        ""
    ],
    [
        "Eve",
        82,
        ""
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
        "Student",
        "Test Score",
        "Population Variance"
    ],
    [
        "Alice",
        85,
        "=VAR.P(B2:B6)"
    ],
    [
        "Bob",
        92,
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "David",
        88,
        ""
    ],
    [
        "Eve",
        82,
        ""
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
        "Student",
        "Test Score",
        "Population Variance"
    ],
    [
        "Alice",
        85,
        "=VAR.P(B2:B6)"
    ],
    [
        "Bob",
        92,
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "David",
        88,
        ""
    ],
    [
        "Eve",
        82,
        ""
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
        "Student",
        "Test Score",
        "Population Variance"
    ],
    [
        "Alice",
        85,
        "=VAR.P(B2:B6)"
    ],
    [
        "Bob",
        92,
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "David",
        88,
        ""
    ],
    [
        "Eve",
        82,
        ""
    ]
]
            }]
        });
    }
}
```

