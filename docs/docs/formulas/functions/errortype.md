title: ERROR.TYPE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ERROR.TYPE function in Jspreadsheet

# ERROR.TYPE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The ERROR.TYPE function in Jspreadsheet Formulas Pro is a useful tool for identifying the type of error in a cell. This function operates by returning a specific number that corresponds to the error value found in a cell. For instance, if a cell contains a "#DIV/0!" error, the ERROR.TYPE function would return a value of "2". This function is handy for troubleshooting and managing errors in your spreadsheet data.

## Documentation

The ERROR.TYPE function returns a number that corresponds to the error value in a cell.

### Category

Information

### Syntax

ERROR.TYPE(error_val)

| Parameter | Description |
| ----------- | ------------- |
| `error_val` | The cell containing the error value for which to return the corresponding number. |


### Behavior

The `ERROR.TYPE` function in spreadsheets is used to identify the type of error in a cell. The function takes the reference of a cell as an argument and returns a numerical value corresponding to the type of error. If there is no error, it returns `#N/A`.

The function handles different types of data as follows:

- Empty cells: If the referenced cell is empty, the `ERROR.TYPE` function returns `#N/A`.
- Text: If the referenced cell contains text, the function returns `#N/A`.
- Booleans: If the referenced cell contains a boolean value (TRUE/FALSE), the function returns `#N/A`.
- Errors: If the referenced cell contains an error, the function returns a numerical value corresponding to the type of error.
- Numbers: If the referenced cell contains a number, the function returns `#N/A`.

### Common Errors

| Error | Name | Description |
|-------|------|-------------|
| #NULL! | Error 1 | Intersection of two cell ranges is empty. |
| #DIV/0! | Error 2 | Division by zero. |
| #VALUE! | Error 3 | Incorrect data type is used in a function or formula. |
| #REF! | Error 4 | Invalid cell reference. |
| #NAME? | Error 5 | Spreadsheet does not recognize text in a formula. |
| #NUM! | Error 6 | Invalid use of a number in a formula or function. |
| #N/A | Error 7 | Value is not available to a function or formula. |

### Best Practices

> - Always double-check the cell reference given as argument to the `ERROR.TYPE` function to ensure it is correct.
> - Use the `ERROR.TYPE` function in combination with the `IFERROR` function to handle errors effectively in your spreadsheet.
> - Remember that `ERROR.TYPE` function only works with cell references. It cannot be used with arrays or array formulas.
> - Understand what each error type means to effectively troubleshoot and fix issues in your spreadsheet.

### Usage

A few examples using the ERROR.TYPE function.

```
ERROR.TYPE(#N/A) returns 7  
ERROR.TYPE(#VALUE!) returns 3  
ERROR.TYPE(A2) returns the corresponding number for the error value in cell A2.  
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
        "Error Check"
    ],
    [
        "Widget A",
        25.5,
        "=ERROR.TYPE(B2)"
    ],
    [
        "Widget B",
        "#VALUE!",
        "=ERROR.TYPE(B3)"
    ],
    [
        "Widget C",
        "#N/A",
        "=ERROR.TYPE(B4)"
    ],
    [
        "Widget D",
        "#DIV/0!",
        "=ERROR.TYPE(B5)"
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
        "Error Check"
    ],
    [
        "Widget A",
        25.5,
        "=ERROR.TYPE(B2)"
    ],
    [
        "Widget B",
        "#VALUE!",
        "=ERROR.TYPE(B3)"
    ],
    [
        "Widget C",
        "#N/A",
        "=ERROR.TYPE(B4)"
    ],
    [
        "Widget D",
        "#DIV/0!",
        "=ERROR.TYPE(B5)"
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
        "Error Check"
    ],
    [
        "Widget A",
        25.5,
        "=ERROR.TYPE(B2)"
    ],
    [
        "Widget B",
        "#VALUE!",
        "=ERROR.TYPE(B3)"
    ],
    [
        "Widget C",
        "#N/A",
        "=ERROR.TYPE(B4)"
    ],
    [
        "Widget D",
        "#DIV/0!",
        "=ERROR.TYPE(B5)"
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
        "Error Check"
    ],
    [
        "Widget A",
        25.5,
        "=ERROR.TYPE(B2)"
    ],
    [
        "Widget B",
        "#VALUE!",
        "=ERROR.TYPE(B3)"
    ],
    [
        "Widget C",
        "#N/A",
        "=ERROR.TYPE(B4)"
    ],
    [
        "Widget D",
        "#DIV/0!",
        "=ERROR.TYPE(B5)"
    ]
]
            }]
        });
    }
}
```

