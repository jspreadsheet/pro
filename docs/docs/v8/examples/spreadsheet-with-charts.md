title: Spreadsheet charts with ChartJS
keywords: Jspreadsheet, javascript, plugins, spreadsheet, spreadsheet with ChartJS
description: Embed charts in your spreadsheet cells using ChartJS.



# ChartJS integration

[React Data Grid with Charts](https://codesandbox.io/s/spreadsheet-with-charts-using-react-and-jss-002px)

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js"></script>
<script src='https://jspreadsheet.com/v8/plugins/formula-charts.js'></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'Line progression', 150, 50, 250, 300, 350, '=CHART("sparkline", B1:F1)' ],
        ],
        columns: [
            { type:'text', width: '200px,' },
            { type:'number' },
            { type:'number' },
            { type:'number' },
            { type:'number' },
            { type:'number' },
            { type:'text', width: '200px,' },
        ],
        rows: { 0: { height:'100px'} },
        worksheetName: 'Line progression',
    },
    {
        data: [
           [ 'Bar chart', 150, 50, 250, 300, 350, '=CHART("sparkline", B1:F1, "bar")' ],
        ],
        columns: [
           { type:'text', width: '200px,' },
           { type:'number' },
           { type:'number' },
           { type:'number' },
           { type:'number' },
           { type:'number' },
           { type:'text', width: '200px,' },
        ],
        rows: { 0: { height:'100px'} },
        worksheetName: 'Bar chart',
    },
    {
        data: [
           [ 'Pie chart', 30, 50, 26, 150, 90, '=CHART("sparkline", B1:F1, "pie")' ],
        ],
        columns: [
           { type:'text', width: '200px,' },
           { type:'number' },
           { type:'number' },
           { type:'number' },
           { type:'number' },
           { type:'number' },
           { type:'text', width: '200px,' },
        ],
        rows: { 0: { height:'100px'} },
        worksheetName: 'Pie chart',
    },
    {
        data: [
           [ '=CHART("bar", B3:M3, [B4:M4, B5:M5, B6:M6]);', '', '', '', '', '', '', '', '', '', '', '', '' ],
           [ '', '', '', '', '', '', '', '', '', '', '', '', '' ],
           [ 'Products', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
           [ 'Product1', 50, 52, 55, 575, 150, 225, 325, 450, 475, 500, 550, 550 ],
           [ 'Product2', 150, 100, 50, 90, 90, 150, 120, 175, 200, 250, 300, 300 ],
           [ 'Product3', 15, 20, 25, 30, 90, 100, 120, 120, 150, 180, 200, 200 ],
        ],
        mergeCells: {
           'A1': [13,1],
        },
        defaultColWidth: '60px',
        columns: [
           { type:'text', width: '100px,', autoCasting:false },
        ],
        rows: { 0: { height:'380px'} },
        worksheetName: 'Multiple bars',
    }
    ]
});
</script>
</html>
```
 
