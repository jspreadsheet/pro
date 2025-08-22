title: EDATE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the EDATE function in Jspreadsheet

# EDATE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The EDATE function in Jspreadsheet Formulas Pro is a tool that helps you calculate a future or past date, based on a given start date and a specified number of months. By inputting your chosen start date and the number of months you want to add or subtract, the function will return the corresponding date. This can be useful for tasks such as calculating due dates, deadlines, or tracking project timelines.

## Documentation

The EDATE function returns the date that is the specified number of months before or after the start date.

### Category

Date and time

### Syntax

EDATE(start_date, months)

| Parameter | Description |
| ----------- | ------------- |
| `start_date` | The start date to use in the calculation. |
| `months` | The number of months before or after the start date. A positive value for months yields a future date; a negative value yields a past date. |


### Behavior

The `EDATE` function in spreadsheets is used to add or subtract a specified number of months from a given date. It returns a serial number that represents a date. Here are some expected behaviors:

- The function requires two inputs: the start date and the number of months to add or subtract.
- The start date is usually supplied as a cell reference to a date, a date returned from a function, or a date directly typed into the function.
- The number of months can be positive (to get a future date) or negative (to get a past date).
- If the start date is an empty cell, the function will return a `#VALUE!` error.
- If the start date is a text that cannot be converted to a date, the function will return a `#VALUE!` error.
- If the start date is a boolean, it will be coerced to a date equivalent before calculation. TRUE is equivalent to 1 (January 1, 1900) and FALSE is equivalent to 0 (December 31, 1899).
- If the number of months is an error, the function will return that error.
- If the number of months is a boolean, it will be coerced to an integer before calculation. TRUE is equivalent to 1 and FALSE is equivalent to 0.

### Common Errors

| Error | Description |
| ------ | ----------- |
| #VALUE! | Occurs if the given start date is an empty cell or a text that cannot be converted to a date. |
| #NUM! | Occurs if the resulting date is invalid, such as a negative date or a date beyond the spreadsheet's supported range. |
| Error from number of months | If the number of months is an error, the function will return that error. |

### Best practices

> - Always ensure that the start date is a valid date or a cell reference to a valid date.
> - Be mindful of the sign of the number of months. A positive number will give a future date, while a negative number will give a past date.
> - Keep in mind the spreadsheet's supported range for dates. If the resulting date is outside this range, you'll get an error.
> - Use error handling functions like IFERROR to handle potential errors and provide alternative results.

### Usage

A few examples using the EDATE function.

```
EDATE('2022-01-15', 3) returns 44666  
EDATE('2023-01-31', -5) returns 44804  
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
        "Contract Start",
        "Months to Add",
        "Contract End"
    ],
    [
        "2024-01-15",
        12,
        "=EDATE(A2,B2)"
    ],
    [
        "2024-03-01",
        -6,
        "=EDATE(A3,B3)"
    ],
    [
        "2024-06-30",
        18,
        "=EDATE(A4,B4)"
    ],
    [
        "2024-12-31",
        -3,
        "=EDATE(A5,B5)"
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
        "Contract Start",
        "Months to Add",
        "Contract End"
    ],
    [
        "2024-01-15",
        12,
        "=EDATE(A2,B2)"
    ],
    [
        "2024-03-01",
        -6,
        "=EDATE(A3,B3)"
    ],
    [
        "2024-06-30",
        18,
        "=EDATE(A4,B4)"
    ],
    [
        "2024-12-31",
        -3,
        "=EDATE(A5,B5)"
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
        "Contract Start",
        "Months to Add",
        "Contract End"
    ],
    [
        "2024-01-15",
        12,
        "=EDATE(A2,B2)"
    ],
    [
        "2024-03-01",
        -6,
        "=EDATE(A3,B3)"
    ],
    [
        "2024-06-30",
        18,
        "=EDATE(A4,B4)"
    ],
    [
        "2024-12-31",
        -3,
        "=EDATE(A5,B5)"
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
        "Contract Start",
        "Months to Add",
        "Contract End"
    ],
    [
        "2024-01-15",
        12,
        "=EDATE(A2,B2)"
    ],
    [
        "2024-03-01",
        -6,
        "=EDATE(A3,B3)"
    ],
    [
        "2024-06-30",
        18,
        "=EDATE(A4,B4)"
    ],
    [
        "2024-12-31",
        -3,
        "=EDATE(A5,B5)"
    ]
]
            }]
        });
    }
}
```

