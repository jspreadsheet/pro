title: NPV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NPV function in Jspreadsheet

# NPV function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `NPV` function in Jspreadsheet Formulas Pro helps you determine the current worth of an investment by considering future cash inflows and a specified discount rate. It essentially shows you how much a series of future cash flows would be worth in today's money. This function is significant for making decisions about whether an investment is worth pursuing, as it allows you to compare the present value of money you will receive in the future to the amount you would need to invest today.

## Documentation

Calculates the net present value of an investment based on a series of future cash flows and a discount rate.

### Category

Financial

### Syntax

NPV(rate, value1, [value2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `rate` | The rate of discount over the length of one period. |
| `value1` | The first cash flow in the series. It must occur at the end of the first period. |
| `valueN` | An additional cash flow occurring at the end of the second period and so on. |


### Behavior

The 'NPV' function in a spreadsheet calculates the Net Present Value of an investment by using a discount rate and a series of future cash flows.

- If the range of cells or array includes logical values, text, or empty cells, those values are ignored.
- The cash flows must occur at regular intervals, such as monthly or annually, and they must all be included in the calculation.
- The 'NPV' function uses the order of cash flows to interpret the order of payment periods. So, the first cash flow is discounted to the first period, and so on.
- If an error occurs in the input, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the given values are not numeric, or if the rate is not supplied. |
| #NUM! | This error occurs if the rate is less than -1. |
| #DIV/0! | This error occurs if the discount rate is equal to -1, as it would mean dividing by zero during calculation. | 

### Best practices

> - Start with the first cash flow at the end of the first period. The 'NPV' function assumes that the first cash flow occurs at the end of the first period.
> - Be consistent with the units for the rate and the number of periods. If you are using monthly payments, use a monthly discount rate. If you are using annual payments, use an annual discount rate.
> - Do not mix up cash inflows and outflows. Positive values represent cash inflows (money received), and negative values represent cash outflows (money paid out).

### Usage

A few examples using the NPV function.

```
NPV(0.1,-10000,3000,4200,6800)  
NPV(0.09,-5000,1500,2000,2500,3000)  
NPV(0.12,-8000,1200,1300,1550,1600)  
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
        "Investment Analysis",
        "",
        ""
    ],
    [
        "Discount Rate",
        0.12,
        ""
    ],
    [
        "Year 0 (Initial Investment)",
        -50000,
        ""
    ],
    [
        "Year 1 Cash Flow",
        15000,
        ""
    ],
    [
        "Year 2 Cash Flow",
        18000,
        ""
    ],
    [
        "Year 3 Cash Flow",
        22000,
        ""
    ],
    [
        "Net Present Value",
        "=NPV(B2,B3:B6)",
        ""
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
        "Investment Analysis",
        "",
        ""
    ],
    [
        "Discount Rate",
        0.12,
        ""
    ],
    [
        "Year 0 (Initial Investment)",
        -50000,
        ""
    ],
    [
        "Year 1 Cash Flow",
        15000,
        ""
    ],
    [
        "Year 2 Cash Flow",
        18000,
        ""
    ],
    [
        "Year 3 Cash Flow",
        22000,
        ""
    ],
    [
        "Net Present Value",
        "=NPV(B2,B3:B6)",
        ""
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
        "Investment Analysis",
        "",
        ""
    ],
    [
        "Discount Rate",
        0.12,
        ""
    ],
    [
        "Year 0 (Initial Investment)",
        -50000,
        ""
    ],
    [
        "Year 1 Cash Flow",
        15000,
        ""
    ],
    [
        "Year 2 Cash Flow",
        18000,
        ""
    ],
    [
        "Year 3 Cash Flow",
        22000,
        ""
    ],
    [
        "Net Present Value",
        "=NPV(B2,B3:B6)",
        ""
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
        "Investment Analysis",
        "",
        ""
    ],
    [
        "Discount Rate",
        0.12,
        ""
    ],
    [
        "Year 0 (Initial Investment)",
        -50000,
        ""
    ],
    [
        "Year 1 Cash Flow",
        15000,
        ""
    ],
    [
        "Year 2 Cash Flow",
        18000,
        ""
    ],
    [
        "Year 3 Cash Flow",
        22000,
        ""
    ],
    [
        "Net Present Value",
        "=NPV(B2,B3:B6)",
        ""
    ]
]
            }]
        });
    }
}
```

