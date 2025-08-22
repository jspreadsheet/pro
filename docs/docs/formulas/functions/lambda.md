title: LAMBDA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the LAMBDA function in Jspreadsheet

# LAMBDA function

`PRO`{.jtag}

The `LAMBDA` function in Jspreadsheet Formulas Pro lets you create your very own unique functions using a concept called lambda expressions. Think of lambda expressions as a shorter, more compact way of creating functions that don't have a specific name. This function gives you the flexibility to design and write your own operations, tailored to your specific needs in your Jspreadsheet projects.

## Documentation

Allows you to define your own custom functions using a lambda expression, which is a shorthand way of defining anonymous functions.

### Category

Logical

### Syntax

LAMBDA(parameter1, [parameterN], expression)

| Parameter | Description |
| ----------- | ------------- |
| `parameter1` | The name of parameter to be defined in the function. |
| `[parameterN]` | Optional. The nth name to define a parameter inside the function. |
| `expression` | The expression that defines the function, can use the specified parameters. |


### Behavior

The `LAMBDA` function in spreadsheets allows users to define custom functions using the Excel formula language. Here's how it handles different inputs:

1. Empty Cells: If the lambda function is expected to perform operations on empty cells, it might return an error depending on the operation. It's better to handle such cases within the lambda function.

2. Text: The `LAMBDA` function can operate on text based on the operations defined within the function. However, if it's expected to perform numerical operations on text data, it might return an error.

3. Booleans: `LAMBDA` can handle boolean values if the operations within the function are defined to work with booleans.

4. Errors: If there are errors in the operations defined within the `LAMBDA` function or in its inputs, it will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs if one or more of the arguments for the function are not the correct type. |
| `#NAME?` | This error occurs if Excel doesn't recognize the text in a formula. For example, the function name is misspelled. |
| `#CALC!` | This error occurs if the custom function defined by `LAMBDA` is causing a circular reference. |
| `#REF!` | This error occurs if the LAMBDA function refers to a cell that is not valid. |

### Best practices
> 1. Always define your `LAMBDA` functions with clear, descriptive names to make your formulas easier to read and understand.
> 2. When defining a `LAMBDA` function, make sure it handles all possible input types that it might receive to prevent errors.
> 3. Avoid creating overly complex `LAMBDA` functions. If a function is becoming too complex, consider splitting it into several smaller functions.
> 4. Always test your `LAMBDA` functions with a variety of inputs to ensure they work as expected before using them in your actual spreadsheet calculations.

### Usage

A few examples using the LAMBDA function.

```
LAMBDA(x, y, x^2 + y^2) defines a custom function that takes two parameters (x and y) and returns their sum of squares  
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
        "X Value",
        "Y Value",
        "Sum of Squares"
    ],
    [
        3,
        4,
        "=LAMBDA(x,y,x^2+y^2)(A2,B2)"
    ],
    [
        5,
        12,
        "=LAMBDA(x,y,x^2+y^2)(A3,B3)"
    ],
    [
        8,
        6,
        "=LAMBDA(x,y,x^2+y^2)(A4,B4)"
    ],
    [
        2,
        7,
        "=LAMBDA(x,y,x^2+y^2)(A5,B5)"
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
        "X Value",
        "Y Value",
        "Sum of Squares"
    ],
    [
        3,
        4,
        "=LAMBDA(x,y,x^2+y^2)(A2,B2)"
    ],
    [
        5,
        12,
        "=LAMBDA(x,y,x^2+y^2)(A3,B3)"
    ],
    [
        8,
        6,
        "=LAMBDA(x,y,x^2+y^2)(A4,B4)"
    ],
    [
        2,
        7,
        "=LAMBDA(x,y,x^2+y^2)(A5,B5)"
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
        "X Value",
        "Y Value",
        "Sum of Squares"
    ],
    [
        3,
        4,
        "=LAMBDA(x,y,x^2+y^2)(A2,B2)"
    ],
    [
        5,
        12,
        "=LAMBDA(x,y,x^2+y^2)(A3,B3)"
    ],
    [
        8,
        6,
        "=LAMBDA(x,y,x^2+y^2)(A4,B4)"
    ],
    [
        2,
        7,
        "=LAMBDA(x,y,x^2+y^2)(A5,B5)"
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
        "X Value",
        "Y Value",
        "Sum of Squares"
    ],
    [
        3,
        4,
        "=LAMBDA(x,y,x^2+y^2)(A2,B2)"
    ],
    [
        5,
        12,
        "=LAMBDA(x,y,x^2+y^2)(A3,B3)"
    ],
    [
        8,
        6,
        "=LAMBDA(x,y,x^2+y^2)(A4,B4)"
    ],
    [
        2,
        7,
        "=LAMBDA(x,y,x^2+y^2)(A5,B5)"
    ]
]
            }]
        });
    }
}
```

