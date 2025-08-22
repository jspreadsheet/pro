title: GTE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GTE function in Jspreadsheet

# GTE function

`PRO`{.jtag}

The `GTE` function in Jspreadsheet Formulas Pro is a comparison tool that helps you check if one value is greater than or equal to another. You simply provide two values, and it will return a boolean result. If the first value is indeed greater than or equal to the second, it will return true; otherwise, it will return false. This function is very useful for making comparisons and decisions in your spreadsheet calculations.

## Documentation

Determines whether the first value is greater than or equal to the second.

### Category

Logical

### Syntax

GTE(value1, value2)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value to compare. |
| `value2` | The second value to compare. |


### Behavior

The 'GTE' function is used in spreadsheets to compare two numerical values and return a boolean result. The function returns TRUE if the first number is greater than or equal to the second number, and FALSE if the first number is less than the second number.

- Empty cells: When one or both of the cells being compared are empty, the function treats them as zeros.
- Text: If the function is used to compare text values, it generally results in an error, as GTE is designed to work with numerical values.
- Booleans: In spreadsheets, TRUE is generally treated as 1 and FALSE as 0. Therefore, if used with boolean values, GTE will return a result based on this numerical representation.
- Errors: If either of the cells being compared contains an error, the GTE function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs when one or both of the arguments are text that cannot be translated into numbers. |
| #DIV/0! | Occurs when the second argument is zero and the first is not. |
| #NAME? | Occurs when the spreadsheet does not recognize the function name "GTE". This could mean that the function is not available in the spreadsheet program being used. |

### Best practices

> - Always ensure that the cells being compared using the GTE function contain numerical values to avoid errors.
> - Use the GTE function with caution when comparing boolean values, as they are treated as 1 (TRUE) and 0 (FALSE).
> - Avoid using GTE function where the second argument can be zero and the first is not, as this can lead to a #DIV/0! error.
> - Check if your spreadsheet program supports the GTE function to prevent a #NAME? error.

### Usage

A few examples using the GTE function.

```
GTE(5, 5) returns true  
GTE(10, 5) returns true  
GTE(5, 10) returns false  
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
        "Target Sales",
        "Actual Sales",
        "Target Met?"
    ],
    [
        "Widget A",
        1000,
        1200,
        "=GTE(C2,B2)"
    ],
    [
        "Widget B",
        800,
        750,
        "=GTE(C3,B3)"
    ],
    [
        "Widget C",
        1500,
        1500,
        "=GTE(C4,B4)"
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
        "Target Sales",
        "Actual Sales",
        "Target Met?"
    ],
    [
        "Widget A",
        1000,
        1200,
        "=GTE(C2,B2)"
    ],
    [
        "Widget B",
        800,
        750,
        "=GTE(C3,B3)"
    ],
    [
        "Widget C",
        1500,
        1500,
        "=GTE(C4,B4)"
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
        "Target Sales",
        "Actual Sales",
        "Target Met?"
    ],
    [
        "Widget A",
        1000,
        1200,
        "=GTE(C2,B2)"
    ],
    [
        "Widget B",
        800,
        750,
        "=GTE(C3,B3)"
    ],
    [
        "Widget C",
        1500,
        1500,
        "=GTE(C4,B4)"
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
        "Target Sales",
        "Actual Sales",
        "Target Met?"
    ],
    [
        "Widget A",
        1000,
        1200,
        "=GTE(C2,B2)"
    ],
    [
        "Widget B",
        800,
        750,
        "=GTE(C3,B3)"
    ],
    [
        "Widget C",
        1500,
        1500,
        "=GTE(C4,B4)"
    ]
]
            }]
        });
    }
}
```

