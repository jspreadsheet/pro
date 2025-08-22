title: Highcharts and Jspreadsheet Integration
keywords: Jspreadsheet, Real-time Data Integration, External Component, Highcharts, Charts, Event Handling, onchange Event, Synchronization, Dynamic Updates
description: Discover Jspreadsheet events by exploring this real-time data update example showcasing the integration between Highcharts and Jspreadsheet.

# Highcharts

Creating a dynamic chart from a JSS spreadsheet data. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>

<div id="container"></div>
<div id="spreadsheet"></div>

<script>
let data = [
    ['Tokyo', 7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
    ['New York', -0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
    ['Berlin', -0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
    ['London', 3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
];

let update = function (instance, cell, x, y, value) {
    // If the related series does not exists create a new one
    if (! chart.series[y]) {
        // Create a new series row
        let row = [];
        for (i = 1; i < data[y].length; i++) {
            row.push(parseFloat(data[y][i]));
        }
        // Append new series to the chart
        chart.addSeries({ name:data[y][0], data:row });
    } else {
        if (x == 0) {
            // Update legend
            chart.series[y].update({ name:value });
        } else {
            // Update chart data
            chart.series[y].data[x-1].update({ y:parseFloat(value) });
        }
    }
}

jspreadsheet.setLicense('###license###');

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data:data,
        defaultColWidth: 50,
        columns: [
            { type: 'text', width:'200' },
        ],
    }],
    onchange: update,
});

let chart = null;

chart = Highcharts.chart('container', {
    title: {
        text: 'Monthly Average Temperature',
        x: -20 //center
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '°C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'New York',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
});
</script>
</html>
```
```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###'

const chartOptions = {
    title: {
        text: "Monthly Average Temperature",
        x: -20 //center
    },
    subtitle: {
        text: "Source: WorldClimate.com",
        x: -20
    },
    xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
        title: {
            text: "Temperature (°C)"
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: "#808080"
        }]
    },
    tooltip: {
        valueSuffix: "°C"
    },
    legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
        borderWidth: 0
    },
    series: [{
        name: "Tokyo",
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    },
        {
            name: "New York",
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
            name: "Berlin",
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {
            name: "London",
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
    ]
};

export default function App() {
    // Spreadsheet array of worksheets
    const chart = useRef();
    const spreadsheet = useRef();
    // Data
    const data = [
        [chartOptions.series[0].name, ...chartOptions.series[0].data],
        [chartOptions.series[1].name, ...chartOptions.series[1].data],
        [chartOptions.series[2].name, ...chartOptions.series[2].data],
        [chartOptions.series[3].name, ...chartOptions.series[3].data]
    ];
    // Columns
    const columns = [{
        type: "text",
        width: "200"
    }];
    // Updates
    const updates = (instance, cell, x, y, value) => {
        const component = chart.current.chart;
        // If the related series does not exists create a new one
        if (!component.series[y]) {
            // Create a new series row
            let row = [];
            for (let i = 1; i < data[y].length; i++) {
                // @ts-ignore
                row.push(parseFloat(data[y][i]));
            }
            // Append new series to the chart
            component.addSeries({
                name: data[y][0],
                data: row
            });
        } else {
            if (x < 1) {
                // Update legend
                component.series[y].update({
                    name: value
                });
            } else {
                // Update chart data
                component.series[y].data[x - 1].update({
                    y: parseFloat(value)
                });
            }
        }
    };

    // Render data grid component
    return (
        <>
            <HighchartsReact ref={chart} highcharts={Highcharts} options={chartOptions}/>
            <Spreadsheet ref={spreadsheet} license={license} onchange={updates}>
                <Worksheet data={data} columns={columns} minDimensions={[0, 4]}/>
            </Spreadsheet>
        </>
    );
}
```
```vue
<template>
    <div>
      <highcharts ref="chart" :options="chartOptions" />
      <spreadsheet ref="spreadsheet" :license="license" :onchange="updates">
        <worksheet :data="data" :columns="columns" />
      </spreadsheet>
    </div>
</template>
      
<script>
import { Chart } from 'highcharts-vue'
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const chartOptions = {
  title: {
    text: "Monthly Average Temperature",
    x: -20 //center
  },
  subtitle: {
    text: "Source: WorldClimate.com",
    x: -20
  },
  xAxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  },
  yAxis: {
    title: {
      text: "Temperature (°C)"
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: "#808080"
    }]
  },
  tooltip: {
    valueSuffix: "°C"
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    borderWidth: 0
  },
  series: [{
    name: "Tokyo",
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  },
  {
    name: "New York",
    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
  },
  {
    name: "Berlin",
    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
  },
  {
    name: "London",
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  }
  ]
};

