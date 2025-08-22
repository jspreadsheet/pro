title: GEOMEAN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GEOMEAN function in Jspreadsheet

# GEOMEAN function

`PRO`{.jtag}

The `GEOMEAN` function in Jspreadsheet Formulas Pro is a tool that calculates the geometric mean of a set of positive numbers. This is particularly useful when you want to determine the average rate of return of an investment over multiple periods. Instead of simply adding up all the values and dividing by the number of data points, `GEOMEAN` multiplies them together and then takes the nth root of the result, where n equals the total number of values. This provides a more accurate representation of the data set as a whole.

## Documentation

Returns the geometric mean of an array or range of positive numeric data.

### Category

Statistical

### Syntax

GEOMEAN(number1,[number2],...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers for which to calculate the geometric mean. |
| `[numberN]` | Optional. Additional numbers or ranges of numbers for which to calculate the geometric mean, up to a maximum of 255 values. |


### Behavior

The `GEOMEAN` function calculates the geometric mean of a dataset. It expects a range of cells containing numeric values. Here's how it handles different types of data:

- Empty Cells: The function ignores empty cells and they don't affect the result.
- Text: If a cell contains text, `GEOMEAN` returns a `#VALUE!` error.
- Booleans: Booleans are treated as numbers: `TRUE` as 1 and `FALSE` as 0.
- Errors: If a cell contains an error, `GEOMEAN` also returns that error.
- Negative Numbers or Zero: `GEOMEAN` returns a `#NUM!` error if any cell in the range contains a negative number or zero, as geometric mean is undefined for these values.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned when one or more of the cells in the input range contains text. |
| `#NUM!` | This error is returned when one or more of the cells in the input range contains a negative number or zero. |
| `#DIV/0!` | This error is returned when all cells in the input range are empty or contain text. |

### Best practices

> - Always ensure that the range of cells used as arguments to the `GEOMEAN` function contain numeric values. Avoid using ranges that may contain text or errors.
> - Avoid including negative numbers or zero in the dataset for geometric mean calculation as it will return a `#NUM!` error.
> - Use the `IFERROR` function to handle potential errors in a graceful manner. This function allows you to specify a custom output if `GEOMEAN` returns an error.
> - Keep in mind that the `GEOMEAN` function is designed to work with positive numbers. The geometric mean is a measure of central tendency that is especially relevant when dealing with products or ratios.

### Usage

A few examples using the GEOMEAN function.

```
GEOMEAN(10,100,1000) returns 100  
GEOMEAN([1,2,3,4,5]) returns 2.605171084  
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
        "Investment Returns (%)",
        "Year 1",
        "Year 2",
        "Year 3",
        "Geometric Mean"
    ],
    [
        "Stock A",
        8,
        12,
        15,
        "=GEOMEAN(B2:D2)"
    ],
    [
        "Stock B",
        5,
        18,
        9,
        "=GEOMEAN(B3:D3)"
    ],
    [
        "Stock C",
        20,
        6,
        11,
        "=GEOMEAN(B4:D4)"
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
        "Investment Returns (%)",
        "Year 1",
        "Year 2",
        "Year 3",
        "Geometric Mean"
    ],
    [
        "Stock A",
        8,
        12,
        15,
        "=GEOMEAN(B2:D2)"
    ],
    [
        "Stock B",
        5,
        18,
        9,
        "=GEOMEAN(B3:D3)"
    ],
    [
        "Stock C",
        20,
        6,
        11,
        "=GEOMEAN(B4:D4)"
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
        "Investment Returns (%)",
        "Year 1",
        "Year 2",
        "Year 3",
        "Geometric Mean"
    ],
    [
        "Stock A",
        8,
        12,
        15,
        "=GEOMEAN(B2:D2)"
    ],
    [
        "Stock B",
        5,
        18,
        9,
        "=GEOMEAN(B3:D3)"
    ],
    [
        "Stock C",
        20,
        6,
        11,
        "=GEOMEAN(B4:D4)"
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
        "Investment Returns (%)",
        "Year 1",
        "Year 2",
        "Year 3",
        "Geometric Mean"
    ],
    [
        "Stock A",
        8,
        12,
        15,
        "=GEOMEAN(B2:D2)"
    ],
    [
        "Stock B",
        5,
        18,
        9,
        "=GEOMEAN(B3:D3)"
    ],
    [
        "Stock C",
        20,
        6,
        11,
        "=GEOMEAN(B4:D4)"
    ]
]
            }]
        });
    }
}
```

