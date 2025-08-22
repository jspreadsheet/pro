title: ISLOGICAL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISLOGICAL function in Jspreadsheet

# ISLOGICAL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `ISLOGICAL` function is a tool that verifies whether a certain value is logical, meaning it's either TRUE or FALSE. If the value you're checking is indeed logical, the function will return TRUE. Conversely, if the value isn't logical, the function will return FALSE. This can be especially useful when you're sorting through data and need to identify or filter logical values.

## Documentation

Checks if a given value is a logical value (TRUE or FALSE) and returns TRUE if the value is a logical value, and FALSE otherwise.

### Category

Information

### Syntax

ISLOGICAL(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value that you want to test. |


### Behavior

The `ISLOGICAL` function in a spreadsheet checks if a cell contains a logical value (TRUE or FALSE) and returns TRUE if it does, and FALSE if it does not. Here's how it handles different types of inputs:

- Empty Cells: If the cell is empty, `ISLOGICAL` returns FALSE.
- Text: `ISLOGICAL` returns FALSE when it encounters text, unless the text is "TRUE" or "FALSE".
- Booleans: `ISLOGICAL` returns TRUE for boolean values TRUE and FALSE.
- Errors: If a cell contains an error, `ISLOGICAL` returns FALSE.
- Numbers: `ISLOGICAL` returns FALSE for any type of number (positive, negative, zero, decimal).

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The formula has the wrong type of argument. This error occurs when the function is given a range of cells, instead of a single cell. |
| #NAME? | This error occurs if the function name is spelled incorrectly, or if the calculation chain, which is needed to obtain the necessary value, is broken. |

### Best practices

> - Use the `ISLOGICAL` function to test if a cell contains a logical value. This can be particularly useful in conditional formatting or other functions that require a TRUE or FALSE input.
> - Be cautious of text that may be perceived as logical values. The function only recognizes "TRUE" and "FALSE" as logical values.
> - Avoid using `ISLOGICAL` on ranges of cells as it will return a #VALUE! error. The function is designed to work with individual cells.
> - Use `ISLOGICAL` to filter or identify cells that contain logical values within your spreadsheet.

### Usage

A few examples using the ISLOGICAL function.

```
ISLOGICAL(TRUE) returns TRUE because TRUE is a logical value  
ISLOGICAL(FALSE) returns TRUE because FALSE is a logical value  
ISLOGICAL(C3) returns TRUE if cell C3 contains a logical value, and FALSE otherwise.  
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
        "Type Check",
        "Result"
    ],
    [
        true,
        "=ISLOGICAL(A2)",
        true
    ],
    [
        false,
        "=ISLOGICAL(A3)",
        true
    ],
    [
        25,
        "=ISLOGICAL(A4)",
        false
    ],
    [
        "Hello",
        "=ISLOGICAL(A5)",
        false
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
        "Type Check",
        "Result"
    ],
    [
        true,
        "=ISLOGICAL(A2)",
        true
    ],
    [
        false,
        "=ISLOGICAL(A3)",
        true
    ],
    [
        25,
        "=ISLOGICAL(A4)",
        false
    ],
    [
        "Hello",
        "=ISLOGICAL(A5)",
        false
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
        "Type Check",
        "Result"
    ],
    [
        true,
        "=ISLOGICAL(A2)",
        true
    ],
    [
        false,
        "=ISLOGICAL(A3)",
        true
    ],
    [
        25,
        "=ISLOGICAL(A4)",
        false
    ],
    [
        "Hello",
        "=ISLOGICAL(A5)",
        false
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
        "Type Check",
        "Result"
    ],
    [
        true,
        "=ISLOGICAL(A2)",
        true
    ],
    [
        false,
        "=ISLOGICAL(A3)",
        true
    ],
    [
        25,
        "=ISLOGICAL(A4)",
        false
    ],
    [
        "Hello",
        "=ISLOGICAL(A5)",
        false
    ]
]
            }]
        });
    }
}
```

