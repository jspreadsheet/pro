title: Spreadsheet Events
keywords: Jspreadsheet, javascript, plugins, spreadsheet, events
description: This section provides more demonstrations the Jspreadsheet events and the global event dispatcher. An integration example with data synchronization using events.



# Spreadsheet Events

Binding specific events to your JavaScript spreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="container1"></div>
<div id="spreadsheet"></div><br>
<div id="log"></div>

<script>
let changed = function(instance, cell, x, y, value) {
    console.log(cell)
    let cellName = jspreadsheet.helpers.getColumnNameFromCoords(x,y);
    document.getElementById('log').innerText += 'New change on cell ' + cellName + ' to: ' + value + '';
}

let beforeChange = function(instance, cell, x, y, value) {
    let cellName = jspreadsheet.helpers.getColumnNameFromCoords(x,y);
    document.getElementById('log').innerText += 'The cell ' + cellName + ' will be changed';
}

let insertedRow = function(instance) {
    document.getElementById('log').innerText += 'Row added';
}

let insertedColumn = function(instance) {
    document.getElementById('log').innerText += 'Column added';
}

let deletedRow = function(instance) {
    document.getElementById('log').innerText += 'Row deleted';
}

let deletedColumn = function(instance) {
    document.getElementById('log').innerText += 'Column deleted';
}

let sort = function(instance, cellNum, order) {
    order = (order) ? 'desc' : 'asc';
    document.getElementById('log').innerText += 'The column  ' + cellNum + ' sorted by ' + order + '';
}

let resizeColumn = function(instance, cell, width) {
    document.getElementById('log').innerText += 'The column  ' + cell + ' resized to width ' + width + ' px';
}

let resizeRow = function(instance, cell, height) {
    document.getElementById('log').innerText += 'The row  ' + cell + ' resized to height ' + height + ' px';
}

let selectionActive = function(instance, x1, y1, x2, y2, origin) {
    let cellName1 = jspreadsheet.helpers.getColumnNameFromCoords(x1,y1);
    let cellName2 = jspreadsheet.helpers.getColumnNameFromCoords(x2,y2);
    document.getElementById('log').innerText += 'The selection from ' + cellName1 + ' to ' + cellName2 + '';
}

let loaded = function(instance) {
    document.getElementById('log').innerText += 'New data is loaded';
}

let moveRow = function(instance, from, to) {
    document.getElementById('log').innerText += 'The row ' + from + ' was move to the position of ' + to + ' ';
}

let moveColumn = function(instance, from, to) {
    document.getElementById('log').innerText += 'The col ' + from + ' was move to the position of ' + to + ' ';
}

let blur = function(instance) {
    document.getElementById('log').innerText += 'The table is blur';
}

let focus = function(instance) {
    document.getElementById('log').innerText += 'The table is focus';
}

let update = function (instance, cell, x, y, value) {
    // If the related series does not exists create a new one
    if (! chart.series[y]) {
        // Create a new series row
        let row = [];
        for (i = 1; i < data1[y].length; i++) {
            row.push(parseFloat(data1[y][i]));
        }
        // Append new series to the chart
        chart.addSeries({ name:data1[y][0], data:row });
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

let chart = null;

let data1 = [
    ['Mazda', 2001, 2000, '2006-01-01'],
    ['Peugeot', 2010, 5000, '2005-01-01'],
    ['Honda Fit', 2009, 3000, '2004-01-01'],
    ['Honda CRV', 2010, 6000, '2003-01-01'],
];

let data2 = [
    ['Mazda', 2001, 2000, '2006-01-01'],
    ['Peugeot', 2010, 5000, '2005-01-01'],
    ['Honda Fit', 2009, 3000, '2004-01-01'],
    ['Honda CRV', 2010, 6000, '2003-01-01'],
];

let data3 = [
    ['Tokyo', 7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
    ['New York', -0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
    ['Berlin', -0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
    ['London', 3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data2,
    rowResize:true,
    columnDrag:true,
    columns: [
        { type: 'text', width:'200' },
        { type: 'text', width:'100' },
        { type: 'text', width:'100' },
        { type: 'calendar', width:'100' },
    ],
    onchange: changed,
    onbeforechange: beforeChange,
    oninsertrow: insertedRow,
    oninsertcolumn: insertedColumn,
    ondeleterow: deletedRow,
    ondeletecolumn: deletedColumn,
    onselection: selectionActive,
    onsort: sort,
    onresizerow: resizeRow,
    onresizecolumn: resizeColumn,
    onmoverow: moveRow,
    onmovecolumn: moveColumn,
    onload: loaded,
    onblur: blur,
    onfocus: focus,
    license: '###license###',
});
jspreadsheet(document.getElementById('spreadsheet'), {
    data:data3,
    columns: [
        { type: 'text', width:'120px' },
    ],
    defaultColWidth: '60px',
    onchange:update,
    license: '###license###',
});
chart = Highcharts.chart('container1', {
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

## Advanced Example

Update the chart on every change in your spreadsheet, using the onchange handler.

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>

<div id="container"></div>
<div id="spreadsheet"></div>

<script>
let data3 = [
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
        for (i = 1; i < data1[y].length; i++) {
            row.push(parseFloat(data1[y][i]));
        }
        // Append new series to the chart
        chart.addSeries({ name:data1[y][0], data:row });
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

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data3,
    columns: [
        { type: 'text', width:'100' },
    ],
    defaultColWidth: 60,
    onchange:update,
    license: '###license###',
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
 
