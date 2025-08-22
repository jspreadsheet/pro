title: IFNA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the IFNA function in Jspreadsheet

# IFNA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The IFNA function in Jspreadsheet Formulas Pro is utilized when you want to handle the #N/A error, which usually pops up when a formula can't find the data it is supposed to use. IFNA allows you to specify a value to return in case the formula triggers this error, offering you the control over the output. Conversely, if the formula doesn't result in an error, IFNA will return the formula's original result. In other words, it provides a simple way to manage potential errors and keep your data clean and accurate.

## Documentation

The IFNA function is used to return a value if a formula returns the #N/A error, and another value if it does not.

### Category

Logical

### Syntax

IFNA(value, value_if_na)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value or formula to evaluate. If this produces the #N/A error, the value_if_na is returned. |
| `value_if_na` | The value to return if the value argument produces the #N/A error. |


### Behavior

The `IFNA` function in spreadsheets is used to handle `#N/A` errors. It checks a specified value, and if that value is `#N/A`, it will return a value that you have chosen. Here's how `IFNA` behaves with different data types:

- **Empty Cells**: If the cell referenced in the `IFNA` function is empty, it will return an empty cell, not the alternate value specified in the `IFNA` function.
- **Text**: If the cell contains text, the function will return the text, not the alternate value specified in the `IFNA` function.
- **Booleans**: If the cell contains a boolean value (TRUE or FALSE), the function will return the boolean, not the alternate value specified in the `IFNA` function.
- **Errors**: The `IFNA` function only handles `#N/A` errors. If the cell contains another type of error (like `#DIV/0!` or `#VALUE!`), the `IFNA` function will return that error, not the alternate value specified in the `IFNA` function.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | This error occurs when the `IFNA` function encounters a `#N/A` error in the checked value. In this case, it will return the value specified as the alternative in the `IFNA` function. |
| #VALUE! | This error occurs if the `IFNA` function is not correctly structured, such as if it is missing one or both of its arguments. |
| #NAME? | This error occurs if the spreadsheet does not recognize `IFNA` as a valid function name, often due to a typo or if the function is not supported in the used spreadsheet software. |

### Best practices

> - Always specify an alternate value in the `IFNA` function. This value will be returned if the checked value is `#N/A`.
> - Use the `IFNA` function when you expect `#N/A` errors in your data and you want to handle them in a specific way.
> - Don't use the `IFNA` function to handle errors other than `#N/A`. For handling all types of errors, use functions like `IFERROR`.
> - Make sure the alternate value specified in the `IFNA` function is of the same data type as the checked value to avoid inconsistencies in your data.

### Usage

A few examples using the IFNA function.

```
IFNA(VLOOKUP(A1, B:C, 2, FALSE), "Not found") returns 'Not found' if the VLOOKUP function results in the #N/A error when searching for the value in cell A1 in column B.  
IFNA(INDEX(D1:D10, MATCH(G1, A1:A10, 0)), "Not matched") returns 'Not matched' if the MATCH function results in the #N/A error because no match was found for the value in cell G1 in column A.  
IFNA(SUM(1,2,3), "Error") returns the sum of the values 1, 2, and 3 since the formula does not produce the #N/A error.  
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
        "Product",
        "Price",
        "Search Result"
    ],
    [
        "Apple",
        1.5,
        "=IFNA(VLOOKUP(\"Banana\", A2:B4, 2, FALSE), \"Not found\")"
    ],
    [
        "Orange",
        2.25,
        "=IFNA(VLOOKUP(\"Apple\", A2:B4, 2, FALSE), \"Not found\")"
    ],
    [
        "Grape",
        3.0,
        "=IFNA(VLOOKUP(\"Mango\", A2:B4, 2, FALSE), \"Not found\")"
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
        "Product",
        "Price",
        "Search Result"
    ],
    [
        "Apple",
        1.5,
        "=IFNA(VLOOKUP(\"Banana\", A2:B4, 2, FALSE), \"Not found\")"
    ],
    [
        "Orange",
        2.25,
        "=IFNA(VLOOKUP(\"Apple\", A2:B4, 2, FALSE), \"Not found\")"
    ],
    [
        "Grape",
        3.0,
        "=IFNA(VLOOKUP(\"Mango\", A2:B4, 2, FALSE), \"Not found\")"
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
        "Product",
        "Price",
        "Search Result"
    ],
    [
        "Apple",
        1.5,
        "=IFNA(VLOOKUP(\"Banana\", A2:B4, 2, FALSE), \"Not found\")"
    ],
    [
        "Orange",
        2.25,
        "=IFNA(VLOOKUP(\"Apple\", A2:B4, 2, FALSE), \"Not found\")"
    ],
    [
        "Grape",
        3.0,
        "=IFNA(VLOOKUP(\"Mango\", A2:B4, 2, FALSE), \"Not found\")"
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
        "Product",
        "Price",
        "Search Result"
    ],
    [
        "Apple",
        1.5,
        "=IFNA(VLOOKUP(\"Banana\", A2:B4, 2, FALSE), \"Not found\")"
    ],
    [
        "Orange",
        2.25,
        "=IFNA(VLOOKUP(\"Apple\", A2:B4, 2, FALSE), \"Not found\")"
    ],
    [
        "Grape",
        3.0,
        "=IFNA(VLOOKUP(\"Mango\", A2:B4, 2, FALSE), \"Not found\")"
    ]
]
            }]
        });
    }
}
```

