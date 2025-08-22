title: ISOMITTED function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the ISOMITTED function in Jspreadsheet

# ISOMITTED function

`PRO`{.jtag}

The `ISOMITTED` function in Jspreadsheet Formulas Pro is a useful tool that allows you to check if a parameter in a formula has been left out or not. If the parameter is missing, the function will return a TRUE value. Conversely, if the parameter is present, the function will return a FALSE value. This function essentially helps in verifying the completeness of your formulas in Jspreadsheet.

## Documentation

Checks if a parameter in a formula is omitted and returns TRUE if the parameter is omitted, and FALSE otherwise.

### Category

Information

### Syntax

ISOMITTED(reference)

| Parameter | Description |
| ----------- | ------------- |
| `reference` | The reference to the parameter that you want to test. |


The 'ISOMITTED' function is not a recognized or standard function in spreadsheet software like Microsoft Excel, Google Sheets, or OpenOffice Calc. Please ensure the function name and its usage are correct. Refer to the software's official documentation or help resources for a list of valid functions and their usage.

### Usage

A few examples using the ISOMITTED function.

```
ISOMITTED(A1) returns TRUE if the parameter is omitted from the formula  
ISOMITTED(B2) returns FALSE if the parameter is not omitted from the formula  
ISOMITTED(C3:D4) returns an array of TRUE or FALSE values indicating whether each corresponding parameter in the formula is omitted.  
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
        "Age",
        "Score"
    ],
    [
        "John",
        25,
        "=IF(ISOMITTED(B2), \"No age provided\", B2)"
    ],
    [
        "Sarah",
        "",
        "=IF(ISOMITTED(B3), \"No age provided\", B3)"
    ],
    [
        "Mike",
        30,
        "=IF(ISOMITTED(B4), \"No age provided\", B4)"
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
        "Age",
        "Score"
    ],
    [
        "John",
        25,
        "=IF(ISOMITTED(B2), \"No age provided\", B2)"
    ],
    [
        "Sarah",
        "",
        "=IF(ISOMITTED(B3), \"No age provided\", B3)"
    ],
    [
        "Mike",
        30,
        "=IF(ISOMITTED(B4), \"No age provided\", B4)"
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
        "Age",
        "Score"
    ],
    [
        "John",
        25,
        "=IF(ISOMITTED(B2), \"No age provided\", B2)"
    ],
    [
        "Sarah",
        "",
        "=IF(ISOMITTED(B3), \"No age provided\", B3)"
    ],
    [
        "Mike",
        30,
        "=IF(ISOMITTED(B4), \"No age provided\", B4)"
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
        "Age",
        "Score"
    ],
    [
        "John",
        25,
        "=IF(ISOMITTED(B2), \"No age provided\", B2)"
    ],
    [
        "Sarah",
        "",
        "=IF(ISOMITTED(B3), \"No age provided\", B3)"
    ],
    [
        "Mike",
        30,
        "=IF(ISOMITTED(B4), \"No age provided\", B4)"
    ]
]
            }]
        });
    }
}
```

