title: COUPNUM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUPNUM function in Jspreadsheet

# COUPNUM function

`PRO`{.jtag}

The `COUPNUM` function in Jspreadsheet Formulas Pro helps determine the total number of periodic interest payments for a financial security between its settlement date and maturity date. Essentially, it allows you to figure out how many times interest will be paid during the lifespan of the security. This function is very useful for managing and planning financial investments, especially for bonds or similar securities that have periodic interest payments.

## Documentation

Calculates the number of coupon payments between the settlement date and the maturity date for a security that pays periodic interest.

### Category

Financial

### Syntax

COUPNUM(settlement, maturity, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date. |
| `maturity` | The maturity date. |
| `frequency` | The number of coupon payments per year. |
| `[basis]` | Optional. The type of day count basis to use. If omitted, assumed to be 0 (US or NASD) by default. |


### Behavior

The `COUPNUM` function in spreadsheet calculates the number of coupons (periods) payable between the settlement date and the maturity date of a security. Its behavior is as follows:

- The function takes three arguments: `settlement`, `maturity`, and `frequency`. All three arguments must be valid and correctly formatted for the function to work properly.
- `settlement` and `maturity` dates should be valid dates and the `settlement` date should be earlier than the `maturity` date. 
- `frequency` should be an integer representing the number of coupon payments per year. This can be 1 (annual), 2 (semi-annual), or 4 (quarterly).
- The function will ignore any cells that contain text, unless the text can be interpreted as a valid date or number.
- Boolean values are treated as 0 for `False` and 1 for `True`.
- Empty cells are treated as zero.
- If any argument is an error, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the `settlement`, `maturity` or `frequency` argument is not a valid data type. |
| #NUM! | This error occurs when the `settlement` date is later than the `maturity` date, or if the `frequency` is any number other than 1, 2 or 4. |
| #NAME? | This error occurs when the function name is misspelled or not recognized by the spreadsheet program. |

### Best practices

> - Always ensure that the `settlement` date is earlier than the `maturity` date, otherwise you'll get a #NUM! error.
> - Be sure to input the `frequency` as one of the following integers: 1, 2, or 4. Any other value will return a #NUM! error.
> - Keep in mind that this function assumes a "30/360" day count basis, which means each month is assumed to have 30 days and each year is assumed to have 360 days. This might not reflect actual timelines in some cases.
> - Ensure that the data types for all arguments are correct to avoid #VALUE! errors. The `settlement` and `maturity` arguments should be valid dates, and `frequency` should be a number.

### Usage

A few examples using the COUPNUM function.

```
COUPNUM("2022-01-01", "2022-06-30", 2)  
COUPNUM("2022-01-01", "2022-06-30", 4, 1)  
COUPNUM("2022-01-01", "2022-06-30", 2, 3)  
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
        "Coupon Payments"
    ],
    [
        "2023-01-15",
        "2025-01-15",
        2,
        "=COUPNUM(A2,B2,C2)"
    ],
    [
        "2023-03-01",
        "2024-09-01",
        4,
        "=COUPNUM(A3,B3,C3)"
    ],
    [
        "2023-06-15",
        "2026-12-15",
        2,
        "=COUPNUM(A4,B4,C4)"
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
        "Coupon Payments"
    ],
    [
        "2023-01-15",
        "2025-01-15",
        2,
        "=COUPNUM(A2,B2,C2)"
    ],
    [
        "2023-03-01",
        "2024-09-01",
        4,
        "=COUPNUM(A3,B3,C3)"
    ],
    [
        "2023-06-15",
        "2026-12-15",
        2,
        "=COUPNUM(A4,B4,C4)"
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
        "Coupon Payments"
    ],
    [
        "2023-01-15",
        "2025-01-15",
        2,
        "=COUPNUM(A2,B2,C2)"
    ],
    [
        "2023-03-01",
        "2024-09-01",
        4,
        "=COUPNUM(A3,B3,C3)"
    ],
    [
        "2023-06-15",
        "2026-12-15",
        2,
        "=COUPNUM(A4,B4,C4)"
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
        "Coupon Payments"
    ],
    [
        "2023-01-15",
        "2025-01-15",
        2,
        "=COUPNUM(A2,B2,C2)"
    ],
    [
        "2023-03-01",
        "2024-09-01",
        4,
        "=COUPNUM(A3,B3,C3)"
    ],
    [
        "2023-06-15",
        "2026-12-15",
        2,
        "=COUPNUM(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