const license = '###license###'

export default {
  name: 'App',
  components: {
    Spreadsheet,
    Worksheet,
    highcharts: Chart,
  },
  methods: {
    updates(instance, cell, x, y, value) {
      const component = this.$refs.chart.chart;
        // If the related series does not exists create a new one
        if (!component.series[y]) {
            // Create a new series row
            let row = [];
            for (let i = 1; i < data[y].length; i++) {
                row.push(parseFloat(data[y][i]));
            }
            component.addSeries({
                name: data[y][0],
                data: row
            });
        } else {
            if (x < 1) {
                // Update legend
                component.series[y].update({
                    name: value
                });
            } else {
                // Update chart data
                component.series[y].data[x - 1].update({
                    y: parseFloat(value)
                });
            }
        }
    },
  },
  data() {
    return {
      columns: [{
        type: "text",
        width: "200"
      }],
      data: [
        [chartOptions.series[0].name, ...chartOptions.series[0].data],
        [chartOptions.series[1].name, ...chartOptions.series[1].data],
        [chartOptions.series[2].name, ...chartOptions.series[2].data],
        [chartOptions.series[3].name, ...chartOptions.series[3].data]
      ],
      license,
      chartOptions,
    };
  },
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import Highcharts, { AlignValue, VerticalAlignValue } from 'highcharts'
import jspreadsheet from "jspreadsheet";
import charts from "@jspreadsheet/charts";

jspreadsheet.setExtensions({ charts });

const chartOptions: Highcharts.Options = {
    title: {
        text: "Monthly Average Temperature",
        x: -20 //center
    },
    subtitle: {
        text: "Source: WorldClimate.com",
        x: -20
    },
    xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
        title: {
            text: "Temperature (°C)"
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: "#808080"
        }]
    },
    tooltip: {
        valueSuffix: "°C"
    },
    legend: {
        layout: "vertical",
        align: "right" as AlignValue,
        verticalAlign: "middle" as VerticalAlignValue,
        borderWidth: 0
    },
    series: [{
            type: "line", 
            name: "Tokyo",
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
            type: "line", 
            name: "New York",
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
            type: "line", 
            name: "Berlin",
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {
            type: "line", 
            name: "London",
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
    ]
};

// Create the data grid component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #chartContainer></div>
        <div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet!: ElementRef;
    @ViewChild("chartContainer") chartContainer!: ElementRef;

    chart!: Highcharts.Chart;
    
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          data: [
            [chartOptions.series![0].name, ...(chartOptions.series![0] as any).data],
            [chartOptions.series![1].name, ...(chartOptions.series![1] as any).data],
            [chartOptions.series![2].name, ...(chartOptions.series![2] as any).data],
            [chartOptions.series![3].name, ...(chartOptions.series![3] as any).data],
          ],
          columns: [{ type: "text" }],
        },
      ],
      onchange: (instance, cell, x:any, y:any, value) => {
        const sheetData = instance.options.data as any[][]; 
        if (!this.chart.series[y]) {
          const row: number[] = [];
          for (let i = 1; i < (sheetData[y]?.length ?? 0); i++) {
            row.push(parseFloat(sheetData[y][i]));
          }
          this.chart.addSeries({ name: sheetData[y][0], data: row } as any);
        } else {
          if (x === 0) {
            (this.chart.series[y] as Highcharts.Series).update({
                type: "line",
                name: value as string
              } as Highcharts.SeriesOptionsType);
          } else {
            this.chart.series[y].data[x - 1].update({ y: parseFloat(value as string) });
          }
        }
      },
    });

    this.chart = Highcharts.chart(this.chartContainer.nativeElement, chartOptions);
  }
}
```