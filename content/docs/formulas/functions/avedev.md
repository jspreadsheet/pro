title: AVEDEV Function - Calculate Average Absolute Deviation in Jspreadsheet
keywords: AVEDEV function, average deviation, statistical analysis, data variability, Excel-compatible functions, JavaScript spreadsheet functions, statistical calculations, data analysis, variance measurement, mean absolute deviation, statistical dispersion, data spread analysis
description: Calculate the average absolute deviation of data points using the AVEDEV function in Jspreadsheet. Perfect for statistical analysis, data variability assessment, and understanding the spread of values around their mean.

# AVEDEV function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `AVEDEV` function is used to calculate the average of the absolute differences between each data point and the overall mean. This helps in understanding the variability in a set of data points. You simply input your data range into the function and it will provide the average deviation. It's a valuable tool in statistical analysis within Jspreadsheet.

## Documentation

Returns the average of the absolute deviations of data points from their mean.

### Category

Statistical

### Syntax

AVEDEV(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers for which to calculate the average of the absolute deviations. |
| `numberN` | Optional. Additional numbers or ranges of numbers for which to calculate the average of the absolute deviations. |


### Behavior

The 'AVEDEV' function in spreadsheets calculates the average of the absolute deviations of data points from their mean. It's used to understand the volatility in a data set. Here's how it handles various inputs:

- **Empty Cells**: If the cell range provided to the 'AVEDEV' function includes empty cells, those cells are ignored in the calculation.
- **Text**: Text values in the cell range provided to the 'AVEDEV' function are ignored.
- **Booleans**: Boolean values in the cell range are treated as numerical values in the 'AVEDEV' function. Specifically, TRUE is treated as 1 and FALSE is treated as 0.
- **Errors**: If the cell range includes cells with error values, the 'AVEDEV' function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when the function does not find any numeric values in the range of cells. |
| #DIV/0! | This error is returned when the function tries to divide by zero, which may occur if the function is applied to an empty range. |
| #N/A | This error is returned if there are any cells with #N/A error in the range. |

### Best practices

> - Ensure that the range of cells provided to the 'AVEDEV' function includes at least one numeric value to avoid the #VALUE! error.
> - Cleanse your data before applying the 'AVEDEV' function to avoid any errors in the calculation. Remove any error values from the cell range.
> - If you have boolean values in your data set, remember that they will be treated as numerical values (1 for TRUE and 0 for FALSE) in the calculation.
> - Use the 'AVEDEV' function in combination with other statistical functions for a more comprehensive analysis of your data set.

### Usage

A few examples using the AVEDEV function.

```
AVEDEV(1, 2, 3, 4, 5) returns 1.2  
AVEDEV([2,4,6,8], [1,3,5,7])  
AVEDEV(-2, -1, 0, 1, 2)  
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
        "Average Deviation"
    ],
    [
        "Alice",
        85,
        "=AVEDEV(B2:B6)"
    ],
    [
        "Bob",
        92,
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "Dave",
        88,
        ""
    ],
    [
        "Eve",
        82,
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
        "Student",
        "Test Score",
        "Average Deviation"
    ],
    [
        "Alice",
        85,
        "=AVEDEV(B2:B6)"
    ],
    [
        "Bob",
        92,
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "Dave",
        88,
        ""
    ],
    [
        "Eve",
        82,
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
        "Student",
        "Test Score",
        "Average Deviation"
    ],
    [
        "Alice",
        85,
        "=AVEDEV(B2:B6)"
    ],
    [
        "Bob",
        92,
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "Dave",
        88,
        ""
    ],
    [
        "Eve",
        82,
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
        "Student",
        "Test Score",
        "Average Deviation"
    ],
    [
        "Alice",
        85,
        "=AVEDEV(B2:B6)"
    ],
    [
        "Bob",
        92,
        ""
    ],
    [
        "Carol",
        78,
        ""
    ],
    [
        "Dave",
        88,
        ""
    ],
    [
        "Eve",
        82,
        ""
    ]
]
            }]
        });
    }
}
```

