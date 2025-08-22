title: CUBEMEMBERPROPERTY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CUBEMEMBERPROPERTY function in Jspreadsheet

# CUBEMEMBERPROPERTY function



The `CUBEMEMBERPROPERTY` function in Jspreadsheet Formulas Pro is a tool that allows you to retrieve the value of a specific property from your data cube. A data cube is a multi-dimensional array of values, typically used to describe a dataset. This function is commonly used in data analysis and reporting where you need to extract certain properties from your dataset. It's like asking for specific details about a certain member of your data set.

## Documentation

Returns the value of a member property from the cube.

### Category

Cube

### Syntax

CUBEMEMBERPROPERTY(connection, member_expression, property_name)

| Parameter | Description |
| ----------- | ------------- |
| `connection` | The name of the Excel data source connection. |
| `member_expression` | A valid Multidimensional Expressions (MDX) expression that returns a member or tuple from the cube. |
| `property_name` | The name of the member property to retrieve from the cube. |


### Behavior

The `CUBEMEMBERPROPERTY` function in spreadsheets is used to return the value of a member property from a cube. It does this by using a connection to an OLAP (Online Analytical Processing) cube. Here is how it handles different inputs:

- **Empty Cells**: If the `CUBEMEMBERPROPERTY` function references an empty cell, it will return an error since a connection or property cannot be found.
- **Text**: The function requires text inputs for specifying the connection and member_expression. If it doesn't find the specified member property in the cube, it will return an error.
- **Booleans**: This function does not interact with boolean values.
- **Errors**: If there are any errors (like referencing non-existing connections or properties), the `CUBEMEMBERPROPERTY` function will return an appropriate error message.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #N/A | This error is displayed when the function cannot find the specified connection or property. |
| #VALUE! | This error is displayed when the given arguments are of the wrong data type. |
| #REF! | This error occurs when the referred cell is not valid. |

### Best practices

> - Always verify that your connection to the OLAP cube is active and stable before using the `CUBEMEMBERPROPERTY` function.
> - Ensure that the member_expression correctly refers to a member in the cube. Incorrect references will result in errors.
> - Use clear and specific property names to avoid confusion and errors. 
> - To avoid errors, handle empty cells that this function might refer to in your worksheet.

### Usage

A few examples using the CUBEMEMBERPROPERTY function.

```
CUBEMEMBERPROPERTY("Sales Data","[Date].[Calendar Year].&[2022]","Calendar Year") returns the calendar year for the 2022 member from the Date dimension in the Sales Data cube  
CUBEMEMBERPROPERTY("Budget Data","[Product].[All Products].[Bikes]","Color") returns the color property for the Bikes member from the Product dimension in the Budget Data cube  
CUBEMEMBERPROPERTY("Inventory Data","[Store].[Store Name].&[Seattle]","Region") returns the region property for the Seattle store member from the Store dimension in the Inventory Data cube  
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
        "Member Expression",
        "Property Value"
    ],
    [
        "Sales Data",
        "[Product].[Category].&[Electronics]",
        "=CUBEMEMBERPROPERTY(A2,B2,\"Department\")"
    ],
    [
        "Budget Data",
        "[Employee].[Name].&[John Smith]",
        "=CUBEMEMBERPROPERTY(A3,B3,\"Title\")"
    ],
    [
        "Inventory Data",
        "[Location].[Store].&[Store001]",
        "=CUBEMEMBERPROPERTY(A4,B4,\"Manager\")"
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
        "Member Expression",
        "Property Value"
    ],
    [
        "Sales Data",
        "[Product].[Category].&[Electronics]",
        "=CUBEMEMBERPROPERTY(A2,B2,\"Department\")"
    ],
    [
        "Budget Data",
        "[Employee].[Name].&[John Smith]",
        "=CUBEMEMBERPROPERTY(A3,B3,\"Title\")"
    ],
    [
        "Inventory Data",
        "[Location].[Store].&[Store001]",
        "=CUBEMEMBERPROPERTY(A4,B4,\"Manager\")"
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
        "Member Expression",
        "Property Value"
    ],
    [
        "Sales Data",
        "[Product].[Category].&[Electronics]",
        "=CUBEMEMBERPROPERTY(A2,B2,\"Department\")"
    ],
    [
        "Budget Data",
        "[Employee].[Name].&[John Smith]",
        "=CUBEMEMBERPROPERTY(A3,B3,\"Title\")"
    ],
    [
        "Inventory Data",
        "[Location].[Store].&[Store001]",
        "=CUBEMEMBERPROPERTY(A4,B4,\"Manager\")"
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
        "Member Expression",
        "Property Value"
    ],
    [
        "Sales Data",
        "[Product].[Category].&[Electronics]",
        "=CUBEMEMBERPROPERTY(A2,B2,\"Department\")"
    ],
    [
        "Budget Data",
        "[Employee].[Name].&[John Smith]",
        "=CUBEMEMBERPROPERTY(A3,B3,\"Title\")"
    ],
    [
        "Inventory Data",
        "[Location].[Store].&[Store001]",
        "=CUBEMEMBERPROPERTY(A4,B4,\"Manager\")"
    ]
]
            }]
        });
    }
}
```

