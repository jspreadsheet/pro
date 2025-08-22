title: DCOUNT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DCOUNT function in Jspreadsheet

# DCOUNT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DCOUNT` function in Jspreadsheet Formulas Pro is a handy tool that lets you count the number of cells in a database that fulfill certain conditions you set. It's like asking a question to your data and getting a numerical answer. You specify the criteria, and `DCOUNT` will go through your database and count only those cells that match your requirements. This function is particularly useful for analyzing and summarizing large amounts of data efficiently.

## Documentation

Counts the number of cells in a database that meet specified criteria.

### Category

Database

### Syntax

DCOUNT(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The range of cells that makes up the database, including the headers. |
| `field` | The column header indicating the field to be counted. |
| `criteria` | The range of cells that contains the criteria. Each column in the criteria range should contain a separate criterion and the first row should contain the column headers that match the database headers. |


### Behavior

The `DCOUNT` function in a spreadsheet is used to count the number of numeric entries in a database column based on given conditions. Here are some of its behaviors:

- It requires three arguments: a database range, a field which is the column within the database range to be counted, and the criteria range which contains the conditions to be met.
- It only counts cells with numeric values. Any cell with text, boolean values, or errors will be ignored.
- Empty cells within the specified field or column are not included in the count.
- The first row of the database range is treated as a header row and not included in the count.
- The criteria range should include at least one column label and at least one cell below the column label for specifying condition.
- If multiple conditions are given, a cell is only counted if it meets all the conditions.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when the given field is neither a valid cell reference nor a column header in the database range. |
| #N/A | This error is returned when the criteria range does not include at least one column label and at least one cell below the column label for specifying a condition. |
| #REF! | This error is returned when the database range or criteria range is invalid. |

### Best Practices

> - When specifying the field to be counted, it is often clearer to use the column header name from the database range rather than the column's index number.
> - Ensure that your criteria range is set up correctly, with column labels that match those in the database range and condition cells directly below the labels.
> - Avoid including non-numeric cells in the field to be counted as they will be ignored by the `DCOUNT` function.
> - To count cells with specific text or boolean values, consider using the `DCOUNTA` function instead.

### Usage

A few examples using the DCOUNT function.

```
DCOUNT(A1:D10,"Sales",A12:B13) returns the count of values in the "Sales" column of the database A1:D10 where the values in column A meet the criteria in A12:B13  
DCOUNT(A1:E20,"Units Sold",A23:D24) returns the count of values in the "Units Sold" column of the database A1:E20 where the values in columns A through D meet the criteria in A23:D24  
DCOUNT(SalesData,"Revenue",Criteria) returns the count of values in the "Revenue" column of the named range SalesData where the values in the named range Criteria meet the criteria  
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
        "Tablet",
        950,
        "North"
    ],
    [
        "Laptop",
        1100,
        "West"
    ],
    [
        "Phone",
        750,
        "North"
    ],
    [],
    [
        "Region",
        "Sales"
    ],
    [
        "North",
        ">900"
    ],
    [],
    [
        "Count:",
        "=DCOUNT(A1:C6,\"Sales\",A8:B9)"
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
        "Tablet",
        950,
        "North"
    ],
    [
        "Laptop",
        1100,
        "West"
    ],
    [
        "Phone",
        750,
        "North"
    ],
    [],
    [
        "Region",
        "Sales"
    ],
    [
        "North",
        ">900"
    ],
    [],
    [
        "Count:",
        "=DCOUNT(A1:C6,\"Sales\",A8:B9)"
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
        "Tablet",
        950,
        "North"
    ],
    [
        "Laptop",
        1100,
        "West"
    ],
    [
        "Phone",
        750,
        "North"
    ],
    [],
    [
        "Region",
        "Sales"
    ],
    [
        "North",
        ">900"
    ],
    [],
    [
        "Count:",
        "=DCOUNT(A1:C6,\"Sales\",A8:B9)"
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
        "Tablet",
        950,
        "North"
    ],
    [
        "Laptop",
        1100,
        "West"
    ],
    [
        "Phone",
        750,
        "North"
    ],
    [],
    [
        "Region",
        "Sales"
    ],
    [
        "North",
        ">900"
    ],
    [],
    [
        "Count:",
        "=DCOUNT(A1:C6,\"Sales\",A8:B9)"
    ]
]
            }]
        });
    }
}
```

