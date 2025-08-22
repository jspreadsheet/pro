title: DPRODUCT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DPRODUCT function in Jspreadsheet

# DPRODUCT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DPRODUCT` function in Jspreadsheet Formulas Pro is a tool that allows you to multiply certain values from a database-like array or table based on specific conditions. Think of it like picking out specific numbers from a large set of data and multiplying them together. This function is very useful when you want to perform calculations on specific data points within a larger dataset, based on certain criteria. You simply specify the conditions and `DPRODUCT` does the rest.

## Documentation

Returns the product of values selected from a database table-like array based on specified criteria.

### Category

Database

### Syntax

DPRODUCT(database, field, criteria)

| Parameter | Description |
| ----------- | ------------- |
| `database` | The database range to use for the lookup. Should include headers for each column. |
| `field` | The column header of the field you want to multiply. |
| `criteria` | Criteria range or array to search for records that meet all of the specified conditions. |


### Behavior

The `DPRODUCT` function in spreadsheets is used to multiply the values in a particular field (column) of records in a database that match conditions specified. The function behaves in the following ways:

- This function operates on numerical data. If the specified field contains non-numeric values, the `DPRODUCT` function ignores these.
- If a cell in the criteria range is empty, `DPRODUCT` treats it as an "any" criterion, meaning it doesn't affect the function's calculation.
- If the database is empty (contains no records), `DPRODUCT` returns an error value.
- `DPRODUCT` does not process logical values and text representations of numbers, they are considered as text. 
- If the specified field contains boolean values, `DPRODUCT` treats these as numbers (TRUE as 1, FALSE as 0).
- If the criteria include a logical expression with a cell reference (e.g., `A1>10`), and that cell is empty or contains non-numeric data, `DPRODUCT` returns an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the given field does not exist in the database.|
| #N/A | This error is displayed when the criteria specified for selection do not match any of the database entries. |
| #DIV/0! | This error is returned when the database is empty or the field for the function to operate on contains no numeric values. |
| #NUM! | This error occurs when the result of the `DPRODUCT` function is too large to be represented by the spreadsheet program. |

### Best practices

> - Ensure that the field name given in the function matches exactly with the one in the database (case-sensitive).
> - Avoid non-numeric values in the field that `DPRODUCT` operates on.
> - Clearly define your criteria for selection. If possible, avoid using complex logical expressions as criteria.
> - Be aware that the function will treat boolean values as numbers, which may affect your results if not intended.

### Usage

A few examples using the DPRODUCT function.

```
DPRODUCT(A1:C10,"Price",[A1:A10,"Oranges",C1:C10,">=5"]) returns the product of all prices for oranges sold in quantities of 5 or more  
DPRODUCT(A1:C10,"Sales",[B1:B10,"Apples",C1:C10,"2018"]) returns the product of all sales for apples in the year 2018  
DPRODUCT(A1:E10,"Units",[A1:A10,"Bananas",B1:B10,"North",E1:E10,"Yes"]) returns the product of all units sold for bananas in the North region with a 'Yes' value in the 'Discount' column  
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
        "Units",
        "Price"
    ],
    [
        "Apples",
        "North",
        2,
        15
    ],
    [
        "Apples",
        "South",
        3,
        12
    ],
    [
        "Oranges",
        "North",
        4,
        8
    ],
    [
        "Apples",
        "North",
        5,
        10
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
        "Product",
        "Region",
        "",
        ""
    ],
    [
        "Apples",
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
        "Product of Units for Apples in North:",
        "=DPRODUCT(A1:D5,C1,A7:B8)",
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
        "Region",
        "Units",
        "Price"
    ],
    [
        "Apples",
        "North",
        2,
        15
    ],
    [
        "Apples",
        "South",
        3,
        12
    ],
    [
        "Oranges",
        "North",
        4,
        8
    ],
    [
        "Apples",
        "North",
        5,
        10
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
        "Product",
        "Region",
        "",
        ""
    ],
    [
        "Apples",
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
        "Product of Units for Apples in North:",
        "=DPRODUCT(A1:D5,C1,A7:B8)",
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
        "Region",
        "Units",
        "Price"
    ],
    [
        "Apples",
        "North",
        2,
        15
    ],
    [
        "Apples",
        "South",
        3,
        12
    ],
    [
        "Oranges",
        "North",
        4,
        8
    ],
    [
        "Apples",
        "North",
        5,
        10
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
        "Product",
        "Region",
        "",
        ""
    ],
    [
        "Apples",
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
        "Product of Units for Apples in North:",
        "=DPRODUCT(A1:D5,C1,A7:B8)",
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
        "Region",
        "Units",
        "Price"
    ],
    [
        "Apples",
        "North",
        2,
        15
    ],
    [
        "Apples",
        "South",
        3,
        12
    ],
    [
        "Oranges",
        "North",
        4,
        8
    ],
    [
        "Apples",
        "North",
        5,
        10
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
        "Product",
        "Region",
        "",
        ""
    ],
    [
        "Apples",
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
        "Product of Units for Apples in North:",
        "=DPRODUCT(A1:D5,C1,A7:B8)",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

