title: COUPDAYBS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUPDAYBS function in Jspreadsheet

# COUPDAYBS function

`PRO`{.jtag}

The `COUPDAYBS` function in Jspreadsheet Formulas Pro is a tool that helps you determine the number of days from when a bond's coupon period (the time between interest payments) begins to the settlement date (when the buyer actually pays for the bond). This is particularly useful for bonds with an unusual first period. This function aids in understanding the cash flow dynamics associated with bond investments, helping you make more informed financial decisions.

## Documentation

Calculates the number of days from the beginning of the coupon period to the settlement date for a security that pays interest on a bond that has an odd first period.

### Category

Financial

### Syntax

COUPDAYBS(settlement, maturity, frequency, [basis])

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The settlement date. |
| `maturity` | The maturity date. |
| `frequency` | The number of coupon payments per year. |
| `[basis]` | Optional. The type of day count basis to use. If omitted, assumed to be 0 (US or NASD) by default. |


### Behavior

The `COUPDAYBS` function in spreadsheets calculates the number of days from the beginning of the coupon period to the settlement date. It's used to calculate the number of days in the coupon period that have elapsed on the settlement date for a specified security. 

1. If any of the arguments to this function are left empty, the function will return a #VALUE! error.
2. If the arguments are not in the correct format (for instance, if the settlement date or maturity date is not a valid date), the function will return a #VALUE! error.
3. Text and Boolean values are not appropriate inputs for this function and will also return a #VALUE! error.
4. If the settlement date is greater than the maturity date, the function will return a #NUM! error.
5. If the basis is anything other than integers 0 through 4, it will return a #NUM! error.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the settlement date is greater than the maturity date, or the basis is less than 0 or more than 4. |
| #VALUE! | Occurs if any of the arguments are left empty, if the date arguments are not valid dates, or if the given values are not of the correct data type. |

### Best practices

> - Always make sure the settlement date is less than the maturity date to avoid a #NUM! error.
> - Ensure that your dates are in the correct format. It's recommended to use DATE function or other date-related functions to generate the date.
> - Be cautious when choosing the basis for your calculation. Make sure it's an integer between 0 and 4.
> - Avoid leaving any arguments empty to prevent a #VALUE! error. Provide all necessary arguments for the function to work properly.

### Usage

A few examples using the COUPDAYBS function.

```
COUPDAYBS("2022-01-01", "2022-08-30", 2) returns 121  
COUPDAYBS("2022-01-01", "2022-08-30", 2, 1) returns 124  
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
        "Frequency",
        "Basis",
        "Days from Period Start"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        0,
        "=COUPDAYBS(A2,B2,C2,D2)"
    ],
    [
        "2023-06-01",
        "2024-06-01",
        4,
        1,
        "=COUPDAYBS(A3,B3,C3,D3)"
    ],
    [
        "2023-09-20",
        "2026-03-15",
        2,
        3,
        "=COUPDAYBS(A4,B4,C4,D4)"
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
        "Frequency",
        "Basis",
        "Days from Period Start"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        0,
        "=COUPDAYBS(A2,B2,C2,D2)"
    ],
    [
        "2023-06-01",
        "2024-06-01",
        4,
        1,
        "=COUPDAYBS(A3,B3,C3,D3)"
    ],
    [
        "2023-09-20",
        "2026-03-15",
        2,
        3,
        "=COUPDAYBS(A4,B4,C4,D4)"
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
        "Frequency",
        "Basis",
        "Days from Period Start"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        0,
        "=COUPDAYBS(A2,B2,C2,D2)"
    ],
    [
        "2023-06-01",
        "2024-06-01",
        4,
        1,
        "=COUPDAYBS(A3,B3,C3,D3)"
    ],
    [
        "2023-09-20",
        "2026-03-15",
        2,
        3,
        "=COUPDAYBS(A4,B4,C4,D4)"
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
        "Frequency",
        "Basis",
        "Days from Period Start"
    ],
    [
        "2023-03-15",
        "2025-12-31",
        2,
        0,
        "=COUPDAYBS(A2,B2,C2,D2)"
    ],
    [
        "2023-06-01",
        "2024-06-01",
        4,
        1,
        "=COUPDAYBS(A3,B3,C3,D3)"
    ],
    [
        "2023-09-20",
        "2026-03-15",
        2,
        3,
        "=COUPDAYBS(A4,B4,C4,D4)"
    ]
]
            }]
        });
    }
}
```

