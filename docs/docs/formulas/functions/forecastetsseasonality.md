title: FORECAST.ETS.SEASONALITY function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FORECAST.ETS.SEASONALITY function in Jspreadsheet

# FORECAST.ETS.SEASONALITY function



The `FORECAST.ETS.SEASONALITY` function in Jspreadsheet Formulas Pro is a tool that helps identify the length of recurring patterns in your time series data. This is accomplished through the use of the Exponential Smoothing (ETS) algorithm. Essentially, it's like finding the rhythm or cycle in your data - whether that's daily, monthly, yearly, etc. This can be particularly useful in forecasting future data points based on this identified pattern.

## Documentation

Returns the length of the seasonal pattern detected in time series data using the Exponential Smoothing (ETS) algorithm.

### Category

Statistical

### Syntax

FORECAST.ETS.SEASONALITY(values, timeline, [data_completion], [aggregation])

| Parameter | Description |
| ----------- | ------------- |
| `array` | An array of numbers representing the historical data. |
| `array` | An array of dates or numbers representing the timeline of the historical data. Should have the same number of elements as the 'values' parameter. |
| `[data_completion]` | Optional. A boolean value (TRUE or FALSE) that specifies whether missing values in the historical data should be completed. By default, missing values are not completed (FALSE). |
| `[aggregation]` | Optional. A text value that specifies the aggregation method for the data. Possible values are 'average' (default), 'sum', 'count', 'max', or 'min'. |


### Behavior

The 'FORECAST.ETS.SEASONALITY' function in spreadsheets is used to return the length of the repetitive pattern Excel detects for the specified time series, or to return an error if Excel cannot detect a seasonal component. 

1. The function requires at least two complete cycles of historical data.
2. If the target date is earlier than the start date of the timeline or after the end date, the function will return a #NUM! error.
3. In cases where the function cannot detect a seasonal component, it returns the number 1.
4. The function ignores empty cells, logical values, or text in the historical data.

### Common Errors

| Error | Description |
| --- | --- |
| #VALUE! | This error occurs if the timeline or values array is empty, or if the timeline and values have different number of data points. |
| #NUM! | This error occurs if the function cannot detect a seasonal component, if the target date is earlier than the start date of the timeline or after the end date, or if the timeline sequence is not regular. |
| #NAME? | This error occurs if the function name is misspelled or if the Analysis ToolPak add-in is not enabled in Excel. |

### Best practices

> 1. Make sure that your timeline and values arrays have the same number of data points to avoid #VALUE! errors.
> 2. To get the most accurate results, provide at least two complete cycles of historical data.
> 3. Regularly check if your timeline sequence is regular to avoid #NUM! errors.
> 4. Always double-check the spelling of the function and ensure that the required add-ins are enabled to prevent #NAME? errors.

### Usage

A few examples using the FORECAST.ETS.SEASONALITY function.

```
FORECAST.ETS.SEASONALITY(B2:B8, A2:A8)  
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
        "Sales",
        "Seasonality"
    ],
    [
        "2023-01-01",
        100
    ],
    [
        "2023-02-01",
        120
    ],
    [
        "2023-03-01",
        110
    ],
    [
        "2023-04-01",
        130
    ],
    [
        "2023-05-01",
        125
    ],
    [
        "2023-06-01",
        140
    ],
    [
        "2023-07-01",
        135
    ],
    [
        "2023-08-01",
        150
    ],
    [
        "2023-09-01",
        145
    ],
    [
        "2023-10-01",
        160
    ],
    [
        "2023-11-01",
        155
    ],
    [
        "2023-12-01",
        170,
        "=FORECAST.ETS.SEASONALITY(B2:B12,A2:A12)"
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
        "Sales",
        "Seasonality"
    ],
    [
        "2023-01-01",
        100
    ],
    [
        "2023-02-01",
        120
    ],
    [
        "2023-03-01",
        110
    ],
    [
        "2023-04-01",
        130
    ],
    [
        "2023-05-01",
        125
    ],
    [
        "2023-06-01",
        140
    ],
    [
        "2023-07-01",
        135
    ],
    [
        "2023-08-01",
        150
    ],
    [
        "2023-09-01",
        145
    ],
    [
        "2023-10-01",
        160
    ],
    [
        "2023-11-01",
        155
    ],
    [
        "2023-12-01",
        170,
        "=FORECAST.ETS.SEASONALITY(B2:B12,A2:A12)"
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
        "Sales",
        "Seasonality"
    ],
    [
        "2023-01-01",
        100
    ],
    [
        "2023-02-01",
        120
    ],
    [
        "2023-03-01",
        110
    ],
    [
        "2023-04-01",
        130
    ],
    [
        "2023-05-01",
        125
    ],
    [
        "2023-06-01",
        140
    ],
    [
        "2023-07-01",
        135
    ],
    [
        "2023-08-01",
        150
    ],
    [
        "2023-09-01",
        145
    ],
    [
        "2023-10-01",
        160
    ],
    [
        "2023-11-01",
        155
    ],
    [
        "2023-12-01",
        170,
        "=FORECAST.ETS.SEASONALITY(B2:B12,A2:A12)"
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
        "Sales",
        "Seasonality"
    ],
    [
        "2023-01-01",
        100
    ],
    [
        "2023-02-01",
        120
    ],
    [
        "2023-03-01",
        110
    ],
    [
        "2023-04-01",
        130
    ],
    [
        "2023-05-01",
        125
    ],
    [
        "2023-06-01",
        140
    ],
    [
        "2023-07-01",
        135
    ],
    [
        "2023-08-01",
        150
    ],
    [
        "2023-09-01",
        145
    ],
    [
        "2023-10-01",
        160
    ],
    [
        "2023-11-01",
        155
    ],
    [
        "2023-12-01",
        170,
        "=FORECAST.ETS.SEASONALITY(B2:B12,A2:A12)"
    ]
]
            }]
        });
    }
}
```

