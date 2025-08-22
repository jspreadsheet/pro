title: ODDFPRICE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ODDFPRICE function in Jspreadsheet

# ODDFPRICE function



The `ODDFPRICE` function in Jspreadsheet Formulas Pro is used to compute the price per $100 face value of a financial security that has an irregular first period. This is useful in financial analysis when dealing with bonds or securities where the first payment period doesn't align with the subsequent regular payment periods. By using `ODDFPRICE`, users can accurately determine the cost of such securities, optimizing their financial models and predictions.

## Documentation

Calculates the price per $100 face value of a security with an odd first period.

### Category

Financial

### Syntax

ODDFPRICE(settlement, maturity, issue, first_coupon, rate, yld, redemption, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date of the security. |
| `maturity` | The maturity date of the security. |
| `issue` | The issue date of the security. |
| `first_coupon` | The date of the first interest payment, which is an odd period. |
| `rate` | The annual coupon rate of the security. |
| `yld` | The annual yield of the security. |
| `redemption` | The redemption value of the security per $100 face value. |
| `frequency` | The number of coupon payments per year. |
| `[basis]` | Optional. Argument that specifies the day count basis to use. If omitted, Excel uses the US (NASD) 30/360 basis. |


### Behavior

The 'ODDFPRICE' function in a spreadsheet is a financial function that is used to calculate the price per $100 face value of a security that has an odd (short or long) first period. This function takes multiple arguments including settlement, maturity, issue, first_coupon, rate, yield, redemption, frequency, and [basis].

- If any of the required fields are left empty, the function will return an error.
- It does not handle text and boolean values. If inserted, the function will return an error.
- This function requires the settlement date, maturity date, issue date, and the date of the first coupon to be in a date format. If the dates are not in the correct format, it will return a `#VALUE!` error.
- The function treats any value less than 0 (negative numbers) in the rate, yield, redemption, frequency, and basis as invalid and will return a `#NUM!` error.
- If the settlement date is greater than or equal to the maturity date, the function will return a `#NUM!` error.
- It also expects the 'frequency' to be any of the following integers 1, 2, or 4 representing annual, semi-annual, and quarterly respectively. Any other number will result in a `#NUM!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | Occurs if any of the given dates are not in the correct date format. |
| #NUM! | Occurs if the rate, yield, redemption, frequency, and basis are less than 0, or if the settlement date is greater than or equal to the maturity date, or if frequency is any number other than 1, 2, or 4. |
| #NAME? | Occurs if the formula name is misspelled or not properly recognized by the spreadsheet software. |
| #REF! | Occurs if the cell reference within the formula is invalid. |

### Best practices

> - Always ensure that the dates are in the correct date format that your spreadsheet software can understand.
> - When entering the rate, yield, redemption, frequency, and basis, make sure they are greater than or equal to 0. For frequency, the values should be either 1, 2, or 4.
> - Avoid using text or boolean values as this function does not handle them and it will result in an error.
> - Always double-check the formula for any spelling errors or incorrect cell references to avoid `#NAME?` and `#REF!` errors respectively.

### Usage

A few examples using the ODDFPRICE function.

```
ODDFPRICE('2022-01-01', '2022-06-30', '2021-12-31', '2022-03-31', 0.08, 0.09, 100, 2)  
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
        "2022-01-15",
        "=ODDFPRICE(B1,B2,B3,B4,B5,B6,B7,B8)"
    ],
    [
        "Maturity",
        "2025-12-31"
    ],
    [
        "Issue",
        "2021-11-01"
    ],
    [
        "First Coupon",
        "2022-06-30"
    ],
    [
        "Rate",
        0.075
    ],
    [
        "Yield",
        0.082
    ],
    [
        "Redemption",
        100
    ],
    [
        "Frequency",
        2
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
        "2022-01-15",
        "=ODDFPRICE(B1,B2,B3,B4,B5,B6,B7,B8)"
    ],
    [
        "Maturity",
        "2025-12-31"
    ],
    [
        "Issue",
        "2021-11-01"
    ],
    [
        "First Coupon",
        "2022-06-30"
    ],
    [
        "Rate",
        0.075
    ],
    [
        "Yield",
        0.082
    ],
    [
        "Redemption",
        100
    ],
    [
        "Frequency",
        2
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
        "2022-01-15",
        "=ODDFPRICE(B1,B2,B3,B4,B5,B6,B7,B8)"
    ],
    [
        "Maturity",
        "2025-12-31"
    ],
    [
        "Issue",
        "2021-11-01"
    ],
    [
        "First Coupon",
        "2022-06-30"
    ],
    [
        "Rate",
        0.075
    ],
    [
        "Yield",
        0.082
    ],
    [
        "Redemption",
        100
    ],
    [
        "Frequency",
        2
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
        "2022-01-15",
        "=ODDFPRICE(B1,B2,B3,B4,B5,B6,B7,B8)"
    ],
    [
        "Maturity",
        "2025-12-31"
    ],
    [
        "Issue",
        "2021-11-01"
    ],
    [
        "First Coupon",
        "2022-06-30"
    ],
    [
        "Rate",
        0.075
    ],
    [
        "Yield",
        0.082
    ],
    [
        "Redemption",
        100
    ],
    [
        "Frequency",
        2
    ]
]
            }]
        });
    }
}
```

