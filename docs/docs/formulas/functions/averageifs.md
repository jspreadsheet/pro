title: AVERAGEIFS Function - Calculate Averages with Multiple Conditions in Jspreadsheet
keywords: AVERAGEIFS function, multiple condition average, complex filtering, advanced statistical analysis, Excel-compatible functions, JavaScript spreadsheet functions, multi-criteria averaging, data analysis, conditional statistics, advanced data filtering, complex calculations
description: Calculate averages using multiple conditions with the AVERAGEIFS function in Jspreadsheet. Perfect for complex data analysis requiring multiple criteria, advanced filtering, and sophisticated statistical calculations.

# AVERAGEIFS function

`PRO`{.jtag}

The `AVERAGEIFS` function in Jspreadsheet Formulas Pro is used to calculate the average of all cells within a certain range that meet more than one specific condition. This allows for very precise data analysis as you can specify multiple criteria that the data must meet. For instance, you could find the average sales numbers for a specific product only within a certain time frame. It's a powerful, flexible tool that can help you make sense of large datasets.

## Documentation

Returns the average (arithmetic mean) of all cells in a range that meet multiple specified criteria.

### Category

Statistical

### Syntax

AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `average_range` | The range of cells to be averaged. |
| `criteria_range1` | The first range of cells to be evaluated by the first criteria. |
| `criteria1` | The criteria used to determine which cells to include in the average for the first criteria range. Can be a number, expression, cell reference, or text string. |
| `criteria_rangeN` | Optional. The nth range of cells to be evaluated by the second criteria. |
| `criteriaN` | Optional. The nth criteria used to determine which cells to include in the average for the nth criteria range. Can be a number, expression, cell reference, or text string. |


### Behavior

The `AVERAGEIFS` function calculates the average of cells that meet multiple criteria. The function will only include numbers in the calculation and ignores empty cells, text, and logical values. Here is its behavior with various types of data:

- **Numbers**: The function includes these in the calculation.
- **Text**: The function ignores text values.
- **Booleans**: The function does not consider boolean values (TRUE/FALSE) in its calculation.
- **Errors**: If any of the criteria arguments result in error values, the function will return an error.
- **Empty Cells**: The function skips over empty cells.
- **Non-Numeric Data**: Any non-numeric data that does not meet the criteria is not considered in the average.

### Common Errors

| Error | Description |
| ----- | ----------- |
| `#VALUE!` | Occurs when the criteria is a text string that is more than 255 characters long. |
| `#DIV/0!` | Occurs when there are no cells that meet the criteria, causing the function to attempt to divide by zero. |
| `#N/A` | Occurs when the ranges specified for the criteria are of different lengths. All the ranges must be of the same length. |

### Best practices

> - Always make sure that the ranges specified for the criteria are of the same length to avoid the `#N/A` error.
> - Avoid using text strings that are more than 255 characters long as criteria to prevent the `#VALUE!` error.
> - If possible, use error handling functions like `IFERROR` to handle errors that may arise from the criteria.
> - Be aware that the function will ignore text, boolean values, and empty cells in the calculation, so ensure that the criteria are correctly set to include the desired cells.

### Usage

A few examples using the AVERAGEIFS function.

```
AVERAGEIFS(A1:A5, B1:B5, '>3', C1:C5, '<10')  
AVERAGEIFS(D2:D7, E2:E7, 'red', F2:F7, '>10')  
AVERAGEIFS(H2:H9, I2:I9, '>=3', J2:J9, '<=12', K2:K9, '<>5')  
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
        "Category",
        "Price",
        "Rating",
        "Average Price for Electronics >4 Rating"
    ],
    [
        "Laptop",
        "Electronics",
        899,
        4.5,
        "=AVERAGEIFS(C2:C6,B2:B6,\"Electronics\",D2:D6,\">4\")"
    ],
    [
        "Phone",
        "Electronics",
        699,
        4.2,
        ""
    ],
    [
        "Chair",
        "Furniture",
        299,
        3.8,
        ""
    ],
    [
        "Tablet",
        "Electronics",
        449,
        4.7,
        ""
    ],
    [
        "Desk",
        "Furniture",
        399,
        4.1,
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
        "Category",
        "Price",
        "Rating",
        "Average Price for Electronics >4 Rating"
    ],
    [
        "Laptop",
        "Electronics",
        899,
        4.5,
        "=AVERAGEIFS(C2:C6,B2:B6,\"Electronics\",D2:D6,\">4\")"
    ],
    [
        "Phone",
        "Electronics",
        699,
        4.2,
        ""
    ],
    [
        "Chair",
        "Furniture",
        299,
        3.8,
        ""
    ],
    [
        "Tablet",
        "Electronics",
        449,
        4.7,
        ""
    ],
    [
        "Desk",
        "Furniture",
        399,
        4.1,
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
        "Category",
        "Price",
        "Rating",
        "Average Price for Electronics >4 Rating"
    ],
    [
        "Laptop",
        "Electronics",
        899,
        4.5,
        "=AVERAGEIFS(C2:C6,B2:B6,\"Electronics\",D2:D6,\">4\")"
    ],
    [
        "Phone",
        "Electronics",
        699,
        4.2,
        ""
    ],
    [
        "Chair",
        "Furniture",
        299,
        3.8,
        ""
    ],
    [
        "Tablet",
        "Electronics",
        449,
        4.7,
        ""
    ],
    [
        "Desk",
        "Furniture",
        399,
        4.1,
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
        "Category",
        "Price",
        "Rating",
        "Average Price for Electronics >4 Rating"
    ],
    [
        "Laptop",
        "Electronics",
        899,
        4.5,
        "=AVERAGEIFS(C2:C6,B2:B6,\"Electronics\",D2:D6,\">4\")"
    ],
    [
        "Phone",
        "Electronics",
        699,
        4.2,
        ""
    ],
    [
        "Chair",
        "Furniture",
        299,
        3.8,
        ""
    ],
    [
        "Tablet",
        "Electronics",
        449,
        4.7,
        ""
    ],
    [
        "Desk",
        "Furniture",
        399,
        4.1,
        ""
    ]
]
            }]
        });
    }
}
```

