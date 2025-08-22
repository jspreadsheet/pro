title: HOUR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the HOUR function in Jspreadsheet

# HOUR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `HOUR` function in Jspreadsheet Formulas Pro is used to extract the hour component from a specific time. It presents the hour in a numeric format. For example, if the time is '5:30:15', the `HOUR` function will return '5'. This function is particularly useful when you need to perform calculations or comparisons based on the hour part of a time value.

## Documentation

Returns the hour component of a specific time, in numeric format.

### Category

Date and time

### Syntax

HOUR(serial_number)

| Parameter | Description |
| ----------- | ------------- |
| `serial_number` | The time from which to extract the hour component. Excel stores dates and times as serial numbers, for example "Jan 1, 2023 12:00 PM" is stored as 44420.5. |


### Behavior

The 'HOUR' function in a spreadsheet is used to extract the hour as an integer from a given time value. The time can be referenced from a cell containing the time or it can be manually entered into the function. 

- When the cell is empty, the 'HOUR' function returns `0`.
- If the cell contains text, the 'HOUR' function returns a `#VALUE!` error.
- In case of boolean values, 'HOUR' function treats `TRUE` as `1` and `FALSE` as `0`, interpreting them as time values. Since these are not valid time values, the function returns `0`.
- If a cell contains an error, the 'HOUR' function will also return that error.
- The 'HOUR' function ignores the date part if it's included with the time value.

### Common Errors

| Error | Description |
|---|---|
| `#VALUE!` | This error occurs when the value provided in the function is not a valid time. |
| `#NAME?` | This error is returned when the syntax of the 'HOUR' function is written incorrectly. |
| `#NUM!` | This error occurs when the provided time value is out of range. The time values must be between `0` (0:00:00 AM) and `1` (11:59:59 PM). |
| `#REF!` | This error is returned when the cell reference provided in the function is invalid. |

### Best practices

> - Always ensure that the data provided to the 'HOUR' function is a valid time, in order to avoid a `#VALUE!` error.
> - In case you're not sure about the validity of data, you can use error checking functions like `ISERROR` or `IFERROR` along with the 'HOUR' function to handle possible errors.
> - If you're manually entering the time into the 'HOUR' function, always use the correct time format.
> - Remember, the 'HOUR' function ignores the date part if it's included with the time value. Make sure you are only interested in the hour part of the time.

### Usage

A few examples using the HOUR function.

```
HOUR("8:30:00 AM") returns 8  
HOUR("15:45:00") returns 15  
HOUR("23:59:01") returns 23  
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
        "Hour"
    ],
    [
        "8:30:00 AM",
        "=HOUR(A2)"
    ],
    [
        "15:45:00",
        "=HOUR(A3)"
    ],
    [
        "23:59:01",
        "=HOUR(A4)"
    ],
    [
        "2:15:30 PM",
        "=HOUR(A5)"
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
        "Hour"
    ],
    [
        "8:30:00 AM",
        "=HOUR(A2)"
    ],
    [
        "15:45:00",
        "=HOUR(A3)"
    ],
    [
        "23:59:01",
        "=HOUR(A4)"
    ],
    [
        "2:15:30 PM",
        "=HOUR(A5)"
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
        "Hour"
    ],
    [
        "8:30:00 AM",
        "=HOUR(A2)"
    ],
    [
        "15:45:00",
        "=HOUR(A3)"
    ],
    [
        "23:59:01",
        "=HOUR(A4)"
    ],
    [
        "2:15:30 PM",
        "=HOUR(A5)"
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
        "Hour"
    ],
    [
        "8:30:00 AM",
        "=HOUR(A2)"
    ],
    [
        "15:45:00",
        "=HOUR(A3)"
    ],
    [
        "23:59:01",
        "=HOUR(A4)"
    ],
    [
        "2:15:30 PM",
        "=HOUR(A5)"
    ]
]
            }]
        });
    }
}
```

