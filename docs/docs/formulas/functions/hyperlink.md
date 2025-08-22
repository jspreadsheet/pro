title: HYPERLINK function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the HYPERLINK function in Jspreadsheet

# HYPERLINK function

`PRO`{.jtag}

The HYPERLINK function in Jspreadsheet Formulas Pro is a handy tool that allows you to create clickable links within your spreadsheet. This function can be used to direct a user to a specific webpage, open a document, or even generate an email. When you click on a cell containing a hyperlink, it will automatically perform the action associated with the link. This makes navigation and accessing resources from your spreadsheet incredibly convenient and efficient.

## Documentation

The HYPERLINK function is used to create a clickable link that opens a webpage, document, or email address.

### Category

Lookup and reference

### Syntax

HYPERLINK(link_location, [friendly_name])

| Parameter | Description |
| ----------- | ------------- |
| `link_location` | The web address, file path, or email address to be linked. |
| `friendly_name` | Optional. The text to display as the clickable link. If omitted, the link_location will be displayed. |


### Behavior

The `HYPERLINK` function in a spreadsheet creates a clickable hyperlink inside a cell. It takes two arguments: the URL and the link label. The URL is the actual link where you want to direct the user, and the link label is the clickable text that will appear in the cell. Here are some of the expected behaviors:

- If an empty cell is used as either the URL or link label, the function will return an error.
- If a text string is used that doesn't conform to a valid URL structure (http://www.example.com), the function will return an error.
- Boolean values are not applicable for this function.
- If the function encounters any error during execution, it will return the error instead of a hyperlink.
- If a valid URL is provided but the link label is not, the URL itself will be used as the link label.

### Common Errors

| Error Name | Description |
|------------|-------------|
| #VALUE! | This error is returned when the URL argument is not a valid URL. |
| #N/A | This error is returned when either the URL or the link label is left blank. |
| #ERROR! | This error typically occurs when there is an issue with the internet connection or the URL itself is inaccessible. |

### Best practices

> - Always ensure that the URL you provide as an argument is valid and accessible to avoid errors.
> - It's always a good practice to provide a link label as it provides a better user experience than just showing the URL.
> - Consider using cell references for the URL and link label for dynamic hyperlink creation. This is especially useful when you have a list of URLs in one column and their corresponding labels in another.
> - Always ensure that the URL is secure (https://), especially when sharing sensitive information to protect users from potential security risks.

### Usage

A few examples using the HYPERLINK function.

```
HYPERLINK("https://www.google.com", "Google") creates a hyperlink with the text 'Google' that links to https://www.google.com  
HYPERLINK(B1,"Click Here") creates a hyperlink in cell A1 with the text 'Click Here' that links to the value in cell B1.  
HYPERLINK("mailto:email@example.com") creates a hyperlink that opens an email addressed to email@example.com.  
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
        "Website",
        "URL",
        "Hyperlink"
    ],
    [
        "Google",
        "https://www.google.com",
        "=HYPERLINK(B2,A2)"
    ],
    [
        "Microsoft",
        "https://www.microsoft.com",
        "=HYPERLINK(B3,A3)"
    ],
    [
        "Contact Email",
        "mailto:support@company.com",
        "=HYPERLINK(B4,\"Contact Us\")"
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
        "Website",
        "URL",
        "Hyperlink"
    ],
    [
        "Google",
        "https://www.google.com",
        "=HYPERLINK(B2,A2)"
    ],
    [
        "Microsoft",
        "https://www.microsoft.com",
        "=HYPERLINK(B3,A3)"
    ],
    [
        "Contact Email",
        "mailto:support@company.com",
        "=HYPERLINK(B4,\"Contact Us\")"
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
        "Website",
        "URL",
        "Hyperlink"
    ],
    [
        "Google",
        "https://www.google.com",
        "=HYPERLINK(B2,A2)"
    ],
    [
        "Microsoft",
        "https://www.microsoft.com",
        "=HYPERLINK(B3,A3)"
    ],
    [
        "Contact Email",
        "mailto:support@company.com",
        "=HYPERLINK(B4,\"Contact Us\")"
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
        "Website",
        "URL",
        "Hyperlink"
    ],
    [
        "Google",
        "https://www.google.com",
        "=HYPERLINK(B2,A2)"
    ],
    [
        "Microsoft",
        "https://www.microsoft.com",
        "=HYPERLINK(B3,A3)"
    ],
    [
        "Contact Email",
        "mailto:support@company.com",
        "=HYPERLINK(B4,\"Contact Us\")"
    ]
]
            }]
        });
    }
}
```

