title: STOCKHISTORY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the STOCKHISTORY function in Jspreadsheet

# STOCKHISTORY function



The `STOCKHISTORY` function in Jspreadsheet Formulas Pro is a powerful tool that provides you with historical stock prices. You simply input a specific date range and ticker symbol, and the function will return the relevant stock prices for that period. It's an easy and efficient way to track and analyze the performance of a particular stock right from your Jspreadsheet. This can be particularly useful for financial analysis, forecasting, and investment decisions.

## Documentation

Returns historical stock prices for a given date range and ticker symbol.

### Category

Financial

### Syntax

STOCKHISTORY(ticker, start_date, end_date, [interval], [headers])

| Parameter | Description |
| ----------- | ------------- |
| `string` | The ticker symbol for the stock for which to retrieve data. |
| `string` | The start date of the time period for which to retrieve data. Must be in yyyy-mm-dd format or as a valid Excel date. |
| `string` | The end date of the time period for which to retrieve data. Must be in yyyy-mm-dd format or as a valid Excel date. |
| `string` | (optional) The frequency of the data to retrieve. Valid options are 'DAILY', 'WEEKLY', and 'MONTHLY'. Default is 'DAILY'. |
| `boolean` | (optional) Determines whether to include column headers in the returned data. Default is TRUE. |


### Behavior

The `STOCKHISTORY` function in spreadsheets helps users get historical data about a particular stock in the form of a table which includes the date, closing, opening, high, low, and volume of the stock. The function uses following syntax: `STOCKHISTORY(stock symbol, start_date, [end_date], [interval], [headers], [property0], [property1], [property2], [property3], [property4])`. 

1. For `stock symbol`, the function expects the ticker symbol of the stock as a text string. It does not accept empty cells or non-string data types.
2. `start_date` and `end_date` are expected to be in date format. If the cell is left empty or contains non-date data, the function will return an error.
3. `interval` is optional and it defines the frequency of data. It can be 1 for daily, 7 for weekly, or 12 for monthly data. If left empty, the function defaults to daily data.
4. `headers` is also optional. If set to 1, the function will include headers in the output. If left empty or set to 0, headers will be omitted. 
5. `property0` to `property4` are optional parameters that let the user choose which data points to include in the output. If left empty, the function returns all data points.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | This error occurs when the `stock symbol` is not recognized, or the stock data is not available for the specified dates. |
| #VALUE! | This error occurs when the `start_date` or `end_date` is not a valid date, or when the `interval` is not 1, 7, or 12. |
| #REF! | This error occurs when the function tries to return a table that is too large for the spreadsheet. |

### Best practices

> - Always double-check the `stock symbol` to ensure it's correct and recognized by the function. 
> - When using `start_date` and `end_date`, ensure the dates are in the correct format and the `end_date` is not earlier than the `start_date`.
> - Use the `headers` argument to include headers in the output. This makes it easier to understand the data.
> - Utilize the `property0` to `property4` arguments to tailor the function's output to your specific needs. This can help to reduce the size of the output and make the data easier to manage.

### Usage

A few examples using the STOCKHISTORY function.

```
STOCKHISTORY("AAPL", "2021-01-01", "2021-12-31") returns the daily stock prices for Apple Inc. between January 1st, 2021 and December 31st, 2021  
STOCKHISTORY("GOOGL", "2020-01-01", "2022-03-14", "WEEKLY") returns the weekly stock prices for Alphabet Inc. (Google) between January 1st, 2020 and March 14th, 2022  
STOCKHISTORY("MSFT", A1, B1, "MONTHLY", FALSE) returns monthly stock prices for Microsoft Corporation between the dates in cells A1 and B1 without headers.  
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
        "AAPL",
        "2024-01-01",
        "2024-01-31",
        "=STOCKHISTORY(A1,B1,C1)"
    ],
    [
        "MSFT",
        "2024-02-01",
        "2024-02-29",
        "=STOCKHISTORY(A2,B2,C2)"
    ],
    [
        "GOOGL",
        "2024-03-01",
        "2024-03-31",
        "=STOCKHISTORY(A3,B3,C3)"
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
        "AAPL",
        "2024-01-01",
        "2024-01-31",
        "=STOCKHISTORY(A1,B1,C1)"
    ],
    [
        "MSFT",
        "2024-02-01",
        "2024-02-29",
        "=STOCKHISTORY(A2,B2,C2)"
    ],
    [
        "GOOGL",
        "2024-03-01",
        "2024-03-31",
        "=STOCKHISTORY(A3,B3,C3)"
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
        "AAPL",
        "2024-01-01",
        "2024-01-31",
        "=STOCKHISTORY(A1,B1,C1)"
    ],
    [
        "MSFT",
        "2024-02-01",
        "2024-02-29",
        "=STOCKHISTORY(A2,B2,C2)"
    ],
    [
        "GOOGL",
        "2024-03-01",
        "2024-03-31",
        "=STOCKHISTORY(A3,B3,C3)"
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
        "AAPL",
        "2024-01-01",
        "2024-01-31",
        "=STOCKHISTORY(A1,B1,C1)"
    ],
    [
        "MSFT",
        "2024-02-01",
        "2024-02-29",
        "=STOCKHISTORY(A2,B2,C2)"
    ],
    [
        "GOOGL",
        "2024-03-01",
        "2024-03-31",
        "=STOCKHISTORY(A3,B3,C3)"
    ]
]
            }]
        });
    }
}
```

