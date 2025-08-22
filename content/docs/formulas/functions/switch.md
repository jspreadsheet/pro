title: SWITCH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SWITCH function in Jspreadsheet

# SWITCH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `SWITCH` function is used to evaluate a specific expression against a set of predefined cases. After analyzing, it provides an output that corresponds to the first case that matches the expression. Think of it as a road with multiple paths, where the function directs the program down the path that matches the conditions of the expression. This is a useful tool to simplify your coding process when working with multiple conditions.

## Documentation

Evaluates an expression against a list of cases and returns the result corresponding to the first matching case.

### Category

Logical

### Syntax

SWITCH(expression, value1, result1, [value2], [result2], ... [default])

| Parameter | Description |
| ----------- | ------------- |
| `expression` | The expression or value to evaluate. |
| `value1` | The first value to compare with the expression. |
| `result1` | The result to return if the expression matches the first value. |
| `valueN` | Optional. Additional values to compare with the expression. |
| `resultN` | Optional. Additional results to return if the expression matches the corresponding value. |
| `default` | Optional. If specified, the default result to return if none of the values match the expression. If omitted and no match is found, #N/A error is returned. |


### Behavior

The `SWITCH` function in spreadsheet evaluates an expression against a list of values and returns a result corresponding to the first matching value. If there is no match, an optional default value may be returned. 

- Empty Cells: If the `SWITCH` function evaluates an empty cell, it treats it as an empty string (`""`). If there's a corresponding case for an empty string, it will return the associated value.

- Text: The `SWITCH` function can evaluate text. If the text matches a case, it will return the associated value.

- Booleans: Boolean values (`TRUE` and `FALSE`) can also be evaluated in the `SWITCH` function. They are treated as `1` and `0` respectively.

- Errors: If the `SWITCH` function cannot find a match and no default value is provided, it will return an error (`#N/A`).

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | The `SWITCH` function returns this error if no match is found and no default value is provided |
| #VALUE! | This error occurs if the first argument to `SWITCH` is not a scalar (a single value). |

### Best practices

> - Always provide a default value in your `SWITCH` function to handle cases when there is no matching case-value pair. This helps to avoid `#N/A` errors.
> - The `SWITCH` function can only perform exact matches. If you need partial matches or complex criteria, consider using other functions like `VLOOKUP`, `HLOOKUP`, or `INDEX` and `MATCH`.
> - Keep the case-value pairs in the `SWITCH` function as simple and as clear as possible. This makes your formula easier to understand and debug.
> - Be aware that `SWITCH` is case-sensitive. It treats lowercase and uppercase text as different values.

### Usage

A few examples using the SWITCH function.

```
SWITCH(A2, 1, "one", 2, "two", 3, "three", "other") evaluates the value in cell A2 and returns "one" if it's 1, "two" if it's 2, "three" if it's 3, or "other" if it's something else.  
SWITCH(B2, "apples", 1, "pears", 2, "bananas", 3, 0) evaluates the value in cell B2 and returns 1 if it's "apples", 2 if it's "pears", 3 if it's "bananas", or 0 if it's something else.  
SWITCH(C2, 1, "yes", 0, "no", "unknown") evaluates the value in cell C2 and returns "yes" if it's 1, "no" if it's 0, or "unknown" if it's something else.  
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
        "Product Code",
        "Category",
        "Product Name"
    ],
    [
        1,
        "=SWITCH(A2, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A2, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        2,
        "=SWITCH(A3, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A3, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        3,
        "=SWITCH(A4, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A4, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        5,
        "=SWITCH(A5, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A5, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
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
        "Product Code",
        "Category",
        "Product Name"
    ],
    [
        1,
        "=SWITCH(A2, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A2, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        2,
        "=SWITCH(A3, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A3, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        3,
        "=SWITCH(A4, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A4, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        5,
        "=SWITCH(A5, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A5, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
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
        "Product Code",
        "Category",
        "Product Name"
    ],
    [
        1,
        "=SWITCH(A2, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A2, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        2,
        "=SWITCH(A3, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A3, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        3,
        "=SWITCH(A4, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A4, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        5,
        "=SWITCH(A5, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A5, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
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
        "Product Code",
        "Category",
        "Product Name"
    ],
    [
        1,
        "=SWITCH(A2, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A2, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        2,
        "=SWITCH(A3, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A3, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        3,
        "=SWITCH(A4, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A4, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ],
    [
        5,
        "=SWITCH(A5, 1, \"Electronics\", 2, \"Clothing\", 3, \"Books\", \"Other\")",
        "=SWITCH(A5, 1, \"Laptop\", 2, \"T-Shirt\", 3, \"Novel\", \"Unknown\")"
    ]
]
            }]
        });
    }
}
```

