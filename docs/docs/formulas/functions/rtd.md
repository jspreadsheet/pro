title: RTD function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the RTD function in Jspreadsheet

# RTD function



The `RTD` function in Jspreadsheet Formulas Pro is a powerful tool that allows you to obtain real-time data from a program that supports COM automation. Essentially, it fetches and updates data automatically in your spreadsheet as they change in the source program. This is particularly useful for dynamic data like stock prices or weather updates, where information is continually changing. By using `RTD`, your Jspreadsheet will always display the most current and accurate data.

## Documentation

Retrieves real-time data from a program that supports COM automation.

### Category

Lookup and reference

### Syntax

RTD(progID, server, topic1, [topic2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `string` | The programmatic identifier (ProgID) of the application or object to retrieve data from. |
| `string` | The name of the server on which the application is running. If the application is running on the local computer, this parameter can be an empty string or omitted. |
| `string` | A topic used to identify the data you want to retrieve. |
| `string` | (Optional) A second topic used to identify the data you want to retrieve. You can specify up to 253 additional topics. |


### Behavior

The RTD function in spreadsheets is a Real Time Data function that can be used to retrieve real-time data from a program that supports COM automation, such as Microsoft's ActiveX Data Objects (ADO). This function is particularly useful when you want to display real-time data updates in your spreadsheet, for example, stock prices. 

- If the RTD function is called with incorrect parameters or the server does not respond, the function will return an error.
- The function will continue retrieving new data until the spreadsheet is closed, or until the RTD function is removed or modified.
- If the source program is not running when the RTD function is called, or if it does not support real-time data retrieval, the RTD function may return an error or old data.
- If the function is called with empty cells, it will return an error.
- If the function is called with text, booleans or non-numerical data, the returned value will depend on how the source program handles such data.

### Common Errors

| Error | Description |
|------|-------------|
| #VALUE! | The RTD function is called with incorrect parameters or the source program is not running. |
| #N/A | The source program does not support real-time data retrieval, or there is a problem with the connection. |
| #REF! | The cell referenced in the RTD function does not exist or has been deleted. |

### Best practices

> - Always check that the source program is running and supports real-time data retrieval before using the RTD function.
> - Be careful when using the RTD function in large spreadsheets, as it can significantly slow down the spreadsheet's performance due to the constant data updates.
> - Make sure the parameters used in the RTD function are correct and correspond to the data you want to retrieve.
> - Keep the use of RTD function to a minimum as excessive use can cause Excel to become unstable.

### Usage

A few examples using the RTD function.

```
RTD("Excel.Application", "", "RTDServer.RTDFunctionName", "Argument1", "Argument2") returns the real-time data returned by the RTD function in the RTDServer add-in, with arguments "Argument1" and "Argument2".  
RTD("Word.Application", "", "SomeServer.Topic") returns the real-time data from the specified server and topic in Microsoft Word.  
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
        "Stock Symbol",
        "Real-Time Price",
        "Last Update"
    ],
    [
        "AAPL",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"AAPL US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"AAPL US Equity\")"
    ],
    [
        "MSFT",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"MSFT US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"MSFT US Equity\")"
    ],
    [
        "GOOGL",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"GOOGL US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"GOOGL US Equity\")"
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
        "Stock Symbol",
        "Real-Time Price",
        "Last Update"
    ],
    [
        "AAPL",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"AAPL US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"AAPL US Equity\")"
    ],
    [
        "MSFT",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"MSFT US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"MSFT US Equity\")"
    ],
    [
        "GOOGL",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"GOOGL US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"GOOGL US Equity\")"
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
        "Stock Symbol",
        "Real-Time Price",
        "Last Update"
    ],
    [
        "AAPL",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"AAPL US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"AAPL US Equity\")"
    ],
    [
        "MSFT",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"MSFT US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"MSFT US Equity\")"
    ],
    [
        "GOOGL",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"GOOGL US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"GOOGL US Equity\")"
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
        "Stock Symbol",
        "Real-Time Price",
        "Last Update"
    ],
    [
        "AAPL",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"AAPL US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"AAPL US Equity\")"
    ],
    [
        "MSFT",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"MSFT US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"MSFT US Equity\")"
    ],
    [
        "GOOGL",
        "=RTD(\"Bloomberg.RTD\", \"\", \"Price\", \"GOOGL US Equity\")",
        "=RTD(\"Bloomberg.RTD\", \"\", \"LastUpdate\", \"GOOGL US Equity\")"
    ]
]
            }]
        });
    }
}
```

