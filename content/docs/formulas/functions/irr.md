title: IRR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IRR function in Jspreadsheet

# IRR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `IRR` function in Jspreadsheet Formulas Pro is a tool used to determine the internal rate of return for a series of cash flows that happen consistently over time. This function is especially useful in financial analysis, as it helps to identify the profitability of an investment or project. It calculates what percentage return is achieved per period (such as annually), allowing users to compare different investment opportunities. With `IRR`, you can make more informed decisions about where to allocate resources.

## Documentation

Calculates the internal rate of return for a series of cash flows that occur at regular intervals.

### Category

Financial

### Syntax

IRR(values, [guess])

| Parameter | Description |
| ----------- | ------------- |
| `values` | An array or range of cash flows for which you want to calculate the internal rate of return. |
| `[guess]` | Optional. An initial estimate of the internal rate of return. If omitted, it defaults to 0.1 (10%). |


### Behavior

The `IRR` function in spreadsheets is used to calculate the Internal Rate of Return for a series of cash flows represented by numbers in cells. The cash flows do not necessarily have to be even, but they must occur at regular intervals, such as monthly or annually. 

1. **Empty Cells**: Any empty cell in the range specified for the IRR function will be treated as zero.

2. **Text**: If the range includes a cell containing text, the IRR function will return a #VALUE! error.

3. **Booleans**: Boolean values are treated as numbers, with TRUE being equivalent to 1 and FALSE equivalent to 0.

4. **Errors**: If any cells within the range specified for the IRR function contain error values, the IRR function itself will return an error.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #VALUE! | This error is returned if the values do not represent a series of cash flows where at least one negative and one positive value exists. |
| #NUM! | This error is returned if the IRR function fails to converge to a result within 20 iterations. This generally happens when the cash flows are not properly ordered or there are multiple rates of return. |
| #DIV/0! | This error is returned if the initial guess for the rate of return is set to a value that causes a division by zero. |

### Best practices

> 1. Always ensure that the cash flows you are inputting into the `IRR` function represent a legitimate series where at least one cash flow is negative (representing an outflow or investment) and one cash flow is positive (representing an inflow or return).
> 2. If you are getting a #NUM! error, try providing a different 'guess' value to the function. The default is 10%, but this might not always allow the function to converge to a result.
> 3. If the `IRR` function returns an error, check the range of cells for any text or error values. Remove or correct these before running the function again.
> 4. Be aware that `IRR` assumes that all cash flows happen at regular intervals. If this is not the case, the result of the `IRR` function may not be accurate.

### Usage

A few examples using the IRR function.

```
IRR([-75000, 12000, 15000, 18000, 21000, 24000]) returns 0.05715142887178467  
IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.075) returns 0.05715142887178447  
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
        "Year 0",
        -100000
    ],
    [
        "Year 1",
        25000
    ],
    [
        "Year 2",
        30000
    ],
    [
        "Year 3",
        35000
    ],
    [
        "Year 4",
        40000
    ],
    [
        "IRR",
        "=IRR(B1:B5)"
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
        "Year 0",
        -100000
    ],
    [
        "Year 1",
        25000
    ],
    [
        "Year 2",
        30000
    ],
    [
        "Year 3",
        35000
    ],
    [
        "Year 4",
        40000
    ],
    [
        "IRR",
        "=IRR(B1:B5)"
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
        "Year 0",
        -100000
    ],
    [
        "Year 1",
        25000
    ],
    [
        "Year 2",
        30000
    ],
    [
        "Year 3",
        35000
    ],
    [
        "Year 4",
        40000
    ],
    [
        "IRR",
        "=IRR(B1:B5)"
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
        "Year 0",
        -100000
    ],
    [
        "Year 1",
        25000
    ],
    [
        "Year 2",
        30000
    ],
    [
        "Year 3",
        35000
    ],
    [
        "Year 4",
        40000
    ],
    [
        "IRR",
        "=IRR(B1:B5)"
    ]
]
            }]
        });
    }
}
```

