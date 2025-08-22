title: DCOUNTA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DCOUNTA function in Jspreadsheet

# DCOUNTA function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DCOUNTA` function in Jspreadsheet Formulas Pro is a useful tool that allows you to count the number of cells in a database that aren't empty and meet certain conditions you set. This could be anything from specific text, numbers, or dates. For example, if you want to know how many cells in a column contain a specific word or number, `DCOUNTA` can give you that count. It's a handy way of quickly analyzing your data without manually going through each cell.

## Documentation

Counts the number of non-blank cells in a database that meet specified criteria.

### Category

Database

### Syntax

DCOUNTA(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The range of cells that makes up the database, including the headers. |
| `field` | The column header indicating the field to be counted. |
| `criteria` | The range of cells that contains the criteria. Each column in the criteria range should contain a separate criterion and the first row should contain the column headers that match the database headers. |


### Behavior

The `DCOUNTA` function in a spreadsheet is a database function. It counts non-blank cells within a database that correspond to given conditions. Here's how it handles various data types:

- **Empty cells**: If a cell in the criteria range is empty, `DCOUNTA` will count rows regardless of the content in the cell of the row in the database range. However, if a cell in the database range is empty, it is not counted.
- **Text**: `DCOUNTA` counts cells containing text if they meet the given conditions. 
- **Booleans**: `DCOUNTA` can also count cells containing Boolean values (TRUE or FALSE) if they meet the specified criteria.
- **Errors**: If there is an error in the database or criteria range, `DCOUNTA` will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the provided field argument is neither a valid database column label nor a number representing a column in the database. |
| #REF! | This error occurs when the references provided as arguments are invalid. For example, if you delete a column referenced in the function. |
| #N/A | This error is displayed when no matching rows are found by the criteria provided to `DCOUNTA`. |

### Best practices

> - Before using `DCOUNTA`, ensure that your database is set up correctly, with the first row containing unique labels for each column.
> - Be careful when providing the criteria in `DCOUNTA`. If a cell in the criteria range is empty, the function will count rows regardless of the content in the cell of the row in the database range.
> - Be aware that `DCOUNTA` counts non-blank cells. If you need to count rows regardless of whether cells in the database range are blank or not, consider using `DCOUNT`.
> - Always check for errors after using `DCOUNTA`. Common errors include #VALUE!, #REF!, and #N/A.

### Usage

A few examples using the DCOUNTA function.

```
DCOUNTA(A1:D10,"Sales",A12:B13) returns the count of non-blank values in the "Sales" column of the database A1:D10 where the values in column A meet the criteria in A12:B13  
DCOUNTA(A1:E20,"Units Sold",A23:D24) returns the count of non-blank values in the "Units Sold" column of the database A1:E20 where the values in columns A through D meet the criteria in A23:D24  
DCOUNTA(SalesData,"Revenue",Criteria) returns the count of non-blank values in the "Revenue" column of the named range SalesData where the values in the named range Criteria meet the criteria  
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
        "Region",
        "Units"
    ],
    [
        "Laptop",
        5000,
        "North",
        25
    ],
    [
        "Phone",
        "",
        "South",
        30
    ],
    [
        "Tablet",
        3000,
        "North",
        15
    ],
    [
        "Phone",
        2500,
        "North",
        20
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Product",
        "Region",
        "",
        ""
    ],
    [
        "Phone",
        "North",
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
        "Count:",
        "=DCOUNTA(A1:D5,\"Sales\",A7:B8)",
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
        "Product",
        "Sales",
        "Region",
        "Units"
    ],
    [
        "Laptop",
        5000,
        "North",
        25
    ],
    [
        "Phone",
        "",
        "South",
        30
    ],
    [
        "Tablet",
        3000,
        "North",
        15
    ],
    [
        "Phone",
        2500,
        "North",
        20
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Product",
        "Region",
        "",
        ""
    ],
    [
        "Phone",
        "North",
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
        "Count:",
        "=DCOUNTA(A1:D5,\"Sales\",A7:B8)",
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
        "Product",
        "Sales",
        "Region",
        "Units"
    ],
    [
        "Laptop",
        5000,
        "North",
        25
    ],
    [
        "Phone",
        "",
        "South",
        30
    ],
    [
        "Tablet",
        3000,
        "North",
        15
    ],
    [
        "Phone",
        2500,
        "North",
        20
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Product",
        "Region",
        "",
        ""
    ],
    [
        "Phone",
        "North",
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
        "Count:",
        "=DCOUNTA(A1:D5,\"Sales\",A7:B8)",
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
        "Product",
        "Sales",
        "Region",
        "Units"
    ],
    [
        "Laptop",
        5000,
        "North",
        25
    ],
    [
        "Phone",
        "",
        "South",
        30
    ],
    [
        "Tablet",
        3000,
        "North",
        15
    ],
    [
        "Phone",
        2500,
        "North",
        20
    ],
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Product",
        "Region",
        "",
        ""
    ],
    [
        "Phone",
        "North",
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
        "Count:",
        "=DCOUNTA(A1:D5,\"Sales\",A7:B8)",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

