title: COUPNCD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUPNCD function in Jspreadsheet

# COUPNCD function

`PRO`{.jtag}

The `COUPNCD` function in Jspreadsheet Formulas Pro is a financial formula used to figure out the next interest payment date after a specified settlement date for any given investment. This function is particularly useful for investments that pay periodic interest. By inputting details such as the settlement date, maturity date, frequency of payments, and the day-count basis, you can determine when the next interest payment will be due. This can help users effectively track and manage their investment payments.

## Documentation

Calculates the next coupon date after the settlement date for a security that pays periodic interest.

### Category

Financial

### Syntax

COUPNCD(settlement, maturity, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date. |
| `maturity` | The maturity date. |
| `frequency` | The number of coupon payments per year. |
| `[basis]` | Optional. The type of day count basis to use. If omitted, assumed to be 0 (US or NASD) by default. |


### Behavior

The 'COUPNCD' function in a spreadsheet calculates the next coupon date after the settlement date for a security that pays periodic interest. This function takes four arguments: settlement date, maturity date, frequency of payments, and basis (which indicates the day count basis to be used). 

- If any of the cells referenced in the function are empty, the function will treat them as zero. 
- Text values in cells that are referenced by the function will result in a `#VALUE!` error. 
- Boolean values are not applicable for this function. If a boolean value is used, 'COUPNCD' will return a `#VALUE!` error. 
- If the frequency is any number other than 1, 2, or 4, the function will return a `#NUM!` error.
- If the basis is any number other than 0, 1, 2, 3, or 4, the function will also return a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | Occurs if any of the provided arguments are non-numeric. |
| `#NUM!` | Occurs if the frequency is any number other than 1, 2, or 4, or if the basis is any number other than 0, 1, 2, 3, or 4. |
| `#NUM!` | Occurs if the settlement date is greater than the maturity date. |

### Best practices

> - Always ensure that the settlement date and maturity date are valid dates, not just numbers or text.
> - Make sure the frequency is either 1, 2, or 4, as they represent annual, semi-annual, and quarterly payments respectively.
> - Be aware of the day count basis that you are using (0 = US (NASD) 30/360, 1 = Actual/actual, 2 = Actual/360, 3 = Actual/365, 4 = European 30/360). The basis you choose can significantly affect the result, especially for large amounts and long durations.
> - Be mindful of the fact that 'COUPNCD' calculates the next coupon date after the settlement date and not the first coupon date after purchase.

### Usage

A few examples using the COUPNCD function.

```
COUPNCD("2022-01-01","2022-06-30", 2)  
COUPNCD("2022-01-01","2022-06-30", 4, 1)  
COUPNCD("2022-01-01","2022-06-30", 2, 3)  
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
        "Settlement Date",
        "Maturity Date",
        "Frequency",
        "Next Coupon Date"
    ],
    [
        "2024-01-15",
        "2024-12-31",
        2,
        "=COUPNCD(A2,B2,C2)"
    ],
    [
        "2024-03-10",
        "2025-06-15",
        4,
        "=COUPNCD(A3,B3,C3)"
    ],
    [
        "2024-02-01",
        "2024-11-30",
        1,
        "=COUPNCD(A4,B4,C4)"
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
        "Settlement Date",
        "Maturity Date",
        "Frequency",
        "Next Coupon Date"
    ],
    [
        "2024-01-15",
        "2024-12-31",
        2,
        "=COUPNCD(A2,B2,C2)"
    ],
    [
        "2024-03-10",
        "2025-06-15",
        4,
        "=COUPNCD(A3,B3,C3)"
    ],
    [
        "2024-02-01",
        "2024-11-30",
        1,
        "=COUPNCD(A4,B4,C4)"
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
        "Settlement Date",
        "Maturity Date",
        "Frequency",
        "Next Coupon Date"
    ],
    [
        "2024-01-15",
        "2024-12-31",
        2,
        "=COUPNCD(A2,B2,C2)"
    ],
    [
        "2024-03-10",
        "2025-06-15",
        4,
        "=COUPNCD(A3,B3,C3)"
    ],
    [
        "2024-02-01",
        "2024-11-30",
        1,
        "=COUPNCD(A4,B4,C4)"
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
        "Settlement Date",
        "Maturity Date",
        "Frequency",
        "Next Coupon Date"
    ],
    [
        "2024-01-15",
        "2024-12-31",
        2,
        "=COUPNCD(A2,B2,C2)"
    ],
    [
        "2024-03-10",
        "2025-06-15",
        4,
        "=COUPNCD(A3,B3,C3)"
    ],
    [
        "2024-02-01",
        "2024-11-30",
        1,
        "=COUPNCD(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

