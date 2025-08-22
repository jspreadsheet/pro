title: DAYS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the DAYS function in Jspreadsheet

# DAYS function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `DAYS` function in Jspreadsheet Formulas Pro is used to compute the number of days between two specific dates. You simply input two dates in this function, and it will provide you with the total number of days that have passed between them. This can be particularly useful for a range of tasks, such as tracking project timelines or calculating age. Remember, the date format should be compatible with Jspreadsheet for accurate results.

## Documentation

Calculates the number of days between two dates.

### Category

Date and time

### Syntax

DAYS(end_date, start_date)

| Parameter | Description |
| ----------- | ------------- |
| `end_date` | The end date of the time period. |
| `start_date` | The start date of the time period. |


### Behavior

The `DAYS` function in a spreadsheet calculates the number of days between two dates. It subtracts the end date from the start date. The function takes the following forms: `DAYS(end_date, start_date)`. 

- Empty cells: If any of the date arguments are empty cells, the function will return an error.
- Text: The function can interpret text formatted as a date (in quotes) as a date value. However, if the text cannot be interpreted as a date, it will result in an error.
- Booleans: The function does not handle boolean values. If a boolean value is passed as an argument, it will result in an error.
- Errors: If either of the date arguments is an error, the function itself will also return an error.
- Dates: The function will return a negative number if the end date is earlier than the start date.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error occurs if either of the date arguments is a text string that cannot be interpreted as a date. |
| #NUM! | This error occurs if either of the date arguments is a number that cannot be interpreted as a date. |
| #N/A | This error occurs if either of the date arguments is missing or not provided. |

### Best practices

> - Always ensure that the date arguments are valid dates. They can either be date values or text strings that can be interpreted as dates.
> - Remember that if the end date is earlier than the start date, the function will return a negative number. This can be useful in certain scenarios, but it can also cause confusion if not expected.
> - Be aware that the `DAYS` function does not include the end date in the calculation. If you want to include the end date, use the `DAYS360` function instead.
> - Avoid using the `DAYS` function with boolean values or with text strings that cannot be interpreted as dates to prevent errors.

### Usage

A few examples using the DAYS function.

```
DAYS("2022-03-15","2022-01-01") returns 73 days between January 1, 2022 and March 15, 2022  
DAYS("2025-12-31","2000-01-01") returns 9496 days between January 1, 2000 and December 31, 2025  
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
        "Project End",
        "Duration (Days)"
    ],
    [
        "2024-01-15",
        "2024-03-30",
        "=DAYS(C2,B2)"
    ],
    [
        "2024-02-01",
        "2024-04-15",
        "=DAYS(C3,B3)"
    ],
    [
        "2024-03-10",
        "2024-06-20",
        "=DAYS(C4,B4)"
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
        "Project End",
        "Duration (Days)"
    ],
    [
        "2024-01-15",
        "2024-03-30",
        "=DAYS(C2,B2)"
    ],
    [
        "2024-02-01",
        "2024-04-15",
        "=DAYS(C3,B3)"
    ],
    [
        "2024-03-10",
        "2024-06-20",
        "=DAYS(C4,B4)"
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
        "Project End",
        "Duration (Days)"
    ],
    [
        "2024-01-15",
        "2024-03-30",
        "=DAYS(C2,B2)"
    ],
    [
        "2024-02-01",
        "2024-04-15",
        "=DAYS(C3,B3)"
    ],
    [
        "2024-03-10",
        "2024-06-20",
        "=DAYS(C4,B4)"
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
        "Project End",
        "Duration (Days)"
    ],
    [
        "2024-01-15",
        "2024-03-30",
        "=DAYS(C2,B2)"
    ],
    [
        "2024-02-01",
        "2024-04-15",
        "=DAYS(C3,B3)"
    ],
    [
        "2024-03-10",
        "2024-06-20",
        "=DAYS(C4,B4)"
    ]
]
            }]
        });
    }
}
```

