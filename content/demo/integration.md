title: Jspreadsheet Demo Supply Chain
keywords: Jspreadsheet, JavaScript data grid, spreadsheet controls, interactive data grid, web-based applications, lightweight, responsive controls, agnostic platform, Angular, React, Vue, spreadsheet-like plugin, documentation, examples, license
description: Example of Jspreadsheet connections with external APIs, services, third-party tools and multiple components.

# Integration

Integration demo that demonstrates how the JavaScript spreadsheet component can connect seamlessly with external APIs, backend services, or cloud platforms. It supports real-time data fetching, updates, and synchronization — ideal for embedding live data from CRMs, financial APIs, or inventory systems into your web app.
<br><br>

<div class="demo-code">

````html
<!DOCTYPE html>
<html lang="pt-BR">
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/charts/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/bar/dist/style.min.css" />

<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/charts/dist/index.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/bar/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>

<div class="row" style="min-height: 260px;">
    <div class="column p10">
        <div id="summary"></div>
    </div>
    <div class="column p10 f1">
        <div id="charts" style="height: 230px; border: 1px solid #ddd;"></div>
    </div>
</div>
<div class="row">
    <div class="column f1">
        <div id="grid"></div>
    </div>
</div>


<script>
jspreadsheet.destroyAll();

jspreadsheet.setLicense('###license###');
jspreadsheet.setExtensions({ formula, bar });

jspreadsheet.calculations(false);

const data = [
    ['Product A', 'US', 500, 525, 550, 575, 550, 525, 525, 550, 575, 600, 650, 650, 3, 40, '=SUM(C1:N1)'],
    ['Product B', 'BR', 150, 100, 143, 125, 125, 150, 150, 175, 200, 250, 300, 300, 4, 60, '=SUM(C2:N2)'],
    ['Product C', 'AU', 460, 250, 200, 350, 400, 400, 350, 350, 250, 300, 175, 154, 4, 20, '=SUM(C3:N3)'],
    ['Product D', 'JP', 200, 413, 125, 350, 100, 400, 350, 350, 550, 300, 600, 516, 5, 80, '=SUM(C4:N4)']
];

function update(instance, cell, x, y, value) {
    if (!chart.series[y]) {
    const rowData = instance.getRowData(y, true);
    const rowValues = rowData.slice(2, rowData.length - 3).map(v => parseFloat(v) || 0);
    chart.addSeries({ name: rowData[0], data: rowValues });
    } else {
    if (x === 0) {
        chart.series[y].update({ name: value });
    } else if (x > 1 && x < 14) {
        const v = instance.getValueFromCoords(x, y, true);
        chart.series[y].data[x - 2].update({ y: parseFloat(v) || 0 });
    }
    }
}

const chart = Highcharts.chart('charts', {
    title: { text: 'Forecast', x: -20 },
    xAxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
    yAxis: {
    title: { text: 'Sales' },
    plotLines: [{ value: 0, width: 1, color: '#808080' }]
    },
    tooltip: { valueSuffix: '$' },
    legend: { layout: 'vertical', align: 'right', verticalAlign: 'middle', borderWidth: 0 },
    series: data.map(row => ({
    name: row[0],
    data: row.slice(2,14).map(Number)
    }))
});

jspreadsheet(document.getElementById('summary'), {
    bar: false,
    worksheets: [{
    data: [
        ['Product A', true, 'red', '=SUM(Products!B1:M1)', '=CHART("sparkline", Products!C1:N1)'],
        ['Product B', false, 'orange', '=SUM(Products!B2:M2)', '=CHART("sparkline", Products!C2:N2)'],
        ['Product C', false, 'darkblue', '=SUM(Products!B3:M3)', '=CHART("sparkline", Products!C3:N3)'],
        ['Product D', false, 'purple', '=SUM(Products!B4:M4)', '=CHART("sparkline", Products!C4:N4)']
    ],
    columns: [
        { type: 'text',     title: 'Summary' },
        { type: 'checkbox', title: 'Partner', width: 60 },
        { type: 'color',    title: 'Brand' },
        { type: 'number',   title: 'Total', mask: 'USD #.##0,00' },
        { type: 'text',     title: 'Evolution', width: 80, readOnly: true }
    ],
    rows: [
        { height: '50px' },
        { height: '50px' },
        { height: '50px' },
        { height: '50px' }
    ],
    columnSorting: false
    }],
    debugFormulas: true
});

