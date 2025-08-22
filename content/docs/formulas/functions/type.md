title: TYPE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TYPE function in Jspreadsheet

# TYPE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TYPE` function in Jspreadsheet Formulas Pro is a useful tool for identifying the type of data you're working with. It gives back a number that corresponds to the type of value you input. For instance, if you input text, it will return 2, if you input a logical value (true or false), it will return 4, and so on. This function is especially handy if you're working with a large dataset and need to quickly categorize or sort the data types.

## Documentation

Returns a number representing the data type of a value.

### Category

Information

### Syntax

TYPE(value)

| Parameter | Description |
| ----------- | ------------- |
| `value` | Value - the value for which you want to return the data type. Can be a reference to a cell containing a value. |


### Behavior

The 'TYPE' function in a spreadsheet is designed to return an integer which corresponds to the type of data in a specified cell. Here are some of the expected behaviors:

- The function treats empty cells as zero (0). 
- It considers text in a cell as a string, and returns 2.
- For boolean values, the function will return 4.
- In case of error values, it will return 16.
- For array or range of cells, it will return 64.
- Numbers in a cell will return 1.

### Common Errors

| Error | Description |
| --- | ----------- |
| #VALUE! | The function returns this error when the cell reference is invalid. |
| #REF! | This error appears if the function refers to a cell that isn't valid, such as a cell that has been deleted. |
| #N/A | This error typically occurs if there is no data in the cell that the function is trying to evaluate. |

### Best practices

> - Always ensure that the reference cell is valid to avoid errors.
> - Use the 'TYPE' function to quickly check the type of data in a cell especially when dealing with large datasets.
> - Remember that 'TYPE' function treats empty cells as zero (0). If this is not your intended result, consider using data validation or other checks to ensure cells are not left empty.
> - The 'TYPE' function can be used with IF statements to create more complex formulas based on the type of data in a cell.

### Usage

A few examples using the TYPE function.

```
TYPE("text") returns 2 (because "text" is a text string)  
TYPE(123) returns 1 (because 123 is a number)  
TYPE(TRUE) returns 4 (because TRUE is a Boolean value)  
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
        "Value",
        "Data Type",
        "Type Number"
    ],
    [
        "Hello World",
        "=TYPE(A2)",
        2
    ],
    [
        42.5,
        "=TYPE(A3)",
        1
    ],
    [
        true,
        "=TYPE(A4)",
        4
    ],
    [
        "2024-01-15",
        "=TYPE(A5)",
        2
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
        "Value",
        "Data Type",
        "Type Number"
    ],
    [
        "Hello World",
        "=TYPE(A2)",
        2
    ],
    [
        42.5,
        "=TYPE(A3)",
        1
    ],
    [
        true,
        "=TYPE(A4)",
        4
    ],
    [
        "2024-01-15",
        "=TYPE(A5)",
        2
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
        "Value",
        "Data Type",
        "Type Number"
    ],
    [
        "Hello World",
        "=TYPE(A2)",
        2
    ],
    [
        42.5,
        "=TYPE(A3)",
        1
    ],
    [
        true,
        "=TYPE(A4)",
        4
    ],
    [
        "2024-01-15",
        "=TYPE(A5)",
        2
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
        "Value",
        "Data Type",
        "Type Number"
    ],
    [
        "Hello World",
        "=TYPE(A2)",
        2
    ],
    [
        42.5,
        "=TYPE(A3)",
        1
    ],
    [
        true,
        "=TYPE(A4)",
        4
    ],
    [
        "2024-01-15",
        "=TYPE(A5)",
        2
    ]
]
            }]
        });
    }
}
```

