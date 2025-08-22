title: MIN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MIN function in Jspreadsheet

# MIN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MIN` function in Jspreadsheet Formulas Pro is a handy tool that allows you to find the smallest number within a selection of values. These values can be standalone numbers, or part of arrays or references. You simply input the range of values you're looking at into the function, and it will output the smallest value amongst them. This function is particularly useful when dealing with large datasets where it would be time-consuming to manually identify the smallest number.

## Documentation

Returns the smallest number in a set of values, including numbers, arrays, and references.

### Category

Statistical

### Syntax

MIN(number1,[number2],...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first numeric value, array, or reference for which you want to find the minimum value. |
| `[numberN]` | Optional. Additional numeric values, arrays, or references for which you want to find the minimum value. You can have up to 255 arguments. |


### Behavior

The `MIN` function in a spreadsheet is used to return the smallest number in a set of values. It ignores empty cells, logical values, and text in the cell range. However, if these values are typed directly into the list of arguments, the function takes them into account. Here's how it handles different types of data:

- **Empty cells:** `MIN` function ignores the cells that are empty.
- **Text:** If the cell range or array contains text, `MIN` function will ignore those cells.
- **Logical values (booleans):** `MIN` ignores logical values unless they are typed directly into the function as arguments.
- **Errors:** If any cell in the range contains an error, the `MIN` function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | Occurs if the supplied arguments are non-numeric and are not in an array or reference. |
| #DIV/0! | Occurs if the supplied arguments include a division by zero. |
| #NAME? | Occurs if Excel does not recognize the text in a formula. |

### Best practices

> - Always ensure that the range of cells you are trying to find the minimum value of does not contain non-numeric values to prevent the `#VALUE!` error.
> - Use the `MIN` function with other functions like `IF` to exclude zero values in the range if necessary.
> - While working with large datasets, ensure that the range you are providing to the `MIN` function is correct.
> - If you are using the `MIN` function on a column of a database, ensure that the column does not contain any error values, or the function will return an error.

### Usage

A few examples using the MIN function.

```
MIN(3, 5, 1) returns 1  
MIN(A1:C10) returns the smallest value in the range A1 through C10  
MIN([1, 2, 3, 4, 5]) returns 1  
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
        "Product B",
        "Product C",
        "Minimum Price"
    ],
    [
        25.99,
        32.5,
        18.75,
        "=MIN(A2:C2)"
    ],
    [
        45.0,
        28.99,
        35.25,
        "=MIN(A3:C3)"
    ],
    [
        12.5,
        22.0,
        19.99,
        "=MIN(A4:C4)"
    ],
    [
        "Overall Min:",
        "",
        "",
        "=MIN(A2:C4)"
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
        "Product B",
        "Product C",
        "Minimum Price"
    ],
    [
        25.99,
        32.5,
        18.75,
        "=MIN(A2:C2)"
    ],
    [
        45.0,
        28.99,
        35.25,
        "=MIN(A3:C3)"
    ],
    [
        12.5,
        22.0,
        19.99,
        "=MIN(A4:C4)"
    ],
    [
        "Overall Min:",
        "",
        "",
        "=MIN(A2:C4)"
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
        "Product B",
        "Product C",
        "Minimum Price"
    ],
    [
        25.99,
        32.5,
        18.75,
        "=MIN(A2:C2)"
    ],
    [
        45.0,
        28.99,
        35.25,
        "=MIN(A3:C3)"
    ],
    [
        12.5,
        22.0,
        19.99,
        "=MIN(A4:C4)"
    ],
    [
        "Overall Min:",
        "",
        "",
        "=MIN(A2:C4)"
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
        "Product B",
        "Product C",
        "Minimum Price"
    ],
    [
        25.99,
        32.5,
        18.75,
        "=MIN(A2:C2)"
    ],
    [
        45.0,
        28.99,
        35.25,
        "=MIN(A3:C3)"
    ],
    [
        12.5,
        22.0,
        19.99,
        "=MIN(A4:C4)"
    ],
    [
        "Overall Min:",
        "",
        "",
        "=MIN(A2:C4)"
    ]
]
            }]
        });
    }
}
```

