title: NULL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NULL function in Jspreadsheet

# NULL function

`PRO`{.jtag}

In Jspreadsheet Formulas Pro, the `NULL` function is pretty straightforward. It doesn't require any input parameters and when used, it simply produces a null value. This means it essentially acts as a placeholder, indicating an absence of value or data. It can be useful in scenarios where you need to express that a cell is empty or has no value.

## Documentation

The NULL function takes no parameters and returns a null value.

### Category

Jspreadsheet

### Syntax

NULL()

| Parameter | Description |
| ----------- | ------------- |


### Behavior

The `NULL` function in spreadsheets is a special type of value that represents no value or no object. It implies no data, no amount and no quantity. Here's how it handles different scenarios:

- Empty cells: If a cell is empty, it is considered as NULL.
- Text: If you directly enter "NULL" in a cell, it will be treated as text, not as a NULL value.
- Booleans: NULL is neither true nor false. It's a separate, third kind of possible value.
- Errors: If a formula in a cell results in an error, it is not considered as NULL.

### Common Errors

| Error Name | Description |
| ----------- | ----------- |
| #NULL! | This error occurs when you specify an intersection of two areas that do not intersect. The intersection operator is a space character that separates references in a formula. |
| #VALUE! | This error occurs when the wrong type of argument or operand is used. For example, adding a text value to a numerical value or a null value. |
| #REF! | This error occurs when a cell reference is not valid. This happens when the referenced cell is NULL or has been deleted. |

### Best practices

> - When dealing with large data sets, it's essential to check for NULL values as they can affect the results of your calculations.
> - Always handle NULL values explicitly in your formulae. Ignoring NULLs can lead to unexpected results or errors.
> - Use `ISBLANK` function to check if a cell contains a NULL value.
> - Remember that a cell with a formula that returns an empty string ("") is not the same as a NULL cell.

### Usage

A few examples using the NULL function.

```
NULL() returns a null value.  
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
        "Discount"
    ],
    [
        "Laptop",
        999,
        "=NULL()"
    ],
    [
        "Mouse",
        25,
        "=NULL()"
    ],
    [
        "Keyboard",
        75,
        10
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
        "Discount"
    ],
    [
        "Laptop",
        999,
        "=NULL()"
    ],
    [
        "Mouse",
        25,
        "=NULL()"
    ],
    [
        "Keyboard",
        75,
        10
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
        "Discount"
    ],
    [
        "Laptop",
        999,
        "=NULL()"
    ],
    [
        "Mouse",
        25,
        "=NULL()"
    ],
    [
        "Keyboard",
        75,
        10
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
        "Discount"
    ],
    [
        "Laptop",
        999,
        "=NULL()"
    ],
    [
        "Mouse",
        25,
        "=NULL()"
    ],
    [
        "Keyboard",
        75,
        10
    ]
]
            }]
        });
    }
}
```

