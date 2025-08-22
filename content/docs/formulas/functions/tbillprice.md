title: TBILLPRICE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TBILLPRICE function in Jspreadsheet

# TBILLPRICE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TBILLPRICE` function in Jspreadsheet Formulas Pro is utilized to calculate the cost per $100 face value of a Treasury bill. This function requires you to input the settlement date, maturity date and discount rate. It helps users understand the purchase price of a Treasury bill, which is essentially a short-term investment issued by the U.S. government. It's a great tool for financial analysis and investment planning.

## Documentation

Calculates the price per $100 face value for a Treasury bill.

### Category

Financial

### Syntax

TBILLPRICE(settlement, maturity, discount)

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The Treasury bill's settlement date. |
| `maturity` | The Treasury bill's maturity date. |
| `discount` | The Treasury bill's discount rate. |


### Behavior

The `TBILLPRICE` function in spreadsheets calculates the price per $100 face value of a Treasury bill. The function requires three arguments: settlement date, maturity date, and discount rate. 

1. **Dates**: Settlement and maturity dates should be valid dates. If they are entered as text or in an incorrect date format, the function will return an error. The maturity date should be later than the settlement date; if not, the function will also return an error.

2. **Discount Rate**: This should be a decimal number. If it is not a number, the function returns an error. 

3. **Empty Cells**: If any of the required fields are left empty, the function will return an error.

4. **Booleans**: This function does not accept boolean values. If a boolean value is used, the function will return an error.

5. **Error Cells**: If any of the arguments refer to cells containing errors, the function itself will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if any of the provided arguments are non-numeric, such as text or boolean values. |
| #NUM! | This error occurs when the settlement date is greater than the maturity date, or the discount rate is less than zero. |
| #REF! | This error occurs when the cell references are incorrect. This could be the result of deleted data or incorrect range selection. |
| #NAME? | This error occurs when the syntax of the formula is typed incorrectly, for example a typo in the function name. |

### Best practices

> - Always ensure that the settlement date is earlier than the maturity date.
> - Discount rate should be entered as a decimal. For example, if the discount rate is 5%, it should be entered as 0.05.
> - It's recommended to use cell references instead of directly typing the dates and discount rate into the function. This makes the function dynamic and easily adjustable if values change.
> - Always check the cell references to avoid `#REF!` and `#NAME?` errors.

### Usage

A few examples using the TBILLPRICE function.

```
TBILLPRICE("2022-01-01", "2022-06-30", 0.015)  
TBILLPRICE('2022-01-01', '2022-06-30', 0.012)  
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
        "Discount Rate",
        "T-Bill Price"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        0.045,
        "=TBILLPRICE(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        0.038,
        "=TBILLPRICE(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-09-10",
        0.052,
        "=TBILLPRICE(A4,B4,C4)"
    ],
    [
        "2024-01-20",
        "2024-07-20",
        0.041,
        "=TBILLPRICE(A5,B5,C5)"
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
        "Discount Rate",
        "T-Bill Price"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        0.045,
        "=TBILLPRICE(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        0.038,
        "=TBILLPRICE(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-09-10",
        0.052,
        "=TBILLPRICE(A4,B4,C4)"
    ],
    [
        "2024-01-20",
        "2024-07-20",
        0.041,
        "=TBILLPRICE(A5,B5,C5)"
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
        "Discount Rate",
        "T-Bill Price"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        0.045,
        "=TBILLPRICE(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        0.038,
        "=TBILLPRICE(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-09-10",
        0.052,
        "=TBILLPRICE(A4,B4,C4)"
    ],
    [
        "2024-01-20",
        "2024-07-20",
        0.041,
        "=TBILLPRICE(A5,B5,C5)"
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
        "Discount Rate",
        "T-Bill Price"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        0.045,
        "=TBILLPRICE(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        0.038,
        "=TBILLPRICE(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-09-10",
        0.052,
        "=TBILLPRICE(A4,B4,C4)"
    ],
    [
        "2024-01-20",
        "2024-07-20",
        0.041,
        "=TBILLPRICE(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

