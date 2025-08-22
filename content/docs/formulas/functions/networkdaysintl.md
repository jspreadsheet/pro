title: NETWORKDAYS.INTL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NETWORKDAYS.INTL function in Jspreadsheet

# NETWORKDAYS.INTL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `NETWORKDAYS.INTL` function counts the total number of workdays between two specified dates, allowing you to define weekend days and exclude specific holidays. This function is handy in calculating work durations or project timelines. You can customize which days of the week are considered weekends, and you can also provide a list of dates that should be excluded from the count as holidays. This function ensures a more accurate calculation of working days, taking into consideration non-standard weekends and specific days off.

## Documentation

Returns the number of whole workdays between start_date and end_date using parameters to indicate which and how many days are weekend days, and a given set of holidays.

### Category

Date and time

### Syntax

NETWORKDAYS.INTL(start_date, end_date, [weekend], [holidays])

| Parameter | Description |
| ----------- | ------------- |
| `start_date` | The start date of the period. |
| `end_date` | The end date of the period. |
| `[weekend]` | Optional. An argument that indicates which days of the week are weekend days. Use a seven-character string with a 1 or 0 in each position representing Monday through Sunday, respectively. A 1 indicates a non-workday and 0 indicates a workday. |
| `[holidays]` | Optional. A range of one or more dates to exclude from the working calendar, such as state and federal holidays and floating holidays. |


### Behavior

The `NETWORKDAYS.INTL` function in spreadsheets calculates the number of whole working days between two provided dates. This function allows customization of which days of the week are considered weekends (non-working days). 

- If a cell is empty, the function will return an error.
- The function does not accept text or booleans. Inputs must be dates or cell references containing dates.
- It ignores time values in the date cells and considers only the date part of the cell.
- Any errors within the referenced cells will cause the `NETWORKDAYS.INTL` function to return an error.
- If the start date is greater than the end date, the function will return a negative value.

### Common Errors

| Error | Description |
| --- | --- |
| #NUM! | Occurs if the start date is greater than the end date, or if the weekend parameter is less than 1 or greater than 7 and is not a string of seven 0s or 1s |
| #VALUE! | Occurs if any of the supplied arguments are non-numeric or are logical values |
| #NAME? | Occurs if the formula name is spelled incorrectly or if there's a problem with the function's syntax |

### Best practices

> - Always ensure the start date is less than or equal to the end date to avoid a negative result or an error.
> - Be clear about which days are considered non-working days in your context. The `NETWORKDAYS.INTL` function allows customization of weekends, which can be particularly useful in cultures where the weekend days are not Saturday and Sunday.
> - Use cell references as function arguments instead of direct inputs. This makes your spreadsheet dynamic and easily editable.
> - It's a good practice to handle possible errors using error handling functions like `IFERROR` or `ISERROR` to avoid disruption in subsequent calculations.

### Usage

A few examples using the NETWORKDAYS.INTL function.

```
NETWORKDAYS.INTL("2023-01-01", "2023-03-15", "0111110") returns the number of whole workdays between Jan 1, 2023 and Mar 15, 2023 excluding weekends (Saturday and Sunday)  
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
        "=NETWORKDAYS.INTL(A2,B2)"
    ],
    [
        "2024-02-01",
        "2024-02-29",
        "=NETWORKDAYS.INTL(A3,B3)"
    ],
    [
        "2024-03-01",
        "2024-03-15",
        "=NETWORKDAYS.INTL(A4,B4,\"0111110\")"
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
        "=NETWORKDAYS.INTL(A2,B2)"
    ],
    [
        "2024-02-01",
        "2024-02-29",
        "=NETWORKDAYS.INTL(A3,B3)"
    ],
    [
        "2024-03-01",
        "2024-03-15",
        "=NETWORKDAYS.INTL(A4,B4,\"0111110\")"
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
        "=NETWORKDAYS.INTL(A2,B2)"
    ],
    [
        "2024-02-01",
        "2024-02-29",
        "=NETWORKDAYS.INTL(A3,B3)"
    ],
    [
        "2024-03-01",
        "2024-03-15",
        "=NETWORKDAYS.INTL(A4,B4,\"0111110\")"
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
        "=NETWORKDAYS.INTL(A2,B2)"
    ],
    [
        "2024-02-01",
        "2024-02-29",
        "=NETWORKDAYS.INTL(A3,B3)"
    ],
    [
        "2024-03-01",
        "2024-03-15",
        "=NETWORKDAYS.INTL(A4,B4,\"0111110\")"
    ]
]
            }]
        });
    }
}
```

