title: XIRR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the XIRR function in Jspreadsheet

# XIRR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `XIRR` function in Jspreadsheet Formulas Pro is a powerful tool that calculates the internal rate of return for a series of cash flows. This means it helps you understand how profitable an investment is over time, by considering the time value of money and the irregular intervals between cash flows. Simply put, it measures the growth rate an investment is expected to achieve over a specific period, even when cash flows do not occur at regular intervals. This can be very useful for analyzing the profitability of investments with varying cash flows.

## Documentation

Returns the internal rate of return for a series of cash flows, taking into account both the time value of money and the irregular intervals between cash flows.

### Category

Financial

### Syntax

XIRR(values, dates, [guess])

| Parameter | Description |
| ----------- | ------------- |
| `values` | An array or range of cells representing the series of cash flows. |
| `dates` | An array or range of cells representing the dates corresponding to each cash flow. |
| `[guess]` | Optional. A number that you guess is close to your result. If omitted, it defaults to 0.1 (10%). |


### Behavior

The 'XIRR' function in spreadsheets calculates the Internal Rate of Return for a series of cash flows (payments and income), that might not be periodic. Here is how it handles various inputs:

1. **Empty cells** - The 'XIRR' function ignores empty cells in the range of values and dates.
2. **Text** - If any cell in the values or dates range contains text, the function returns a '#VALUE!' error.
3. **Booleans** - Boolean values are not accepted by the 'XIRR' function. If present, the function will return a '#VALUE!' error.
4. **Errors** - If any cell in the range contains an error, the 'XIRR' function will return that error.
5. **Dates** - The range of dates must correspond to the range of values. The first date is the start of the investment, while the remaining dates correspond to the dates of other cash flows.
6. **Values** - The first value is the cost of investment made at the start, and the rest are income or payments at corresponding dates.
7. **Guess** - It's an optional argument representing an initial guess for what the IRR would be. If not provided, the function will use 0.1 (10%) as the default guess.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs when the function fails to converge to a result after 100 iterations. |
| #VALUE! | This error is displayed if any non-numeric value is present in the range of cells, if the dates and values arrays have different lengths, or if the initial investment value is not negative. |

### Best practices

>1. Ensure that the first cash flow is a negative value, representing the initial investment outflow. The 'XIRR' function might return an error if this is not the case.
>2. Make sure the dates are in chronological order. This helps in avoiding potential errors and incorrect calculations.
>3. Always cross-check the ranges of dates and values to make sure they have the same length. Mismatched lengths can lead to errors.
>4. If you get a #NUM! error, try changing the 'guess' parameter to a value closer to the expected result.

### Usage

A few examples using the XIRR function.

```
XIRR([-1000, 250, 250, 250, 250, 250], ["2022-01-01","2023-01-01","2024-01-01","2025-01-01","2026-01-01","2027-01-01"])  
XIRR([-5000, 1000, 2000, 3000], ["2019-01-01","2020-01-01","2021-01-01","2022-01-01"], 0.1)  
XIRR([10000, -1500, -1500, -1500, -1500], ["2021-01-01","2022-01-01","2023-01-01","2024-01-01","2025-01-01"], 0.1)  
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
        "Date",
        "Cash Flow",
        "XIRR"
    ],
    [
        "2023-01-01",
        -10000,
        "=XIRR(B1:B6,A1:A6)"
    ],
    [
        "2023-06-15",
        2000
    ],
    [
        "2024-01-10",
        3000
    ],
    [
        "2024-08-20",
        2500
    ],
    [
        "2025-03-05",
        4000
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
        "Date",
        "Cash Flow",
        "XIRR"
    ],
    [
        "2023-01-01",
        -10000,
        "=XIRR(B1:B6,A1:A6)"
    ],
    [
        "2023-06-15",
        2000
    ],
    [
        "2024-01-10",
        3000
    ],
    [
        "2024-08-20",
        2500
    ],
    [
        "2025-03-05",
        4000
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
        "Date",
        "Cash Flow",
        "XIRR"
    ],
    [
        "2023-01-01",
        -10000,
        "=XIRR(B1:B6,A1:A6)"
    ],
    [
        "2023-06-15",
        2000
    ],
    [
        "2024-01-10",
        3000
    ],
    [
        "2024-08-20",
        2500
    ],
    [
        "2025-03-05",
        4000
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
        "Date",
        "Cash Flow",
        "XIRR"
    ],
    [
        "2023-01-01",
        -10000,
        "=XIRR(B1:B6,A1:A6)"
    ],
    [
        "2023-06-15",
        2000
    ],
    [
        "2024-01-10",
        3000
    ],
    [
        "2024-08-20",
        2500
    ],
    [
        "2025-03-05",
        4000
    ]
]
            }]
        });
    }
}
```

