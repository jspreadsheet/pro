title: STDEVPA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the STDEVPA function in Jspreadsheet

# STDEVPA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `STDEVPA` function in Jspreadsheet Formulas Pro is a statistical tool that helps you estimate the standard deviation of an entire dataset or population. This includes not just numerical values, but also text and logical values (like TRUE or FALSE). Standard deviation is a measure of how spread out your data is, so using `STDEVPA` can give you a clearer picture of the diversity or variability in your data. It's an easy way to conduct statistical analysis directly within Jspreadsheet.

## Documentation

Estimates the standard deviation of an entire population, including text and logical values.

### Category

Statistical

### Syntax

STDEVPA(value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value in the population. Can be a number, text, or logical value. |
| `valueN` | Optional. Additional values in the population. Can be a number, text, or logical value. |


### Behavior

The 'STDEVPA' function in spreadsheets calculates the standard deviation based on an entire population, including numbers, text, and logical values. Here's how it specifically handles different data:

- **Numbers**: 'STDEVPA' includes these in the calculation.
- **Empty cells**: 'STDEVPA' ignores these and does not factor them into the calculation.
- **Text**: 'STDEVPA' treats text as the number 0.
- **Booleans**: 'STDEVPA' treats TRUE as 1 and FALSE as 0.
- **Errors**: If any cell in the range contains an error, 'STDEVPA' will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #DIV/0! | Occurs when the data set is empty or contains only one data point. Standard deviation requires at least two data points. |
| #VALUE! | Occurs when the function is applied to non-numeric data, and non-logical data. |
| #N/A | Occurs when the function is applied to a range that contains cells with N/A error. |

### Best practices

> - Since 'STDEVPA' treats text as 0, ensure your data set does not contain text that is supposed to represent a number (like "ten"). Instead, use actual numbers (like 10).
> - Use 'STDEVPA' when you want to calculate the standard deviation of an entire population. If you are working with a sample of a larger population, consider using 'STDEVP' or 'STDEV' instead.
> - Remember that 'STDEVPA' treats logical values as numbers. If your data set contains TRUE/FALSE values that you do not want treated as 1/0, you might need to convert these to numbers that align with your data set.
> - Be mindful of error values in your data set as 'STDEVPA' will return an error if it encounters one. Consider using error checking functions like 'ISERROR' or 'IFERROR' to handle these.

### Usage

A few examples using the STDEVPA function.

```
STDEVPA(2, "hello", TRUE, 8, "world")  
STDEVPA(A1:A5) returns the estimated standard deviation of the values in cells A1 through A5 as a population, including any text or logical values  
STDEVPA(A1, B1, C1) returns the estimated standard deviation of the values in cells A1, B1, and C1 as a population, including any text or logical values  
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
        "Sales Rep",
        "Q1 Results",
        "Bonus Eligible"
    ],
    [
        "John",
        85,
        true
    ],
    [
        "Sarah",
        "N/A",
        false
    ],
    [
        "Mike",
        92,
        true
    ],
    [
        "Lisa",
        78,
        false
    ],
    [
        "=STDEVPA(B2:B5)",
        "=STDEVPA(C2:C5)",
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
        "Sales Rep",
        "Q1 Results",
        "Bonus Eligible"
    ],
    [
        "John",
        85,
        true
    ],
    [
        "Sarah",
        "N/A",
        false
    ],
    [
        "Mike",
        92,
        true
    ],
    [
        "Lisa",
        78,
        false
    ],
    [
        "=STDEVPA(B2:B5)",
        "=STDEVPA(C2:C5)",
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
        "Sales Rep",
        "Q1 Results",
        "Bonus Eligible"
    ],
    [
        "John",
        85,
        true
    ],
    [
        "Sarah",
        "N/A",
        false
    ],
    [
        "Mike",
        92,
        true
    ],
    [
        "Lisa",
        78,
        false
    ],
    [
        "=STDEVPA(B2:B5)",
        "=STDEVPA(C2:C5)",
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
        "Sales Rep",
        "Q1 Results",
        "Bonus Eligible"
    ],
    [
        "John",
        85,
        true
    ],
    [
        "Sarah",
        "N/A",
        false
    ],
    [
        "Mike",
        92,
        true
    ],
    [
        "Lisa",
        78,
        false
    ],
    [
        "=STDEVPA(B2:B5)",
        "=STDEVPA(C2:C5)",
        ""
    ]
]
            }]
        });
    }
}
```

