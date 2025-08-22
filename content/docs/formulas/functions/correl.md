title: CORREL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CORREL function in Jspreadsheet

# CORREL function

`PRO`{.jtag}

The `CORREL` function in Jspreadsheet Formulas Pro is a statistical tool used to determine the relationship between two sets of data. It returns a value called the correlation coefficient, which ranges from -1 to 1. A result of 1 indicates a strong positive relationship, -1 indicates a strong negative relationship, and 0 suggests no correlation. This can be useful in understanding how closely related your two data sets are.

## Documentation

Returns the correlation coefficient between two data sets.

### Category

Statistical

### Syntax

CORREL(array1, array2)

| Parameter | Description |
| ----------- | ------------- |
| `array1` | The first data set. An array or range of cells. |
| `array2` | The second data set. An array or range of cells. |


### Behavior

The 'CORREL' function in spreadsheets is used to find the correlation coefficient between two data sets. The function treats empty cells, text, or other non-numeric cells as zeros, providing it doesn't affect the correlation calculation. Boolean values are also treated as integers, with TRUE being 1 and FALSE being 0.

The function requires that the two data sets are of equal size. If they aren't, it will return an error. The function also requires that there are at least two pairs of data. If there is only one pair or none at all, it will also return an error. 

### Common Errors

| Error | Description |
|-------|-------------|
| #N/A  | This error occurs when the two arrays have different lengths. |
| #DIV/0! | This error is displayed when there is less than two pairs of data in the arrays. |
| #VALUE! | This error happens when non-numeric values exist in the array, and they affect the correlation calculation. |

### Best practices
> - Always ensure the two data sets are of the same size before using the 'CORREL' function to avoid errors.
> - Clean your data sets to remove or handle non-numeric values as they might affect your correlation results.
> - Use the 'CORREL' function to compare numerical variables. It's not suitable for comparing categorical variables.
> - Always interpret the result of the 'CORREL' function in the context of your data. A correlation of 0 doesn't necessarily mean there is no relationship, it could mean there is no linear relationship between your variables.

### Usage

A few examples using the CORREL function.

```
CORREL(A2:A10, B2:B10) returns the correlation coefficient between the values in cells A2 through A10 and B2 through B10  
CORREL(C5:C25, D5:D25) returns the correlation coefficient between the values in cells C5 through C25 and D5 through D25  
CORREL(A1:A1000, B1:B1000) returns the correlation coefficient between the values in cells A1 through A1000 and B1 through B1000  
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        90
    ],
    [
        "Correlation:",
        "=CORREL(A2:A5,B2:B5)"
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        90
    ],
    [
        "Correlation:",
        "=CORREL(A2:A5,B2:B5)"
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        90
    ],
    [
        "Correlation:",
        "=CORREL(A2:A5,B2:B5)"
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
        "Hours Studied",
        "Test Score"
    ],
    [
        2,
        65
    ],
    [
        4,
        75
    ],
    [
        6,
        85
    ],
    [
        8,
        90
    ],
    [
        "Correlation:",
        "=CORREL(A2:A5,B2:B5)"
    ]
]
            }]
        });
    }
}
```

