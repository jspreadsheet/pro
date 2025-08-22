title: AVERAGE Function - Calculate Arithmetic Mean in Jspreadsheet
keywords: AVERAGE function, arithmetic mean, statistical calculations, data analysis, Excel-compatible functions, JavaScript spreadsheet functions, mean calculation, central tendency, data averaging, numerical analysis, statistical functions, average calculation
description: Calculate the arithmetic mean (average) of numbers using the AVERAGE function in Jspreadsheet. Essential for data analysis, statistical calculations, and finding the central tendency in numerical datasets.

# AVERAGE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `AVERAGE` function in Jspreadsheet Formulas Pro is a fundamental statistical tool that calculates the arithmetic mean of a set of numbers. It's essential for:

- Analyzing data trends and patterns
- Computing average performance metrics
- Summarizing financial data
- Calculating central tendencies
- Normalizing data sets

The function works by summing all numeric values in the provided range and dividing by the count of numbers, automatically handling empty cells and non-numeric values. This makes it a versatile tool for both simple calculations and complex data analysis.

## Documentation

Returns the average (arithmetic mean) of the arguments.

### Category

Statistical

### Syntax

AVERAGE(number1, [number2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number or range of numbers for which to calculate the average. |
| `numberN` | Optional. Additional numbers or ranges of numbers for which to calculate the average. |


### Behavior

The `AVERAGE` function in spreadsheets calculates the average (arithmetic mean) of the supplied numbers. Here is how it handles different types of data:

- **Numbers**: The function includes any cell containing a number in the calculation.
- **Empty cells**: The function ignores empty cells.
- **Text**: If a cell contains text, the function will ignore it.
- **Booleans**: In Google Sheets, `TRUE` is interpreted as 1 and `FALSE` is interpreted as 0. Excel, however, ignores boolean values.
- **Errors**: If a cell contains an error, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | This error occurs when there are no numeric values in the cells specified for the function. |
| #VALUE! | This error occurs when the function is supplied with a wrong data type, like a string of text where a number is expected. |
| #NAME? | This error is returned when the spreadsheet does not recognize the function name. This might happen if you typed the function name incorrectly. |

### Best practices

> - Try to keep your data clean and uniform. Remove any text in cells that are supposed to contain numbers, as the `AVERAGE` function will ignore any cell with text.
> - Be aware of how your spreadsheet software handles boolean values. In Google Sheets, `TRUE` is treated as 1 and `FALSE` as 0. Excel, however, ignores these values.
> - Always check for errors in your data to avoid receiving an error from the `AVERAGE` function.
> - Use the `AVERAGE` function with other functions like `COUNT` or `SUM` to derive more complex calculations.

### Usage Examples

Here are several practical examples of using the AVERAGE function:

**Basic Average Calculation:**
```
AVERAGE(1, 2, 3, 4, 5) returns 3
// Simple average of consecutive numbers
```

**Working with Multiple Ranges:**
```
AVERAGE([2,4,6,8], [1,3,5,7]) returns 4.5
// Averaging numbers from different ranges
```

**Handling Positive and Negative Values:**
```
AVERAGE(-2, -1, 0, 1, 2) returns 0
// Demonstrates balanced positive/negative values
```

**Real-world Examples:**

1. **Sales Performance:**
```
=AVERAGE(B2:B31)
// Average daily sales for a month
```

2. **Student Grades:**
```
=AVERAGE(C2:C25)
// Class average from student scores
```

3. **Temperature Monitoring:**
```
=AVERAGE(D1:D96)
// Average hourly temperature over 4 days
```

4. **Financial Analysis:**
```
=AVERAGE(E5:E16)
// Monthly average expenses for a year
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
        "Test 1",
        "Test 2",
        "Test 3",
        "Average"
    ],
    [
        "Alice",
        85,
        92,
        78,
        "=AVERAGE(B2:D2)"
    ],
    [
        "Bob",
        90,
        88,
        95,
        "=AVERAGE(B3:D3)"
    ],
    [
        "Carol",
        76,
        82,
        89,
        "=AVERAGE(B4:D4)"
    ],
    [
        "Class Average",
        "=AVERAGE(B2:B4)",
        "=AVERAGE(C2:C4)",
        "=AVERAGE(D2:D4)",
        "=AVERAGE(B2:D4)"
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
        "Test 1",
        "Test 2",
        "Test 3",
        "Average"
    ],
    [
        "Alice",
        85,
        92,
        78,
        "=AVERAGE(B2:D2)"
    ],
    [
        "Bob",
        90,
        88,
        95,
        "=AVERAGE(B3:D3)"
    ],
    [
        "Carol",
        76,
        82,
        89,
        "=AVERAGE(B4:D4)"
    ],
    [
        "Class Average",
        "=AVERAGE(B2:B4)",
        "=AVERAGE(C2:C4)",
        "=AVERAGE(D2:D4)",
        "=AVERAGE(B2:D4)"
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
        "Test 1",
        "Test 2",
        "Test 3",
        "Average"
    ],
    [
        "Alice",
        85,
        92,
        78,
        "=AVERAGE(B2:D2)"
    ],
    [
        "Bob",
        90,
        88,
        95,
        "=AVERAGE(B3:D3)"
    ],
    [
        "Carol",
        76,
        82,
        89,
        "=AVERAGE(B4:D4)"
    ],
    [
        "Class Average",
        "=AVERAGE(B2:B4)",
        "=AVERAGE(C2:C4)",
        "=AVERAGE(D2:D4)",
        "=AVERAGE(B2:D4)"
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
        "Test 1",
        "Test 2",
        "Test 3",
        "Average"
    ],
    [
        "Alice",
        85,
        92,
        78,
        "=AVERAGE(B2:D2)"
    ],
    [
        "Bob",
        90,
        88,
        95,
        "=AVERAGE(B3:D3)"
    ],
    [
        "Carol",
        76,
        82,
        89,
        "=AVERAGE(B4:D4)"
    ],
    [
        "Class Average",
        "=AVERAGE(B2:B4)",
        "=AVERAGE(C2:C4)",
        "=AVERAGE(D2:D4)",
        "=AVERAGE(B2:D4)"
    ]
]
            }]
        });
    }
}
```

