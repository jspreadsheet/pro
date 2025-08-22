title: T.DIST.2T function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the T.DIST.2T function in Jspreadsheet

# T.DIST.2T function

`PRO`{.jtag}

The `T.DIST.2T` function in Jspreadsheet Formulas Pro is a statistical tool that provides the two-tailed Student's t-distribution. This function is particularly useful when you're trying to analyze a small sample of data. Essentially, it helps you understand the likelihood of a particular outcome occurring at both ends of your data spectrum. It's a handy feature for making predictions or assumptions based on limited information.

## Documentation

Returns the two-tailed Student's t-distribution.

### Category

Statistical

### Syntax

T.DIST.2T(x, degrees_freedom)

| Parameter | Description |
| ----------- | ------------- |
| `x` | The numeric value at which to evaluate the distribution. |
| `degrees_freedom` | The number of degrees of freedom. |


### Behavior

The 'T.DIST.2T' function in spreadsheets calculates the two-tailed Student's T-distribution, which is commonly used in hypothesis testing. The function requires two inputs: the x value (the numeric value at which to evaluate the distribution) and the degrees of freedom. 

- The function returns a #NUM! error if either the x value or degrees of freedom is non-numeric.
- If the degrees of freedom is less than 1 or if the x value is less than 0, the function will again return a #NUM! error.
- The function does not handle empty cells, non-numeric inputs, or text. It expects numeric inputs for both parameters.
- The function ignores boolean values. If a boolean value is entered as an input, it will return a #VALUE! error.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | This error occurs if either the x value or the degrees of freedom is non-numeric. It also occurs if the degrees of freedom is less than 1 or if the x value is less than 0. |
| #VALUE! | This error is returned when the function receives a non-numeric value, including boolean values. |

### Best practices

> - Always ensure that both the x value and degrees of freedom are numeric. Non-numeric values will result in errors.
> - Be aware that the function does not handle empty cells, text, or boolean values. These will result in a #VALUE! error.
> - The degrees of freedom should be 1 or more, and the x value should be positive. Negative values for either of these parameters will result in a #NUM! error.
> - Use this function with care in hypothesis testing. Incorrect use can lead to inaccurate results.

### Usage

A few examples using the T.DIST.2T function.

```
T.DIST.2T(1.5, 10)  
T.DIST.2T(2, 8)  
T.DIST.2T(1, 5)  
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
        "t-statistic",
        "degrees of freedom",
        "two-tailed p-value"
    ],
    [
        1.5,
        10,
        "=T.DIST.2T(A2,B2)"
    ],
    [
        2.3,
        15,
        "=T.DIST.2T(A3,B3)"
    ],
    [
        1.8,
        8,
        "=T.DIST.2T(A4,B4)"
    ],
    [
        2.1,
        12,
        "=T.DIST.2T(A5,B5)"
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
        "t-statistic",
        "degrees of freedom",
        "two-tailed p-value"
    ],
    [
        1.5,
        10,
        "=T.DIST.2T(A2,B2)"
    ],
    [
        2.3,
        15,
        "=T.DIST.2T(A3,B3)"
    ],
    [
        1.8,
        8,
        "=T.DIST.2T(A4,B4)"
    ],
    [
        2.1,
        12,
        "=T.DIST.2T(A5,B5)"
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
        "t-statistic",
        "degrees of freedom",
        "two-tailed p-value"
    ],
    [
        1.5,
        10,
        "=T.DIST.2T(A2,B2)"
    ],
    [
        2.3,
        15,
        "=T.DIST.2T(A3,B3)"
    ],
    [
        1.8,
        8,
        "=T.DIST.2T(A4,B4)"
    ],
    [
        2.1,
        12,
        "=T.DIST.2T(A5,B5)"
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
        "t-statistic",
        "degrees of freedom",
        "two-tailed p-value"
    ],
    [
        1.5,
        10,
        "=T.DIST.2T(A2,B2)"
    ],
    [
        2.3,
        15,
        "=T.DIST.2T(A3,B3)"
    ],
    [
        1.8,
        8,
        "=T.DIST.2T(A4,B4)"
    ],
    [
        2.1,
        12,
        "=T.DIST.2T(A5,B5)"
    ]
]
            }]
        });
    }
}
```

