title: MAXIFS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MAXIFS function in Jspreadsheet

# MAXIFS function

`PRO`{.jtag}

The `MAXIFS` function in Jspreadsheet Formulas Pro is a handy tool that allows you to find the highest value within a specific group of cells, given that certain conditions are met. It does this by scanning through the selected range of cells and then returning the maximum number that fulfills all the set criteria. This is particularly useful when you need to find the highest value in a dataset, but only under specific conditions. For instance, you can use `MAXIFS` to find the highest sales figure for a specific product in a particular region.

## Documentation

Returns the largest number in a range of cells that meets multiple criteria.

### Category

Statistical

### Syntax

MAXIFS(range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `range` | The range of cells from which you want to find the largest value that meets the specified criteria. |
| `criteria_range1` | The first range of cells that you want to apply a criterion to. This can be the same as the 'range' argument. |
| `criteria1` | The criterion that you want to apply to the 'criteria_range1'. |
| `criteria_rangeN` | Optional. Additional ranges of cells that you want to apply criteria to. |
| `criteriaN` | Optional. The criterion that you want to apply to the nth. You can specify up to 127 pairs of criteria_range and criteria arguments. |


### Behavior

The `MAXIFS` function in spreadsheets is used to find the maximum value among cells specified by a given set of conditions or criteria. 

1. **Empty cells**: If the criteria or max_range contains empty cells, `MAXIFS` will ignore these cells and will not consider them in the calculation.
2. **Text**: If the criteria or max_range contains text, `MAXIFS` treats these as errors and returns an error value. However, text can be used within the criteria to match cells.
3. **Booleans**: Boolean values are not directly supported in `MAXIFS`. If a cell in the criteria contains a boolean, an error is returned. However, boolean values can be used as criteria - for instance, to check if a cell equals TRUE or FALSE.
4. **Errors**: If any cell in the criteria or max_range contains an error, `MAXIFS` will return an error. If the criteria is an error, all cells will fail the criteria.
5. **Non-Numeric Values**: Non-numeric values within the range to be evaluated are treated as zeros.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when the criteria is a text string that is not in quotation marks. |
| #N/A | This error is returned when no cells meet the criteria. |
| #NAME? | This error is returned when the `MAXIFS` function is not supported in the spreadsheet software. |
| #DIV/0! | This error is returned when the criteria or max_range is a cell reference to an empty cell. |

### Best practices

> 1. Ensure all criteria are in quotation marks if they are text strings to prevent a #VALUE! error.
> 2. Handle errors properly within your data set to prevent the `MAXIFS` function from returning an error.
> 3. Avoid using non-numeric values within the range to be evaluated by `MAXIFS` as they are treated as zeros.
> 4. Be aware that `MAXIFS` will ignore empty cells and will not consider them in the calculation. Make sure this does not impact your expected results.

### Usage

A few examples using the MAXIFS function.

```
MAXIFS(A1:A10, B1:B10, ">5") returns the largest number in the range A1:A10 that is greater than 5 in the corresponding cell in the range B1:B10  
MAXIFS(B1:B10, A1:A10, "apples", B1:B10, ">5") returns the largest number in the range B1:B10 that corresponds to cells in the range A1:A10 containing the text string "apples" and the corresponding cell in the range B1:B10 being greater than 5  
MAXIFS(A1:A10, A1:A10, "<>", B1:B10, "red") returns the largest number in the range A1:A10 that corresponds to cells in the range A1:A10 that are not blank and the corresponding cell in the range B1:B10 containing the text string "red".  
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
        "Sales",
        "Region"
    ],
    [
        "Apples",
        150,
        "North"
    ],
    [
        "Bananas",
        200,
        "South"
    ],
    [
        "Apples",
        175,
        "North"
    ],
    [
        "Oranges",
        125,
        "South"
    ],
    [
        "Apples",
        180,
        "South"
    ],
    [
        "",
        "=MAXIFS(B2:B6,A2:A6,\"Apples\",C2:C6,\"North\")",
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
        "Product",
        "Sales",
        "Region"
    ],
    [
        "Apples",
        150,
        "North"
    ],
    [
        "Bananas",
        200,
        "South"
    ],
    [
        "Apples",
        175,
        "North"
    ],
    [
        "Oranges",
        125,
        "South"
    ],
    [
        "Apples",
        180,
        "South"
    ],
    [
        "",
        "=MAXIFS(B2:B6,A2:A6,\"Apples\",C2:C6,\"North\")",
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
        "Product",
        "Sales",
        "Region"
    ],
    [
        "Apples",
        150,
        "North"
    ],
    [
        "Bananas",
        200,
        "South"
    ],
    [
        "Apples",
        175,
        "North"
    ],
    [
        "Oranges",
        125,
        "South"
    ],
    [
        "Apples",
        180,
        "South"
    ],
    [
        "",
        "=MAXIFS(B2:B6,A2:A6,\"Apples\",C2:C6,\"North\")",
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
        "Product",
        "Sales",
        "Region"
    ],
    [
        "Apples",
        150,
        "North"
    ],
    [
        "Bananas",
        200,
        "South"
    ],
    [
        "Apples",
        175,
        "North"
    ],
    [
        "Oranges",
        125,
        "South"
    ],
    [
        "Apples",
        180,
        "South"
    ],
    [
        "",
        "=MAXIFS(B2:B6,A2:A6,\"Apples\",C2:C6,\"North\")",
        ""
    ]
]
            }]
        });
    }
}
```

