title: COUPDAYS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUPDAYS function in Jspreadsheet

# COUPDAYS function

`PRO`{.jtag}

The `COUPDAYS` function in Jspreadsheet Formulas Pro is a tool that helps determine the number of days in a specific coupon period that includes the settlement date for a financial security that provides periodic interest. In simpler terms, it helps you know how long an interest payment period lasts for an investment or loan. This function is especially useful for understanding the time duration of interest payments in bonds or other securities. It's an essential feature for managing and understanding financial data in Jspreadsheet.

## Documentation

Calculates the number of days in the coupon period that contains the settlement date for a security that pays periodic interest.

### Category

Financial

### Syntax

COUPDAYS(settlement, maturity, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date. |
| `maturity` | The maturity date. |
| `frequency` | The number of coupon payments per year. |
| `[basis]` | Optional. The type of day count basis to use. If omitted, assumed to be 0 (US or NASD) by default. |


### Behavior

The 'COUPDAYS' function in spreadsheets calculates the number of days in the coupon period that contains the settlement date. It requires four parameters: settlement, maturity, frequency, and [basis]. 

- If any of the parameters are left empty, the function will return an error.
- If the settlement or maturity dates are not valid dates, the function will return an error.
- The frequency parameter should be an integer (1, 2, or 4). If it's not, the function will return an error.
- The [basis] parameter is optional and denotes the day count basis to be used. It should be an integer between 0 and 4. If left empty, it defaults to 0 (US (NASD) 30/360).
- If the [basis] parameter is a text or boolean value, the function will return an error.
- If any of the dates precede the year 1900, the function will return a #NUM! error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | If any of the parameters are non-numeric, a #VALUE! error is returned. |
| #NUM! | If the frequency is any number other than 1, 2, or 4, or if the [basis] is any number other than 0, 1, 2, 3, or 4, a #NUM! error is returned. Also, if the settlement or maturity dates precede the year 1900, a #NUM! error is returned. |
| #NAME? | If the 'COUPDAYS' function is misspelled or not recognized by the spreadsheet software, a #NAME? error is returned. |

### Best practices

> - Always ensure that the settlement, maturity, frequency, and [basis] parameters are valid and adhere to their respective constraints.
> - It is helpful to use date functions to define the settlement and maturity dates to avoid errors.
> - Be aware of the day count basis being used, as it can affect the result of the function. If unsure, it's safe to leave it empty to use the default 0 (US (NASD) 30/360).
> - Use error-checking functions like 'ISERROR' or 'IFERROR' to handle potential errors from the 'COUPDAYS' function.

### Usage

A few examples using the COUPDAYS function.

```
COUPDAYS("2022-01-01", "2022-06-30", 2) returns 180  
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
        "Days in Period"
    ],
    [
        "2023-03-15",
        "2025-03-15",
        2,
        "=COUPDAYS(A2,B2,C2)"
    ],
    [
        "2023-07-01",
        "2024-12-31",
        4,
        "=COUPDAYS(A3,B3,C3)"
    ],
    [
        "2023-01-10",
        "2026-01-10",
        1,
        "=COUPDAYS(A4,B4,C4)"
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
        "Days in Period"
    ],
    [
        "2023-03-15",
        "2025-03-15",
        2,
        "=COUPDAYS(A2,B2,C2)"
    ],
    [
        "2023-07-01",
        "2024-12-31",
        4,
        "=COUPDAYS(A3,B3,C3)"
    ],
    [
        "2023-01-10",
        "2026-01-10",
        1,
        "=COUPDAYS(A4,B4,C4)"
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
        "Days in Period"
    ],
    [
        "2023-03-15",
        "2025-03-15",
        2,
        "=COUPDAYS(A2,B2,C2)"
    ],
    [
        "2023-07-01",
        "2024-12-31",
        4,
        "=COUPDAYS(A3,B3,C3)"
    ],
    [
        "2023-01-10",
        "2026-01-10",
        1,
        "=COUPDAYS(A4,B4,C4)"
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
        "Days in Period"
    ],
    [
        "2023-03-15",
        "2025-03-15",
        2,
        "=COUPDAYS(A2,B2,C2)"
    ],
    [
        "2023-07-01",
        "2024-12-31",
        4,
        "=COUPDAYS(A3,B3,C3)"
    ],
    [
        "2023-01-10",
        "2026-01-10",
        1,
        "=COUPDAYS(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

