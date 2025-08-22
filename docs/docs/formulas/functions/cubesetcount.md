title: CUBESETCOUNT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CUBESETCOUNT function in Jspreadsheet

# CUBESETCOUNT function



The `CUBESETCOUNT` function in Jspreadsheet Formulas Pro is a useful tool that helps you figure out the quantity of items in a specific set. Essentially, it performs a count of all the elements that are part of the set you're examining. This is particularly handy when you're dealing with large data sets and need a quick way to determine how many items you're working with. It simplifies data analysis by providing an automatic and accurate count.

## Documentation

Returns the number of items in a set.

### Category

Cube

### Syntax

CUBESETCOUNT(connection, set_expression)

| Parameter | Description |
| ----------- | ------------- |
| `connection` | Required. A text string of a Microsoft Excel expression that evaluates to a set defined by the CUBESET function. Set can also be the CUBESET function, or a reference to a cell that contains the CUBESET function. |
| `set_expression` | Required. Expression. |


### Behavior

The `CUBESETCOUNT` function in spreadsheets returns the number of items in a set. This function is specifically designed to work with OLAP cubes, which are multi-dimensional data structures used in Business Intelligence applications.

- If the set is empty or the reference is invalid, the function will return 0.
- The function does not handle text, booleans, or other non-numeric values as it specifically works with sets created by the `CUBESET` function.
- If a cube function encounters a #N/A error, it could be because the OLAP server is not running, or the connection to the server has been lost.
- It does not handle empty cells as it works with sets which are collections of tuples and not individual cell references.

### Common Errors

| Error | Description |
|---|---|
| #N/A | Occurs when the OLAP server is not running or the connection to the server has been lost. |
| #VALUE! | Occurs when the set is not a valid reference or the formula syntax is incorrect. |
| #NUM! | Occurs when numerical data in the formula is not valid. |

### Best practices

> - Always ensure that your OLAP server is running and your connection is stable before using `CUBESETCOUNT`.
> - Verify that the set reference used in the formula is valid and has been correctly created using the `CUBESET` function.
> - Be aware that `CUBESETCOUNT` only works with sets and cannot handle individual cell references or non-numeric values.
> - Always double-check your formula syntax to avoid #VALUE! errors.

### Usage

A few examples using the CUBESETCOUNT function.

```
=CUBESETCOUNT(CUBESET("Sales","[Product].[All Products].Children","Products",1,"[Measures].[Sales Amount]"))  
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
        "Sales Data Analysis",
        ""
    ],
    [
        "Product Categories",
        "Count"
    ],
    [
        "Electronics, Clothing, Books",
        "=CUBESETCOUNT(\"SalesDB\",\"[Product].[Category].Members\")"
    ],
    [
        "Regional Sales Teams",
        "=CUBESETCOUNT(\"SalesDB\",\"[Sales].[Region].Children\")"
    ],
    [
        "Active Customers",
        "=CUBESETCOUNT(\"SalesDB\",\"[Customer].[Active].Members\")"
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
        "Sales Data Analysis",
        ""
    ],
    [
        "Product Categories",
        "Count"
    ],
    [
        "Electronics, Clothing, Books",
        "=CUBESETCOUNT(\"SalesDB\",\"[Product].[Category].Members\")"
    ],
    [
        "Regional Sales Teams",
        "=CUBESETCOUNT(\"SalesDB\",\"[Sales].[Region].Children\")"
    ],
    [
        "Active Customers",
        "=CUBESETCOUNT(\"SalesDB\",\"[Customer].[Active].Members\")"
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
        "Sales Data Analysis",
        ""
    ],
    [
        "Product Categories",
        "Count"
    ],
    [
        "Electronics, Clothing, Books",
        "=CUBESETCOUNT(\"SalesDB\",\"[Product].[Category].Members\")"
    ],
    [
        "Regional Sales Teams",
        "=CUBESETCOUNT(\"SalesDB\",\"[Sales].[Region].Children\")"
    ],
    [
        "Active Customers",
        "=CUBESETCOUNT(\"SalesDB\",\"[Customer].[Active].Members\")"
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
        "Sales Data Analysis",
        ""
    ],
    [
        "Product Categories",
        "Count"
    ],
    [
        "Electronics, Clothing, Books",
        "=CUBESETCOUNT(\"SalesDB\",\"[Product].[Category].Members\")"
    ],
    [
        "Regional Sales Teams",
        "=CUBESETCOUNT(\"SalesDB\",\"[Sales].[Region].Children\")"
    ],
    [
        "Active Customers",
        "=CUBESETCOUNT(\"SalesDB\",\"[Customer].[Active].Members\")"
    ]
]
            }]
        });
    }
}
```

