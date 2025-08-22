title: F.DIST.RT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the F.DIST.RT function in Jspreadsheet

# F.DIST.RT function

`PRO`{.jtag}

The `F.DIST.RT` function in Jspreadsheet Formulas Pro is a statistical tool used to compute the right-tailed F probability distribution. This function is often used in hypothesis testing to compare variances of two sets of data. The 'right-tailed' aspect means that the function calculates the probability of a variable from the higher end (or 'tail') of the distribution. The result provides an understanding of how likely an observation occurred by random chance.

## Documentation

Returns the right-tailed F probability distribution.

### Category

Statistical

### Syntax

F.DIST.RT(x, degrees_freedom1, degrees_freedom2)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The input value at which to evaluate the function. |
| `degrees_freedom1` | The numerator degrees of freedom for the distribution. |
| `degrees_freedom2` | The denominator degrees of freedom for the distribution. |


### Behavior

The `F.DIST.RT` function in spreadsheets calculates the right-tailed F probability distribution. This is often used in statistical analyses to compare variances. The function takes three arguments: the value at which to evaluate the function (`x`), the degrees of freedom for the numerator (`deg_freedom1`), and the degrees of freedom for the denominator (`deg_freedom2`). 

- If any cells referenced by the function are empty, the function will treat them as zeros.
- If a cell contains text or a boolean value, the function will return a `#VALUE!` error.
- If `x` is less than 0, the function will return a `#NUM!` error.
- If `deg_freedom1` or `deg_freedom2` aren't integers, the function will truncate them to integers.
- If `deg_freedom1` or `deg_freedom2` are less than 1, the function will return a `#NUM!` error.
- If `deg_freedom1` or `deg_freedom2` are greater than 10^10, the function will return a `#NUM!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The input argument is non-numeric, such as text or a boolean value. |
| #NUM! | The input `x` is less than 0, or `deg_freedom1` or `deg_freedom2` are less than 1 or greater than 10^10. |
| #N/A | The function is not available in the spreadsheet software. |

### Best practices

> - Always check your inputs for `F.DIST.RT` to make sure they are numeric and fall within the accepted ranges. This will prevent any `#NUM!` or `#VALUE!` errors.
> - Remember that `F.DIST.RT` expects degrees of freedom as integers. If you pass a decimal, the function will truncate it to an integer, which might not give you the expected result.
> - Be aware that the `F.DIST.RT` function returns the right-tailed F probability distribution. If you need the left-tailed distribution, consider using the `F.DIST` function instead.
> - Always interpret the results of `F.DIST.RT` within the context of your data and statistical analysis. The function itself only performs a calculation – it's up to you to understand what the result means in your context.

### Usage

A few examples using the F.DIST.RT function.

```
F.DIST.RT(1.5,3,5) returns 0.322165371  
F.DIST.RT(2.5,10,20) returns 0.038903636  
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
        "F-Statistic",
        "df1",
        "df2",
        "Right-tail P-value"
    ],
    [
        2.45,
        3,
        12,
        "=F.DIST.RT(A2,B2,C2)"
    ],
    [
        1.87,
        5,
        18,
        "=F.DIST.RT(A3,B3,C3)"
    ],
    [
        3.21,
        2,
        15,
        "=F.DIST.RT(A4,B4,C4)"
    ],
    [
        1.23,
        4,
        20,
        "=F.DIST.RT(A5,B5,C5)"
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
        "F-Statistic",
        "df1",
        "df2",
        "Right-tail P-value"
    ],
    [
        2.45,
        3,
        12,
        "=F.DIST.RT(A2,B2,C2)"
    ],
    [
        1.87,
        5,
        18,
        "=F.DIST.RT(A3,B3,C3)"
    ],
    [
        3.21,
        2,
        15,
        "=F.DIST.RT(A4,B4,C4)"
    ],
    [
        1.23,
        4,
        20,
        "=F.DIST.RT(A5,B5,C5)"
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
        "F-Statistic",
        "df1",
        "df2",
        "Right-tail P-value"
    ],
    [
        2.45,
        3,
        12,
        "=F.DIST.RT(A2,B2,C2)"
    ],
    [
        1.87,
        5,
        18,
        "=F.DIST.RT(A3,B3,C3)"
    ],
    [
        3.21,
        2,
        15,
        "=F.DIST.RT(A4,B4,C4)"
    ],
    [
        1.23,
        4,
        20,
        "=F.DIST.RT(A5,B5,C5)"
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
        "F-Statistic",
        "df1",
        "df2",
        "Right-tail P-value"
    ],
    [
        2.45,
        3,
        12,
        "=F.DIST.RT(A2,B2,C2)"
    ],
    [
        1.87,
        5,
        18,
        "=F.DIST.RT(A3,B3,C3)"
    ],
    [
        3.21,
        2,
        15,
        "=F.DIST.RT(A4,B4,C4)"
    ],
    [
        1.23,
        4,
        20,
        "=F.DIST.RT(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

