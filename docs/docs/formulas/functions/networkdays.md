title: NETWORKDAYS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NETWORKDAYS function in Jspreadsheet

# NETWORKDAYS function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `NETWORKDAYS` function in Jspreadsheet Formulas Pro calculates the total number of workdays between two specified dates. This function considers weekends (Saturday and Sunday by default) and optionally, any listed holidays, which are not counted. By using this function, you can easily determine the number of workdays in a given period, which is particularly useful for project planning or tracking attendance.

## Documentation

Returns the number of whole workdays between start_date and end_date using parameters to indicate which and how many days are weekend days.

### Category

Date and time

### Syntax

NETWORKDAYS(start_date, end_date, [holidays])

| Parameter | Description |
| ----------- | ------------- |
| `start_date` | The start date of the period. |
| `end_date` | The end date of the period. |
| `holidays` | Optional. A range of one or more dates to exclude from the working calendar, such as state and federal holidays and floating holidays. |


### Behavior

The `NETWORKDAYS` function is used to calculate the number of whole working days between two dates in Excel. It automatically excludes weekends (Saturday and Sunday) and optionally, a list of specified holidays. 

- **Empty cells**: If either start date or end date is left empty, the `NETWORKDAYS` function will return a `#VALUE!` error.
- **Text**: If the start date or end date is entered as text that cannot be translated into a date, the function will return a `#VALUE!` error.
- **Booleans**: The `NETWORKDAYS` function does not support boolean values. If boolean values are used as start date or end date, it will give a `#VALUE!` error.
- **Errors**: If any of the provided arguments contain errors, the `NETWORKDAYS` function will propagate that error.
- **Date range**: The start date should be less than or equal to the end date. If this rule is not followed, the `NETWORKDAYS` function will return a negative number.

### Common Errors

| Error | Description |
| --- | --- |
| `#VALUE!` | This error occurs when the start date or end date is not recognized as a valid date. This can happen when the cell is empty, contains text that cannot be translated into a date, or contains boolean values. |
| `#NUM!` | This error occurs when the start date or end date is out of the valid date range (January 1, 1900 and December 31, 9999 for Windows Excel and January 1, 1904 and December 31, 9999 for Mac Excel). |
| `#REF!` | This error occurs when the list of holidays refers to a cell that is not valid. |

### Best practices

> - Always ensure that the start date and end date are valid dates, and the start date is less than or equal to the end date.
> - When specifying a list of holidays, make sure all the dates are valid and are in date format.
> - Use the `NETWORKDAYS.INTL` function if you want to customize which days of the week are considered weekends.
> - Remember that `NETWORKDAYS` function excludes the weekends and holidays in the calculation. If you want to include them, you may have to use other date functions.

### Usage

A few examples using the NETWORKDAYS function.

```
NETWORKDAYS("2023-01-01","2023-03-15") returns the number of whole workdays between Jan 1, 2023 and Mar 15, 2023 excluding weekends  
NETWORKDAYS("4/1/2023","4/30/2023",B1:B10) returns the number of whole workdays in April 2023 excluding weekends and holidays listed in range B1:B10  
NETWORKDAYS(A2,B2,["12/25/2023","1/1/2024"]) returns the number of whole workdays between the dates in cells A2 and B2, excluding weekends and holidays Dec 25, 2023 and Jan 1, 2024  
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
        "Workdays"
    ],
    [
        "2024-01-15",
        "2024-01-31",
        "=NETWORKDAYS(A2,B2)"
    ],
    [
        "2024-02-01",
        "2024-02-29",
        "=NETWORKDAYS(A3,B3)"
    ],
    [
        "2024-03-01",
        "2024-03-15",
        "=NETWORKDAYS(A4,B4)"
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
        "Workdays"
    ],
    [
        "2024-01-15",
        "2024-01-31",
        "=NETWORKDAYS(A2,B2)"
    ],
    [
        "2024-02-01",
        "2024-02-29",
        "=NETWORKDAYS(A3,B3)"
    ],
    [
        "2024-03-01",
        "2024-03-15",
        "=NETWORKDAYS(A4,B4)"
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
        "Workdays"
    ],
    [
        "2024-01-15",
        "2024-01-31",
        "=NETWORKDAYS(A2,B2)"
    ],
    [
        "2024-02-01",
        "2024-02-29",
        "=NETWORKDAYS(A3,B3)"
    ],
    [
        "2024-03-01",
        "2024-03-15",
        "=NETWORKDAYS(A4,B4)"
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
        "Workdays"
    ],
    [
        "2024-01-15",
        "2024-01-31",
        "=NETWORKDAYS(A2,B2)"
    ],
    [
        "2024-02-01",
        "2024-02-29",
        "=NETWORKDAYS(A3,B3)"
    ],
    [
        "2024-03-01",
        "2024-03-15",
        "=NETWORKDAYS(A4,B4)"
    ]
]
            }]
        });
    }
}
```

