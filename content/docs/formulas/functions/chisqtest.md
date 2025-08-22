title: CHISQ.TEST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CHISQ.TEST function in Jspreadsheet

# CHISQ.TEST function

`PRO`{.jtag}

The `CHISQ.TEST` function in Jspreadsheet Formulas Pro is a statistical tool that checks the independence of two sets of data. Essentially, it helps determine if there is a significant association between the two variables in your data sets. It does this by comparing your observed data with what would be expected if the variables were independent of each other. The function returns a value between 0 and 1, where a lower value indicates a higher likelihood that your data sets are not independent.

## Documentation

Returns the test for independence.

### Category

Statistical

### Syntax

CHISQ.TEST(actual_range, expected_range)

| Parameter | Description |
| ----------- | ------------- |
| `actual_range` | A range of cells containing the observed frequency counts. Each cell must contain a non-negative number. |
| `expected_range` | A range of cells containing the expected frequency counts. Each cell must contain a non-negative number. |


### Behavior

The 'CHISQ.TEST' function in spreadsheets is used to perform a chi-square test on two ranges of data. It's used to analyze the association between two categorical variables. It returns the probability associated with a chi-square distribution. The higher the function's value, the more likely the observed and expected counts are different.

- When given two ranges of equal size, 'CHISQ.TEST' will perform the test on corresponding values in the ranges. 

- If the ranges contain empty cells, those cells are ignored and the pair of values is not included in the calculation. 

- If the ranges contain text or boolean values, the function will return a '#VALUE!' error.

- The function requires that the ranges contain only positive numbers. If a range contains a negative number, the function will return a '#NUM!' error.

- If the observed or expected frequencies are too small (generally less than 5), the chi-square test may not be valid and could give inaccurate results.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when one or both of the input ranges contain non-numeric values such as text or boolean. |
| #NUM! | This error is returned when one or both of the input ranges contain negative numbers or when the ranges are of different sizes. |
| #N/A | This error is returned when the given ranges are empty. |

### Best practices

> - Always ensure that your data ranges are of the same size. Mismatched ranges will result in a '#NUM!' error.
> - Ensure that your data ranges contain only positive numerical values. Text, boolean values, or negative numbers will cause the function to return an error.
> - The CHISQ.TEST function is most accurate when used with larger sample sizes. If your sample size is small, consider using a different statistical test.
> - Be wary of expected frequencies that are too small, as the chi-square test may not give accurate results in these cases.

### Usage

A few examples using the CHISQ.TEST function.

```
CHISQ.TEST(A2:B4, C2:D4)  
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
        "Male",
        "Female"
    ],
    [
        "Prefer A",
        20,
        30
    ],
    [
        "Prefer B",
        25,
        15
    ],
    [
        "Expected",
        "Male",
        "Female"
    ],
    [
        "Prefer A",
        22.5,
        27.5
    ],
    [
        "Prefer B",
        22.5,
        17.5
    ],
    [
        "Chi-Square Test",
        "=CHISQ.TEST(B2:C3,B5:C6)"
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
        "Male",
        "Female"
    ],
    [
        "Prefer A",
        20,
        30
    ],
    [
        "Prefer B",
        25,
        15
    ],
    [
        "Expected",
        "Male",
        "Female"
    ],
    [
        "Prefer A",
        22.5,
        27.5
    ],
    [
        "Prefer B",
        22.5,
        17.5
    ],
    [
        "Chi-Square Test",
        "=CHISQ.TEST(B2:C3,B5:C6)"
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
        "Male",
        "Female"
    ],
    [
        "Prefer A",
        20,
        30
    ],
    [
        "Prefer B",
        25,
        15
    ],
    [
        "Expected",
        "Male",
        "Female"
    ],
    [
        "Prefer A",
        22.5,
        27.5
    ],
    [
        "Prefer B",
        22.5,
        17.5
    ],
    [
        "Chi-Square Test",
        "=CHISQ.TEST(B2:C3,B5:C6)"
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
        "Male",
        "Female"
    ],
    [
        "Prefer A",
        20,
        30
    ],
    [
        "Prefer B",
        25,
        15
    ],
    [
        "Expected",
        "Male",
        "Female"
    ],
    [
        "Prefer A",
        22.5,
        27.5
    ],
    [
        "Prefer B",
        22.5,
        17.5
    ],
    [
        "Chi-Square Test",
        "=CHISQ.TEST(B2:C3,B5:C6)"
    ]
]
            }]
        });
    }
}
```

