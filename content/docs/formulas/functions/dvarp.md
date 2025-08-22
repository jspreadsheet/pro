title: DVARP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DVARP function in Jspreadsheet

# DVARP function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The DVARP function in Jspreadsheet Formulas Pro is a powerful tool that helps you calculate the variance of a population. In statistical terms, variance refers to a numerical value that describes how much the data points in a population differ from the average value. When used in Jspreadsheet, the DVARP function analyses your data set and gives you a clear understanding of the variability within your data. This function is particularly important when you want to understand the spread and consistency of your data.

## Documentation

The DVARP function calculates the variance of a population.

### Category

Database

### Syntax

DVARP(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The range of cells that makes up the database. |
| `field` | The column label that contains the numbers for which you want the variance. |
| `criteria` | The range of cells that contains the conditions you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one cell below the column label in which you specify a condition for the column. |


### Behavior

The `DVARP` function in spreadsheets is used to estimate variance for the entire population based on a selected database. The function takes three arguments: the database, the field (indicating the column in the database to be used), and the criteria (a set of conditions that the cells in the database must meet to be included in the calculation). Here's how it handles different scenarios:

- **Empty cells**: The `DVARP` function ignores empty cells in the database.
- **Text**: If the field argument is a text value that corresponds to a column name in the database, `DVARP` uses that column for calculation. If the text is not a column name or if text is present in the cells of the selected column, `DVARP` returns an error.
- **Booleans**: The `DVARP` function does not support Boolean values. If a Boolean value is encountered in the selected column, the function returns an error.
- **Errors**: If an error is present in the cells of the selected column, `DVARP` also returns an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the field argument doesn't match any column in the database or if the criteria argument is invalid. |
| #DIV/0! | This error occurs when there are less than two rows in the database that meet the given criteria. |
| #N/A | This error occurs when the field argument is not provided, or if the database and field are not found. |

### Best practices

> - Always make sure the field argument correctly matches a column name in the database.
> - Use meaningful criteria to ensure relevant rows in the database are included in the calculation.
> - Handle error values and text in the data before applying the `DVARP` function to avoid errors.
> - Remember that `DVARP` is used when you want to consider the entire population. If you want to consider a sample of the population, use the `DVAR` function instead.

### Usage

A few examples using the DVARP function.

```
DVARP(A2:C10, 'Sales', A1:C1)  
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
        "Region",
        "Sales"
    ],
    [
        "Laptop",
        "North",
        ""
    ],
    [
        "Laptop",
        "North",
        1200
    ],
    [
        "Laptop",
        "South",
        1100
    ],
    [
        "Laptop",
        "North",
        1300
    ],
    [
        "Tablet",
        "North",
        800
    ],
    [
        "Tablet",
        "South",
        750
    ],
    [
        "",
        "",
        "=DVARP(A2:C7,\"Sales\",A1:C1)"
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
        "Region",
        "Sales"
    ],
    [
        "Laptop",
        "North",
        ""
    ],
    [
        "Laptop",
        "North",
        1200
    ],
    [
        "Laptop",
        "South",
        1100
    ],
    [
        "Laptop",
        "North",
        1300
    ],
    [
        "Tablet",
        "North",
        800
    ],
    [
        "Tablet",
        "South",
        750
    ],
    [
        "",
        "",
        "=DVARP(A2:C7,\"Sales\",A1:C1)"
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
        "Region",
        "Sales"
    ],
    [
        "Laptop",
        "North",
        ""
    ],
    [
        "Laptop",
        "North",
        1200
    ],
    [
        "Laptop",
        "South",
        1100
    ],
    [
        "Laptop",
        "North",
        1300
    ],
    [
        "Tablet",
        "North",
        800
    ],
    [
        "Tablet",
        "South",
        750
    ],
    [
        "",
        "",
        "=DVARP(A2:C7,\"Sales\",A1:C1)"
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
        "Region",
        "Sales"
    ],
    [
        "Laptop",
        "North",
        ""
    ],
    [
        "Laptop",
        "North",
        1200
    ],
    [
        "Laptop",
        "South",
        1100
    ],
    [
        "Laptop",
        "North",
        1300
    ],
    [
        "Tablet",
        "North",
        800
    ],
    [
        "Tablet",
        "South",
        750
    ],
    [
        "",
        "",
        "=DVARP(A2:C7,\"Sales\",A1:C1)"
    ]
]
            }]
        });
    }
}
```

