title: MAKEARRAY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MAKEARRAY function in Jspreadsheet

# MAKEARRAY function

`PRO`{.jtag}

The `MAKEARRAY` function in Jspreadsheet Formulas Pro is a tool that allows you to create an array, which is essentially a structured set of data, with dimensions that you specify. This means you can decide how many rows and columns your array should have. Additionally, you have the option to fill up this array with a certain value of your choice, or leave it empty. This function is particularly useful in handling and organizing large volumes of data.

## Documentation

Creates an array of specified dimensions and fills it with either a specified value or no value.

### Category

Logical

### Syntax

MAKEARRAY(rows, columns, function)

| Parameter | Description |
| ----------- | ------------- |
| `rows` | The number of rows in the array. |
| `columns` | The number of columns in the array. |
| `function` | The LAMBDA function to apply for generating the array values. |


### Behavior

The `MAKEARRAY` function in spreadsheets generates an array of specified dimensions, filled with a specific value or formula. Here are some behaviors to note:

1. **Empty Cells**: If the dimensions point to empty cells, `MAKEARRAY` will create an array filled with null values. The function does not automatically fill empty cells with a default value.

2. **Text**: `MAKEARRAY` can generate an array filled with text values if the value or formula argument is a text string.

3. **Booleans**: If the value or formula argument is a boolean (TRUE or FALSE), `MAKEARRAY` will create an array filled with that boolean value.

4. **Errors**: If the dimensions are not valid (e.g., negative numbers, non-integer values), or if the array size exceeds the limit of the spreadsheet software, `MAKEARRAY` will return an error.

5. **Numbers**: `MAKEARRAY` can generate an array filled with numeric values if the value or formula argument is a number.

### Common Errors

| Error Name | Description |
|------------|-------------|
| #VALUE!    | This error occurs if the dimensions provided are not valid (e.g., negative numbers, non-integer values).|
| #REF!      | This error occurs if the generated array exceeds the range limit of the spreadsheet software. |
| #NAME?     | This error occurs if the function name is misspelled or does not exist in the spreadsheet software.|

### Best practices

> Here are some best practices when using `MAKEARRAY` in spreadsheets:
>
>1. Always verify the dimensions you input to avoid generating arrays that exceed the size limit of your spreadsheet software.
>2. Use the `MAKEARRAY` function to initialize large arrays with a specific value or formula instead of filling them in manually.
>3. Be aware that `MAKEARRAY` will fill in empty cells with null values. If this is not desired, ensure you provide a value or formula argument.
>4. Use clear and descriptive names for the ranges you create with `MAKEARRAY` to make your spreadsheets easier to understand and maintain.

### Usage

A few examples using the MAKEARRAY function.

```
MAKEARRAY(3, 2, MyLambdaFunction) returns a 3x2 array by applying MyLambdaFunction to each element.  
MAKEARRAY(2, 2, AnotherLambda) returns a 2x2 array by applying AnotherLambda to each element.  
MAKEARRAY(4, 4, SomeOtherLambda) returns a 4x4 array by applying SomeOtherLambda to each element.  
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
        "Rows:",
        3,
        "Cols:",
        2
    ],
    [
        "Formula:",
        "=MAKEARRAY(A1,B1,LAMBDA(r,c,r*10+c))"
    ],
    [
        10,
        11
    ],
    [
        20,
        21
    ],
    [
        30,
        31
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
        "Rows:",
        3,
        "Cols:",
        2
    ],
    [
        "Formula:",
        "=MAKEARRAY(A1,B1,LAMBDA(r,c,r*10+c))"
    ],
    [
        10,
        11
    ],
    [
        20,
        21
    ],
    [
        30,
        31
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
        "Rows:",
        3,
        "Cols:",
        2
    ],
    [
        "Formula:",
        "=MAKEARRAY(A1,B1,LAMBDA(r,c,r*10+c))"
    ],
    [
        10,
        11
    ],
    [
        20,
        21
    ],
    [
        30,
        31
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
        "Rows:",
        3,
        "Cols:",
        2
    ],
    [
        "Formula:",
        "=MAKEARRAY(A1,B1,LAMBDA(r,c,r*10+c))"
    ],
    [
        10,
        11
    ],
    [
        20,
        21
    ],
    [
        30,
        31
    ]
]
            }]
        });
    }
}
```

