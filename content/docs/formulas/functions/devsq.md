title: DEVSQ function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DEVSQ function in Jspreadsheet

# DEVSQ function

`PRO`{.jtag}

The `DEVSQ` function in Jspreadsheet Formulas Pro is a tool that helps you measure the variability within a set of data. It works by calculating the total of the squared differences between each data point and the average of all data points. This is useful in statistics as it can provide insight into how spread out your data is around the average. This function is often used in various scientific and financial calculations.

## Documentation

Calculates the sum of squares of deviations from the mean of a dataset.

### Category

Statistical

### Syntax

DEVSQ(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number in the dataset. |
| `numberN` | Optional. Additional numbers or ranges containing numbers you want to include in the calculation. |


### Behavior

The `DEVSQ` function in spreadsheet programs like Google Sheets and Microsoft Excel is used to calculate the sum of squares of deviations from the mean in a data set. Here's how it handles different types of data:

- **Empty cells**: Any empty cells within the range of values are ignored by the `DEVSQ` function.
- **Text**: If the range includes text, the `DEVSQ` function will ignore these cells.
- **Booleans**: Boolean values are interpreted as numbers: TRUE as 1 and FALSE as 0.
- **Errors**: If any cells in the range contain errors, the `DEVSQ` function will return an error.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #DIV/0! | This error occurs if you are using the `DEVSQ` function with a dataset that only contains one number or all the numbers in your dataset are the same. Since there is no deviation from the mean, the function won't be able to calculate the sum of squares of deviations and will return this error. |
| #VALUE! | This error is returned if any of the arguments provided to the `DEVSQ` function are not numeric values. |
| #N/A | This error is returned if no data points are provided to the function. |

### Best practices

> - Always ensure that the range of values provided to the `DEVSQ` function contains numerical data. Any text values should be cleaned up or converted to numbers before running this function.
> - Be careful when using this function with datasets that contain only one unique number, as this will result in a #DIV/0! error.
> - Despite the fact that `DEVSQ` can handle Boolean values, it is generally advisable to convert these to numerical format to avoid confusion and potential errors.
> - Use the `DEVSQ` function in combination with other statistical functions for a deeper analysis of your data. For instance, you can use it to calculate the standard deviation or variance of a dataset.

### Usage

A few examples using the DEVSQ function.

```
DEVSQ(1,2,3,4,5) returns 10  
DEVSQ(A1:A5) returns the sum of squares of deviations from the mean for the range A1:A5  
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
        "Student Scores",
        "Analysis"
    ],
    [
        85,
        "=DEVSQ(A2:A6)"
    ],
    [
        92
    ],
    [
        78
    ],
    [
        88
    ],
    [
        82
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
        "Student Scores",
        "Analysis"
    ],
    [
        85,
        "=DEVSQ(A2:A6)"
    ],
    [
        92
    ],
    [
        78
    ],
    [
        88
    ],
    [
        82
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
        "Student Scores",
        "Analysis"
    ],
    [
        85,
        "=DEVSQ(A2:A6)"
    ],
    [
        92
    ],
    [
        78
    ],
    [
        88
    ],
    [
        82
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
        "Student Scores",
        "Analysis"
    ],
    [
        85,
        "=DEVSQ(A2:A6)"
    ],
    [
        92
    ],
    [
        78
    ],
    [
        88
    ],
    [
        82
    ]
]
            }]
        });
    }
}
```

