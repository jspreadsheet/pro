title: FORECAST.ETS function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FORECAST.ETS function in Jspreadsheet

# FORECAST.ETS function



The `FORECAST.ETS` function in Jspreadsheet Formulas Pro is a powerful tool used to predict future values based on past data. It operates using the Exponential Smoothing (ETS) algorithm, which is an effective method for forecasting trends or patterns. By analyzing historical values, `FORECAST.ETS` is able to generate an estimated future value, making it an essential tool for data analysis and predictions. This feature is particularly useful in financial modeling, sales forecasting, and other areas requiring trend analysis.

## Documentation

Calculates or predicts a future value based on existing (historical) values by using the Exponential Smoothing (ETS) algorithm.

### Category

Statistical

### Syntax

FORECAST.ETS(target_date, values, timeline, [seasonality], [data_completion], [aggregation])

| Parameter | Description |
| ----------- | ------------- |
| `target_date` | The date for which you want to predict a value. |
| `values` | An array of numbers representing the historical data. |
| `timeline` | An array of dates or numbers representing the timeline of the historical data. Should have the same number of elements as the 'values' parameter. |
| `[seasonality]` | Optional. An integer specifying the number of periods in a complete season. Default is automatically detected. |
| `[data_completion]` | Optional. A logical value that specifies whether to fill in missing data points. Default is FALSE (missing data points are not filled). |
| `[aggregation]` | Optional. A string that specifies how to aggregate data for each period. Default is "AVERAGE". Other options include "SUM", "COUNT", and "MIN". |


### Behavior

The `FORECAST.ETS` function predicts a future value using Exponential Triple Smoothing (ETS), a very popular forecasting method which works based on patterns in the historical data. This function assumes that the future will continue to behave similarly as the past.

- The function requires numeric inputs for the target date, timeline, and historical data. If any of these inputs are not numeric, the function will return an error. 

- Empty cells in the timeline or historical data are simply ignored, they do not affect the calculation. However, if there are empty cells in between the data, this might affect the accuracy of the forecast.

- If the provided timeline or historical data contains text or booleans, the function will return an error. 

- The function can handle errors in the timeline or historical data. If any cell in these ranges contains an error, the function will return the same error. 

- The timeline and historical data should be of the same size, that is they should have the same number of data points. If they do not, the function will return an error.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | Occurs when the timeline and historical data do not contain the same number of data points. |
| #VALUE! | Occurs when any of the inputs (target date, timeline, or historical data) are non-numeric. |
| #NUM! | Occurs when the function fails to converge to a result, typically due to too complex or inconsistent data. |
| #REF! | Occurs when the given cell reference is not valid. |

### Best practices

> - Ensure that the timeline and historical data contain the same number of data points for accurate results.
> - Avoid having empty cells in between the data, as this can affect the accuracy of the forecast.
> - Use numerical data for the target date, timeline, and historical data. Non-numerical data will result in an error.
> - The timeline should be consistent. If the timeline is daily, it should not suddenly switch to monthly or yearly. This can lead to inaccurate forecasts.

### Usage

A few examples using the FORECAST.ETS function.

```
FORECAST.ETS("4/1/2023", B2:B8, A2:A8)  
FORECAST.ETS("5/1/2023", B2:B8, A2:A8)  
FORECAST.ETS("6/1/2023", B2:B8, A2:A8)  
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
        "Forecast"
    ],
    [
        "2023-01-01",
        1200,
        ""
    ],
    [
        "2023-02-01",
        1350,
        ""
    ],
    [
        "2023-03-01",
        1180,
        ""
    ],
    [
        "2023-04-01",
        1420,
        ""
    ],
    [
        "2023-05-01",
        1290,
        ""
    ],
    [
        "2023-06-01",
        "",
        "=FORECAST.ETS(\"2023-06-01\", B2:B6, A2:A6)"
    ],
    [
        "2023-07-01",
        "",
        "=FORECAST.ETS(\"2023-07-01\", B2:B6, A2:A6)"
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
        "Forecast"
    ],
    [
        "2023-01-01",
        1200,
        ""
    ],
    [
        "2023-02-01",
        1350,
        ""
    ],
    [
        "2023-03-01",
        1180,
        ""
    ],
    [
        "2023-04-01",
        1420,
        ""
    ],
    [
        "2023-05-01",
        1290,
        ""
    ],
    [
        "2023-06-01",
        "",
        "=FORECAST.ETS(\"2023-06-01\", B2:B6, A2:A6)"
    ],
    [
        "2023-07-01",
        "",
        "=FORECAST.ETS(\"2023-07-01\", B2:B6, A2:A6)"
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
        "Forecast"
    ],
    [
        "2023-01-01",
        1200,
        ""
    ],
    [
        "2023-02-01",
        1350,
        ""
    ],
    [
        "2023-03-01",
        1180,
        ""
    ],
    [
        "2023-04-01",
        1420,
        ""
    ],
    [
        "2023-05-01",
        1290,
        ""
    ],
    [
        "2023-06-01",
        "",
        "=FORECAST.ETS(\"2023-06-01\", B2:B6, A2:A6)"
    ],
    [
        "2023-07-01",
        "",
        "=FORECAST.ETS(\"2023-07-01\", B2:B6, A2:A6)"
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
        "Forecast"
    ],
    [
        "2023-01-01",
        1200,
        ""
    ],
    [
        "2023-02-01",
        1350,
        ""
    ],
    [
        "2023-03-01",
        1180,
        ""
    ],
    [
        "2023-04-01",
        1420,
        ""
    ],
    [
        "2023-05-01",
        1290,
        ""
    ],
    [
        "2023-06-01",
        "",
        "=FORECAST.ETS(\"2023-06-01\", B2:B6, A2:A6)"
    ],
    [
        "2023-07-01",
        "",
        "=FORECAST.ETS(\"2023-07-01\", B2:B6, A2:A6)"
    ]
]
            }]
        });
    }
}
```

