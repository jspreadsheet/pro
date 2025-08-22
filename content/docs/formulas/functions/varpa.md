title: VARPA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VARPA function in Jspreadsheet

# VARPA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `VARPA` function in Jspreadsheet Formulas Pro is a tool that helps you calculate the variance across a whole set of data, which could be a complete population. This function considers all data types, including numbers and logical values (like true or false). The variance gives you an understanding of how much your data varies or deviates from the average, helping you make more accurate predictions or decisions based on that data.

## Documentation

Calculates the variance based on an entire population, including numbers, and logical values.

### Category

Statistical

### Syntax

VARPA(value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value or range of values that you want to calculate the variance of. At least one value is required. |
| `value` | Optional. Additional values or ranges of values that you want to include in the calculation. You can include up to 255 values or ranges. The values can be numbers, or logical values (TRUE or FALSE). |


### Behavior

The `VARPA` function in a spreadsheet is used to calculate the variance of a population, taking into consideration text and boolean values as well. The function calculates the variance based on the entire population and assumes that the provided data is the entire population.

- If the dataset contains boolean values, `VARPA` will treat `TRUE` as 1 and `FALSE` as 0.
- If the dataset contains text representations of numbers, `VARPA` will interpret them as numbers and include them in the calculation.
- If the dataset contains text that cannot be interpreted as numbers, `VARPA` will treat them as zeros.
- Empty cells within the dataset are ignored by the `VARPA` function.
- If the function encounters an error in a cell, it will return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #DIV/0! | This error occurs when there are less than two data points in the dataset, as variance requires at least two data points to be calculated. |
| #VALUE! | This error occurs when the function encounters a cell with a non-numeric value that cannot be interpreted as a number or boolean. |
| #N/A | This error occurs when the function encounters a cell with the `#N/A` error. |

### Best practices

> - Ensure that your data is indeed the entire population before using the `VARPA` function. If your data is a sample of the population, consider using the `VAR.S` function instead.
> - Keep in mind that `VARPA` function treats text representations of numbers and booleans as numbers. If this is not your intended behavior, you may need to clean up your data before applying `VARPA`.
> - Remember that the `VARPA` function ignores empty cells. If you want to treat empty cells as zeros, you will need to fill them in before executing the function.
> - Check your data for errors before applying the `VARPA` function, as encountering an error will cause the function to return that error.

### Usage

A few examples using the VARPA function.

```
VARPA(1, TRUE)  
VARPA(A1:A10)  
VARPA(B1:B10, C1:C10)  
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
        "Pass/Fail"
    ],
    [
        "Alice",
        85,
        true
    ],
    [
        "Bob",
        72,
        false
    ],
    [
        "Carol",
        91,
        true
    ],
    [
        "David",
        68,
        false
    ],
    [
        "Population Variance:",
        "=VARPA(B2:B5)",
        "=VARPA(C2:C5)"
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
        "Pass/Fail"
    ],
    [
        "Alice",
        85,
        true
    ],
    [
        "Bob",
        72,
        false
    ],
    [
        "Carol",
        91,
        true
    ],
    [
        "David",
        68,
        false
    ],
    [
        "Population Variance:",
        "=VARPA(B2:B5)",
        "=VARPA(C2:C5)"
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
        "Pass/Fail"
    ],
    [
        "Alice",
        85,
        true
    ],
    [
        "Bob",
        72,
        false
    ],
    [
        "Carol",
        91,
        true
    ],
    [
        "David",
        68,
        false
    ],
    [
        "Population Variance:",
        "=VARPA(B2:B5)",
        "=VARPA(C2:C5)"
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
        "Pass/Fail"
    ],
    [
        "Alice",
        85,
        true
    ],
    [
        "Bob",
        72,
        false
    ],
    [
        "Carol",
        91,
        true
    ],
    [
        "David",
        68,
        false
    ],
    [
        "Population Variance:",
        "=VARPA(B2:B5)",
        "=VARPA(C2:C5)"
    ]
]
            }]
        });
    }
}
```

