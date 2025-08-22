title: TIMEVALUE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TIMEVALUE function in Jspreadsheet

# TIMEVALUE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TIMEVALUE` function in Jspreadsheet Formulas Pro is a handy tool that turns a text string, which is representing a time, into a decimal value. This means if you have a time written in text format like "12:30 PM", this function will convert it into a numerical form that the system can interpret. It's useful for calculations involving time or when you need to manipulate data involving time periods. Remember, the time should be in a format that Jspreadsheet can recognize, such as "HH:MM:SS".

## Documentation

Converts a text string representing a time into a decimal value.

### Category

Date and time

### Syntax

TIMEVALUE(time_text)

| Parameter | Description |
| ----------- | ------------- |
| `time_text` | The text string representing the time to convert. Must be in a recognizable format, such as "5:45 PM" or "17:45". |


### Behavior

The `TIMEVALUE` function in spreadsheets converts a time represented as text to a decimal number that represents the time in a numerical format. This function is incredibly useful when you want to perform calculations on time values. Here's how it behaves with different types of inputs:

- **Empty Cells**: When the function is used on an empty cell, it returns a `#VALUE!` error because the function expects a time in text format.
- **Text**: This function works best with time represented as text. It converts the time text into a decimal. For example, `TIMEVALUE("12:00:00 PM")` returns 0.5.
- **Booleans**: When used with boolean values, `TIMEVALUE` returns a `#VALUE!` error because it expects a time in text format.
- **Errors**: If the input cell contains an error, `TIMEVALUE` will return that error.
- **Non-time Text**: If the time text is not recognized as a valid time, the function will return a `#VALUE!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| `#VALUE!` | This error is returned when the input is not recognized as a valid time. This includes empty cells, boolean values, or non-time text. |
| `#NUM!` | This error occurs when the function gets a valid time text, but the time is outside the acceptable range (from 0:00:00 (zero) to 0:59:59). |
| `#REF!` | This error is returned when the cell reference is not valid. For example, if a cell reference is deleted that is being used in the function. |

### Best practices

> - Always make sure the input time is in text format. You can use the `TEXT` function to convert a time value to text if necessary.
> - Ensure the time is within the acceptable range (from 0:00:00 (zero) to 0:59:59) to avoid the `#NUM!` error.
> - To avoid `#REF!` errors, be careful not to delete cells that are being used in your `TIMEVALUE` function.
> - Handle possible errors using error handling functions like `IFERROR` to make your spreadsheet cleaner and more professional.

### Usage

A few examples using the TIMEVALUE function.

```
TIMEVALUE("9:30 AM") returns 0.3958333333  
TIMEVALUE("16:15") returns 0.6770833333  
TIMEVALUE("12:00:01 AM") returns 0.00001157408  
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
        "Time Text",
        "Decimal Value"
    ],
    [
        "9:30 AM",
        "=TIMEVALUE(A2)"
    ],
    [
        "2:45 PM",
        "=TIMEVALUE(A3)"
    ],
    [
        "11:59:59 PM",
        "=TIMEVALUE(A4)"
    ],
    [
        "6:15 AM",
        "=TIMEVALUE(A5)"
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
        "Time Text",
        "Decimal Value"
    ],
    [
        "9:30 AM",
        "=TIMEVALUE(A2)"
    ],
    [
        "2:45 PM",
        "=TIMEVALUE(A3)"
    ],
    [
        "11:59:59 PM",
        "=TIMEVALUE(A4)"
    ],
    [
        "6:15 AM",
        "=TIMEVALUE(A5)"
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
        "Time Text",
        "Decimal Value"
    ],
    [
        "9:30 AM",
        "=TIMEVALUE(A2)"
    ],
    [
        "2:45 PM",
        "=TIMEVALUE(A3)"
    ],
    [
        "11:59:59 PM",
        "=TIMEVALUE(A4)"
    ],
    [
        "6:15 AM",
        "=TIMEVALUE(A5)"
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
        "Time Text",
        "Decimal Value"
    ],
    [
        "9:30 AM",
        "=TIMEVALUE(A2)"
    ],
    [
        "2:45 PM",
        "=TIMEVALUE(A3)"
    ],
    [
        "11:59:59 PM",
        "=TIMEVALUE(A4)"
    ],
    [
        "6:15 AM",
        "=TIMEVALUE(A5)"
    ]
]
            }]
        });
    }
}
```

