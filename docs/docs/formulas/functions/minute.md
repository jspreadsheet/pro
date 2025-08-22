title: MINUTE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the MINUTE function in Jspreadsheet

# MINUTE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `MINUTE` function in Jspreadsheet Formulas Pro is a tool that extracts the minute component from a given time value. It's presented as a whole number that can be anywhere from 0 to 59, corresponding to the minutes in an hour. This function is handy when you need to perform calculations or analysis involving the minute portion of time data in your Jspreadsheet.

## Documentation

Returns the minute of a time value. The minute is given as an integer, ranging from 0 to 59.

### Category

Date and time

### Syntax

MINUTE(serial_number)

| Parameter | Description |
| ----------- | ------------- |
| `serial_number` | The time that contains the minute you want to find. |


### Behavior

The `MINUTE` function in spreadsheets is designed to return the minute component of a particular time. The time is represented as a decimal number between 0 (12:00:00 AM) and 0.99999999 (11:59:59 PM). 

Here is how `MINUTE` handles different inputs:

- **Empty cells**: If the `MINUTE` function is applied to an empty cell, it will return `0`.

- **Text**: If the cell contains text that doesn't represent a date or time, the `MINUTE` function will return a `#VALUE!` error.

- **Booleans**: If the cell contains a boolean value, the `MINUTE` function will treat it as `0` for `FALSE` and `1` for `TRUE`, and hence will return `0` in both cases.

- **Errors**: If the referenced cell contains an error, the `MINUTE` function will return that error.

- **Non-date values**: If the cell contains numeric values that don't represent a date or time, the `MINUTE` function will treat it as a time serial number and may return unexpected results.

### Common Errors

| Error | Description |
|-------|-------------|
| `#VALUE!` | Occurs when the input cell contains text that doesn't represent a date or time. |
| `#REF!` | Occurs when the referenced cell is invalid. |
| `#NAME?` | Occurs when the function name is spelled incorrectly. |

### Best practices

> - Always ensure that the input cell contains a valid date or time, as the `MINUTE` function can give unexpected results or errors with other types of data. 
> - Be aware of the time serial number system used in spreadsheets, where `1` represents a 24-hour day. This can affect the result of the `MINUTE` function.
> - Use the `HOUR`, `MINUTE`, and `SECOND` functions together to extract all time components from a date/time value.
> - Avoid using `MINUTE` function on cells containing error values as it propagates the errors.

### Usage

A few examples using the MINUTE function.

```
MINUTE("2:30:15 PM") returns 30  
MINUTE("9/1/2022 5:45:00 AM") returns 45  
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
        "Time",
        "Minutes"
    ],
    [
        "9:15:30 AM",
        "=MINUTE(A2)"
    ],
    [
        "2:45:15 PM",
        "=MINUTE(A3)"
    ],
    [
        "11:08:45 PM",
        "=MINUTE(A4)"
    ],
    [
        "6:30:00 AM",
        "=MINUTE(A5)"
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
        "Time",
        "Minutes"
    ],
    [
        "9:15:30 AM",
        "=MINUTE(A2)"
    ],
    [
        "2:45:15 PM",
        "=MINUTE(A3)"
    ],
    [
        "11:08:45 PM",
        "=MINUTE(A4)"
    ],
    [
        "6:30:00 AM",
        "=MINUTE(A5)"
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
        "Time",
        "Minutes"
    ],
    [
        "9:15:30 AM",
        "=MINUTE(A2)"
    ],
    [
        "2:45:15 PM",
        "=MINUTE(A3)"
    ],
    [
        "11:08:45 PM",
        "=MINUTE(A4)"
    ],
    [
        "6:30:00 AM",
        "=MINUTE(A5)"
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
        "Time",
        "Minutes"
    ],
    [
        "9:15:30 AM",
        "=MINUTE(A2)"
    ],
    [
        "2:45:15 PM",
        "=MINUTE(A3)"
    ],
    [
        "11:08:45 PM",
        "=MINUTE(A4)"
    ],
    [
        "6:30:00 AM",
        "=MINUTE(A5)"
    ]
]
            }]
        });
    }
}
```

