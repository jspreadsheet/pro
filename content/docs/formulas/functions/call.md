title: CALL function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the CALL function in Jspreadsheet

# CALL function



The `CALL` function in Jspreadsheet Formulas Pro is used to execute a macro from a module or to run a pre-defined function. In simpler terms, it's like asking the program to perform certain actions that have been previously set up in a macro or function. This can include a wide range of tasks, from simple calculations to more complex operations. It's a powerful tool that can significantly streamline your work in Jspreadsheet.

## Documentation

Calls a macro from a module or run a function.

### Category

Add-in and Automation

### Syntax

CALL(macro_name, param1, param2,...)

| Parameter | Description |
| ----------- | ------------- |
| `macro_name` | The name of the macro to be called. |
| `paramN` | Optional. One or more parameters to be passed to the macro. |


### Behavior

The `CALL` function in spreadsheets is used to call a script function. It is mainly used in Google Sheets and is part of the Google Apps Script service, which allows you to automate tasks across Google products. The behavior of `CALL` function is dependent on the script function it is calling. 

- Empty cells: `CALL` function treats an empty cell based on how the script function handles it.
- Text: If the script function requires text as an argument, the `CALL` function can pass it as a string.
- Booleans: Similarly, if the script function requires a boolean value, the `CALL` function can pass it.
- Errors: Any errors arising from the script function will be presented by the `CALL` function.
- Arrays: `CALL` function can handle arrays if the script function it is calling is designed to handle them.

### Common Errors

| Error | Description |
| ------| ------------|
| #NAME? | This error occurs when Google Sheets does not recognize the function name. This can happen if the `CALL` function is misspelled or if the script function it is calling does not exist.|
| #VALUE! | This error occurs when the script function is not properly handling the passed values.|
| #ERROR! | This error occurs when the script function the `CALL` function is calling encounters an unexpected error.|

### Best practices

> - Always ensure that the script function you are calling using the `CALL` function exists and is correctly spelled.
> - Properly handle all the possible types of values that can be passed to your script function to avoid errors.
> - Avoid using complex script functions with the `CALL` function as it might make your spreadsheet too complicated to understand and maintain.
> - Always test your `CALL` function with various types of inputs to ensure it behaves as expected.

### Usage

A few examples using the CALL function.

```
CALL("MyMacro", A1:B3)  
CALL("MyFunction", 10, "test")  
CALL("AnotherMacro")  
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
        "Sales Data",
        "Quarter",
        "Result"
    ],
    [
        25000,
        "Q1",
        "=CALL(\"CalculateBonus\", A2, B2)"
    ],
    [
        30000,
        "Q2",
        "=CALL(\"CalculateBonus\", A3, B3)"
    ],
    [
        28000,
        "Q3",
        "=CALL(\"CalculateBonus\", A4, B4)"
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
        "Sales Data",
        "Quarter",
        "Result"
    ],
    [
        25000,
        "Q1",
        "=CALL(\"CalculateBonus\", A2, B2)"
    ],
    [
        30000,
        "Q2",
        "=CALL(\"CalculateBonus\", A3, B3)"
    ],
    [
        28000,
        "Q3",
        "=CALL(\"CalculateBonus\", A4, B4)"
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
        "Sales Data",
        "Quarter",
        "Result"
    ],
    [
        25000,
        "Q1",
        "=CALL(\"CalculateBonus\", A2, B2)"
    ],
    [
        30000,
        "Q2",
        "=CALL(\"CalculateBonus\", A3, B3)"
    ],
    [
        28000,
        "Q3",
        "=CALL(\"CalculateBonus\", A4, B4)"
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
        "Sales Data",
        "Quarter",
        "Result"
    ],
    [
        25000,
        "Q1",
        "=CALL(\"CalculateBonus\", A2, B2)"
    ],
    [
        30000,
        "Q2",
        "=CALL(\"CalculateBonus\", A3, B3)"
    ],
    [
        28000,
        "Q3",
        "=CALL(\"CalculateBonus\", A4, B4)"
    ]
]
            }]
        });
    }
}
```

