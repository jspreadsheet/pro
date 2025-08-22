title: AMORDEGRC Function - Calculate Asset Depreciation in Jspreadsheet
keywords: AMORDEGRC function, asset depreciation calculator, fixed-rate declining balance, financial accounting, depreciation calculation, Excel-compatible depreciation, JavaScript spreadsheet functions, asset value calculation, business accounting, financial planning, asset management, equipment depreciation, property depreciation
description: Calculate precise asset depreciation using the AMORDEGRC function in Jspreadsheet. Perfect for financial accounting, asset management, and tracking depreciation of equipment, buildings, and other business assets using the fixed-rate declining balance method.

# AMORDEGRC function

`PRO`{.jtag}

The `AMORDEGRC` function in Jspreadsheet Formulas Pro is a specialized financial tool that implements the French accounting system's fixed-rate declining balance depreciation method. This sophisticated approach is essential for:

Primary Applications:
- Financial accounting and reporting
- Asset lifecycle management
- Tax planning and compliance
- Investment analysis
- Budget forecasting
- Regulatory compliance

Industry-Specific Uses:
- Technology sector asset management
- Manufacturing equipment depreciation
- Vehicle fleet accounting
- Real estate investment analysis
- Infrastructure project planning
- Research equipment valuation

Key Benefits:
- Accelerated early-year depreciation
- Compliance with French accounting standards
- Accurate asset value tracking
- Improved financial planning
- Enhanced tax optimization
- Better investment decisions

The function is particularly valuable for:
- International businesses operating in French markets
- Financial controllers managing diverse asset portfolios
- Tax professionals optimizing depreciation strategies
- Investment analysts evaluating asset-heavy businesses
- Property managers handling long-term assets
- Equipment leasing companies

Unlike standard depreciation methods, AMORDEGRC applies specific coefficients based on asset life duration, making it the preferred choice for assets that depreciate more rapidly in their early years.

## Documentation

Returns the depreciation amount for a specified accounting period using the French accounting system's depreciation coefficient method. This method applies a coefficient to the standard declining balance depreciation based on the asset's useful life.

### Category

Financial

### Syntax

