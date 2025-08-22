title: YIELDMAT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the YIELDMAT function in Jspreadsheet

# YIELDMAT function

`PRO`{.jtag}

The `YIELDMAT` function in Jspreadsheet Formulas Pro is used to calculate the yield of a security that provides interest only at the maturity date. It does this by considering the security's current price and face value. This yield value can help you understand the return you would get if you hold the security until it matures. It's a useful tool for evaluating the potential profitability of different financial investments.

## Documentation

Returns the yield of a security that pays interest at maturity, based on its price and face value.

### Category

Financial

### Syntax

YIELDMAT(settlement, maturity, issue, rate, pr, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The security's settlement date. |
| `maturity` | The security's maturity date. |
| `issue` | The security's issue date. |
| `rate` | The security's annual coupon rate. |
| `pr` | The security's price per $100 face value. |
| `[basis]` | Optional. The day count basis to use in the calculation. Can be 0, 1, 2, 3, or 4. If omitted, it defaults to 0 (US (NASD) 30/360). |


### Behavior

The `YIELDMAT` function in spreadsheets is used to calculate the annual yield of a security or bond that pays interest at maturity. It requires the following information: settlement date, maturity date, issue date, rate, and price. 

- If any of the required information is missing or in an incorrect format, the function will return an error.
- If the settlement date is later than the maturity date, the function will return an error.
- Text and booleans are not valid inputs for this function, and using them will result in an error.
- If any of the date fields (settlement, maturity, or issue date) contain a date that is not a valid date, the function returns an error.
- Empty cells are treated as zeros, which will likely cause the function to return an error, as zero is not a valid rate or price for a bond.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the settlement date is greater than the maturity date. Also, if the rate ≤ 0, or if the price ≤ 0. |
| #VALUE! | Occurs if any of the supplied arguments are non-numeric or are logical values. Also, if the supplied settlement, maturity or issue dates are not valid dates. |
| #DIV/0! | Occurs if the function calculates a division by zero error. |

### Best practices

> - Always ensure that the dates are correct and in the right format. Incorrect dates can lead to errors or inaccurate results.
> - Make sure that the rate and price are positive values. Zero or negative values will cause the function to return an error.
> - Be aware that the function assumes a 360-day year for the basis of its calculations, which may not be accurate for all bonds. 
> - Avoid leaving cells empty that are used in the `YIELDMAT` function to prevent unexpected errors or results.

### Usage

A few examples using the YIELDMAT function.

```
YIELDMAT("2021-09-01", "2022-03-01", "2021-09-01", 0.08, 98, 1)  
YIELDMAT("2021-09-01", "2025-01-01", "2021-09-01", 0.06, 95, 4)  
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
        "Issue",
        "Rate",
        "Price",
        "Basis",
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        "2024-01-15",
        0.05,
        97.5,
        1,
        "=YIELDMAT(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2024-03-01",
        "2025-03-01",
        "2024-03-01",
        0.06,
        95.0,
        1,
        "=YIELDMAT(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2024-06-01",
        "2024-12-01",
        "2024-06-01",
        0.04,
        99.2,
        1,
        "=YIELDMAT(A4,B4,C4,D4,E4,F4)"
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
        "Issue",
        "Rate",
        "Price",
        "Basis",
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        "2024-01-15",
        0.05,
        97.5,
        1,
        "=YIELDMAT(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2024-03-01",
        "2025-03-01",
        "2024-03-01",
        0.06,
        95.0,
        1,
        "=YIELDMAT(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2024-06-01",
        "2024-12-01",
        "2024-06-01",
        0.04,
        99.2,
        1,
        "=YIELDMAT(A4,B4,C4,D4,E4,F4)"
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
        "Issue",
        "Rate",
        "Price",
        "Basis",
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        "2024-01-15",
        0.05,
        97.5,
        1,
        "=YIELDMAT(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2024-03-01",
        "2025-03-01",
        "2024-03-01",
        0.06,
        95.0,
        1,
        "=YIELDMAT(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2024-06-01",
        "2024-12-01",
        "2024-06-01",
        0.04,
        99.2,
        1,
        "=YIELDMAT(A4,B4,C4,D4,E4,F4)"
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
        "Issue",
        "Rate",
        "Price",
        "Basis",
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        "2024-01-15",
        0.05,
        97.5,
        1,
        "=YIELDMAT(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2024-03-01",
        "2025-03-01",
        "2024-03-01",
        0.06,
        95.0,
        1,
        "=YIELDMAT(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2024-06-01",
        "2024-12-01",
        "2024-06-01",
        0.04,
        99.2,
        1,
        "=YIELDMAT(A4,B4,C4,D4,E4,F4)"
    ]
]
            }]
        });
    }
}
```

