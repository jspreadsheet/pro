title: DOLLARFR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DOLLARFR function in Jspreadsheet

# DOLLARFR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DOLLARFR` function in Jspreadsheet Formulas Pro is a tool that changes a fraction into a decimal dollar value according to a specified denominator. For instance, if you have a fraction like 1/2, using `DOLLARFR` with a denominator of 2 would convert this fraction into the decimal value of 0.50. This function is particularly useful in financial calculations where precise decimal dollar values are required. Simply enter the fraction and the denominator into the `DOLLARFR` function to get your desired decimal value.

## Documentation

Converts a fraction to a decimal dollar value using the specified denominator.

### Category

Financial

### Syntax

DOLLARFR(decimal_dollar, fraction)

| Parameter | Description |
| ----------- | ------------- |
| `decimal_dollar` | A decimal number |
| `fraction` | The integer to use in the denominator of a fraction. |


### Behavior

The `DOLLARFR` function in spreadsheet converts a decimal number to a fraction. It is typically used in finance to convert interest rates from the decimal format to the fractional format. The function takes two arguments: a decimal number and the number of digits in the fractional denomination. 

- If an empty cell is referenced, the function will treat it as zero.
- The function does not handle text and would return a `#VALUE!` error.
- For boolean values, `TRUE` is interpreted as 1 and `FALSE` is interpreted as 0.
- If the function encounters an error, such as a division by zero, it will return an error like `#DIV/0!`.
- If the number of fractional digits is non-numeric, `DOLLARFR` returns `#VALUE!`.
- If the number of fractional digits is less than zero, `DOLLARFR` returns `#NUM!`.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If either of the supplied arguments are non-numeric or if the function encounters text, this error is returned. |
| #NUM! | If the 'fraction' argument is less than zero, the function will return this error. |
| #DIV/0! | This error is displayed when a division by zero is attempted. |

### Best practices

> - Always ensure that the arguments supplied to the function are numeric. Non-numeric values will result in errors.
> - Be aware that the function does not handle boolean values as you might expect. `TRUE` is interpreted as 1 and `FALSE` as 0.
> - Use error handling functions like `IFERROR` to handle potential errors and keep your spreadsheet clean and easy to read.
> - Always check that the 'fraction' argument is greater than zero to avoid `#NUM!` errors.

### Usage

A few examples using the DOLLARFR function.

```
DOLLARFR(1.125, 16) returns 1.02  
DOLLARFR(1.125, 32) returns 1.04  
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
        "Decimal Price",
        "Denominator",
        "Fractional Price"
    ],
    [
        1.125,
        16,
        "=DOLLARFR(A2,B2)"
    ],
    [
        1.25,
        32,
        "=DOLLARFR(A3,B3)"
    ],
    [
        2.375,
        8,
        "=DOLLARFR(A4,B4)"
    ],
    [
        3.0625,
        16,
        "=DOLLARFR(A5,B5)"
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
        "Decimal Price",
        "Denominator",
        "Fractional Price"
    ],
    [
        1.125,
        16,
        "=DOLLARFR(A2,B2)"
    ],
    [
        1.25,
        32,
        "=DOLLARFR(A3,B3)"
    ],
    [
        2.375,
        8,
        "=DOLLARFR(A4,B4)"
    ],
    [
        3.0625,
        16,
        "=DOLLARFR(A5,B5)"
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
        "Decimal Price",
        "Denominator",
        "Fractional Price"
    ],
    [
        1.125,
        16,
        "=DOLLARFR(A2,B2)"
    ],
    [
        1.25,
        32,
        "=DOLLARFR(A3,B3)"
    ],
    [
        2.375,
        8,
        "=DOLLARFR(A4,B4)"
    ],
    [
        3.0625,
        16,
        "=DOLLARFR(A5,B5)"
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
        "Decimal Price",
        "Denominator",
        "Fractional Price"
    ],
    [
        1.125,
        16,
        "=DOLLARFR(A2,B2)"
    ],
    [
        1.25,
        32,
        "=DOLLARFR(A3,B3)"
    ],
    [
        2.375,
        8,
        "=DOLLARFR(A4,B4)"
    ],
    [
        3.0625,
        16,
        "=DOLLARFR(A5,B5)"
    ]
]
            }]
        });
    }
}
```

