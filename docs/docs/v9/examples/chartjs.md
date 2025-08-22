title: ChartJS and Jspreadsheet Integration
keywords: Jspreadsheet, javascript, plugins, spreadsheet, spreadsheet with ChartJS
description: Advance charts in your spreadsheet cells using ChartJS.

Advanced Examples



# ChartJS

Integrating charts in your online spreadsheets. See this example implemented using [React](https://codesandbox.io/s/spreadsheet-with-charts-using-react-and-jss-002px). 

 
#### Using CDN

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://jspreadsheet.com/v9/plugins/formula-charts.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js"></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/jspreadsheet/sales.csv',
        csvHeaders: false,
        columns: [
            { width:'150px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'100px' },
        ],
        mergeCells: {
            B1: [3, 1],
            E1: [10, 1]
        },
        rows: {
            0: { height:'300px' }
        },
        style: {
            A1: 'background-color: #e0eaff',
            N1: '',
            // Row 3
            A3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            B3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            C3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            D3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            E3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            F3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            G3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            H3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            I3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            J3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            K3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            L3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            M3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            N3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;background-color: #e0eaff',
            // Row 4
            A4: 'border-bottom:1px solid black;font-size:0.8em;',
            B4: 'border-bottom:1px solid black;font-size:0.8em;',
            C4: 'border-bottom:1px solid black;font-size:0.8em;',
            D4: 'border-bottom:1px solid black;font-size:0.8em;',
            E4: 'border-bottom:1px solid black;font-size:0.8em;',
            F4: 'border-bottom:1px solid black;font-size:0.8em;',
            G4: 'border-bottom:1px solid black;font-size:0.8em;',
            H4: 'border-bottom:1px solid black;font-size:0.8em;',
            I4: 'border-bottom:1px solid black;font-size:0.8em;',
            J4: 'border-bottom:1px solid black;font-size:0.8em;',
            K4: 'border-bottom:1px solid black;font-size:0.8em;',
            L4: 'border-bottom:1px solid black;font-size:0.8em;',
            M4: 'border-bottom:1px solid black;font-size:0.8em;',
            N4: 'border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff',
            // Row 5
            A5: 'border-bottom:1px solid black;font-size:0.8em;',
            B5: 'border-bottom:1px solid black;font-size:0.8em;',
            C5: 'border-bottom:1px solid black;font-size:0.8em;',
            D5: 'border-bottom:1px solid black;font-size:0.8em;',
            E5: 'border-bottom:1px solid black;font-size:0.8em;',
            F5: 'border-bottom:1px solid black;font-size:0.8em;',
            G5: 'border-bottom:1px solid black;font-size:0.8em;',
            H5: 'border-bottom:1px solid black;font-size:0.8em;',
            I5: 'border-bottom:1px solid black;font-size:0.8em;',
            J5: 'border-bottom:1px solid black;font-size:0.8em;',
            K5: 'border-bottom:1px solid black;font-size:0.8em;',
            L5: 'border-bottom:1px solid black;font-size:0.8em;',
            M5: 'border-bottom:1px solid black;font-size:0.8em;',
            N5: 'border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff',
            // Row 6
            A6: 'border-bottom:1px solid black;font-size:0.8em;',
            B6: 'border-bottom:1px solid black;font-size:0.8em;',
            C6: 'border-bottom:1px solid black;font-size:0.8em;',
            D6: 'border-bottom:1px solid black;font-size:0.8em;',
            E6: 'border-bottom:1px solid black;font-size:0.8em;',
            F6: 'border-bottom:1px solid black;font-size:0.8em;',
            G6: 'border-bottom:1px solid black;font-size:0.8em;',
            H6: 'border-bottom:1px solid black;font-size:0.8em;',
            I6: 'border-bottom:1px solid black;font-size:0.8em;',
            J6: 'border-bottom:1px solid black;font-size:0.8em;',
            K6: 'border-bottom:1px solid black;font-size:0.8em;',
            L6: 'border-bottom:1px solid black;font-size:0.8em;',
            M6: 'border-bottom:1px solid black;font-size:0.8em;',
            N6: 'border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff',
        }
    }]
});
</script>
</html>
```

#### Using NPM

{.ignore}
```javascript
// Jspreadsheet Pro
import jspreadsheet from 'jspreadsheet';

