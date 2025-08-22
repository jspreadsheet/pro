title: DATE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DATE function in Jspreadsheet

# DATE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DATE` function in Jspreadsheet Formulas Pro is a helpful tool that allows you to create a date from separate year, month, and day inputs. You would use it by inputting these three values in the order of year, month, and day. This function is particularly useful when you have these values in different cells and want to consolidate them into a single date. With this, you can easily manage and manipulate date values in your spreadsheet.

## Documentation

Returns the date based on a year, month, and day.

### Category

Date and time

### Syntax

DATE(year, month, day)

| Parameter | Description |
| ----------- | ------------- |
| `year` | The year as an integer. |
| `month` | The month as an integer (1-12). |
| `day` | The day of the month as an integer (1-31). |


### Behavior

The `DATE` function in spreadsheets creates a date with the year, month, and day supplied as arguments. The function expects three arguments, all of which should be integers. The function handles inputs in the following way:

- Empty Cells: If an empty cell is referenced as an argument, it is treated as a zero.
- Text: If a text string is provided as an argument, the function will return a `#VALUE!` error.
- Booleans: If a Boolean value (`TRUE` or `FALSE`) is provided as an argument, `TRUE` is interpreted as 1 and `FALSE` is interpreted as 0.
- Errors: If any of the arguments are error values, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | Seen when any of the arguments are non-numeric or if the arguments are not integers. |
| #NUM! | Seen when the year argument is less than -4713 or more than 9999, or if the date created is not valid (for example, February 30). |
| #REF! | Seen when the formula refers to a cell that is not valid. |

### Best practices

> - Always ensure that the arguments to the `DATE` function are valid numbers. Text or non-integer numbers will result in errors.
> - Be cautious while using cell references as arguments. If the cell contains text or error values, the `DATE` function will also return an error.
> - The `DATE` function will accept year values from -4713 to 9999, and month values beyond 12 or below 1 by rolling over to the corresponding month in the previous/next year. However, it's best to keep the values within the conventional range for clarity.
> - When using `DATE` function in a formula, remember that spreadsheets store dates as sequential serial numbers, so they can be used in calculations.

### Usage

A few examples using the DATE function.

```
DATE(2022,3,15) returns March 15, 2022  
DATE(2023,12,31) returns December 31, 2023  
DATE(2024,2,29) returns February 29, 2024 (a leap year)  
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
        "Year",
        "Month",
        "Day",
        "Date"
    ],
    [
        2024,
        1,
        15,
        "=DATE(A2,B2,C2)"
    ],
    [
        2023,
        12,
        25,
        "=DATE(A3,B3,C3)"
    ],
    [
        2024,
        2,
        29,
        "=DATE(A4,B4,C4)"
    ],
    [
        2022,
        7,
        4,
        "=DATE(A5,B5,C5)"
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
        "Year",
        "Month",
        "Day",
        "Date"
    ],
    [
        2024,
        1,
        15,
        "=DATE(A2,B2,C2)"
    ],
    [
        2023,
        12,
        25,
        "=DATE(A3,B3,C3)"
    ],
    [
        2024,
        2,
        29,
        "=DATE(A4,B4,C4)"
    ],
    [
        2022,
        7,
        4,
        "=DATE(A5,B5,C5)"
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
        "Year",
        "Month",
        "Day",
        "Date"
    ],
    [
        2024,
        1,
        15,
        "=DATE(A2,B2,C2)"
    ],
    [
        2023,
        12,
        25,
        "=DATE(A3,B3,C3)"
    ],
    [
        2024,
        2,
        29,
        "=DATE(A4,B4,C4)"
    ],
    [
        2022,
        7,
        4,
        "=DATE(A5,B5,C5)"
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
        "Year",
        "Month",
        "Day",
        "Date"
    ],
    [
        2024,
        1,
        15,
        "=DATE(A2,B2,C2)"
    ],
    [
        2023,
        12,
        25,
        "=DATE(A3,B3,C3)"
    ],
    [
        2024,
        2,
        29,
        "=DATE(A4,B4,C4)"
    ],
    [
        2022,
        7,
        4,
        "=DATE(A5,B5,C5)"
    ]
]
            }]
        });
    }
}
```

