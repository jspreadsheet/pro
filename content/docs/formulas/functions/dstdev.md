title: DSTDEV function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DSTDEV function in Jspreadsheet

# DSTDEV function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DSTDEV` function in Jspreadsheet Formulas Pro is a tool that helps you determine the standard deviation of a selected population, based on a sample from that population. It works by analyzing a specified set of cells in your spreadsheet, which represent your sample data. This function then uses this sample data to calculate the standard deviation, giving you an understanding of how spread out the values are within your overall population. It's a useful function for statistical analysis in Jspreadsheet.

## Documentation

The DSTDEV function calculates the standard deviation of a population based on a sample of that population.

### Category

Database

### Syntax

DSTDEV(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The database or array of data points representing a sample from the population. |
| `field` | The specific field or range within the database containing the data to be considered. |
| `criteria` | Optional: The conditions or criteria to apply when selecting data from the database. If not specified, all data is considered as the sample. |


### Behavior

The DSTDEV function in spreadsheets is used to calculate the standard deviation of a population based on a sample from a database or list of records that match certain conditions. Here's how it handles different data types:

- Empty Cells: Empty cells are ignored when calculating the standard deviation.
- Text: Texts are considered as non-numeric data, and it is ignored in the calculation.
- Booleans: Boolean values (TRUE/FALSE) are ignored in the calculation.
- Errors: If any cell range or expression results in an error, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the given field is a text value that doesn't match any column label in the database. |
| #DIV/0! | This error occurs when there's no record in the database that matches the criteria. |
| #N/A | This error occurs when the function can't find the specified field within the database. |
| #NUM! | This error occurs when the calculation involves non-numeric values. |

### Best practices

> - Always ensure that the criteria and database fields are correctly defined to avoid errors.
> - Avoid using text or non-numeric data in your criteria as it can lead to inaccuracies in your results.
> - Use absolute cell references to avoid changes in your data range when copying the formula to other cells.
> - Always check your database for any empty cells or errors before applying the DSTDEV function to ensure accurate results.

### Usage

A few examples using the DSTDEV function.

```
DSTDEV(A2:A10, B2:B10, C2:C10) estimates the standard deviation based on the sample defined by the database, field, and criteria.  
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
        "Laptop",
        1200,
        "North"
    ],
    [
        "Phone",
        800,
        "South"
    ],
    [
        "Laptop",
        1500,
        "North"
    ],
    [
        "Tablet",
        600,
        "South"
    ],
    [
        "Phone",
        900,
        "North"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Criteria:",
        "",
        ""
    ],
    [
        "Region",
        "",
        ""
    ],
    [
        "North",
        "",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Standard Deviation:",
        "=DSTDEV(A1:C6,\"Sales\",A8:A10)",
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
        "Laptop",
        1200,
        "North"
    ],
    [
        "Phone",
        800,
        "South"
    ],
    [
        "Laptop",
        1500,
        "North"
    ],
    [
        "Tablet",
        600,
        "South"
    ],
    [
        "Phone",
        900,
        "North"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Criteria:",
        "",
        ""
    ],
    [
        "Region",
        "",
        ""
    ],
    [
        "North",
        "",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Standard Deviation:",
        "=DSTDEV(A1:C6,\"Sales\",A8:A10)",
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
        "Laptop",
        1200,
        "North"
    ],
    [
        "Phone",
        800,
        "South"
    ],
    [
        "Laptop",
        1500,
        "North"
    ],
    [
        "Tablet",
        600,
        "South"
    ],
    [
        "Phone",
        900,
        "North"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Criteria:",
        "",
        ""
    ],
    [
        "Region",
        "",
        ""
    ],
    [
        "North",
        "",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Standard Deviation:",
        "=DSTDEV(A1:C6,\"Sales\",A8:A10)",
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
        "Laptop",
        1200,
        "North"
    ],
    [
        "Phone",
        800,
        "South"
    ],
    [
        "Laptop",
        1500,
        "North"
    ],
    [
        "Tablet",
        600,
        "South"
    ],
    [
        "Phone",
        900,
        "North"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Criteria:",
        "",
        ""
    ],
    [
        "Region",
        "",
        ""
    ],
    [
        "North",
        "",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Standard Deviation:",
        "=DSTDEV(A1:C6,\"Sales\",A8:A10)",
        ""
    ]
]
            }]
        });
    }
}
```

