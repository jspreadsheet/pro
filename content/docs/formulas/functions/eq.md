title: EQ function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EQ function in Jspreadsheet

# EQ function

`PRO`{.jtag}

The `EQ` function in Jspreadsheet Formulas Pro is a simple tool that helps you ascertain if two values are identical. It's a comparison formula that returns 'TRUE' if the two values compared are the same, and 'FALSE' if they are not. You can use this function to quickly compare data like numbers, text or dates in different cells. It's a practical way to handle data validation and discrepancy checks in your Jspreadsheet.

## Documentation

Determines if two values are equal.

### Category

Logical

### Syntax

EQ(value1, value2)

| Parameter | Description |
| ----------- | ------------- |
| `value1` | The first value to compare. |
| `value2` | The second value to compare. |


### Behavior

The 'EQ' function in spreadsheets is essentially a comparison operator that checks if two given values are equal. The function returns `TRUE` if the values are equal and `FALSE` if they aren't. Here are some expected behaviors:

- **Empty cells**: If either or both of the compared cells are empty, the function returns `FALSE`.
- **Text**: When comparing text strings, the 'EQ' function is case-sensitive. It returns `TRUE` only if both strings are identical, including the case.
- **Booleans**: The function treats `TRUE` as 1 and `FALSE` as 0. Therefore, 'EQ' returns `TRUE` when comparing `TRUE` with 1 and `FALSE` with 0.
- **Errors**: If either of the compared cells contains an error, the 'EQ' function returns that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the 'EQ' function is used with inappropriate data types. |
| #REF! | This error is returned when a cell reference is not valid. |
| #NAME? | This error occurs when the 'EQ' function is misspelled or when the spreadsheet does not recognize the text in the formula. |

### Best practices

> - Ensure both cells being compared have the same data type (text, number, boolean).
> - While comparing text, ensure both are in the same case as the function is case-sensitive.
> - Be cautious when comparing cells that may contain errors, as the 'EQ' function will return the error itself.
> - Use the 'EQ' function in combination with IF function to perform actions based on the equality of two cells.

### Usage

A few examples using the EQ function.

```
EQ(5, 5) returns true  
EQ(10, 5) returns false  
EQ(A2, B2) returns true if the values in cells A2 and B2 are equal  
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
        "Product A",
        "Product A",
        "=EQ(A1,B1)"
    ],
    [
        "Product B",
        "Product C",
        "=EQ(A2,B2)"
    ],
    [
        "Product D",
        "Product D",
        "=EQ(A3,B3)"
    ],
    [
        100,
        100,
        "=EQ(A4,B4)"
    ],
    [
        250,
        300,
        "=EQ(A5,B5)"
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
        "Product A",
        "Product A",
        "=EQ(A1,B1)"
    ],
    [
        "Product B",
        "Product C",
        "=EQ(A2,B2)"
    ],
    [
        "Product D",
        "Product D",
        "=EQ(A3,B3)"
    ],
    [
        100,
        100,
        "=EQ(A4,B4)"
    ],
    [
        250,
        300,
        "=EQ(A5,B5)"
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
        "Product A",
        "Product A",
        "=EQ(A1,B1)"
    ],
    [
        "Product B",
        "Product C",
        "=EQ(A2,B2)"
    ],
    [
        "Product D",
        "Product D",
        "=EQ(A3,B3)"
    ],
    [
        100,
        100,
        "=EQ(A4,B4)"
    ],
    [
        250,
        300,
        "=EQ(A5,B5)"
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
        "Product A",
        "Product A",
        "=EQ(A1,B1)"
    ],
    [
        "Product B",
        "Product C",
        "=EQ(A2,B2)"
    ],
    [
        "Product D",
        "Product D",
        "=EQ(A3,B3)"
    ],
    [
        100,
        100,
        "=EQ(A4,B4)"
    ],
    [
        250,
        300,
        "=EQ(A5,B5)"
    ]
]
            }]
        });
    }
}
```

