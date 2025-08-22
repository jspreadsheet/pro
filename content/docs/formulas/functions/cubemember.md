title: CUBEMEMBER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CUBEMEMBER function in Jspreadsheet

# CUBEMEMBER function



The `CUBEMEMBER` function in Jspreadsheet Formulas Pro is used to retrieve specific data elements, also known as members, from a data cube. A data cube is a multi-dimensional array of values, often used to analyze data across multiple dimensions. This function allows you to specify which member or tuple (a combination of members from different dimensions) you want to extract, making it easier to handle and analyze large volumes of complex data.

## Documentation

Returns a member or tuple from a cube.

### Category

Cube

### Syntax

CUBEMEMBER(connection, member_expression)

| Parameter | Description |
| ----------- | ------------- |
| `connection` | The name of the Excel data source connection. |
| `member_expression` | A valid Multidimensional Expressions (MDX) expression that returns a member or tuple from the cube. |


### Behavior

The `CUBEMEMBER` function in spreadsheets is utilized to get a member or tuple from a cube, and it is widely used in OLAP databases. It returns a value that represents a member in a cube. Here's how it handles different inputs:

- Empty Cells: If the `CUBEMEMBER` function is applied to an empty cell, the function will return an error since it requires at least a connection to the data source and a member expression to work properly.
- Text: Texts are usually used as arguments for the `CUBEMEMBER` function. Usually, the text should be a valid member expression or a tuple in the cube.
- Booleans: The `CUBEMEMBER` function does not handle Boolean values. Passing a Boolean value may result in an error.
- Error Values: If an error value is passed as an argument, the `CUBEMEMBER` function will return the corresponding error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when an invalid member expression or tuple is passed as an argument. |
| #N/A | This error is returned when the function is unable to find the cube. This could be because the cube has been moved, deleted, or not connected. |
| #REF! | This error is returned when the specified cube is not available or the connection has been lost. |

### Best Practices

> - Always ensure that the cube specified in the function is available and the connection is stable. If the cube is moved or the connection is lost, the function will return an error.
> - When specifying a member expression, ensure that it is valid. An invalid member expression will result in a `#VALUE!` error.
> - It is recommended to use cell references instead of direct input to avoid errors and make your spreadsheet more dynamic.
> - Always double-check the spelling and case-sensitivity of your cube and member names, as the function is case sensitive.

### Usage

A few examples using the CUBEMEMBER function.

```
CUBEMEMBER("Sales Data","[Date].[Calendar Year].&[2022]") returns the calendar year 2022 member from the Date dimension in the Sales Data cube  
CUBEMEMBER("Budget Data","[Product].[All Products].[Bikes]") returns the Bikes member from the Product dimension in the Budget Data cube  
CUBEMEMBER("Inventory Data","[Store].[Store Name].&[Seattle]") returns the Seattle store member from the Store dimension in the Inventory Data cube  
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
        "Cube Member"
    ],
    [
        "Sales Data",
        "[Product].[Category].&[Electronics]",
        "=CUBEMEMBER(A2,B2)"
    ],
    [
        "Sales Data",
        "[Date].[Year].&[2023]",
        "=CUBEMEMBER(A3,B3)"
    ],
    [
        "Budget Data",
        "[Region].[North America].[USA]",
        "=CUBEMEMBER(A4,B4)"
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
        "Cube Member"
    ],
    [
        "Sales Data",
        "[Product].[Category].&[Electronics]",
        "=CUBEMEMBER(A2,B2)"
    ],
    [
        "Sales Data",
        "[Date].[Year].&[2023]",
        "=CUBEMEMBER(A3,B3)"
    ],
    [
        "Budget Data",
        "[Region].[North America].[USA]",
        "=CUBEMEMBER(A4,B4)"
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
        "Cube Member"
    ],
    [
        "Sales Data",
        "[Product].[Category].&[Electronics]",
        "=CUBEMEMBER(A2,B2)"
    ],
    [
        "Sales Data",
        "[Date].[Year].&[2023]",
        "=CUBEMEMBER(A3,B3)"
    ],
    [
        "Budget Data",
        "[Region].[North America].[USA]",
        "=CUBEMEMBER(A4,B4)"
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
        "Cube Member"
    ],
    [
        "Sales Data",
        "[Product].[Category].&[Electronics]",
        "=CUBEMEMBER(A2,B2)"
    ],
    [
        "Sales Data",
        "[Date].[Year].&[2023]",
        "=CUBEMEMBER(A3,B3)"
    ],
    [
        "Budget Data",
        "[Region].[North America].[USA]",
        "=CUBEMEMBER(A4,B4)"
    ]
]
            }]
        });
    }
}
```

