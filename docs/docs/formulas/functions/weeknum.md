title: WEEKNUM function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the WEEKNUM function in Jspreadsheet

# WEEKNUM function

`PRO`{.jtag} `BASIC`{.jtag .purple}

In Jspreadsheet Formulas Pro, the `WEEKNUM` function is used to determine the week number of a specific date. When you input a date into this function, it calculates and returns the week number, based on the calendar year. This can be particularly useful for tracking activities or events that occur on a weekly basis. It's a simple and effective tool for organizing your data by week.

## Documentation

Returns the week number of a given date.

### Category

Date and time

### Syntax

WEEKNUM(serial_number, [return_type])

| Parameter | Description |
| ----------- | ------------- |
| `serial_number` | The serial number that represents the date whose week number you want to find. |
| `[return_type]` | Optional. A number that determines the type of return value:
1 (or omitted): Week starts on Sunday and week 1 is the week that includes January 1
2: Week starts on Monday and week 1 is the week that includes January 4 (the week that includes January 1 is the previous year's last week)
11: Week starts on Monday and week 1 is the week that includes January 1
12: Week starts on Tuesday and week 1 is the week that includes January 1
13: Week starts on Wednesday and week 1 is the week that includes January 1
14: Week starts on Thursday and week 1 is the week that includes January 1
15: Week starts on Friday and week 1 is the week that includes January 1
16: Week starts on Saturday and week 1 is the week that includes January 1 |


### Behavior

The 'WEEKNUM' function in spreadsheets is used to return the week number of a specific date. The weeks can begin on either Sunday or Monday, depending on the optional second argument provided. Here's how it handles different types of inputs:

- **Empty Cells**: If the 'WEEKNUM' function references an empty cell, it will return a #VALUE! error.
- **Text**: If the cell referenced contains text that cannot be interpreted as a date, the function will return a #VALUE! error.
- **Booleans**: The 'WEEKNUM' function does not work with boolean values. If a cell containing a boolean value is referenced, the function will return a #VALUE! error.
- **Errors**: If the cell referenced in the function contains an error, the 'WEEKNUM' function will also return that same error.
- **Numbers**: If the cell referenced contains a number, the 'WEEKNUM' function will treat that number as a date serial number and return the corresponding week number. 

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the provided date is not a valid date or if it is a text that cannot be interpreted as a date. |
| #NUM! | This error is returned when the second argument (indicating the week starting day) is not within the acceptable range of 1 to 21. |

### Best practices

> - Always ensure that the cell reference or date provided to the 'WEEKNUM' function is a valid date to avoid a #VALUE! error.
> - Be careful when providing the second argument to the 'WEEKNUM' function. Make sure it is within the acceptable range (1 to 21) to avoid a #NUM! error.
> - When referencing a cell, ensure it does not contain text or boolean values as 'WEEKNUM' cannot interpret these and will return a #VALUE! error.
> - Be aware that the 'WEEKNUM' function will consider a number as a date serial number. If this is not the desired outcome, make sure to convert numbers to the appropriate date format before using them in the function.

### Usage

A few examples using the WEEKNUM function.

```
WEEKNUM("2015-01-04") returns: 11  
WEEKNUM("1900-01-02") returns 1  
WEEKNUM(42008) returns 2  
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
        "Date",
        "Week Number"
    ],
    [
        "2024-01-15",
        "=WEEKNUM(A2)"
    ],
    [
        "2024-06-30",
        "=WEEKNUM(A3)"
    ],
    [
        "2024-12-25",
        "=WEEKNUM(A4)"
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
        "Date",
        "Week Number"
    ],
    [
        "2024-01-15",
        "=WEEKNUM(A2)"
    ],
    [
        "2024-06-30",
        "=WEEKNUM(A3)"
    ],
    [
        "2024-12-25",
        "=WEEKNUM(A4)"
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
        "Date",
        "Week Number"
    ],
    [
        "2024-01-15",
        "=WEEKNUM(A2)"
    ],
    [
        "2024-06-30",
        "=WEEKNUM(A3)"
    ],
    [
        "2024-12-25",
        "=WEEKNUM(A4)"
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
        "Date",
        "Week Number"
    ],
    [
        "2024-01-15",
        "=WEEKNUM(A2)"
    ],
    [
        "2024-06-30",
        "=WEEKNUM(A3)"
    ],
    [
        "2024-12-25",
        "=WEEKNUM(A4)"
    ]
]
            }]
        });
    }
}
```

