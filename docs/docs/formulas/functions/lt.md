title: LT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LT function in Jspreadsheet

# LT function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `LT` function is used to compare two values and determine if the first one is less than the second. It's a simple and effective way to perform numerical comparisons directly within your spreadsheet. If the first value is indeed smaller, the function will return TRUE. If it's not smaller, or if the two values are equal, the function will return FALSE.

## Documentation

Determines whether the first value is less than the second.

### Category

Logical

### Syntax

LT(value1, value2)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value to compare. |
| `value2` | The second value to compare. |


### Behavior

The 'LT' function in spreadsheets is a logical function used to compare two numbers. It returns `TRUE` if the first number is less than the second number, and `FALSE` otherwise. 

- Empty Cells: If the 'LT' function is used on empty cells, it treats them as zero during the comparison.
- Text: If the 'LT' function is used on cells containing text, it often results in a `#VALUE!` error, as the function is designed to compare numbers.
- Booleans: Booleans are treated as `1` for `TRUE` and `0` for `FALSE` in the 'LT' function. 
- Errors: If any cell referenced in the 'LT' function contains an error, the function will also return that error.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error is displayed when one or both of the cells being compared by the 'LT' function contain non-numeric text.|
| #NAME? | This error occurs when the spreadsheet does not recognize the function name. This could be due to a typo in the function name.|
| #DIV/0! | This error is displayed when a number is divided by zero in the function.|

### Best practices
> - Always ensure that the cells being compared using the 'LT' function contain numeric values to avoid the `#VALUE!` error.
> - Be careful when referencing cells that could potentially contain errors to prevent the 'LT' function from returning an error.
> - Remember that the 'LT' function treats `TRUE` as `1` and `FALSE` as `0`. This can be leveraged to create more complex logical statements.
> - It's good practice to use parentheses to clearly indicate the order of operations when using the 'LT' function in combination with other functions. This can prevent unexpected results.

### Usage

A few examples using the LT function.

```
LT(5, 5) returns false  
LT(10, 5) returns false  
LT(5, 10) returns true  
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
        "Budget",
        "Actual",
        "Under Budget?"
    ],
    [
        1000,
        800,
        "=LT(B2,A2)"
    ],
    [
        500,
        650,
        "=LT(B3,A3)"
    ],
    [
        750,
        720,
        "=LT(B4,A4)"
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
        "Budget",
        "Actual",
        "Under Budget?"
    ],
    [
        1000,
        800,
        "=LT(B2,A2)"
    ],
    [
        500,
        650,
        "=LT(B3,A3)"
    ],
    [
        750,
        720,
        "=LT(B4,A4)"
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
        "Budget",
        "Actual",
        "Under Budget?"
    ],
    [
        1000,
        800,
        "=LT(B2,A2)"
    ],
    [
        500,
        650,
        "=LT(B3,A3)"
    ],
    [
        750,
        720,
        "=LT(B4,A4)"
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
        "Budget",
        "Actual",
        "Under Budget?"
    ],
    [
        1000,
        800,
        "=LT(B2,A2)"
    ],
    [
        500,
        650,
        "=LT(B3,A3)"
    ],
    [
        750,
        720,
        "=LT(B4,A4)"
    ]
]
            }]
        });
    }
}
```

