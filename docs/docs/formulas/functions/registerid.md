title: REGISTER.ID function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the REGISTER.ID function in Jspreadsheet

# REGISTER.ID function



The `REGISTER.ID` function in Jspreadsheet Formulas Pro is used to create a unique identification number for a specific entity or object within your spreadsheet. This could be anything from a row, a column, or a specific cell. With this ID, you can easily track and reference your data, making complex data management simpler and more efficient. This function is particularly useful in larger spreadsheets where keeping track of specific data points can become challenging.

## Documentation

Generates an ID number for a specified entity or object.

### Category

Add-in and Automation

### Syntax

REGISTER.ID(entity)

| Parameter | Description |
| ----------- | ------------- |
| `string` | The name of the entity or object to which the ID number relates. |


### Behavior

The `REGISTER.ID` function in spreadsheets is not commonly used in most spreadsheet programs like Microsoft Excel or Google Sheets, indicating that it might be specific to a certain software or custom function. If it does exist in your spreadsheet software, its behavior is likely to depend on the specific implementation. 

In general, functions in spreadsheet programs handle different data types in the following ways:

- **Empty Cells**: Most functions ignore empty cells unless they affect the computation, such as in case of averages or counting cells.

- **Text**: Functions will generally return an error if they expect a number but receive text instead. If a function is designed to work with text, it should handle it appropriately.

- **Booleans**: Boolean values (TRUE and FALSE) are treated as 1 and 0 respectively by most mathematical functions.

- **Errors**: If a cell referenced by a function contains an error, the function will usually propagate that error.

### Common Errors

| Error | Description |
| ----- | ----------- |
| #VALUE! | The function expects a certain data type but received a different one. Common when a function that expects a number receives text. |
| #REF! | The function refers to a cell that does not exist. This can happen if rows or columns referenced by the function are deleted. |
| #DIV/0! | A number is being divided by zero within the function. |
| #NAME? | The function name is not recognized by the spreadsheet program. This suggests that `REGISTER.ID` may not be a built-in function of your spreadsheet software. |

### Best practices

> 1. Always check the compatibility of the `REGISTER.ID` function with your spreadsheet software. It may not be available or may work differently in different software.
> 2. Ensure that the cells referenced by the `REGISTER.ID` function contain the expected data types to avoid errors.
> 3. Avoid dividing by zero in any calculations within the function to prevent the #DIV/0! error.
> 4. Remember to update the function references if you delete or move rows or columns in your spreadsheet to avoid the #REF! error.

### Usage

A few examples using the REGISTER.ID function.

```
REGISTER.ID("Customer") returns "CUS1024"  
REGISTER.ID("Order") returns "ORD1025"  
REGISTER.ID("Product") returns "PROD1026"  
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
        "Entity Type",
        "Generated ID"
    ],
    [
        "Customer",
        "=REGISTER.ID(A2)"
    ],
    [
        "Order",
        "=REGISTER.ID(A3)"
    ],
    [
        "Product",
        "=REGISTER.ID(A4)"
    ],
    [
        "Invoice",
        "=REGISTER.ID(A5)"
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
        "Entity Type",
        "Generated ID"
    ],
    [
        "Customer",
        "=REGISTER.ID(A2)"
    ],
    [
        "Order",
        "=REGISTER.ID(A3)"
    ],
    [
        "Product",
        "=REGISTER.ID(A4)"
    ],
    [
        "Invoice",
        "=REGISTER.ID(A5)"
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
        "Entity Type",
        "Generated ID"
    ],
    [
        "Customer",
        "=REGISTER.ID(A2)"
    ],
    [
        "Order",
        "=REGISTER.ID(A3)"
    ],
    [
        "Product",
        "=REGISTER.ID(A4)"
    ],
    [
        "Invoice",
        "=REGISTER.ID(A5)"
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
        "Entity Type",
        "Generated ID"
    ],
    [
        "Customer",
        "=REGISTER.ID(A2)"
    ],
    [
        "Order",
        "=REGISTER.ID(A3)"
    ],
    [
        "Product",
        "=REGISTER.ID(A4)"
    ],
    [
        "Invoice",
        "=REGISTER.ID(A5)"
    ]
]
            }]
        });
    }
}
```

