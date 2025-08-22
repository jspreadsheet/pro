title: INTRATE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the INTRATE function in Jspreadsheet

# INTRATE function

`PRO`{.jtag}

The `INTRATE` function in Jspreadsheet Formulas Pro is a financial tool that calculates the interest rate for a fully invested security. It helps you determine the annual interest rate earned by an investment, given the purchase price, redemption value, and the investment duration. This feature is particularly useful for understanding the return on investments such as bonds or securities. With the `INTRATE` function, you can efficiently manage your investments by understanding the yield of your fully invested assets.

## Documentation

Returns the interest rate for a fully invested security.

### Category

Financial

### Syntax

INTRATE(settlement, maturity, investment, redemption, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date of the security. |
| `maturity` | The maturity date of the security. |
| `investment` | The amount invested in the security. |
| `redemption` | The amount the security is worth at maturity. |
| `[basis]` | Optional. The day count basis to use. If omitted, it defaults to 0 (or actual/actual). |


### Behavior

The `INTRATE` function in spreadsheets calculates the interest rate for a fully invested security. It requires five parameters: settlement date, maturity date, investment, redemption, and basis. 

- Empty cells: If any of the required cells are empty, the function will return a `#NUM!` error. 
- Text: If text is entered in cells that require numerical values, the function will return a `#VALUE!` error. 
- Booleans: Boolean values are not accepted by the `INTRATE` function. If a boolean value is entered, the function will return a `#VALUE!` error. 
- Errors: If any of the input cells contain an error, the `INTRATE` function will propagate that error. 

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | Occurs when any of the required inputs is missing or if the settlement date is greater than the maturity date, the investment or redemption is less than or equal to zero, or the basis is less than zero or greater than 4. |
| #VALUE! | Occurs when any of the inputs is non-numeric, including boolean values and text. |

### Best practices

> - Always ensure that the settlement date is earlier than the maturity date. If not, the function will return a `#NUM!` error.
> - Always enter positive values for the investment and redemption. Negative values or zero will result in a `#NUM!` error.
> - Make sure to enter a valid basis. The basis should be an integer between 0 and 4, where 0 = US (NASD) 30/360, 1 = Actual/actual, 2 = Actual/360, 3 = Actual/365, 4 = European 30/360.
> - Be careful about the date format. It's best to use a date function or a cell reference to a cell containing a date, rather than typing the date directly into the function.

### Usage

A few examples using the INTRATE function.

```
INTRATE("1-Jan-2023", "1-Jan-2024", 100000, 120000) returns the annual interest rate for a security with a settlement date of January 1, 2023, maturity date of January 1, 2024, an initial investment of $100,000 and a redemption value of $120,000  
INTRATE("1-Jan-2022", "1-Jan-2025", 150000, 200000, 1) returns the annual interest rate for a security with a settlement date of January 1, 2022, maturity date of January 1, 2025, an initial investment of $150,000, a redemption value of $200,000 and a 30/360 day count basis.  
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
        "Investment",
        "Redemption",
        "Basis",
        "Interest Rate"
    ],
    [
        "2023-01-01",
        "2024-01-01",
        50000,
        55000,
        0,
        "=INTRATE(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-06-15",
        "2024-12-15",
        100000,
        112000,
        1,
        "=INTRATE(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-01",
        "2025-03-01",
        75000,
        90000,
        0,
        "=INTRATE(A4,B4,C4,D4,E4)"
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
        "Investment",
        "Redemption",
        "Basis",
        "Interest Rate"
    ],
    [
        "2023-01-01",
        "2024-01-01",
        50000,
        55000,
        0,
        "=INTRATE(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-06-15",
        "2024-12-15",
        100000,
        112000,
        1,
        "=INTRATE(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-01",
        "2025-03-01",
        75000,
        90000,
        0,
        "=INTRATE(A4,B4,C4,D4,E4)"
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
        "Investment",
        "Redemption",
        "Basis",
        "Interest Rate"
    ],
    [
        "2023-01-01",
        "2024-01-01",
        50000,
        55000,
        0,
        "=INTRATE(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-06-15",
        "2024-12-15",
        100000,
        112000,
        1,
        "=INTRATE(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-01",
        "2025-03-01",
        75000,
        90000,
        0,
        "=INTRATE(A4,B4,C4,D4,E4)"
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
        "Investment",
        "Redemption",
        "Basis",
        "Interest Rate"
    ],
    [
        "2023-01-01",
        "2024-01-01",
        50000,
        55000,
        0,
        "=INTRATE(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-06-15",
        "2024-12-15",
        100000,
        112000,
        1,
        "=INTRATE(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-03-01",
        "2025-03-01",
        75000,
        90000,
        0,
        "=INTRATE(A4,B4,C4,D4,E4)"
    ]
]
            }]
        });
    }
}
```

