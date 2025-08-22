title: Including charts on your spreadsheets
keywords: Jspreadsheet, Jexcel, javascript, cases, data persistence, database, spreadsheet, charts
description: Learn how to include charts on your spreadsheets.



# ChartJS extension for jspreadsheet

Examples on how to embed charts into jspreadsheet javascript tables. The information can be found on [documentation](/docs/v7/charts) page.

### Line Chart

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js"></script>
<script src='https://jspreadsheet.com/v7/plugins/charts.js'></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
        [ 'Line progression', 150, 50, 250, 300, 350, '=SPARKLINE({"data":B1:F1 })' ],
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
    license: '###license###',
});
</script>
</html>
```
 
### Bar Chart

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js"></script>
<script src='https://jspreadsheet.com/v7/plugins/charts.js'></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
        [ 'Bar chart', 150, 50, 250, 300, 350, '=SPARKLINE({"data":B1:F1, "color":"blue"}, "bar")' ],
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
    license: '###license###',
});
</script>
</html>
``` 

### Pie Chart

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js"></script>
<script src='https://jspreadsheet.com/v7/plugins/charts.js'></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
        [ 'Pie chart', 30, 50, 26, 150, 90, '=SPARKLINE(B5:M5, "pie")' ],
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
    license: '###license###',
});
</script>
</html>
```

### Multiple Bars Chart

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js"></script>
<script src='https://jspreadsheet.com/v7/plugins/charts.js'></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
   data: [
       [ '=CHART("bar", B3:M3, [{ "data":B4:M4, "label":A4 }, { "data":B5:M5, "label":A5 }, { "data":B6:M6, "label":A6 }], { "legend":TRUE ,"title":"Units sold 2016", "titleAxesX":"Month", "titleAxesY":A3 });', '', '', '', '', '', '', '', '', '', '', '', '' ],
       [ '', '', '', '', '', '', '', '', '', '', '', '', '' ],
       [ 'Products', 'Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16', 'Jul-16', 'Aug-16', 'Sep-16', 'Oct-16', 'Nov-16', 'Dec-16' ],
       [ 'Product1', 50, 52, 55, 575, 150, 225, 325, 450, 475, 500, 550, 550 ],
       [ 'Product2', 150, 100, 50, 90, 90, 150, 120, 175, 200, 250, 300, 300 ],
       [ 'Product3', 15, 20, 25, 30, 90, 100, 120, 120, 150, 180, 200, 200 ],
   ],
   mergeCells: {
       'A1': [13,1],
   },
   columns: [
       { type:'text', width: '100px,', autoCasting:false },
   ],
   rows: { 0: { height:'100px'} },
   license: '###license###',
});
</script>
</html>
```

### Radar Chart

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.3.0/Chart.js"></script>
<script src='https://jspreadsheet.com/v7/plugins/charts.js'></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
   data: [
       [ '=RADARCHART(A4:A6, {"data":B4:B6, "fill":TRUE, "color":"red"}, {"title":"Total units sold"})', '' ],
       [ 'Product1', 6775 ],
       [ 'Product2', 21250 ],
       [ 'Product3', 3650 ],
   ],
   mergeCells: {
       'A1': [13,1],
   },
   columns: [
       { type:'text', width: '100px,', autoCasting:false },
   ],
   rows: { 0: { height:'100px'} },
   license: '###license###',
});
</script>
</html>
```
 