jspreadsheet(document.getElementById('grid'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
    data,
    defaultColWidth: '48px',
    tableOverflow: true,
    tableWidth: 1300,
    tableHeight: 180,
    resize: "both",
    worksheetName: 'Products',
    filters: true,
    nestedHeaders: [
        [
        { title: 'Information', colspan: 2 },
        { title: '2022',        colspan: 12 },
        { title: 'Summary',     colspan: 3  }
        ]
    ],
    columns: [
        { width: '120px' },
        { width: '120px', type: 'dropdown', url: 'https://jspreadsheet.com/jspreadsheet/countries', autocomplete: true },
        {},{},{},{},{},{},{},{},{},{},{},{},
        { width: '90px', type: 'rating',      title: 'Rating' },
        { width: '90px', type: 'progressbar', title: 'Target' },
        { width: '70px', title: 'Total' }
    ],
    style: { 'O1:O4': 'font-weight: bold' }
    }],
    onchange: update,
    onload: function () {

    jspreadsheet.calculations(true);
    }
});
</script>
</html>

````
````jsx
import React, { useEffect, useRef } from 'react';
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';
import chartsExtension from '@jspreadsheet/charts';
import bar from '@jspreadsheet/bar';
import Highcharts from 'highcharts';
import 'jspreadsheet/dist/jspreadsheet.css';
import '@lemonadejs/studio';
import '@lemonadejs/studio/dist/style.css';
import 'jsuites/dist/jsuites.css';
import '@jspreadsheet/charts/dist/style.css';
import '@jspreadsheet/bar/dist/style.css';
import '@jspreadsheet/formula-charts';
import './App.css';

const license = '###license###';

