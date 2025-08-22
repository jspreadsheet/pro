title: NOW function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the NOW function in Jspreadsheet

# NOW function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `NOW` function in Jspreadsheet Formulas Pro is a useful tool that provides the current date and time as a specific type of data known as a date/time value. Whenever you use this function, it automatically updates the information to the most recent date and time. This makes it highly beneficial in maintaining real-time data in your sheets. Therefore, whenever you need to track the current date and time in your Jspreadsheet, simply use the `NOW` function.

## Documentation

Returns the current date and time as a date/time value.

### Category

Date and time

### Syntax

NOW()

| Parameter | Description |
| ----------- | ------------- |


### Behavior

The `NOW` function in spreadsheet programs like Google Sheets and Microsoft Excel is a date/time function that returns the current date and time according to the computer's system clock. Here's how it handles different scenarios:

- **Empty cells:** The `NOW` function does not require any input or arguments, so empty cells do not affect its operation.
- **Text:** Since the `NOW` function does not require any input, it doesn't interact with text in any way.
- **Booleans:** The `NOW` function doesn't interact with boolean values, as it doesn't require any input.
- **Errors:** The `NOW` function generally won't produce errors unless there's an issue with the system clock.

### Common Errors

| Error Name | Description |
|------------|-------------|
| #VALUE!    | This error occurs if the `NOW` function has been supplied with arguments, as it doesn't require any. |
| #NAME?     | This error occurs if the function name is spelled incorrectly. Ensure that it's spelled as `NOW`. |

### Best practices

> - The `NOW` function updates automatically whenever the spreadsheet recalculates. If you want to keep a static timestamp, you may want to use a different method, such as entering the date and time manually.
> - Be aware that the `NOW` function is dependent on your computer's system clock and will reflect any changes made to it.
> - If you're sharing a spreadsheet across different time zones, remember that the `NOW` function will display the date and time of the system where the spreadsheet is opened. This can lead to confusion if not properly accounted for.
> - To extract just the date or time from the `NOW` function, use the `DATE` or `TIME` functions respectively.

### Usage

A few examples using the NOW function.

```
NOW() returns the current date and time, for example: 3/15/2023 12:30:45 PM  
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
        "Task",
        "Completion Time",
        "Time Logged"
    ],
    [
        "Project Setup",
        "9:30 AM",
        "=NOW()"
    ],
    [
        "Code Review",
        "2:15 PM",
        "=NOW()"
    ],
    [
        "Testing Phase",
        "",
        "=NOW()"
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
        "Task",
        "Completion Time",
        "Time Logged"
    ],
    [
        "Project Setup",
        "9:30 AM",
        "=NOW()"
    ],
    [
        "Code Review",
        "2:15 PM",
        "=NOW()"
    ],
    [
        "Testing Phase",
        "",
        "=NOW()"
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
        "Task",
        "Completion Time",
        "Time Logged"
    ],
    [
        "Project Setup",
        "9:30 AM",
        "=NOW()"
    ],
    [
        "Code Review",
        "2:15 PM",
        "=NOW()"
    ],
    [
        "Testing Phase",
        "",
        "=NOW()"
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
        "Task",
        "Completion Time",
        "Time Logged"
    ],
    [
        "Project Setup",
        "9:30 AM",
        "=NOW()"
    ],
    [
        "Code Review",
        "2:15 PM",
        "=NOW()"
    ],
    [
        "Testing Phase",
        "",
        "=NOW()"
    ]
]
            }]
        });
    }
}
```

