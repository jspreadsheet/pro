title: MAP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MAP function in Jspreadsheet

# MAP function

`PRO`{.jtag}

The `MAP` function in Jspreadsheet Formulas Pro is used to apply a certain formula or function to every individual cell within a specific range, and it then provides the results in the form of a new array. This allows for mass calculations to be done across a data set, saving you the time and effort of doing each calculation independently. Simply put, it is a way of applying the same operation to many cells at once, and then collecting all the results.

## Documentation

Applies a formula or function to every cell in a range and returns the results as a new array.

### Category

Logical

### Syntax

MAP(array, formula)

| Parameter | Description |
| ----------- | ------------- |
| `array` | The range of cells that you want to apply the formula to. |
| `formula` | The formula or function that you want to apply to each cell in the array. The formula can reference the current cell with a dot (.) or the entire array with square brackets ([]). |


### Behavior

The `MAP` function is not a standard function in most spreadsheet software such as Microsoft Excel, Google Sheets, or LibreOffice Calc. Therefore, it's important to check the specific functionality provided by your software. However, in general, a `MAP` function in a spreadsheet would likely handle inputs in the following ways:

- **Empty cells**: The `MAP` function may ignore empty cells entirely or treat them as zeros, depending on the specific implementation.
- **Text**: If the `MAP` function is designed to work with numerical data, it would likely return an error if a cell containing text is included in the range of cells it is mapping over.
- **Booleans**: The `MAP` function may treat boolean values as 1 (for TRUE) and 0 (for FALSE), or it may return an error if a boolean value is included in the range of cells it is mapping over.
- **Errors**: If one of the cells in the range that the `MAP` function is mapping over contains an error, the `MAP` function would likely return an error.

### Common Errors

| Error Name | Description |
| --- | --- |
| #VALUE!    | This error occurs when one or more of the cells in the range that the `MAP` function is mapping over contains a type of data (such as text or a boolean value) that the `MAP` function can't handle. |
| #REF!      | This error occurs when one of the cell references in the range that the `MAP` function is mapping over is not valid (for example, if the cell has been deleted). |
| #NUM!      | This error occurs when the `MAP` function encounters a number that it can't handle (for example, a number that's too large or too small). |

### Best practices

> - Always check the data types in the cells that the `MAP` function will be mapping over. Make sure they are compatible with the function's requirements.
> - Be aware of how your specific spreadsheet software handles empty cells when using the `MAP` function.
> - Use error handling functions to catch and handle any errors that may occur when using the `MAP` function.
> - If possible, avoid using the `MAP` function on large ranges of cells as it may slow down your spreadsheet's performance.

### Usage

A few examples using the MAP function.

```
MAP(A1:A5, LAMBDA(x, x*2)) applies the formula x*2 to each cell in the range A1:A5 and returns the resulting array  
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
        "Price with Tax"
    ],
    [
        "Laptop",
        999,
        "=MAP(B2:B4, LAMBDA(x, x*1.08))"
    ],
    [
        "Mouse",
        25
    ],
    [
        "Keyboard",
        75
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
        "Price with Tax"
    ],
    [
        "Laptop",
        999,
        "=MAP(B2:B4, LAMBDA(x, x*1.08))"
    ],
    [
        "Mouse",
        25
    ],
    [
        "Keyboard",
        75
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
        "Price with Tax"
    ],
    [
        "Laptop",
        999,
        "=MAP(B2:B4, LAMBDA(x, x*1.08))"
    ],
    [
        "Mouse",
        25
    ],
    [
        "Keyboard",
        75
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
        "Price with Tax"
    ],
    [
        "Laptop",
        999,
        "=MAP(B2:B4, LAMBDA(x, x*1.08))"
    ],
    [
        "Mouse",
        25
    ],
    [
        "Keyboard",
        75
    ]
]
            }]
        });
    }
}
```