export default function App() {
  const summaryRef = useRef();
  const chartsRef  = useRef();
  const gridRef    = useRef();
  let chart;  

  useEffect(() => {
    jspreadsheet.setLicense(license);

    jspreadsheet.destroyAll();

    jspreadsheet.setExtensions({
      formula,
      charts: chartsExtension,
      bar,
    });

    jspreadsheet.calculations(false);

    const data = [
      ['Product A','US',500,525,550,575,550,525,525,550,575,600,650,650,3,40,'=SUM(C1:N1)'],
      ['Product B','BR',150,100,143,125,125,150,150,175,200,250,300,300,4,60,'=SUM(C2:N2)'],
      ['Product C','AU',460,250,200,350,400,400,350,350,250,300,175,154,4,20,'=SUM(C3:N3)'],
      ['Product D','JP',200,413,125,350,100,400,350,350,550,300,600,516,5,80,'=SUM(C4:N4)'],
    ];

    const update = (instance, cell, x, y) => {
      const hasSeries = !!chart.series[y];
      if (!hasSeries) {
        const row    = instance.getRowData(y, true);
        const values = row.slice(2, row.length - 3).map(v => parseFloat(v) || 0);
        chart.addSeries({ name: row[0], data: values });
      } else {
        if (x === 0) {
          chart.series[y].update({ name: cell.innerText });
        } else if (x > 1 && x < 14) {
          const val = instance.getValueFromCoords(x, y, true);
          chart.series[y].data[x - 2].update({ y: parseFloat(val) || 0 });
        }
      }
    };

    chart = Highcharts.chart(chartsRef.current, {
      title: { text: 'Forecast', x: -20 },
      xAxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
      yAxis: {
        title: { text: 'Sales' },
        plotLines: [{ value: 0, width: 1, color: '#808080' }]
      },
      tooltip: { valueSuffix: '$' },
      legend: { layout: 'vertical', align: 'right', verticalAlign: 'middle', borderWidth: 0 },
      series: data.map(r => ({ name: r[0], data: r.slice(2,14).map(Number) })),
    });

    jspreadsheet(summaryRef.current, {
      bar: false,
      debugFormulas: true,
      editable: false,
      worksheets: [{
        data: [
          ['Product A', true, 'red',   '=SUM(Products!B1:M1)', '=CHART("sparkline", Products!C1:N1)'],
          ['Product B', false,'orange','=SUM(Products!B2:M2)', '=CHART("sparkline", Products!C2:N2)'],
          ['Product C', false,'darkblue','=SUM(Products!B3:M3)','=CHART("sparkline", Products!C3:N3)'],
          ['Product D', false,'purple','=SUM(Products!B4:M4)','=CHART("sparkline", Products!C4:N4)'],
        ],
        columns: [
          { type:'text',     title:'Summary' },
          { type:'checkbox', title:'Partner', width:60 },
          { type:'color',    title:'Brand' },
          { type:'number',   title:'Total', mask:'USD #.##0,00' },
          { type:'text',     title:'Evolution', width:80, readOnly: true },
        ],
        rows: [
          { height:'50px' },{ height:'50px' },{ height:'50px' },{ height:'50px' },
        ],
        columnSorting: false,
      }],
    });

    jspreadsheet(gridRef.current, {
      tabs: true,
      toolbar: true,
      worksheets: [{
        worksheetName: 'Products',
        data,
        defaultColWidth: '48px',
        tableOverflow: true,
        tableWidth: 1300,
        tableHeight: 180,
        resize: 'both',
        filters: true,
        nestedHeaders: [[
          { title:'Information', colspan:2 },
          { title:'2022',        colspan:12 },
          { title:'Summary',     colspan:3  },
        ]],
        columns: [
          { width:'120px' },
          { width:'120px', type:'dropdown', url:'https://jspreadsheet.com/jspreadsheet/countries', autocomplete:true },
          {},{},{},{},{},{},{},{},{},{},{},{},
          { width:'90px', type:'rating',      title:'Rating' },
          { width:'90px', type:'progressbar', title:'Target' },
          { width:'70px', title:'Total' },
        ],
        style: { 'O1:O4':'font-weight:bold' },
      }],
      onchange: update,
      onload: () => jspreadsheet.calculations(true),
    });

    return () => {
      jspreadsheet.destroyAll();
      chart.destroy();
    };
  }, []);

  return (
    <>
      <div className="row" style={{ minHeight: 260 }}>
        <div className="column p10">
          <div ref={summaryRef} />
        </div>
        <div className="column p10 f1">
          <div ref={chartsRef} style={{ height: 230, border: '1px solid #ddd' }} />
        </div>
      </div>

      <div className="row" style={{ marginTop: '1rem' }}>
        <div className="column f1">
          <div ref={gridRef} />
        </div>
      </div>
    </>
  );
}
````
````vue
<template>
<div>
  <div class="row" style="min-height: 260px;">
    <div class="column p10">
      <Spreadsheet
        ref="summarySheet"
        :license="license"
        editable="false"
        debug-formulas
      >
        <Worksheet
          :data="summaryData"
          :columns="summaryColumns"
          :rows="summaryRows"
          :columnSorting="false"
          tableOverflow
          :tableWidth="600"
          :tableHeight="200"
        />
      </Spreadsheet>
    </div>

    <div class="column p10 f1">
      <div ref="chartContainer" class="chart-box"></div>
    </div>
  </div>

  <div class="row" style="margin-top:1rem;">
    <div class="column f1">
      <Spreadsheet
        ref="gridSheet"
        :license="license"
        toolbar
        tabs
        @onload="enableCalculations"
        @onchange="handleChange"
      >
        <Worksheet
          name="Products"
          :data="gridData"
          :columns="gridColumns"
          :nestedHeaders="gridNestedHeaders"
          :filters="true"
          defaultColWidth="48px"
          tableOverflow
          tableWidth="1300"
          tableHeight="180"
          resize="both"
          :style="gridStyle"
        />
      </Spreadsheet>
    </div>
  </div>
</div>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";
import chartsExtension from "@jspreadsheet/charts";
import bar from "@jspreadsheet/bar";
import Highcharts from "highcharts";
import '@lemonadejs/studio';
import '@lemonadejs/studio/dist/style.css';
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@jspreadsheet/charts/dist/style.css";
import "@jspreadsheet/bar/dist/style.css";
import "@jspreadsheet/formula-charts";

