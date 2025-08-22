title: GETPIVOTDATA function
keywords: Jspreadsheet, JavaScript, plugins, spreadsheet, custom formulas, JavaScript formulas, Excel-like formulas, spreadsheet-like formulas, formula, function
description: How to use the GETPIVOTDATA function in Jspreadsheet

# GETPIVOTDATA function



`GETPIVOTDATA` is a function in Jspreadsheet Formulas Pro that enables you to retrieve information stored in a PivotTable report. You can use it to generate either a summary report, which provides a condensed overview of the data, or a list report, which presents the data in a detailed list format. This function enhances your data analysis capability by allowing you to extract and manipulate specific data from a larger PivotTable report.

## Documentation

Returns data stored in a PivotTable report. The data can be returned as a summary report or as a list report.

### Category

Lookup and reference

### Syntax

GETPIVOTDATA(data_field, pivot_table, [field1, item1],[field2,item2],...)

| Parameter | Description |
| ----------- | ------------- |
| `data_field` | The name of the data field that contains the data you want to retrieve. |
| `pivot_table` | A reference to any cell within the PivotTable report that contains the data you want to retrieve. |
| `[field1]` | Optional. The name of a field in the PivotTable report that corresponds to the field1 argument. |
| `[item1]` | Optional. The item in the field specified in the field1 argument for which you want to retrieve data. |
| `[fieldN]` | Optional. The name of a field in the PivotTable report that corresponds to the field2 argument. |
| `[itemN]` | Optional. The item in the field specified in the field2 argument for which you want to retrieve data. |


### Behavior

The 'GETPIVOTDATA' function is used to retrieve summary data from a PivotTable report. Given a PivotTable, this function queries and extracts data based on the PivotTable structure, not the original data. Below are some behaviors of 'GETPIVOTDATA':

- Empty Cells: If a cell does not contain any data, 'GETPIVOTDATA' will return 0, considering it as no data.
- Text: 'GETPIVOTDATA' treats text as a category for data grouping. If the text is not found, it returns an error.
- Booleans: 'GETPIVOTDATA' does not directly handle boolean values, it treats them as text values.
- Errors: If the field or item does not exist in the PivotTable, 'GETPIVOTDATA' will return an error.
- Data type: The function always returns the same data type as the data in the PivotTable.
- Aggregation: 'GETPIVOTDATA' can handle sum, count, average, max, min, product, count numbers, standard deviation, and variance.

### Common Errors

| Error | Description |
| --- | --- |
| #REF! | This error occurs when the supplied field or PivotTable name is not valid or does not exist. |
| #VALUE! | It happens when the field or item argument is not found in the PivotTable. |
| #N/A | This error occurs when the PivotTable does not contain the data you are trying to retrieve. |

### Best practices

> - Always ensure that the field or item arguments exist in the PivotTable. Check for spelling errors or any discrepancies.
> - If your PivotTable is likely to change, it might be best to avoid using 'GETPIVOTDATA' as it can return errors if the structure changes.
> - When using 'GETPIVOTDATA' with dates or times, ensure they are in the correct format that matches with the PivotTable. Otherwise, it can result in errors.
> - Use 'GETPIVOTDATA' when you want to make dynamic reports or dashboards. It's a powerful function for extracting specific data from a large PivotTable.

### Usage

A few examples using the GETPIVOTDATA function.

```
GETPIVOTDATA("Sales",A3,"Region","West")  
GETPIVOTDATA("Quantity",B5,"Product","Apples","Region","East")  
GETPIVOTDATA("Amount",C11,"Region","South","Product","Oranges")  
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
        "Region",
        "Product",
        "Sales"
    ],
    [
        "West",
        "Apples",
        1500
    ],
    [
        "East",
        "Apples",
        2200
    ],
    [
        "West",
        "Oranges",
        1800
    ],
    [
        "East",
        "Oranges",
        1900
    ],
    [
        "",
        ""
    ],
    [
        "West Apples:",
        "=GETPIVOTDATA(\"Sales\",A1,\"Region\",\"West\",\"Product\",\"Apples\")"
    ],
    [
        "East Total:",
        "=GETPIVOTDATA(\"Sales\",A1,\"Region\",\"East\")"
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
        "Region",
        "Product",
        "Sales"
    ],
    [
        "West",
        "Apples",
        1500
    ],
    [
        "East",
        "Apples",
        2200
    ],
    [
        "West",
        "Oranges",
        1800
    ],
    [
        "East",
        "Oranges",
        1900
    ],
    [
        "",
        ""
    ],
    [
        "West Apples:",
        "=GETPIVOTDATA(\"Sales\",A1,\"Region\",\"West\",\"Product\",\"Apples\")"
    ],
    [
        "East Total:",
        "=GETPIVOTDATA(\"Sales\",A1,\"Region\",\"East\")"
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
        "Region",
        "Product",
        "Sales"
    ],
    [
        "West",
        "Apples",
        1500
    ],
    [
        "East",
        "Apples",
        2200
    ],
    [
        "West",
        "Oranges",
        1800
    ],
    [
        "East",
        "Oranges",
        1900
    ],
    [
        "",
        ""
    ],
    [
        "West Apples:",
        "=GETPIVOTDATA(\"Sales\",A1,\"Region\",\"West\",\"Product\",\"Apples\")"
    ],
    [
        "East Total:",
        "=GETPIVOTDATA(\"Sales\",A1,\"Region\",\"East\")"
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
        "Region",
        "Product",
        "Sales"
    ],
    [
        "West",
        "Apples",
        1500
    ],
    [
        "East",
        "Apples",
        2200
    ],
    [
        "West",
        "Oranges",
        1800
    ],
    [
        "East",
        "Oranges",
        1900
    ],
    [
        "",
        ""
    ],
    [
        "West Apples:",
        "=GETPIVOTDATA(\"Sales\",A1,\"Region\",\"West\",\"Product\",\"Apples\")"
    ],
    [
        "East Total:",
        "=GETPIVOTDATA(\"Sales\",A1,\"Region\",\"East\")"
    ]
]
            }]
        });
    }
}
```

