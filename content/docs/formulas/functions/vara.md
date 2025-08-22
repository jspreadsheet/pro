title: VARA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VARA function in Jspreadsheet

# VARA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `VARA` function in Jspreadsheet Formulas Pro is a tool that estimates the variance in a sample of data. This data can include numbers, text, and logical values, making it versatile for different types of data analysis. Essentially, it measures how much the data points in your sample differ from the average value of the sample. It's a useful tool in statistical analysis when you need to understand the spread or variability of your data.

## Documentation

Estimates the variance based on a sample, including numbers, text, and logical values.

### Category

Statistical

### Syntax

VARA(value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value or range of values that you want to calculate the variance of. At least one value is required. |
| `[valueN]` | Additional values or ranges of values that you want to include in the calculation. You can include up to 255 values or ranges. The values can be numbers, text, or logical values (TRUE or FALSE). |


### Behavior

The `VARA` function in spreadsheets is used to estimate the variance of a sample, including text and logical values. It calculates and returns the variance based on a sample. 

- If the data set includes logical values or text representations of numbers, `VARA` includes them in the calculation whereas the regular `VAR` function would ignore them.
- If the data set includes text that cannot be translated into numbers, `VARA` interprets them as zeroes.
- If the data set includes logical values, `VARA` translates `TRUE` as 1 and `FALSE` as 0.
- If a cell in the reference or range is an empty cell, `VARA` ignores it.
- If the data set includes error values, `VARA` returns an error.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | This error occurs when the data set only contains one number or an empty cell. Variance requires at least two numbers to be calculated. |
| #VALUE! | This error occurs when the function is used incorrectly. For example, including a string of text as an argument that doesn't represent a logical value or number. |
| #NAME? | This error occurs when the function name is spelled incorrectly or is not recognized by Excel. |
| #N/A | This error occurs when some cells in the range are not available or do not exist. |

### Best practices

> - Always ensure the data set contains at least two numbers to avoid the #DIV/0! error.
> - Be aware that `VARA` interprets text and logical values differently than other statistical functions. It might be more appropriate to use `VAR` if your data set includes these types of values and you want to ignore them.
> - Keep in mind that `VARA` treats logical values and number-stored-as-text differently than `VAR`. Make sure you are using the function that best suits your data.
> - Check your data set to ensure there are no non-numeric values that could cause errors. If there are, you may need to clean your data before using the `VARA` function.

### Usage

A few examples using the VARA function.

```
VARA(A1:A10) returns the variance of the values in cells A1 through A10, which can be a combination of numbers, text, and logical values  
VARA(B1:B10, C1:C10) returns the variance of the combined sets of values in cells B1 through B10 and C1 through C10, which can also include a mix of numbers, text, and logical values.  
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
        "Survey Response",
        "Rating",
        "Comments"
    ],
    [
        85,
        "Good",
        "TRUE"
    ],
    [
        92,
        "Excellent",
        "FALSE"
    ],
    [
        "N/A",
        78,
        "TRUE"
    ],
    [
        88,
        "Fair",
        "FALSE"
    ],
    [
        "=VARA(A2:C5)",
        "",
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
        "Survey Response",
        "Rating",
        "Comments"
    ],
    [
        85,
        "Good",
        "TRUE"
    ],
    [
        92,
        "Excellent",
        "FALSE"
    ],
    [
        "N/A",
        78,
        "TRUE"
    ],
    [
        88,
        "Fair",
        "FALSE"
    ],
    [
        "=VARA(A2:C5)",
        "",
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
        "Survey Response",
        "Rating",
        "Comments"
    ],
    [
        85,
        "Good",
        "TRUE"
    ],
    [
        92,
        "Excellent",
        "FALSE"
    ],
    [
        "N/A",
        78,
        "TRUE"
    ],
    [
        88,
        "Fair",
        "FALSE"
    ],
    [
        "=VARA(A2:C5)",
        "",
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
        "Survey Response",
        "Rating",
        "Comments"
    ],
    [
        85,
        "Good",
        "TRUE"
    ],
    [
        92,
        "Excellent",
        "FALSE"
    ],
    [
        "N/A",
        78,
        "TRUE"
    ],
    [
        88,
        "Fair",
        "FALSE"
    ],
    [
        "=VARA(A2:C5)",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

