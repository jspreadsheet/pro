title: RANK.AVG function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RANK.AVG function in Jspreadsheet

# RANK.AVG function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `RANK.AVG` function in Jspreadsheet Formulas Pro is a tool that helps you determine the position of a specific value within a dataset. If two or more values are the same, it gives them an average rank, instead of identical ranks. The ranking is done based on the order of numbers, where the highest value is ranked number 1. This function is particularly handy when you want to compare the significance of different numbers in a dataset.

## Documentation

Returns the rank of a specified value in a dataset, with ties receiving an average rank. The returned rank is based on the order of values in the array or range, with the largest value receiving a rank of 1.

### Category

Statistical

### Syntax

RANK.AVG(number, ref, [order])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The value for which to find the rank. |
| `array` | An array or range of cells containing the values to rank. |
| `number` | Optional. A numeric value specifying how to rank if two or more values are identical. 0 or omitted ranks in descending order (largest to smallest), any other value ranks in ascending order (smallest to largest). |


### Behavior

The `RANK.AVG` function in spreadsheets ranks the specified number within a set of numbers. If there are duplicate numbers in the list, it will return the average rank. 

- Empty cells: If a range or array argument contains empty cells, those cells are ignored in calculations.
- Text: If cells contain text, those values are also ignored. 
- Booleans: Boolean values are not supported and will return an error.
- Errors: If the specified number is not found in the list, `RANK.AVG` will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs if the supplied number is non-numeric. |
| #N/A | Occurs if the specified number is not found within the supplied array. |
| #REF! | Occurs if the given cell reference is not valid. |

### Best practices

> - Always ensure that the number you want to rank is included in the array or range of numbers.
> - The `RANK.AVG` function will ignore text and cannot rank boolean or string values. Ensure your data set only includes numeric values to avoid errors.
> - If you are working with a large data set, consider using the `RANK.AVG` function in combination with other functions for better data analysis and accuracy.
> - Remember that the `RANK.AVG` function returns the average rank if there are duplicate values in the array. If you want to rank without averaging, consider using the `RANK.EQ` function instead.

### Usage

A few examples using the RANK.AVG function.

```
RANK.AVG(B2,A2:A10) returns the rank of the value in cell B2 among the values in the range A2:A10, with ties receiving an average rank  
RANK.AVG(100,B2:B10,0) returns the rank of the value 100 among the values in the range B2:B10, with ties receiving an average rank and ranking in descending order (largest to smallest)  
RANK.AVG(C2,$D$2:$D$10,1) returns the rank of the value in cell C2 among the values in the range D2:D10, with ties receiving an average rank and ranking in ascending order (smallest to largest)  
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
        "=RANK.AVG(B2,B$2:B$6)"
    ],
    [
        "Bob",
        92,
        "=RANK.AVG(B3,B$2:B$6)"
    ],
    [
        "Carol",
        78,
        "=RANK.AVG(B4,B$2:B$6)"
    ],
    [
        "David",
        92,
        "=RANK.AVG(B5,B$2:B$6)"
    ],
    [
        "Eve",
        88,
        "=RANK.AVG(B6,B$2:B$6)"
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
        "=RANK.AVG(B2,B$2:B$6)"
    ],
    [
        "Bob",
        92,
        "=RANK.AVG(B3,B$2:B$6)"
    ],
    [
        "Carol",
        78,
        "=RANK.AVG(B4,B$2:B$6)"
    ],
    [
        "David",
        92,
        "=RANK.AVG(B5,B$2:B$6)"
    ],
    [
        "Eve",
        88,
        "=RANK.AVG(B6,B$2:B$6)"
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
        "=RANK.AVG(B2,B$2:B$6)"
    ],
    [
        "Bob",
        92,
        "=RANK.AVG(B3,B$2:B$6)"
    ],
    [
        "Carol",
        78,
        "=RANK.AVG(B4,B$2:B$6)"
    ],
    [
        "David",
        92,
        "=RANK.AVG(B5,B$2:B$6)"
    ],
    [
        "Eve",
        88,
        "=RANK.AVG(B6,B$2:B$6)"
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
        "=RANK.AVG(B2,B$2:B$6)"
    ],
    [
        "Bob",
        92,
        "=RANK.AVG(B3,B$2:B$6)"
    ],
    [
        "Carol",
        78,
        "=RANK.AVG(B4,B$2:B$6)"
    ],
    [
        "David",
        92,
        "=RANK.AVG(B5,B$2:B$6)"
    ],
    [
        "Eve",
        88,
        "=RANK.AVG(B6,B$2:B$6)"
    ]
]
            }]
        });
    }
}
```

