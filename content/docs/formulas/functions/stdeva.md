title: STDEVA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the STDEVA function in Jspreadsheet

# STDEVA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `STDEVA` function in Jspreadsheet Formulas Pro is used to gauge the amount of variation or dispersion of a set of values. It calculates the standard deviation, considering both numbers and text or logical values in its calculation. This function is especially useful when your data set includes non-numerical values or when you want to evaluate the variability of your data based on a sample, not an entire population.

## Documentation

Estimates the standard deviation of a population based on a sample of numbers, including text and logical values.

### Category

Statistical

### Syntax

STDEVA(value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value in the sample. Can be a number, text, or logical value. |
| `valueN` | Optional. Additional values in the sample. Can be a number, text, or logical value. |


### Behavior

The `STDEVA` function in spreadsheet calculates the standard deviation based on a sample (ignores logical values and text). The standard deviation is a measure of how much variance there is in a set of values. A low standard deviation means that most of the numbers are close to the average (mean). A high standard deviation means that the numbers are more spread out.

- If the data set contains no data or only one data point, `STDEVA` returns the `#DIV/0!` error.
- `STDEVA` includes the following data types in its calculation: logical values, text representation of numbers, and numbers.
- Logical values and text representation of numbers are processed as follows: TRUE equals 1, FALSE equals 0. Text that cannot be translated into numbers causes the function to return the `#VALUE!` error.
- Empty cells in the data set are ignored by `STDEVA`.

### Common Errors

| Error | Description |
| ------|-------------|
| #DIV/0! | Occurs when the data set contains no data or only one data point. |
| #VALUE! | Occurs when the text in the data set cannot be translated into numbers. |

### Best practices

> - Always ensure that your data set has more than one data point to avoid the `#DIV/0!` error.
> - Be aware that `STDEVA` treats logical values and numerical text differently from other statistical functions, which may result in different results.
> - Avoid including non-numerical text in your data set to prevent the `#VALUE!` error.
> - Use `STDEVA` when you want to calculate the standard deviation of a sample that includes logical values and text representations of numbers. If you want to ignore these data types, consider using `STDEV.P` or `STDEV.S` instead.

### Usage

A few examples using the STDEVA function.

```
STDEVA(2, "hello", TRUE, 8, "world")  
STDEVA(A1:A5) returns the estimated standard deviation of the values in cells A1 through A5, including any text or logical values  
STDEVA(A1, B1, C1) returns the estimated standard deviation of the values in cells A1, B1, and C1, including any text or logical values  
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
        "Score",
        "Standard Deviation"
    ],
    [
        85,
        "YES",
        "=STDEVA(A2:B6)"
    ],
    [
        92,
        "NO",
        ""
    ],
    [
        78,
        true,
        ""
    ],
    [
        "N/A",
        88,
        ""
    ],
    [
        91,
        false,
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
        "Score",
        "Standard Deviation"
    ],
    [
        85,
        "YES",
        "=STDEVA(A2:B6)"
    ],
    [
        92,
        "NO",
        ""
    ],
    [
        78,
        true,
        ""
    ],
    [
        "N/A",
        88,
        ""
    ],
    [
        91,
        false,
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
        "Score",
        "Standard Deviation"
    ],
    [
        85,
        "YES",
        "=STDEVA(A2:B6)"
    ],
    [
        92,
        "NO",
        ""
    ],
    [
        78,
        true,
        ""
    ],
    [
        "N/A",
        88,
        ""
    ],
    [
        91,
        false,
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
        "Score",
        "Standard Deviation"
    ],
    [
        85,
        "YES",
        "=STDEVA(A2:B6)"
    ],
    [
        92,
        "NO",
        ""
    ],
    [
        78,
        true,
        ""
    ],
    [
        "N/A",
        88,
        ""
    ],
    [
        91,
        false,
        ""
    ]
]
            }]
        });
    }
}
```

