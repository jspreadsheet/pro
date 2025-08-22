title: AGGREGATE Function - Advanced Data Aggregation in Jspreadsheet
keywords: AGGREGATE function, data aggregation, Jspreadsheet, JavaScript spreadsheet, Excel formulas, statistical functions, hidden rows, error handling, spreadsheet calculations, data analysis, mathematical functions, formula calculation
description: AGGREGATE function in Jspreadsheet to perform advanced calculations like AVERAGE, COUNT, MAX, MIN while handling hidden rows and error values in your spreadsheet applications.

# AGGREGATE function

`PRO`{.jtag}

The `AGGREGATE` function in Jspreadsheet Formulas Pro is a sophisticated data analysis powerhouse that combines multiple statistical operations with advanced error handling and filtering capabilities. This versatile function is essential for:

- Financial reporting and analysis
- Data quality management
- Statistical computations
- Performance metrics
- Business intelligence
- Data validation

Key advantages include:
- Combines 19 different statistical functions
- Intelligent error handling options
- Selective row visibility control
- Nested calculation management
- Flexible data filtering
- Robust outlier handling

The function is particularly valuable for:
- Financial analysts working with complex datasets
- Data scientists handling large data collections
- Business analysts creating dynamic reports
- Quality control specialists tracking metrics
- Operations managers monitoring KPIs
- Research teams analyzing experimental data

Unlike basic statistical functions, AGGREGATE provides granular control over how to handle problematic data points, hidden information, and nested calculations, making it the go-to choice for professional data analysis.

## Documentation

Returns an aggregate calculation on a range of cells, such as AVERAGE, COUNT, MAX, MIN, etc. with the option to ignore hidden rows and error values.

### Category

Math and trigonometry

### Syntax

AGGREGATE(function_num, options, ref1, [ref2], ...)

| Parameter | Description |
| ----------- | ------------- |
| `function_num` | The number of the function to use for the aggregation (1-19). Common values include: 1 (AVERAGE), 2 (COUNT), 3 (COUNTA), 4 (MAX), 5 (MIN), 6 (PRODUCT), 7 (STDEV.S), 8 (STDEV.P), 9 (SUM), 10 (VAR.S), 11 (VAR.P), 12 (MEDIAN), etc. |
| `options` | Controls how to handle hidden rows and error values: 0 (ignore nested SUBTOTAL/AGGREGATE), 1 (ignore hidden rows), 2 (ignore error values), 3 (ignore hidden rows and error values), 4 (ignore nothing), 5 (ignore hidden rows except error values), 6 (ignore error values except hidden rows), 7 (ignore nothing except nested SUBTOTAL/AGGREGATE). |
| `ref1` | The first range of cells to include in the aggregation. Must contain numeric values for calculation. |
| `[refN]` | Optional. Additional ranges of cells to include in the aggregation. All ranges must contain compatible data types for the chosen function. |


### Behavior

The `AGGREGATE` function in spreadsheets performs specified operations such as COUNT, AVERAGE, MAX, etc. on a range of cells. It can ignore hidden rows, error values, nested SUBTOTAL and AGGREGATE functions. Here's how it behaves under different scenarios:

- Empty Cells: The `AGGREGATE` function will ignore the empty cells while performing calculations.
- Text: If a range or cell reference argument contains text, those cells are ignored.
- Boolean Values: Boolean values are also ignored by the `AGGREGATE` function.
- Errors: The function can be set to ignore or not ignore cells with errors depending on the function number used.
- Non-Numeric Values: Non-numeric values are ignored in the calculation.

### Common Errors

| Error | Description |
| -- | -- |
| #VALUE! | This error appears when the function number provided is not within the valid range (1-19). |
| #REF! | This error occurs when the given cell reference is not valid. |
| #NUM! | This error is displayed when the second argument (options) is not within the valid range (0-7). |

### Best practices

> - Always ensure that the function number and options arguments are within the valid range. Using an invalid number will result in an error.
> - Use the `AGGREGATE` function instead of SUBTOTAL when you want to ignore hidden rows, error values, or nested SUBTOTAL and AGGREGATE functions.
> - Be aware that the `AGGREGATE` function ignores text, boolean values, and empty cells. If you have different data types in your range, consider separating them or converting them to numbers before using this function.
> - Avoid using the `AGGREGATE` function on large data sets, as it may slow down your spreadsheet due to its complexity.

### Usage Examples

The AGGREGATE function offers powerful data analysis capabilities. Here are comprehensive examples:

**1. Basic Statistical Operations:**
```
// Average calculation ignoring errors
=AGGREGATE(1, 2, A1:A10)
// Result: Average of valid numbers, skipping error values

// Maximum with multiple conditions
=AGGREGATE(4, 3, A1:A10)
// Result: Maximum value, ignoring both hidden rows and errors

// Sum of visible data
=AGGREGATE(9, 1, A1:A10)
// Result: Sum of only visible cells
```

