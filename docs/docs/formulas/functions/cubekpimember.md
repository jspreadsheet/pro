title: CUBEKPIMEMBER function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CUBEKPIMEMBER function in Jspreadsheet

# CUBEKPIMEMBER function



The `CUBEKPIMEMBER` function in Jspreadsheet Formulas Pro is a tool that allows you to retrieve specific information from a data cube. This function specifically gives you the value of a key performance indicator (KPI), a measurable value that demonstrates how effectively a company is achieving its key business objectives, and the name of the KPI in the data cube. This function is particularly useful when you're dealing with large datasets and need to quickly identify and extract specific performance metrics.

## Documentation

Returns the value of a key performance indicator (KPI) and the name of the KPI in the cube.

### Category

Cube

### Syntax

CUBEKPIMEMBER(connection, kpi_name, [caption])

| Parameter | Description |
| ----------- | ------------- |
| `connection` | The name of the Excel data source connection. |
| `kpi_name` | The name of the KPI to retrieve from the cube. |
| `[caption]` | Optional. The caption of the KPI to retrieve from the cube. If omitted, the name parameter is used as the caption. |


### Behavior

The `CUBEKPIMEMBER` function in spreadsheets is used to return a key performance indicator (KPI) from a cube. It takes a cube as its first argument, a set of member expressions for the second argument, and a KPI name for the third argument. In handling different types of data:

- Empty cells: If any of the arguments are empty cells, the function will return an error.
- Text: The function expects the cube, member expression, and KPI name to be text. If non-text values are provided, the function will return an error.
- Booleans: Boolean values are not applicable as arguments for this function. If provided, the function will return an error.
- Errors: If any of the arguments are cells that contain errors, the function will propagate that error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | The function returns this error if the cube, member expression, or KPI name is not a text value, or if it fails to get data from the cube. |
| #N/A | The function returns this error when it fails to find the specified KPI. |

### Best Practices

> - Always ensure that the cube, member expression, and KPI name are text values to avoid `#VALUE!` errors.
> - Make sure that the specified KPI exists in the cube to avoid `#N/A` errors.
> - Avoid referring to cells that may contain errors as arguments to the function to prevent those errors from being propagated.
> - It's always good practice to validate your data before using it as an argument in the function. This can help to prevent errors and ensure that the function works as expected.

### Usage

A few examples using the CUBEKPIMEMBER function.

```
CUBEKPIMEMBER("Sales Data","Revenue") returns the revenue KPI for the Sales Data cube along with its name  
CUBEKPIMEMBER("Budget Data","Profit", "Net Profit") returns the net profit KPI for the Budget Data cube along with its name  
CUBEKPIMEMBER("Inventory Data","Turnover Rate") returns the turnover rate KPI for the Inventory Data cube along with its name  
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
        "KPI Name",
        "KPI Value & Name"
    ],
    [
        "Sales Data",
        "Revenue",
        "=CUBEKPIMEMBER(A2,B2)"
    ],
    [
        "Budget Data",
        "Profit",
        "=CUBEKPIMEMBER(A3,B3,\"Net Profit\")"
    ],
    [
        "Inventory Data",
        "Turnover Rate",
        "=CUBEKPIMEMBER(A4,B4)"
    ],
    [
        "HR Data",
        "Employee Satisfaction",
        "=CUBEKPIMEMBER(A5,B5)"
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
        "KPI Name",
        "KPI Value & Name"
    ],
    [
        "Sales Data",
        "Revenue",
        "=CUBEKPIMEMBER(A2,B2)"
    ],
    [
        "Budget Data",
        "Profit",
        "=CUBEKPIMEMBER(A3,B3,\"Net Profit\")"
    ],
    [
        "Inventory Data",
        "Turnover Rate",
        "=CUBEKPIMEMBER(A4,B4)"
    ],
    [
        "HR Data",
        "Employee Satisfaction",
        "=CUBEKPIMEMBER(A5,B5)"
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
        "KPI Name",
        "KPI Value & Name"
    ],
    [
        "Sales Data",
        "Revenue",
        "=CUBEKPIMEMBER(A2,B2)"
    ],
    [
        "Budget Data",
        "Profit",
        "=CUBEKPIMEMBER(A3,B3,\"Net Profit\")"
    ],
    [
        "Inventory Data",
        "Turnover Rate",
        "=CUBEKPIMEMBER(A4,B4)"
    ],
    [
        "HR Data",
        "Employee Satisfaction",
        "=CUBEKPIMEMBER(A5,B5)"
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
        "KPI Name",
        "KPI Value & Name"
    ],
    [
        "Sales Data",
        "Revenue",
        "=CUBEKPIMEMBER(A2,B2)"
    ],
    [
        "Budget Data",
        "Profit",
        "=CUBEKPIMEMBER(A3,B3,\"Net Profit\")"
    ],
    [
        "Inventory Data",
        "Turnover Rate",
        "=CUBEKPIMEMBER(A4,B4)"
    ],
    [
        "HR Data",
        "Employee Satisfaction",
        "=CUBEKPIMEMBER(A5,B5)"
    ]
]
            }]
        });
    }
}
```

