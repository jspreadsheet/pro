title: TOCOL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TOCOL function in Jspreadsheet

# TOCOL function



The `TOCOL` function in Jspreadsheet Formulas Pro is a helpful tool that transforms an array into a single-column array. Essentially, it takes a group of data points and rearranges them into one vertical line. This is useful when you want to simplify or reorganize your data for easier reading and analysis. With the `TOCOL` function, you can streamline your data management tasks in Jspreadsheet.

## Documentation

Converts an array into a single-column array.

### Category

Lookup and reference

### Syntax

TOCOL(array, [ignore], [scan_by_column])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array to be converted into a single-column array. |
| `[ignore]` | Optional. A boolean value (TRUE or FALSE) that determines whether to ignore empty cells in the input array. By default, empty cells are not ignored (FALSE). |
| `[scan_by_column]` | Optional. A boolean value (TRUE or FALSE) that determines whether to scan the array by column (TRUE) or by row (FALSE). By default, scanning is done by column (TRUE). |


### Behavior

The 'TOCOL' function in spreadsheet is typically used for returning the column number of a cell reference. Here's how it generally handles different types of inputs:

- **Empty Cells**: If the targeted cell is empty, the 'TOCOL' function will still return the column number on which the empty cell is located.
  
- **Text**: The 'TOCOL' function works with text as well. It will return the column number of the cell which contains the text. The content of the cell does not affect the outcome of the function.
  
- **Booleans**: The function treats boolean values the same way as it treats text or numbers. It will return the column number of the cell which contains the boolean value.
  
- **Errors**: If the cell reference provided to the 'TOCOL' function is invalid or non-existent, the function will return an error.

### Common Errors

| Error Name | Description |
|------------|-------------|
| #REF! | This error means the cell reference provided is invalid. It happens if the cell reference is not within the range of the spreadsheet. |
| #VALUE! | This error occurs when the input argument or cell reference is not recognized by the function. This may occur if the cell reference is missing or if non-cell reference values are used. |

### Best practices

> - Always ensure to provide a valid cell reference to the 'TOCOL' function to avoid errors.
> - Remember that 'TOCOL' returns the column number of the cell reference. If you want to get the column letter, you may need to use a different function or a combination of functions.
> - It's a good practice to use absolute cell references (like $A$1) in 'TOCOL' function. This prevents the cell references from changing when you drag the formula down or across the cells.
> - Try to keep your spreadsheet clean and organized. Having a well-structured spreadsheet makes it easier to use functions like 'TOCOL' effectively.

### Usage

A few examples using the TOCOL function.

```
TOCOL(A1:B5) returns a single column with all values within the range A1:B5  
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
        "Product C"
    ],
    [
        100,
        150,
        200
    ],
    [
        75,
        125,
        175
    ],
    [
        90,
        140,
        190
    ],
    [
        "=TOCOL(A1:C4)"
    ],
    [
        "Product A"
    ],
    [
        100
    ],
    [
        75
    ],
    [
        90
    ],
    [
        "Product B"
    ],
    [
        150
    ],
    [
        125
    ],
    [
        140
    ],
    [
        "Product C"
    ],
    [
        200
    ],
    [
        175
    ],
    [
        190
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
        "Product C"
    ],
    [
        100,
        150,
        200
    ],
    [
        75,
        125,
        175
    ],
    [
        90,
        140,
        190
    ],
    [
        "=TOCOL(A1:C4)"
    ],
    [
        "Product A"
    ],
    [
        100
    ],
    [
        75
    ],
    [
        90
    ],
    [
        "Product B"
    ],
    [
        150
    ],
    [
        125
    ],
    [
        140
    ],
    [
        "Product C"
    ],
    [
        200
    ],
    [
        175
    ],
    [
        190
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
        "Product C"
    ],
    [
        100,
        150,
        200
    ],
    [
        75,
        125,
        175
    ],
    [
        90,
        140,
        190
    ],
    [
        "=TOCOL(A1:C4)"
    ],
    [
        "Product A"
    ],
    [
        100
    ],
    [
        75
    ],
    [
        90
    ],
    [
        "Product B"
    ],
    [
        150
    ],
    [
        125
    ],
    [
        140
    ],
    [
        "Product C"
    ],
    [
        200
    ],
    [
        175
    ],
    [
        190
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
        "Product C"
    ],
    [
        100,
        150,
        200
    ],
    [
        75,
        125,
        175
    ],
    [
        90,
        140,
        190
    ],
    [
        "=TOCOL(A1:C4)"
    ],
    [
        "Product A"
    ],
    [
        100
    ],
    [
        75
    ],
    [
        90
    ],
    [
        "Product B"
    ],
    [
        150
    ],
    [
        125
    ],
    [
        140
    ],
    [
        "Product C"
    ],
    [
        200
    ],
    [
        175
    ],
    [
        190
    ]
]
            }]
        });
    }
}
```

