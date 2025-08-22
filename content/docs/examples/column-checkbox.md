title: Checkbox Column
keywords: Jspreadsheet, javascript, plugins, spreadsheet, checkbox, column
description: Learn how to personalize a column to display checkboxes and how to personalize headers

# Effortless Data Management with Checkboxes 

Take advantage of the checkbox column to simplify managing large datasets. By ticking the master checkbox in the header, you can easily select or deselect all items in the column. This functionality is essential for efficiently managing large datasets, ensuring accuracy and speed in your workflow.

```html
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [100,100],
        tableOverflow: true,
        tableWidth: 600,
        columns: [{ type:'checkbox', title: ' ' }],
        columnSortingOnDblClick: false,
    }],
    oncreatecolumn: function(worksheet, column, th) {
    	if (column === 0) {
          let selectAll = document.createElement('input');
          selectAll.type = 'checkbox';
          th.appendChild(selectAll);
          selectAll.addEventListener('click', function() {
               let state = this.checked;
               console.log(state)
               let numOfRows = worksheet.rows.length;
               let records = [];
               for (let j = 0; j < numOfRows; j++) {
                   records.push({
                       x: 0,
                       y: j,
                       value: state,
                   })
               }
               worksheet.setValue(records);
          })
      }
    }
});
</script>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###')

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    const onCreateColumn = function(worksheet, column, th) {
        if (column === 0) {
            let selectAll = document.createElement('input');
            selectAll.type = 'checkbox';
            th.appendChild(selectAll);
            selectAll.addEventListener('click', function() {
                let state = this.checked;
                console.log(state)
                let numOfRows = worksheet.rows.length;
                let records = [];
                for (let j = 0; j < numOfRows; j++) {
                    records.push({
                        x: 0,
                        y: j,
                        value: state,
                    })
                }
                worksheet.setValue(records);
            })
        }
    }

    // Render component
    return <Spreadsheet ref={spreadsheet} oncreatecolumn={onCreateColumn}>
                <Worksheet
                    minDimensions={[100, 100]}
                    tableWidth={600}
                    columns={[{ type: 'checkbox', title: ' ' }]}
                    columnSortingOnDblClick={false}
                    tableOverflow
                />
            </Spreadsheet>;
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :oncreatecolumn="onCreateColumn">
        <Worksheet
            :minDimensions="[100, 100]"
            :tableWidth="600"
            :columns="[{ type: 'checkbox', title: ' ' }]"
            :columnSortingOnDblClick="false"
            :tableOverflow="true"
        />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

export default {
    components: {
        Spreadsheet,
        Worksheet
    },
    methods: {
        onCreateColumn: function(worksheet, column, th) {
            if (column === 0) {
                let selectAll = document.createElement('input');
                selectAll.type = 'checkbox';
                th.appendChild(selectAll);
                selectAll.addEventListener('click', function () {
                    let state = this.checked;
                    console.log(state)
                    let numOfRows = worksheet.rows.length;
                    let records = [];
                    for (let j = 0; j < numOfRows; j++) {
                        records.push({
                            x: 0,
                            y: j,
                            value: state,
                        })
                    }
                    worksheet.setValue(records);
                })
            }
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from '@angular/core';
import jspreadsheet from 'jspreadsheet';
import 'jsuites/dist/jsuites.css';
import 'jspreadsheet/dist/jspreadsheet.css';

// Add license
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
    selector: 'app-root',
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild('spreadsheet') spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    minDimensions: [100, 100],
                    tableOverflow: true,
                    tableWidth: 600,
                    columns: [{ type: 'checkbox', title: ' ' }],
                    columnSortingOnDblClick: false,
                },
            ],
            oncreatecolumn: function (worksheet, column, th) {
                if (column === 0) {
                    let selectAll = document.createElement('input');
                    selectAll.type = 'checkbox';
                    th.appendChild(selectAll);
                    selectAll.addEventListener('click', function () {
                        let state = this.checked;
                        console.log(state);
                        let numOfRows = worksheet.rows.length;
                        let records = [];
                        for (let j = 0; j < numOfRows; j++) {
                            records.push({
                                x: 0,
                                y: j,
                                value: state,
                            });
                        }
                        worksheet.setValue(records);
                    });
                }
            },
        });
    }
}
```
