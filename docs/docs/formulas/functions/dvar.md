title: DVAR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DVAR function in Jspreadsheet

# DVAR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The DVAR function in Jspreadsheet Formulas Pro is a tool used to estimate the variance, or how much data points differ from the average, based on a sample from a chosen set of database entries. This aids in statistical analysis by providing an understanding of how much variation exists within your chosen data. You simply need to select the database entries you wish to analyze, and the DVAR function will calculate the variance for you.

## Documentation

The DVAR function estimates variance based on a sample from selected database entries.

### Category

Database

### Syntax

DVAR(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The range of cells that makes up the database. |
| `field` | The column label that contains the numbers for which you want the variance. |
| `criteria` | The range of cells that contains the conditions you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one cell below the column label in which you specify a condition for the column. |


### Behavior

The 'DVAR' function in spreadsheets is used to estimate variance based on a sample from a database. The function uses a column of numbers, a condition to meet, and a column to use for calculation. Here is how it behaves:

- **Empty cells**: 'DVAR' ignores empty cells in the column of numbers used for the calculation.
- **Text**: If there is text in the column of numbers, 'DVAR' treats it as zero.
- **Booleans**: Boolean values are treated as numbers in 'DVAR'. TRUE is treated as 1 and FALSE as 0.
- **Errors**: If there is an error in the input cells, 'DVAR' will return that error.

### Common Errors

| Error | Description |
|-------|-------------|
| #DIV/0! | Occurs if the function finds only one row of data in the database or if the function finds no rows of data that satisfy the given condition. |
| #VALUE! | Occurs if wrong data type is supplied. The function expects numerical input and if it encounters text where numbers should be, it returns this error. |
| #NAME? | Occurs if the syntax of the function is spelled wrongly. |
| #N/A | Occurs when the criteria specified cannot be found in the database. |

### Best practices

> - Always check the data range that is being used as input for the 'DVAR' function. Make sure it does not include any error values or inappropriate data types.
> - Be careful while defining the criteria for the function. Make sure it is applicable to the data in the database.
> - Use absolute cell references if you plan to copy your 'DVAR' formula to other cells. This ensures the correct data range and criteria are used in all calculations.
> - It's a good practice to handle possible errors using error handling functions like 'ISERROR' or 'IFERROR' to avoid disruption in data analysis.

### Usage

A few examples using the DVAR function.

```
DVAR(A2:C10,'Sales',A1:C1) returns the variance of sales where the corresponding value in row 1 equals any value in A1:C1  
DVAR(A2:C10,'Quantity Sold',B1:B1) returns the variance of quantity sold where the corresponding value in B1 equals the value in B1  
DVAR(A2:C10,'Price',[Product]='Fruits')returns the variance of prices for fruit products  
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
        "Fruits",
        "",
        "North"
    ],
    [
        "Fruits",
        1200,
        "North"
    ],
    [
        "Vegetables",
        800,
        "South"
    ],
    [
        "Fruits",
        1500,
        "North"
    ],
    [
        "Vegetables",
        900,
        "South"
    ],
    [
        "Fruits",
        1100,
        "North"
    ],
    [
        "",
        "=DVAR(A2:C7,\"Sales\",A1:C1)"
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
        "Fruits",
        "",
        "North"
    ],
    [
        "Fruits",
        1200,
        "North"
    ],
    [
        "Vegetables",
        800,
        "South"
    ],
    [
        "Fruits",
        1500,
        "North"
    ],
    [
        "Vegetables",
        900,
        "South"
    ],
    [
        "Fruits",
        1100,
        "North"
    ],
    [
        "",
        "=DVAR(A2:C7,\"Sales\",A1:C1)"
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
        "Fruits",
        "",
        "North"
    ],
    [
        "Fruits",
        1200,
        "North"
    ],
    [
        "Vegetables",
        800,
        "South"
    ],
    [
        "Fruits",
        1500,
        "North"
    ],
    [
        "Vegetables",
        900,
        "South"
    ],
    [
        "Fruits",
        1100,
        "North"
    ],
    [
        "",
        "=DVAR(A2:C7,\"Sales\",A1:C1)"
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
        "Fruits",
        "",
        "North"
    ],
    [
        "Fruits",
        1200,
        "North"
    ],
    [
        "Vegetables",
        800,
        "South"
    ],
    [
        "Fruits",
        1500,
        "North"
    ],
    [
        "Vegetables",
        900,
        "South"
    ],
    [
        "Fruits",
        1100,
        "North"
    ],
    [
        "",
        "=DVAR(A2:C7,\"Sales\",A1:C1)"
    ]
]
            }]
        });
    }
}
```

