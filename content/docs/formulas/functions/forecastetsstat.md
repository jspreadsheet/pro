title: FORECAST.ETS.STAT function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the FORECAST.ETS.STAT function in Jspreadsheet

# FORECAST.ETS.STAT function



The `FORECAST.ETS.STAT` function in Jspreadsheet Formulas Pro is a useful tool for data analysis. It calculates statistical values using the Exponential Smoothing (ETS) algorithm on a set of time series data. This algorithm considers trends and patterns from past data to make future predictions. Therefore, it's a valuable function when you need to analyze data trends over time and make informed predictions about future data points.

## Documentation

Calculates statistical values for the Exponential Smoothing (ETS) algorithm applied to a time series data set.

### Category

Statistical

### Syntax

FORECAST.ETS.STAT(values, timeline, statistic_type, [seasonality], [data_completion], [aggregation])

| Parameter | Description |
| ----------- | ------------- |
| `values` | An array of numerical values representing the historical data points. |
| `timeline` | An array of dates or numerical values representing the timeline corresponding to the historical data points. It should have the same number of elements as the 'values' parameter. |
| `statistic_type` | A string specifying the desired statistical measure. Available options include 'alpha', 'beta', 'gamma', 'phi', and 'sigma'. |
| `[seasonality]` | An optional parameter that specifies the number of data points per season for seasonal data. |
| `[data_completion]` | An optional parameter that indicates whether the data should be considered complete (TRUE) or incomplete (FALSE). |
| `[aggregation]` | An optional parameter that specifies the aggregation type to use for the data. Default is 'AVERAGE'. |


### Behavior

The `FORECAST.ETS.STAT` spreadsheet function is used to calculate a key statistical value (such as mean, median, standard deviation, etc.) from a given forecast. This function expects a series of historical data as input and uses the Exponential Triple Smoothing (ETS) algorithm to compute the statistical value.

- The function ignores empty cells and cells containing text or boolean values. It only works with numeric data.
- The function will return an error if the input data series is less than two data points.
- It can handle non-continuous data (i.e., data with missing periods).
- `FORECAST.ETS.STAT` can also manage seasonality in the data (i.e., patterns that repeat over known, fixed periods of time).
- The function works best with data that has a regular pattern.

### Common Errors

| Error | Description |
| --- | --- |
| #N/A | This error is displayed when the timeline or data series is less than two data points, or if the timeline isn’t in a consistent interval. |
| #VALUE! | This error occurs if the timeline and data series have different lengths or if the specified statistic number is not between 1 and 8. |
| #NUM! | This error is displayed when the damping factor is less than 0 or more than 1, or if the seasonality is less than 0. |

### Best practices

> - Always ensure that the timeline and data series have the same length to avoid the `#VALUE!` error.
> - Make sure the timeline is in a consistent interval (daily, monthly, yearly, etc.) to prevent the `#N/A` error.
> - Use the `FORECAST.ETS.STAT` function when dealing with data that has a seasonal component, as it can handle seasonality.
> - Be aware that the function will only work with numeric data, so any text or boolean values should be converted or eliminated from your data set.

### Usage

A few examples using the FORECAST.ETS.STAT function.

```
FORECAST.ETS.STAT(B2:B8, A2:A8, "alpha") returns the "alpha" smoothing parameter for the given data.  
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
        "Alpha Parameter"
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
        95
    ],
    [
        "2023-04-01",
        140
    ],
    [
        "2023-05-01",
        110,
        "=FORECAST.ETS.STAT(B2:B6,A2:A6,\"alpha\")"
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
        "Alpha Parameter"
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
        95
    ],
    [
        "2023-04-01",
        140
    ],
    [
        "2023-05-01",
        110,
        "=FORECAST.ETS.STAT(B2:B6,A2:A6,\"alpha\")"
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
        "Alpha Parameter"
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
        95
    ],
    [
        "2023-04-01",
        140
    ],
    [
        "2023-05-01",
        110,
        "=FORECAST.ETS.STAT(B2:B6,A2:A6,\"alpha\")"
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
        "Alpha Parameter"
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
        95
    ],
    [
        "2023-04-01",
        140
    ],
    [
        "2023-05-01",
        110,
        "=FORECAST.ETS.STAT(B2:B6,A2:A6,\"alpha\")"
    ]
]
            }]
        });
    }
}
```

