title: AMORLINC Function - Calculate Linear Asset Depreciation in Jspreadsheet
keywords: AMORLINC function, linear depreciation calculator, straight-line depreciation, financial accounting, depreciation calculation, Excel-compatible depreciation, JavaScript spreadsheet functions, asset value calculation, business accounting, financial planning, asset management, equipment depreciation, property depreciation
description: Calculate precise asset depreciation using the AMORLINC function in Jspreadsheet. Perfect for financial accounting and asset management using the straight-line depreciation method for consistent annual depreciation of business assets.

# AMORLINC function

`PRO`{.jtag}

The `AMORLINC` function in Jspreadsheet Formulas Pro is a sophisticated financial tool for calculating asset depreciation using the straight-line method. This method is widely used in business accounting for its simplicity and predictability. Key applications include:

- Fixed asset accounting
- Financial statement preparation
- Tax planning and compliance
- Capital budgeting
- Asset lifecycle management
- Investment analysis

The function assumes uniform depreciation over an asset's life, making it particularly suitable for:
- Buildings and real estate
- Long-term infrastructure
- Manufacturing equipment
- Office furniture and fixtures
- Vehicles and transportation equipment

Unlike declining balance methods, AMORLINC provides consistent, predictable depreciation amounts, which is valuable for stable financial planning and reporting.

## Documentation

Returns the depreciation for an accounting period, based on the straight-line method.

### Category

Financial

### Syntax

AMORLINC(cost, date_purchased, first_period, salvage, period, rate, [basis])

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

The `AMORLINC` function is used in spreadsheets to calculate the depreciation of an asset for a specified period using the arithmetic-declining method. The function requires six arguments to operate: `cost`, `date_purchased`, `first_period`, `salvage`, `period`, and `rate`.

- If any cell referenced by the function is empty, the function will treat it as a zero value.
- The function only accepts numerical values for its arguments. If a text string or boolean value is passed to the function, it will return an error.
- In case of date-related arguments (`date_purchased`, `first_period`), the function expects the date in Excel's serialized date format. Any other format will result in an error.
- The function will return an error if the `rate` argument is less than or equal to zero.
- The function will return an error if the `period` argument is less than zero or greater than the difference between `date_purchased` and `first_period`.
- If any of the arguments are arrays or range of cells, the function will return an array of results.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the given arguments are not numerical values, or the date-related arguments are not in Excel's serialized date format. |
| #NUM! | This error is returned when the `rate` argument is less than or equal to zero, or the `period` argument is less than zero or greater than the difference between `date_purchased` and `first_period`. |
| #REF! | This error is returned when an invalid cell reference is provided. |

### Best practices

> - Always ensure that the date-related arguments are in Excel's serialized date format to avoid errors.
> - Be cautious when inputting the `rate` argument. It should always be a positive value.
> - Be aware of the `period` argument. It should not be less than zero or greater than the difference between `date_purchased` and `first_period`.
> - It's a good practice to check the types of values that are getting passed to the function to avoid `#VALUE!` errors.

### Usage Examples

Here are practical examples of the AMORLINC function in different business scenarios:

**1. Office Equipment Depreciation:**
```
=AMORLINC(10000, "2024-01-01", "2024-12-31", 2000, 1, 0.2)
// Cost: $10,000
// Purchase: Jan 1, 2024
// First Period End: Dec 31, 2024
// Salvage Value: $2,000
// Period: 1
// Rate: 20% (5-year life)
```

**2. Manufacturing Equipment:**
```
=AMORLINC(50000, "2024-01-15", "2024-12-31", 5000, 1, 0.1)
// Cost: $50,000
// Purchase: Jan 15, 2024
// First Period End: Dec 31, 2024
// Salvage Value: $5,000
// Period: 1
// Rate: 10% (10-year life)
```

**3. Commercial Vehicle Fleet:**
```
=AMORLINC(35000, "2024-03-01", "2025-02-28", 7000, 2, 0.25)
// Cost: $35,000
// Purchase: March 1, 2024
// First Period End: Feb 28, 2025
// Salvage Value: $7,000
// Period: 2
// Rate: 25% (4-year life)
```

**4. Building Depreciation:**
```
=AMORLINC(1000000, "2024-01-01", "2024-12-31", 200000, 1, 0.04)
// Cost: $1,000,000
// Purchase: Jan 1, 2024
// First Period End: Dec 31, 2024
// Salvage Value: $200,000
// Period: 1
// Rate: 4% (25-year life)
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
        "Cost",
        "Date Purchased",
        "First Period",
        "Salvage",
        "Period",
        "Rate",
        "Depreciation"
    ],
    [
        25000,
        "2023-01-15",
        "2023-12-31",
        5000,
        1,
        0.15,
        "=AMORLINC(A2,B2,C2,D2,E2,F2)"
    ],
    [
        50000,
        "2022-06-01",
        "2022-12-31",
        8000,
        2,
        0.12,
        "=AMORLINC(A3,B3,C3,D3,E3,F3)"
    ],
    [
        15000,
        "2024-03-10",
        "2024-12-31",
        2000,
        1,
        0.2,
        "=AMORLINC(A4,B4,C4,D4,E4,F4)"
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
        "Cost",
        "Date Purchased",
        "First Period",
        "Salvage",
        "Period",
        "Rate",
        "Depreciation"
    ],
    [
        25000,
        "2023-01-15",
        "2023-12-31",
        5000,
        1,
        0.15,
        "=AMORLINC(A2,B2,C2,D2,E2,F2)"
    ],
    [
        50000,
        "2022-06-01",
        "2022-12-31",
        8000,
        2,
        0.12,
        "=AMORLINC(A3,B3,C3,D3,E3,F3)"
    ],
    [
        15000,
        "2024-03-10",
        "2024-12-31",
        2000,
        1,
        0.2,
        "=AMORLINC(A4,B4,C4,D4,E4,F4)"
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
        "Cost",
        "Date Purchased",
        "First Period",
        "Salvage",
        "Period",
        "Rate",
        "Depreciation"
    ],
    [
        25000,
        "2023-01-15",
        "2023-12-31",
        5000,
        1,
        0.15,
        "=AMORLINC(A2,B2,C2,D2,E2,F2)"
    ],
    [
        50000,
        "2022-06-01",
        "2022-12-31",
        8000,
        2,
        0.12,
        "=AMORLINC(A3,B3,C3,D3,E3,F3)"
    ],
    [
        15000,
        "2024-03-10",
        "2024-12-31",
        2000,
        1,
        0.2,
        "=AMORLINC(A4,B4,C4,D4,E4,F4)"
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
        "Cost",
        "Date Purchased",
        "First Period",
        "Salvage",
        "Period",
        "Rate",
        "Depreciation"
    ],
    [
        25000,
        "2023-01-15",
        "2023-12-31",
        5000,
        1,
        0.15,
        "=AMORLINC(A2,B2,C2,D2,E2,F2)"
    ],
    [
        50000,
        "2022-06-01",
        "2022-12-31",
        8000,
        2,
        0.12,
        "=AMORLINC(A3,B3,C3,D3,E3,F3)"
    ],
    [
        15000,
        "2024-03-10",
        "2024-12-31",
        2000,
        1,
        0.2,
        "=AMORLINC(A4,B4,C4,D4,E4,F4)"
    ]
]
            }]
        });
    }
}
```