// Formula Premium Plugin
import '@jspreadsheet/formula-charts';

// License for Formula Plugin
jspreadsheet.setLicense('###license###');

// Create a spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/jspreadsheet/sales.csv',
        csvHeaders: false,
        columns: [
            { width:'150px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'50px' },
            { width:'100px' },
        ],
        mergeCells: {
            B1: [3, 1],
            E1: [10, 1]
        },
        rows: {
            0: { height:'300px' }
        },
        style: {
            A1: 'background-color: #e0eaff',
            N1: '',
            // Row 3
            A3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            B3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            C3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            D3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            E3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            F3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            G3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            H3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            I3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            J3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            K3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            L3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            M3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;',
            N3: 'border-bottom:2px solid black; font-weight:bold;font-size:0.8em;background-color: #e0eaff',
            // Row 4
            A4: 'border-bottom:1px solid black;font-size:0.8em;',
            B4: 'border-bottom:1px solid black;font-size:0.8em;',
            C4: 'border-bottom:1px solid black;font-size:0.8em;',
            D4: 'border-bottom:1px solid black;font-size:0.8em;',
            E4: 'border-bottom:1px solid black;font-size:0.8em;',
            F4: 'border-bottom:1px solid black;font-size:0.8em;',
            G4: 'border-bottom:1px solid black;font-size:0.8em;',
            H4: 'border-bottom:1px solid black;font-size:0.8em;',
            I4: 'border-bottom:1px solid black;font-size:0.8em;',
            J4: 'border-bottom:1px solid black;font-size:0.8em;',
            K4: 'border-bottom:1px solid black;font-size:0.8em;',
            L4: 'border-bottom:1px solid black;font-size:0.8em;',
            M4: 'border-bottom:1px solid black;font-size:0.8em;',
            N4: 'border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff',
            // Row 5
            A5: 'border-bottom:1px solid black;font-size:0.8em;',
            B5: 'border-bottom:1px solid black;font-size:0.8em;',
            C5: 'border-bottom:1px solid black;font-size:0.8em;',
            D5: 'border-bottom:1px solid black;font-size:0.8em;',
            E5: 'border-bottom:1px solid black;font-size:0.8em;',
            F5: 'border-bottom:1px solid black;font-size:0.8em;',
            G5: 'border-bottom:1px solid black;font-size:0.8em;',
            H5: 'border-bottom:1px solid black;font-size:0.8em;',
            I5: 'border-bottom:1px solid black;font-size:0.8em;',
            J5: 'border-bottom:1px solid black;font-size:0.8em;',
            K5: 'border-bottom:1px solid black;font-size:0.8em;',
            L5: 'border-bottom:1px solid black;font-size:0.8em;',
            M5: 'border-bottom:1px solid black;font-size:0.8em;',
            N5: 'border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff',
            // Row 6
            A6: 'border-bottom:1px solid black;font-size:0.8em;',
            B6: 'border-bottom:1px solid black;font-size:0.8em;',
            C6: 'border-bottom:1px solid black;font-size:0.8em;',
            D6: 'border-bottom:1px solid black;font-size:0.8em;',
            E6: 'border-bottom:1px solid black;font-size:0.8em;',
            F6: 'border-bottom:1px solid black;font-size:0.8em;',
            G6: 'border-bottom:1px solid black;font-size:0.8em;',
            H6: 'border-bottom:1px solid black;font-size:0.8em;',
            I6: 'border-bottom:1px solid black;font-size:0.8em;',
            J6: 'border-bottom:1px solid black;font-size:0.8em;',
            K6: 'border-bottom:1px solid black;font-size:0.8em;',
            L6: 'border-bottom:1px solid black;font-size:0.8em;',
            M6: 'border-bottom:1px solid black;font-size:0.8em;',
            N6: 'border-bottom:1px solid black;font-size:0.8em;background-color: #e0eaff',
        }
    }]
});
```

## More examples and documentation

To learn much more about ChartJS extensions for Jspreadsheet:

  * [Chartjs Integration](/docs/v9/charts "Spreadsheet with charts")
  * [ChartJS examples](/docs/v9/examples/spreadsheet-with-charts "Spreadsheet with charts")


