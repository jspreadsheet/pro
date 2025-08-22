title: ODDLYIELD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ODDLYIELD function in Jspreadsheet

# ODDLYIELD function



`ODDLYIELD` in Jspreadsheet Formulas Pro is a function that helps you figure out the profit or return, also known as yield, of a financial security whose last period is not standard or "odd". This could be due to it being shorter or longer than the regular timeframes. This function is quite helpful in managing and analyzing investments, as it allows you to understand potential returns even when the investment period doesn't align with common standards.

## Documentation

Calculates the yield of a security with an odd last period.

### Category

Financial

### Syntax

ODDLYIELD(settlement, maturity, issue, last_interest, rate, pr, redemption, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date of the security. |
| `maturity` | The maturity date of the security. |
| `issue` | The issue date of the security. |
| `last_interest` | The date of the last interest payment, which is an odd period. |
| `rate` | The annual coupon rate of the security. |
| `pr` | The price per $100 face value of the security. |
| `redemption` | The redemption value of the security per $100 face value. |
| `frequency` | The number of coupon payments per year. |
| `[basis]` | Optional. An argument that specifies the day count basis to use. If omitted, Excel uses the US (NASD) 30/360 basis. |


### Behavior

The `ODDLYIELD` function in a spreadsheet calculates the yield of a security that has an odd (short or long) first period. It expects the following parameters: settlement, maturity, last interest, rate, pr, redemption, frequency, [basis]. 

- Settlement is the security's settlement date.
- Maturity is the security's maturity date.
- Last interest is the security's last interest date.
- Rate is the security's interest rate.
- Pr is the security's price.
- Redemption is the security's redemption value per 100 dollars face value.
- Frequency is the number of coupon payments per year.
- Basis is an optional parameter that specifies the type of day count basis to use.

The function handles empty cells and text by returning a `#VALUE!` error. If a boolean value is used, it will be coerced to a number (TRUE to 1 and FALSE to 0). If any date is invalid, it returns a `#VALUE!` error. If rate <=0, pr <=0, redemption <=0, or if frequency is not an integer (1,2,4), it will return a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error is returned if any of the input parameters are text that cannot be translated into numbers. It is also returned if any of the date parameters are not valid dates. |
| `#NUM!` | This error is returned if rate <=0, pr <=0, redemption <=0, or if frequency is not an integer (1,2,4). |
| `#DIV/0!` | This error is returned if the function ends up dividing by zero in its calculations. |

### Best practices

> - Always ensure that the input dates are valid, as invalid dates will cause the function to return a `#VALUE!` error.
> - Make sure that all input parameters are numbers. Text or boolean values will lead to errors.
> - Check that the rate, price, and redemption values are all greater than zero to avoid a `#NUM!` error.
> - Ensure that the frequency is an integer and falls into one of the expected values (1 for annual, 2 for semi-annual, and 4 for quarterly) to avoid a `#NUM!` error.

### Usage

A few examples using the ODDLYIELD function.

```
ODDLYIELD('2022-01-01', '20220-06-30', '2021-12-31', '2022-03-31', 0.08, 98, 100, 2) returns approximately 10.17%  
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
        "Last Interest",
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2022-01-15",
        "2022-08-31",
        "2021-11-01",
        "2022-05-31",
        0.075,
        97.5,
        100,
        2,
        "=ODDLYIELD(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2022-03-01",
        "2022-12-15",
        "2021-12-01",
        "2022-09-15",
        0.06,
        102.25,
        100,
        4,
        "=ODDLYIELD(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2022-02-10",
        "2022-07-20",
        "2021-10-15",
        "2022-04-20",
        0.085,
        95.75,
        100,
        2,
        "=ODDLYIELD(A4,B4,C4,D4,E4,F4,G4,H4)"
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
        "Last Interest",
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2022-01-15",
        "2022-08-31",
        "2021-11-01",
        "2022-05-31",
        0.075,
        97.5,
        100,
        2,
        "=ODDLYIELD(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2022-03-01",
        "2022-12-15",
        "2021-12-01",
        "2022-09-15",
        0.06,
        102.25,
        100,
        4,
        "=ODDLYIELD(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2022-02-10",
        "2022-07-20",
        "2021-10-15",
        "2022-04-20",
        0.085,
        95.75,
        100,
        2,
        "=ODDLYIELD(A4,B4,C4,D4,E4,F4,G4,H4)"
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
        "Last Interest",
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2022-01-15",
        "2022-08-31",
        "2021-11-01",
        "2022-05-31",
        0.075,
        97.5,
        100,
        2,
        "=ODDLYIELD(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2022-03-01",
        "2022-12-15",
        "2021-12-01",
        "2022-09-15",
        0.06,
        102.25,
        100,
        4,
        "=ODDLYIELD(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2022-02-10",
        "2022-07-20",
        "2021-10-15",
        "2022-04-20",
        0.085,
        95.75,
        100,
        2,
        "=ODDLYIELD(A4,B4,C4,D4,E4,F4,G4,H4)"
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
        "Last Interest",
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2022-01-15",
        "2022-08-31",
        "2021-11-01",
        "2022-05-31",
        0.075,
        97.5,
        100,
        2,
        "=ODDLYIELD(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2022-03-01",
        "2022-12-15",
        "2021-12-01",
        "2022-09-15",
        0.06,
        102.25,
        100,
        4,
        "=ODDLYIELD(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2022-02-10",
        "2022-07-20",
        "2021-10-15",
        "2022-04-20",
        0.085,
        95.75,
        100,
        2,
        "=ODDLYIELD(A4,B4,C4,D4,E4,F4,G4,H4)"
    ]
]
            }]
        });
    }
}
```

