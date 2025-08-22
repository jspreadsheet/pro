title: MODE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MODE function in Jspreadsheet

# MODE function

`PRO`{.jtag}

The `MODE` function in Jspreadsheet Formulas Pro is a handy tool that allows you to find the value that appears most frequently in a set of data. Essentially, it helps you identify the most common value. To use it, you simply need to select the range of data you want to analyze. If no value repeats, the function will return an error, as there's no mode.

## Documentation

Returns the most frequently occurring value in a range of data.

### Category

Compatibility

### Syntax

MODE(number1, [number2],...)

| Parameter | Description |
| ----------- | ------------- |
| `number` | The first number or range of numbers for which you want to find the mode. You can also enter up to 255 additional numbers or ranges. |
| `numberN` | The nth number or range of numbers for which you want to find the mode. You can also enter up to 255 additional numbers or ranges. |


### Behavior

The 'MODE' function in spreadsheets is used to find the most frequently occurring number in a data set. This function ignores empty cells, text, and boolean values. The 'MODE' function treats errors present in the range as errors. If there are no duplicate numbers (i.e. all the numbers occur only once) or if the data set only consists of text, boolean values, or empty cells, the 'MODE' function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #N/A  | This error is returned if there are no duplicate numbers in the range (i.e., all numbers occur only once), or if the data set only contains text, boolean values, or empty cells. |
| #VALUE! | This error is returned if the supplied argument is non-numeric. |
| #REF! | This error is returned if the given cell reference is not valid. |

### Best practices

> - Ensure that the data set contains at least one duplicate number for the 'MODE' function to work correctly.
> - Avoid using non-numeric data in the range that the 'MODE' function is being applied to avoid unnecessary errors.
> - Use error handling functions like 'IFERROR' to handle errors and prevent them from disrupting the rest of your spreadsheet.
> - While working with large data sets, consider sorting your data first. This could potentially make it easier to identify the mode if the 'MODE' function returns an error.

### Usage

A few examples using the MODE function.

```
MODE(1,2,2,3,4,4,4,5) returns 4  
MODE(A1:A10) returns the most frequently occurring value in the range A1 through A10  
MODE(B1:B12,C1:C12) returns the most frequently occurring value in the ranges B1:B12 and C1:C12  
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
        "Survey Responses",
        "Department",
        "Most Common Response"
    ],
    [
        3,
        "Sales",
        "=MODE(A2:A6)"
    ],
    [
        5,
        "Marketing"
    ],
    [
        3,
        "IT"
    ],
    [
        4,
        "Sales"
    ],
    [
        3,
        "HR"
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
        "Survey Responses",
        "Department",
        "Most Common Response"
    ],
    [
        3,
        "Sales",
        "=MODE(A2:A6)"
    ],
    [
        5,
        "Marketing"
    ],
    [
        3,
        "IT"
    ],
    [
        4,
        "Sales"
    ],
    [
        3,
        "HR"
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
        "Survey Responses",
        "Department",
        "Most Common Response"
    ],
    [
        3,
        "Sales",
        "=MODE(A2:A6)"
    ],
    [
        5,
        "Marketing"
    ],
    [
        3,
        "IT"
    ],
    [
        4,
        "Sales"
    ],
    [
        3,
        "HR"
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
        "Survey Responses",
        "Department",
        "Most Common Response"
    ],
    [
        3,
        "Sales",
        "=MODE(A2:A6)"
    ],
    [
        5,
        "Marketing"
    ],
    [
        3,
        "IT"
    ],
    [
        4,
        "Sales"
    ],
    [
        3,
        "HR"
    ]
]
            }]
        });
    }
}
```

