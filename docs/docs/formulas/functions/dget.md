title: DGET function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DGET function in Jspreadsheet

# DGET function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DGET` function in Jspreadsheet Formulas Pro is a handy tool that allows you to pull out a specific value from a database-like array based on certain criteria you set. Imagine having a large table of data and you only need one particular piece of information from it. By using the `DGET` function, you can easily specify the conditions and retrieve that single value without having to sift through the entire table.

## Documentation

Extracts a single value from a database table-like array based on specified criteria.

### Category

Database

### Syntax

DGET(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The database range to use for the lookup. Should include headers for each column. |
| `field` | The column header of the field you want to extract the value from. |
| `criteria` | Criteria range or array to search for records that meet all of the specified conditions. |


### Behavior

'DGET' function in a spreadsheet is used to extract a single value from a database/list based on given conditions. It has the following behaviors:

1. The function expects three arguments - database range, field, and criteria range. If any of these are missing or incorrectly defined, it will return an error.
2. The function is case-insensitive, meaning it does not differentiate between uppercase and lowercase letters.
3. When the field argument is a text value, the 'DGET' function matches it with the column label in the database. If it is a number, the function considers it as the column index number.
4. The 'DGET' function ignores empty cells in the database.
5. It can handle both text and numbers in the database. However, the field and criteria should match with the data type in the database. For instance, if the database contains numbers, the criteria should not be text and vice versa.
6. The function does not process boolean values directly. They need to be converted into their numeric equivalents (TRUE to 1 and FALSE to 0) before processing.
7. If the criteria match multiple records, the function returns an error. It only works when there is exactly one record that matches the criteria.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The function returns this error if the field argument is neither a valid column label nor a valid index number. |
| #NUM! | This error is returned when there are no records matching the criteria or when there are multiple records that match the criteria. |
| #REF! | This error occurs when the given database range or criteria range is invalid. |
| #N/A | The function returns this error if the database or the criteria is empty. |

### Best practices

> - Always ensure that the field and criteria match the data type in the database. If the database contains numbers, avoid using text as criteria and vice versa.
> - It's recommended to use unique labels for columns in the database to avoid confusion.
> - Be careful while defining the criteria. Remember, 'DGET' function returns an error if there are multiple records that match the criteria.
> - For efficiency and readability, avoid using entire column references like A:A as the database range. Instead, use specific ranges like A1:C10.

### Usage

A few examples using the DGET function.

```
DGET(A1:C10,"Salary",[A1:A10,"John",C1:C10,">1000"]) returns the salary for John if their salary is greater than 1000  
DGET(A1:C10,"Name",[A1:A10,"*doe*",B1:B10,">=3"]) returns the name of the first person whose last name contains "doe" and has been with the company for at least 3 years  
DGET(A1:E10,"Phone",[A1:A10,"Jane",B1:B10,"<>Sales",C1:C10,"<>Seattle"]) returns the phone number for Jane if they're not in Sales and not located in Seattle  
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
        1200
    ],
    [
        "Jane",
        "Marketing",
        800
    ],
    [
        "Bob",
        "Sales",
        1500
    ],
    [
        "Alice",
        "IT",
        950
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Name",
        "Salary"
    ],
    [
        "John",
        ">1000"
    ],
    [
        "",
        ""
    ],
    [
        "Result:",
        "=DGET(A1:C5,\"Salary\",A7:B8)"
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
        1200
    ],
    [
        "Jane",
        "Marketing",
        800
    ],
    [
        "Bob",
        "Sales",
        1500
    ],
    [
        "Alice",
        "IT",
        950
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Name",
        "Salary"
    ],
    [
        "John",
        ">1000"
    ],
    [
        "",
        ""
    ],
    [
        "Result:",
        "=DGET(A1:C5,\"Salary\",A7:B8)"
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
        1200
    ],
    [
        "Jane",
        "Marketing",
        800
    ],
    [
        "Bob",
        "Sales",
        1500
    ],
    [
        "Alice",
        "IT",
        950
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Name",
        "Salary"
    ],
    [
        "John",
        ">1000"
    ],
    [
        "",
        ""
    ],
    [
        "Result:",
        "=DGET(A1:C5,\"Salary\",A7:B8)"
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
        1200
    ],
    [
        "Jane",
        "Marketing",
        800
    ],
    [
        "Bob",
        "Sales",
        1500
    ],
    [
        "Alice",
        "IT",
        950
    ],
    [
        "",
        "",
        ""
    ],
    [
        "Name",
        "Salary"
    ],
    [
        "John",
        ">1000"
    ],
    [
        "",
        ""
    ],
    [
        "Result:",
        "=DGET(A1:C5,\"Salary\",A7:B8)"
    ]
]
            }]
        });
    }
}
```

