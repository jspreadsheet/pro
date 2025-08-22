title: ChartJS and Jspreadsheet Integration
keywords: Jspreadsheet, JavaScript, Plugins, Spreadsheet, ChartJS, Data Visualization, Integration, Dynamic Charts, Interactive Charts, Web Application, Web Development
description: Integrate ChartJS with Jspreadsheet to create dynamic data visualizations within your spreadsheets. Enhance data analysis and presentation with this powerful combination.

# ChartJS

## Examples

### Embed charts on your data grid

Integrating charts in your online spreadsheets. See this example implemented using [React Data Grid](https://codesandbox.io/s/spreadsheet-with-charts-using-react-and-jss-002px). 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/jspreadsheet/sales.csv',
        csvHeaders: false,
        columns: [
            { width:'150px' },
        ],
        defaultColWidth: '50px',
        mergeCells: {
            B1: [3, 1],
            E1: [10, 1]
        },
        rows: {
            0: { height:'300px' }
        },
        style: {
            'A1': 4,
            'N3': 3,
            'A3:M3': 0,
            'A4:M6': 1,
            'N4:N6': 4,
        }
    }],
    style: [
        'border-bottom:2px solid black;font-weight:bold;font-size:0.8em',
        'border-bottom:2px solid black;font-weight:bold;font-size:0.8em;background-color: #e0eaff',
        'border-bottom:1px solid black;font-size:0.8em',
        'border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff',
        'background-color: #e0eaff',
    ],
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";

import "@jspreadsheet/formula-charts";

// Set the license
const license = '###license###';

// Create the react data grid
export default function App() {
    const spreadsheet = useRef();
    // Global style definitions
    const gridStyle = [
        'border-bottom:2px solid black;font-weight:bold;font-size:0.8em',
        'border-bottom:2px solid black;font-weight:bold;font-size:0.8em;background-color: #e0eaff',
        'border-bottom:1px solid black;font-size:0.8em',
        'border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff',
        'background-color: #e0eaff',
    ];
    // Columns
    const columns = [
        { width:'150px' },
    ];
    // Style with ranges and the position of the style string in the globalStyle array
    const style = {
        'A1': 4,
        'N3': 3,
        'A3:M3': 0,
        'A4:M6': 1,
        'N4:N6': 4,
    };
    // Merged cells
    const mergeCells = { B1: [3, 1], E1: [10, 1] };
    // Rows
    const rows = { 0: height: '300px' };

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} style={gridStyle}>
            <Worksheet csv={"/jspreadsheet/sales.csv"}
                columns={columns}
                csvHeaders={"false"}
                defaultColWidth={"50px"}
                mergeCells={mergeCells}
                style={style}
                rows={rows}
            />
        </Spreadsheet>
    );
}
```
```vue
<template>
  <Spreadsheet ref="spreadsheet" :license="license" :styles="gridStyle">
    <Worksheet
      csv="./sales.csv"
      :columns="columns"
      :csvHeaders="false"
      defaultColWidth="50px"
      :mergeCells="mergeCells"
      :style="style"
      :rows="rows"
    />
  </Spreadsheet>
</template>
 
<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "@jspreadsheet/formula-charts";
 
const license = '###license###';
 
export default {
  components: {
    Spreadsheet,
    Worksheet,
  },
  data() {
    return {
      columns: [{ width: "150px" }],
      rows: { 0: { height: "300px" } },
      mergeCells: {
        B1: [3, 1],
        E1: [10, 1],
      },
      gridStyle: [
        "border-bottom:2px solid black;font-weight:bold;font-size:0.8em",
        "border-bottom:2px solid black;font-weight:bold;font-size:0.8em;background-color: #e0eaff",
        "border-bottom:1px solid black;font-size:0.8em",
        "border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff",
        "background-color: #e0eaff",
      ],
      style: { A1: 4, N3: 3, "A3:M3": 0, "A4:M6": 1, "N4:N6": 4 },
      license,
    };
  },
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

import "@jspreadsheet/formula-charts";

// Set the license
jspreadsheet.setLicense('###license###');

// Create the data grid component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create summary spreadsheet
        jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                csv: '/jspreadsheet/sales.csv',
                csvHeaders: false,
                columns: [
                    { width:'150px' },
                ],
                defaultColWidth: '50px',
                mergeCells: {
                    B1: [3, 1],
                    E1: [10, 1]
                },
                rows: {
                    0: { height:'300px' }
                },
                style: {
                    'A1': 4,
                    'N3': 3,
                    'A3:M3': 0,
                    'A4:M6': 1,
                    'N4:N6': 4,
                }
            }],
            style: [
                'border-bottom:2px solid black;font-weight:bold;font-size:0.8em',
                'border-bottom:2px solid black;font-weight:bold;font-size:0.8em;background-color: #e0eaff',
                'border-bottom:1px solid black;font-size:0.8em',
                'border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff',
                'background-color: #e0eaff',
            ],
        });
    }
}
```
 

 

### More examples and documentation

To learn much more about ChartJS extensions for Jspreadsheet:

  * [Chartjs integration](/docs/v10/charts "Spreadsheet with charts")
  * [More ChartJS examples](/docs/v10/examples/spreadsheet-with-charts "Spreadsheet with charts")


