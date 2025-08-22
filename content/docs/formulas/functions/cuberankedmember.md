title: CUBERANKEDMEMBER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CUBERANKEDMEMBER function in Jspreadsheet

# CUBERANKEDMEMBER function



The `CUBERANKEDMEMBER` function in Jspreadsheet Formulas Pro is a tool that provides the nth ranked member from a selected set in a data cube. In simpler terms, it helps you locate a specific item based on its position in a list within a larger data set. This function is particularly useful when you are dealing with a large amount of data and need to quickly identify items based on their rank or position.

## Documentation

Returns the nth ranked member from a set in a cube.

### Category

Cube

### Syntax

CUBERANKEDMEMBER(connection, set_expression, rank)

| Parameter | Description |
| ----------- | ------------- |
| `connection` | The name of the Excel data source connection. |
| `set_expression` | A valid Multidimensional Expressions (MDX) expression that returns a set from the cube. |
| `rank` | The rank of the member to be returned from the set. |


### Behavior

The `CUBERANKEDMEMBER` function in spreadsheets is used to return the nth, or ranked, member in a set. This function is mainly used in conjunction with OLAP cubes, which are multi-dimensional arrays of data. Here's how it handles different types of data:

- **Empty Cells**: This function will generally ignore empty cells in its operation, as it mainly operates on the OLAP cube provided as its argument.
- **Text**: Any text provided to this function that is not a valid part of the OLAP cube or a valid numeric index will result in an error.
- **Booleans**: Boolean values are not applicable to this function.
- **Errors**: If any errors occur in the data retrieval from the OLAP cube, this function will return the corresponding error.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #VALUE! | If the function does not find a cube with the given name, or if the cube does not recognize the set expression, the function returns this error |
| #N/A | If the function does not find the ranked member in the set, it returns this error |
| #NUM! | If the rank argument is not a valid numeric value, the function returns this error |

### Best practices

> - Make sure that the cube name and set expression provided to `CUBERANKEDMEMBER` are valid and recognized by the cube.
> - The rank argument should be a positive integer and within the range of the total members in the set.
> - Always handle possible errors with appropriate error handling functions or techniques to ensure your spreadsheet continues to function properly even when the `CUBERANKEDMEMBER` function encounters an error.
> - As this function interacts with OLAP cubes, which are typically large data structures, try to use it in an optimized manner to avoid potential performance issues.

### Usage

A few examples using the CUBERANKEDMEMBER function.

```
CUBERANKEDMEMBER("Sales Data","[Product].[Product Line].&[Mountain].[Products].Children",1) returns the highest-selling product in the Mountain product line for the Sales Data cube  
CUBERANKEDMEMBER("Budget Data","[Employee].[Employees By Department].[Sales]",[Measures].[Salary],2) returns the second-highest paid employee in the Sales department for the Budget Data cube  
CUBERANKEDMEMBER("Inventory Data","[Geography].[Geography].[Country].&[United States]",5) returns the fifth-ranked country in terms of inventory for the Inventory Data cube  
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
        "Sales Data Connection",
        "Product Rankings",
        "Top Products"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A2,\"[Product].[Category].&[Electronics].[Items].Children\",1)",
        "Best Selling Electronics"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A3,\"[Product].[Category].&[Electronics].[Items].Children\",2)",
        "Second Best Electronics"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A4,\"[Product].[Category].&[Clothing].[Items].Children\",1)",
        "Best Selling Clothing"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A5,\"[Employee].[Department].&[Sales].[Staff].Children\",3)",
        "Third Top Salesperson"
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
        "Sales Data Connection",
        "Product Rankings",
        "Top Products"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A2,\"[Product].[Category].&[Electronics].[Items].Children\",1)",
        "Best Selling Electronics"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A3,\"[Product].[Category].&[Electronics].[Items].Children\",2)",
        "Second Best Electronics"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A4,\"[Product].[Category].&[Clothing].[Items].Children\",1)",
        "Best Selling Clothing"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A5,\"[Employee].[Department].&[Sales].[Staff].Children\",3)",
        "Third Top Salesperson"
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
        "Sales Data Connection",
        "Product Rankings",
        "Top Products"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A2,\"[Product].[Category].&[Electronics].[Items].Children\",1)",
        "Best Selling Electronics"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A3,\"[Product].[Category].&[Electronics].[Items].Children\",2)",
        "Second Best Electronics"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A4,\"[Product].[Category].&[Clothing].[Items].Children\",1)",
        "Best Selling Clothing"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A5,\"[Employee].[Department].&[Sales].[Staff].Children\",3)",
        "Third Top Salesperson"
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
        "Sales Data Connection",
        "Product Rankings",
        "Top Products"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A2,\"[Product].[Category].&[Electronics].[Items].Children\",1)",
        "Best Selling Electronics"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A3,\"[Product].[Category].&[Electronics].[Items].Children\",2)",
        "Second Best Electronics"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A4,\"[Product].[Category].&[Clothing].[Items].Children\",1)",
        "Best Selling Clothing"
    ],
    [
        "Sales Data",
        "=CUBERANKEDMEMBER(A5,\"[Employee].[Department].&[Sales].[Staff].Children\",3)",
        "Third Top Salesperson"
    ]
]
            }]
        });
    }
}
```

