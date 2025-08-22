title: DMIN function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DMIN function in Jspreadsheet

# DMIN function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DMIN` function in Jspreadsheet Formulas Pro is a tool that helps you find the smallest value in a collection of data that looks like a table, based on certain rules you set. You can specify what criteria the function should use to select the minimum value. For example, you might look for the smallest number in a column of a table where another column meets a certain condition. This helps to filter and analyze large datasets efficiently.

## Documentation

Returns the minimum value from a database table-like array based on specified criteria.

### Category

Database

### Syntax

DMIN(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The database range to use for the lookup. Should include headers for each column. |
| `field` | The column header of the field you want to find the minimum value for. |
| `criteria` | Criteria range or array to search for records that meet all of the specified conditions. |


### Behavior

The `DMIN` function in a spreadsheet is a database function that extracts the minimum value from selected database entries based on specified criteria. Here are some behaviors to note:

- Empty Cells: The function ignores empty cells in the selected range unless they are part of the criteria.
- Text: If the column to extract from contains text, `DMIN` will return an error as it only works with numerical values.
- Booleans: `DMIN` treats boolean values as integers, with TRUE being 1 and FALSE being 0.
- Errors: If any cells in the criteria range contain errors, `DMIN` will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if the field argument is non-numeric and not a column label in the database. |
| #DIV/0! | This error occurs if there are no records in the database that meet the criteria. |
| #N/A | This error occurs if the field argument is numeric but does not match any column in the database. |

### Best practices

> - Make sure the criteria range does not include any error cells as this will cause `DMIN` to return an error.
> - Use column labels in the field argument for better readability and to avoid errors when columns are added or deleted.
> - Always ensure the database and field are numerical, as `DMIN` cannot work with text fields.
> - Be careful when using boolean values as they are treated as integers, which may lead to unexpected results.

### Usage

A few examples using the DMIN function.

```
DMIN(A1:C10,"Salary",[A1:A10,"John",C1:C10,"<1000"]) returns the lowest salary for John if their salary is less than 1000  
DMIN(A1:C10,"Years",[B1:B10,"Sales",C1:C10,"Seattle"]) returns the lowest years worked for someone in Sales and located in Seattle  
DMIN(A1:E10,"Sales",[A1:A10,"Jane",B1:B10,">=3"]) returns the lowest sales total for Jane if they've been with the company for at least 3 years  
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
        "45000",
        "2"
    ],
    [
        "Jane",
        "Sales",
        "52000",
        "5"
    ],
    [
        "Mike",
        "IT",
        "48000",
        "3"
    ],
    [
        "John",
        "Sales",
        "47000",
        "4"
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
        "Name",
        "Salary",
        "",
        ""
    ],
    [
        "John",
        "<50000",
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
        "Min Salary for John <50k:",
        "=DMIN(A1:D5,\"Salary\",A7:B8)",
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
        "45000",
        "2"
    ],
    [
        "Jane",
        "Sales",
        "52000",
        "5"
    ],
    [
        "Mike",
        "IT",
        "48000",
        "3"
    ],
    [
        "John",
        "Sales",
        "47000",
        "4"
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
        "Name",
        "Salary",
        "",
        ""
    ],
    [
        "John",
        "<50000",
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
        "Min Salary for John <50k:",
        "=DMIN(A1:D5,\"Salary\",A7:B8)",
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
        "45000",
        "2"
    ],
    [
        "Jane",
        "Sales",
        "52000",
        "5"
    ],
    [
        "Mike",
        "IT",
        "48000",
        "3"
    ],
    [
        "John",
        "Sales",
        "47000",
        "4"
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
        "Name",
        "Salary",
        "",
        ""
    ],
    [
        "John",
        "<50000",
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
        "Min Salary for John <50k:",
        "=DMIN(A1:D5,\"Salary\",A7:B8)",
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
        "45000",
        "2"
    ],
    [
        "Jane",
        "Sales",
        "52000",
        "5"
    ],
    [
        "Mike",
        "IT",
        "48000",
        "3"
    ],
    [
        "John",
        "Sales",
        "47000",
        "4"
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
        "Name",
        "Salary",
        "",
        ""
    ],
    [
        "John",
        "<50000",
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
        "Min Salary for John <50k:",
        "=DMIN(A1:D5,\"Salary\",A7:B8)",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

