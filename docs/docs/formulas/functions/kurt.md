title: KURT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the KURT function in Jspreadsheet

# KURT function

`PRO`{.jtag}

The `KURT` function in Jspreadsheet Formulas Pro is a tool that allows you to assess the characteristics of a data set. It provides the kurtosis value, which is a measure that helps you understand whether the distribution of your data is peaked (tall and sharp) or flat (broad and shallow) compared to a normal distribution. This function can be especially useful when you need to perform advanced statistical analysis or data modeling.

## Documentation

Returns the kurtosis of a data set, which is a measure of the peakedness or flatness of the distribution, relative to the normal distribution.

### Category

Statistical

### Syntax

KURT(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number in the data set. |
| `[numberN]` | Optional. Additional numbers in the data set. |


### Behavior

The 'KURT' function in spreadsheets calculates the kurtosis of a data set, which is a measure of the shape of the distribution. This function expects a range of cells containing numerical values as input. 

- If the range of cells contains empty cells, they are ignored by the function.
- If the range contains text or boolean values, the function treats them as 0.
- The range must contain at least four values; else, the function will return a '#DIV/0!' error.
- If the range contains cells with error values, the function itself will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #DIV/0! | This error occurs when the range of cells contains less than four values. The kurtosis calculation requires at least four data points. |
| #VALUE! | This error occurs when the function encounters a cell with a non-numeric value that it cannot interpret as a number. |
| #N/A | This error occurs when the function cannot find the range specified. |

### Best practices

> - Always ensure that the range you specify contains at least four numerical values. If not, the 'KURT' function will return a '#DIV/0!' error.
> - Be cautious of non-numeric values in your data range. While the function can interpret boolean values and text that can be coerced to numbers, other text values will cause a '#VALUE!' error.
> - Use the 'KURT' function as part of exploratory data analysis to understand the shape of your data distribution. High kurtosis can indicate a lot of outliers, while low kurtosis can indicate few outliers.
> - When using 'KURT' function, remember it is sensitive to outliers. Extreme values can significantly affect the kurtosis of the distribution.

### Usage

A few examples using the KURT function.

```
KURT(A1:A10) returns the kurtosis of the values in cells A1 through A10  
KURT(1,2,3,4,5) returns the kurtosis of the values 1, 2, 3, 4, and 5  
KURT(B2:B10, C2:C10) returns the kurtosis of the values in two columns.  
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
        "Test Scores",
        "Sales Data",
        "Kurtosis Analysis"
    ],
    [
        85,
        1200,
        "=KURT(A2:A6)"
    ],
    [
        92,
        1450,
        "=KURT(B2:B6)"
    ],
    [
        78,
        980,
        "=KURT(A2:A6,B2:B6)"
    ],
    [
        88,
        1350
    ],
    [
        95,
        1680
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
        "Test Scores",
        "Sales Data",
        "Kurtosis Analysis"
    ],
    [
        85,
        1200,
        "=KURT(A2:A6)"
    ],
    [
        92,
        1450,
        "=KURT(B2:B6)"
    ],
    [
        78,
        980,
        "=KURT(A2:A6,B2:B6)"
    ],
    [
        88,
        1350
    ],
    [
        95,
        1680
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
        "Test Scores",
        "Sales Data",
        "Kurtosis Analysis"
    ],
    [
        85,
        1200,
        "=KURT(A2:A6)"
    ],
    [
        92,
        1450,
        "=KURT(B2:B6)"
    ],
    [
        78,
        980,
        "=KURT(A2:A6,B2:B6)"
    ],
    [
        88,
        1350
    ],
    [
        95,
        1680
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
        "Test Scores",
        "Sales Data",
        "Kurtosis Analysis"
    ],
    [
        85,
        1200,
        "=KURT(A2:A6)"
    ],
    [
        92,
        1450,
        "=KURT(B2:B6)"
    ],
    [
        78,
        980,
        "=KURT(A2:A6,B2:B6)"
    ],
    [
        88,
        1350
    ],
    [
        95,
        1680
    ]
]
            }]
        });
    }
}
```

