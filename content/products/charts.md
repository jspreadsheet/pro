title: JavaScript Charts Extension
keywords: Jspreadsheet, Jexcel, javascript, data grid, charts
description: Jspreadsheet Charts extensions helps users to add and manage charts on their Jspreadsheet data grids. 

![Data Grid Charts](img/data-grid/charts.svg){.icon}

# Charts Integration

The new chart extension bring several new chart types and a more similar engine used in other spreadsheet software allowing better integration results, for example when importing or exporting to XLSX files. In this version, the chart are integrate used the `media` worksheet attribute, and you can use setMedia to programmatically add charts.  

{.green}
> **Important Notes**
> 
> The new chart extension in Jspreadsheet now utilizes the `media` property, offering separation from cell data and introducing a wide array of new charting options with entirely revamped properties to better compatibility with other spreadsheet software such as Excel and Google Sheets.

## Documentation

### Initial Setting

| Settings              | Description                                        |
|-----------------------|----------------------------------------------------|
| type?: String         | One of the chart types describe below.             |
| options?: Object      | Chart options                                      |
| top?: Number          | Floating chart relative top position. Default 0px  |
| left?: Number         | Floating chart relative left position. Default 0px |
| width?: Number        | Floating chart width. Default 400px                |
| height?: Number       | Floating chart height. Default 300px               |
| zIndex?: Number       | Floating chart zIndex. Default 3                   |

### Chart Types

| Chart types   |
|---------------|
| Area          |
| Bar           |
| Bubble        |
| Column        |
| Doughnut      |
| FilledRadar   |
| Histogram     |
| Line          |
| Pareto        |
| PercentArea   |
| PercentBar    |
| PercentColumn |
| Pie           |
| Radar         |
| Scatter       |
| StackedArea   |
| StackedBar    |
| StackedColumn |

### Animations

To disable the animations during a update on the spreadsheet.

{.ignore}
```javascript
charts({ animations: false });
```


## Installation

Please choose one of the following options 

### Using NPM

```bash
$ npm install @jspreadsheet/charts
```

### Using a CDN

You can include the charts on your browser as below. To run the extension please make sure all extensions area loaded, as shown on the following example.

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/charts/dist/index.min.js"></script>
```
 
## Examples

### Floating Data grid Charts

Create a new data grid with a basic column chart on Jspreadsheet Pro. 

{.small}
(Double-click on the chart to edit the chart settings)

```html
<html>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/charts/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/charts/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula, charts });

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        minDimensions: [6,6],
        data: [
            ['Months','Product A','Product B'],
            ['Jan','400','234'],
            ['Fev','300','431'],
            ['Mar','200','134'],
            ['Apr','321','513'],
        ],
        media: [{
            type: 'chart',
            options: {
                type: 'column',
                range: 'A1:C5',
            },
            top: 10,
            left: 300,
            width: 310,
            height: 210,
        }]
    }],
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import charts from "@jspreadsheet/charts";
import formula from "@jspreadsheet/formula";

import "@lemonadejs/studio";
import "@lemonadejs/studio/dist/style.css";
import "jsuites/dist/jsuites.css"
import "jspreadsheet/dist/jspreadsheet.css"
import "@jspreadsheet/charts/dist/style.css";

// Add license
jspreadsheet.setLicense('###license###');
// Define the data grid extensions
jspreadsheet.setExtensions({ formula, charts });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Data
    const data = [
        ['Months','Product A','Product B'],
        ['Jan','400','234'],
        ['Fev','300','431'],
        ['Mar','200','134'],
        ['Apr','321','513'],
    ];

    // Media declaration
    const media = [{
        type: 'chart',
        options: {
            type: 'column',
            range: 'A1:C5',
        },
        top: 10,
        left: 300,
        width: 400,
        height: 300,
    }]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} toolbar={true}>
            <Worksheet data={data} media={media} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" toolbar="true">
        <Worksheet :data="data" :media="media" :minDimensions="[10,10]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import jspreadsheet from 'jspreadsheet';
import charts from "@jspreadsheet/charts";
import formula from "@jspreadsheet/formula";

import "@lemonadejs/studio";
import "@lemonadejs/studio/dist/style.css";
import "jsuites/dist/jsuites.css"
import "jspreadsheet/dist/jspreadsheet.css"
import "@jspreadsheet/charts/dist/style.css";

// Add license
jspreadsheet.setLicense('###license###');
// Define the data grid extensions
jspreadsheet.setExtensions({ formula, charts });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
          ['Months','Product A','Product B'],
          ['Jan','400','234'],
          ['Fev','300','431'],
          ['Mar','200','134'],
          ['Apr','321','513'],
        ];

        // Media declaration
        const media = [{
            id: '',
            type: 'chart',
            options: {
                type: 'column',
                range: 'A1:C5',
            },
            top: 10,
            left: 300,
            width: 400,
            height: 300,
        }]

        return {
            data,
            media
        };
    }
}
</script>

```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import charts from "@jspreadsheet/charts";
import formula from "@jspreadsheet/formula-pro";

// Add license
jspreadsheet.setLicense('###license###');
// Define the data grid extensions
jspreadsheet.setExtensions({ formula, charts });

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
            toolbar: true,
            worksheets: [{
                minDimensions: [8,8],
                data: [
                    ['Months','Product A','Product B'],
                    ['Jan','400','234'],
                    ['Fev','300','431'],
                    ['Mar','200','134'],
                    ['Apr','321','513'],
                ],
                media: [{
                    type: 'chart',
                    options: {
                        type: 'column',
                        range: 'A1:C5',
                    },
                    top: 10,
                    left: 300,
                    width: 400,
                    height: 300,
                }]
            }],
        });
    }
}
```
 
## Previous version

[Previous Version](/products/charts/v4)