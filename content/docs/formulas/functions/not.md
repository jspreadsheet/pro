title: NOT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NOT function in Jspreadsheet

# NOT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `NOT` function in Jspreadsheet Formulas Pro is a logical function that provides the inverse of a given value. In simpler terms, it will give you 'true' if your input is 'false', and vice versa. This is especially useful in conditional operations where you wish to reverse a logical or boolean condition. It helps in creating more complex formulas, enhancing the versatility of your spreadsheet tasks.

## Documentation

Returns the opposite of a logical value, i.e., returns true if the value is false, and false if the value is true.

### Category

Logical

### Syntax

NOT(logical)

| Parameter | Description |
| ----------- | ------------- |
| `logical` | The logical value to negate. |


### Behavior

The 'NOT' function in spreadsheets is a logical function that returns the opposite of a given logical or Boolean value. If the given value is TRUE, it returns FALSE, and if the given value is FALSE, it returns TRUE. Here's how it handles different types of inputs:

- Empty cells: The 'NOT' function treats empty cells as zero. Hence, it will return TRUE, since zero is equivalent to FALSE in a logical context.

- Text: Non-numeric strings are considered as logical errors in the 'NOT' function. Hence, it will return an error.

- Booleans: The 'NOT' function will simply return the opposite of the given Boolean value. For example, if the input is TRUE, it will return FALSE and vice versa.

- Errors: If the 'NOT' function is applied to a cell that contains an error, it will also return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs when the 'NOT' function is given a non-numeric string as its input. |
| #REF! | This error occurs when the 'NOT' function is given a cell reference that does not exist. |
| #NAME? | This error occurs when the 'NOT' function is misspelled or not recognized by the spreadsheet program. |

### Best practices

> - Always ensure that the input for the 'NOT' function is a logical or Boolean value to avoid errors.
> - Be careful with empty cells, as they are treated as FALSE by the 'NOT' function.
> - Use the 'NOT' function when you want to reverse the logic of a given condition.
> - For complex logical tests, consider combining the 'NOT' function with other logical functions like 'AND' and 'OR'.

### Usage

A few examples using the NOT function.

```
NOT(true) returns false  
NOT(false) returns true  
NOT(5>10) returns true  
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
        "Task Completed",
        "Status",
        "Needs Action"
    ],
    [
        true,
        "Done",
        "=NOT(A2)"
    ],
    [
        false,
        "Pending",
        "=NOT(A3)"
    ],
    [
        true,
        "Complete",
        "=NOT(A4)"
    ],
    [
        false,
        "In Progress",
        "=NOT(A5)"
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
        "Task Completed",
        "Status",
        "Needs Action"
    ],
    [
        true,
        "Done",
        "=NOT(A2)"
    ],
    [
        false,
        "Pending",
        "=NOT(A3)"
    ],
    [
        true,
        "Complete",
        "=NOT(A4)"
    ],
    [
        false,
        "In Progress",
        "=NOT(A5)"
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
        "Task Completed",
        "Status",
        "Needs Action"
    ],
    [
        true,
        "Done",
        "=NOT(A2)"
    ],
    [
        false,
        "Pending",
        "=NOT(A3)"
    ],
    [
        true,
        "Complete",
        "=NOT(A4)"
    ],
    [
        false,
        "In Progress",
        "=NOT(A5)"
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
        "Task Completed",
        "Status",
        "Needs Action"
    ],
    [
        true,
        "Done",
        "=NOT(A2)"
    ],
    [
        false,
        "Pending",
        "=NOT(A3)"
    ],
    [
        true,
        "Complete",
        "=NOT(A4)"
    ],
    [
        false,
        "In Progress",
        "=NOT(A5)"
    ]
]
            }]
        });
    }
}
```

