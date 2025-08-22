title: CUBEVALUE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CUBEVALUE function in Jspreadsheet

# CUBEVALUE function



In Jspreadsheet Formulas Pro, the `CUBEVALUE` function is a tool that retrieves the value of a specific cell in a cube. This cube is essentially a data set analyzed by a Multidimensional Expressions (MDX) query. Using this function, you can access and manipulate large amounts of complex data easily and efficiently. It's an advanced function and a powerful tool in handling and managing multidimensional data in Jspreadsheet.

## Documentation

Returns the value of a cell in a cube, as calculated by a Multidimensional Expressions (MDX) query.

### Category

Cube

### Syntax

CUBEVALUE(connection, mdx_expression)

| Parameter | Description |
| ----------- | ------------- |
| `connection` | The name of the Excel data source connection. |
| `mdx_expression` | A valid Multidimensional Expressions (MDX) expression that returns a single cell from the cube. |


### Behavior

The 'CUBEVALUE' function in spreadsheets returns an aggregated value from a cube. A cube in this context refers to a multi-dimensional data model used in business intelligence applications. Here's how it handles various data types:
- **Empty Cells**: If the connection and members arguments are empty, the function will return an error.
- **Text**: The 'CUBEVALUE' function expects text arguments that represent connections and members in the cube.
- **Booleans**: Booleans are not directly handled by the 'CUBEVALUE' function. 
- **Errors**: If the function encounters an error, it will display the error message. For example, if a specified member doesn't exist in the cube, it will return a '#N/A' error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | The 'CUBEVALUE' function returns this error if the specified member or connection does not exist in the cube. |
| #VALUE! | This error is displayed if the function receives invalid inputs. For example, it will return this error if given a non-string or non-number argument. |

### Best practices

> - Always ensure that the connection and members arguments are valid and exist in the cube. Invalid values will lead to errors.
> - Be careful when handling errors. Consider using error handling functions to manage any errors that might occur when using the 'CUBEVALUE' function.
> - Make sure your cube is up-to-date. The 'CUBEVALUE' function will return values based on the current state of the cube.
> - Use the 'CUBEMEMBER' function to get a valid member for use with the 'CUBEVALUE' function. This can help avoid errors and ensure you're pulling the correct data.

### Usage

A few examples using the CUBEVALUE function.

```
CUBEVALUE("Sales Data","([Date].[Calendar Year].&[2022],[Product].[All Products].[Bikes],[Measures].[Revenue])") returns the revenue amount for the Bikes product in the year 2022 from the Sales Data cube  
CUBEVALUE("Budget Data","([Department].[All Departments].[Sales],[Employee].[All Employees].[Jane],[Measures].[Salary])") returns the salary amount for Jane in the Sales department from the Budget Data cube  
CUBEVALUE("Inventory Data","([Store].[Store Name].[Seattle],[Product].[All Products].[Accessories],[Measures].[Inventory Count])") returns the inventory count for Accessories in the Seattle store from the Inventory Data cube  
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
        "MDX Query",
        "Result"
    ],
    [
        "Sales Data",
        "([Date].[Calendar Year].&[2022],[Product].[All Products].[Bikes],[Measures].[Revenue])",
        "=CUBEVALUE(A2,B2)"
    ],
    [
        "Budget Data",
        "([Department].[All Departments].[Sales],[Employee].[All Employees].[Jane],[Measures].[Salary])",
        "=CUBEVALUE(A3,B3)"
    ],
    [
        "Inventory Data",
        "([Store].[Store Name].[Seattle],[Product].[All Products].[Accessories],[Measures].[Inventory Count])",
        "=CUBEVALUE(A4,B4)"
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
        "MDX Query",
        "Result"
    ],
    [
        "Sales Data",
        "([Date].[Calendar Year].&[2022],[Product].[All Products].[Bikes],[Measures].[Revenue])",
        "=CUBEVALUE(A2,B2)"
    ],
    [
        "Budget Data",
        "([Department].[All Departments].[Sales],[Employee].[All Employees].[Jane],[Measures].[Salary])",
        "=CUBEVALUE(A3,B3)"
    ],
    [
        "Inventory Data",
        "([Store].[Store Name].[Seattle],[Product].[All Products].[Accessories],[Measures].[Inventory Count])",
        "=CUBEVALUE(A4,B4)"
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
        "MDX Query",
        "Result"
    ],
    [
        "Sales Data",
        "([Date].[Calendar Year].&[2022],[Product].[All Products].[Bikes],[Measures].[Revenue])",
        "=CUBEVALUE(A2,B2)"
    ],
    [
        "Budget Data",
        "([Department].[All Departments].[Sales],[Employee].[All Employees].[Jane],[Measures].[Salary])",
        "=CUBEVALUE(A3,B3)"
    ],
    [
        "Inventory Data",
        "([Store].[Store Name].[Seattle],[Product].[All Products].[Accessories],[Measures].[Inventory Count])",
        "=CUBEVALUE(A4,B4)"
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
        "MDX Query",
        "Result"
    ],
    [
        "Sales Data",
        "([Date].[Calendar Year].&[2022],[Product].[All Products].[Bikes],[Measures].[Revenue])",
        "=CUBEVALUE(A2,B2)"
    ],
    [
        "Budget Data",
        "([Department].[All Departments].[Sales],[Employee].[All Employees].[Jane],[Measures].[Salary])",
        "=CUBEVALUE(A3,B3)"
    ],
    [
        "Inventory Data",
        "([Store].[Store Name].[Seattle],[Product].[All Products].[Accessories],[Measures].[Inventory Count])",
        "=CUBEVALUE(A4,B4)"
    ]
]
            }]
        });
    }
}
```

