title: Integrating ChartsJS and Jspreadsheet
keywords: Jspreadsheet, Jexcel, javascript, data persistence, database, spreadsheet, charts, ChartJS extension
description: Get started with the ChartJS extension for Jspreadsheet Pro.

# ChartJS integration

Jspreadsheet offers an integration with ChartJS that simplifies integrating charts into the data grid. To see more working examples of this integration, please refer to the ChartJS documentation. This plugin is used through the "CHART" formula, which has two forms that are explained below.   

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet.setLicense('###license###');

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['=CHART("pie", A4:A6, B4:B6)'],
                [],
                ['Proposals', 'Votes (%)'],
                ['Proposal 1', 0.36],
                ['Proposal 2', 0.29],
                ['Proposal 3', 0.35],
            ],
            minDimensions: [10, 1],
            mergeCells: {
                'A1': [10, 1],
            },
            defaultColWidth: '60px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
            rows: {0: {height: '380px'}},
        }
    ]
});
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet} from "@jspreadsheet/react";
import "@jspreadsheet/formula-charts";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Worksheets
    const worksheets = [
        {
            data: [
                ['=CHART("pie", A4:A6, B4:B6)'],
                [],
                ['Proposals', 'Votes (%)'],
                ['Proposal 1', 0.36],
                ['Proposal 2', 0.29],
                ['Proposal 3', 0.35],
            ],
            minDimensions: [10, 1],
            mergeCells: {
                'A1': [10, 1],
            },
            defaultColWidth: '30px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
            rows: {0: {height: '380px'}},
        }
    ];

    // Render data grid component
    return (<Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets}/>);
}
```
```vue
<template>
  <Jspreadsheet :options="Options" />
</template>

<script>
import "@jspreadsheet/formula-charts";
import Jspreadsheet from "./components/Jspreadsheet";

export default {
  components: {
    Jspreadsheet,
  },
  setup() {
    const license =
      "###license###";

    const Options = {
      worksheets: [
        {
          data: [
            ['=CHART("pie", A4:A6, B4:B6)'],
            [],
            ["Proposals", "Votes (%)"],
            ["Proposal 1", 0.36],
            ["Proposal 2", 0.29],
            ["Proposal 3", 0.35],
          ],
          minDimensions: [10, 1],
          mergeCells: {
            A1: [10, 1],
          },
          defaultColWidth: "60px",
          columns: [{ width: "100px" }, { width: "100px" }],
          rows: { 0: { height: "380px" } },
        },
      ],
      license,
    };
    return { Options };
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

jspreadsheet.setLicense('###license###');

@Component({
  selector: "app-root",
  template: `<div #spreadsheet></div>`
})

export class AppComponent {
  @ViewChild("spreadsheet") spreadsheet: ElementRef;
  worksheets: jspreadsheet.worksheetInstance[];

  ngAfterViewInit() {
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          data: [
            ['=CHART("pie", A4:A6, B4:B6)'],
            [],
            ["Proposals", "Votes (%)"],
            ["Proposal 1", 0.36],
            ["Proposal 2", 0.29],
            ["Proposal 3", 0.35]
          ],
          minDimensions: [10, 1],
          mergeCells: {
            A1: [10, 1]
          },
          defaultColWidth: "60px",
          columns: [{ width: 100 }, { width: 100 }],
          rows: { 0: { height: 380 } }
        }
      ]
    });
  }
}
```
 

See some examples: [working examples using ChartJS](/docs/v10/examples/spreadsheet-with-charts "charts on your spreadsheet")   

### Main Form

`CHART(Type, Labels, Datasets, Options)`   

#### Arguments:

| Argument | Description                                                                                                             |
| ---------|-------------------------------------------------------------------------------------------------------------------------|
| Type     | The type of the chart. A text that can vary between "line", "pie", "bar" or any other chart type allowed in ChartJS.    |
| Labels   | The chart labels. Must be a single row or single column range.                                                          |
| Datasets | The chart datasets. It can be a range, an object (whose properties are explained later) or a list made up of these two. |
| Options  | Chart options. Its properties are explained further below.                                                              |

 

#### Property mapping

Both the dataset configuration object and the options object have a property mapping that aims to enable their use without knowledge of ChartJs settings. If this functionality is not useful for your case, just use the `disableJssSimplification: TRUE` setting on the object where you want to disable the mapping.

By disabling property mapping for an object, that object receives as little treatment as possible before being passed to ChartJs. This object must therefore follow the [ChartJS v4.4.0 documentation](https://www.chartjs.org/docs/4.4.0).

Obs: Even with this option enabled, it's still worth reading about the `data` property of the dataset configuration object. Because it is a good example of how cell coordinates are replaced by their values. Which occurs regardless of property mapping.   

#### Dataset properties

| Property | Description                                                                                                                                    | Example                                                         |
| ---------|------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| data     | A range enclosed in parentheses or a list of cell names.                                                                                       | `"data": (A1:A4)` `"data": [A1, A2, A3, A4]`                    |
| label    | The label for this dataset                                                                                                                     | `"label": "Service A"`                                          |
| color    | The color(s) used to represent the dataset. It can be a single color or a list of colors. The default value is defined by the PALETTE formula. | `"color": "#D05D5B"` `"color": ["#C1D37F","#95A3B3","#995D81"]` |

  

#### Options properties

| Property       | Description                                                                                                                  | Example                     |
| ---------------|------------------------------------------------------------------------------------------------------------------------------|-----------------------------|
| title          | The title of the chart. If provided, it must be text.                                                                        | `"title": "my first chart"` |
| titleAxesX     | Chart x-axis title. If provided, it must be text.                                                                            | `"titleAxesX": "Month"`     |
| titleAxesY     | Chart y-axis title. If provided, it must be text.                                                                            | `"titleAxesX": "Units"`     |
| legend         | Informs whether dataset labels should be displayed. If provided, it must be boolean.                                         | `"legend": FALSE`           |
| legendPosition | The position on the chart where dataset labels should be displayed. Accepted values are: "top", "left", "bottom" or "right". | `"legendPosition": "left"`  |
| minAxesY       | Suggested minimum y-axis value. If provided, it must be a number.                                                            | `"minAxesY": -5`            |
| maxAxesY       | Suggested maximum y-axis value. If provided, it must be a number.                                                            | `"maxAxesY": 50`            |
| gridLineX      | Informs whether the chart's x-axis separators should be displayed. If provided, it must be a boolean.                        | `"gridLineX": FALSE`        |
| gridLineY      | Informs whether the chart's y-axis separators should be displayed. If provided, it must be a boolean.                        | `"gridLineY": FALSE`        |



 

### Sparkline Form

`CHART("sparkline", Datasets, Type)`   This form creates smaller charts, omitting most of the chart information other than the drawing itself. This form does not allow the use of the `disableJssSimplification` property on its objects.   

#### Arguments:

| Argument | Description                                                                                                                                                              |
| ---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Datasets | The chart datasets. It can be a range, an object (like the main form dataset object, but only accepts the "data" and "color" properties) or a list made up of these two. |
| Type     | The type of the chart. A text that can vary between "line", "pie", "bar" or any other chart type allowed in ChartJS. If omitted, the default value is "line".            |


