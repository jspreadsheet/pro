title: CELL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CELL function in Jspreadsheet

# CELL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `CELL` function in Jspreadsheet Formulas Pro is a tool that retrieves specific details about a cell. This includes information about the cell's location, the contents within it, or how it is formatted. For instance, you can use this function to find out what type of data is in a cell (like text or a number), or where the cell is located within your spreadsheet. This makes it a useful function when you need to analyze or manipulate your data in more detail.

## Documentation

Returns information about the formatting, location, or contents of a cell.

### Category

Information

### Syntax

CELL(info_type, [reference])

| Parameter | Description |
| ----------- | ------------- |
| `info_type` | A text value that specifies what type of cell information you want to retrieve. It must be enclosed in quotation marks. |
| `[reference]` | Optional. The cell location for which you want information. If omitted, the function uses the last cell that was changed. |


### Behavior

The `CELL` function in spreadsheets is used to retrieve information about the formatting, location, or contents of a cell. The behavior of `CELL` function varies depending on its 'info_type' argument. 

1. **Empty Cells**: When used on an empty cell, the `CELL` function may return an empty string or 0 depending on the 'info_type' argument.

2. **Text**: If the cell contains text, `CELL` can return the text if 'contents' is used as 'info_type'. 

3. **Booleans**: For boolean values, `CELL` function can return TRUE or FALSE if 'contents' is used as 'info_type'.

4. **Errors**: If the 'info_type' argument is not recognized, `CELL` function will return a `#VALUE!` error.

5. **Numerical Values**: For cells with numerical values, `CELL` will return the number if 'contents' is used as 'info_type'.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | Occurs when the 'info_type' argument is not recognized by the `CELL` function. |
| #REF! | Occurs when the referenced cell is not valid. This generally happens when the cell reference is deleted or moved. |

### Best practices

> - Always double-check your 'info_type' argument to ensure it's a valid argument recognized by the `CELL` function.
> - Be careful when using `CELL` with volatile functions like `INDIRECT` or `OFFSET`. The `CELL` function might not update as expected when used with these functions.
> - Avoid using `CELL` function to create circular references as it can cause the spreadsheet to calculate slowly and may result in an error.
> - Use the `CELL` function to get cell information instead of manually entering it, which can help keep the spreadsheet dynamic and reduce errors.

### Usage

A few examples using the CELL function.

```
CELL("address", A1) returns $A$1  
CELL("color", B3) returns 4  
CELL("format", C5) returns "General"  
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
        "Product",
        "Price",
        "Cell Info"
    ],
    [
        "Laptop",
        999.99,
        "=CELL(\"address\", B2)"
    ],
    [
        "Mouse",
        25.5,
        "=CELL(\"format\", B3)"
    ],
    [
        "Keyboard",
        75.0,
        "=CELL(\"color\", B4)"
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
        "Product",
        "Price",
        "Cell Info"
    ],
    [
        "Laptop",
        999.99,
        "=CELL(\"address\", B2)"
    ],
    [
        "Mouse",
        25.5,
        "=CELL(\"format\", B3)"
    ],
    [
        "Keyboard",
        75.0,
        "=CELL(\"color\", B4)"
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
        "Product",
        "Price",
        "Cell Info"
    ],
    [
        "Laptop",
        999.99,
        "=CELL(\"address\", B2)"
    ],
    [
        "Mouse",
        25.5,
        "=CELL(\"format\", B3)"
    ],
    [
        "Keyboard",
        75.0,
        "=CELL(\"color\", B4)"
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
        "Product",
        "Price",
        "Cell Info"
    ],
    [
        "Laptop",
        999.99,
        "=CELL(\"address\", B2)"
    ],
    [
        "Mouse",
        25.5,
        "=CELL(\"format\", B3)"
    ],
    [
        "Keyboard",
        75.0,
        "=CELL(\"color\", B4)"
    ]
]
            }]
        });
    }
}
```

