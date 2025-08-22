title: ISREF function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISREF function in Jspreadsheet

# ISREF function

`PRO`{.jtag}

The `ISREF` function in Jspreadsheet Formulas Pro is a tool that verifies if a certain value is a valid cell reference. If the value provided is indeed a valid cell reference, the function will return TRUE. However, if the value isn't valid or doesn't correspond to a cell reference, the function will return FALSE. This can be particularly useful when managing and organizing your data within Jspreadsheet.

## Documentation

Checks if a given value is a valid cell reference and returns TRUE if the value is a valid cell reference, and FALSE otherwise.

### Category

Information

### Syntax

ISREF(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value that you want to test. |


### Behavior

The `ISREF` function in spreadsheets checks whether a value is a reference. It returns TRUE if the value is a cell or range reference and FALSE if it is not. Here is how it behaves with different types of inputs:

1. **Empty Cells**: If the cell being referenced is empty, `ISREF` still returns TRUE because it's a valid reference.
2. **Text**: If the input is text that does not represent a valid cell or range reference, `ISREF` returns FALSE.
3. **Booleans**: Booleans are not considered as references, so `ISREF` will return FALSE.
4. **Errors**: If the cell being referenced contains an error, `ISREF` will return TRUE, as it is still a valid reference. However, if the argument itself is an error, `ISREF` will return that error.
5. **Numbers**: Like booleans, numbers are not considered as references, so `ISREF` will return FALSE.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs when the function does not recognize the reference. This usually means the argument is text that doesn't correspond to a cell or range. |
| #REF! | Occurs when the reference is invalid. This typically happens when a cell or range referenced in the formula has been deleted or moved. |

### Best practices

> - Always ensure that the reference provided to `ISREF` is valid. If you're not sure, double-check it.
> - Use `ISREF` to validate that a cell or range reference exists before using it in a formula to avoid errors.
> - Be aware that `ISREF` will return TRUE for a cell that contains an error. If you want to check for errors, consider combining `ISREF` with an error-checking function like `ISERROR` or `IFERROR`.
> - Since `ISREF` only checks if a value is a reference, not the value within the reference, it is often used in combination with other functions for more powerful data validation and error handling.

### Usage

A few examples using the ISREF function.

```
ISREF(A1) returns TRUE because A1 is a valid cell reference  
ISREF("B2") returns FALSE because "B2" is not a valid cell reference  
ISREF(123) returns FALSE because 123 is not a valid cell reference.  
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
        "Value",
        "Is Reference?"
    ],
    [
        5,
        "=ISREF(A2)"
    ],
    [
        "B3",
        "=ISREF(A3)"
    ],
    [
        "=A1+A2",
        "=ISREF(A4)"
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
        "Value",
        "Is Reference?"
    ],
    [
        5,
        "=ISREF(A2)"
    ],
    [
        "B3",
        "=ISREF(A3)"
    ],
    [
        "=A1+A2",
        "=ISREF(A4)"
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
        "Value",
        "Is Reference?"
    ],
    [
        5,
        "=ISREF(A2)"
    ],
    [
        "B3",
        "=ISREF(A3)"
    ],
    [
        "=A1+A2",
        "=ISREF(A4)"
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
        "Value",
        "Is Reference?"
    ],
    [
        5,
        "=ISREF(A2)"
    ],
    [
        "B3",
        "=ISREF(A3)"
    ],
    [
        "=A1+A2",
        "=ISREF(A4)"
    ]
]
            }]
        });
    }
}
```

