title: DSTDEVP function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DSTDEVP function in Jspreadsheet

# DSTDEVP function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The DSTDEVP function in Jspreadsheet Formulas Pro is a useful tool that calculates the standard deviation of a population. It's used to measure the amount of variation or dispersion in a set of values, which can be very helpful in statistical analysis. By using this function, you can get a clearer understanding of how much your data varies from the average or mean. It's a straightforward and efficient way to analyze a large amount of data in Jspreadsheet.

## Documentation

The DSTDEVP function calculates the standard deviation of a population.

### Category

Database

### Syntax

DSTDEVP(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The range or array containing the dataset representing the population. |
| `field` | The specific column or array within the database from which to calculate the standard deviation. |
| `criteria` | The conditions or criteria determining which data points are included in the calculation. |


### Behavior

The DSTDEVP function in spreadsheet software estimates the standard deviation based on an entire population. This function ignores empty cells, logical values, text, or error values in the database, or references that contain names, arrays, or references that contain logical values, text, or error values. However, cells with the value zero are included.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the given field argument is non-numeric, or if no records match the criteria. |
| #REF! | This error occurs if the given reference is not valid. It could be a result of deleting cells that are being referred to by the function. |
| #N/A | This error is displayed when the function doesn't find any rows that meet the criteria. |
| #DIV/0! | This error is displayed if there is only one row in the database that meets the criteria, as standard deviation requires at least two data points. |

### Best practices

> - Make sure that the criteria and database range are correctly defined to avoid errors such as #VALUE! or #N/A.
> - Avoid deleting cells that are being referred to by the function to prevent #REF! errors.
> - Ensure that your database contains at least two rows that meet the criteria to avoid #DIV/0! errors.
> - It is recommended to check your data for any non-numeric values, as DSTDEVP only considers numeric values. Text, logical values, and error values in the field are ignored.

### Usage

A few examples using the DSTDEVP function.

```
DSTDEVP(A2:A10, B2:B10, C2:C10) returns the standard deviation of the population based on the specified database, field, and criteria.  
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
        1500,
        "North"
    ],
    [
        "Phone",
        800,
        "South"
    ],
    [
        "Tablet",
        1200,
        "North"
    ],
    [
        "Monitor",
        600,
        "South"
    ],
    [
        "Laptop",
        1800,
        "North"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Field",
        "Criteria",
        ""
    ],
    [
        "Sales",
        "North",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Population StdDev:",
        "=DSTDEVP(A1:C6,\"Sales\",A8:B9)",
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
        1500,
        "North"
    ],
    [
        "Phone",
        800,
        "South"
    ],
    [
        "Tablet",
        1200,
        "North"
    ],
    [
        "Monitor",
        600,
        "South"
    ],
    [
        "Laptop",
        1800,
        "North"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Field",
        "Criteria",
        ""
    ],
    [
        "Sales",
        "North",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Population StdDev:",
        "=DSTDEVP(A1:C6,\"Sales\",A8:B9)",
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
        1500,
        "North"
    ],
    [
        "Phone",
        800,
        "South"
    ],
    [
        "Tablet",
        1200,
        "North"
    ],
    [
        "Monitor",
        600,
        "South"
    ],
    [
        "Laptop",
        1800,
        "North"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Field",
        "Criteria",
        ""
    ],
    [
        "Sales",
        "North",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Population StdDev:",
        "=DSTDEVP(A1:C6,\"Sales\",A8:B9)",
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
        1500,
        "North"
    ],
    [
        "Phone",
        800,
        "South"
    ],
    [
        "Tablet",
        1200,
        "North"
    ],
    [
        "Monitor",
        600,
        "South"
    ],
    [
        "Laptop",
        1800,
        "North"
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Field",
        "Criteria",
        ""
    ],
    [
        "Sales",
        "North",
        ""
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Population StdDev:",
        "=DSTDEVP(A1:C6,\"Sales\",A8:B9)",
        ""
    ]
]
            }]
        });
    }
}
```

