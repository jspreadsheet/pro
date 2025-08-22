title: TBILLYIELD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TBILLYIELD function in Jspreadsheet

# TBILLYIELD function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TBILLYIELD` function in Jspreadsheet Formulas Pro is a formula that allows you to compute the return or "yield" you'd get from a U.S. Treasury bill, given its price. This particular function is useful in financial analysis, particularly for investors who want to know their potential earnings from a Treasury bill. Simply put, you input the details of the Treasury bill into the function, and it calculates the yield or profit for you.

## Documentation

Calculates the yield of a Treasury bill based on its price.

### Category

Financial

### Syntax

TBILLYIELD(settlement, maturity, price)

| Parameter | Description |
| ----------- | ------------- |
| `settlement` | The Treasury bill's settlement date. |
| `maturity` | The Treasury bill's maturity date. |
| `price` | The Treasury bill's price per $100 face value. |


### Behavior

The 'TBILLYIELD' function in a spreadsheet calculates the yield on a Treasury bill. It expects the following parameters: settlement date, maturity date, and the price per $100 face value. Here's how it handles various scenarios:

- **Empty Cells**: If any of the required parameters are missing, the function will return a `#NUM!` error.
- **Text**: If any of the date parameters are in a text format that cannot be interpreted as a date, it will return a `#VALUE!` error. The price per $100 face value should be a number. If this parameter is text, a `#VALUE!` error will be returned.
- **Booleans**: Boolean values are not acceptable for any of the parameters in the 'TBILLYIELD' function and will result in a `#VALUE!` error.
- **Errors**: If any of the parameters contain an error, the 'TBILLYIELD' function will propagate that error.

### Common Errors

|Error|Description|
|-----|-----------|
|`#NUM!`|Occurs if the settlement date is greater than or equal to the maturity date, or if the price per $100 face value is less than or equal to zero.|
|`#VALUE!`|Occurs if any of the input parameters are not recognized as the expected data type.|

### Best practices

> - Always ensure the settlement date is earlier than the maturity date.
> - The price per $100 face value should always be greater than zero.
> - Input dates should be in a format recognized by the spreadsheet software to avoid `#VALUE!` errors.
> - Be aware that this function assumes a 360-day year for its calculations, which may not give exact results in all cases.

### Usage

A few examples using the TBILLYIELD function.

```
TBILLYIELD('2008-03-31', '2008-06-01', 98.45) returns approximately 0.0914  
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
        "Price",
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        97.25,
        "=TBILLYIELD(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        95.8,
        "=TBILLYIELD(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-06-10",
        98.15,
        "=TBILLYIELD(A4,B4,C4)"
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
        "Price",
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        97.25,
        "=TBILLYIELD(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        95.8,
        "=TBILLYIELD(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-06-10",
        98.15,
        "=TBILLYIELD(A4,B4,C4)"
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
        "Price",
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        97.25,
        "=TBILLYIELD(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        95.8,
        "=TBILLYIELD(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-06-10",
        98.15,
        "=TBILLYIELD(A4,B4,C4)"
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
        "Price",
        "Yield"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        97.25,
        "=TBILLYIELD(A2,B2,C2)"
    ],
    [
        "2024-02-01",
        "2024-08-01",
        95.8,
        "=TBILLYIELD(A3,B3,C3)"
    ],
    [
        "2024-03-10",
        "2024-06-10",
        98.15,
        "=TBILLYIELD(A4,B4,C4)"
    ]
]
            }]
        });
    }
}
```

