title: SHEET function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SHEET function in Jspreadsheet

# SHEET function

`PRO`{.jtag}

The `SHEET` function in Jspreadsheet Formulas Pro is a useful tool that allows you to identify the number of a specific sheet within your spreadsheet. If you have multiple sheets, this function can help you quickly find the one you need by providing a reference. Simply input the reference into the function and it will return the corresponding sheet number. This can be particularly helpful when navigating complex or large spreadsheets.

## Documentation

Returns the sheet number of a reference.

### Category

Information

### Syntax

SHEET(reference)

| Parameter | Description |
| ----------- | ------------- |
| `reference` | A reference to a cell or range of cells in the same workbook. |


### Behavior

The 'SHEET' function in spreadsheets returns the sheet number for a reference or named range. Sheet numbers are indexed starting from 1. If the reference or named range refers to another sheet, the function will return the number of that sheet. If no argument is provided, the function will return the number of the current sheet.

- Empty Cells: When an empty cell is referred to, the 'SHEET' function will return the number of the sheet that the empty cell is on.
- Text: If a text value is provided as the reference, the 'SHEET' function will return a #REF! error as it requires a cell or range reference.
- Booleans: The 'SHEET' function does not support boolean values. Providing a boolean value as the reference will result in a #VALUE! error.
- Errors: If the reference or named range contains an error, the 'SHEET' function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| #REF! | Occurs if the provided argument is not a valid reference. For example, if a text value is given as the reference. |
| #VALUE! | Occurs if a boolean value is given as the reference. The 'SHEET' function does not support boolean values. |
| #N/A | Occurs if the named range provided as the argument does not exist. |

### Best practices
> - Always use cell or range references as the argument for the 'SHEET' function. It does not support text or boolean values.
> - If you're using named ranges, ensure that the named range exists in the workbook to avoid a #N/A error.
> - Remember that sheet numbers are indexed from 1, not 0. The first sheet in the workbook has a sheet number of 1, not 0.
> - The 'SHEET' function can be very useful in combination with other functions for navigating large workbooks with many sheets. For example, you can use it with the 'INDEX' function to return a value from the same cell across multiple sheets.

### Usage

A few examples using the SHEET function.

```
SHEET(A1) returns the sheet number of cell A1  
SHEET('Sheet2'!B5) returns the sheet number of cell B5 on Sheet2  
SHEET(Budget!A1:B5) returns the sheet number of the Budget worksheet  
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
        "Reference",
        "Sheet Number"
    ],
    [
        "A1",
        "=SHEET(A1)"
    ],
    [
        "'Data'!B5",
        "=SHEET('Data'!B5)"
    ],
    [
        "Budget!C1:C10",
        "=SHEET(Budget!C1:C10)"
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
        "Reference",
        "Sheet Number"
    ],
    [
        "A1",
        "=SHEET(A1)"
    ],
    [
        "'Data'!B5",
        "=SHEET('Data'!B5)"
    ],
    [
        "Budget!C1:C10",
        "=SHEET(Budget!C1:C10)"
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
        "Reference",
        "Sheet Number"
    ],
    [
        "A1",
        "=SHEET(A1)"
    ],
    [
        "'Data'!B5",
        "=SHEET('Data'!B5)"
    ],
    [
        "Budget!C1:C10",
        "=SHEET(Budget!C1:C10)"
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
        "Reference",
        "Sheet Number"
    ],
    [
        "A1",
        "=SHEET(A1)"
    ],
    [
        "'Data'!B5",
        "=SHEET('Data'!B5)"
    ],
    [
        "Budget!C1:C10",
        "=SHEET(Budget!C1:C10)"
    ]
]
            }]
        });
    }
}
```

