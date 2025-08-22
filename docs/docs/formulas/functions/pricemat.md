title: PRICEMAT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PRICEMAT function in Jspreadsheet

# PRICEMAT function

`PRO`{.jtag}

The `PRICEMAT` function in Jspreadsheet Formulas Pro is a financial tool that calculates the price per $100 face value of a security that pays interest only at the point of maturity. This is useful for understanding the cost of securities that do not pay periodic interest. By using this formula, you can accurately determine the price you would pay today for a security that will only provide returns at the end of its term.

## Documentation

Returns the price per $100 face value of a security that pays interest at maturity.

### Category

Financial

### Syntax

PRICEMAT(settlement, maturity, issue, rate, yld, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date of the security. |
| `maturity` | The maturity date of the security. |
| `issue` | The issue date of the security. |
| `rate` | The annual interest rate of the security. |
| `yld` | The annual yield of the security. |
| `[basis]` | Optional. The day count basis to use for calculating bond interest. If omitted, defaults to 0 (US (NASD) 30/360). |


### Behavior

The `PRICEMAT` function in a spreadsheet calculates the price per $100 face value of a security that pays interest at maturity. It requires six arguments: settlement date, maturity date, issue date, rate, yield, and redemption value.

- If the settlement date, maturity date, or issue date is not a valid date, the function will return a `#VALUE!` error.
- If any of the required fields are left empty, the function will return a `#NUM!` error.
- This function does not handle text or boolean inputs, it expects numerical and date inputs. If it encounters text or boolean values, it will return a `#VALUE!` error.
- If the provided issue date is after the settlement date, the function will return a `#NUM!` error.
- If the yield, rate, or redemption value is less than 0, the function will return a `#NUM!` error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | Occurs if any of the provided arguments are not of the expected data type. |
| `#NUM!` | Occurs if any of the numerical arguments are less than 0, or if the issue date is after the settlement date, or any required fields are left empty. |
| `#NAME?` | Occurs if the function is misspelled or does not exist in the spreadsheet software. |

### Best practices

> - Always ensure that the settlement date, maturity date and issue date are valid dates.
> - Ensure that the yield, rate, and redemption values are all positive values.
> - Be careful with the order of the arguments. The first argument should be the settlement date, followed by the maturity date, issue date, rate, yield, and finally the redemption value.
> - Always check your function for typos or errors in syntax to avoid the `#NAME?` error. The correct syntax is `PRICEMAT(settlement, maturity, issue, rate, yld, redemption)`.

### Usage

A few examples using the PRICEMAT function.

```
PRICEMAT("1/1/2023","1/1/2043","2022-01-01",6%,8%)  
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
        "Rate",
        "Yield",
        "Price per $100"
    ],
    [
        "2023-01-15",
        "2025-01-15",
        "2022-01-15",
        0.05,
        0.06,
        "=PRICEMAT(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-03-01",
        "2024-03-01",
        "2022-03-01",
        0.04,
        0.045,
        "=PRICEMAT(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-06-15",
        "2026-06-15",
        "2022-06-15",
        0.065,
        0.07,
        "=PRICEMAT(A4,B4,C4,D4,E4)"
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
        "Rate",
        "Yield",
        "Price per $100"
    ],
    [
        "2023-01-15",
        "2025-01-15",
        "2022-01-15",
        0.05,
        0.06,
        "=PRICEMAT(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-03-01",
        "2024-03-01",
        "2022-03-01",
        0.04,
        0.045,
        "=PRICEMAT(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-06-15",
        "2026-06-15",
        "2022-06-15",
        0.065,
        0.07,
        "=PRICEMAT(A4,B4,C4,D4,E4)"
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
        "Rate",
        "Yield",
        "Price per $100"
    ],
    [
        "2023-01-15",
        "2025-01-15",
        "2022-01-15",
        0.05,
        0.06,
        "=PRICEMAT(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-03-01",
        "2024-03-01",
        "2022-03-01",
        0.04,
        0.045,
        "=PRICEMAT(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-06-15",
        "2026-06-15",
        "2022-06-15",
        0.065,
        0.07,
        "=PRICEMAT(A4,B4,C4,D4,E4)"
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
        "Rate",
        "Yield",
        "Price per $100"
    ],
    [
        "2023-01-15",
        "2025-01-15",
        "2022-01-15",
        0.05,
        0.06,
        "=PRICEMAT(A2,B2,C2,D2,E2)"
    ],
    [
        "2023-03-01",
        "2024-03-01",
        "2022-03-01",
        0.04,
        0.045,
        "=PRICEMAT(A3,B3,C3,D3,E3)"
    ],
    [
        "2023-06-15",
        "2026-06-15",
        "2022-06-15",
        0.065,
        0.07,
        "=PRICEMAT(A4,B4,C4,D4,E4)"
    ]
]
            }]
        });
    }
}
```

