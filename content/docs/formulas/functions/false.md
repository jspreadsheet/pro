title: FALSE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FALSE function in Jspreadsheet

# FALSE function

`PRO`{.jtag} `BASIC`{.jtag .purple}

The `FALSE` function in Jspreadsheet Formulas Pro is a simple yet handy tool. It's used when you need to represent or return the logical value 'FALSE'. This could be used in various logical tests within your spreadsheet. For instance, it can be used in conditional formulas where a specific condition may result in a 'FALSE' outcome.

## Documentation

Returns the logical value 'FALSE'.

### Category

Logical

### Syntax

FALSE()

| Parameter | Description |
| ----------- | ------------- |


### Behavior

The `FALSE` function in a spreadsheet returns the logical value `FALSE`. It does not require any arguments. Here's how it handles different scenarios:

- Empty cells: Since `FALSE` doesn't take any arguments, it doesn't interact with cells, whether they're empty or not.
- Text: `FALSE` doesn't interact with text as it doesn't need any input.
- Booleans: The function itself returns a Boolean value, `FALSE`.
- Errors: There are no typical error scenarios for `FALSE` as it doesn't take any arguments.

### Common Errors

| Error | Description |
|---|---|
| #NAME? | Occurs if the function is misspelled or omitted. |
| #VALUE! | Occurs if any arguments are provided, as `FALSE` does not require any. |

### Best practices

> - Use `FALSE` when you need a static `FALSE` Boolean value in your formulas.
> - Remember that `FALSE` is not the same as 0 or an empty cell. If you need these values, you should use other appropriate functions or values.
> - Be aware that `FALSE` is case-insensitive in spreadsheets. It can be written as `FALSE`, `false`, `False`, etc.
> - Use `FALSE` in logical tests within formulas to specify conditions that you want to test for a false result.

### Usage

A few examples using the FALSE function.

```
FALSE()  
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
        "Task Completed",
        "Status",
        "Is Pending"
    ],
    [
        "Submit Report",
        true,
        "=FALSE()"
    ],
    [
        "Review Budget",
        false,
        "=FALSE()"
    ],
    [
        "Send Email",
        true,
        "=FALSE()"
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
        "Task Completed",
        "Status",
        "Is Pending"
    ],
    [
        "Submit Report",
        true,
        "=FALSE()"
    ],
    [
        "Review Budget",
        false,
        "=FALSE()"
    ],
    [
        "Send Email",
        true,
        "=FALSE()"
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
        "Task Completed",
        "Status",
        "Is Pending"
    ],
    [
        "Submit Report",
        true,
        "=FALSE()"
    ],
    [
        "Review Budget",
        false,
        "=FALSE()"
    ],
    [
        "Send Email",
        true,
        "=FALSE()"
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
        "Task Completed",
        "Status",
        "Is Pending"
    ],
    [
        "Submit Report",
        true,
        "=FALSE()"
    ],
    [
        "Review Budget",
        false,
        "=FALSE()"
    ],
    [
        "Send Email",
        true,
        "=FALSE()"
    ]
]
            }]
        });
    }
}
```

