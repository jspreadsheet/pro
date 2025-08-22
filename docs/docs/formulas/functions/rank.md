title: RANK function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RANK function in Jspreadsheet

# RANK function



The `RANK` function in Jspreadsheet Formulas Pro is a tool that helps you determine the position of a specific number within a set of numbers. Essentially, it evaluates the size of a number in comparison to other numbers in the list. If identical values appear, they're all given the highest possible rank, with the subsequent rank or ranks being omitted. It's a great way to quickly compare values within a large dataset.

## Documentation

Returns the rank of a number in a list of numbers. The rank of a number is its size relative to other values in a list. If two or more values have the same rank, the highest rank is assigned to all of them and the next rank(s) is skipped.

### Category

Compatibility

### Syntax

RANK(number,ref,[order])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number whose rank is to be found. |
| `ref` | An array or range of numbers representing the list of numbers. |
| `[order]` | A number indicating how to rank the number: 0 (or omitted) for descending order, 1 for ascending order. |


### Behavior

The `RANK` function in a spreadsheet is used to rank a specific number against a list of numbers. Its behavior is as follows:

- It takes two to three arguments: the number to be ranked, the array or range of numbers, and an optional argument specifying ascending or descending order.
- If the third argument is omitted or is 0, `RANK` ranks in descending order (the largest number gets the rank of 1). If the third argument is any non-zero value, `RANK` ranks in ascending order (the smallest number gets the rank of 1).
- If the number to be ranked is not found in the array or range, `RANK` returns a #N/A error.
- If the array or range contains text, boolean values, or empty cells, these values are ignored by `RANK`.
- If there are duplicate values in the array or range, `RANK` will assign them the same rank, but will skip the next rank(s). For example, if two numbers are ranked 1, the next number will be ranked 3.
- If an array formula is used, `RANK` will return an array of ranks for each number in the array.

### Common Errors

| Error | Description |
|---|---|
| #N/A | This error occurs if the number to be ranked is not found in the array or range. |
| #VALUE! | This error occurs if the first argument is not a number, or if the second argument is not a valid range or array. |
| #NUM! | This error occurs if the third argument is not a valid number. |

### Best practices

> - Always ensure that the number to be ranked is present in the array or range to avoid the #N/A error.
> - Be aware that `RANK` ignores text, boolean values, and empty cells in the range or array. If your data set includes these types of values, you may need to clean or filter your data before using `RANK`.
> - Use the third argument to specify whether you want to rank in ascending or descending order. Remember that if this argument is omitted or is 0, `RANK` will rank in descending order.
> - If your data set contains duplicate values, be aware that `RANK` will assign them the same rank and skip the next rank(s). If you want to assign distinct ranks to duplicate values, consider using `RANK.AVG` or `RANK.EQ` instead.

### Usage

A few examples using the RANK function.

```
RANK(2,A1:A10)  
RANK(90,A1:A10,1)  
RANK(B1,A1:A10)  
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
        "Student",
        "Score",
        "Rank"
    ],
    [
        "Alice",
        85,
        "=RANK(B2,B$2:B$6,0)"
    ],
    [
        "Bob",
        92,
        "=RANK(B3,B$2:B$6,0)"
    ],
    [
        "Carol",
        78,
        "=RANK(B4,B$2:B$6,0)"
    ],
    [
        "David",
        92,
        "=RANK(B5,B$2:B$6,0)"
    ],
    [
        "Emma",
        88,
        "=RANK(B6,B$2:B$6,0)"
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
        "Student",
        "Score",
        "Rank"
    ],
    [
        "Alice",
        85,
        "=RANK(B2,B$2:B$6,0)"
    ],
    [
        "Bob",
        92,
        "=RANK(B3,B$2:B$6,0)"
    ],
    [
        "Carol",
        78,
        "=RANK(B4,B$2:B$6,0)"
    ],
    [
        "David",
        92,
        "=RANK(B5,B$2:B$6,0)"
    ],
    [
        "Emma",
        88,
        "=RANK(B6,B$2:B$6,0)"
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
        "Student",
        "Score",
        "Rank"
    ],
    [
        "Alice",
        85,
        "=RANK(B2,B$2:B$6,0)"
    ],
    [
        "Bob",
        92,
        "=RANK(B3,B$2:B$6,0)"
    ],
    [
        "Carol",
        78,
        "=RANK(B4,B$2:B$6,0)"
    ],
    [
        "David",
        92,
        "=RANK(B5,B$2:B$6,0)"
    ],
    [
        "Emma",
        88,
        "=RANK(B6,B$2:B$6,0)"
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
        "Student",
        "Score",
        "Rank"
    ],
    [
        "Alice",
        85,
        "=RANK(B2,B$2:B$6,0)"
    ],
    [
        "Bob",
        92,
        "=RANK(B3,B$2:B$6,0)"
    ],
    [
        "Carol",
        78,
        "=RANK(B4,B$2:B$6,0)"
    ],
    [
        "David",
        92,
        "=RANK(B5,B$2:B$6,0)"
    ],
    [
        "Emma",
        88,
        "=RANK(B6,B$2:B$6,0)"
    ]
]
            }]
        });
    }
}
```

