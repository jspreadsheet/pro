title: VAL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the VAL function in Jspreadsheet

# VAL function

`PRO`{.jtag}

The `VAL` function in Jspreadsheet Formulas Pro allows you to extract a specific piece of data from a certain location within your dataset. The coordinates you provide determine which piece of data the function will retrieve. Additionally, you can choose to process this data based on the 'processed' parameter, which can be particularly useful for performing specific calculations or manipulations on the extracted data.

## Documentation

The VAL function retrieves a value from specific coordinates within a dataset, allowing optional processing based on the 'processed' parameter.

### Category

Jspreadsheet

### Syntax

VAL(column_index, row_index, processed)

| Parameter | Description |
| ----------- | ------------- |
| `column_index` | The numeric index of the column from which to retrieve the value. |
| `row_index` | The numeric index of the row from which to retrieve the value. |
| `processed` | A boolean value (true/false) indicating whether to process the retrieved value (e.g., apply calculations or evaluate formulas) before returning it. |


As 'VAL' is not a recognized function in major spreadsheet programs such as Microsoft Excel, Google Sheets, or LibreOffice Calc, it's difficult to provide specific details about its behavior, common errors, and best practices. 

Could you please provide more information on which spreadsheet software and specific 'VAL' function you are referring to? 

If you are referring to the VALUE function in Excel, which converts text that appears in a recognized format (like dates or numbers) to a numeric value, then I can provide the required details for that. 

Please provide more information so that I can provide a more accurate and helpful response.

### Usage

A few examples using the VAL function.

```
VAL(2, 3, false) retrieves the raw value from the cell located in the second column and third row without processing.  
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
        "Stock"
    ],
    [
        "Laptop",
        899.99,
        15
    ],
    [
        "Mouse",
        25.5,
        42
    ],
    [
        "=VAL(2, 2, false)",
        "=VAL(3, 3, true)",
        "Raw vs Processed"
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
        "Stock"
    ],
    [
        "Laptop",
        899.99,
        15
    ],
    [
        "Mouse",
        25.5,
        42
    ],
    [
        "=VAL(2, 2, false)",
        "=VAL(3, 3, true)",
        "Raw vs Processed"
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
        "Stock"
    ],
    [
        "Laptop",
        899.99,
        15
    ],
    [
        "Mouse",
        25.5,
        42
    ],
    [
        "=VAL(2, 2, false)",
        "=VAL(3, 3, true)",
        "Raw vs Processed"
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
        "Stock"
    ],
    [
        "Laptop",
        899.99,
        15
    ],
    [
        "Mouse",
        25.5,
        42
    ],
    [
        "=VAL(2, 2, false)",
        "=VAL(3, 3, true)",
        "Raw vs Processed"
    ]
]
            }]
        });
    }
}
```

