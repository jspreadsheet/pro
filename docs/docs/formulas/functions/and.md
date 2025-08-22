title: AND Function - Logical Condition Testing in Jspreadsheet
keywords: AND function, logical operator, conditional testing, multiple conditions, boolean operations, Excel-compatible functions, JavaScript spreadsheet functions, data validation, conditional formatting, business logic, decision making, spreadsheet formulas, logical functions
description: Evaluate multiple conditions simultaneously using the AND function in Jspreadsheet. Essential for data validation, conditional formatting, and complex business logic where all conditions must be true for a positive result.

# AND function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `AND` function in Jspreadsheet Formulas Pro is a logical operator that checks if all conditions within a formula are met. It will return TRUE only if every argument or condition is TRUE. However, if even a single argument or condition is FALSE, the function will return FALSE. This function is useful when you need to verify multiple conditions at the same time in your spreadsheet.

## Documentation

Returns TRUE if all its arguments evaluate to TRUE; returns FALSE if one or more arguments evaluates to FALSE.

### Category

Logical

### Syntax

AND(logical1, [logical2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `logical1` | The first condition to test. |
| `logicalN` | Optional. Additional conditions to test. You can specify up to 255 conditions. |


### Behavior

The `AND` function is a logical function used in spreadsheets to test multiple conditions at the same time. It will return `TRUE` if all the conditions are met and `FALSE` if any of the conditions is not met. 

- **Empty cells**: If an empty cell is referenced in the `AND` function, it is treated as zero (`0`) and hence, as `FALSE`.
- **Text**: Text is not valid input for the `AND` function. If a cell containing text is referenced, the function will return a `#VALUE!` error.
- **Booleans**: The `AND` function directly accepts boolean (`TRUE` or `FALSE`) values as its arguments.
- **Errors**: If any cell referenced by the `AND` function contains an error, the function will return that error.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs when one or more of the arguments to the `AND` function is text. |
| `#REF!` | This error is returned when a cell reference is not valid. This can occur if a cell is deleted. |
| `#NAME?` | This error is returned when the `AND` function is misspelled or does not exist (in case of older spreadsheet programs). |

### Best practices

> - When using the `AND` function, ensure that the arguments are either boolean values or cell references that contain numeric values.
> - Avoid including cells that may contain text as they will result in a `#VALUE!` error.
> - Ensure to handle empty cells as they are treated as `FALSE`.
> - Be careful while deleting cells. If a cell referenced in the `AND` function is deleted, it returns a `#REF!` error.

### Usage

A few examples using the AND function.

```
AND(TRUE, TRUE) returns TRUE  
AND(5=5, 3>2) returns TRUE  
AND(FALSE, 1=1) returns FALSE  
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
        "Math Score",
        "English Score",
        "Passed Both"
    ],
    [
        "Alice",
        85,
        78,
        "=AND(B2>=70, C2>=70)"
    ],
    [
        "Bob",
        65,
        82,
        "=AND(B3>=70, C3>=70)"
    ],
    [
        "Carol",
        92,
        88,
        "=AND(B4>=70, C4>=70)"
    ],
    [
        "David",
        73,
        69,
        "=AND(B5>=70, C5>=70)"
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
        "Math Score",
        "English Score",
        "Passed Both"
    ],
    [
        "Alice",
        85,
        78,
        "=AND(B2>=70, C2>=70)"
    ],
    [
        "Bob",
        65,
        82,
        "=AND(B3>=70, C3>=70)"
    ],
    [
        "Carol",
        92,
        88,
        "=AND(B4>=70, C4>=70)"
    ],
    [
        "David",
        73,
        69,
        "=AND(B5>=70, C5>=70)"
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
        "Math Score",
        "English Score",
        "Passed Both"
    ],
    [
        "Alice",
        85,
        78,
        "=AND(B2>=70, C2>=70)"
    ],
    [
        "Bob",
        65,
        82,
        "=AND(B3>=70, C3>=70)"
    ],
    [
        "Carol",
        92,
        88,
        "=AND(B4>=70, C4>=70)"
    ],
    [
        "David",
        73,
        69,
        "=AND(B5>=70, C5>=70)"
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
        "Math Score",
        "English Score",
        "Passed Both"
    ],
    [
        "Alice",
        85,
        78,
        "=AND(B2>=70, C2>=70)"
    ],
    [
        "Bob",
        65,
        82,
        "=AND(B3>=70, C3>=70)"
    ],
    [
        "Carol",
        92,
        88,
        "=AND(B4>=70, C4>=70)"
    ],
    [
        "David",
        73,
        69,
        "=AND(B5>=70, C5>=70)"
    ]
]
            }]
        });
    }
}
```

