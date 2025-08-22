title: PERCENTRANK.INC function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the PERCENTRANK.INC function in Jspreadsheet

# PERCENTRANK.INC function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `PERCENTRANK.INC` function in Jspreadsheet Formulas Pro is a handy tool that allows you to determine the relative standing of a specific value within a given set of data. It does this by providing the rank of the value as a percentage, ranging from 0 to 1, inclusive. This means that a result of 0 indicates the lowest value in the set, while a result of 1 signifies the highest. This function can be incredibly useful when you need to understand the position of a specific value in relation to the rest of the data set.

## Documentation

Returns the rank of a value in a data set as a percentage (0..1, inclusive) of the data set.

### Category

Statistical

### Syntax

PERCENTRANK.INC(array, x, [significance])

| Parameter | Description |
| ----------- | ------------- |
| `array` | The array or range of data that defines relative standing. |
| `x` | The value for which you want to know the rank. |
| `[significance]` | Optional. The number of significant digits for the returned percentage value. Defaults to 3. |


### Behavior

The `PERCENTRANK.INC` function in spreadsheets calculates the percentage rank (0..1, inclusive) of a specified value in a dataset. The function examines the entire dataset and determines where the specified value falls within that set in terms of percentage.

Here are some specific behaviors to note:

- Empty cells: These are ignored by `PERCENTRANK.INC`.
- Text: If the dataset contains text, `PERCENTRANK.INC` will return an error.
- Booleans: Boolean values are not applicable in `PERCENTRANK.INC` as it requires numeric inputs.
- Errors: If the dataset contains error values, `PERCENTRANK.INC` will also return an error.
- Non-numeric value: If the input value is non-numeric, `PERCENTRANK.INC` will return an error.
- Single value in array: If the array contains only one value, `PERCENTRANK.INC` will return an error. The function requires at least two data points to calculate a percentage rank.

### Common Errors

| Error | Description |
|-------|-------------|
| #DIV/0! | Occurs when the function tries to divide by zero, which might happen if the array contains only one value. |
| #VALUE! | Occurs when the input value or values in the array are non-numeric or the array contains text. |
| #N/A | Occurs when the specified value does not exist in the dataset. |

### Best practices

> - Ensure that the dataset only contains numeric values as `PERCENTRANK.INC` cannot handle text or boolean values.
> - Avoid including error values in the dataset as it will cause the function to return an error.
> - Use a large enough dataset. Since `PERCENTRANK.INC` calculates a percentage rank, a dataset with only a few values may not yield meaningful results.
> - Always double-check your input value to ensure it exists within the dataset. If it doesn't, the function will return an error.

### Usage

A few examples using the PERCENTRANK.INC function.

```
PERCENTRANK.INC(A1:A10,B1) returns the rank of the value in B1 as a percentage of the values in A1 through A10  
PERCENTRANK.INC(C1:C5,20,2) returns the rank of the value 20 in the range C1 through C5 as a percentage with 2 significant digits  
PERCENTRANK.INC(D1:D100,50) returns the rank of the value 50 in the range D1 through D100 as a percentage  
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
        "Target Score",
        "Percentile Rank"
    ],
    [
        85,
        78,
        "=PERCENTRANK.INC(A2:A6,B2)"
    ],
    [
        92,
        85,
        "=PERCENTRANK.INC(A2:A6,B3)"
    ],
    [
        78,
        92,
        "=PERCENTRANK.INC(A2:A6,B4)"
    ],
    [
        88,
        95,
        "=PERCENTRANK.INC(A2:A6,B5)"
    ],
    [
        95
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
        "Target Score",
        "Percentile Rank"
    ],
    [
        85,
        78,
        "=PERCENTRANK.INC(A2:A6,B2)"
    ],
    [
        92,
        85,
        "=PERCENTRANK.INC(A2:A6,B3)"
    ],
    [
        78,
        92,
        "=PERCENTRANK.INC(A2:A6,B4)"
    ],
    [
        88,
        95,
        "=PERCENTRANK.INC(A2:A6,B5)"
    ],
    [
        95
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
        "Target Score",
        "Percentile Rank"
    ],
    [
        85,
        78,
        "=PERCENTRANK.INC(A2:A6,B2)"
    ],
    [
        92,
        85,
        "=PERCENTRANK.INC(A2:A6,B3)"
    ],
    [
        78,
        92,
        "=PERCENTRANK.INC(A2:A6,B4)"
    ],
    [
        88,
        95,
        "=PERCENTRANK.INC(A2:A6,B5)"
    ],
    [
        95
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
        "Target Score",
        "Percentile Rank"
    ],
    [
        85,
        78,
        "=PERCENTRANK.INC(A2:A6,B2)"
    ],
    [
        92,
        85,
        "=PERCENTRANK.INC(A2:A6,B3)"
    ],
    [
        78,
        92,
        "=PERCENTRANK.INC(A2:A6,B4)"
    ],
    [
        88,
        95,
        "=PERCENTRANK.INC(A2:A6,B5)"
    ],
    [
        95
    ]
]
            }]
        });
    }
}
```

