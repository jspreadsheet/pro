title: ACCRINT Function - Calculate Accrued Interest for Periodic Payment Securities in Jspreadsheet
keywords: ACCRINT function, accrued interest calculator, financial formulas, bond interest calculation, security interest, periodic payments, Jspreadsheet financial functions, Excel ACCRINT equivalent, JavaScript financial formulas, interest accrual, coupon payments, settlement date calculation
description: Learn how to calculate accrued interest for securities with periodic interest payments using the ACCRINT function in Jspreadsheet. Complete guide with examples, syntax, and best practices.

# ACCRINT Function - Calculate Accrued Interest for Periodic Payment Securities

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ACCRINT` function in Jspreadsheet Formulas Pro is a comprehensive financial calculation tool designed for securities with periodic interest payments. This advanced function serves multiple professional applications:

Investment Banking:
- New bond issue pricing
- Secondary market valuations
- Structured product analysis
- Deal pricing and syndication
- Fixed-income origination

Portfolio Management:
- Interest income forecasting
- Portfolio yield analysis
- Investment performance tracking
- Cash flow projections
- Risk assessment calculations

Trading Operations:
- Clean and dirty price calculations
- Trading position valuations
- Arbitrage opportunity analysis
- Market-making operations
- Dealer inventory management

Risk Management:
- Interest rate exposure monitoring
- Duration calculations
- Portfolio stress testing
- Value-at-risk analysis
- Hedging strategy development

Treasury Operations:
- Corporate debt management
- Cash position monitoring
- Liability planning
- Interest expense forecasting
- Debt restructuring analysis

The function supports various fixed-income instruments:

Corporate Securities:
- Investment-grade bonds
- High-yield bonds
- Medium-term notes
- Commercial paper
- Convertible bonds

Government and Municipal:
- Treasury bonds and notes
- Municipal securities
- Agency bonds
- Sovereign debt
- State and local issues

Structured Products:
- Asset-backed securities
- Mortgage-backed bonds
- Collateralized debt obligations
- Credit-linked notes
- Interest rate products

This professional-grade tool incorporates industry-standard calculation methods, supporting multiple day-count conventions and payment frequencies, making it essential for financial institutions, investment firms, and corporate treasury departments.

## Documentation

Returns the accrued interest for a security that pays periodic interest.

### Category

Financial

### Syntax

ACCRINT(issue, first_interest, settlement, rate, par, frequency, [basis], [calc_method])

| Parameter | Description |
| ----------- | ------------- |
| `issue` | The security's issue date (when the security was first issued). |
| `first_interest` | The security's first interest payment date. |
| `settlement` | The security's settlement date (the date through which interest is calculated). |
| `rate` | The security's annual coupon rate (as a decimal, e.g., 0.05 for 5%). |
| `par` | The security's par value (face value), typically 1000 for bonds. |
| `frequency` | The number of coupon payments per year: 1 (annual), 2 (semi-annual), or 4 (quarterly). |
| `[basis]` | Optional. Day count basis: 0 (30/360), 1 (Actual/Actual), 2 (Actual/360), 3 (Actual/365), 4 (30/360 European). Defaults to 0. |
| `[calc_method]` | Optional. Calculation method: TRUE (US method) or FALSE (European method). Defaults to FALSE. |


### Behavior

The `ACCRINT` function calculates accrued interest using the following logic:

1. **Date Validation**: Ensures issue date < settlement date and validates all date inputs
2. **Interest Calculation**: Computes interest based on the day count basis and payment frequency
3. **Method Application**: Applies either US or European calculation method

**Input Handling:**
- **Empty Cells**: Returns #VALUE! error if required arguments are missing
- **Invalid Dates**: Returns #VALUE! error for non-date values in date parameters  
- **Non-Numeric Values**: Returns #VALUE! error for text in numeric parameters
- **Boolean Values**: Returns #VALUE! error; does not accept TRUE/FALSE except for calc_method
- **Error Propagation**: Returns error if any input argument contains an error

### Common Errors

| Error | Description |
| ----- | ----------- |
| #NUM! | Issue date ≥ settlement date, basis not in range 0-4, frequency not 1/2/4, or invalid rate/par values. |
| #VALUE! | Invalid date formats, non-numeric values in numeric parameters, or missing required arguments. |
| #DIV/0! | Par value is zero, which would cause division by zero in interest calculation. |
| #NAME? | Function name misspelled or ACCRINT function not available (requires Formula Pro). |

### Best Practices

> - **Date Validation**: Ensure issue date < first interest date < settlement date for logical consistency
> - **Rate Format**: Express rates as decimals (0.05 for 5%) rather than percentages (5%)
> - **Basis Selection**: Choose appropriate day count basis for your market (0 for US corporate bonds, 1 for government bonds)
> - **Par Value**: Use standard denominations (1000 for bonds, 100 for some securities) and never zero
> - **Frequency Matching**: Ensure frequency matches the actual payment schedule of the security
> - **Date Formats**: Use consistent date formats recognized by your system (YYYY-MM-DD recommended)

### Usage Examples

Here are comprehensive examples demonstrating the ACCRINT function in various financial scenarios:

**1. Corporate Bond Analysis:**
```
// Investment Grade Corporate Bond
=ACCRINT("2024-01-15", "2024-07-15", "2024-04-15", 0.065, 1000, 2, 0)
// Semi-annual payments, 30/360 basis
// $1,000 par value, 6.5% coupon

