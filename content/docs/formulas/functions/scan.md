title: SCAN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SCAN function in Jspreadsheet

# SCAN function

`PRO`{.jtag}

The SCAN function in Jspreadsheet Formulas Pro allows you to perform calculations on each element in an array, returning a cumulative result based on the array values. This function is highly useful when you want to carry out the same operation on multiple data points. It analyses each item in the array, applies the specified calculation, and accumulates the results. This makes handling large amounts of data simpler and more efficient.

## Documentation

The SCAN function is a custom function in Microsoft Excel that allows you to apply a calculation to each element in an array and return an accumulated result based on the values in the array.

### Category

Logical

### Syntax

SCAN(initial_value, array, lambda(accumulator, value))

| Parameter | Description |
| ----------- | ------------- |
| `initial_value` | Sets the starting value for the accumulator. |
| `array` | An array to be scanned. |
| `lambda(accumulator, value))` | A LAMBDA that is called to scan the array. The LAMBDA takes two parameters: the accumulator and the current value in the array. |


### Behavior

The 'SCAN' function in a spreadsheet is not a standard or built-in function in popular spreadsheet software like Microsoft Excel, Google Sheets, or Apple Numbers. Therefore, its behavior would depend on the custom script or add-on that implements this function. However, if we hypothetically consider 'SCAN' as a function that searches a range or an array for a specific value, then it could have the following behaviors:

- Empty Cells: The function might ignore empty cells during its search, only focusing on cells that contain information.
- Text: The function would likely be able to scan for a specific text string within the selected range.
- Numbers: Similarly, the function should be able to search for a specific number within the selected range.
- Booleans: The function might also be equipped to find Boolean values (TRUE or FALSE) within the selected range.
- Errors: If the function encounters a cell with an error, it might either return an error or ignore the cell and continue the scan.

### Common Errors

Since 'SCAN' is not a standard spreadsheet function, there are no standard errors associated with it. However, hypothetically, it could encounter the following issues:

| Error | Description |
|-------|-------------|
| #VALUE! | This error might occur if the function's search value or range is invalid or not properly defined. |
| #REF! | This error might occur if the function refers to a cell that does not exist, such as if the range includes a deleted cell. |
| #NAME? | This error could occur if the function is not correctly spelled or if the spreadsheet software does not recognize it, as would be the case in a standard installation without the custom script or add-on that implements it. |

### Best practices
> - Always ensure that the search value and range are correctly specified to avoid errors.
> - Be mindful of the data type you are searching for. If you are searching for a number, make sure you are not accidentally searching for a text string, and vice versa.
> - If the function is part of a custom script or add-on, ensure it is properly installed and functioning before using it in your spreadsheet.
> - If possible, handle potential error situations within your function to avoid disrupting the entire spreadsheet with an error.

### Usage

A few examples using the SCAN function.

```
SCAN(0, A1:A5, LAMBDA(a, b, IF(MOD(b,2)=0, a+b, a))) returns the accumulated sum of all the even numbers in the array A1:A5  
SCAN('', A1:A5, LAMBDA(a, b, a & b)) returns a string concatenation of all the values in the array A1:A5  
SCAN(1, A1:A5, LAMBDA(a, b, a * b)) returns the accumulated product of all the values in the array A1:A5 starting from 1  
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
        "Sales",
        "Running Total",
        "Product"
    ],
    [
        100,
        "=SCAN(0,A2:A6,LAMBDA(acc,val,acc+val))",
        "Widget A"
    ],
    [
        250,
        "",
        "Widget B"
    ],
    [
        180,
        "",
        "Widget C"
    ],
    [
        320,
        "",
        "Widget D"
    ],
    [
        90,
        "",
        "Widget E"
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
        "Sales",
        "Running Total",
        "Product"
    ],
    [
        100,
        "=SCAN(0,A2:A6,LAMBDA(acc,val,acc+val))",
        "Widget A"
    ],
    [
        250,
        "",
        "Widget B"
    ],
    [
        180,
        "",
        "Widget C"
    ],
    [
        320,
        "",
        "Widget D"
    ],
    [
        90,
        "",
        "Widget E"
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
        "Sales",
        "Running Total",
        "Product"
    ],
    [
        100,
        "=SCAN(0,A2:A6,LAMBDA(acc,val,acc+val))",
        "Widget A"
    ],
    [
        250,
        "",
        "Widget B"
    ],
    [
        180,
        "",
        "Widget C"
    ],
    [
        320,
        "",
        "Widget D"
    ],
    [
        90,
        "",
        "Widget E"
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
        "Sales",
        "Running Total",
        "Product"
    ],
    [
        100,
        "=SCAN(0,A2:A6,LAMBDA(acc,val,acc+val))",
        "Widget A"
    ],
    [
        250,
        "",
        "Widget B"
    ],
    [
        180,
        "",
        "Widget C"
    ],
    [
        320,
        "",
        "Widget D"
    ],
    [
        90,
        "",
        "Widget E"
    ]
]
            }]
        });
    }
}
```

