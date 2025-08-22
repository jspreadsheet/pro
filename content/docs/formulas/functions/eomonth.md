title: EOMONTH function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EOMONTH function in Jspreadsheet

# EOMONTH function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The EOMONTH function in Jspreadsheet Formulas Pro is a useful tool for working with dates. This function provides the last day of the month, based on a specific number of months you define, either before or after a certain date. For instance, if you want to know the final day of the month, three months from a specific date, the EOMONTH function will give you this information. It's a handy function for managing and planning around dates.

## Documentation

The EOMONTH function returns the last day of the month that is a specified number of months before or after a given date.

### Category

Date and time

### Syntax

EOMONTH(start_date, months)

| Parameter | Description |
| ----------- | ------------- |
| `start_date` | The start date to use in the calculation. |
| `months` | The number of months before or after the start date. A positive value for months yields a future date; a negative value yields a past date. |


### Behavior

The `EOMONTH` function in spreadsheets is used to return the last day of the month that is a specified number of months before or after a specified date. Here's how it behaves:
- If the start_date is a blank cell, `EOMONTH` returns an error.
- If the start_date is not a valid date, `EOMONTH` returns an error.
- If the months value is not a numeric value, `EOMONTH` returns an error.
- The function treats boolean values as integers. True is interpreted as 1 and false is interpreted as 0.
- The function ignores any time component of the start_date.
- The function supports 1900-01-01 to 9999-12-31 date range.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is displayed when the start_date is not a valid date, or the months argument is non-numeric. |
| #NUM! | This error is displayed when the resulting date is outside the valid range of dates (1900-01-01 to 9999-12-31). |
| #REF! | This error is displayed when a referenced cell in the formula is not valid. |

### Best practices

> - Always ensure that the start_date is a valid date, otherwise, the function will return an error.
> - Be mindful of the fact that `EOMONTH` ignores any time component of the start_date.
> - Make sure the resulting date stays within the valid range of dates (1900-01-01 to 9999-12-31), or else you will get a #NUM! error.
> - It's better to use cell references rather than direct data insertions for the start_date and months arguments as this increases the flexibility and usability of the `EOMONTH` function.

### Usage

A few examples using the EOMONTH function.

```
EOMONTH("2022-01-15", 3) returns 44681  
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
        "Months to Add",
        "End of Month"
    ],
    [
        "2024-01-15",
        0,
        "=EOMONTH(A2,B2)"
    ],
    [
        "2024-03-10",
        2,
        "=EOMONTH(A3,B3)"
    ],
    [
        "2024-06-25",
        -1,
        "=EOMONTH(A4,B4)"
    ],
    [
        "2024-12-05",
        3,
        "=EOMONTH(A5,B5)"
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
        "Months to Add",
        "End of Month"
    ],
    [
        "2024-01-15",
        0,
        "=EOMONTH(A2,B2)"
    ],
    [
        "2024-03-10",
        2,
        "=EOMONTH(A3,B3)"
    ],
    [
        "2024-06-25",
        -1,
        "=EOMONTH(A4,B4)"
    ],
    [
        "2024-12-05",
        3,
        "=EOMONTH(A5,B5)"
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
        "Months to Add",
        "End of Month"
    ],
    [
        "2024-01-15",
        0,
        "=EOMONTH(A2,B2)"
    ],
    [
        "2024-03-10",
        2,
        "=EOMONTH(A3,B3)"
    ],
    [
        "2024-06-25",
        -1,
        "=EOMONTH(A4,B4)"
    ],
    [
        "2024-12-05",
        3,
        "=EOMONTH(A5,B5)"
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
        "Months to Add",
        "End of Month"
    ],
    [
        "2024-01-15",
        0,
        "=EOMONTH(A2,B2)"
    ],
    [
        "2024-03-10",
        2,
        "=EOMONTH(A3,B3)"
    ],
    [
        "2024-06-25",
        -1,
        "=EOMONTH(A4,B4)"
    ],
    [
        "2024-12-05",
        3,
        "=EOMONTH(A5,B5)"
    ]
]
            }]
        });
    }
}
```

