title: XNPV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the XNPV function in Jspreadsheet

# XNPV function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `XNPV` function in Jspreadsheet Formulas Pro is a financial formula that helps you calculate the net present value (NPV) of an investment. This is done by considering a series of periodic cash flows and a discount rate. Essentially, it helps to understand the value of future cash flows in today's money terms. This function is particularly useful in investment analysis, helping to determine the profitability or viability of a potential investment.

## Documentation

Calculates the net present value of an investment based on a series of periodic cash flows and a discount rate.

### Category

Financial

### Syntax

XNPV(rate, values, dates)

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The discount rate to apply to the cash flows, expressed as a decimal. |
| `values` | An array or range of cells representing the series of cash flows. |
| `dates` | An array or range of cells representing the dates corresponding to each cash flow. |


### Behavior

The `XNPV` function in a spreadsheet calculates the net present value of an investment by using a discount rate and a series of future payments (negative values) and income (positive values). 

1. **Empty cells**: If any of the value or date arrays are empty, the `XNPV` function will return an error.
2. **Text**: The `XNPV` function cannot handle text. If any of the date or value arrays contain text, it will return an error.
3. **Booleans**: Boolean values are not handled by `XNPV`. If boolean values are included in the value or date arrays, it will return an error.
4. **Errors**: If an error occurs in the value or date arrays, the `XNPV` function will return that error.
5. **Dates**: The dates should be in chronological order and they must be valid Excel dates. If not, `XNPV` will return a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If the provided discount rate is non-numeric |
| #NUM! | If the dates are not in chronological order, or if any of the dates are not valid Excel dates |
| #REF! | If any of the cell references are not valid |
| #N/A | If the dates and values arrays have different lengths |

### Best Practices

> - Always ensure that the dates provided are in chronological order and are valid Excel dates.
> - Make sure the value and date arrays have the same length.
> - Avoid including text, boolean values or error values in the value or date arrays as `XNPV` does not support these.
> - The discount rate should be in decimal form, not a percentage. For example, use 0.05 for a 5% discount rate.

### Usage

A few examples using the XNPV function.

```
XNPV(0.05, [-1000, 250, 250, 250, 250, 250], ["2022-01-01","2023-01-01","2024-01-01","2025-01-01","2026-01-01","2027-01-01"])  
XNPV(0.1, [-5000, 1000, 2000, 3000], ["2019-01-01","2020-01-01","2021-01-01","2022-01-01"])  
XNPV(0.06, [10000, -1500, -1500, -1500, -1500], ["2021-01-01","2022-01-01","2023-01-01","2024-01-01","2025-01-01"])  
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
        "NPV Calculation"
    ],
    [
        "2024-01-01",
        -10000,
        "=XNPV(0.08,B1:B5,A1:A5)"
    ],
    [
        "2024-06-15",
        2500
    ],
    [
        "2024-12-31",
        3000
    ],
    [
        "2025-12-31",
        4500
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
        "NPV Calculation"
    ],
    [
        "2024-01-01",
        -10000,
        "=XNPV(0.08,B1:B5,A1:A5)"
    ],
    [
        "2024-06-15",
        2500
    ],
    [
        "2024-12-31",
        3000
    ],
    [
        "2025-12-31",
        4500
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
        "NPV Calculation"
    ],
    [
        "2024-01-01",
        -10000,
        "=XNPV(0.08,B1:B5,A1:A5)"
    ],
    [
        "2024-06-15",
        2500
    ],
    [
        "2024-12-31",
        3000
    ],
    [
        "2025-12-31",
        4500
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
        "NPV Calculation"
    ],
    [
        "2024-01-01",
        -10000,
        "=XNPV(0.08,B1:B5,A1:A5)"
    ],
    [
        "2024-06-15",
        2500
    ],
    [
        "2024-12-31",
        3000
    ],
    [
        "2025-12-31",
        4500
    ]
]
            }]
        });
    }
}
```

