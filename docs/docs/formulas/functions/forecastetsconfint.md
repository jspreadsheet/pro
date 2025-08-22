title: FORECAST.ETS.CONFINT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FORECAST.ETS.CONFINT function in Jspreadsheet

# FORECAST.ETS.CONFINT function



The `FORECAST.ETS.CONFINT` function in Jspreadsheet Formulas Pro is used to determine the range within which a certain predicted value will likely fall. It does this by utilizing the Exponential Smoothing (ETS) algorithm. This function is especially useful for statistical analysis and future predictions based on past data. It gives you a reliable estimate of the lower and upper limits of a future value, giving you a more accurate forecast.

## Documentation

Calculates the lower and upper bounds of the confidence interval for a predicted value by using the Exponential Smoothing (ETS) algorithm.

### Category

Statistical

### Syntax

FORECAST.ETS.CONFINT(target_date, values, timeline, [confidence_level], [seasonality], [data_completion], [aggregation])

| Parameter | Description |
| ----------- | ------------- |
| `target_date` | The date for which you want to predict a value. |
| `values` | An array of numbers representing the historical data. |
| `timeline` | An array of dates or numbers representing the timeline of the historical data. Should have the same number of elements as the 'values' parameter. |
| `[confidence_level]` | Optional. The confidence level as a decimal value between 0 and 1. Default is 0.95, which corresponds to a 95% confidence level. |
| `[seasonality]` | Optional. An integer specifying the number of periods in a complete season. Default is automatically detected. |
| `[data_completion]` | Optional. A logical value that specifies whether to fill in missing data points. Default is FALSE (missing data points are not filled). |
| `[aggregation]` | Optional. A string that specifies how to aggregate data for each period. Default is "AVERAGE". Other options include "SUM", "COUNT", and "MIN". |


### Behavior

The `FORECAST.ETS.CONFINT` function in spreadsheets is used to calculate a confidence interval for the predicted exponential smoothing value at a specific future period. Here's how it handles various data types:

- Empty cells: If the timeline or values array contain empty cells, those cells are ignored and not included in the calculation.
- Text: If the timeline or values array contain text, the function will return an error.
- Booleans: Booleans are not accepted in the timeline or values array. If included, the function will return an error.
- Errors: If the timeline or values array contain cells with error values, the function will return an error.
- Non-numeric confidence level: If the confidence level argument is non-numeric or if it's less than 0 or more than 1, the function will return an error.

### Common Errors

| Error | Description |
|-------|-------------|
| #N/A | Occurs when the timeline and values arrays have different lengths. |
| #VALUE! | Occurs when the timeline isn't a numeric array, or the values aren't numeric or logical values. |
| #NUM! | Occurs when the confidence level is less than 0 or more than 1, or if the timeline has less than 2 data points. |

### Best practices

> - Ensure the timeline and values arrays have the same length to avoid the #N/A error.
> - Make sure the timeline is a numeric array, and the values are numeric or logical values to avoid the #VALUE! error.
> - Ensure the confidence level is between 0 and 1, and that the timeline has at least two data points to avoid the #NUM! error.
> - It's good practice to check for empty cells, text, or errors in your timeline and values arrays before using the `FORECAST.ETS.CONFINT` function to avoid unexpected results or errors.

### Usage

A few examples using the FORECAST.ETS.CONFINT function.

```
FORECAST.ETS.CONFINT(B2:B6, A2:A6, "6/1/2019", 0.95) returns a confidence interval for the predicted sales value for June 1, 2019  
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
        "Forecast Confidence Interval"
    ],
    [
        "2023-01-01",
        1200
    ],
    [
        "2023-02-01",
        1350
    ],
    [
        "2023-03-01",
        1180
    ],
    [
        "2023-04-01",
        1420
    ],
    [
        "2023-05-01",
        1290
    ],
    [
        "2023-06-01",
        "",
        "=FORECAST.ETS.CONFINT(A7,B2:B6,A2:A6,0.95)"
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
        "Forecast Confidence Interval"
    ],
    [
        "2023-01-01",
        1200
    ],
    [
        "2023-02-01",
        1350
    ],
    [
        "2023-03-01",
        1180
    ],
    [
        "2023-04-01",
        1420
    ],
    [
        "2023-05-01",
        1290
    ],
    [
        "2023-06-01",
        "",
        "=FORECAST.ETS.CONFINT(A7,B2:B6,A2:A6,0.95)"
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
        "Forecast Confidence Interval"
    ],
    [
        "2023-01-01",
        1200
    ],
    [
        "2023-02-01",
        1350
    ],
    [
        "2023-03-01",
        1180
    ],
    [
        "2023-04-01",
        1420
    ],
    [
        "2023-05-01",
        1290
    ],
    [
        "2023-06-01",
        "",
        "=FORECAST.ETS.CONFINT(A7,B2:B6,A2:A6,0.95)"
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
        "Forecast Confidence Interval"
    ],
    [
        "2023-01-01",
        1200
    ],
    [
        "2023-02-01",
        1350
    ],
    [
        "2023-03-01",
        1180
    ],
    [
        "2023-04-01",
        1420
    ],
    [
        "2023-05-01",
        1290
    ],
    [
        "2023-06-01",
        "",
        "=FORECAST.ETS.CONFINT(A7,B2:B6,A2:A6,0.95)"
    ]
]
            }]
        });
    }
}
```

