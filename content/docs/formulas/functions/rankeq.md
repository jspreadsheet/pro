title: RANK.EQ function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RANK.EQ function in Jspreadsheet

# RANK.EQ function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `RANK.EQ` function in Jspreadsheet Formulas Pro is used to find the position of a specific number within a list of numbers. Essentially, it evaluates the size of a number in comparison to the other numbers in the list. If there are multiple numbers with the same rank, the function will provide the average rank. This function is useful for understanding the relative standing or position of a particular value in a dataset.

## Documentation

Returns the rank of a number in a list of numbers. The rank of a number is its size relative to other values in a list. If more than one value has the same rank, the average rank is returned.

### Category

Statistical

### Syntax

RANK.EQ(number,ref,[order])

| Parameter | Description |
| ----------- | ------------- |
| `number` | The number whose rank is to be found. |
| `ref` | An array or range of numbers representing the list of numbers. |
| `[order]` | Optional. A number indicating how to rank the number: 0 (or omitted) for descending order, 1 for ascending order. |


### Behavior

The `RANK.EQ` function in spreadsheets returns the rank of a specified number in a list of numbers. Its behavior is as follows:

- The function ignores empty cells.
- If the function encounters text or boolean values in the range/array, it will throw a `#VALUE!` error.
- The function also throws a `#VALUE!` error if the specified number is text or a boolean.
- If the number is not found in the range/array, or if an error value is present it will return a `#N/A` error.
- If there are duplicate values in the array, `RANK.EQ` will assign the same rank to all the duplicate values.
- When duplicate values receive the same rank, it skips the next rank(s). For example, if two values get the rank 1, the next value will receive the rank 3.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | The function has encountered a non-numeric value in the number argument or the array. |
| `#N/A` | The specified number is not found in the array, or an error value is present in the array. |

### Best practices

> - Always ensure that the range/array and the number you provide to the `RANK.EQ` function are numeric. This will prevent `#VALUE!` errors.
> - Use `RANK.EQ` for an 'equal-rank for equals' scenario. If you want a 'no-equal-rank' scenario, use `RANK.AVG`.
> - Be mindful that `RANK.EQ` does not handle array arguments with errors. If your array contains errors, you may need to preprocess it with functions like `IFERROR` to handle these errors.
> - Remember that `RANK.EQ` returns the rank in descending order by default. If you want the rank in ascending order, consider using a large number minus the number before ranking.

### Usage

A few examples using the RANK.EQ function.

```
RANK.EQ(2,A1:A10)  
RANK.EQ(90,A1:A10,1)  
RANK.EQ(B1,A1:A10)  
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
        "=RANK.EQ(B2,$B$2:$B$6,0)"
    ],
    [
        "Bob",
        92,
        "=RANK.EQ(B3,$B$2:$B$6,0)"
    ],
    [
        "Carol",
        78,
        "=RANK.EQ(B4,$B$2:$B$6,0)"
    ],
    [
        "David",
        92,
        "=RANK.EQ(B5,$B$2:$B$6,0)"
    ],
    [
        "Eve",
        88,
        "=RANK.EQ(B6,$B$2:$B$6,0)"
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
        "=RANK.EQ(B2,$B$2:$B$6,0)"
    ],
    [
        "Bob",
        92,
        "=RANK.EQ(B3,$B$2:$B$6,0)"
    ],
    [
        "Carol",
        78,
        "=RANK.EQ(B4,$B$2:$B$6,0)"
    ],
    [
        "David",
        92,
        "=RANK.EQ(B5,$B$2:$B$6,0)"
    ],
    [
        "Eve",
        88,
        "=RANK.EQ(B6,$B$2:$B$6,0)"
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
        "=RANK.EQ(B2,$B$2:$B$6,0)"
    ],
    [
        "Bob",
        92,
        "=RANK.EQ(B3,$B$2:$B$6,0)"
    ],
    [
        "Carol",
        78,
        "=RANK.EQ(B4,$B$2:$B$6,0)"
    ],
    [
        "David",
        92,
        "=RANK.EQ(B5,$B$2:$B$6,0)"
    ],
    [
        "Eve",
        88,
        "=RANK.EQ(B6,$B$2:$B$6,0)"
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
        "=RANK.EQ(B2,$B$2:$B$6,0)"
    ],
    [
        "Bob",
        92,
        "=RANK.EQ(B3,$B$2:$B$6,0)"
    ],
    [
        "Carol",
        78,
        "=RANK.EQ(B4,$B$2:$B$6,0)"
    ],
    [
        "David",
        92,
        "=RANK.EQ(B5,$B$2:$B$6,0)"
    ],
    [
        "Eve",
        88,
        "=RANK.EQ(B6,$B$2:$B$6,0)"
    ]
]
            }]
        });
    }
}
```

