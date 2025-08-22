title: INFO function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the INFO function in Jspreadsheet

# INFO function

`PRO`{.jtag}

The `INFO` function in Jspreadsheet Formulas Pro is a tool that provides details about the current operating environment. This can include information about the version of Jspreadsheet Formulas Pro you're using or the operating system it is running on. This function can be particularly useful when troubleshooting issues or customizing your work to suit your specific system setup.

## Documentation

Returns information about the current operating environment, such as the version of Excel and the operating system.

### Category

Information

### Syntax

INFO(type_text)

| Parameter | Description |
| ----------- | ------------- |
| `type_text` | A text string specifying the type of information you want to retrieve. Currently, only the following information types are supported: 'directory', 'numfile', 'origin', 'osversion', 'recalc', 'release', and 'system'. |


### Behavior

The `INFO` function in spreadsheet provides information about the current operating environment, such as the operating system, the status of the num lock, caps lock, scroll lock, and more. It's important to note the following behaviors:

- The `INFO` function does not interact with cell content, therefore the handling of empty cells, text, booleans, and errors are not applicable.
- It returns a text string with the information requested in the argument.
- The function requires a specific type of information to be provided as an argument. For example, "directory", "system", "recalc", "release", "osversion", etc.
- If the argument provided is not recognized, the `INFO` function will return a `#VALUE!` error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the argument provided in the `INFO` function is not recognized. |
| #NAME? | This error occurs when the `INFO` function is not spelled correctly. |

### Best practices

> - Always ensure to provide a valid argument that the `INFO` function can recognize. To avoid errors, it is best to check the documentation for the list of valid arguments.
> - Use the `INFO` function to troubleshoot problems with your spreadsheet, as it provides valuable information about the current operating environment.
> - Be aware that information returned by `INFO` function may vary across different versions and platforms.
> - Remember that `INFO` function does not interact with cell content, it's primary use is to provide system or environment specific information.

### Usage

A few examples using the INFO function.

```
INFO("directory") returns the directory where the active workbook is stored  
INFO("osversion") returns the version number of the operating system running Excel  
INFO("release") returns the release number of Excel being used.  
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
        "System Information",
        "Value"
    ],
    [
        "Directory",
        "=INFO(\"directory\")"
    ],
    [
        "OS Version",
        "=INFO(\"osversion\")"
    ],
    [
        "Excel Release",
        "=INFO(\"release\")"
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
        "System Information",
        "Value"
    ],
    [
        "Directory",
        "=INFO(\"directory\")"
    ],
    [
        "OS Version",
        "=INFO(\"osversion\")"
    ],
    [
        "Excel Release",
        "=INFO(\"release\")"
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
        "System Information",
        "Value"
    ],
    [
        "Directory",
        "=INFO(\"directory\")"
    ],
    [
        "OS Version",
        "=INFO(\"osversion\")"
    ],
    [
        "Excel Release",
        "=INFO(\"release\")"
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
        "System Information",
        "Value"
    ],
    [
        "Directory",
        "=INFO(\"directory\")"
    ],
    [
        "OS Version",
        "=INFO(\"osversion\")"
    ],
    [
        "Excel Release",
        "=INFO(\"release\")"
    ]
]
            }]
        });
    }
}
```

