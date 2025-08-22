title: TAKE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TAKE function in Jspreadsheet

# TAKE function



The `TAKE` function in Jspreadsheet Formulas Pro is a tool that allows you to extract a certain number of characters from the beginning of a text string. For instance, if you have a cell containing the text "Hello World" and you want to obtain the first five characters, you would use `TAKE`. In this case, the function would return the value "Hello". This function is particularly useful when you need to manipulate and analyze text data in your spreadsheets.

## Documentation

Returns a specified number of characters from the start of a text string.

### Category

Lookup and reference

### Syntax

TAKE(array, rows, [columns])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array from which to extract rows or columns. |
| `rows` | The number of rows to extract from the start or end of the array. A positive value extracts from the start, and a negative value extracts from the end. |
| `[columns]` | Optional. The number of columns to extract from the start or end of the array. A positive value extracts from the start, and a negative value extracts from the end. If not specified, all columns are included. |


As the 'TAKE' function isn't a standard or recognized function in popular spreadsheet software like Excel, Google Sheets, or LibreOffice Calc, no specific behavior, common errors, or best practices can be provided. If 'TAKE' is a custom function in your specific use case, please provide more details.

### Usage

A few examples using the TAKE function.

```
TAKE(A1:D4, 2, 3) returns the first 2 rows and 3 columns of the array.  
TAKE(E1:H4, -3) returns the last 3 rows of the array.  
TAKE(I1:K4, 2, -1) returns the first 2 rows and excludes the last column of the array.  
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Laptops",
        150,
        180,
        200,
        175
    ],
    [
        "Tablets",
        120,
        140,
        160,
        145
    ],
    [
        "Phones",
        300,
        320,
        350,
        330
    ],
    [
        "Monitors",
        80,
        95,
        110,
        100
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,2,3)",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,-2)",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,3,-1)",
        "",
        "",
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Laptops",
        150,
        180,
        200,
        175
    ],
    [
        "Tablets",
        120,
        140,
        160,
        145
    ],
    [
        "Phones",
        300,
        320,
        350,
        330
    ],
    [
        "Monitors",
        80,
        95,
        110,
        100
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,2,3)",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,-2)",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,3,-1)",
        "",
        "",
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Laptops",
        150,
        180,
        200,
        175
    ],
    [
        "Tablets",
        120,
        140,
        160,
        145
    ],
    [
        "Phones",
        300,
        320,
        350,
        330
    ],
    [
        "Monitors",
        80,
        95,
        110,
        100
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,2,3)",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,-2)",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,3,-1)",
        "",
        "",
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
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    [
        "Laptops",
        150,
        180,
        200,
        175
    ],
    [
        "Tablets",
        120,
        140,
        160,
        145
    ],
    [
        "Phones",
        300,
        320,
        350,
        330
    ],
    [
        "Monitors",
        80,
        95,
        110,
        100
    ],
    [
        "",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,2,3)",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,-2)",
        "",
        "",
        "",
        ""
    ],
    [
        "=TAKE(A1:E5,3,-1)",
        "",
        "",
        "",
        ""
    ]
]
            }]
        });
    }
}
```

