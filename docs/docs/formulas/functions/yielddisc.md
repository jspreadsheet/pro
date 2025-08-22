title: YIELDDISC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the YIELDDISC function in Jspreadsheet

# YIELDDISC function

`PRO`{.jtag}

The `YIELDDISC` function in Jspreadsheet Formulas Pro is a financial function that calculates the annual yield of a discounted security. This yield is determined by considering both the security's purchase price and its face value. Essentially, it's a tool that helps you understand the annual return you can expect from a particular discounted security investment. This can be particularly useful for financial analysis and investment planning within Jspreadsheet.

## Documentation

Returns the annual yield of a discounted security, based on its price and face value.

### Category

Financial

### Syntax

YIELDDISC(settlement, maturity, pr, redemption, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The security's settlement date. |
| `maturity` | The security's maturity date. |
| `pr` | The security's price per $100 face value. |
| `redemption` | The security's redemption (face) value per $100 face value. |
| `[basis]` | Optional. The day count basis to use in the calculation. Can be 0, 1, 2, 3, or 4. If omitted, it defaults to 0 (US (NASD) 30/360). |


### Behavior

The `YIELDDISC` function in spreadsheets calculates the annual yield for a discounted security, such as a Treasury bill. Here's how it handles different inputs:

- Empty cells: If any of the required parameters are empty, the function will return an error.
- Text: The function expects all parameters to be numeric. If any of the parameters are text, the function will return an error.
- Booleans: Boolean values are not valid inputs for this function. If any of the parameters are boolean values, the function will return an error.
- Errors: If any of the parameters are cells that contain errors, the function will propagate the error.
- Dates: The `settlement` and `maturity` parameters need to be valid dates. If they are not, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #NUM! | Occurs if the `settlement` date is greater than or equal to the `maturity` date, if the `redemption` value is less than or equal to zero, or if the `discount` value is less than or equal to zero. |
| #VALUE! | Occurs if any of the input parameters are non-numeric, the `settlement` or `maturity` are invalid dates, or if any of the input parameters are missing. |
| #DIV/0! | Occurs if the function tries to divide by zero, which might happen due to incorrect input values. |

### Best practices
> - Ensure that the `settlement` date is always less than the `maturity` date. The `settlement` date represents the date a buyer purchases a security, and the `maturity` date is when the security expires. Thus, the `settlement` date should always come before the `maturity` date.
> - Input dates in a format that your spreadsheet program recognizes as a valid date.
> - The `discount` should always be less than the `redemption` value, as it represents the difference between the purchase price and the face value.
> - Always cross-check the unit of `basis` input. It should match with the day-count convention you want to follow for the calculation.

### Usage

A few examples using the YIELDDISC function.

```
YIELDDISC("2022-01-01", "2027-01-01", 95, 100)  
YIELDDISC("2022-01-01", "2032-01-01", 97.5, 100, 1)  
YIELDDISC("2022-01-01", "2037-01-01", 80, 100, 4)  
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
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        98.5,
        100,
        "=YIELDDISC(A2,B2,C2,D2)"
    ],
    [
        "2024-02-01",
        "2025-02-01",
        92.0,
        100,
        "=YIELDDISC(A3,B3,C3,D3)"
    ],
    [
        "2024-03-10",
        "2026-03-10",
        85.5,
        100,
        "=YIELDDISC(A4,B4,C4,D4)"
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
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        98.5,
        100,
        "=YIELDDISC(A2,B2,C2,D2)"
    ],
    [
        "2024-02-01",
        "2025-02-01",
        92.0,
        100,
        "=YIELDDISC(A3,B3,C3,D3)"
    ],
    [
        "2024-03-10",
        "2026-03-10",
        85.5,
        100,
        "=YIELDDISC(A4,B4,C4,D4)"
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
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        98.5,
        100,
        "=YIELDDISC(A2,B2,C2,D2)"
    ],
    [
        "2024-02-01",
        "2025-02-01",
        92.0,
        100,
        "=YIELDDISC(A3,B3,C3,D3)"
    ],
    [
        "2024-03-10",
        "2026-03-10",
        85.5,
        100,
        "=YIELDDISC(A4,B4,C4,D4)"
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
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-07-15",
        98.5,
        100,
        "=YIELDDISC(A2,B2,C2,D2)"
    ],
    [
        "2024-02-01",
        "2025-02-01",
        92.0,
        100,
        "=YIELDDISC(A3,B3,C3,D3)"
    ],
    [
        "2024-03-10",
        "2026-03-10",
        85.5,
        100,
        "=YIELDDISC(A4,B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