// High-Yield Corporate Bond
=ACCRINT("2024-01-01", "2024-04-01", "2024-02-15", 0.085, 1000, 4, 0)
// Quarterly payments, 30/360 basis
// $1,000 par value, 8.5% coupon

// Medium-Term Note
=ACCRINT("2024-02-01", "2024-08-01", "2024-05-15", 0.055, 5000, 2, 0)
// Semi-annual payments, 30/360 basis
// $5,000 par value, 5.5% coupon
```

**2. Government Securities:**
```
// Treasury Bond
=ACCRINT("2024-01-01", "2024-07-01", "2024-03-15", 0.045, 10000, 2, 1)
// Semi-annual payments, Actual/Actual basis
// $10,000 par value, 4.5% coupon

// Agency Bond
=ACCRINT("2024-02-15", "2024-08-15", "2024-05-01", 0.048, 25000, 2, 1)
// Semi-annual payments, Actual/Actual basis
// $25,000 par value, 4.8% coupon

// Treasury Note
=ACCRINT("2024-01-01", "2024-04-01", "2024-02-15", 0.042, 50000, 4, 1)
// Quarterly payments, Actual/Actual basis
// $50,000 par value, 4.2% coupon
```

**3. Municipal Securities:**
```
// General Obligation Bond
=ACCRINT("2024-01-01", "2024-07-01", "2024-04-15", 0.038, 100000, 2, 0)
// Semi-annual payments, 30/360 basis
// $100,000 par value, 3.8% coupon

// Revenue Bond
=ACCRINT("2024-02-01", "2024-08-01", "2024-05-15", 0.042, 75000, 2, 0)
// Semi-annual payments, 30/360 basis
// $75,000 par value, 4.2% coupon

// Short-Term Note
=ACCRINT("2024-01-15", "2024-07-15", "2024-03-01", 0.035, 50000, 2, 0)
// Semi-annual payments, 30/360 basis
// $50,000 par value, 3.5% coupon
```

**4. Structured Products:**
```
// Asset-Backed Security
=ACCRINT("2024-01-01", "2024-04-01", "2024-02-15", 0.052, 250000, 4, 2)
// Quarterly payments, Actual/360 basis
// $250,000 par value, 5.2% coupon

// Mortgage-Backed Bond
=ACCRINT("2024-02-01", "2024-05-01", "2024-03-15", 0.048, 500000, 12, 0)
// Monthly payments, 30/360 basis
// $500,000 par value, 4.8% coupon

// CDO Tranche
=ACCRINT("2024-01-15", "2024-04-15", "2024-03-01", 0.065, 1000000, 4, 2)
// Quarterly payments, Actual/360 basis
// $1,000,000 par value, 6.5% coupon
```

**5. International Securities:**
```
// European Corporate Bond
=ACCRINT("2024-01-01", "2024-07-01", "2024-04-15", 0.045, 100000, 2, 4)
// Semi-annual payments, 30/360 European basis
// €100,000 par value, 4.5% coupon

// Sovereign Bond
=ACCRINT("2024-02-15", "2024-08-15", "2024-05-01", 0.058, 200000, 2, 1)
// Semi-annual payments, Actual/Actual basis
// $200,000 par value, 5.8% coupon

