title: FORMULATEXT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FORMULATEXT function in Jspreadsheet

# FORMULATEXT function

`PRO`{.jtag}

The `FORMULATEXT` function in Jspreadsheet Formulas Pro is a useful tool that allows you to retrieve the formula used in a specific cell but presents it as text. This is especially handy when you want to understand or document the calculations used in a spreadsheet. You just need to refer to the cell you're interested in, and the function will provide the formula as a readable text string, thus simplifying the process of tracking and understanding the calculations.

## Documentation

Returns the formula in a cell as text.

### Category

Lookup and reference

### Syntax

FORMULATEXT(reference)

| Parameter | Description |
| ----------- | ------------- |
| `reference` | A reference to the cell you want to get the formula of. |


### Behavior

The 'FORMULATEXT' function in spreadsheets is a useful tool that displays the formula used in a referenced cell. Here's how it behaves:

1. Empty Cells: If the referenced cell is empty or does not contain a formula, the 'FORMULATEXT' function will return #N/A.
2. Text: If the referenced cell contains plain text and not a formula, the 'FORMULATEXT' function will return #N/A.
3. Booleans: If the cell contains a formula that results in a Boolean value, 'FORMULATEXT' will display the formula, not the Boolean result.
4. Errors: If the cell contains a formula that results in an error, 'FORMULATEXT' will display the formula, not the error result.
5. Array Formulas: If the referenced cell contains an array formula, 'FORMULATEXT' will display the entire array formula.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | This error occurs when the referenced cell does not contain a formula. It also occurs when the cell is empty. |
| #REF! | This error occurs when the referenced cell is invalid or does not exist. |
| #VALUE! | This error occurs when the referenced cell does not have a valid reference. |

### Best practices

> - When using 'FORMULATEXT', ensure the referenced cell contains a formula to avoid the #N/A error.
> - Use 'FORMULATEXT' to help debug formulas in your spreadsheet by easily viewing the formula of a cell without having to select it.
> - Be aware that 'FORMULATEXT' will display the formula exactly as it exists in the cell. This includes any spaces or formatting that may be present.
> - 'FORMULATEXT' can be very useful for teaching or learning purposes, as it allows you to see and understand how different formulas work within the spreadsheet.

### Usage

A few examples using the FORMULATEXT function.

```
FORMULATEXT(A2) returns "=SUM(B2:B5)" in case that is the value of A2  
FORMULATEXT(C3) returns "=IF(A1>B1,A1-B1,B1-A1)" in case that is the value of C3  
FORMULATEXT(D4) returns "=AVERAGE(A1:A10)" in case that is the value of D4  
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
        10,
        20,
        "=A1+B1"
    ],
    [
        15,
        25,
        "=FORMULATEXT(C1)"
    ],
    [
        8,
        12,
        "=AVERAGE(A1:B3)"
    ],
    [
        "Total:",
        "=SUM(A1:A3)",
        "=FORMULATEXT(C3)"
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
        10,
        20,
        "=A1+B1"
    ],
    [
        15,
        25,
        "=FORMULATEXT(C1)"
    ],
    [
        8,
        12,
        "=AVERAGE(A1:B3)"
    ],
    [
        "Total:",
        "=SUM(A1:A3)",
        "=FORMULATEXT(C3)"
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
        10,
        20,
        "=A1+B1"
    ],
    [
        15,
        25,
        "=FORMULATEXT(C1)"
    ],
    [
        8,
        12,
        "=AVERAGE(A1:B3)"
    ],
    [
        "Total:",
        "=SUM(A1:A3)",
        "=FORMULATEXT(C3)"
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
        10,
        20,
        "=A1+B1"
    ],
    [
        15,
        25,
        "=FORMULATEXT(C1)"
    ],
    [
        8,
        12,
        "=AVERAGE(A1:B3)"
    ],
    [
        "Total:",
        "=SUM(A1:A3)",
        "=FORMULATEXT(C3)"
    ]
]
            }]
        });
    }
}
```

