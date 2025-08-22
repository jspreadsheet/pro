title: ADDRESS Function - Convert Row and Column Numbers to Cell References in Jspreadsheet
keywords: ADDRESS function, cell reference conversion, spreadsheet coordinates, Excel-compatible formulas, absolute references, relative references, A1 notation, R1C1 notation, Jspreadsheet Pro, cell address lookup
description: Learn how to use the ADDRESS function in Jspreadsheet to convert row and column numbers into cell references. Create absolute or relative cell references in A1 or R1C1 notation with optional worksheet references.

# ADDRESS function

`PRO`{.jtag}

The `ADDRESS` function in Jspreadsheet Formulas Pro is a powerful reference manipulation tool that converts numeric row and column coordinates into cell references. This versatile function is essential for:

- Dynamic spreadsheet automation
- Formula generation and manipulation
- Cross-sheet referencing
- Data validation and lookup systems
- Macro development
- Custom function creation

Key capabilities include:
- Converting numeric positions to cell references
- Supporting both A1 and R1C1 notation styles
- Managing absolute and relative references
- Enabling cross-sheet references
- Handling dynamic range creation
- Supporting programmatic formula building

The function is particularly valuable for:
- Spreadsheet developers creating custom solutions
- Financial analysts building complex models
- Data analysts automating workflows
- Business users creating dynamic reports
- System integrators developing spreadsheet tools
- Quality assurance teams automating tests

Unlike basic cell references, ADDRESS provides programmatic control over reference creation, making it indispensable for advanced spreadsheet development and automation.

## Documentation

Returns a cell reference as a string, given row and column numbers, and an optional flag indicating whether the reference should be absolute or relative.

### Category

Lookup and reference

### Syntax

ADDRESS(row_num, col_num, [abs_num], [a1], [sheet_text])

| Parameter | Description |
| ----------- | ------------- |
| `row_num` | The row number for the cell reference. |
| `col_num` | The column number for the cell reference. |
| `[abs_num]` | Optional. A number specifying the type of reference to return. May be one of: 1 (default), 2, 3, or 4. |
| `[a1]` | Optional. A value indicating whether the returned reference should use the A1-style or R1C1-style notation. Defaults to FALSE if not specified. |
| `[sheet_text]` | Optional. The name of the worksheet to which the cell reference belongs. |


### Behavior

The `ADDRESS` function in a spreadsheet generates a cell address in text format based on specified row and column numbers. It takes the row and column numbers as primary arguments, and three optional arguments: `abs_num`, `a1`, and `sheet_text`. 

- If the column number is omitted or is less than 1, the function will return a `#VALUE!` error. 
- For the `abs_num` argument, the function accepts values from 1 to 4. If the argument is omitted or not in this range, the function will default to an absolute reference (1).
- If the `a1` argument is `FALSE`, the function will return an R1C1-style reference. If it's `TRUE` or omitted, the function will return an A1-style reference.
- For the `sheet_text` argument, the function will return an address that includes the sheet name if a valid string is provided. If the argument is omitted, the function will return an address in the active sheet.
- If the function is given a boolean value, text, or an error value as a row or column number, it will return a `#VALUE!` error.

### Common Errors

| Error | Description |
|-------|-------------|
| #VALUE! | This error is returned when the row or column number is less than 1, non-numeric, a boolean, text, or an error value. |
| #NAME? | This error is returned when the `sheet_text` argument is not a valid string. |

### Best practices

> - Always ensure that the row and column numbers provided are valid (i.e., greater than zero and numeric).
> - Make use of the `abs_num` argument to control the type of cell reference you want to generate.
> - If you're working with multiple sheets, you can use the `sheet_text` argument to generate addresses in different sheets.
> - Remember that the `ADDRESS` function returns a text, not an actual reference. If you want to use the result as a reference, you should combine it with `INDIRECT` function.

### Usage Examples

Here are comprehensive examples demonstrating the ADDRESS function's capabilities:

**1. Basic Reference Creation:**
```
// Absolute reference (default)
=ADDRESS(1, 1)      // Returns "$A$1"
// Fully relative reference
=ADDRESS(2, 3, 4)   // Returns "C2"
// Mixed reference (absolute row)
=ADDRESS(4, 4, 2)   // Returns "D$4"
```

