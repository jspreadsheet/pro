title: DMAX function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DMAX function in Jspreadsheet

# DMAX function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DMAX` function in Jspreadsheet Formulas Pro is a tool that can find the highest value in a specific set of data, which is organized like a database or table. You can set certain conditions or criteria to narrow down the data you want to analyze. For example, if you have a table of sales data, you can use the `DMAX` function to find the highest sale made in a particular month or by a specific salesperson. It's a powerful function that can help you extract key insights from large amounts of data.

## Documentation

Returns the maximum value from a database table-like array based on specified criteria.

### Category

Database

### Syntax

DMAX(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The database range to use for the lookup. Should include headers for each column. |
| `field` | The column header of the field you want to find the maximum value for. |
| `criteria` | Criteria range or array to search for records that meet all of the specified conditions. |


### Behavior

The `DMAX` function in spreadsheet is used to return the maximum value from selected database entries based on specified conditions. It performs a database function on selected data. 

- The function considers only numeric values and will ignore empty cells, text, boolean values, errors, etc.
- The database argument provided to the function is a range of cells, which generally contains data arranged in rows and columns.
- The field argument can be either a string reference to a column name in the database, or a number representing the position of the column in the database.
- The criteria argument is a range of cells with at least one row or column that contains conditions that you specify. The function will only consider rows from the database that meet all the given conditions.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the given field argument is neither a valid column name nor a valid column index.|
| #N/A | This error can occur if the criteria range is empty or if no rows in the database meet the specified criteria.|
| #REF! | This error is displayed when the function cannot reference the given cell range. This could be because the cells don't exist or are not currently accessible.|

### Best practices

> - Always ensure that the field argument matches a column name or column index in the database.
> - Make sure that the criteria range is not empty and that there is at least one row in the database that meets the given conditions.
> - Avoid using non-numeric values in the database range as the `DMAX` function is designed to work with numbers.
> - If there are multiple conditions, they should be placed in separate rows of the criteria range.

### Usage

A few examples using the DMAX function.

```
DMAX(A1:C10,"Salary",[A1:A10,"John",C1:C10,">1000"]) returns the highest salary for John if their salary is greater than 1000  
DMAX(A1:C10,"Years",[B1:B10,"Sales",C1:C10,"Seattle"]) returns the highest years worked for someone in Sales and located in Seattle  
DMAX(A1:E10,"Sales",[A1:A10,"Jane",B1:B10,">=3"]) returns the highest sales total for Jane if they've been with the company for at least 3 years  
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
        "Name",
        "Department",
        "Salary",
        "Years"
    ],
    [
        "John",
        "Sales",
        75000,
        3
    ],
    [
        "Jane",
        "Sales",
        85000,
        5
    ],
    [
        "Mike",
        "IT",
        90000,
        2
    ],
    [
        "Sarah",
        "Sales",
        95000,
        4
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Criteria:",
        "",
        "",
        ""
    ],
    [
        "Department",
        "Years",
        "",
        ""
    ],
    [
        "Sales",
        ">=3",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Max Salary for Sales with 3+ years:",
        "=DMAX(A1:D5,\"Salary\",A7:B9)",
        "",
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
        "Name",
        "Department",
        "Salary",
        "Years"
    ],
    [
        "John",
        "Sales",
        75000,
        3
    ],
    [
        "Jane",
        "Sales",
        85000,
        5
    ],
    [
        "Mike",
        "IT",
        90000,
        2
    ],
    [
        "Sarah",
        "Sales",
        95000,
        4
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Criteria:",
        "",
        "",
        ""
    ],
    [
        "Department",
        "Years",
        "",
        ""
    ],
    [
        "Sales",
        ">=3",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Max Salary for Sales with 3+ years:",
        "=DMAX(A1:D5,\"Salary\",A7:B9)",
        "",
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
        "Name",
        "Department",
        "Salary",
        "Years"
    ],
    [
        "John",
        "Sales",
        75000,
        3
    ],
    [
        "Jane",
        "Sales",
        85000,
        5
    ],
    [
        "Mike",
        "IT",
        90000,
        2
    ],
    [
        "Sarah",
        "Sales",
        95000,
        4
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Criteria:",
        "",
        "",
        ""
    ],
    [
        "Department",
        "Years",
        "",
        ""
    ],
    [
        "Sales",
        ">=3",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Max Salary for Sales with 3+ years:",
        "=DMAX(A1:D5,\"Salary\",A7:B9)",
        "",
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
        "Name",
        "Department",
        "Salary",
        "Years"
    ],
    [
        "John",
        "Sales",
        75000,
        3
    ],
    [
        "Jane",
        "Sales",
        85000,
        5
    ],
    [
        "Mike",
        "IT",
        90000,
        2
    ],
    [
        "Sarah",
        "Sales",
        95000,
        4
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Criteria:",
        "",
        "",
        ""
    ],
    [
        "Department",
        "Years",
        "",
        ""
    ],
    [
        "Sales",
        ">=3",
        "",
        ""
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Max Salary for Sales with 3+ years:",
        "=DMAX(A1:D5,\"Salary\",A7:B9)",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

