title: WEEKDAY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the WEEKDAY function in Jspreadsheet

# WEEKDAY function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `WEEKDAY` function in Jspreadsheet Formulas Pro is a tool that helps you find out the specific day of the week for any given date. When you input a date into this function, it will return a number from 1 to 7, with each number representing a day of the week from Sunday to Saturday. This can be particularly helpful when you're dealing with schedules, planning events, or tracking timelines within your spreadsheet.

## Documentation

Returns the day of the week corresponding to a given date.

### Category

Date and time

### Syntax

WEEKDAY(serial_number, [return_type])

| Parameter | Description |
| ----------- | ------------- |
| `serial_number` | The serial number that represents the date whose day of the week you want to find. |
| `[return_type]` | Optional. A number that determines the type of return value:
1 (or omitted): Numbers 1 (Sunday) through 7 (Saturday)
2: Numbers 1 (Monday) through 7 (Sunday)
3: Numbers 0 (Monday) through 6 (Sunday)
11: Numbers 1 (Monday) through 7 (Sunday)
12: Numbers 1 (Tuesday) through 7 (Monday)
13: Numbers 1 (Wednesday) through 7 (Tuesday)
14: Numbers 1 (Thursday) through 7 (Wednesday)
15: Numbers 1 (Friday) through 7 (Thursday)
16: Numbers 1 (Saturday) through 7 (Friday)
17: Numbers 1 (Sunday) through 7 (Saturday) |


### Behavior

The `WEEKDAY` function in a spreadsheet returns a number representing the day of the week for a given date, starting from either Sunday or Monday, depending on the system settings. 

1. **Empty Cells**: If the `WEEKDAY` function is applied to an empty cell, it will return a `#VALUE!` error as it is expecting a date value.
2. **Text**: Applying the `WEEKDAY` function to a cell containing text (that is not a date) will result in a `#VALUE!` error.
3. **Booleans**: If the `WEEKDAY` function is applied to a cell containing a Boolean value (`TRUE` or `FALSE`), it will treat `TRUE` as 1 (January 1, 1900) and `FALSE` as 0 (January 0, 1900) and will return corresponding weekday.
4. **Errors**: If the cell to which you apply the `WEEKDAY` function contains an error, the function will also return that same error.
5. **Numeric values**: If a numeric value is used instead of a date, the `WEEKDAY` function treats it as a serial number representing a date (where 1 is January 1, 1900).

### Common Errors

| Error | Description |
| ------ | ------------ |
| #VALUE! | This error occurs when the input cell is empty or contains text that is not a date. |
| #NUM! | This error is returned when the input date is out of range (i.e., it is less than January 1, 1900). |
| #REF! | This error is returned when the reference cell is invalid. |

### Best practices

> - Always ensure that the cell you are applying the `WEEKDAY` function to contains a valid date or a numeric value representing a date.
> - Be mindful of the system settings while interpreting the output of the `WEEKDAY` function. Some systems start the week with Sunday (returning 1) while others start with Monday (returning 1).
> - Avoid applying the `WEEKDAY` function directly to cells that may contain text or errors, as it can result in an error. Use error handling functions to manage this.
> - To get the correct weekday, ensure that the date in the cell is formatted as a date and not as text.

### Usage

A few examples using the WEEKDAY function.

```
WEEKDAY("2022-03-17") returns: 5  
WEEKDAY("2023-01-01", 3) returns: 2  
WEEKDAY("2023-02-22", 2) returns: 4  
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
        "Date",
        "Day of Week (1-7)",
        "Day Name"
    ],
    [
        "2024-01-15",
        "=WEEKDAY(A2)",
        "Monday"
    ],
    [
        "2024-03-22",
        "=WEEKDAY(A3)",
        "Friday"
    ],
    [
        "2024-12-25",
        "=WEEKDAY(A4)",
        "Wednesday"
    ],
    [
        "2024-07-04",
        "=WEEKDAY(A5)",
        "Thursday"
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
        "Date",
        "Day of Week (1-7)",
        "Day Name"
    ],
    [
        "2024-01-15",
        "=WEEKDAY(A2)",
        "Monday"
    ],
    [
        "2024-03-22",
        "=WEEKDAY(A3)",
        "Friday"
    ],
    [
        "2024-12-25",
        "=WEEKDAY(A4)",
        "Wednesday"
    ],
    [
        "2024-07-04",
        "=WEEKDAY(A5)",
        "Thursday"
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
        "Date",
        "Day of Week (1-7)",
        "Day Name"
    ],
    [
        "2024-01-15",
        "=WEEKDAY(A2)",
        "Monday"
    ],
    [
        "2024-03-22",
        "=WEEKDAY(A3)",
        "Friday"
    ],
    [
        "2024-12-25",
        "=WEEKDAY(A4)",
        "Wednesday"
    ],
    [
        "2024-07-04",
        "=WEEKDAY(A5)",
        "Thursday"
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
        "Date",
        "Day of Week (1-7)",
        "Day Name"
    ],
    [
        "2024-01-15",
        "=WEEKDAY(A2)",
        "Monday"
    ],
    [
        "2024-03-22",
        "=WEEKDAY(A3)",
        "Friday"
    ],
    [
        "2024-12-25",
        "=WEEKDAY(A4)",
        "Wednesday"
    ],
    [
        "2024-07-04",
        "=WEEKDAY(A5)",
        "Thursday"
    ]
]
            }]
        });
    }
}
```

