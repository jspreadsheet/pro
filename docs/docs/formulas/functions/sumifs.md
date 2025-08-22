title: SUMIFS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SUMIFS function in Jspreadsheet

# SUMIFS function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SUMIFS` function in Jspreadsheet Formulas Pro is a useful tool that lets you add together certain values from a range of cells, but only if they meet specific conditions you set. These conditions, or criteria, allow you to filter out unwanted data and focus on what's important. For example, you might want to find the total sales made by a certain team member, or on certain days. With `SUMIFS`, you can do that easily by specifying these criteria.

## Documentation

Returns the sum of a range of cells that meet multiple specified criteria.

### Category

Math and trigonometry

### Syntax

SUMIFS(sum_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `sum_range` | The range of cells to add together. |
| `criteria_range1` | The first range to evaluate. |
| `criteria1` | The criteria used to determine which cells to add. |
| `criteria_rangeN` | Optional. Additional ranges to evaluate. |
| `criteria2` | Optional. Additional criteria used to determine which cells to add. |


### Behavior

The `SUMIFS` function in a spreadsheet is used to sum the values in a range that meet multiple criteria. This function takes an array of cells and sums the values that meet all the provided criteria. 

- Empty Cells: If an empty cell is included in the range, `SUMIFS` treats it as a zero when performing its calculations.
- Text: If a text cell is included in the range, `SUMIFS` ignores it during the calculation. However, text can be used in the criteria to match text in the range.
- Booleans: `SUMIFS` does not include Boolean values (TRUE or FALSE) in its calculations unless explicitly specified in the criteria. 
- Errors: If any cell in the range or criteria contains an error, `SUMIFS` will return an error.


### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the wrong type of argument or operand is used. For example, `SUMIFS` expects range and criteria to be in pairs, so an odd number of arguments will cause this error. |
| #N/A | This error is returned when no cells meet the criteria specified in the `SUMIFS` function. |
| #REF! | This error is returned when an invalid reference is used. This usually happens when a cell reference is not valid, for example, if a referenced worksheet was deleted. |

### Best practices

> - Always ensure that the criteria range and sum range are of the same size, otherwise, the function will return an error.
> - Be mindful of the type of data in your range. `SUMIFS` handles different data types differently (numbers, text, Booleans, etc).
> - Use absolute cell references (like $A$1) for criteria if you plan to copy the formula to other cells.
> - When specifying text criteria, remember to enclose the text in quotation marks. For example, `"paid"`. If you're including a cell reference or a function, use an ampersand (&) to concatenate it. For example, `">"&B1`.

### Usage

A few examples using the SUMIFS function.

```
SUMIFS(B2:B6, A2:A6, ">10") returns the sum of all values in cells B2 through B6 where the corresponding cell in A2 through A6 is greater than 10  
SUMIFS(B2:B6, A2:A6, "apples", C2:C6, "green") returns the sum of all values in cells B2 through B6 where the corresponding cell in A2 through A6 contains the text "apples" and the corresponding cell in C2 through C6 contains the text "green"  
SUMIFS(D2:D6, D2:D6, "=green", E2:E6, "<10") returns the sum of all values in cells D2 through D6 where the corresponding cell in D2 through D6 contains the text "green" and the corresponding cell in E2 through E6 is less than 10  
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
        "Color",
        "Quantity",
        "Price"
    ],
    [
        "Apples",
        "Red",
        5,
        2.5
    ],
    [
        "Apples",
        "Green",
        8,
        2.75
    ],
    [
        "Bananas",
        "Yellow",
        12,
        1.25
    ],
    [
        "Apples",
        "Red",
        3,
        2.5
    ],
    [
        "Oranges",
        "Orange",
        6,
        3.0
    ],
    [
        "Red Apples Total:",
        "=SUMIFS(D2:D6,A2:A6,\"Apples\",B2:B6,\"Red\")"
    ],
    [
        "Green Apples Total:",
        "=SUMIFS(D2:D6,A2:A6,\"Apples\",B2:B6,\"Green\")"
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
        "Color",
        "Quantity",
        "Price"
    ],
    [
        "Apples",
        "Red",
        5,
        2.5
    ],
    [
        "Apples",
        "Green",
        8,
        2.75
    ],
    [
        "Bananas",
        "Yellow",
        12,
        1.25
    ],
    [
        "Apples",
        "Red",
        3,
        2.5
    ],
    [
        "Oranges",
        "Orange",
        6,
        3.0
    ],
    [
        "Red Apples Total:",
        "=SUMIFS(D2:D6,A2:A6,\"Apples\",B2:B6,\"Red\")"
    ],
    [
        "Green Apples Total:",
        "=SUMIFS(D2:D6,A2:A6,\"Apples\",B2:B6,\"Green\")"
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
        "Color",
        "Quantity",
        "Price"
    ],
    [
        "Apples",
        "Red",
        5,
        2.5
    ],
    [
        "Apples",
        "Green",
        8,
        2.75
    ],
    [
        "Bananas",
        "Yellow",
        12,
        1.25
    ],
    [
        "Apples",
        "Red",
        3,
        2.5
    ],
    [
        "Oranges",
        "Orange",
        6,
        3.0
    ],
    [
        "Red Apples Total:",
        "=SUMIFS(D2:D6,A2:A6,\"Apples\",B2:B6,\"Red\")"
    ],
    [
        "Green Apples Total:",
        "=SUMIFS(D2:D6,A2:A6,\"Apples\",B2:B6,\"Green\")"
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
        "Color",
        "Quantity",
        "Price"
    ],
    [
        "Apples",
        "Red",
        5,
        2.5
    ],
    [
        "Apples",
        "Green",
        8,
        2.75
    ],
    [
        "Bananas",
        "Yellow",
        12,
        1.25
    ],
    [
        "Apples",
        "Red",
        3,
        2.5
    ],
    [
        "Oranges",
        "Orange",
        6,
        3.0
    ],
    [
        "Red Apples Total:",
        "=SUMIFS(D2:D6,A2:A6,\"Apples\",B2:B6,\"Red\")"
    ],
    [
        "Green Apples Total:",
        "=SUMIFS(D2:D6,A2:A6,\"Apples\",B2:B6,\"Green\")"
    ]
]
            }]
        });
    }
}
```