// Emerging Market Bond
=ACCRINT("2024-01-15", "2024-07-15", "2024-04-01", 0.075, 150000, 2, 0)
// Semi-annual payments, 30/360 basis
// $150,000 par value, 7.5% coupon
```

**6. Portfolio Analysis Examples:**
```
// Clean Price Calculation
=ACCRINT("2024-01-01", "2024-07-01", "2024-03-15", 0.05, 1000000, 2, 0)
// For determining dirty price: market_price + accrued_interest

// Yield Analysis
=ACCRINT("2024-02-01", "2024-08-01", "2024-05-15", 0.06, 500000, 2, 1)
// Component of yield-to-maturity calculation

// Interest Income Projection
=ACCRINT("2024-01-15", "2024-07-15", "2024-06-30", 0.055, 750000, 2, 0)
// For period-end income forecasting
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
        "Issue Date",
        "First Interest",
        "Settlement",
        "Rate",
        "Par Value",
        "Frequency",
        "Basis",
        "Accrued Interest"
    ],
    [
        "2023-01-15",
        "2023-07-15",
        "2023-04-15",
        0.065,
        1000,
        2,
        0,
        "=ACCRINT(A2,B2,C2,D2,E2,F2,G2)"
    ],
    [
        "2023-03-01",
        "2023-09-01",
        "2023-06-01",
        0.045,
        5000,
        2,
        1,
        "=ACCRINT(A3,B3,C3,D3,E3,F3,G3)"
    ],
    [
        "2023-02-10",
        "2023-08-10",
        "2023-05-10",
        0.055,
        2500,
        2,
        0,
        "=ACCRINT(A4,B4,C4,D4,E4,F4,G4)"
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
        "Issue Date",
        "First Interest",
        "Settlement",
        "Rate",
        "Par Value",
        "Frequency",
        "Basis",
        "Accrued Interest"
    ],
    [
        "2023-01-15",
        "2023-07-15",
        "2023-04-15",
        0.065,
        1000,
        2,
        0,
        "=ACCRINT(A2,B2,C2,D2,E2,F2,G2)"
    ],
    [
        "2023-03-01",
        "2023-09-01",
        "2023-06-01",
        0.045,
        5000,
        2,
        1,
        "=ACCRINT(A3,B3,C3,D3,E3,F3,G3)"
    ],
    [
        "2023-02-10",
        "2023-08-10",
        "2023-05-10",
        0.055,
        2500,
        2,
        0,
        "=ACCRINT(A4,B4,C4,D4,E4,F4,G4)"
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
        "Issue Date",
        "First Interest",
        "Settlement",
        "Rate",
        "Par Value",
        "Frequency",
        "Basis",
        "Accrued Interest"
    ],
    [
        "2023-01-15",
        "2023-07-15",
        "2023-04-15",
        0.065,
        1000,
        2,
        0,
        "=ACCRINT(A2,B2,C2,D2,E2,F2,G2)"
    ],
    [
        "2023-03-01",
        "2023-09-01",
        "2023-06-01",
        0.045,
        5000,
        2,
        1,
        "=ACCRINT(A3,B3,C3,D3,E3,F3,G3)"
    ],
    [
        "2023-02-10",
        "2023-08-10",
        "2023-05-10",
        0.055,
        2500,
        2,
        0,
        "=ACCRINT(A4,B4,C4,D4,E4,F4,G4)"
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
                        "Issue Date",
                        "First Interest",
                        "Settlement",
                        "Rate",
                        "Par Value",
                        "Frequency",
                        "Basis",
                        "Accrued Interest"
                    ],
                    [
                        "2023-01-15",
                        "2023-07-15",
                        "2023-04-15",
                        0.065,
                        1000,
                        2,
                        0,
                        "=ACCRINT(A2,B2,C2,D2,E2,F2,G2)"
                    ],
                    [
                        "2023-03-01",
                        "2023-09-01",
                        "2023-06-01",
                        0.045,
                        5000,
                        2,
                        1,
                        "=ACCRINT(A3,B3,C3,D3,E3,F3,G3)"
                    ],
                    [
                        "2023-02-10",
                        "2023-08-10",
                        "2023-05-10",
                        0.055,
                        2500,
                        2,
                        0,
                        "=ACCRINT(A4,B4,C4,D4,E4,F4,G4)"
                    ]
                ]
            }]
        });
    }
}
```

