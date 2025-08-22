title: FVSCHEDULE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FVSCHEDULE function in Jspreadsheet

# FVSCHEDULE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FVSCHEDULE` function in Jspreadsheet Formulas Pro is used to calculate the future value of an initial investment after applying a series of compound interest rates. This function takes two arguments: the initial investment or principal, and a list of interest rates. You use it when you want to know how much your investment will grow after a certain period of time with multiple interest rates applied. It's particularly useful in financial planning and investment analysis scenarios.

## Documentation

Calculates the future value of an initial principal after applying a series of compound interest rates.

### Category

Financial

### Syntax

FVSCHEDULE(principal, schedule)

| Parameter | Description |
| ----------- | ------------- |
| `principal` | The present value or principal of the investment. |
| `schedule` | An array of growth rates applied to the investment. These can be in decimal or percentage form. |


### Behavior

The 'FVSCHEDULE' function in spreadsheets is used to calculate the future value of an initial principal after applying a series of compound interest rates. It takes two arguments: the principal and a range of cells that contain the interest rates.

- If the principal argument is empty or contains text, the function will return a #VALUE! error.
- If the principal argument is a boolean value, it will be coerced to a number (TRUE to 1 and FALSE to 0).
- If any cell in the range of interest rates contains text or is empty, the function will return a #VALUE! error.
- If any cell in the range of interest rates contains a boolean value, it will be coerced to a number (TRUE to 1 and FALSE to 0).
- If the range of interest rates contains a cell with a negative number, the function will calculate as per the negative rate.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the principal or any cell in the range of interest rates contains text or is empty. |
| #NUM! | This error is displayed when the principal is non-numeric. |

### Best Practices

> - Always ensure that the principal and the range of interest rates contain numeric values to avoid #VALUE! errors.
> - Be aware that the function does not automatically convert percentage values into decimal form. You need to do this manually.
> - Remember that the order of the interest rates in the range does matter, as the function applies them sequentially.
> - Be careful when using boolean values, as they are coerced to numbers, which might lead to unexpected results.

### Usage

A few examples using the FVSCHEDULE function.

```
FVSCHEDULE(1000,[0.05,0.10,0.15,0.20])  
FVSCHEDULE(2000,[5%,10%,15%,20%])  
FVSCHEDULE(50000,[2%,3%,4%,5%,6%])  
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
        "Principal",
        "Interest Rates",
        "Future Value"
    ],
    [
        1000,
        "5%,10%,15%",
        "=FVSCHEDULE(A2,{0.05;0.10;0.15})"
    ],
    [
        5000,
        "3%,4%,5%,6%",
        "=FVSCHEDULE(A3,{0.03;0.04;0.05;0.06})"
    ],
    [
        10000,
        "2%,8%,12%",
        "=FVSCHEDULE(A4,{0.02;0.08;0.12})"
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
        "Principal",
        "Interest Rates",
        "Future Value"
    ],
    [
        1000,
        "5%,10%,15%",
        "=FVSCHEDULE(A2,{0.05;0.10;0.15})"
    ],
    [
        5000,
        "3%,4%,5%,6%",
        "=FVSCHEDULE(A3,{0.03;0.04;0.05;0.06})"
    ],
    [
        10000,
        "2%,8%,12%",
        "=FVSCHEDULE(A4,{0.02;0.08;0.12})"
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
        "Principal",
        "Interest Rates",
        "Future Value"
    ],
    [
        1000,
        "5%,10%,15%",
        "=FVSCHEDULE(A2,{0.05;0.10;0.15})"
    ],
    [
        5000,
        "3%,4%,5%,6%",
        "=FVSCHEDULE(A3,{0.03;0.04;0.05;0.06})"
    ],
    [
        10000,
        "2%,8%,12%",
        "=FVSCHEDULE(A4,{0.02;0.08;0.12})"
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
        "Principal",
        "Interest Rates",
        "Future Value"
    ],
    [
        1000,
        "5%,10%,15%",
        "=FVSCHEDULE(A2,{0.05;0.10;0.15})"
    ],
    [
        5000,
        "3%,4%,5%,6%",
        "=FVSCHEDULE(A3,{0.03;0.04;0.05;0.06})"
    ],
    [
        10000,
        "2%,8%,12%",
        "=FVSCHEDULE(A4,{0.02;0.08;0.12})"
    ]
]
            }]
        });
    }
}
```

