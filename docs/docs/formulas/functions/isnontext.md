title: ISNONTEXT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISNONTEXT function in Jspreadsheet

# ISNONTEXT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `ISNONTEXT` function in Jspreadsheet Formulas Pro is a tool that lets you determine if a certain value is not text. It will return TRUE if the value is indeed not text, such as a number or date, and FALSE if the value is text. This function is particularly useful when you want to filter or differentiate between textual and non-textual data in your spreadsheet.

## Documentation

Checks if a given value is not text (any non-textual value) and returns TRUE if the value is not text, and FALSE otherwise.

### Category

Information

### Syntax

ISNONTEXT(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | The value that you want to test. |


### Behavior

The `ISNONTEXT` function in spreadsheets is used to determine if a cell contains non-textual data. It returns TRUE if the cell's data is not text and FALSE if it is.

1. **Empty cells**: `ISNONTEXT` treats empty cells as non-text and returns TRUE.
2. **Text**: For cells that contain text, whether typed directly into the cell or as a result of a formula, `ISNONTEXT` returns FALSE.
3. **Numbers**: `ISNONTEXT` treats numbers as non-text and returns TRUE.
4. **Booleans**: Boolean values (TRUE and FALSE) are considered non-text. Thus, `ISNONTEXT` returns TRUE for these values.
5. **Errors**: If the cell contains an error, `ISNONTEXT` treats it as non-text and returns TRUE.

### Common Errors

| Error | Description |
|---|---|
| #VALUE! | This error occurs when the formula has the wrong type of argument. `ISNONTEXT` expects a single cell or value. |

### Best practices

> - Use the `ISNONTEXT` function to validate data inputs. It can be used in data cleaning to ensure that specific cells contain non-text values.
> - Be aware that the `ISNONTEXT` function will return TRUE for empty cells. If you want to treat empty cells differently, you may need to use additional functions or conditions in your formula.
> - Remember that `ISNONTEXT` considers error values as non-text. This can be useful for identifying cells that have errors.
> - Combine `ISNONTEXT` with other functions to create more complex conditions. For example, you can use it with the `IF` function to perform different actions based on whether a cell contains text or not.

### Usage

A few examples using the ISNONTEXT function.

```
ISNONTEXT(123) returns TRUE because 123 is not a text value  
ISNONTEXT("banana") returns FALSE because "banana" is a text value  
ISNONTEXT(A1) returns TRUE if cell A1 contains any non-textual value, and FALSE otherwise.  
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
        "Is Non-Text?"
    ],
    [
        42,
        "=ISNONTEXT(A2)"
    ],
    [
        "Hello",
        "=ISNONTEXT(A3)"
    ],
    [
        3.14,
        "=ISNONTEXT(A4)"
    ],
    [
        "",
        "=ISNONTEXT(A5)"
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
        "Is Non-Text?"
    ],
    [
        42,
        "=ISNONTEXT(A2)"
    ],
    [
        "Hello",
        "=ISNONTEXT(A3)"
    ],
    [
        3.14,
        "=ISNONTEXT(A4)"
    ],
    [
        "",
        "=ISNONTEXT(A5)"
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
        "Is Non-Text?"
    ],
    [
        42,
        "=ISNONTEXT(A2)"
    ],
    [
        "Hello",
        "=ISNONTEXT(A3)"
    ],
    [
        3.14,
        "=ISNONTEXT(A4)"
    ],
    [
        "",
        "=ISNONTEXT(A5)"
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
        "Is Non-Text?"
    ],
    [
        42,
        "=ISNONTEXT(A2)"
    ],
    [
        "Hello",
        "=ISNONTEXT(A3)"
    ],
    [
        3.14,
        "=ISNONTEXT(A4)"
    ],
    [
        "",
        "=ISNONTEXT(A5)"
    ]
]
            }]
        });
    }
}
```

