title: FTEST function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FTEST function in Jspreadsheet

# FTEST function

`PRO`{.jtag}

The `FTEST` function in Jspreadsheet Formulas Pro is a statistical tool that is used to determine if there's a significant difference between the variances of two data sets. It returns a two-tailed probability value. The lower the value returned, the more likely the variances are unequal. Simply put, if you have two groups of data and you want to know if they're similar in variability, the `FTEST` function can help you figure it out.

## Documentation

Returns the result of an F-test, which returns the two-tailed probability that the variances in two data sets are equal.

### Category

Statistical

### Syntax

FTEST(array1, array2)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | The first array or range of data. |
| `array2` | The second array or range of data. |


### Behavior

The `FTEST` function in spreadsheets is used to return the result of an F-test. An F-test is a two-tailed probability that the variances in array1 and array2 are not significantly different. 

Here are some behaviors to note: 

- It is designed to handle numerical data. 
- Empty cells are ignored in the calculation.
- Texts and boolean values within the range will cause the function to return an error.
- If either array1 or array2 does not contain at least two data points, `FTEST` returns the #DIV/0! error value.
- If array1 and array2 are empty or contain less than one data point, `FTEST` returns the #N/A error value.

### Common Errors

| Error | Description |
|-------|-------------|
| #DIV/0!  | Occurs when either array1 or array2 does not contain at least two data points |
| #N/A | Occurs if array1 and array2 are empty or contain less than one data point |
| #VALUE! | Occurs if some cells in the range contain text or boolean values |

### Best practices

> - Ensure that you enter at least two data points for each array, as this function requires at least two data points in each array to calculate the result.
> - Only include numeric values in the arrays. Including non-numeric data such as text or boolean values will result in an error.
> - Remember that `FTEST` assumes that the two data sets are sampled from populations with normal distributions. Hence, the data should be tested for normality before conducting the F-test.
> - Be cautious when interpreting the result, as a low p-value does not necessarily mean the two variances are significantly different. Always consider the context of the data and the experiment.

### Usage

A few examples using the FTEST function.

```
FTEST(A2:A10,B2:B10)  
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
        "Test Scores Group A",
        "Test Scores Group B",
        "F-Test Result"
    ],
    [
        85,
        78,
        "=FTEST(A2:A6,B2:B6)"
    ],
    [
        92,
        82
    ],
    [
        88,
        85
    ],
    [
        79,
        90
    ],
    [
        91,
        87
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
        "Test Scores Group A",
        "Test Scores Group B",
        "F-Test Result"
    ],
    [
        85,
        78,
        "=FTEST(A2:A6,B2:B6)"
    ],
    [
        92,
        82
    ],
    [
        88,
        85
    ],
    [
        79,
        90
    ],
    [
        91,
        87
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
        "Test Scores Group A",
        "Test Scores Group B",
        "F-Test Result"
    ],
    [
        85,
        78,
        "=FTEST(A2:A6,B2:B6)"
    ],
    [
        92,
        82
    ],
    [
        88,
        85
    ],
    [
        79,
        90
    ],
    [
        91,
        87
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
        "Test Scores Group A",
        "Test Scores Group B",
        "F-Test Result"
    ],
    [
        85,
        78,
        "=FTEST(A2:A6,B2:B6)"
    ],
    [
        92,
        82
    ],
    [
        88,
        85
    ],
    [
        79,
        90
    ],
    [
        91,
        87
    ]
]
            }]
        });
    }
}
```