export default {
name: "App",
components: { Spreadsheet, Worksheet },
data() {
  const baseData = [
    ["Product A","US",500,525,550,575,550,525,525,550,575,600,650,650,3,40,"=SUM(C1:N1)"],
    ["Product B","BR",150,100,143,125,125,150,150,175,200,250,300,300,4,60,"=SUM(C2:N2)"],
    ["Product C","AU",460,250,200,350,400,400,350,350,250,300,175,154,4,20,"=SUM(C3:N3)"],
    ["Product D","JP",200,413,125,350,100,400,350,350,550,300,600,516,5,80,"=SUM(C4:N4)"],
  ];

  return {
    summaryData: [
      ["Product A", true, "red",   "=SUM(Products!B1:M1)"],
      ["Product B", false,"orange","=SUM(Products!B2:M2)"],
      ["Product C", false,"darkblue","=SUM(Products!B3:M3)"],
      ["Product D", false,"purple","=SUM(Products!B4:M4)"],
    ],
    summaryColumns: [
      { type:"text",     title:"Summary" },
      { type:"checkbox", title:"Partner", width:60 },
      { type:"color",    title:"Brand" },
      { type:"number",   title:"Total", mask:"USD #.##0,00" },
    ],
    summaryRows: [
      { height:"50px" },{ height:"50px" },{ height:"50px" },{ height:"50px" }
    ],

    gridData: baseData,
    gridColumns: [
      { width:"120px" },
      { width:"120px", type:"dropdown", url:"https://jspreadsheet.com/jspreadsheet/countries", autocomplete:true },
      {},{},{},{},{},{},{},{},{},{},{},{},
      { width:"90px", type:"rating",      title:"Rating" },
      { width:"90px", type:"progressbar", title:"Target" },
      { width:"70px", title:"Total" },
    ],
    gridNestedHeaders: [[
      { title:"Information", colspan:2 },
      { title:"2022",        colspan:12 },
      { title:"Summary",     colspan:3  },
    ]],
    gridStyle: { "O1:O4":"font-weight:bold" },

    chart: null
  };
},
beforeMount() {
  jspreadsheet.setLicense('###license###');
  jspreadsheet.destroyAll();
  jspreadsheet.setExtensions({
    formula,
    charts: chartsExtension,
    bar,
  });
},
mounted() {
  this.chart = Highcharts.chart(this.$refs.chartContainer, {
    title: { text:"Forecast", x:-20 },
    xAxis: { categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] },
    yAxis: {
      title: { text:"Sales" },
      plotLines:[{ value:0, width:1, color:"#808080" }]
    },
    tooltip:{ valueSuffix:"$" },
    legend:{ layout:"vertical", align:"right", verticalAlign:"middle", borderWidth:0 },
    series: this.gridData.map(r => ({ name:r[0], data:r.slice(2,14).map(Number) }))
  });
},
methods: {
  enableCalculations() {
    jspreadsheet.calculations(true);
  },
  handleChange(instance, cell, x, y) {
    if (!this.chart.series[y]) {
      const row = instance.getRowData(y, true);
      const vals = row.slice(2,row.length-3).map(v=>parseFloat(v)||0);
      this.chart.addSeries({ name:row[0], data:vals });
    } else if (x === 0) {
      this.chart.series[y].update({ name: cell.innerText });
    } else if (x > 1 && x < 14) {
      const val = instance.getValueFromCoords(x,y,true);
      this.chart.series[y].data[x-2].update({ y: parseFloat(val)||0 });
    }
  }
},
beforeDestroy() {
  jspreadsheet.destroyAll();
  this.chart?.destroy();
}
};
</script>

