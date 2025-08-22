title: Generate Unique Sequential Numbers for Each Worksheet Row: Auto numeric Column Type
keywords: Jspreadsheet, javascript, plugins, spreadsheet, autonumber column type, automatic numbering
description: Generate automatic sequence numbers for rows using the Autonumber column type in Jspreadsheet.

# Autonumber

The native auto increment column type can be used as shown below. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
            ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
            ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
            ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"],
            ["5","STAYING AT TAMARA'S","GEORGE EZRA"],
            ["6","BOHEMIAN RHAPSODY - OST","QUEEN"],
            ["7","THANK U NEXT","ARIANA GRANDE"],
            ["8","WHAT A TIME TO BE ALIVE","TOM WALKER"],
            ["9","A STAR IS BORN","MOTION PICTURE CAST RECORDING"],
            ["10","YOU'RE IN MY HEART","ROD STEWART"]
        ],
        columns: [
            { type: 'autonumber', title: 'Id', readOnly: true, primaryKey: true, },
            { type: 'text', width: '350px', title: 'Title' },
            { type: 'text', width: '250px', title: 'Artist' }
        ]
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

// Set the license
const license = '###license###';

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
        ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
        ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
        ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"],
        ["5","STAYING AT TAMARA'S","GEORGE EZRA"],
        ["6","BOHEMIAN RHAPSODY - OST","QUEEN"],
        ["7","THANK U NEXT","ARIANA GRANDE"],
        ["8","WHAT A TIME TO BE ALIVE","TOM WALKER"],
        ["9","A STAR IS BORN","MOTION PICTURE CAST RECORDING"],
        ["10","YOU'RE IN MY HEART","ROD STEWART"]
    ]
    // Columns
    const columns = [
        { type: 'autonumber', title: 'Id', readOnly: true, primaryKey: true, },
        { type: 'text', width: '350px', title: 'Title' },
        { type: 'text', width: '250px', title: 'Artist' }
    ]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

// Set the license
const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
            ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
            ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
            ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"],
            ["5","STAYING AT TAMARA'S","GEORGE EZRA"],
            ["6","BOHEMIAN RHAPSODY - OST","QUEEN"],
            ["7","THANK U NEXT","ARIANA GRANDE"],
            ["8","WHAT A TIME TO BE ALIVE","TOM WALKER"],
            ["9","A STAR IS BORN","MOTION PICTURE CAST RECORDING"],
            ["10","YOU'RE IN MY HEART","ROD STEWART"]
        ]
        // Columns
        const columns = [
            { type: 'autonumber', title: 'Id', readOnly: true, primaryKey: true, },
            { type: 'text', width: '350px', title: 'Title' },
            { type: 'text', width: '250px', title: 'Artist' }
        ]

        return {
            data,
            columns,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
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
                    ["1","DIVINELY UNINSPIRED TO A HELLISH EXTENT","LEWIS CAPALDI"],
                    ["2","NO 6 COLLABORATIONS PROJECT","ED SHEERAN"],
                    ["3","THE GREATEST SHOWMAN","MOTION PICTURE CAST RECORDING"],
                    ["4","WHEN WE ALL FALL ASLEEP WHERE DO WE GO","BILLIE EILISH"],
                    ["5","STAYING AT TAMARA'S","GEORGE EZRA"],
                    ["6","BOHEMIAN RHAPSODY - OST","QUEEN"],
                    ["7","THANK U NEXT","ARIANA GRANDE"],
                    ["8","WHAT A TIME TO BE ALIVE","TOM WALKER"],
                    ["9","A STAR IS BORN","MOTION PICTURE CAST RECORDING"],
                    ["10","YOU'RE IN MY HEART","ROD STEWART"]
                ],
                columns: [
                    { type: 'autonumber', title: 'Id', readOnly: true, primaryKey: true, },
                    { type: 'text', width: '350px', title: 'Title' },
                    { type: 'text', width: '250px', title: 'Artist' }
                ]
            }]
        });
    }
}
```
 
