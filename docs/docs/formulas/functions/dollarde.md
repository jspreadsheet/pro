title: DOLLARDE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DOLLARDE function in Jspreadsheet

# DOLLARDE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DOLLARDE` function in Jspreadsheet Formulas Pro is used to change a dollar price from its fractional form into a decimal. This is done by utilizing a specified denominator. This function is especially useful when you need to perform calculations with prices that are usually expressed in fractions, allowing you to convert them into a more universally recognized decimal format.

## Documentation

Converts a fractional dollar price expressed as a decimal to a fraction using the specified denominator.

### Category

Financial

### Syntax

DOLLARDE(decimal_dollar, fraction)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The decimal dollar value you want to convert to a fraction. |
| `number` | The denominator to use for the resulting fraction. |


### Behavior

The `DOLLARDE` function in spreadsheets converts a dollar price, expressed as a fraction, into a dollar price expressed as a decimal number. The function requires two arguments: a fractional dollar price and the number of units per fraction. 

- If the function encounters an empty cell, it will treat it as zero.
- If the function encounters text, it will return an error.
- This function does not support boolean values. If a boolean value is used, the function returns an error.
- If the function encounters an error, it will propagate that error.
- The function will return an error if the fraction is less than zero or if the fraction is greater than or equal to the units per fraction.
- The function will return an error if the units per fraction is not an integer.

### Common Errors

| Error | Description |
|---|---|
| #VALUE! | This error occurs when the supplied arguments are non-numeric. |
| #NUM! | This error is returned when the fraction is less than zero or if the fraction is greater than or equal to the units per fraction, or if the units per fraction is not an integer. |
| #DIV/0! | This error is returned if the units per fraction argument is zero. |

### Best practices

> - Always ensure to input numeric values as the arguments for the `DOLLARDE` function to avoid a `#VALUE!` error.
> - Be aware that the function will return a `#NUM!` error if the fraction is less than zero or if the fraction is greater than or equal to the units per fraction, or if the units per fraction is not an integer.
> - Do not use a zero value as the second argument (units per fraction) to avoid a `#DIV/0!` error.
> - It is recommended to use this function when dealing with securities prices that are traditionally quoted in fractions.

### Usage

A few examples using the DOLLARDE function.

```
DOLLARDE(1.25, 16) returns 2.5625  
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
        1.25,
        16,
        "=DOLLARDE(A2,B2)"
    ],
    [
        2.75,
        32,
        "=DOLLARDE(A3,B3)"
    ],
    [
        0.5,
        8,
        "=DOLLARDE(A4,B4)"
    ],
    [
        3.125,
        16,
        "=DOLLARDE(A5,B5)"
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
        1.25,
        16,
        "=DOLLARDE(A2,B2)"
    ],
    [
        2.75,
        32,
        "=DOLLARDE(A3,B3)"
    ],
    [
        0.5,
        8,
        "=DOLLARDE(A4,B4)"
    ],
    [
        3.125,
        16,
        "=DOLLARDE(A5,B5)"
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
        1.25,
        16,
        "=DOLLARDE(A2,B2)"
    ],
    [
        2.75,
        32,
        "=DOLLARDE(A3,B3)"
    ],
    [
        0.5,
        8,
        "=DOLLARDE(A4,B4)"
    ],
    [
        3.125,
        16,
        "=DOLLARDE(A5,B5)"
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
        1.25,
        16,
        "=DOLLARDE(A2,B2)"
    ],
    [
        2.75,
        32,
        "=DOLLARDE(A3,B3)"
    ],
    [
        0.5,
        8,
        "=DOLLARDE(A4,B4)"
    ],
    [
        3.125,
        16,
        "=DOLLARDE(A5,B5)"
    ]
]
            }]
        });
    }
}
```

