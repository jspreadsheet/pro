title: WORKDAY.INTL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the WORKDAY.INTL function in Jspreadsheet

# WORKDAY.INTL function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `WORKDAY.INTL` function in Jspreadsheet Formulas Pro is a useful tool to calculate a date based on a specified number of workdays away from a starting date, excluding weekends and holidays. If you provide a starting date and the number of workdays, this function will return the corresponding date after taking into account only weekdays and skipping any holidays. This function is particularly helpful for project management or scheduling tasks, allowing you to easily determine deadlines or project completion dates.

## Documentation

Returns the date that is the indicated number of working days before or after a date (the starting date), excluding weekends and holidays.

### Category

Date and time

### Syntax

WORKDAY.INTL(start_date, days, [weekend], [holidays])

| Parameter | Description |
| ----------- | ------------- |
| `start_date` | The starting date, expressed as a serial number or a date. |
| `days` | The number of working days before or after the start date. A positive value for days generates a future date; a negative value generates a past date. |
| `weekend` | Optional. A number or string representing which days of the week are weekend days and are not considered working days. The default is Saturday and Sunday ("0000000"). For example, "1111111" represents a weekend of Friday and Saturday. You can also specify weekend using one or more of the following: 1 = Saturday 2 = Sunday 3 = Monday 4 = Tuesday 5 = Wednesday 6 = Thursday 7 = Friday. |
| `holidays` | Optional. An optional range of one or more dates to exclude from the working calendar, such as state and federal holidays and floating holidays. |


### Behavior

The `WORKDAY.INTL` function calculates a specific date in future or past, skipping specified weekdays and holidays. It expects a start date, number of days and optional weekend parameters and holiday dates. Here's how it handles certain inputs:

- Empty Cells: If the start date or days is an empty cell, `WORKDAY.INTL` will return a `#VALUE!` error. For the weekend or holidays parameters, an empty cell is treated as none, meaning no weekends or holidays are skipped.
- Text: If the start date or days is text, `WORKDAY.INTL` will return a `#VALUE!` error. Text is allowed in the weekend or holidays parameters if it's a valid input.
- Booleans: Boolean values are not valid inputs for `WORKDAY.INTL`. If boolean values are used, a `#VALUE!` error will be returned.
- Errors: If any of the parameters contain an error, `WORKDAY.INTL` will return that error.
- Dates: Dates should be supplied as either references to cells containing dates, or as results of formulas.
- Numbers: The days parameter should be a positive or negative integer. Decimal numbers are rounded down to the nearest integer. 

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | Occurs if the provided arguments are not recognized as valid dates, days or weekend parameters. |
| #NUM! | Occurs if the provided start date is an invalid date, the number of days plus the start date results in an invalid date, or the weekend parameter is a number less than 1 or greater than 7. |
| #NAME? | Occurs if the `WORKDAY.INTL` function is unavailable or not recognized, which can happen in older versions of Excel. |

### Best practices

> - Always ensure the start date and number of days are valid numbers or cell references, not text or boolean values.
> - Be careful with the weekend parameter. It can be a string of seven 0s and 1s or an integer between 1 and 7, each representing different weekend configurations. Make sure you use the right one for your needs.
> - If you want to skip specific holidays, provide them as a range of cells in the holidays parameter. Make sure these are valid date values.
> - Remember that `WORKDAY.INTL` automatically excludes weekends (Saturday and Sunday) unless specified differently.

### Usage

A few examples using the WORKDAY.INTL function.

```
WORKDAY.INTL("2023-03-15", 5, "0000011") returns:"2023-03-22"  
WORKDAY.INTL("2023-03-15", -5, "0000011") returns: "2023-03-06"  
WORKDAY.INTL("2023-03-15", 10, "0000011", ["2023-03-20","2023-03-21"]) returns: "2023-04-04"  
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
        "Working Days",
        "End Date",
        "Weekend Pattern"
    ],
    [
        "2024-01-15",
        10,
        "=WORKDAY.INTL(A2,B2,D2)",
        "0000011"
    ],
    [
        "2024-02-01",
        -5,
        "=WORKDAY.INTL(A3,B3,D3)",
        "0000011"
    ],
    [
        "2024-03-01",
        7,
        "=WORKDAY.INTL(A4,B4,D4)",
        "0000011"
    ],
    [
        "2024-04-15",
        15,
        "=WORKDAY.INTL(A5,B5,D5)",
        "0000011"
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
        "Working Days",
        "End Date",
        "Weekend Pattern"
    ],
    [
        "2024-01-15",
        10,
        "=WORKDAY.INTL(A2,B2,D2)",
        "0000011"
    ],
    [
        "2024-02-01",
        -5,
        "=WORKDAY.INTL(A3,B3,D3)",
        "0000011"
    ],
    [
        "2024-03-01",
        7,
        "=WORKDAY.INTL(A4,B4,D4)",
        "0000011"
    ],
    [
        "2024-04-15",
        15,
        "=WORKDAY.INTL(A5,B5,D5)",
        "0000011"
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
        "Working Days",
        "End Date",
        "Weekend Pattern"
    ],
    [
        "2024-01-15",
        10,
        "=WORKDAY.INTL(A2,B2,D2)",
        "0000011"
    ],
    [
        "2024-02-01",
        -5,
        "=WORKDAY.INTL(A3,B3,D3)",
        "0000011"
    ],
    [
        "2024-03-01",
        7,
        "=WORKDAY.INTL(A4,B4,D4)",
        "0000011"
    ],
    [
        "2024-04-15",
        15,
        "=WORKDAY.INTL(A5,B5,D5)",
        "0000011"
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
        "Working Days",
        "End Date",
        "Weekend Pattern"
    ],
    [
        "2024-01-15",
        10,
        "=WORKDAY.INTL(A2,B2,D2)",
        "0000011"
    ],
    [
        "2024-02-01",
        -5,
        "=WORKDAY.INTL(A3,B3,D3)",
        "0000011"
    ],
    [
        "2024-03-01",
        7,
        "=WORKDAY.INTL(A4,B4,D4)",
        "0000011"
    ],
    [
        "2024-04-15",
        15,
        "=WORKDAY.INTL(A5,B5,D5)",
        "0000011"
    ]
]
            }]
        });
    }
}
```

