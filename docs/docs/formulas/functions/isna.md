title: ISNA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISNA function in Jspreadsheet

# ISNA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISNA` function in Jspreadsheet Formulas Pro is a tool that allows you to determine if a certain value has an error labeled as #N/A. When you use this function, it will return TRUE if the value you're examining does indeed carry this error. If the value is anything else and does not have the #N/A error, the function will return FALSE.

## Documentation

Checks if a given value is the error value #N/A and returns TRUE if the value is #N/A, and FALSE otherwise.

### Category

Information

### Syntax

ISNA(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value that you want to test. |


### Behavior
The ISNA function in spreadsheets is primarily used to check if a cell contains the #N/A error value. This function returns TRUE if the value is any error value except #N/A, and FALSE otherwise. Here's how it handles different types of data:

- **Empty cells**: If the ISNA function is applied to an empty cell, it will return FALSE since the cell does not contain the #N/A error.
- **Text**: When applied to a cell containing text, the function will return FALSE unless the text is "#N/A".
- **Booleans**: ISNA will return FALSE for boolean values (TRUE or FALSE), as they are not considered as #N/A.
- **Errors**: If the cell contains any error value other than #N/A, the function will return FALSE. If the cell contains the #N/A error, the function will return TRUE.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error occurs when the ISNA function is used with inappropriate arguments. For example, ISNA("text") instead of ISNA(A1). |
| #NAME? | This error occurs when the ISNA function is spelled incorrectly or if the spreadsheet software does not support this function. |

### Best Practices
> - Always use the ISNA function with a reference to a cell or a function that can potentially return the #N/A error.
> - Be careful when interpreting the result of the ISNA function. A TRUE result doesn't mean that the cell is empty, but that it contains the #N/A error.
> - Use the ISNA function in combination with the IF function to handle errors more effectively in your spreadsheet. For instance, you could replace #N/A errors with a more friendly message or a specific value.
> - Keep in mind that ISNA only detects the #N/A error. If you want to check for all types of errors, use the ISERROR function instead.

### Usage

A few examples using the ISNA function.

```
ISNA(#N/A) returns TRUE because #N/A is an error value  
ISNA(A1) returns TRUE if cell A1 contains the #N/A error value  
ISNA(B2) returns FALSE if cell B2 does not contain the #N/A error value.  
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
        "Check for N/A"
    ],
    [
        "Apple",
        1.5,
        "=ISNA(B2)"
    ],
    [
        "Banana",
        "#N/A",
        "=ISNA(B3)"
    ],
    [
        "Orange",
        2.25,
        "=ISNA(B4)"
    ],
    [
        "Grape",
        "#N/A",
        "=ISNA(B5)"
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
        "Check for N/A"
    ],
    [
        "Apple",
        1.5,
        "=ISNA(B2)"
    ],
    [
        "Banana",
        "#N/A",
        "=ISNA(B3)"
    ],
    [
        "Orange",
        2.25,
        "=ISNA(B4)"
    ],
    [
        "Grape",
        "#N/A",
        "=ISNA(B5)"
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
        "Check for N/A"
    ],
    [
        "Apple",
        1.5,
        "=ISNA(B2)"
    ],
    [
        "Banana",
        "#N/A",
        "=ISNA(B3)"
    ],
    [
        "Orange",
        2.25,
        "=ISNA(B4)"
    ],
    [
        "Grape",
        "#N/A",
        "=ISNA(B5)"
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
        "Check for N/A"
    ],
    [
        "Apple",
        1.5,
        "=ISNA(B2)"
    ],
    [
        "Banana",
        "#N/A",
        "=ISNA(B3)"
    ],
    [
        "Orange",
        2.25,
        "=ISNA(B4)"
    ],
    [
        "Grape",
        "#N/A",
        "=ISNA(B5)"
    ]
]
            }]
        });
    }
}
```

