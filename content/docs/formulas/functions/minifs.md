title: MINIFS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MINIFS function in Jspreadsheet

# MINIFS function

`PRO`{.jtag}

The `MINIFS` function in Jspreadsheet Formulas Pro is a tool that helps you find the smallest number from a set of data that fulfills various conditions you specify. This function scans through your data, evaluates each entry against your criteria, and then identifies the smallest value that meets all these conditions. It's an efficient way to pinpoint specific data in a large dataset. This can be particularly useful in scenarios where you need to find the minimum value that corresponds to multiple conditions in your data analysis.

## Documentation

Returns the smallest number among numbers that meet multiple criteria.

### Category

Statistical

### Syntax

MINIFS(min_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `min_range` | The range of cells to find the minimum value. |
| `criteria_range1` | The first range to evaluate based on the associated criteria. |
| `criteria1` | The criteria to use for the first range. |
| `[criteria_rangeN, criteriaN]` | Optional. Additional ranges to evaluate based on their associated criteria. |


### Behavior

The `MINIFS` function in a spreadsheet is used to return the smallest number in a range of cells, given one or more conditions. Here is how it handles different inputs:

- **Empty Cells**: `MINIFS` will ignore empty cells in the dataset while calculating the minimum value.
- **Text**: If a text value is present in the range of cells, `MINIFS` will not consider it while calculating the minimum value. However, text can be used in the criteria for filtering the range of cells.
- **Booleans**: `MINIFS` does not consider Boolean values (True/False) in the range of cells while calculating the minimum value. However, Boolean values can be used in the criteria for filtering the range of cells.
- **Errors**: If any cell in the range contains an error, `MINIFS` will return that error.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | This error occurs when the criteria do not match the data type. For example, if you are looking for a text string in a range of numbers, you will get this error. |
| #N/A | This error occurs when no cells meet the given criteria. |
| #DIV/0! | This error occurs if you are dividing by zero in your criteria. |
| #NUM! | This error occurs when a number is too large or too small for the spreadsheet to handle. |

### Best practices

> - Always make sure the range and criteria_range arguments have the same shape, or `MINIFS` may not give you the results you expect.
> - Avoid using entire column references for the range and criteria_range as it can slow down the calculation time of your spreadsheet.
> - Use clear and specific criteria to avoid errors and to ensure you are finding the minimum of the correct range of cells.
> - Handle errors gracefully in your spreadsheet by using error handling functions like `IFERROR` or `ISERROR` with `MINIFS` to avoid errors breaking your calculations.

### Usage

A few examples using the MINIFS function.

```
MINIFS(A1:A10, B1:B10, ">0", C1:C10, "<5") returns the smallest value in range A1:A10 where the corresponding values in range B1:B10 are greater than 0 and the corresponding values in range C1:C10 are less than 5  
MINIFS(D1:D10, D1:D10, ">10") returns the smallest value in range D1:D10 that is greater than 10  
MINIFS(E1:E10, F1:F10, "apples", G1:G10, "oranges") returns the smallest value in range E1:E10 where the corresponding values in range F1:F10 are "apples" and the corresponding values in range G1:G10 are "oranges"  
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
        "Category",
        "Stock",
        "Min Price >$10 Electronics"
    ],
    [
        "Laptop",
        899,
        "Electronics",
        15,
        "=MINIFS(B2:B6,C2:C6,\"Electronics\",B2:B6,\">10\")"
    ],
    [
        "Phone",
        599,
        "Electronics",
        8
    ],
    [
        "Book",
        25,
        "Books",
        50
    ],
    [
        "Tablet",
        299,
        "Electronics",
        12
    ],
    [
        "Magazine",
        5,
        "Books",
        100
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
        "Category",
        "Stock",
        "Min Price >$10 Electronics"
    ],
    [
        "Laptop",
        899,
        "Electronics",
        15,
        "=MINIFS(B2:B6,C2:C6,\"Electronics\",B2:B6,\">10\")"
    ],
    [
        "Phone",
        599,
        "Electronics",
        8
    ],
    [
        "Book",
        25,
        "Books",
        50
    ],
    [
        "Tablet",
        299,
        "Electronics",
        12
    ],
    [
        "Magazine",
        5,
        "Books",
        100
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
        "Category",
        "Stock",
        "Min Price >$10 Electronics"
    ],
    [
        "Laptop",
        899,
        "Electronics",
        15,
        "=MINIFS(B2:B6,C2:C6,\"Electronics\",B2:B6,\">10\")"
    ],
    [
        "Phone",
        599,
        "Electronics",
        8
    ],
    [
        "Book",
        25,
        "Books",
        50
    ],
    [
        "Tablet",
        299,
        "Electronics",
        12
    ],
    [
        "Magazine",
        5,
        "Books",
        100
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
        "Category",
        "Stock",
        "Min Price >$10 Electronics"
    ],
    [
        "Laptop",
        899,
        "Electronics",
        15,
        "=MINIFS(B2:B6,C2:C6,\"Electronics\",B2:B6,\">10\")"
    ],
    [
        "Phone",
        599,
        "Electronics",
        8
    ],
    [
        "Book",
        25,
        "Books",
        50
    ],
    [
        "Tablet",
        299,
        "Electronics",
        12
    ],
    [
        "Magazine",
        5,
        "Books",
        100
    ]
]
            }]
        });
    }
}
```