**2. Financial Analysis Applications:**
```
// Quarterly Revenue Analysis
=AGGREGATE(9, 3, revenue_data)
// Sums revenue excluding errors and hidden departments

// Average Sales Performance
=AGGREGATE(1, 6, sales_range)
// Average sales ignoring errors but including hidden rows

// Peak Performance Metrics
=AGGREGATE(4, 1, performance_data)
// Maximum value from visible rows only
```

**3. Quality Control Monitoring:**
```
// Standard Deviation of Production
=AGGREGATE(7, 2, quality_metrics)
// Calculates StDev ignoring error values

// Median Product Weight
=AGGREGATE(12, 3, weight_data)
// Finds median excluding outliers and errors

// Minimum Acceptable Quality
=AGGREGATE(5, 6, quality_scores)
// Minimum value ignoring errors
```

**4. Advanced Data Analysis:**
```
// Multi-Range Analysis
=AGGREGATE(2, 6, A1:A10, B1:B10)
// Counts valid cells across multiple ranges

// Filtered Dataset Processing
=AGGREGATE(10, 3, filtered_data)
// Variance calculation ignoring hidden/error values

// Complex Statistical Analysis
=AGGREGATE(11, 7, statistical_data)
// Population variance with full data inclusion
```

**5. Real-world Business Scenarios:**

1. **Sales Performance Dashboard:**
```
// Monthly Sales Average
=AGGREGATE(1, 3, monthly_sales)
// Average excluding errors and hidden months

// Top Performer Identification
=AGGREGATE(4, 2, performance_scores)
// Maximum score ignoring errors

// Sales Growth Calculation
=AGGREGATE(9, 6, growth_rates)
// Sum of growth rates, error-aware
```

2. **Inventory Management:**
```
// Stock Level Analysis
=AGGREGATE(1, 2, stock_levels)
// Average stock excluding outliers

// Reorder Point Calculation
=AGGREGATE(5, 3, minimum_levels)
// Minimum levels with error handling

// Storage Capacity Planning
=AGGREGATE(4, 1, storage_usage)
// Maximum usage from visible data
```

3. **Financial Reporting:**
```
// Quarterly Profit Analysis
=AGGREGATE(9, 3, profit_data)
// Sum profits excluding problematic data

// Expense Tracking
=AGGREGATE(1, 6, expense_records)
// Average expenses with error handling

// Revenue Forecasting
=AGGREGATE(7, 2, forecast_data)
// Standard deviation for predictions
```

4. **Project Management:**
```
// Resource Allocation
=AGGREGATE(1, 3, resource_hours)
// Average hours excluding errors

// Timeline Analysis
=AGGREGATE(4, 2, completion_times)
// Maximum completion time

// Cost Tracking
=AGGREGATE(9, 6, project_costs)
// Total costs with error handling
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
        "Sales Q1",
        "Sales Q2",
        "Average Visible"
    ],
    [
        1200,
        1500,
        "=AGGREGATE(1,5,A2:B5)"
    ],
    [
        800,
        "#DIV/0!",
        "=AGGREGATE(4,6,A2:B5)"
    ],
    [
        1100,
        1300,
        "=AGGREGATE(2,6,A2:B5)"
    ],
    [
        950,
        1450,
        ""
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
        "Sales Q1",
        "Sales Q2",
        "Average Visible"
    ],
    [
        1200,
        1500,
        "=AGGREGATE(1,5,A2:B5)"
    ],
    [
        800,
        "#DIV/0!",
        "=AGGREGATE(4,6,A2:B5)"
    ],
    [
        1100,
        1300,
        "=AGGREGATE(2,6,A2:B5)"
    ],
    [
        950,
        1450,
        ""
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
        "Sales Q1",
        "Sales Q2",
        "Average Visible"
    ],
    [
        1200,
        1500,
        "=AGGREGATE(1,5,A2:B5)"
    ],
    [
        800,
        "#DIV/0!",
        "=AGGREGATE(4,6,A2:B5)"
    ],
    [
        1100,
        1300,
        "=AGGREGATE(2,6,A2:B5)"
    ],
    [
        950,
        1450,
        ""
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
        "Sales Q1",
        "Sales Q2",
        "Average Visible"
    ],
    [
        1200,
        1500,
        "=AGGREGATE(1,5,A2:B5)"
    ],
    [
        800,
        "#DIV/0!",
        "=AGGREGATE(4,6,A2:B5)"
    ],
    [
        1100,
        1300,
        "=AGGREGATE(2,6,A2:B5)"
    ],
    [
        950,
        1450,
        ""
    ]
]
            }]
        });
    }
}
```

