title: EUROCONVERT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EUROCONVERT function in Jspreadsheet

# EUROCONVERT function



The `EUROCONVERT` function in Jspreadsheet Formulas Pro is a handy tool that allows you to convert a numerical value from one currency to another. You simply need to specify the value you want to convert, the original currency, and the currency you want to convert it into. This function is particularly useful for international transactions or financial analysis involving multiple currencies. Remember to ensure the currency codes you input are in the correct format for the function to work properly.

## Documentation

The EUROCONVERT function converts a number from one currency to another

### Category

Add-in and Automation

### Syntax

EUROCONVERT(number, source_currency, target_currency, full_precision, triangulation)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number to convert. |
| `source_currency` | The currency code for the source currency, in ISO format. |
| `target_currency` | The currency code for the target currency, in ISO format. |
| `full_precision` | An optional logical value, either TRUE or FALSE, that specifies whether to use full precision in the calculation. Defaults to FALSE. |
| `triangulation` | An optional logical value, either TRUE or FALSE, that specifies whether to use triangular conversion when there is no direct exchange rate between the source and target currencies. Defaults to FALSE. |


### Behavior

The `EUROCONVERT` function in spreadsheets is used to convert a number from one currency to another, specifically for Euro and its participating countries. The function requires three arguments: the number to convert, the currency to convert from, and the currency to convert to.

- **Empty cells**: If any of the required arguments are empty, the function will return an error.
- **Text**: If text is inputted instead of a number for the first argument, the function will return an error. Text values for the currency arguments should correspond to valid currency codes, otherwise, an error will be returned.
- **Booleans**: Boolean values are not acceptable inputs for this function. Providing a Boolean value will return an error.
- **Errors**: If an error exists in the input cells, the `EUROCONVERT` function will propagate that error.
- **Numbers**: The function will successfully convert the number from the original currency to the target currency if both currency codes are valid.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If the input currency code or the output currency code is not a valid currency code, this error will be displayed. |
| #NUM! | If the number to be converted is not a number, this error will be displayed. |
| #N/A | If the input is not available or the function cannot find the input in the list of currency codes, this error will be displayed. |

### Best practices

> - Always ensure that the currency codes used are valid. The function only works with Euro and its participating countries' currencies.
> - Avoid using cell references that might contain non-numeric values for the number to be converted.
> - Keep your software updated. The conversion rates used by the `EUROCONVERT` function may be updated in newer versions of your spreadsheet software.
> - Use error handling functions like `IFERROR` to handle potential errors and maintain the cleanliness of your data presentation.

### Usage

A few examples using the EUROCONVERT function.

```
EUROCONVERT(100,'EUR','DEM') returns the equivalent of 100 Euros in Deutsche Marks  
EUROCONVERT(50,'DEM','EUR',TRUE) returns the equivalent of 50 Deutsche Marks in Euros with full precision  
EUROCONVERT(A2,B2,C2,D2,E2) returns the equivalent of the value in cell A2, converted from the source currency in cell B2 to the target currency in cell C2, using full precision if the value in cell D2 is TRUE, and using triangular conversion if the value in cell E2 is TRUE.  
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
        "Amount",
        "From",
        "To",
        "Full Precision",
        "Triangulation",
        "Converted Amount"
    ],
    [
        100,
        "EUR",
        "DEM",
        false,
        false,
        "=EUROCONVERT(A2,B2,C2,D2,E2)"
    ],
    [
        50,
        "DEM",
        "EUR",
        true,
        false,
        "=EUROCONVERT(A3,B3,C3,D3,E3)"
    ],
    [
        200,
        "FRF",
        "ITL",
        false,
        true,
        "=EUROCONVERT(A4,B4,C4,D4,E4)"
    ],
    [
        75,
        "ESP",
        "EUR",
        true,
        true,
        "=EUROCONVERT(A5,B5,C5,D5,E5)"
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
        "Amount",
        "From",
        "To",
        "Full Precision",
        "Triangulation",
        "Converted Amount"
    ],
    [
        100,
        "EUR",
        "DEM",
        false,
        false,
        "=EUROCONVERT(A2,B2,C2,D2,E2)"
    ],
    [
        50,
        "DEM",
        "EUR",
        true,
        false,
        "=EUROCONVERT(A3,B3,C3,D3,E3)"
    ],
    [
        200,
        "FRF",
        "ITL",
        false,
        true,
        "=EUROCONVERT(A4,B4,C4,D4,E4)"
    ],
    [
        75,
        "ESP",
        "EUR",
        true,
        true,
        "=EUROCONVERT(A5,B5,C5,D5,E5)"
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
        "Amount",
        "From",
        "To",
        "Full Precision",
        "Triangulation",
        "Converted Amount"
    ],
    [
        100,
        "EUR",
        "DEM",
        false,
        false,
        "=EUROCONVERT(A2,B2,C2,D2,E2)"
    ],
    [
        50,
        "DEM",
        "EUR",
        true,
        false,
        "=EUROCONVERT(A3,B3,C3,D3,E3)"
    ],
    [
        200,
        "FRF",
        "ITL",
        false,
        true,
        "=EUROCONVERT(A4,B4,C4,D4,E4)"
    ],
    [
        75,
        "ESP",
        "EUR",
        true,
        true,
        "=EUROCONVERT(A5,B5,C5,D5,E5)"
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
        "Amount",
        "From",
        "To",
        "Full Precision",
        "Triangulation",
        "Converted Amount"
    ],
    [
        100,
        "EUR",
        "DEM",
        false,
        false,
        "=EUROCONVERT(A2,B2,C2,D2,E2)"
    ],
    [
        50,
        "DEM",
        "EUR",
        true,
        false,
        "=EUROCONVERT(A3,B3,C3,D3,E3)"
    ],
    [
        200,
        "FRF",
        "ITL",
        false,
        true,
        "=EUROCONVERT(A4,B4,C4,D4,E4)"
    ],
    [
        75,
        "ESP",
        "EUR",
        true,
        true,
        "=EUROCONVERT(A5,B5,C5,D5,E5)"
    ]
]
            }]
        });
    }
}
```

