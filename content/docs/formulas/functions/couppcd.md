title: COUPPCD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUPPCD function in Jspreadsheet

# COUPPCD function

`PRO`{.jtag}

The `COUPPCD` function in Jspreadsheet Formulas Pro is used to find the last date when interest was paid on a security before a specific settlement date. This is useful for securities that pay interest at regular intervals. Essentially, it helps you track the interest payment history for your investments. It is a handy tool for managing and assessing the performance of securities in your portfolio.

## Documentation

Calculates the previous coupon date before the settlement date for a security that pays periodic interest.

### Category

Financial

### Syntax

COUPPCD(settlement, maturity, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date. |
| `maturity` | The maturity date. |
| `frequency` | The number of coupon payments per year. |
| `basis` | Optional. The type of day count basis to use. If omitted, assumed to be 0 (US or NASD) by default. |


### Behavior

The `COUPPCD` function in spreadsheets is used to calculate the previous coupon date before the settlement date. The function takes four arguments: Settlement, Maturity, Frequency, and [Basis].

- Settlement: The security's settlement date, the date after the issue date when the security is traded to the buyer.
- Maturity: The security's maturity date, the date when the security expires.
- Frequency: The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
- Basis: The type of day count basis to use. 

If a cell referenced by the function is empty, the function will treat it as zero. If the cell contains a non-numeric text, the function will return a #VALUE! error. If the cell contains a boolean value, the function will take it as 1 for TRUE and 0 for FALSE. 

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the given settlement date is greater than the maturity date. |
| #NUM! | Occurs if the given frequency is any number other than 1, 2, or 4. |
| #NUM! | Occurs if the given basis is a number less than 0 or greater than 4. |
| #VALUE! | Occurs if any of the given arguments is non-numeric. |

### Best practices

> - Always ensure that the settlement date is less than the maturity date to avoid the #NUM! error.
> - Be cautious when entering the frequency. It should be either 1, 2, or 4 representing annual, semi-annual, and quarterly payments respectively.
> - Always validate the values of the basis. It should be a number between 0 and 4.
> - Use valid date formats for settlement and maturity dates to avoid errors.

### Usage

A few examples using the COUPPCD function.

```
COUPPCD("2022-01-01", "2022-06-30", 2) returns 44561  
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
        "Previous Coupon Date"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        "=COUPPCD(A2,B2,C2)"
    ],
    [
        "2023-08-20",
        "2026-06-30",
        4,
        "=COUPPCD(A3,B3,C3)"
    ],
    [
        "2023-11-10",
        "2028-03-15",
        1,
        "=COUPPCD(A4,B4,C4)"
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
        "Previous Coupon Date"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        "=COUPPCD(A2,B2,C2)"
    ],
    [
        "2023-08-20",
        "2026-06-30",
        4,
        "=COUPPCD(A3,B3,C3)"
    ],
    [
        "2023-11-10",
        "2028-03-15",
        1,
        "=COUPPCD(A4,B4,C4)"
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
        "Previous Coupon Date"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        "=COUPPCD(A2,B2,C2)"
    ],
    [
        "2023-08-20",
        "2026-06-30",
        4,
        "=COUPPCD(A3,B3,C3)"
    ],
    [
        "2023-11-10",
        "2028-03-15",
        1,
        "=COUPPCD(A4,B4,C4)"
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
        "Previous Coupon Date"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        "=COUPPCD(A2,B2,C2)"
    ],
    [
        "2023-08-20",
        "2026-06-30",
        4,
        "=COUPPCD(A3,B3,C3)"
    ],
    [
        "2023-11-10",
        "2028-03-15",
        1,
        "=COUPPCD(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

