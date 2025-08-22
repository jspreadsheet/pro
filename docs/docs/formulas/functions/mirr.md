title: MIRR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MIRR function in Jspreadsheet

# MIRR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MIRR` function in Jspreadsheet Formulas Pro is a financial formula used to calculate the modified internal rate of return for a sequence of periodic cash flows. This function takes into account both the initial cost of the investment and the interest gained from reinvesting the cash. In simpler terms, it helps you understand the profitability of an investment when you reinvest the returns at a certain interest rate. This tool is extremely beneficial for comparing the potential returns of different investments.

## Documentation

Returns the modified internal rate of return for a series of periodic cash flows, considering both cost of investment and interest on reinvestment of cash.

### Category

Financial

### Syntax

MIRR(values, finance_rate, reinvest_rate)

| Parameter | Description |
| ----------- | ------------- |
| `values` | An array or reference to cells that contain cash flows. The first cash flow represents an initial investment and must be a negative number. All succeeding cash flows represent income received, and must be positive numbers. |
| `finance_rate` | The interest rate paid on money used in a financial transaction. This is also called the financing rate. |
| `reinvest_rate` | The interest rate received on money that is reinvested in a financial instrument. This is also called the reinvestment rate. |


### Behavior

The 'MIRR' function in spreadsheets calculates the modified internal rate of return for a series of periodic cash flows, considering both the cost of investment and the interest received on reinvestment of cash. 

- When there are empty cells in the range of values referenced, the function treats these as zeros. This might significantly affect the result if the cell was supposed to contain a value. 

- If the range of values referenced contains text or boolean values, the function will return a `#VALUE!` error. 

- If the finance_rate or reinvest_rate is less than -100%, the function will return a `#NUM!` error.

- The cash flows (values) do not have to be constant, as they would be for an annuity. However, the cash flows must occur at regular intervals, such as monthly or annually, and they must all be included in the values argument.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The function returns this error when the range of values referenced contains non-numeric values (text or boolean values).|
| #NUM! | The function returns this error if the finance_rate or reinvest_rate is less than -100%. |
| #DIV/0! | This error is returned if the function cannot compute the internal rate of return.|

### Best practices

> - Always ensure that the range of values you provide to the 'MIRR' function does not contain text, boolean values, or empty cells that are supposed to contain a value. This will prevent the function from returning errors or inaccurate results.
> - Be aware that 'MIRR' assumes that all cash flows are reinvested at the reinvest_rate. If this is not the case in your specific scenario, the result might not be accurate.
> - The 'MIRR' function is a more realistic reflection of the cost and profitability of a project when cash flows are not reinvested at the internal rate of return. So, use it when you have different finance and reinvestment rates.
> - Always check your finance_rate and reinvest_rate values to ensure they are not less than -100%, as this will return an error.

### Usage

A few examples using the MIRR function.

```
MIRR([-1000, 150, 252, 302, 204], 0.1, 0.12)  
MIRR(A1:A6, B1, C1)  
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
        "Cash Flow",
        "Amount"
    ],
    [
        "Initial Investment",
        -50000
    ],
    [
        "Year 1",
        12000
    ],
    [
        "Year 2",
        15000
    ],
    [
        "Year 3",
        18000
    ],
    [
        "Year 4",
        22000
    ],
    [
        "Finance Rate",
        0.08
    ],
    [
        "Reinvestment Rate",
        0.1
    ],
    [
        "MIRR",
        "=MIRR(B2:B6,B7,B8)"
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
        "Cash Flow",
        "Amount"
    ],
    [
        "Initial Investment",
        -50000
    ],
    [
        "Year 1",
        12000
    ],
    [
        "Year 2",
        15000
    ],
    [
        "Year 3",
        18000
    ],
    [
        "Year 4",
        22000
    ],
    [
        "Finance Rate",
        0.08
    ],
    [
        "Reinvestment Rate",
        0.1
    ],
    [
        "MIRR",
        "=MIRR(B2:B6,B7,B8)"
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
        "Cash Flow",
        "Amount"
    ],
    [
        "Initial Investment",
        -50000
    ],
    [
        "Year 1",
        12000
    ],
    [
        "Year 2",
        15000
    ],
    [
        "Year 3",
        18000
    ],
    [
        "Year 4",
        22000
    ],
    [
        "Finance Rate",
        0.08
    ],
    [
        "Reinvestment Rate",
        0.1
    ],
    [
        "MIRR",
        "=MIRR(B2:B6,B7,B8)"
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
        "Cash Flow",
        "Amount"
    ],
    [
        "Initial Investment",
        -50000
    ],
    [
        "Year 1",
        12000
    ],
    [
        "Year 2",
        15000
    ],
    [
        "Year 3",
        18000
    ],
    [
        "Year 4",
        22000
    ],
    [
        "Finance Rate",
        0.08
    ],
    [
        "Reinvestment Rate",
        0.1
    ],
    [
        "MIRR",
        "=MIRR(B2:B6,B7,B8)"
    ]
]
            }]
        });
    }
}
```

