title: WORKDAY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the WORKDAY function in Jspreadsheet

# WORKDAY function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `WORKDAY` function in Jspreadsheet Formulas Pro is a tool that allows you to calculate a specific date, either before or after a given starting date, based on a specified number of working days. It takes into account weekends (Saturday and Sunday) as non-working days, but does not consider public holidays or specific non-working days. The function is particularly useful for project planning and management, where you need to determine deadlines or milestones based on working days.

## Documentation

Returns the date that is the indicated number of working days before or after a date (the starting date).

### Category

Date and time

### Syntax

WORKDAY(start_date, days, [holidays])

| Parameter | Description |
| ----------- | ------------- |
| `start_date` | The starting date, expressed as a serial number or a date. |
| `days` | The number of working days before or after the start date. A positive value for days generates a future date; a negative value generates a past date. |
| `[holidays]` | Optional. An optional range of one or more dates to exclude from the working calendar, such as state and federal holidays and floating holidays. |


### Behavior

The `WORKDAY` function in spreadsheet is designed to calculate working days, excluding weekends and optionally specified holidays. It takes in a start date and the number of work days to add or subtract, and returns the resulting date. 

- For empty cells, the function will return a `#VALUE!` error as it expects a valid date and number of days. 
- If the cell contains text that cannot be interpreted as a date or number of days, it will return a `#VALUE!` error.
- If a boolean value is used, it will be interpreted as 0 (for FALSE) or 1 (for TRUE).
- The function will return a `#NUM!` error if the resulting date is outside the range of valid dates (January 1, 1900 and December 31, 9999).
- If the provided number of days is non-integer, it will be truncated.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | The function returns this error when the input cells are empty, or contain text that cannot be interpreted as a date or number of days. |
| `#NUM!` | This error is returned when the resulting date is outside the range of valid dates (January 1, 1900 and December 31, 9999). |
| `#NAME?` | The function returns this error when it is not properly recognized, which may happen if the spreadsheet software does not support it. |

### Best practices

> - Always make sure that the start date and the number of days are valid to avoid `#VALUE!` or `#NUM!` errors.
> - Use the third optional argument to specify holidays that should be considered non-working days. This should be a range of cells that contain the dates of holidays.
> - Keep in mind that the function automatically excludes weekends (Saturday and Sunday) in its calculations. If your work week is different, you may need to adjust the function or use a different one.
> - Remember to set your spreadsheet's date system correctly (1900 or 1904 date system), as this could affect the calculation of dates.

### Usage

A few examples using the WORKDAY function.

```
WORKDAY("2023-03-15", 5) returns:"2023-03-22"  
WORKDAY("2023-03-15", -5) returns:"2023-03-08"  
WORKDAY("2023-03-15", 10, ["2023-03-20","2023-03-21"]) returns:"2023-04-01"  
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
        "Project Start",
        "Work Days",
        "Project End",
        "Holiday List"
    ],
    [
        "2024-01-15",
        10,
        "=WORKDAY(A2,B2)",
        "2024-01-19"
    ],
    [
        "2024-02-01",
        15,
        "=WORKDAY(A3,B3,D3:D4)",
        "2024-02-12"
    ],
    [
        "2024-03-10",
        -5,
        "=WORKDAY(A4,B4)",
        "2024-02-19"
    ],
    [
        "2024-04-01",
        20,
        "=WORKDAY(A5,B5)",
        ""
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
        "Project Start",
        "Work Days",
        "Project End",
        "Holiday List"
    ],
    [
        "2024-01-15",
        10,
        "=WORKDAY(A2,B2)",
        "2024-01-19"
    ],
    [
        "2024-02-01",
        15,
        "=WORKDAY(A3,B3,D3:D4)",
        "2024-02-12"
    ],
    [
        "2024-03-10",
        -5,
        "=WORKDAY(A4,B4)",
        "2024-02-19"
    ],
    [
        "2024-04-01",
        20,
        "=WORKDAY(A5,B5)",
        ""
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
        "Project Start",
        "Work Days",
        "Project End",
        "Holiday List"
    ],
    [
        "2024-01-15",
        10,
        "=WORKDAY(A2,B2)",
        "2024-01-19"
    ],
    [
        "2024-02-01",
        15,
        "=WORKDAY(A3,B3,D3:D4)",
        "2024-02-12"
    ],
    [
        "2024-03-10",
        -5,
        "=WORKDAY(A4,B4)",
        "2024-02-19"
    ],
    [
        "2024-04-01",
        20,
        "=WORKDAY(A5,B5)",
        ""
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
        "Project Start",
        "Work Days",
        "Project End",
        "Holiday List"
    ],
    [
        "2024-01-15",
        10,
        "=WORKDAY(A2,B2)",
        "2024-01-19"
    ],
    [
        "2024-02-01",
        15,
        "=WORKDAY(A3,B3,D3:D4)",
        "2024-02-12"
    ],
    [
        "2024-03-10",
        -5,
        "=WORKDAY(A4,B4)",
        "2024-02-19"
    ],
    [
        "2024-04-01",
        20,
        "=WORKDAY(A5,B5)",
        ""
    ]
]
            }]
        });
    }
}
```

