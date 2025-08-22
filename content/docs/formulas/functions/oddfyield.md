title: ODDFYIELD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ODDFYIELD function in Jspreadsheet

# ODDFYIELD function



In Jspreadsheet Formulas Pro, the `ODDFYIELD` function is used to calculate the yield of a security with an irregular first period. When you invest in securities like bonds, the return on your investment is called the yield. However, sometimes the first period of the investment isn't a standard length, which can make calculating the yield a bit tricky. The `ODDFYIELD` function helps you determine the exact return on such investments, providing you accurate financial insights.

## Documentation

Calculates the yield of a security with an odd first period.

### Category

Financial

### Syntax

ODDFYIELD(settlement, maturity, issue, first_coupon, rate, pr, redemption, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date of the security. |
| `maturity` | The maturity date of the security. |
| `issue` | The issue date of the security. |
| `first_coupon` | The date of the first interest payment, which is an odd period. |
| `rate` | The annual coupon rate of the security. |
| `pr` | The price per $100 face value of the security. |
| `redemption` | The redemption value of the security per $100 face value. |
| `frequency` | The number of coupon payments per year. |
| `[basis]]` | Optional argument that specifies the day count basis to use. If omitted, Excel uses the US (NASD) 30/360 basis. |


### Behavior

The 'ODDFYIELD' function in spreadsheets calculates the yield of a security that has an odd (short or long) first period. It requires seven arguments: settlement, maturity, last interest, rate, pr, redemption, frequency; and has two optional arguments: basis and method. 

- If any cell referenced in the formula contains text, 'ODDFYIELD' will return a `#VALUE!` error.
- If any cell referenced in the formula contains boolean values, 'ODDFYIELD' will interpret the boolean as a number. `TRUE` is interpreted as 1 and `FALSE` is interpreted as 0.
- If any cell referenced is empty, 'ODDFYIELD' will treat it as zero.
- If the settlement date is greater than the maturity date, 'ODDFYIELD' will return a `#NUM!` error.
- If the rate is less than or equal to zero, or if the redemption value is less than or equal to zero, 'ODDFYIELD' will return a `#NUM!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | Occurs if any of the provided arguments are non-numeric. |
| #NUM! | Occurs if the settlement date is greater than the maturity date, or if the rate or redemption value is less than or equal to zero. |
| #DIV/0! | Occurs if the function is trying to divide a number by zero. |

### Best practices

> - Always ensure that the settlement date is less than the maturity date to avoid a `#NUM!` error.
> - Ensure all inputs are numeric. Non-numeric inputs will result in a `#VALUE!` error.
> - Avoid using boolean values as inputs. Although the function can process them, it can lead to unexpected results.
> - Always check that the rate and redemption values are greater than zero to prevent a `#NUM!` error.

### Usage

A few examples using the ODDFYIELD function.

```
ODDFYIELD('2022-01-01','2022-06-30','12/31/2021','3/31/2022',0.08,99.25,100,2)  
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
        "First Coupon",
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2023-02-15",
        "2028-12-31",
        "2023-01-01",
        "2023-06-30",
        0.065,
        98.5,
        100,
        2,
        "=ODDFYIELD(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2023-03-01",
        "2030-09-15",
        "2023-01-15",
        "2023-09-15",
        0.055,
        102.25,
        100,
        2,
        "=ODDFYIELD(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2023-04-10",
        "2027-12-31",
        "2023-02-01",
        "2023-12-31",
        0.075,
        96.75,
        100,
        4,
        "=ODDFYIELD(A4,B4,C4,D4,E4,F4,G4,H4)"
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
        "First Coupon",
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2023-02-15",
        "2028-12-31",
        "2023-01-01",
        "2023-06-30",
        0.065,
        98.5,
        100,
        2,
        "=ODDFYIELD(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2023-03-01",
        "2030-09-15",
        "2023-01-15",
        "2023-09-15",
        0.055,
        102.25,
        100,
        2,
        "=ODDFYIELD(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2023-04-10",
        "2027-12-31",
        "2023-02-01",
        "2023-12-31",
        0.075,
        96.75,
        100,
        4,
        "=ODDFYIELD(A4,B4,C4,D4,E4,F4,G4,H4)"
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
        "First Coupon",
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2023-02-15",
        "2028-12-31",
        "2023-01-01",
        "2023-06-30",
        0.065,
        98.5,
        100,
        2,
        "=ODDFYIELD(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2023-03-01",
        "2030-09-15",
        "2023-01-15",
        "2023-09-15",
        0.055,
        102.25,
        100,
        2,
        "=ODDFYIELD(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2023-04-10",
        "2027-12-31",
        "2023-02-01",
        "2023-12-31",
        0.075,
        96.75,
        100,
        4,
        "=ODDFYIELD(A4,B4,C4,D4,E4,F4,G4,H4)"
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
        "First Coupon",
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2023-02-15",
        "2028-12-31",
        "2023-01-01",
        "2023-06-30",
        0.065,
        98.5,
        100,
        2,
        "=ODDFYIELD(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2023-03-01",
        "2030-09-15",
        "2023-01-15",
        "2023-09-15",
        0.055,
        102.25,
        100,
        2,
        "=ODDFYIELD(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2023-04-10",
        "2027-12-31",
        "2023-02-01",
        "2023-12-31",
        0.075,
        96.75,
        100,
        4,
        "=ODDFYIELD(A4,B4,C4,D4,E4,F4,G4,H4)"
    ]
]
            }]
        });
    }
}
```

