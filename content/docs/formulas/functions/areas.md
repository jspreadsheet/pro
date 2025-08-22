title: AREAS Function - Count Range References in Jspreadsheet
keywords: AREAS function, range counter, cell reference counter, Excel-compatible functions, JavaScript spreadsheet functions, data range management, spreadsheet navigation, cell references, range operations, data structure analysis, spreadsheet organization, range counting
description: Count distinct ranges in cell references using the AREAS function in Jspreadsheet. Essential for complex spreadsheet operations, range management, and understanding data structure organization in your worksheets.

# AREAS function

`PRO`{.jtag}

The `AREAS` function in Jspreadsheet Formulas Pro is a handy tool that helps you find out the count of distinct ranges within a given reference. An "area" in this context is a contiguous block of cells or a single cell within a specified reference. For instance, if you have selected multiple non-adjacent cells or ranges, the `AREAS` function will return the number of these separate selections. This function is particularly useful when you're working with complex data sets and need to quickly identify the number of distinct selections within your data.

## Documentation

Returns the number of areas in a reference.

### Category

Lookup and reference

### Syntax

AREAS(reference)

| Parameter | Description |
| ----------- | ------------- |
| `reference` | A reference to the range for which to count the areas. |


### Behavior

The `AREAS` function in spreadsheets is used to return the number of areas in a reference. An area is a range of contiguous cells or a single cell. Here's how it handles different cell contents:

- **Empty cells**: `AREAS` considers empty cells as part of the area if they are within the defined range.
- **Text**: `AREAS` doesn't differentiate between cell types, so cells containing text are considered part of the area.
- **Booleans**: Similar to text, boolean values don't affect the function's output as it considers any cell within the specified range.
- **Errors**: If the referenced range contains error values, it won't affect the output of `AREAS` function since it only counts the number of areas. However, if the referenced range itself is invalid, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the formula includes an incorrect data type. |
| #REF! | This error is displayed when the formula contains an invalid cell reference. |
| #NAME? | This error is returned when the spreadsheet does not recognize the function name or there are incorrect characters in the cell reference.|

### Best Practices
> - Always ensure that the range you are referencing in your `AREAS` function is valid to avoid `#REF!` errors.
> - Remember that the `AREAS` function counts the number of areas, not the number of cells. If you want to count the number of cells, consider using the `COUNTA` function.
> - Use absolute cell references in your `AREAS` function if your range will not change when the function is copied or moved.
> - Keep in mind that `AREAS` will include all cells in the range, regardless of content (text, numbers, booleans, errors, or blank cells).

### Usage

A few examples using the AREAS function.

```
AREAS(A1:A10) returns 1  
AREAS(A1:C3, E1:F3) returns 2  
AREAS(A1:C3, A5:C7, F1:H3) returns 3  
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
        "Sales Q1",
        "Sales Q2",
        "Sales Q3",
        "Sales Q4",
        "Areas Count"
    ],
    [
        1000,
        1200,
        "",
        1400,
        "=AREAS(A2:B2)"
    ],
    [
        1500,
        1300,
        "",
        1600,
        "=AREAS(A3:B3,D3)"
    ],
    [
        800,
        900,
        "",
        1100,
        "=AREAS(A4:D4)"
    ],
    [
        "",
        "",
        "",
        "",
        "=AREAS(A2:B4,D2:D4,A1:E1)"
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
        "Sales Q1",
        "Sales Q2",
        "Sales Q3",
        "Sales Q4",
        "Areas Count"
    ],
    [
        1000,
        1200,
        "",
        1400,
        "=AREAS(A2:B2)"
    ],
    [
        1500,
        1300,
        "",
        1600,
        "=AREAS(A3:B3,D3)"
    ],
    [
        800,
        900,
        "",
        1100,
        "=AREAS(A4:D4)"
    ],
    [
        "",
        "",
        "",
        "",
        "=AREAS(A2:B4,D2:D4,A1:E1)"
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
        "Sales Q1",
        "Sales Q2",
        "Sales Q3",
        "Sales Q4",
        "Areas Count"
    ],
    [
        1000,
        1200,
        "",
        1400,
        "=AREAS(A2:B2)"
    ],
    [
        1500,
        1300,
        "",
        1600,
        "=AREAS(A3:B3,D3)"
    ],
    [
        800,
        900,
        "",
        1100,
        "=AREAS(A4:D4)"
    ],
    [
        "",
        "",
        "",
        "",
        "=AREAS(A2:B4,D2:D4,A1:E1)"
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
        "Sales Q1",
        "Sales Q2",
        "Sales Q3",
        "Sales Q4",
        "Areas Count"
    ],
    [
        1000,
        1200,
        "",
        1400,
        "=AREAS(A2:B2)"
    ],
    [
        1500,
        1300,
        "",
        1600,
        "=AREAS(A3:B3,D3)"
    ],
    [
        800,
        900,
        "",
        1100,
        "=AREAS(A4:D4)"
    ],
    [
        "",
        "",
        "",
        "",
        "=AREAS(A2:B4,D2:D4,A1:E1)"
    ]
]
            }]
        });
    }
}
```

