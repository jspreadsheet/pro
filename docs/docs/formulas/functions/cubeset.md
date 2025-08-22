title: CUBESET function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CUBESET function in Jspreadsheet

# CUBESET function



The `CUBESET` function in Jspreadsheet Formulas Pro is a powerful tool used to create a calculated group of members or tuples. This is done by sending a specific set expression to the cube on a predefined connection. Essentially, this allows you to select and manipulate a group of data within your spreadsheet based on certain criteria. The output is a set that can further be used in other cube functions.

## Documentation

Defines a calculated set of members or tuples by sending a set expression to the cube on the specified connection.

### Category

Cube

### Syntax

CUBESET(connection, set_expression, [caption])

| Parameter | Description |
| ----------- | ------------- |
| `connection` | The name of the Excel data source connection. |
| `set_expression` | A valid Multidimensional Expressions (MDX) expression that defines the calculated set. |
| `[caption]` | Optional. The caption of the calculated set. If omitted, the set_expression parameter is used as the caption. |


### Behavior

The `CUBESET` function in spreadsheets is used to define a set of members or tuples by sending a set expression to the cube on the server, which creates the set, and then returns that set to Microsoft Excel. The set is an array in Excel that is delimited by semicolon.

- If a cell reference is empty, `CUBESET` treats it as an empty string.
- If a cell reference is a text, `CUBESET` takes it as a string value.
- Boolean values are not applicable to `CUBESET` function.
- If an error occurs within the function, it will return an error value.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | The `CUBESET` function returns this error when the set doesn't exist in the cube. |
| #VALUE! | This error is returned when the syntax is incorrect, or the formula has incorrect arguments. |
| #NAME? | This error is returned when the formula uses unrecognized text. |
| #NULL! | This error is returned when there is no connection to the data source. |

### Best practices

> - Always ensure that your data source is connected when using the `CUBESET` function.
> - Be sure to check the syntax and arguments of your formula to avoid common errors like #VALUE! and #NAME?
> - Ensure that the set you're referring to exists in the cube to prevent the #N/A error.
> - Use cell references where possible to maintain the flexibility of the `CUBESET` function.

### Usage

A few examples using the CUBESET function.

```
CUBESET("Sales Data","[[Date].[Calendar Year].&[2022],[Date].[Calendar Year].&[2023]]") returns a set of calendar year members for the years 2022 and 2023 from the Date dimension in the Sales Data cube  
CUBESET("Budget Data","CrossJoin([[Product].[All Products].[Bikes],[Product].[All Products].[Accessories]], [[Employee].[All Employees].[Jane],[Employee].[All Employees].[John]])","Product and Employee") returns a set of all combinations of bikes and accessories with Jane and John employees from the Product and Employee dimensions in the Budget Data cube  
CUBESET("Inventory Data","TopCount([Store].[Store Name].Children,5,[Measures].[Inventory Count])", "Top 5 Stores") returns a set of the top 5 stores in terms of inventory count from the Store dimension in the Inventory Data cube  
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
        "Connection",
        "Set Expression",
        "CUBESET Result"
    ],
    [
        "Sales Data",
        "[[Date].[Calendar Year].&[2022],[Date].[Calendar Year].&[2023]]",
        "=CUBESET(A2,B2)"
    ],
    [
        "Budget Data",
        "CrossJoin([[Product].[All Products].[Bikes],[Product].[All Products].[Accessories]], [[Employee].[All Employees].[Jane],[Employee].[All Employees].[John]])",
        "=CUBESET(A3,B3,\"Product and Employee\")"
    ],
    [
        "Inventory Data",
        "TopCount([Store].[Store Name].Children,5,[Measures].[Inventory Count])",
        "=CUBESET(A4,B4,\"Top 5 Stores\")"
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
        "Connection",
        "Set Expression",
        "CUBESET Result"
    ],
    [
        "Sales Data",
        "[[Date].[Calendar Year].&[2022],[Date].[Calendar Year].&[2023]]",
        "=CUBESET(A2,B2)"
    ],
    [
        "Budget Data",
        "CrossJoin([[Product].[All Products].[Bikes],[Product].[All Products].[Accessories]], [[Employee].[All Employees].[Jane],[Employee].[All Employees].[John]])",
        "=CUBESET(A3,B3,\"Product and Employee\")"
    ],
    [
        "Inventory Data",
        "TopCount([Store].[Store Name].Children,5,[Measures].[Inventory Count])",
        "=CUBESET(A4,B4,\"Top 5 Stores\")"
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
        "Connection",
        "Set Expression",
        "CUBESET Result"
    ],
    [
        "Sales Data",
        "[[Date].[Calendar Year].&[2022],[Date].[Calendar Year].&[2023]]",
        "=CUBESET(A2,B2)"
    ],
    [
        "Budget Data",
        "CrossJoin([[Product].[All Products].[Bikes],[Product].[All Products].[Accessories]], [[Employee].[All Employees].[Jane],[Employee].[All Employees].[John]])",
        "=CUBESET(A3,B3,\"Product and Employee\")"
    ],
    [
        "Inventory Data",
        "TopCount([Store].[Store Name].Children,5,[Measures].[Inventory Count])",
        "=CUBESET(A4,B4,\"Top 5 Stores\")"
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
        "Connection",
        "Set Expression",
        "CUBESET Result"
    ],
    [
        "Sales Data",
        "[[Date].[Calendar Year].&[2022],[Date].[Calendar Year].&[2023]]",
        "=CUBESET(A2,B2)"
    ],
    [
        "Budget Data",
        "CrossJoin([[Product].[All Products].[Bikes],[Product].[All Products].[Accessories]], [[Employee].[All Employees].[Jane],[Employee].[All Employees].[John]])",
        "=CUBESET(A3,B3,\"Product and Employee\")"
    ],
    [
        "Inventory Data",
        "TopCount([Store].[Store Name].Children,5,[Measures].[Inventory Count])",
        "=CUBESET(A4,B4,\"Top 5 Stores\")"
    ]
]
            }]
        });
    }
}
```

