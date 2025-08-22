title: SORT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SORT function in Jspreadsheet

# SORT function

`PRO`{.jtag}

The `SORT` function in Jspreadsheet Formulas Pro is used to organize data in a specific order, either ascending or descending. It works on a specified range or array of data. For example, you can use it to arrange numbers from smallest to largest, or sort names alphabetically. It's a powerful tool for managing and analyzing data effectively.

## Documentation

Returns a sorted range or array.

### Category

Lookup and reference

### Syntax

SORT(array, [sort_index], [sort_order], [by_col])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The range or array of values to sort. |
| `[sort_index]` | Optional. The index of the column or row by which to sort. Default is 1. |
| `[sort_order]` | Optional. The order in which to sort. 1 for ascending order, -1 for descending order. Default is 1. |
| `[by_col]` | Optional. TRUE to sort by column, FALSE to sort by row. Default is TRUE. |


### Behavior

The 'SORT' function in a spreadsheet is used to sort a range of cells or array by the columns specified. It can be used to sort in ascending or descending order. 

- **Empty cells**: In a 'SORT' function, empty cells are considered as the lowest possible value and will always be sorted to the bottom.
- **Text**: The 'SORT' function can sort text alphabetically.
- **Booleans**: Booleans are sorted as FALSE before TRUE.
- **Errors**: If an error occurs in any cell in the range specified, the 'SORT' function will return an error. 
- **Non-Numeric**: Non-numeric values are sorted alphabetically.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | This error occurs when the 'SORT' function does not find any value to sort. |
| #VALUE! | This error occurs when the 'SORT' function receives an incorrect data type. |
| #REF! | This error occurs when the 'SORT' function refers to an invalid reference. |

### Best practices

> - Always ensure that the range specified in the 'SORT' function is correct to avoid any reference errors. 
> - Be cautious when sorting data that contains mixed data types as the result might not be as expected.
> - When sorting data in ascending or descending order, ensure that your data is consistent (i.e., all text or all numbers) to get accurate results.
> - Always check for empty cells in your range as they will always be sorted to the bottom.

### Usage

A few examples using the SORT function.

```
SORT(A1:A10) returns the values in range A1:A10 sorted in ascending order  
SORT(B2:E6, 3, -1, TRUE) sorts the range B2:E6 by the values in the third column, in descending order, and by column  
SORT([5,4,3,2,1]) returns [1,2,3,4,5]  
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
        "Name",
        "Score",
        "Department"
    ],
    [
        "Alice",
        85,
        "Sales"
    ],
    [
        "Bob",
        92,
        "Marketing"
    ],
    [
        "Carol",
        78,
        "Sales"
    ],
    [
        "David",
        88,
        "Marketing"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Sorted by Score (Descending):",
        "",
        ""
    ],
    [
        "=SORT(A2:C5,2,-1,TRUE)",
        "",
        ""
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
        "Name",
        "Score",
        "Department"
    ],
    [
        "Alice",
        85,
        "Sales"
    ],
    [
        "Bob",
        92,
        "Marketing"
    ],
    [
        "Carol",
        78,
        "Sales"
    ],
    [
        "David",
        88,
        "Marketing"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Sorted by Score (Descending):",
        "",
        ""
    ],
    [
        "=SORT(A2:C5,2,-1,TRUE)",
        "",
        ""
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
        "Name",
        "Score",
        "Department"
    ],
    [
        "Alice",
        85,
        "Sales"
    ],
    [
        "Bob",
        92,
        "Marketing"
    ],
    [
        "Carol",
        78,
        "Sales"
    ],
    [
        "David",
        88,
        "Marketing"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Sorted by Score (Descending):",
        "",
        ""
    ],
    [
        "=SORT(A2:C5,2,-1,TRUE)",
        "",
        ""
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
        "Name",
        "Score",
        "Department"
    ],
    [
        "Alice",
        85,
        "Sales"
    ],
    [
        "Bob",
        92,
        "Marketing"
    ],
    [
        "Carol",
        78,
        "Sales"
    ],
    [
        "David",
        88,
        "Marketing"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Sorted by Score (Descending):",
        "",
        ""
    ],
    [
        "=SORT(A2:C5,2,-1,TRUE)",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