**2. Dynamic Range Generation:**
```
// Create dynamic cell references
=ADDRESS(ROW(), COLUMN())   // Current cell address
=ADDRESS(ROW()+1, COLUMN()) // Cell below current
=ADDRESS(ROW(), COLUMN()+1) // Cell to the right
```

**3. Cross-sheet References:**
```
// Reference with sheet name
=ADDRESS(5, 3, 1, TRUE, "Sheet2")  // Returns "Sheet2!$C$5"
// Multi-sheet reference
=ADDRESS(1, 1, 1, TRUE, "'Data Sheet'")  // Returns "'Data Sheet'!$A$1"
```

**4. Advanced Applications:**

1. **Dynamic Lookup Tables:**
```
// Create lookup reference
=ADDRESS(MATCH(value, range, 0), 2)  // Dynamic row lookup
=ADDRESS(2, MATCH(header, headers, 0))  // Dynamic column lookup
```

2. **Range Building:**
```
// Dynamic range start
=ADDRESS(1, 1) & ":" & ADDRESS(ROW(), COLUMN())
// Result: "$A$1:current_cell"
```

3. **Formula Construction:**
```
// Build SUM formula
="=SUM(" & ADDRESS(1,1) & ":" & ADDRESS(10,1) & ")"
// Result: "=SUM($A$1:$A$10)"
```

**5. Real-world Scenarios:**

1. **Financial Reporting:**
```
// Dynamic total reference
=ADDRESS(last_row, summary_col, 1)  // Bottom-line totals
// Year-over-year comparison
=ADDRESS(curr_row, curr_col-12)     // Previous year reference
```

2. **Data Validation:**
```
// Reference validation range
=ADDRESS(2,validation_col) & ":" & 
ADDRESS(last_row,validation_col)    // Create validation range
```

3. **Dashboard Creation:**
```
// Dynamic chart ranges
=ADDRESS(data_start, 1) & ":" & 
ADDRESS(data_end, data_cols)        // Chart data range
```

4. **Automated Reporting:**
```
// Report cell references
=ADDRESS(report_row, summary_col, 2) // Mixed reference for copying
=ADDRESS(fixed_row, curr_col, 3)     // Mixed reference pattern
```

**6. Special Applications:**

1. **Error Handling:**
```
// Safe reference creation
=IF(row_num>0, ADDRESS(row_num,col_num), "#N/A")
// Validates inputs before creating reference
```

2. **Multi-sheet Operations:**
```
// Cross-sheet calculations
=ADDRESS(source_row, source_col, 1, TRUE, "Data") &
"=" & ADDRESS(calc_row, calc_col, 1, TRUE, "Calcs")
```

3. **Dynamic Forms:**
```
// Form field references
=ADDRESS(base_row + field_offset, input_col)
// Creates references for form fields
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
        "Row",
        "Column",
        "Address Result"
    ],
    [
        2,
        3,
        "=ADDRESS(A2,B2)"
    ],
    [
        1,
        1,
        "=ADDRESS(A3,B3)"
    ],
    [
        4,
        2,
        "=ADDRESS(A4,B4,1)"
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
        "Row",
        "Column",
        "Address Result"
    ],
    [
        2,
        3,
        "=ADDRESS(A2,B2)"
    ],
    [
        1,
        1,
        "=ADDRESS(A3,B3)"
    ],
    [
        4,
        2,
        "=ADDRESS(A4,B4,1)"
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
        "Row",
        "Column",
        "Address Result"
    ],
    [
        2,
        3,
        "=ADDRESS(A2,B2)"
    ],
    [
        1,
        1,
        "=ADDRESS(A3,B3)"
    ],
    [
        4,
        2,
        "=ADDRESS(A4,B4,1)"
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
        "Row",
        "Column",
        "Address Result"
    ],
    [
        2,
        3,
        "=ADDRESS(A2,B2)"
    ],
    [
        1,
        1,
        "=ADDRESS(A3,B3)"
    ],
    [
        4,
        2,
        "=ADDRESS(A4,B4,1)"
    ]
]
            }]
        });
    }
}
```

