title: SHEETS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SHEETS function in Jspreadsheet

# SHEETS function

`PRO`{.jtag}

The `SHEETS` function in Jspreadsheet Formulas Pro is a simple tool that tells you how many sheets are in a specific reference. This could be particularly useful if you're working with a large workbook and want a quick way to count all the sheets. You simply input the reference you're interested in and it will return the total number of sheets included. It's a handy way to keep track of your data organization in Jspreadsheet.

## Documentation

Returns the number of sheets in a reference.

### Category

Information

### Syntax

SHEETS([reference])

| Parameter | Description |
| ----------- | ------------- |
| `reference` | Optional. A reference to a cell or range of cells in the same workbook. If omitted, returns the number of sheets in the entire workbook. |


### Behavior

The `SHEETS` function in a spreadsheet returns the number of sheets in a reference. The behavior of the `SHEETS` function is as follows:

1. The `SHEETS` function counts all the sheets in the workbook if no argument is provided.
2. If a reference is provided, the `SHEETS` function will count all the sheets in the workbook which the reference spans.
3. Empty cells, text, booleans, and errors are irrelevant to the `SHEETS` function as it only counts the number of sheets.
4. The `SHEETS` function doesn't evaluate the contents of the sheets; it just counts the number of sheets.

### Common Errors

| Error | Description |
| ---   | ---         |
| #REF! | This error occurs if the provided reference is invalid. |
| #N/A  | This error occurs if the reference does not exist. |
| #VALUE! | This error occurs if the supplied argument is a non-numeric value. |

### Best practices
> - Always ensure that the references provided to the `SHEETS` function are valid to avoid errors.
> - Use the `SHEETS` function without any arguments to get the total number of sheets in a workbook.
> - Be cautious of the workbook structure when using the `SHEETS` function as adding or removing sheets will affect the output of the function.
> - Use the `SHEETS` function in combination with other functions like `INDEX` and `MATCH` to navigate large workbooks more effectively.

### Usage

A few examples using the SHEETS function.

```
SHEETS() returns the total number of sheets in the workbook  
SHEETS(Annual!A1:C10) returns the number of sheets that contain data referenced in Annual!A1:C10  
SHEETS(Sheet3!D4:E8) returns 1 if Sheet3 is the only sheet containing data referenced in the specified range  
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
        "Workbook Analysis",
        "Sheet Count"
    ],
    [
        "Total sheets in workbook",
        "=SHEETS()"
    ],
    [
        "Sheets with data in range",
        "=SHEETS(Sheet1!A1:B10)"
    ],
    [
        "Single sheet reference",
        "=SHEETS(Summary!C1:D5)"
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
        "Workbook Analysis",
        "Sheet Count"
    ],
    [
        "Total sheets in workbook",
        "=SHEETS()"
    ],
    [
        "Sheets with data in range",
        "=SHEETS(Sheet1!A1:B10)"
    ],
    [
        "Single sheet reference",
        "=SHEETS(Summary!C1:D5)"
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
        "Workbook Analysis",
        "Sheet Count"
    ],
    [
        "Total sheets in workbook",
        "=SHEETS()"
    ],
    [
        "Sheets with data in range",
        "=SHEETS(Sheet1!A1:B10)"
    ],
    [
        "Single sheet reference",
        "=SHEETS(Summary!C1:D5)"
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
        "Workbook Analysis",
        "Sheet Count"
    ],
    [
        "Total sheets in workbook",
        "=SHEETS()"
    ],
    [
        "Sheets with data in range",
        "=SHEETS(Sheet1!A1:B10)"
    ],
    [
        "Single sheet reference",
        "=SHEETS(Summary!C1:D5)"
    ]
]
            }]
        });
    }
}
```

