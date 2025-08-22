title: SECOND function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the SECOND function in Jspreadsheet

# SECOND function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `SECOND` function in Jspreadsheet Formulas Pro is a handy tool that allows you to extract the seconds from a given time value. It's very simple to use; you just input a time value and the function will output the seconds from that value. It's especially useful when you need to perform calculations or comparisons based on seconds for time management or data analysis.

## Documentation

Returns the seconds of a time value.

### Category

Date and time

### Syntax

SECOND(serial_number)

| Parameter | Description |
| ----------- | ------------- |
| `serial_number` | The serial number of the date-time value from which to extract the second. |


### Behavior

The 'SECOND' function in spreadsheets is designed to extract the second component from a given time. It is usually used in conjunction with other date and time functions. Here's how it handles different types of data:

- **Empty cells:** If the 'SECOND' function is applied to an empty cell, it will return an error because it expects a time value.
- **Text:** If the function is applied to a cell containing text, it will return an error. The function only works with time values.
- **Booleans:** Similar to text cells, applying the 'SECOND' function to a boolean value will result in an error.
- **Errors:** If the referenced cell contains an error, the 'SECOND' function will also return an error.
- **Numbers:** If a cell contains a number, the 'SECOND' function will treat this number as a serial number, where 1 represents 24 hours. The function will then return the second component based on this interpretation.
- **Dates:** The 'SECOND' function will return the second component of the time part of the date. If the date does not have a time part, the function will return 0.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the input argument is not a valid time. |
| #REF! | This error occurs when the referenced cell is invalid. For example, if the cell has been deleted. |
| #NAME? | This error occurs when the spreadsheet does not recognize the function name. This could be due to a typo or if the 'SECOND' function is not supported in the spreadsheet software. |

### Best practices

> - Always ensure that the input to the 'SECOND' function is a valid time. If you're unsure, you can use the 'ISTIME' function to check.
> - Keep in mind that the 'SECOND' function only returns the second component of a time. If you need to work with minutes or hours, use the 'MINUTE' or 'HOUR' function respectively.
> - Be aware that the 'SECOND' function interprets numbers as serial numbers, where 1 represents 24 hours. This might lead to unexpected results if you're not familiar with this behavior.
> - Remember that the 'SECOND' function does not work with text or boolean values. If you're working with these types of data, you might need to convert them to a valid time first.

### Usage

A few examples using the SECOND function.

```
SECOND("12:30:45 PM") returns 45  
SECOND("7/4/2022 8:15:30 AM") returns 30  
SECOND("9:00:00 PM") returns 0  
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
        "Seconds"
    ],
    [
        "12:30:45",
        "=SECOND(A2)"
    ],
    [
        "08:15:30",
        "=SECOND(A3)"
    ],
    [
        "21:00:00",
        "=SECOND(A4)"
    ],
    [
        "14:22:18",
        "=SECOND(A5)"
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
        "Seconds"
    ],
    [
        "12:30:45",
        "=SECOND(A2)"
    ],
    [
        "08:15:30",
        "=SECOND(A3)"
    ],
    [
        "21:00:00",
        "=SECOND(A4)"
    ],
    [
        "14:22:18",
        "=SECOND(A5)"
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
        "Seconds"
    ],
    [
        "12:30:45",
        "=SECOND(A2)"
    ],
    [
        "08:15:30",
        "=SECOND(A3)"
    ],
    [
        "21:00:00",
        "=SECOND(A4)"
    ],
    [
        "14:22:18",
        "=SECOND(A5)"
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
        "Seconds"
    ],
    [
        "12:30:45",
        "=SECOND(A2)"
    ],
    [
        "08:15:30",
        "=SECOND(A3)"
    ],
    [
        "21:00:00",
        "=SECOND(A4)"
    ],
    [
        "14:22:18",
        "=SECOND(A5)"
    ]
]
            }]
        });
    }
}
```

