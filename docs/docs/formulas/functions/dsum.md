title: DSUM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DSUM function in Jspreadsheet

# DSUM function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The DSUM function in Jspreadsheet Formulas Pro is a formula that allows you to add together values in a specific column or database, but only those that match certain conditions you set. It's a handy tool when you need to sum up specific data within a larger dataset. For example, you could use DSUM to find the total sales of a particular product, or the sum of expenses in a certain category. Its use helps to streamline data analysis and calculations.

## Documentation

The DSUM function adds the numbers in a column or database that meet specified criteria.

### Category

Database

### Syntax

DSUM(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The range of cells that makes up the database. |
| `field` | The column label that contains the numbers to be added. |
| `criteria` | The range of cells that contains the conditions you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one cell below the column label in which you specify a condition for the column. |


### Behavior

The `DSUM` function in spreadsheets is used to add selected database entries based on specified conditions. Here are its behaviors:

- The `DSUM` function ignores empty cells in the criteria argument.
- It requires that the criteria header matches the field name exactly.
- Any text or numbers in the criteria argument that do not match a field name in the database will be ignored.
- It treats Boolean values as integers, i.e. TRUE as 1 and FALSE as 0. 
- If a field name in the criteria argument matches more than one field in the database, the `DSUM` function will consider only the first match.
- If the criteria argument is left empty, `DSUM` returns the sum of the entire database for the specified field.
- If a cell in the database or criteria argument contains an error, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the given field argument is a text that does not match any of the column headers. |
| #REF! | This error occurs if the field argument is a number and it refers to a column outside of the referenced range in the database argument. |
| #N/A | This error occurs if the criteria argument does not include at least one labeled row. |
| #NAME? | This error is returned if the supplied criteria or database argument is not recognized as a valid reference. |

### Best practices

> - Always ensure that the criteria header matches exactly with the field name in the database. The function is case-sensitive and will return an error if the criteria header and field name do not match exactly.
> - Avoid including cells with errors in the database or criteria argument as this will cause the function to return an error.
> - It is recommended to use absolute cell references when defining the database and criteria arguments, to prevent errors when copying the formula to other cells.
> - If your criteria include text strings, make sure to enclose them in quotation marks.

### Usage

A few examples using the DSUM function.

```
DSUM(A1:C10,'Age',D1:D2)  
DSUM(A1:C10,'Salary',D1:D1)  
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
        "Salary"
    ],
    [
        "John",
        "Sales",
        50000
    ],
    [
        "Mary",
        "IT",
        65000
    ],
    [
        "Bob",
        "Sales",
        45000
    ],
    [
        "Sue",
        "IT",
        70000
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Department",
        "Sales"
    ],
    [
        "",
        ""
    ],
    [
        "Total Sales Salary:",
        "=DSUM(A1:C5,\"Salary\",A7:A8)"
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
        "Salary"
    ],
    [
        "John",
        "Sales",
        50000
    ],
    [
        "Mary",
        "IT",
        65000
    ],
    [
        "Bob",
        "Sales",
        45000
    ],
    [
        "Sue",
        "IT",
        70000
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Department",
        "Sales"
    ],
    [
        "",
        ""
    ],
    [
        "Total Sales Salary:",
        "=DSUM(A1:C5,\"Salary\",A7:A8)"
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
        "Salary"
    ],
    [
        "John",
        "Sales",
        50000
    ],
    [
        "Mary",
        "IT",
        65000
    ],
    [
        "Bob",
        "Sales",
        45000
    ],
    [
        "Sue",
        "IT",
        70000
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Department",
        "Sales"
    ],
    [
        "",
        ""
    ],
    [
        "Total Sales Salary:",
        "=DSUM(A1:C5,\"Salary\",A7:A8)"
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
        "Salary"
    ],
    [
        "John",
        "Sales",
        50000
    ],
    [
        "Mary",
        "IT",
        65000
    ],
    [
        "Bob",
        "Sales",
        45000
    ],
    [
        "Sue",
        "IT",
        70000
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Department",
        "Sales"
    ],
    [
        "",
        ""
    ],
    [
        "Total Sales Salary:",
        "=DSUM(A1:C5,\"Salary\",A7:A8)"
    ]
]
            }]
        });
    }
}
```

