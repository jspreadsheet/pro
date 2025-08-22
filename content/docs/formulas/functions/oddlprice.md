title: ODDLPRICE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ODDLPRICE function in Jspreadsheet

# ODDLPRICE function



The `ODDLPRICE` function in Jspreadsheet Formulas Pro is used to compute the price per $100 face value of a financial security that has an unusual last period. This could be a bond or any other sort of security. Essentially, this function helps you determine the value of a security when the final time period is not standard or odd. This can be useful for investors or financial analysts who need to assess the value of securities with irregular time frames.

## Documentation

Calculates the price per $100 face value of a security with an odd last period.

### Category

Financial

### Syntax

ODDLPRICE(settlement, maturity, issue, last_interest, rate, yld, redemption, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date of the security. |
| `maturity` | The maturity date of the security. |
| `issue` | The issue date of the security. |
| `last_interest` | The date of the last interest payment, which is an odd period. |
| `rate` | The annual coupon rate of the security. |
| `yld` | The annual yield of the security. |
| `redemption` | The redemption value of the security per $100 face value. |
| `frequency` | The number of coupon payments per year. |
| `[basis]` | Optional. Argument that specifies the day count basis to use. If omitted, Excel uses the US (NASD) 30/360 basis. |


### Behavior

The `ODDLPRICE` function in spreadsheets is used to calculate the price per $100 face value of a security that has an odd (short or long) last period. This function takes seven arguments: settlement date, maturity date, last interest date, rate, yield, redemption, and frequency. 

- If any of the required fields are empty, the function will return an error. 
- It does not accept text or boolean values. All parameters should be numerical, with dates formatted correctly.
- The function expects the rate, yield, and redemption to be expressed as percentages. If they're entered as whole numbers, the function will return inaccurate results.
- The `ODDLPRICE` function handles dates based on the 360 days per year convention (12 x 30 days), which is common in accounting.
- If any invalid date is provided, the function returns a `#VALUE!` error. The function also returns this error if the settlement date is greater than the maturity date.
- `#NUM!` error is returned if the rate, yield, redemption is less than zero, or if the frequency is any number other than 1, 2, or 4.

### Common Errors

| Error | Description |
| --- | --- |
| `#NAME?` | This error occurs if the spreadsheet does not recognize the function name. This might be due to a typo in the function name. |
| `#VALUE!` | This error is returned if any of the supplied arguments are non-numeric, or if the dates are not valid. |
| `#NUM!` | This error is returned if the rate, yield, redemption is less than zero, or if the frequency is any number other than 1, 2, or 4. |

### Best practices

> - Always ensure the dates are properly formatted. Spreadsheets can interpret dates in different ways depending on the system settings, so it's good practice to confirm that your dates are being read correctly.
> - Always express rate, yield, and redemption as percentages, not whole numbers.
> - Ensure that the settlement date is not later than the maturity date to avoid a `#VALUE!` error.
> - Use nested functions like `DATE` to build dates instead of typing them manually, to avoid potential errors due to different date-time formats.

### Usage

A few examples using the ODDLPRICE function.

```
ODDLPRICE('2022-01-01','2022-06-30','12/31/2021','3/31/2022',0.08,0.09,100,2) returns approximately 98.83  
ODDLPRICE('2022-01-01','2022-06-30','12/31/2021','3/31/2022',0.05,0.06,100,4) returns approximately 97.31  
ODDLPRICE('2022-01-01','2022-06-30','12/31/2021','3/31/2022',0.025,0.03,100,1,4) returns approximately 99.45  
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
        "Yield",
        "Redemption",
        "Frequency",
        "Price"
    ],
    [
        "2022-01-01",
        "2022-06-30",
        "2021-12-31",
        "2022-03-31",
        0.08,
        0.09,
        100,
        2,
        "=ODDLPRICE(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2022-02-15",
        "2022-09-15",
        "2022-01-01",
        "2022-06-01",
        0.05,
        0.06,
        100,
        4,
        "=ODDLPRICE(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2022-03-01",
        "2022-08-31",
        "2022-01-15",
        "2022-05-15",
        0.025,
        0.03,
        100,
        1,
        "=ODDLPRICE(A4,B4,C4,D4,E4,F4,G4,H4)"
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
        "Yield",
        "Redemption",
        "Frequency",
        "Price"
    ],
    [
        "2022-01-01",
        "2022-06-30",
        "2021-12-31",
        "2022-03-31",
        0.08,
        0.09,
        100,
        2,
        "=ODDLPRICE(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2022-02-15",
        "2022-09-15",
        "2022-01-01",
        "2022-06-01",
        0.05,
        0.06,
        100,
        4,
        "=ODDLPRICE(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2022-03-01",
        "2022-08-31",
        "2022-01-15",
        "2022-05-15",
        0.025,
        0.03,
        100,
        1,
        "=ODDLPRICE(A4,B4,C4,D4,E4,F4,G4,H4)"
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
        "Yield",
        "Redemption",
        "Frequency",
        "Price"
    ],
    [
        "2022-01-01",
        "2022-06-30",
        "2021-12-31",
        "2022-03-31",
        0.08,
        0.09,
        100,
        2,
        "=ODDLPRICE(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2022-02-15",
        "2022-09-15",
        "2022-01-01",
        "2022-06-01",
        0.05,
        0.06,
        100,
        4,
        "=ODDLPRICE(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2022-03-01",
        "2022-08-31",
        "2022-01-15",
        "2022-05-15",
        0.025,
        0.03,
        100,
        1,
        "=ODDLPRICE(A4,B4,C4,D4,E4,F4,G4,H4)"
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
        "Yield",
        "Redemption",
        "Frequency",
        "Price"
    ],
    [
        "2022-01-01",
        "2022-06-30",
        "2021-12-31",
        "2022-03-31",
        0.08,
        0.09,
        100,
        2,
        "=ODDLPRICE(A2,B2,C2,D2,E2,F2,G2,H2)"
    ],
    [
        "2022-02-15",
        "2022-09-15",
        "2022-01-01",
        "2022-06-01",
        0.05,
        0.06,
        100,
        4,
        "=ODDLPRICE(A3,B3,C3,D3,E3,F3,G3,H3)"
    ],
    [
        "2022-03-01",
        "2022-08-31",
        "2022-01-15",
        "2022-05-15",
        0.025,
        0.03,
        100,
        1,
        "=ODDLPRICE(A4,B4,C4,D4,E4,F4,G4,H4)"
    ]
]
            }]
        });
    }
}
```

