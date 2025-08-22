title: TRUE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TRUE function in Jspreadsheet

# TRUE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TRUE` function in Jspreadsheet Formulas Pro is a simple but essential tool. It's used to return the logical value TRUE, which is essentially a confirmation or positive response within your spreadsheet. When you use `TRUE`, it indicates that a certain condition or criteria you specified has been met. It's a key part of logical operations and decision-making within your data analysis process.

## Documentation

Returns the logical value TRUE.

### Category

Logical

### Syntax

TRUE()

| Parameter | Description |
| ----------- | ------------- |


### Behavior

The `TRUE` function in spreadsheet software like Excel or Google Sheets is a logical function that returns the logical value `TRUE`. It does not require any arguments. Here are some behavior characteristics of this function:

- When you use `TRUE` in a formula, it will always return the boolean value `TRUE`.
- It doesn't process any input or arguments, so it doesn't matter if cells are empty, contain text, boolean values, or even errors. It will always return `TRUE`.
- It can be used in logical tests, comparisons, or conditions in formulas.

### Common Errors

| Error | Description |
|-------|-------------|
| #NAME? | This error occurs if the function is misspelled or does not exist in the software. Make sure you type `TRUE` correctly. |
| #VALUE! | This error should not occur with the `TRUE` function as it does not take any arguments. If you see this error, it's likely a problem with other parts of your formula. |

### Best practices

> - The `TRUE` function can be used directly in logical tests or conditions. However, it's often more useful to use logical expressions that return `TRUE` or `FALSE` based on specific conditions.
> - Avoid hardcoding `TRUE` in the formulas. Instead, consider using logical expressions or references to cells that contain boolean values.
> - Use the `TRUE` function to set default values in optional arguments of other functions. This can be useful when you want a function to behave in a certain way by default.
> - When using `TRUE` in logical expressions, remember that it's case-insensitive. However, it's a best practice to use uppercase to make it clear that it's a function and not a text string.

### Usage

A few examples using the TRUE function.

```
TRUE() returns TRUE  
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
        "Task Complete",
        "Pass/Fail",
        "Status"
    ],
    [
        "Setup database",
        "=TRUE()",
        "=IF(B2,\"PASSED\",\"FAILED\")"
    ],
    [
        "Run tests",
        "=TRUE()",
        "=IF(B3,\"PASSED\",\"FAILED\")"
    ],
    [
        "Deploy code",
        "=TRUE()",
        "=IF(B4,\"PASSED\",\"FAILED\")"
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
        "Task Complete",
        "Pass/Fail",
        "Status"
    ],
    [
        "Setup database",
        "=TRUE()",
        "=IF(B2,\"PASSED\",\"FAILED\")"
    ],
    [
        "Run tests",
        "=TRUE()",
        "=IF(B3,\"PASSED\",\"FAILED\")"
    ],
    [
        "Deploy code",
        "=TRUE()",
        "=IF(B4,\"PASSED\",\"FAILED\")"
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
        "Task Complete",
        "Pass/Fail",
        "Status"
    ],
    [
        "Setup database",
        "=TRUE()",
        "=IF(B2,\"PASSED\",\"FAILED\")"
    ],
    [
        "Run tests",
        "=TRUE()",
        "=IF(B3,\"PASSED\",\"FAILED\")"
    ],
    [
        "Deploy code",
        "=TRUE()",
        "=IF(B4,\"PASSED\",\"FAILED\")"
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
        "Task Complete",
        "Pass/Fail",
        "Status"
    ],
    [
        "Setup database",
        "=TRUE()",
        "=IF(B2,\"PASSED\",\"FAILED\")"
    ],
    [
        "Run tests",
        "=TRUE()",
        "=IF(B3,\"PASSED\",\"FAILED\")"
    ],
    [
        "Deploy code",
        "=TRUE()",
        "=IF(B4,\"PASSED\",\"FAILED\")"
    ]
]
            }]
        });
    }
}
```