AMORDEGRC(cost, date_purchased, first_period, salvage, period, rate, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `cost` | The initial cost of the asset. |
| `date_purchased` | The date the asset was purchased. |
| `first_period` | The date of the end of the first period. |
| `salvage` | The value of the asset at the end of its useful life. |
| `period` | The period for which to calculate depreciation. |
| `rate` | The rate at which the asset is to be depreciated per period. |
| `[basis]` | Optional. The day count basis to use. Defaults to 0 if not specified. |


### Behavior

The `AMORDEGRC` function implements the French accounting system's depreciation calculation method, which applies specific coefficients based on the asset's useful life. Here's how it works:

**Key Features:**
- Uses a declining balance method with French depreciation coefficients
- Automatically adjusts depreciation rates based on asset life duration
- Handles prorated first-year depreciation when the purchase date differs from the fiscal year start
- Switches to straight-line depreciation for the final period
- Supports different day count conventions through the optional basis parameter

**Calculation Method:**
1. Determines the depreciation coefficient based on asset life:
   - 1.5 for assets with 3-4 year life
   - 2.0 for assets with 5-6 year life
   - 2.5 for assets with > 6 year life
2. Applies the coefficient to the standard declining balance rate
3. Calculates prorated depreciation for the first period if needed
4. Switches to straight-line for the remaining value in the final period

**Important Considerations:**
- The function requires numeric inputs for all financial values (cost, salvage, rate)
- Dates must be valid and in chronological order (purchase date ≤ first period)
- The depreciation rate must be positive and appropriate for the asset type
- Asset life is calculated based on the rate (1/rate) and must be reasonable
- Empty cells or invalid references will result in calculation errors

### Common Errors

| Error | Description |
| ------ | ----------- |
| #VALUE! | This error is displayed when any of the input parameters are non-numeric, such as text or boolean values. |
| #NUM! | This error is displayed when the depreciation rate or life of the asset is less than or equal to 0. It's also displayed when the function encounters errors in the calculation.|
| #REF! | This error is displayed when the cell references are not valid. This could happen if the cell being referenced is deleted. |
| #N/A | This error is displayed if the function is missing required arguments. |

### Best practices

> **Input Validation**
> - Verify that cost and salvage values are positive numbers and salvage < cost
> - Ensure the depreciation rate aligns with the expected asset life (e.g., 0.2 for 5-year life)
> - Use consistent date formats throughout your calculations
>
> **Calculation Accuracy**
> - Always specify the basis parameter to ensure consistent day count conventions
> - For fiscal year calculations, align the first_period date with your fiscal year end
> - Consider using named ranges for frequently referenced values
>
> **Maintenance and Documentation**
> - Document assumptions about asset life and depreciation rates
> - Use absolute cell references ($) when copying formulas across sheets
> - Regularly validate that referenced cells haven't been deleted or modified
> - Consider creating a depreciation schedule table for better tracking
>
> **Common Pitfalls to Avoid**
> - Don't use rates that would result in unrealistic asset lives
> - Avoid mixing different day count conventions in related calculations
> - Don't modify source cells without updating dependent calculations

### Usage Examples

**1. Manufacturing and Industrial Equipment:**

```
// Heavy Manufacturing Equipment
=AMORDEGRC(500000, "2024-01-01", "2024-12-31", 50000, 1, 0.15, 0)
// Initial Cost: $500,000
// Salvage Value: $50,000 (10%)
// 15% annual rate (6.67-year life)
// First period depreciation

// Production Line Machinery
=AMORDEGRC(750000, "2024-01-15", "2024-12-31", 75000, 1, 0.12, 0)
// Initial Cost: $750,000
// Salvage Value: $75,000 (10%)
// 12% annual rate (8.33-year life)
// Partial first year

// Industrial Robots
=AMORDEGRC(250000, "2024-03-01", "2025-02-28", 25000, 1, 0.20, 0)
// Initial Cost: $250,000
// Salvage Value: $25,000 (10%)
// 20% annual rate (5-year life)
// First year depreciation
```

**2. Commercial Real Estate:**

```
// Office Building
=AMORDEGRC(2000000, "2024-01-01", "2024-12-31", 400000, 1, 0.05, 1)
// Initial Cost: $2,000,000
// Salvage Value: $400,000 (20%)
// 5% annual rate (20-year life)
// Using Actual/Actual basis

// Retail Space
=AMORDEGRC(1500000, "2024-01-01", "2024-12-31", 300000, 1, 0.06, 1)
// Initial Cost: $1,500,000
// Salvage Value: $300,000 (20%)
// 6% annual rate (16.67-year life)
// First year calculation

// Warehouse Facility
=AMORDEGRC(3000000, "2024-02-15", "2025-02-14", 450000, 1, 0.04, 0)
// Initial Cost: $3,000,000
// Salvage Value: $450,000 (15%)
// 4% annual rate (25-year life)
// Custom fiscal year
```

**3. Technology and IT Assets:**

```
// Server Infrastructure
=AMORDEGRC(200000, "2024-01-01", "2024-12-31", 20000, 1, 0.33, 0)
// Initial Cost: $200,000
// Salvage Value: $20,000 (10%)
// 33% annual rate (3-year life)
// High depreciation rate

// Network Equipment
=AMORDEGRC(150000, "2024-03-01", "2024-12-31", 15000, 1, 0.25, 0)
// Initial Cost: $150,000
// Salvage Value: $15,000 (10%)
// 25% annual rate (4-year life)
// Partial first year

// Workstation Fleet
=AMORDEGRC(100000, "2024-01-01", "2024-06-30", 10000, 1, 0.40, 0)
// Initial Cost: $100,000
// Salvage Value: $10,000 (10%)
// 40% annual rate (2.5-year life)
// Semi-annual period
```

**4. Transportation Fleet:**

```
// Commercial Trucks
=AMORDEGRC(400000, "2024-01-01", "2024-12-31", 60000, 1, 0.20, 0)
// Initial Cost: $400,000
// Salvage Value: $60,000 (15%)
// 20% annual rate (5-year life)
// Full year depreciation

// Delivery Vans
=AMORDEGRC(180000, "2024-02-01", "2025-01-31", 27000, 1, 0.25, 0)
// Initial Cost: $180,000
// Salvage Value: $27,000 (15%)
// 25% annual rate (4-year life)
// Custom fiscal period

// Service Vehicles
=AMORDEGRC(120000, "2024-01-01", "2024-12-31", 18000, 1, 0.22, 0)
// Initial Cost: $120,000
// Salvage Value: $18,000 (15%)
// 22% annual rate (4.55-year life)
// Standard calendar year
```

**5. Specialized Equipment:**

```
// Medical Equipment
=AMORDEGRC(300000, "2024-01-01", "2024-12-31", 45000, 1, 0.18, 0)
// Initial Cost: $300,000
// Salvage Value: $45,000 (15%)
// 18% annual rate (5.56-year life)
// Healthcare sector

// Research Laboratory
=AMORDEGRC(250000, "2024-03-15", "2025-03-14", 37500, 1, 0.15, 0)
// Initial Cost: $250,000
// Salvage Value: $37,500 (15%)
// 15% annual rate (6.67-year life)
// Scientific equipment

// Construction Equipment
=AMORDEGRC(600000, "2024-01-01", "2024-12-31", 90000, 1, 0.22, 0)
// Initial Cost: $600,000
// Salvage Value: $90,000 (15%)
// 22% annual rate (4.55-year life)
// Heavy machinery
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
        "Asset Cost",
        "Purchase Date",
        "First Period",
        "Salvage Value",
        "Period",
        "Rate",
        "Depreciation"
    ],
    [
        150000,
        "2023-01-15",
        "2023-06-30",
        15000,
        1,
        0.15,
        "=AMORDEGRC(A2,B2,C2,D2,E2,F2)"
    ],
    [
        75000,
        "2022-03-01",
        "2022-12-31",
        5000,
        2,
        0.2,
        "=AMORDEGRC(A3,B3,C3,D3,E3,F3)"
    ],
    [
        200000,
        "2021-08-15",
        "2021-12-31",
        20000,
        3,
        0.18,
        "=AMORDEGRC(A4,B4,C4,D4,E4,F4)"
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
        "Asset Cost",
        "Purchase Date",
        "First Period",
        "Salvage Value",
        "Period",
        "Rate",
        "Depreciation"
    ],
    [
        150000,
        "2023-01-15",
        "2023-06-30",
        15000,
        1,
        0.15,
        "=AMORDEGRC(A2,B2,C2,D2,E2,F2)"
    ],
    [
        75000,
        "2022-03-01",
        "2022-12-31",
        5000,
        2,
        0.2,
        "=AMORDEGRC(A3,B3,C3,D3,E3,F3)"
    ],
    [
        200000,
        "2021-08-15",
        "2021-12-31",
        20000,
        3,
        0.18,
        "=AMORDEGRC(A4,B4,C4,D4,E4,F4)"
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
        "Asset Cost",
        "Purchase Date",
        "First Period",
        "Salvage Value",
        "Period",
        "Rate",
        "Depreciation"
    ],
    [
        150000,
        "2023-01-15",
        "2023-06-30",
        15000,
        1,
        0.15,
        "=AMORDEGRC(A2,B2,C2,D2,E2,F2)"
    ],
    [
        75000,
        "2022-03-01",
        "2022-12-31",
        5000,
        2,
        0.2,
        "=AMORDEGRC(A3,B3,C3,D3,E3,F3)"
    ],
    [
        200000,
        "2021-08-15",
        "2021-12-31",
        20000,
        3,
        0.18,
        "=AMORDEGRC(A4,B4,C4,D4,E4,F4)"
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
        "Asset Cost",
        "Purchase Date",
        "First Period",
        "Salvage Value",
        "Period",
        "Rate",
        "Depreciation"
    ],
    [
        150000,
        "2023-01-15",
        "2023-06-30",
        15000,
        1,
        0.15,
        "=AMORDEGRC(A2,B2,C2,D2,E2,F2)"
    ],
    [
        75000,
        "2022-03-01",
        "2022-12-31",
        5000,
        2,
        0.2,
        "=AMORDEGRC(A3,B3,C3,D3,E3,F3)"
    ],
    [
        200000,
        "2021-08-15",
        "2021-12-31",
        20000,
        3,
        0.18,
        "=AMORDEGRC(A4,B4,C4,D4,E4,F4)"
    ]
]
            }]
        });
    }
}
```

