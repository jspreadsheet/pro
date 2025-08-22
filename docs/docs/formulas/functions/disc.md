title: DISC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DISC function in Jspreadsheet

# DISC function

`PRO`{.jtag}

The `DISC` function in Jspreadsheet Formulas Pro is a financial tool that helps you determine the discount rate of a security. This calculation depends on the price of the security, its face value, and the coupon rate. Essentially, it's a way to understand the amount by which the price of a security is lower than its face value. This function can be particularly useful for analyzing and comparing the potential profitability of different investment options.

## Documentation

Calculates the discount rate for a security based on its price, face value, and coupon rate.

### Category

Financial

### Syntax

DISC(settlement, maturity, price, redemption, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date of the security. |
| `maturity` | The maturity date of the security. |
| `price` | The price per $100 face value of the security. |
| `redemption` | The redemption value per $100 face value of the security at maturity. |
| `[basis]` | Optional. The day count basis to use for calculating fractional periods. If omitted, assumes a default of US (NASD) 30/360. |


### Behavior

The 'DISC' function in a spreadsheet is used to calculate the discount rate for a security. It requires four parameters: settlement date, maturity date, purchase price, and redemption price. Here's how it handles different types of input:

- Empty Cells: If any of the required fields are left empty, the function will return a `#NUM!` error. All arguments need to be provided for the function to execute properly.
- Text: If text is entered in any of the required fields, the function will return a `#VALUE!` error. The function expects dates for the settlement and maturity dates, and numeric values for the purchase and redemption prices.
- Booleans: The function does not accept Boolean values. If a Boolean value is entered, it will return a `#VALUE!` error.
- Errors: If any of the arguments contain an error, the 'DISC' function will propagate that error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs when the settlement date is greater than the maturity date, or when the purchase price or redemption price is less than or equal to zero. |
| #VALUE! | Occurs if any of the supplied arguments are non-numeric, or if the supplied dates are not valid Excel dates. |

### Best practices

> - Always ensure that the settlement date is earlier than the maturity date. If not, the function will return a `#NUM!` error.
> - Ensure that the purchase price and redemption price values are greater than zero. Negative values or zero will result in a `#NUM!` error.
> - The dates provided should be valid Excel dates. Invalid dates will result in a `#VALUE!` error.
> - Avoid using text or Boolean values as inputs to avoid `#VALUE!` errors.

### Usage

A few examples using the DISC function.

```
DISC("2023-01-04", "2023-01-31", 99.5, 100)  
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
        "Price",
        "Redemption",
        "Discount Rate"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        98.5,
        100,
        "=DISC(A2,B2,C2,D2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        97.25,
        100,
        "=DISC(A3,B3,C3,D3)"
    ],
    [
        "2024-03-10",
        "2024-12-10",
        96.8,
        100,
        "=DISC(A4,B4,C4,D4)"
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
        "Price",
        "Redemption",
        "Discount Rate"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        98.5,
        100,
        "=DISC(A2,B2,C2,D2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        97.25,
        100,
        "=DISC(A3,B3,C3,D3)"
    ],
    [
        "2024-03-10",
        "2024-12-10",
        96.8,
        100,
        "=DISC(A4,B4,C4,D4)"
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
        "Price",
        "Redemption",
        "Discount Rate"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        98.5,
        100,
        "=DISC(A2,B2,C2,D2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        97.25,
        100,
        "=DISC(A3,B3,C3,D3)"
    ],
    [
        "2024-03-10",
        "2024-12-10",
        96.8,
        100,
        "=DISC(A4,B4,C4,D4)"
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
        "Price",
        "Redemption",
        "Discount Rate"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        98.5,
        100,
        "=DISC(A2,B2,C2,D2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        97.25,
        100,
        "=DISC(A3,B3,C3,D3)"
    ],
    [
        "2024-03-10",
        "2024-12-10",
        96.8,
        100,
        "=DISC(A4,B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

