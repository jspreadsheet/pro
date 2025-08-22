title: PRICEDISC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PRICEDISC function in Jspreadsheet

# PRICEDISC function

`PRO`{.jtag}

The `PRICEDISC` function in Jspreadsheet Formulas Pro is a handy tool that helps you figure out the price of a discounted security for every $100 of its face value. This function becomes useful when you're dealing with financial analysis involving bonds or other similar securities. It simplifies the process, eliminating the need for complex calculations. So, whether you're a financial analyst or a student learning about securities, the `PRICEDISC` function makes your work much easier.

## Documentation

Returns the price per $100 face value of a discounted security.

### Category

Financial

### Syntax

PRICEDISC(settlement, maturity, discount, redemption, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date of the security. |
| `maturity` | The maturity date of the security. |
| `discount` | The discount rate of the security. |
| `redemption` | The redemption value per $100 face value of the security. |
| `[basis]` | Optional. The day count basis to use for calculating bond interest. If omitted, defaults to 0 (US (NASD) 30/360). |


### Behavior

The `PRICEDISC` function in spreadsheets calculates the price per $100 face value of a discounted security. It requires three key pieces of information: settlement date (the date after the issue date when the security is traded to the buyer), maturity date (the date when the security expires), and the discount rate. 

- If any of the cells referenced in the function are empty, the function will return a `#VALUE!` error.
- If non-date text or booleans are used as the settlement or maturity dates, `PRICEDISC` will return a `#VALUE!` error.
- If the discount rate is not a numerical value, the function will return a `#VALUE!` error.
- The function will return a `#NUM!` error if the settlement date is greater than or equal to the maturity date, or if the discount rate is less than or equal to zero.

In most spreadsheet software, dates are stored as serial numbers, so the function works best when you use cell references that contain these dates, rather than typing them directly into the function.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | Occurs if one or more of the input cells are empty, or if the settlement date, maturity date, or discount rate are not in the correct format (dates should be in serial number format, and the discount rate should be a numerical value). |
| `#NUM!` | Occurs if the settlement date is greater than or equal to the maturity date, or if the discount rate is less than or equal to zero. |

### Best Practices

> - Always ensure that the settlement date is less than the maturity date, and that the discount rate is a positive value.
> - Use cell references for dates rather than typing them directly into the function to avoid formatting errors.
> - Remember that the `PRICEDISC` function does not adjust for weekends or holidays, so adjust your dates accordingly if these are relevant to your calculations.
> - Double check your discount rate to ensure it is entered correctly, because it can significantly impact the result of the function.

### Usage

A few examples using the PRICEDISC function.

```
PRICEDISC("2023-01-05","2023-01-31", 0.038, 100, 0) returns 99.72555556  
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
        "Settlement",
        "Maturity",
        "Discount",
        "Redemption",
        "Basis",
        "Price per $100"
    ],
    [
        "2023-01-05",
        "2023-03-15",
        0.035,
        100,
        0,
        "=PRICEDISC(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-02-10",
        "2023-06-20",
        0.042,
        100,
        1,
        "=PRICEDISC(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-01",
        "2023-09-30",
        0.038,
        100,
        0,
        "=PRICEDISC(A4,B4,C4,D4,E4)"
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
        "Settlement",
        "Maturity",
        "Discount",
        "Redemption",
        "Basis",
        "Price per $100"
    ],
    [
        "2023-01-05",
        "2023-03-15",
        0.035,
        100,
        0,
        "=PRICEDISC(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-02-10",
        "2023-06-20",
        0.042,
        100,
        1,
        "=PRICEDISC(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-01",
        "2023-09-30",
        0.038,
        100,
        0,
        "=PRICEDISC(A4,B4,C4,D4,E4)"
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
        "Settlement",
        "Maturity",
        "Discount",
        "Redemption",
        "Basis",
        "Price per $100"
    ],
    [
        "2023-01-05",
        "2023-03-15",
        0.035,
        100,
        0,
        "=PRICEDISC(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-02-10",
        "2023-06-20",
        0.042,
        100,
        1,
        "=PRICEDISC(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-01",
        "2023-09-30",
        0.038,
        100,
        0,
        "=PRICEDISC(A4,B4,C4,D4,E4)"
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
        "Settlement",
        "Maturity",
        "Discount",
        "Redemption",
        "Basis",
        "Price per $100"
    ],
    [
        "2023-01-05",
        "2023-03-15",
        0.035,
        100,
        0,
        "=PRICEDISC(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-02-10",
        "2023-06-20",
        0.042,
        100,
        1,
        "=PRICEDISC(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-01",
        "2023-09-30",
        0.038,
        100,
        0,
        "=PRICEDISC(A4,B4,C4,D4,E4)"
    ]
]
            }]
        });
    }
}
```

