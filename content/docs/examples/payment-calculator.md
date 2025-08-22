title: Web-based Loan Calculator Spreadsheet Example
keywords: Jspreadsheet, Jexcel, JavaScript, Loan Calculator Spreadsheet, Web-based Applications, Web-based Spreadsheet
description: Explore a simple spreadsheet example using Jspreadsheet to calculate car finance.

# Spreadsheet Payment Calculator

A loan calculator example showcases the use of multiple data grid cell types within a single column. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let data = [
    ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" style="width:200px;height:auto;"><br><h4>Vehicle Payment Calculator</h4>', ''],
    ['Purchase price', '19700'],
    ['Down payment', '1000'],
    ['Trade-in value', '500'],
    ['Interest rate', '0.0305'],
    ['Length of loan (in months)', '60'],
    ['', ''],
    ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
    ['Total cost', '=-(B8*B6)+(B3+B4)'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        columns: [
            { width:'300px' },
            { width:'100px' },
        ],
        mergeCells: {
            A1: [2, 1]
        },
        rows: {
            0: { height:'200px' }
        },
        cells: {
            A1: { type:'html', readonly: true },
            B2: { type:'number', mask: '#.##0,00' },
            B3: { type:'number', mask: '#.##0,00' },
            B4: { type:'number', mask: '#.##0,00' },
            B5: { type:'number', mask: '0.00%' },
            B6: { type: 'dropdown', source: [12,24,36,48,60] },
            B8: { type:'number', mask: '#.##0,00' },
            B9: { type:'number', mask: '#.##0,00' },
        },
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" style="width:200px;height:auto;"><br><h4>Vehicle Payment Calculator</h4>', ''],
        ['Purchase price', '19700'],
        ['Down payment', '1000'],
        ['Trade-in value', '500'],
        ['Interest rate', '0.0305'],
        ['Length of loan (in months)', '60'],
        ['', ''],
        ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
        ['Total cost', '=-(B8*B6)+(B3+B4)'],
    ]
    // Columns
    const cells = {
        A1: { type:'html', readonly: true },
        B2: { type:'number', mask: '#.##0,00' },
        B3: { type:'number', mask: '#.##0,00' },
        B4: { type:'number', mask: '#.##0,00' },
        B5: { type:'number', mask: '0.00%' },
        B6: { type: 'dropdown', source: [12,24,36,48,60] },
        B8: { type:'number', mask: '#.##0,00' },
        B9: { type:'number', mask: '#.##0,00' },
    }
    // Merge cells
    const mergeCells = {
        A1: [2, 1]
    }
    // Columns
    const columns = [
        { width:'300px' },
        { width:'100px' },
    ]
    // Rows
    const rows = {
        0: { height:'200px' }
    }

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} rows={rows} mergeCells={mergeCells} cells={cells} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
            <Worksheet :data="data" :columns="columns" :rows="rows" :mergeCells="mergeCells" :cells="cells" />
    </Spreadsheet>
</template>
<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" style="width:200px;height:auto;"><br><h4>Vehicle Payment Calculator</h4>', ''],
            ['Purchase price', '19700'],
            ['Down payment', '1000'],
            ['Trade-in value', '500'],
            ['Interest rate', '0.0305'],
            ['Length of loan (in months)', '60'],
            ['', ''],
            ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
            ['Total cost', '=-(B8*B6)+(B3+B4)'],
        ]
        // Columns
        const cells = {
            A1: { type:'html', readonly: true },
            B2: { type:'number', mask: '#.##0,00' },
            B3: { type:'number', mask: '#.##0,00' },
            B4: { type:'number', mask: '#.##0,00' },
            B5: { type:'number', mask: '0.00%' },
            B6: { type: 'dropdown', source: [12,24,36,48,60] },
            B8: { type:'number', mask: '#.##0,00' },
            B9: { type:'number', mask: '#.##0,00' },
        }
        // Merge cells
        const mergeCells = {
            A1: [2, 1]
        }
        // Columns
        const columns = [
            { width:'300px' },
            { width:'100px' },
        ]
        // Rows
        const rows = {
            0: { height:'200px' }
        }

        return {
            data,
            columns,
            rows,
            mergeCells,
            cells,
            license
        };
    },
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
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
                    ['<img src="https://www.autoblog.com/img/research/styles/photos/performance.jpg" style="width:200px;height:auto;"><br><h4>Vehicle Payment Calculator</h4>', ''],
                    ['Purchase price', '19700'],
                    ['Down payment', '1000'],
                    ['Trade-in value', '500'],
                    ['Interest rate', '0.0305'],
                    ['Length of loan (in months)', '60'],
                    ['', ''],
                    ['Monthly payment', '=PMT(B5/12,B6,B2-(B3+B4))'],
                    ['Total cost', '=-(B8*B6)+(B3+B4)'],
                ],
                columns: [],
                mergeCells: {
                    A1: [2, 1]
                },
                cells: {
                    A1: { type: 'html' },
                    B2: { type: 'number', mask: '#.##0,00' },
                    B3: { type: 'number', mask: '#.##0,00' },
                    B4: { type: 'number', mask: '#.##0,00' },
                    B5: { type: 'number', mask: '0.00%' },
                    B6: { type: 'dropdown', source: [12, 24, 36, 48, 60] },
                    B8: { type: 'number', mask: '#.##0,00' },
                    B9: { type: 'number', mask: '#.##0,00' },
                },
            }]
        });
    }
}
```
 
