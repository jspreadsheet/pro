title: TABLE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TABLE function in Jspreadsheet

# TABLE function

`PRO`{.jtag}

The TABLE function is a unique feature found only in Jspreadsheet Formulas Pro, a powerful spreadsheet software. This function allows you to retrieve the Jspreadsheet object instance. In simple terms, it helps you to access and interact with the data stored in your spreadsheet, allowing for more dynamic and flexible data management. It is a crucial tool that provides the foundation for many other operations within Jspreadsheet.

## Documentation

The TABLE function is exclusive to jspreadsheet and returns the jspreadsheet object instance.

### Category

Jspreadsheet

### Syntax

TABLE()

| Parameter | Description |
| ----------- | ------------- |


### Behavior

The `TABLE` function in spreadsheets is used to create structured references by turning a range of cells into a data table which can be sorted, filtered, and formatted independently from other data in a worksheet. Below are some behaviors to expect when using `TABLE`:

- **Empty Cells**: The `TABLE` function does not automatically handle empty cells. It will include them as part of the table, but may not function optimally if these cells are not filled. It's advisable to clean your data before creating a table.
  
- **Text**: The `TABLE` function handles text without any issues. It treats each unique text entry as a separate category within the table.

- **Booleans**: Booleans are treated as individual categories within the table, similar to how text is treated.

- **Errors**: If there are errors within the cells that are part of the table, they will be included in the table. This might result in incorrect calculations or filtering. It's advisable to rectify any errors before creating the table.

### Common Errors

| Error Name   | Description   |
|--------------|---------------|
| #REF! | This error occurs when the reference in the formula is no longer valid. This could be due to deleted data, moved tables, etc. |
| #VALUE! | This error happens when the type of input parameters do not match the expected ones. |
| #NAME? | This error happens when the spreadsheet does not recognize the table name. This could be due to spelling errors, or if the table does not exist. |
| #NULL! | This error occurs when two areas in a formula don't intersect, or when incorrect range operator is used. |

### Best Practices

> - Before creating a table, ensure your dataset is clean and free from errors or inconsistencies that might affect the table's functionality.
> - Always provide a unique and meaningful name to your table. This makes it easier to reference it in other parts of your spreadsheet.
> - Regularly check and update your table references if the data in your table changes.
> - Use structured references instead of cell references for easier reading and understanding of formulas.

### Usage

A few examples using the TABLE function.

```
TABLE() returns the jspreadsheet object instance.  
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
        "Name",
        "Score",
        "Table Object"
    ],
    [
        "Alice",
        85,
        "=TABLE()"
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
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
        "Name",
        "Score",
        "Table Object"
    ],
    [
        "Alice",
        85,
        "=TABLE()"
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
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
        "Name",
        "Score",
        "Table Object"
    ],
    [
        "Alice",
        85,
        "=TABLE()"
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
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
        "Name",
        "Score",
        "Table Object"
    ],
    [
        "Alice",
        85,
        "=TABLE()"
    ],
    [
        "Bob",
        92
    ],
    [
        "Carol",
        78
    ]
]
            }]
        });
    }
}
```

