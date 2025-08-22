title: SUM Function - Calculate Totals and Aggregate Values | Data Analysis | Jspreadsheet
keywords: SUM function, total calculator, data aggregation, financial summation, sales calculations, expense totaling, Excel-compatible calculations, JavaScript spreadsheet functions, numeric series addition, range calculations, business analytics, data processing, column totals, row summation, multi-range calculations
description: Efficiently calculate totals and aggregate values with the SUM function in Jspreadsheet. Perfect for financial reports, sales analysis, expense tracking, and any scenario requiring precise summation of multiple numbers or ranges.

# SUM function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `SUM` function is utilized to add together a group of numbers or cells. It's a simple and effective tool for calculating totals in your spreadsheet. Essentially, you specify the range of cells you want to sum up, and the function does the work for you. Whether you're adding up a column of expenses, sales number or a list of hours, the `SUM` function makes it quick and easy.

## Documentation

Returns the sum of a range of numbers or cells.

### Category

Math and trigonometry

### Syntax

SUM(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range to add. |
| `number2` | Optional. Additional numbers or ranges to add. |


### Behavior

The `SUM` function in a spreadsheet is used to add up all the numbers in a range of cells. Here's how it handles different scenarios:

- Empty Cells: When the `SUM` function encounters an empty cell in the range, it simply ignores it and moves on to the next cell.
- Text: If a cell contains text, the `SUM` function will treat it as a zero.
- Booleans: In Google Sheets, the `SUM` function treats `TRUE` as 1 and `FALSE` as 0. However, in Excel, boolean values are ignored by the `SUM` function.
- Errors: If any cell in the range contains an error, the `SUM` function will return an error.
- Dates: In Excel, dates are stored as serial numbers, so the `SUM` function will return the sum of the serial numbers. In Google Sheets, `SUM` function will return a number that may not make sense.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the function encounters a cell with text. |
| #NUM! | This error occurs when the function encounters a cell with a number that is too large or too small. |
| #REF! | This error occurs when the formula references a cell that doesn't exist. |
| #N/A | This error occurs when the function can't find the value it's looking for. |
| #DIV/0! | This error occurs when the function tries to divide by zero. |

### Best practices

> - Always double-check your range to make sure you're not including any cells with text or errors, as this can cause the `SUM` function to return an error.
> - Be aware of how the `SUM` function treats different types of data (numbers, booleans, dates, etc.) to avoid unexpected results.
> - Instead of manually entering each cell reference, use the colon (:) to create a continuous range (e.g., A1:A10).
> - Regularly update and maintain your data to avoid errors in your `SUM` calculations.

### Usage

A few examples using the SUM function.

```
SUM(5, 10, 15) returns 30  
SUM(A2:A6) returns the sum of the values in cells A2 through A6  
SUM(B2:B6, D2:D6) returns the sum of the values in both ranges B2 through B6 and D2 through D6  
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
        "Product",
        "Q1 Sales",
        "Q2 Sales",
        "Total Sales"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=SUM(B2:C2)"
    ],
    [
        "Phones",
        12500,
        14200,
        "=SUM(B3:C3)"
    ],
    [
        "Tablets",
        8300,
        9100,
        "=SUM(B4:C4)"
    ],
    [
        "TOTAL",
        "=SUM(B2:B4)",
        "=SUM(C2:C4)",
        "=SUM(D2:D4)"
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
        "Product",
        "Q1 Sales",
        "Q2 Sales",
        "Total Sales"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=SUM(B2:C2)"
    ],
    [
        "Phones",
        12500,
        14200,
        "=SUM(B3:C3)"
    ],
    [
        "Tablets",
        8300,
        9100,
        "=SUM(B4:C4)"
    ],
    [
        "TOTAL",
        "=SUM(B2:B4)",
        "=SUM(C2:C4)",
        "=SUM(D2:D4)"
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
        "Product",
        "Q1 Sales",
        "Q2 Sales",
        "Total Sales"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=SUM(B2:C2)"
    ],
    [
        "Phones",
        12500,
        14200,
        "=SUM(B3:C3)"
    ],
    [
        "Tablets",
        8300,
        9100,
        "=SUM(B4:C4)"
    ],
    [
        "TOTAL",
        "=SUM(B2:B4)",
        "=SUM(C2:C4)",
        "=SUM(D2:D4)"
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
        "Product",
        "Q1 Sales",
        "Q2 Sales",
        "Total Sales"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=SUM(B2:C2)"
    ],
    [
        "Phones",
        12500,
        14200,
        "=SUM(B3:C3)"
    ],
    [
        "Tablets",
        8300,
        9100,
        "=SUM(B4:C4)"
    ],
    [
        "TOTAL",
        "=SUM(B2:B4)",
        "=SUM(C2:C4)",
        "=SUM(D2:D4)"
    ]
]
            }]
        });
    }
}
```

