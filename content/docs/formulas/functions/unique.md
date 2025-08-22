title: UNIQUE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the UNIQUE function in Jspreadsheet

# UNIQUE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `UNIQUE` function in Jspreadsheet Formulas Pro is a handy tool that provides you with a list of distinct elements from a certain range or array. This means that if you have a column or row with repeated values, using this function will filter out the duplicates and only show each value once. For instance, if you have a list of student names with some names appearing more than once, the `UNIQUE` function will generate a new list with each student's name appearing only once. It's a simple and effective way to manage and organize your data.

## Documentation

Returns a list of unique values in a range or array.

### Category

Lookup and reference

### Syntax

UNIQUE(array, [by_col], [exactly_once])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The range or array from which to return unique values. |
| `[by_col]` | A logical value that specifies how to compare. If TRUE or omitted, the function compares each column as a separate group. If FALSE, the function compares each row as a separate group. |
| `[exactly_once]` | A logical value that specifies whether to return only values that appear exactly once in the source range or array. If TRUE, only unique values are returned. If omitted or FALSE, all values are returned. |


### Behavior

The `UNIQUE` function in spreadsheets extracts a list of unique values from a range or array. This function is very useful for removing duplicate entries from a list. The behavior of the `UNIQUE` function is as follows:

- If the range or array is empty, `UNIQUE` returns an error.
- If there are text values in the range or array, `UNIQUE` will include them in the returned array.
- If there are boolean values in the range or array, `UNIQUE` will include them in the returned array.
- If there are error values in the range or array, `UNIQUE` will include them in the returned array.
- `UNIQUE` function is case-sensitive, meaning it treats lowercase and uppercase versions of the same character as different.
- `UNIQUE` function ignores cell formatting and only considers the raw data in cells.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | This error occurs when the `UNIQUE` function cannot find any unique values in the range or array. |
| #VALUE! | This error occurs when the `UNIQUE` function receives an inappropriate argument. |
| #REF! | This error occurs when the `UNIQUE` function refers to a cell that is not valid. |
| #NUM! | This error occurs when the `UNIQUE` function encounters a numerical value that it cannot process. |

### Best practices

> - Always ensure that the range or array you provide to the `UNIQUE` function contains valid data. The function will not work properly if the range or array contains inappropriate values.
> - When using the `UNIQUE` function, remember that it is case-sensitive. If you want to treat lowercase and uppercase versions of the same character as the same, you may need to use another function to convert all characters to the same case before using `UNIQUE`.
> - Be cautious when using the `UNIQUE` function with large ranges or arrays. The function can be slow and may cause performance issues if the range or array is extremely large.
> - Always check the output of the `UNIQUE` function. If the function returns an error, you will need to troubleshoot to determine the cause of the error.

### Usage

A few examples using the UNIQUE function.

```
UNIQUE(A1:A10) returns a list of unique values in the range A1:A10  
UNIQUE(A1:B10, TRUE, TRUE) returns a list of unique values by column that appear exactly once in the range A1:B10  
UNIQUE([1,2,3;1,4,5;6,7,8]) returns [1,2,3,4,5,6,7,8]  
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
        "Employee",
        "Department"
    ],
    [
        "John",
        "Sales"
    ],
    [
        "Mary",
        "HR"
    ],
    [
        "John",
        "Sales"
    ],
    [
        "Bob",
        "IT"
    ],
    [
        "Mary",
        "HR"
    ],
    [
        "Sue",
        "IT"
    ],
    [
        "=UNIQUE(A2:B7)"
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
        "Employee",
        "Department"
    ],
    [
        "John",
        "Sales"
    ],
    [
        "Mary",
        "HR"
    ],
    [
        "John",
        "Sales"
    ],
    [
        "Bob",
        "IT"
    ],
    [
        "Mary",
        "HR"
    ],
    [
        "Sue",
        "IT"
    ],
    [
        "=UNIQUE(A2:B7)"
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
        "Employee",
        "Department"
    ],
    [
        "John",
        "Sales"
    ],
    [
        "Mary",
        "HR"
    ],
    [
        "John",
        "Sales"
    ],
    [
        "Bob",
        "IT"
    ],
    [
        "Mary",
        "HR"
    ],
    [
        "Sue",
        "IT"
    ],
    [
        "=UNIQUE(A2:B7)"
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
        "Employee",
        "Department"
    ],
    [
        "John",
        "Sales"
    ],
    [
        "Mary",
        "HR"
    ],
    [
        "John",
        "Sales"
    ],
    [
        "Bob",
        "IT"
    ],
    [
        "Mary",
        "HR"
    ],
    [
        "Sue",
        "IT"
    ],
    [
        "=UNIQUE(A2:B7)"
    ]
]
            }]
        });
    }
}
```

