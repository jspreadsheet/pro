title: DATEVALUE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DATEVALUE function in Jspreadsheet

# DATEVALUE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DATEVALUE` function in Jspreadsheet Formulas Pro is a tool that changes a text string representing a date into a serial number, which the program recognizes as a date. This is useful when you're dealing with dates in text format that you want to use in a numerical manner. For example, the text '1-Jan-2020' can be converted into the serial number 43831, which Jspreadsheet identifies as a date. This function is a helpful way to manage and manipulate date data within your spreadsheet.

## Documentation

Converts a text string that represents a date to a serial number that Excel recognizes as a date.

### Category

Date and time

### Syntax

DATEVALUE(date_text)

| Parameter | Description |
| ----------- | ------------- |
| `date_text` | A text string that represents a date in a recognizable format. For example, "2022-01-01" or "January 1, 2022". |


### Behavior

The 'DATEVALUE' function in spreadsheets converts a date that is stored as text into a serial number that Excel recognizes as a date. For example, "1/1/2021" as text can be converted to the date serial number 44197. The serial number represents the number of days passed since January 1, 1900, which is the system Excel uses to calculate dates. 

- When an empty cell is referenced, the 'DATEVALUE' function will return a `#VALUE!` error.
- For text, if it represents a valid date, 'DATEVALUE' will convert it into the corresponding serial number. If the text does not represent a valid date, a `#VALUE!` error is returned. 
- Booleans are not valid arguments for the 'DATEVALUE' function and will return a `#VALUE!` error.
- If the function encounters an error value in its input, it will propagate that error to its output.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | The input is not a valid date, is non-numeric, or the function encounters an empty cell. |
| #REF! | The cell reference is not valid. This could be due to deleting a row, column, or cell that the function is referencing. |
| #NAME? | Occurs if the spreadsheet does not recognize the function name. This could be due to a spelling mistake. |

### Best practices

> - Always ensure that the date text you are trying to convert is in a recognized date format. If the date text is not in a correct format, the 'DATEVALUE' function will return a `#VALUE!` error.
> - Use error handling functions like 'IFERROR' or 'ISERROR' along with 'DATEVALUE' to handle any possible errors and maintain the cleanliness of your data.
> - Avoid referencing empty cells within your 'DATEVALUE' function to prevent unwanted `#VALUE!` errors.
> - Use 'DATEVALUE' in conjunction with other date functions for more complex date manipulations and calculations.

### Usage

A few examples using the DATEVALUE function.

```
DATEVALUE("2022-03-15") returns the serial number for March 15, 2022  
DATEVALUE("2025-12-31") returns the serial number for December 31, 2025  
DATEVALUE("2024-02-22") returns the serial number for February 22, 2024  
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
        "Date Text",
        "Serial Number",
        "Formatted Date"
    ],
    [
        "2024-01-15",
        "=DATEVALUE(A2)",
        "=TEXT(B2,\"mm/dd/yyyy\")"
    ],
    [
        "2024-06-30",
        "=DATEVALUE(A3)",
        "=TEXT(B3,\"mm/dd/yyyy\")"
    ],
    [
        "2024-12-25",
        "=DATEVALUE(A4)",
        "=TEXT(B4,\"mm/dd/yyyy\")"
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
        "Date Text",
        "Serial Number",
        "Formatted Date"
    ],
    [
        "2024-01-15",
        "=DATEVALUE(A2)",
        "=TEXT(B2,\"mm/dd/yyyy\")"
    ],
    [
        "2024-06-30",
        "=DATEVALUE(A3)",
        "=TEXT(B3,\"mm/dd/yyyy\")"
    ],
    [
        "2024-12-25",
        "=DATEVALUE(A4)",
        "=TEXT(B4,\"mm/dd/yyyy\")"
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
        "Date Text",
        "Serial Number",
        "Formatted Date"
    ],
    [
        "2024-01-15",
        "=DATEVALUE(A2)",
        "=TEXT(B2,\"mm/dd/yyyy\")"
    ],
    [
        "2024-06-30",
        "=DATEVALUE(A3)",
        "=TEXT(B3,\"mm/dd/yyyy\")"
    ],
    [
        "2024-12-25",
        "=DATEVALUE(A4)",
        "=TEXT(B4,\"mm/dd/yyyy\")"
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
        "Date Text",
        "Serial Number",
        "Formatted Date"
    ],
    [
        "2024-01-15",
        "=DATEVALUE(A2)",
        "=TEXT(B2,\"mm/dd/yyyy\")"
    ],
    [
        "2024-06-30",
        "=DATEVALUE(A3)",
        "=TEXT(B3,\"mm/dd/yyyy\")"
    ],
    [
        "2024-12-25",
        "=DATEVALUE(A4)",
        "=TEXT(B4,\"mm/dd/yyyy\")"
    ]
]
            }]
        });
    }
}
```

