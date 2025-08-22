title: YEAR function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the YEAR function in Jspreadsheet

# YEAR function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `YEAR` function in Jspreadsheet Formulas Pro is a useful tool when working with dates. It allows you to extract the year from a specified date. By inputting a date into the `YEAR` function, it will return the year of that date as a four-digit number. This can be particularly useful when analyzing data that spans over multiple years.

## Documentation

Returns the year corresponding to a given date.

### Category

Date and time

### Syntax

YEAR(serial_number)

| Parameter | Description |
| ----------- | ------------- |
| `date` | The date for which to extract the year. |


### Behavior

The 'YEAR' function in spreadsheets returns the year of a specific date as a four digit number. Here's how it handles different types of input:

- **Date**: The function works best with valid date values and returns the year part of the date as a four-digit number. For example, if the date is '2022-05-14', 'YEAR' will return 2022.

- **Empty Cells**: If the 'YEAR' function is applied to an empty cell, it will typically return an error because it expects a date value as input.

- **Text**: If a cell containing text (which doesn't represent a date) is used as an input, the 'YEAR' function will usually return an error. 

- **Booleans**: The 'YEAR' function generally treats Boolean values as errors since it expects a date input.

- **Errors**: If the reference cell contains an error, the 'YEAR' function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error is returned when the input argument to the 'YEAR' function is not a valid date. This can occur if the input is an empty cell, a cell containing text, or a Boolean value. |
| #REF! | This error is returned when the reference cell is invalid. This can happen if the cell has been deleted after the 'YEAR' function was applied to it. |
| #NUM! | This error is returned when the input date is outside the acceptable date range for the spreadsheet program. |

### Best practices

> - Always ensure that the input to the 'YEAR' function is a valid date. If there's a chance that the input cell might not contain a date, consider using error-handling functions to manage potential errors.
> - When importing data, ensure that dates are imported in a format that your spreadsheet program recognizes. If necessary, you can use date parsing functions to convert text to dates.
> - Be aware of the date range limitations of your spreadsheet program. If you're working with historical or future dates, ensure they fall within the acceptable range.
> - Use the 'YEAR' function in conjunction with other date functions for more complex date manipulations. For example, you can use 'YEAR' along with 'MONTH' and 'DAY' to construct new dates.

### Usage

A few examples using the YEAR function.

```
YEAR("2022-03-15") returns: 2022  
YEAR("1995-12-31") returns: 1995  
YEAR("2000-01-01") returns: 2000  
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
        "Employee",
        "Start Date",
        "Start Year"
    ],
    [
        "John Smith",
        "2019-03-15",
        "=YEAR(B2)"
    ],
    [
        "Sarah Johnson",
        "2021-07-22",
        "=YEAR(B3)"
    ],
    [
        "Mike Davis",
        "2020-11-08",
        "=YEAR(B4)"
    ],
    [
        "Lisa Wilson",
        "2022-01-30",
        "=YEAR(B5)"
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
        "Employee",
        "Start Date",
        "Start Year"
    ],
    [
        "John Smith",
        "2019-03-15",
        "=YEAR(B2)"
    ],
    [
        "Sarah Johnson",
        "2021-07-22",
        "=YEAR(B3)"
    ],
    [
        "Mike Davis",
        "2020-11-08",
        "=YEAR(B4)"
    ],
    [
        "Lisa Wilson",
        "2022-01-30",
        "=YEAR(B5)"
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
        "Employee",
        "Start Date",
        "Start Year"
    ],
    [
        "John Smith",
        "2019-03-15",
        "=YEAR(B2)"
    ],
    [
        "Sarah Johnson",
        "2021-07-22",
        "=YEAR(B3)"
    ],
    [
        "Mike Davis",
        "2020-11-08",
        "=YEAR(B4)"
    ],
    [
        "Lisa Wilson",
        "2022-01-30",
        "=YEAR(B5)"
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
        "Employee",
        "Start Date",
        "Start Year"
    ],
    [
        "John Smith",
        "2019-03-15",
        "=YEAR(B2)"
    ],
    [
        "Sarah Johnson",
        "2021-07-22",
        "=YEAR(B3)"
    ],
    [
        "Mike Davis",
        "2020-11-08",
        "=YEAR(B4)"
    ],
    [
        "Lisa Wilson",
        "2022-01-30",
        "=YEAR(B5)"
    ]
]
            }]
        });
    }
}
```

