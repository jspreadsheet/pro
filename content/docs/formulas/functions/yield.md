title: YIELD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the YIELD function in Jspreadsheet

# YIELD function

`PRO`{.jtag}

The `YIELD` function in Jspreadsheet Formulas Pro is a tool that calculates the return on an investment that pays periodic interest, based on the price you paid for it and the interest rate it generates. Simply put, it helps you understand how profitable your investment is. By inputting the necessary data, such as settlement date, maturity date, rate, pr, and redemption, it will provide you with the yield of the security. This is particularly useful for understanding the potential earnings from bonds or other interest-earning securities.

## Documentation

Returns the yield on a security that pays periodic interest, based on its price and the interest rate.

### Category

Financial

### Syntax

YIELD(settlement, maturity, rate, pr, redemption, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The security's settlement date. |
| `maturity` | The security's maturity date. |
| `rate` | The security's annual coupon rate. |
| `pr` | The security's price per $100 face value. |
| `redemption` | The security's redemption (face) value per $100 face value. |
| `frequency` | The number of coupon payments per year. Must be 1, 2, or 4. |
| `[basis]` | Optional. The day count basis to use in the calculation. Can be 0, 1, 2, 3, or 4. If omitted, it defaults to 0 (US (NASD) 30/360). |


### Behavior

The 'YIELD' function in spreadsheets is used to calculate the yield on a security that pays periodic interest. The function generally requires the following inputs: settlement date, maturity date, rate, pr, redemption, frequency, and basis. 

- Empty cells: If any of the required fields are left empty, the 'YIELD' function will return an error. 
- Text: Text in any of the required fields will result in an error.
- Booleans: Boolean values are not appropriate inputs for the 'YIELD' function and will result in an error.
- Errors: If any of the input cells contain an error, the 'YIELD' function will also return an error.
- Dates: The settlement date and maturity date should be entered as a date format. If the dates are not valid or if the settlement date is after the maturity date, the function will return an error. 

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the input parameters are not numeric or the dates are not valid. |
| #NUM! | This error occurs when the settlement date is greater than the maturity date, if the rate is less than 0, or if the pr, redemption, frequency or basis is less than 0. |
| #DIV/0! | This error will occur if the redemption value is 0. |

### Best practices

> - Always ensure that the dates are entered in the correct format and that the settlement date is before the maturity date.
> - Check to ensure that all input parameters are numeric and that none of them are less than 0.
> - Be aware that yield is calculated using the assumption that all payments are received on schedule and are reinvested at the same rate.
> - Always double-check your inputs and calculations, as errors in bond yield calculations can significantly impact financial decisions and analyses.

### Usage

A few examples using the YIELD function.

```
YIELD("2022-01-01", "2027-01-01", 0.05, 95, 100, 2)  
YIELD("2022-01-01", "2032-01-01", 0.08, 97.5, 100, 1, 1)  
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
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2024-01-15",
        "2029-01-15",
        0.06,
        98.5,
        100,
        2,
        "=YIELD(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2024-03-01",
        "2034-03-01",
        0.075,
        95.25,
        100,
        1,
        "=YIELD(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2024-06-15",
        "2027-06-15",
        0.045,
        102.75,
        100,
        2,
        "=YIELD(A4,B4,C4,D4,E4,F4)"
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
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2024-01-15",
        "2029-01-15",
        0.06,
        98.5,
        100,
        2,
        "=YIELD(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2024-03-01",
        "2034-03-01",
        0.075,
        95.25,
        100,
        1,
        "=YIELD(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2024-06-15",
        "2027-06-15",
        0.045,
        102.75,
        100,
        2,
        "=YIELD(A4,B4,C4,D4,E4,F4)"
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
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2024-01-15",
        "2029-01-15",
        0.06,
        98.5,
        100,
        2,
        "=YIELD(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2024-03-01",
        "2034-03-01",
        0.075,
        95.25,
        100,
        1,
        "=YIELD(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2024-06-15",
        "2027-06-15",
        0.045,
        102.75,
        100,
        2,
        "=YIELD(A4,B4,C4,D4,E4,F4)"
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
        "Rate",
        "Price",
        "Redemption",
        "Frequency",
        "Yield"
    ],
    [
        "2024-01-15",
        "2029-01-15",
        0.06,
        98.5,
        100,
        2,
        "=YIELD(A2,B2,C2,D2,E2,F2)"
    ],
    [
        "2024-03-01",
        "2034-03-01",
        0.075,
        95.25,
        100,
        1,
        "=YIELD(A3,B3,C3,D3,E3,F3)"
    ],
    [
        "2024-06-15",
        "2027-06-15",
        0.045,
        102.75,
        100,
        2,
        "=YIELD(A4,B4,C4,D4,E4,F4)"
    ]
]
            }]
        });
    }
}
```

