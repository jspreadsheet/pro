title: TODAY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the TODAY function in Jspreadsheet

# TODAY function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `TODAY` function in Jspreadsheet Formulas Pro is used to obtain the current date. When you use this function, it will display the present day's date in a serialized number format. The serialization of dates means that the dates are presented as a sequence of numbers, making it easier for the system to manipulate. The `TODAY` function can be very useful when you need to keep track of dates in your spreadsheet data.

## Documentation

Returns the current date as a serial number.

### Category

Date and time

### Syntax

TODAY()

| Parameter | Description |
| ----------- | ------------- |


### Behavior

The `TODAY` function in spreadsheets is used to return the current date. This function takes no arguments and will always display the current date based on the system's date. 

- **Empty cells**: As the `TODAY` function requires no arguments, it does not interact with any cells, empty or otherwise.
- **Text**: The `TODAY` function does not interact with text as it requires no arguments.
- **Booleans**: Similar to text and empty cells, the `TODAY` function does not interact with booleans.
- **Errors**: Normally, the `TODAY` function does not generate errors unless the cell format in which the result is displayed is not suitable for dates.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | If the `TODAY` function is used with an argument, it will return a #VALUE! error. The `TODAY` function does not take any arguments. |
| #NUM! | If the cell format does not support date display, it may return a #NUM! error. |

### Best practices

> - The `TODAY` function is volatile, meaning it will update every time the spreadsheet recalculates. If you want to keep a date static, you should manually enter the date or copy and paste the `TODAY` function result as a value.
> - Keep in mind that the `TODAY` function will display the date according to the system's date. If your spreadsheet will be used in multiple time zones, this could lead to confusion.
> - You can use the `TODAY` function in conjunction with other functions to calculate dates. For example, `TODAY()+7` will give you the date a week from today.
> - Always ensure the cell in which you are using the `TODAY` function is formatted to display dates.

### Usage

A few examples using the TODAY function.

```
TODAY() returns 44664 (if today's date is March 15, 2023)  
TODAY() returns 44665 (if today's date is March 16, 2023)  
TODAY() returns 44666 (if today's date is March 17, 2023)  
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
        "Due Date",
        "Days Until Due"
    ],
    [
        "Project Report",
        "2023-03-20",
        "=B2-TODAY()"
    ],
    [
        "Team Meeting",
        "2023-03-18",
        "=B3-TODAY()"
    ],
    [
        "Budget Review",
        "2023-03-25",
        "=B4-TODAY()"
    ],
    [
        "Today's Date:",
        "=TODAY()"
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
        "Due Date",
        "Days Until Due"
    ],
    [
        "Project Report",
        "2023-03-20",
        "=B2-TODAY()"
    ],
    [
        "Team Meeting",
        "2023-03-18",
        "=B3-TODAY()"
    ],
    [
        "Budget Review",
        "2023-03-25",
        "=B4-TODAY()"
    ],
    [
        "Today's Date:",
        "=TODAY()"
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
        "Due Date",
        "Days Until Due"
    ],
    [
        "Project Report",
        "2023-03-20",
        "=B2-TODAY()"
    ],
    [
        "Team Meeting",
        "2023-03-18",
        "=B3-TODAY()"
    ],
    [
        "Budget Review",
        "2023-03-25",
        "=B4-TODAY()"
    ],
    [
        "Today's Date:",
        "=TODAY()"
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
        "Due Date",
        "Days Until Due"
    ],
    [
        "Project Report",
        "2023-03-20",
        "=B2-TODAY()"
    ],
    [
        "Team Meeting",
        "2023-03-18",
        "=B3-TODAY()"
    ],
    [
        "Budget Review",
        "2023-03-25",
        "=B4-TODAY()"
    ],
    [
        "Today's Date:",
        "=TODAY()"
    ]
]
            }]
        });
    }
}
```