<style>
.column { box-sizing: border-box; }
.p10     { padding:10px;          }
.f1      { flex:1 1 auto;         }
.chart-box {
height: 230px;
border: 1px solid #ddd;
}
</style>
````
````angularjs
import { Component, ElementRef, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';
// @ts-ignore
import formulaCharts from '@jspreadsheet/formula-charts';
import chartsExtension from '@jspreadsheet/charts';
import bar from '@jspreadsheet/bar';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="row" style="min-height:260px;">
      <div class="column p10">
        <div #summary></div>
      </div>
      <div class="column p10 f1">
        <div #chart class="chart-box"></div>
      </div>
    </div>

    <div class="row" style="margin-top:1rem;">
      <div class="column f1">
        <div #grid></div>
      </div>
    </div>
  `,
  styles: [`
    .row { display:flex; flex-wrap:wrap; gap:10px; }
    .column { box-sizing:border-box; }
    .p10 { padding:10px; }
    .f1 { flex:1 1 auto; }
    .chart-box { height:230px; border:1px solid #ddd; }
  `]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('summary', { static: true }) summaryHost!: ElementRef<HTMLDivElement>;
  @ViewChild('grid',    { static: true }) gridHost!: ElementRef<HTMLDivElement>;
  @ViewChild('chart',   { static: true }) chartHost!: ElementRef<HTMLDivElement>;

  private summary!: any;
  private grid!: any;
  private chart!: Highcharts.Chart;
  private loaded = 0;

  private data = [
    ['Product A','US',500,525,550,575,550,525,525,550,575,600,650,650,3,40,'=SUM(C1:N1)'],
    ['Product B','BR',150,100,143,125,125,150,150,175,200,250,300,300,4,60,'=SUM(C2:N2)'],
    ['Product C','AU',460,250,200,350,400,400,350,350,250,300,175,154,4,20,'=SUM(C3:N3)'],
    ['Product D','JP',200,413,125,350,100,400,350,350,550,300,600,516,5,80,'=SUM(C4:N4)'],
  ];

  ngAfterViewInit(): void {
    jspreadsheet.setLicense('###license###');
    jspreadsheet.destroyAll();
    jspreadsheet.setExtensions({ formula, formulaCharts, charts: chartsExtension, bar });
    jspreadsheet.calculations(false);

    this.chart = Highcharts.chart(this.chartHost.nativeElement, {
      chart: { type: 'line' },
      title: { text: 'Forecast', x: -20 },
      xAxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] },
      yAxis: { title: { text: 'Sales' }, plotLines: [{ value: 0, width: 1, color: '#808080' }] },
      tooltip: { valueSuffix: '$' },
      legend: { layout: 'vertical', align: 'right', verticalAlign: 'middle', borderWidth: 0 },
      series: this.data.map(r => ({ type: 'line', name: r[0] as string, data: r.slice(2,14).map(Number) })),
    });

    this.summary = jspreadsheet(this.summaryHost.nativeElement, {
      editable: false,
      debugFormulas: true,
      worksheets: [{
        data: [
          ['Product A', true,  'red',      `=SUM('Products'!C1:N1)`, `=CHART("sparkline", 'Products'!C1:N1)`],
          ['Product B', false, 'orange',   `=SUM('Products'!C2:N2)`, `=CHART("sparkline", 'Products'!C2:N2)`],
          ['Product C', false, 'darkblue', `=SUM('Products'!C3:N3)`, `=CHART("sparkline", 'Products'!C3:N3)`],
          ['Product D', false, 'purple',   `=SUM('Products'!C4:N4)`, `=CHART("sparkline", 'Products'!C4:N4)`],
        ],
        columns: [
          { type:'text',     title:'Summary' },
          { type:'checkbox', title:'Partner', width:60 },
          { type:'color',    title:'Brand' },
          { type:'number',   title:'Total', mask:'USD #.##0,00' },
          { type:'text',     title:'Evolution', width:80 },
        ],
        rows: [{height:50}, {height:50}, {height:50}, {height:50}],
        columnSorting: false,
        tableOverflow: true,
        tableWidth: 600,
        tableHeight: 200,
      }],
      onload: () => this.onSheetLoaded(),
    });

    this.grid = jspreadsheet(this.gridHost.nativeElement, {
      tabs: true,
      toolbar: true,
      worksheets: [{
        worksheetName: 'Products',
        data: this.data,
        defaultColWidth: 48,
        tableOverflow: true,
        tableWidth: 1300,
        tableHeight: 180,
        resize: 'both',
        filters: true,
        nestedHeaders: [[
          { title:'Information', colspan:2 },
          { title:'2022',        colspan:12 },
          { title:'Summary',     colspan:3  },
        ]],
        columns: [
          { width:120 },
          { width:120, type:'dropdown', url:'https://jspreadsheet.com/jspreadsheet/countries', autocomplete:true },
          {},{},{},{},{},{},{},{},{},{},{},{},
          { width:90, type:'rating',      title:'Rating' },
          { width:90, type:'progressbar', title:'Target' },
          { width:70, title:'Total' },
        ],
        style: { 'O1:O4':'font-weight:bold' },
      }],
      onchange: (instance: any, cell: HTMLElement, x: number | string, y: number | string) => {
        this.updateChart(instance, cell, Number(x), Number(y));
      },
      onload: () => this.onSheetLoaded(),
    });
  }

  private onSheetLoaded() {
    this.loaded += 1;
    if (this.loaded === 2) {
      jspreadsheet.calculations(true);
      this.summary?.recalculate?.();
      this.grid?.recalculate?.();
    }
  }

  private updateChart(instance: any, cell: HTMLElement, x: number, y: number) {
    if (!this.chart.series[y]) {
      const row  = instance.getRowData(y, true);
      const vals = row.slice(2, row.length - 3).map((v: any) => parseFloat(v) || 0);
      this.chart.addSeries({ type: 'line', name: row[0], data: vals });
    } else {
      if (x === 0) {
        const newName = (cell as any).innerText;
        (this.chart.series[y] as any).update({ name: newName }, true);
      } else if (x > 1 && x < 14) {
        const v = instance.getValueFromCoords(x, y, true);
        (this.chart.series[y].data[x - 2] as any).update({ y: parseFloat(v) || 0 });
      }
    }
  }

  ngOnDestroy(): void {
    try { this.summary?.destroy?.(); } catch {}
    try { this.grid?.destroy?.(); } catch {}
    try { this.chart?.destroy?.(); } catch {}
  }
}

````

</div>