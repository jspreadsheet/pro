title: TTEST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TTEST function in Jspreadsheet

# TTEST function

`PRO`{.jtag}

The `TTEST` function in Jspreadsheet Formulas Pro is a statistical tool that provides the probability associated with a Student's t-test. Essentially, it helps determine whether there is a significant difference between two data groups. It's commonly used to test the hypothesis that two samples may have been drawn from the same population. In simpler terms, it helps you decide if two sets of data are significantly different from each other or not.

## Documentation

Returns the probability associated with a Student's t-test.

### Category

Statistical

### Syntax

TTEST(array1, array2, tails, type)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | array1 - the first array or range of data. |
| `array2` | array2 - the second array or range of data. If omitted, TTEST will test for the difference in means between Array1 and a hypothetical mean of zero. |
| `tails` | tails - specifies the number of distribution tails to test. If omitted, the default value is 2 (which tests for a two-tailed distribution). |
| `type` | type - specifies the type of t-test to perform. If omitted, the default value is 2 (which performs a paired t-test). |


### Behavior

The `TTEST` function in spreadsheets is used to calculate the probability associated with a Student's t-test, which is used in hypothesis testing. 

- The function requires four arguments: two arrays or ranges of data, the number of tails for the test (1 or 2), and the type of t-test to perform (paired, two-sample equal variance, or two-sample unequal variance).
- If the ranges contain empty cells, these are ignored by the `TTEST` function.
- If the ranges contain text, the function will return a `#VALUE!` error.
- Booleans are treated as 1 (for TRUE) and 0 (for FALSE).
- The function will return a `#N/A` error if the ranges do not contain the same number of data points when conducting a paired t-test.
- The function will return a `#DIV/0!` error if the variance of the data in the arrays is zero.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The function returns this error when the ranges contain non-numeric values or when the tails or type arguments are not the numbers 1, 2, or 3. |
| #N/A | This error is returned when the ranges do not contain the same number of data points when conducting a paired t-test. |
| #DIV/0! | The function returns this error if the variance of the data in the arrays is zero. |

### Best practices

> - Always ensure that the data in the ranges are numeric and that they are appropriate for the type of t-test you are performing. For example, paired t-tests require pairs of data, so the ranges must contain the same number of data points.
> - Use 1 for a one-tailed distribution and 2 for a two-tailed distribution. Remember that one-tailed tests are used when the direction of the effect is predicted, while two-tailed tests are used when the direction of the effect is not predicted.
> - Be mindful of the assumptions of the t-test you are using. For example, the two-sample t-tests assume that the variances of the two populations are equal. If this assumption is not met, the test may give inaccurate results. 
> - Remember that the `TTEST` function returns the p-value of the test, not the result of the test itself. The p-value is the probability of observing a result as extreme as the test statistic, given that the null hypothesis is true. Therefore, a small p-value (typically ≤ 0.05) indicates strong evidence against the null hypothesis.

### Usage

A few examples using the TTEST function.

```
TTEST(A1:A10, B1:B10, 2, 2) returns the probability associated with a two-sample paired t-test of the ranges A1:A10 and B1:B10  
TTEST(A1:A10, 0, 1, 1) returns the probability associated with a one-sample t-test that the mean of A1:A10 is equal to 0  
TTEST(A1:A10, B1:B10, 1) returns the probability associated with a two-sample equal variance t-test of the ranges A1:A10 and B1:B10  
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
        "Group A",
        "Group B",
        "T-Test Result"
    ],
    [
        85,
        78,
        "=TTEST(A2:A6,B2:B6,2,2)"
    ],
    [
        92,
        82,
        ""
    ],
    [
        88,
        75,
        ""
    ],
    [
        91,
        80,
        ""
    ],
    [
        87,
        79,
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
        "Group A",
        "Group B",
        "T-Test Result"
    ],
    [
        85,
        78,
        "=TTEST(A2:A6,B2:B6,2,2)"
    ],
    [
        92,
        82,
        ""
    ],
    [
        88,
        75,
        ""
    ],
    [
        91,
        80,
        ""
    ],
    [
        87,
        79,
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
        "Group A",
        "Group B",
        "T-Test Result"
    ],
    [
        85,
        78,
        "=TTEST(A2:A6,B2:B6,2,2)"
    ],
    [
        92,
        82,
        ""
    ],
    [
        88,
        75,
        ""
    ],
    [
        91,
        80,
        ""
    ],
    [
        87,
        79,
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
        "Group A",
        "Group B",
        "T-Test Result"
    ],
    [
        85,
        78,
        "=TTEST(A2:A6,B2:B6,2,2)"
    ],
    [
        92,
        82,
        ""
    ],
    [
        88,
        75,
        ""
    ],
    [
        91,
        80,
        ""
    ],
    [
        87,
        79,
        ""
    ]
]
            }]
        });
    }
}
```

