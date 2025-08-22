title: DAVERAGE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DAVERAGE function in Jspreadsheet

# DAVERAGE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DAVERAGE` function in Jspreadsheet Formulas Pro is a handy tool that helps you calculate the average of particular data entries in your database that meet certain criteria. It's a way of narrowing down your data to find an average from a specific subset. For instance, you could use `DAVERAGE` to find the average sales in a month where the sales were above a certain number. It simplifies the task of sifting through large amounts of data to find precise information.

## Documentation

Returns the average of selected database entries based on specified criteria.

### Category

Database

### Syntax

DAVERAGE(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The range of cells that makes up the database, including the headers. |
| `field` | The column header indicating the field to be averaged. |
| `criteria` | The range of cells that contains the criteria. Each column in the criteria range should contain a separate criterion and the first row should contain the column headers that match the database headers. |


### Behavior
The `DAVERAGE` function in spreadsheets is designed to calculate the average of selected database entries based on specified criteria. It operates as follows:

- It requires three arguments: database, field, criteria. The database is the range of cells that makes up the list or database. The field indicates which column in the database contains the numbers to be averaged. The criteria are the conditions that the cells need to meet to be included in the average.
- It handles empty cells by ignoring them. They are not counted in the average calculation.
- If the field argument is text, `DAVERAGE` matches it against the column headers in the database. If it is a number, `DAVERAGE` uses it as the index position in the list of column headers.
- It handles boolean values as numbers: `TRUE` is 1 and `FALSE` is 0.
- If the criteria argument is omitted, `DAVERAGE` averages all records in the database.
- If there are no records in the database that meet the criteria, `DAVERAGE` returns a `#DIV0!` error. 

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the field argument is neither a valid data field nor a column label that exists in the database.|
| #DIV0! | This error is returned when there are no rows in the database that meet the criteria. In other words, `DAVERAGE` is trying to divide by zero, which is not permissible.|
| #NUM! | This error occurs when the field argument is less than 1 or greater than the number of columns in the database. |
| #N/A | This error occurs when the criteria argument includes a column label that does not match any column labels in the database. |

### Best practices
> - Make sure to correctly define the criteria range, which includes at least one column label and at least one cell below the column label for specifying a condition for the corresponding column.
> - Be cautious when inputting the field argument. If it's a number, it should correspond to the position of the column in the list; if it's text, it should match exactly with the column label in the database.
> - Use absolute cell references for the database and criteria range to ensure the correctness of the function when copying it to other cells.
> - Double-check your data range to avoid `#DIV0!` errors. Ensure there are rows that meet your specified criteria.

### Usage

A few examples using the DAVERAGE function.

```
DAVERAGE(A1:D10,"Sales",A12:B13) returns the average of values in the "Sales" column of the database A1:D10 where the values in column A meet the criteria in A12:B13  
DAVERAGE(A1:E20,"Units Sold",A23:D24) returns the average of values in the "Units Sold" column of the database A1:E20 where the values in columns A through D meet the criteria in A23:D24  
DAVERAGE(SalesData,"Revenue",Criteria) returns the average of values in the "Revenue" column of the named range SalesData where the values in the named range Criteria meet the criteria  
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
        "Employee",
        "Department",
        "Sales",
        "Years"
    ],
    [
        "John",
        "North",
        45000,
        3
    ],
    [
        "Sarah",
        "South",
        52000,
        5
    ],
    [
        "Mike",
        "North",
        38000,
        2
    ],
    [
        "Lisa",
        "East",
        61000,
        7
    ],
    [
        "Tom",
        "North",
        49000,
        4
    ],
    [],
    [
        "Department",
        "Years"
    ],
    [
        "North",
        ">2"
    ],
    [],
    [
        "Average North Sales (>2 years):",
        "=DAVERAGE(A1:D6,\"Sales\",A8:B9)"
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
        "Employee",
        "Department",
        "Sales",
        "Years"
    ],
    [
        "John",
        "North",
        45000,
        3
    ],
    [
        "Sarah",
        "South",
        52000,
        5
    ],
    [
        "Mike",
        "North",
        38000,
        2
    ],
    [
        "Lisa",
        "East",
        61000,
        7
    ],
    [
        "Tom",
        "North",
        49000,
        4
    ],
    [],
    [
        "Department",
        "Years"
    ],
    [
        "North",
        ">2"
    ],
    [],
    [
        "Average North Sales (>2 years):",
        "=DAVERAGE(A1:D6,\"Sales\",A8:B9)"
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
        "Employee",
        "Department",
        "Sales",
        "Years"
    ],
    [
        "John",
        "North",
        45000,
        3
    ],
    [
        "Sarah",
        "South",
        52000,
        5
    ],
    [
        "Mike",
        "North",
        38000,
        2
    ],
    [
        "Lisa",
        "East",
        61000,
        7
    ],
    [
        "Tom",
        "North",
        49000,
        4
    ],
    [],
    [
        "Department",
        "Years"
    ],
    [
        "North",
        ">2"
    ],
    [],
    [
        "Average North Sales (>2 years):",
        "=DAVERAGE(A1:D6,\"Sales\",A8:B9)"
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
        "Employee",
        "Department",
        "Sales",
        "Years"
    ],
    [
        "John",
        "North",
        45000,
        3
    ],
    [
        "Sarah",
        "South",
        52000,
        5
    ],
    [
        "Mike",
        "North",
        38000,
        2
    ],
    [
        "Lisa",
        "East",
        61000,
        7
    ],
    [
        "Tom",
        "North",
        49000,
        4
    ],
    [],
    [
        "Department",
        "Years"
    ],
    [
        "North",
        ">2"
    ],
    [],
    [
        "Average North Sales (>2 years):",
        "=DAVERAGE(A1:D6,\"Sales\",A8:B9)"
    ]
]
            }]
        });
    }
}
```

