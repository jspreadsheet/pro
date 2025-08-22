title: WEBSERVICE function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the WEBSERVICE function in Jspreadsheet

# WEBSERVICE function



The `WEBSERVICE` function in Jspreadsheet Formulas Pro is a useful tool that allows you to fetch and import data from a web service, which could be located either on the internet or an intranet. This function can be especially handy when you want to pull in real-time data or information that is frequently updated. You simply input the URL of the desired web service, and the function will retrieve the relevant data for you. This makes it easy to integrate and analyze data from different sources directly in Jspreadsheet.

## Documentation

Retrieves data from a web service on the internet or intranet.

### Category

Web

### Syntax

WEBSERVICE(url)

| Parameter | Description |
| ----------- | ------------- |
| `url` | The URL of the web service to retrieve data from. |


### Behavior

The `WEBSERVICE` function in spreadsheets is used to retrieve data from a URL. This function sends a request to the specified URL and returns the response as a string. Here's how it handles different scenarios:

- Empty Cells: If the `WEBSERVICE` function is used on an empty cell, it will return an error since a URL is required for the function to work.
- Text: The function accepts a text string that is a valid URL. If the provided text is not a valid URL, the function will return an error.
- Booleans: The `WEBSERVICE` function does not work with boolean values since it requires a string URL to function.
- Errors: If there's an issue with the URL, such as it being non-existent, inaccessible or if it returns an error, the `WEBSERVICE` function will also return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs when the URL argument is not a valid URL, or is not provided as a text string. |
| #REF! | This error is returned when the URL is non-existent or inaccessible. |
| #N/A | This error is returned when the URL request results in an error, or if the function times out while waiting for a response. |

### Best practices

> - Make sure to provide the URL as a text string. You can do this by enclosing the URL in double quotes.
> - Always check if the URL is working and accessible before using it in the `WEBSERVICE` function.
> - Be aware that `WEBSERVICE` can slow down your spreadsheet if it’s used extensively, as it will send a request each time the spreadsheet recalculates.
> - Handle errors properly. You can use error handling functions like `IFERROR` to manage any errors that may occur from using the `WEBSERVICE` function.

### Usage

A few examples using the WEBSERVICE function.

```
WEBSERVICE("https://api.example.com/data") returns:["key1": "value1", "key2": "value2"]  
WEBSERVICE("http://localhost:8080/data") returns:["key1": 123, "key2": "text"]  
WEBSERVICE("https://www.google.com/") returns:The HTML content of the Google homepage.  
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
        "API Endpoint",
        "Response Data"
    ],
    [
        "https://api.weather.com/current",
        "=WEBSERVICE(A2)"
    ],
    [
        "https://api.exchangerate.com/usd",
        "=WEBSERVICE(A3)"
    ],
    [
        "https://jsonplaceholder.typicode.com/users/1",
        "=WEBSERVICE(A4)"
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
        "API Endpoint",
        "Response Data"
    ],
    [
        "https://api.weather.com/current",
        "=WEBSERVICE(A2)"
    ],
    [
        "https://api.exchangerate.com/usd",
        "=WEBSERVICE(A3)"
    ],
    [
        "https://jsonplaceholder.typicode.com/users/1",
        "=WEBSERVICE(A4)"
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
        "API Endpoint",
        "Response Data"
    ],
    [
        "https://api.weather.com/current",
        "=WEBSERVICE(A2)"
    ],
    [
        "https://api.exchangerate.com/usd",
        "=WEBSERVICE(A3)"
    ],
    [
        "https://jsonplaceholder.typicode.com/users/1",
        "=WEBSERVICE(A4)"
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
        "API Endpoint",
        "Response Data"
    ],
    [
        "https://api.weather.com/current",
        "=WEBSERVICE(A2)"
    ],
    [
        "https://api.exchangerate.com/usd",
        "=WEBSERVICE(A3)"
    ],
    [
        "https://jsonplaceholder.typicode.com/users/1",
        "=WEBSERVICE(A4)"
    ]
]
            }]
        });
    }
}
```

