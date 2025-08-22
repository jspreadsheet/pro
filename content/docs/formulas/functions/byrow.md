title: BYROW Function – Row-wise Lambda Operations in Jspreadsheet
keywords: Jspreadsheet, BYROW, row-wise formula, lambda function, spreadsheet array formulas, custom spreadsheet functions, JavaScript formulas, Excel-like spreadsheet
description: Hoow to use the BYROW function in Jspreadsheet to apply a custom lambda function across each row in a selected array and return an array of results.

# BYROW function

`PRO`{.jtag}

The `BYROW` function in Jspreadsheet Pro is used to reference a range of cells that's a certain number of rows above or below a starting range. Essentially, it helps you navigate and manipulate data vertically within your spreadsheet. For example, if you want to refer to a range that's three rows below your starting cell, you'd use the `BYROW` function. It's a handy tool for managing and organizing your data effectively.

## Documentation

Returns a reference to a range that is a specified number of rows above or below a starting range.

### Category

Logical

### Syntax

BYROW(array, [function])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array containing the rows to process. |
| `[function]` | Optional: The LAMBDA function to apply to each row of the array. If not specified, the function is assumed to be already defined. |


### Behavior

The `BYROW` function in spreadsheets applies a specific formula or function to each row in a given range. The function will handle different data types in the following ways:

- **Empty Cells**: Ignored unless the lambda specifically handles them.
- **Text**: Handled or ignored based on the logic inside the lambda.
- **Booleans**: Usually converted (`TRUE` = 1, `FALSE` = 0) if the lambda performs numeric operations.
- **Errors**: If an error exists in a row, it may cause the output for that row to error unless handled inside the lambda.

> The result is a **vertical array** with one value per row from the original range.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The function applied in `BYROW` does not support the data type found in a specific cell. |
| #REF! | The range given in `BYROW` is invalid or doesn't exist. |
| #NAME? | The function applied in `BYROW` does not exist or has been misspelled. |
| #N/A | The function applied in `BYROW` is looking for a value that doesn't exist in the row. |

### Best practices

> - Always ensure that the function being applied in `BYROW` is compatible with the data types in the rows.
> - Handle error cases in your function to prevent `#VALUE!` errors from propagating through your entire sheet.
> - Use absolute cell references in your range to prevent errors when copying and pasting your `BYROW` function.
> - Verify the range for `BYROW` function before applying to avoid `#REF!` errors. If your data might grow, consider using a larger range than currently needed.

### Usage

A few examples using the BYROW function.

```
BYROW(A1:D3, LAMBDA(row, SUM(row)))
→ Returns the sum of each row from A1 to D3

BYROW(B2:E5, LAMBDA(r, AVERAGE(r)))
→ Returns the average of each row from B2 to E5

BYROW(C1:F4, LAMBDA(x, IF(SUM(x)>100, "OK", "Review")))
→ Returns "OK" or "Review" for each row based on its total  
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
        "Q1 Sales",
        "Q2 Sales",
        "Row Total"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=BYROW(B2:C2, LAMBDA(row, SUM(row)))"
    ],
    [
        "Phones",
        25000,
        22000,
        "=BYROW(B3:C3, LAMBDA(row, SUM(row)))"
    ],
    [
        "Tablets",
        12000,
        14000,
        "=BYROW(B4:C4, LAMBDA(row, SUM(row)))"
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
        "Q1 Sales",
        "Q2 Sales",
        "Row Total"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=BYROW(B2:C2, LAMBDA(row, SUM(row)))"
    ],
    [
        "Phones",
        25000,
        22000,
        "=BYROW(B3:C3, LAMBDA(row, SUM(row)))"
    ],
    [
        "Tablets",
        12000,
        14000,
        "=BYROW(B4:C4, LAMBDA(row, SUM(row)))"
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
        "Q1 Sales",
        "Q2 Sales",
        "Row Total"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=BYROW(B2:C2, LAMBDA(row, SUM(row)))"
    ],
    [
        "Phones",
        25000,
        22000,
        "=BYROW(B3:C3, LAMBDA(row, SUM(row)))"
    ],
    [
        "Tablets",
        12000,
        14000,
        "=BYROW(B4:C4, LAMBDA(row, SUM(row)))"
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
        "Q1 Sales",
        "Q2 Sales",
        "Row Total"
    ],
    [
        "Laptops",
        15000,
        18000,
        "=BYROW(B2:C2, LAMBDA(row, SUM(row)))"
    ],
    [
        "Phones",
        25000,
        22000,
        "=BYROW(B3:C3, LAMBDA(row, SUM(row)))"
    ],
    [
        "Tablets",
        12000,
        14000,
        "=BYROW(B4:C4, LAMBDA(row, SUM(row)))"
    ]
]
            }]
        });
    }
}
```

