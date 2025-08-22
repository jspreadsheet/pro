title: AVERAGEA Function - Calculate Average Including Text and Logical Values in Jspreadsheet
keywords: AVERAGEA function, mixed data average, text and number averaging, logical value averaging, Excel-compatible functions, JavaScript spreadsheet functions, statistical calculations, data analysis, boolean averaging, comprehensive averaging, mixed type calculations
description: Calculate averages of mixed data types using the AVERAGEA function in Jspreadsheet. Perfect for datasets containing numbers, text, and logical values, where text is treated as 0 and TRUE/FALSE as 1/0.

# AVERAGEA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

`AVERAGEA` is a function in Jspreadsheet Formulas Pro that calculates the average or arithmetic mean of its arguments. It is versatile as it can handle different types of data such as numbers, text, and logical values. For instance, it treats logical values as numbers (TRUE as 1 and FALSE as 0) and text is considered as zero. This function is useful when you want to find the average of a certain dataset that contains diverse types of data.

## Documentation

Returns the average (arithmetic mean) of the arguments, including numbers, text, and logical values.

### Category

Statistical

### Syntax

AVERAGEA(value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The first value or range of values for which to calculate the average. |
| `valueN` | Optional. Additional value for which to calculate the average. |


### Behavior

The `AVERAGEA` function in spreadsheets calculates the average of the values in the list of arguments. The arguments can be numbers, text, logical values, or empty cells. Here's how it handles different types of data:

- **Numbers**: It includes numbers in the average calculation.
- **Text**: Text (strings) are counted as 0 in the average calculation.
- **Booleans**: `TRUE` is counted as 1 and `FALSE` is counted as 0 in the average calculation.
- **Errors**: If any cell in the range contains an error, the `AVERAGEA` function will return an error.
- **Empty cells**: These are ignored by the `AVERAGEA` function.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | This error occurs when there are no rows in the column you are trying to average. In other words, when the denominator is zero. |
| #VALUE! | This error occurs when the input range contains a cell with text, and `AVERAGEA` cannot interpret the text as a number, boolean, or empty cell. |
| #NAME? | This error occurs when the spreadsheet does not recognize the name of the function, possibly due to a typo. |

### Best practices

> - Be aware that the `AVERAGEA` function treats text and `FALSE` as 0, and `TRUE` as 1. If you only want to average numbers, use the `AVERAGE` function instead.
> - Always check your data for errors before applying the `AVERAGEA` function, as it will return an error if there's an error in the cells being averaged.
> - Be mindful of empty cells in your range, as they are ignored by the `AVERAGEA` function. If you want to count empty cells as zeros, you might need to replace them with zero before applying the function.
> - Make sure that your range includes the correct cells you want to average. If your range is too large or too small, the average could be skewed.

### Usage

A few examples using the AVERAGEA function.

```
AVERAGEA(1, 2, 3, '4', TRUE, FALSE)  
AVERAGEA(-2, -1, 0, '1', '2')  
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
        "Score",
        "Pass/Fail",
        "Average"
    ],
    [
        "Alice",
        85,
        "TRUE",
        "=AVERAGEA(B2:C4)"
    ],
    [
        "Bob",
        72,
        "FALSE"
    ],
    [
        "Carol",
        "90",
        "TRUE"
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
        "Score",
        "Pass/Fail",
        "Average"
    ],
    [
        "Alice",
        85,
        "TRUE",
        "=AVERAGEA(B2:C4)"
    ],
    [
        "Bob",
        72,
        "FALSE"
    ],
    [
        "Carol",
        "90",
        "TRUE"
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
        "Score",
        "Pass/Fail",
        "Average"
    ],
    [
        "Alice",
        85,
        "TRUE",
        "=AVERAGEA(B2:C4)"
    ],
    [
        "Bob",
        72,
        "FALSE"
    ],
    [
        "Carol",
        "90",
        "TRUE"
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
        "Score",
        "Pass/Fail",
        "Average"
    ],
    [
        "Alice",
        85,
        "TRUE",
        "=AVERAGEA(B2:C4)"
    ],
    [
        "Bob",
        72,
        "FALSE"
    ],
    [
        "Carol",
        "90",
        "TRUE"
    ]
]
            }]
        });
    }
}
```

