title: MODE.SNGL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MODE.SNGL function in Jspreadsheet

# MODE.SNGL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MODE.SNGL` function in Jspreadsheet Formulas Pro is a tool that helps you find the most common value within a set of data. This function scans through your selected data range and identifies the value that shows up the most. In cases where multiple values appear with the same frequency, `MODE.SNGL` will return the first value it encounters. This is a useful feature when you need to quickly analyze and summarize large amounts of data.

## Documentation

Returns the most frequently occurring value in a range of data. If multiple values occur equally frequently, the function returns the first one found.

### Category

Statistical

### Syntax

MODE.SNGL(number1,[numberN],...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number for which you want to find the mode. |
| `[numberN]` | Optional. The nth number for which you want to find the mode. You can also enter up to 255 additional numbers or ranges. |


### Behavior

The 'MODE.SNGL' function in a spreadsheet returns the most frequently occurring, or repetitive, value in an array or range of data. 

- If no duplicate values are found and all values occur only once, the function will return `#N/A` error.
- The function treats both empty cells and text as ignorable and does not consider them in the calculation.
- It does not recognize logical values and text representations of numbers as numbers, they are ignored.
- If an error exists in the provided array or range of cells, the function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | Occurs if no duplicates are found and all values in the data set occur only once. |
| #VALUE! | Occurs if the function is supplied with text data, for example, in case of typographical error in cell reference. |
| #NAME? | Occurs if the function name is misspelled or if incorrect function is used. |

### Best practices

> - Always make sure to use numeric values as arguments in the 'MODE.SNGL' function. Text, logical values, or empty cells will be ignored by the function.
> - Be careful with the dataset you are analyzing. If all values occur only once, the function will return an error.
> - Verify your data for any possible errors before using it in the 'MODE.SNGL' function. If the function encounters an error in the array or range of cells, it will return that error.
> - If there are multiple modes in a dataset, 'MODE.SNGL' will only return the first one. If you need to find all modes, consider using 'MODE.MULT' function.

### Usage

A few examples using the MODE.SNGL function.

```
MODE.SNGL(1,2,2,3,4,4,4,5) returns 4  
MODE.SNGL(A1:A10) returns the most frequently occurring value in the range A1 through A10  
MODE.SNGL(B1:B12,C1:C12) returns the most frequently occurring value in the ranges B1:B12 and C1:C12  
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
        "Student Scores",
        "Survey Ratings",
        "Mode of Scores"
    ],
    [
        85,
        4,
        "=MODE.SNGL(A2:A6)"
    ],
    [
        92,
        5,
        "=MODE.SNGL(B2:B6)"
    ],
    [
        78,
        4,
        "=MODE.SNGL(A2:A6,B2:B6)"
    ],
    [
        85,
        3
    ],
    [
        85,
        4
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
        "Student Scores",
        "Survey Ratings",
        "Mode of Scores"
    ],
    [
        85,
        4,
        "=MODE.SNGL(A2:A6)"
    ],
    [
        92,
        5,
        "=MODE.SNGL(B2:B6)"
    ],
    [
        78,
        4,
        "=MODE.SNGL(A2:A6,B2:B6)"
    ],
    [
        85,
        3
    ],
    [
        85,
        4
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
        "Student Scores",
        "Survey Ratings",
        "Mode of Scores"
    ],
    [
        85,
        4,
        "=MODE.SNGL(A2:A6)"
    ],
    [
        92,
        5,
        "=MODE.SNGL(B2:B6)"
    ],
    [
        78,
        4,
        "=MODE.SNGL(A2:A6,B2:B6)"
    ],
    [
        85,
        3
    ],
    [
        85,
        4
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
        "Student Scores",
        "Survey Ratings",
        "Mode of Scores"
    ],
    [
        85,
        4,
        "=MODE.SNGL(A2:A6)"
    ],
    [
        92,
        5,
        "=MODE.SNGL(B2:B6)"
    ],
    [
        78,
        4,
        "=MODE.SNGL(A2:A6,B2:B6)"
    ],
    [
        85,
        3
    ],
    [
        85,
        4
    ]
]
            }]
        });
    }
}
```

