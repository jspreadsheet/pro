title: COUNTIFS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the COUNTIFS function in Jspreadsheet

# COUNTIFS function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `COUNTIFS` function in Jspreadsheet Formulas Pro is a handy tool that allows you to count the number of cells in a specified range that match multiple conditions. This function can be used to filter and analyze your data based on various requirements. For example, you could use `COUNTIFS` to find out how many sales were made in a particular region for a specific product. It is an essential feature for efficient data management and analysis in Jspreadsheet.

## Documentation

Counts the number of cells in a range that meet multiple specified criteria.

### Category

Statistical

### Syntax

COUNTIFS(range1, criteria1, [range2], [criteria2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `range1` | The first range of cells to be evaluated by the first criteria. |
| `criteria1` | The criteria used to determine which cells to count in the first range. |
| `rangeN` | Optional. Additional ranges of cells to be evaluated by additional criteria. |
| `criteriaN` | Optional. Additional criteria used to determine which cells to count in additional ranges. |


### Behavior

The `COUNTIFS` function in a spreadsheet is used to count the number of cells that meet multiple criteria. Each criterion is applied to the cells in the range that corresponds to the same position. The function works in the following ways:

- Empty Cells: If a cell in a criteria range is empty, `COUNTIFS` treats it as a zero value if a mathematical operation is being performed. For text-based conditions, it is treated as an empty string.
- Text: `COUNTIFS` can handle text criteria. For example, you can count cells that contain certain text, do not contain certain text, or have text that matches a specific pattern.
- Booleans: Boolean values (`TRUE` and `FALSE`) can be used as criteria in `COUNTIFS`. 
- Errors: If any cell in any of the ranges contains an error, `COUNTIFS` returns an error.
- Non-Numeric Values: Non-numeric values in a criteria range used with a mathematical operator (such as `>`, `<`, `=`, etc.) are treated as zero.
- Wildcards: The wildcard characters (`?` and `*`) can be used in criteria. A question mark matches any single character, and an asterisk matches any sequence of characters.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the given criteria is not valid. For example, if you use a range operator without specifying a range. |
| #N/A | This error occurs if the criteria specified is not found in the given range. |
| #REF! | This error is returned when a cell reference is not valid. For example, if a range has been deleted. |

### Best Practices

> - The `COUNTIFS` function can handle up to 127 range/criteria pairs. If you need to use more, consider using a different approach or breaking down your formula.
> - Ensure all ranges have the same shape. If not, `COUNTIFS` will return an error.
> - Avoid full column references in `COUNTIFS` to prevent unnecessary calculations on empty cells, which can slow down the performance.
> - When using wildcard characters in your criteria, remember to enclose the criteria in quotation marks (e.g., `"*text*"`).

### Usage

A few examples using the COUNTIFS function.

```
COUNTIFS(A1:A10,">5") returns the number of cells in A1 through A10 that are greater than 5  
COUNTIFS(B2:B5,"Bob",D2:D5,"Smith") returns the number of cells in ranges B2 through B5 and D2 through D5 that include "Bob" in column B and "Smith" in column D  
COUNTIFS(H1:H100,"<>0",I1:I100,">=10") returns the number of cells in column H from rows 1 through 100 that are not equal to 0 and the corresponding cells in column I that are greater than or equal to 10  
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
        "Name",
        "Department",
        "Salary",
        "Years"
    ],
    [
        "Alice",
        "Sales",
        45000,
        3
    ],
    [
        "Bob",
        "Sales",
        52000,
        5
    ],
    [
        "Carol",
        "IT",
        48000,
        2
    ],
    [
        "Dave",
        "Sales",
        55000,
        7
    ],
    [
        "",
        "Sales employees with 5+ years:",
        "=COUNTIFS(B2:B5,\"Sales\",D2:D5,\">=5\")"
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
        "Name",
        "Department",
        "Salary",
        "Years"
    ],
    [
        "Alice",
        "Sales",
        45000,
        3
    ],
    [
        "Bob",
        "Sales",
        52000,
        5
    ],
    [
        "Carol",
        "IT",
        48000,
        2
    ],
    [
        "Dave",
        "Sales",
        55000,
        7
    ],
    [
        "",
        "Sales employees with 5+ years:",
        "=COUNTIFS(B2:B5,\"Sales\",D2:D5,\">=5\")"
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
        "Name",
        "Department",
        "Salary",
        "Years"
    ],
    [
        "Alice",
        "Sales",
        45000,
        3
    ],
    [
        "Bob",
        "Sales",
        52000,
        5
    ],
    [
        "Carol",
        "IT",
        48000,
        2
    ],
    [
        "Dave",
        "Sales",
        55000,
        7
    ],
    [
        "",
        "Sales employees with 5+ years:",
        "=COUNTIFS(B2:B5,\"Sales\",D2:D5,\">=5\")"
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
        "Name",
        "Department",
        "Salary",
        "Years"
    ],
    [
        "Alice",
        "Sales",
        45000,
        3
    ],
    [
        "Bob",
        "Sales",
        52000,
        5
    ],
    [
        "Carol",
        "IT",
        48000,
        2
    ],
    [
        "Dave",
        "Sales",
        55000,
        7
    ],
    [
        "",
        "Sales employees with 5+ years:",
        "=COUNTIFS(B2:B5,\"Sales\",D2:D5,\">=5\")"
    ]
]
            }]
        });
    }
}
```

