title: MODE.MULT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MODE.MULT function in Jspreadsheet

# MODE.MULT function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `MODE.MULT` function is used to identify the values that appear most frequently in a given set of data. This function will return an array showcasing these most common values. This can be particularly useful when analyzing large data sets, allowing you to quickly pinpoint the most recurring numbers or entries.

## Documentation

Returns an array of the most frequently occurring values in a range of data.

### Category

Statistical

### Syntax

MODE.MULT(number1,[number2],...)

| Parameter | Description |
| ----------- | ------------- |
| `number1` | The first number you want to find the mode. |
| `numberN` | The nth number you want to add to the array the mode will be calculated. |


### Behavior

The `MODE.MULT` function in spreadsheets is used to return vertical array of the most frequently occurring, or repetitive values in an array or range of data. Here's how it handles various data types:

- **Empty Cells**: The function ignores empty cells within the range of data.
- **Text**: The function is unable to process text, and will ignore cells containing text values unless they can be interpreted as numbers.
- **Booleans**: Boolean values are processed as numbers, with `TRUE` being interpreted as 1 and `FALSE` as 0.
- **Errors**: If an error occurs in one of the cells within the range of data, `MODE.MULT` will return that error.
- **Non-numeric Values**: Non-numeric values are ignored by the function.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | This error occurs when no duplicates are found in the array or range of data. The `MODE.MULT` function requires at least one pair of numbers that occur more than once. |
| #VALUE! | This error is returned if no numeric values are found in the array or range of data. |
| #ERROR! | This error is returned if an error occurs while processing the function, for example if an array or range of data contains an error. |

### Best practices

> - Always ensure that your data range or array contains at least one pair of duplicate numbers. Without this, the `MODE.MULT` function will return an error.
> - Be aware that the function will ignore any non-numeric values. If your data contains text that cannot be interpreted as a number, it will be overlooked by the function.
> - Use the `MODE.MULT` function when you want to find multiple modes within your dataset. If you only want to find a single mode, consider using the `MODE.SNGL` function instead.
> - Be cautious of boolean values in your data, as they will be interpreted as 1 (`TRUE`) and 0 (`FALSE`).

### Usage

A few examples using the MODE.MULT function.

```
MODE.MULT(1,2,2,3,4,4,4,5) returns [[2,4]]  
MODE.MULT(A1:A10) returns an array of the most frequently occurring values in the range A1 through A10  
MODE.MULT(B1:B12,C1:C12,D1:D8) returns an array of the most frequently occurring values in the ranges B1:B12, C1:C12, and D1:D8  
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
        "Ratings",
        "Scores"
    ],
    [
        3,
        4,
        3
    ],
    [
        4,
        3,
        4
    ],
    [
        3,
        4,
        3
    ],
    [
        5,
        3,
        4
    ],
    [
        4,
        4,
        3
    ],
    [
        "Most Frequent:",
        "=MODE.MULT(A2:C6)"
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
        "Ratings",
        "Scores"
    ],
    [
        3,
        4,
        3
    ],
    [
        4,
        3,
        4
    ],
    [
        3,
        4,
        3
    ],
    [
        5,
        3,
        4
    ],
    [
        4,
        4,
        3
    ],
    [
        "Most Frequent:",
        "=MODE.MULT(A2:C6)"
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
        "Ratings",
        "Scores"
    ],
    [
        3,
        4,
        3
    ],
    [
        4,
        3,
        4
    ],
    [
        3,
        4,
        3
    ],
    [
        5,
        3,
        4
    ],
    [
        4,
        4,
        3
    ],
    [
        "Most Frequent:",
        "=MODE.MULT(A2:C6)"
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
        "Ratings",
        "Scores"
    ],
    [
        3,
        4,
        3
    ],
    [
        4,
        3,
        4
    ],
    [
        3,
        4,
        3
    ],
    [
        5,
        3,
        4
    ],
    [
        4,
        4,
        3
    ],
    [
        "Most Frequent:",
        "=MODE.MULT(A2:C6)"
    ]
]
            }]
        });
    }
}
```

