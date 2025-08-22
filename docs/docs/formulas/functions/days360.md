title: DAYS360 function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DAYS360 function in Jspreadsheet

# DAYS360 function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DAYS360` function in Jspreadsheet Formulas Pro allows you to find out the number of days between two specified dates, using a 360-day year model. This is particularly useful in financial calculations where a year is often considered as 360 days for simplicity. You simply input the two dates you want to calculate the difference between, and the function will return the number of days based on a 360-day year.

## Documentation

Calculates the number of days between two dates using a 360-day year.

### Category

Date and time

### Syntax

DAYS360(start_date, end_date, [method])

| Parameter | Description |
| ----------- | ------------- |
| `start_date` | The start date of the time period. |
| `end_date` | The end date of the time period. |
| `[method]` | Optional. A flag that specifies the method to use for calculating the number of days. If omitted or zero, the US method is used. If non-zero, the European method is used. |


### Behavior

The `DAYS360` function in spreadsheets calculates the number of days between two dates based on a 360-day year (twelve 30-day months), which is used in some accounting calculations. Here's how it handles different scenarios:

- Empty cells: If either of the date cells is empty, the function will return a `#VALUE!` error.
- Text: If either of the date cells contains text that cannot be interpreted as a date, the function will return a `#VALUE!` error.
- Booleans: If either of the date cells contains a boolean value (`TRUE` or `FALSE`), the function will return a `#VALUE!` error.
- Errors: If either of the date cells contains an error (like `#N/A`, `#VALUE!`, `#REF!`, `#DIV/0!`, `#NUM!`, `#NAME?`, or `#NULL!`), the function will propagate that error.
- Date Inputs: The function expects the start date and end date to be provided in a specific format (YYYY-MM-DD). If the dates are not in this format, it may lead to incorrect results or errors.

### Common Errors

| Error | Description |
|-------|-------------|
| `#VALUE!` | This error is returned if either of the input cells is empty, contains text that cannot be interpreted as a date, or contains a boolean value. |
| `#NUM!` | This error is returned if the start date is later than the end date. |
| `#REF!` | This error is returned if the cell reference is not valid. For example, if a cell reference is deleted. |
| Error propagated | If either of the date cells contains an error, the `DAYS360` function will return that error. |

### Best practices

> - Always ensure that the start date is earlier than the end date to avoid a `#NUM!` error.
> - Ensure that date values are entered in a format that your spreadsheet software can recognize (typically YYYY-MM-DD).
> - Be careful when referencing cells. If a cell reference is deleted or moved, it could lead to a `#REF!` error.
> - Use error handling functions like `IFERROR` or `ISERROR` to handle potential errors and keep your spreadsheet clean and professional-looking.

### Usage

A few examples using the DAYS360 function.

```
DAYS360("2012-02-02","2012-03-30") returns 58  
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
        "Start Date",
        "End Date",
        "Days (360-day year)"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        "=DAYS360(A2,B2)"
    ],
    [
        "2024-03-01",
        "2024-12-31",
        "=DAYS360(A3,B3)"
    ],
    [
        "2024-06-10",
        "2024-09-25",
        "=DAYS360(A4,B4)"
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
        "Start Date",
        "End Date",
        "Days (360-day year)"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        "=DAYS360(A2,B2)"
    ],
    [
        "2024-03-01",
        "2024-12-31",
        "=DAYS360(A3,B3)"
    ],
    [
        "2024-06-10",
        "2024-09-25",
        "=DAYS360(A4,B4)"
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
        "Start Date",
        "End Date",
        "Days (360-day year)"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        "=DAYS360(A2,B2)"
    ],
    [
        "2024-03-01",
        "2024-12-31",
        "=DAYS360(A3,B3)"
    ],
    [
        "2024-06-10",
        "2024-09-25",
        "=DAYS360(A4,B4)"
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
        "Start Date",
        "End Date",
        "Days (360-day year)"
    ],
    [
        "2024-01-15",
        "2024-04-15",
        "=DAYS360(A2,B2)"
    ],
    [
        "2024-03-01",
        "2024-12-31",
        "=DAYS360(A3,B3)"
    ],
    [
        "2024-06-10",
        "2024-09-25",
        "=DAYS360(A4,B4)"
    ]
]
            }]
        });
    }
}
```

