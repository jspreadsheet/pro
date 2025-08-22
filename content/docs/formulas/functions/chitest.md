title: CHITEST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHITEST function in Jspreadsheet

# CHITEST function

`PRO`{.jtag}

The `CHITEST` function in Jspreadsheet Formulas Pro is a statistical tool that compares the actual and anticipated frequencies of certain categories within a data table. This is to see if there's a notable correlation between different variables. In simpler terms, it helps you check if what you predicted in your data matches up with what actually happened. It's a useful function for analyzing and making conclusions about your data.

## Documentation

Compares the observed and expected frequencies of categories in a contingency table to determine whether there is a significant association between the variables.

### Category

Compatibility

### Syntax

CHITEST(actual_range, expected_range)

| Parameter | Description |
| ----------- | ------------- |
| `actual_range` | A range of cells containing the observed frequency counts. Each cell must contain a non-negative number. |
| `expected_range` | A range of cells containing the expected frequency counts. Each cell must contain a non-negative number. |


### Behavior

The `CHITEST` function in spreadsheets is used to perform a chi-square test on data. It compares an observed set of values with an expected set to determine if there's a significant difference between them. The function returns a probability from the chi-square distribution.

- If the input arrays are of different size, `CHITEST` will only consider the cells up to the smallest size of the input arrays.
- `CHITEST` ignores cells with non-numeric values.
- If a cell in either array is empty or contains text, `CHITEST` will treat it as a zero.
- If a cell in either array contains a boolean value, `CHITEST` will treat TRUE as 1 and FALSE as 0.
- If any value in the expected array is less than or equal to zero, `CHITEST` will return a #NUM! error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | This error occurs when any value in the expected array is less than or equal to zero. |
| #VALUE! | This error is returned when the input arrays have different sizes. |
| #N/A | This error is returned when the input arrays are empty. |

### Best practices

> - Ensure that your observed and expected arrays are of the same size. Mismatched sizes can result in errors or inaccurate results.
> - Avoid including non-numeric values in your data ranges as they can distort your test results.
> - Make sure no value in the expected array is less than or equal to zero, as this will cause the function to return an error.
> - It's a good practice to check your output. If the p-value (the result of the `CHITEST`) is less than the significance level (often 0.05), you can reject the null hypothesis.

### Usage

A few examples using the CHITEST function.

```
CHITEST(A2:B4, C2:D4)  
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
        "Observed",
        "Treatment A",
        "Treatment B"
    ],
    [
        "Success",
        15,
        8
    ],
    [
        "Failure",
        5,
        12
    ],
    [
        "Expected",
        "Treatment A",
        "Treatment B"
    ],
    [
        "Success",
        12,
        11
    ],
    [
        "Failure",
        8,
        9
    ],
    [
        "Chi-test",
        "=CHITEST(B2:C3,B5:C6)"
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
        "Observed",
        "Treatment A",
        "Treatment B"
    ],
    [
        "Success",
        15,
        8
    ],
    [
        "Failure",
        5,
        12
    ],
    [
        "Expected",
        "Treatment A",
        "Treatment B"
    ],
    [
        "Success",
        12,
        11
    ],
    [
        "Failure",
        8,
        9
    ],
    [
        "Chi-test",
        "=CHITEST(B2:C3,B5:C6)"
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
        "Observed",
        "Treatment A",
        "Treatment B"
    ],
    [
        "Success",
        15,
        8
    ],
    [
        "Failure",
        5,
        12
    ],
    [
        "Expected",
        "Treatment A",
        "Treatment B"
    ],
    [
        "Success",
        12,
        11
    ],
    [
        "Failure",
        8,
        9
    ],
    [
        "Chi-test",
        "=CHITEST(B2:C3,B5:C6)"
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
        "Observed",
        "Treatment A",
        "Treatment B"
    ],
    [
        "Success",
        15,
        8
    ],
    [
        "Failure",
        5,
        12
    ],
    [
        "Expected",
        "Treatment A",
        "Treatment B"
    ],
    [
        "Success",
        12,
        11
    ],
    [
        "Failure",
        8,
        9
    ],
    [
        "Chi-test",
        "=CHITEST(B2:C3,B5:C6)"
    ]
]
            }]
        });
    }
}
```

