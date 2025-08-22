title: Spreadsheet Data Binding Synchronization
keywords: Jspreadsheet, javascript, plugins, spreadsheet, data binding, data synchronization
description: Explore data binding in Jspreadsheet for automatic updates when cell values change. Synchronize your data seamlessly with the underlying data source.

# Spreadsheet Data Binding

Data binding in JSS refers to automatically synchronizing the data reference provided during initialization with the JSS data. That ensures that changes the user makes to the data are reflected automatically in the variable declared during initialization.  

 The following content will be the content of the data variable.    





```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br/>

<div id='console'></div><br>

<input type='button' value='Get the content of the data variable' id="consolelog" />

<script>
let data = [
    {
       "id":1,
       "name":"Jorge",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3120",
    },
    {
       "id":2,
       "name":"Antonio",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3121",
    },
    {
       "id":3,
       "name":"Manoel",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3123",
    },
    {
       "id":4,
       "name":"Pedro",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3124",
    },
    {
       "id":5,
       "name":"Carlos",
       "img":"img/nophoto.jpg",
       "department":"Marketing",
       "extension":"3125",
    },
];

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        minDimensions: [6, 5],
        worksheetName: 'Employees',
        columns: [
            {
                title: 'Id',
                type: 'autonumber',
                name: 'id',
                readonly: true,
                primaryKey: true,
                width: '80px',
            },
            {
                title: 'Name',
                type: 'text',
                name: 'name',
                width: '140px',
            },
            {
                title: 'Photo',
                type: 'image',
                name: 'img',
                width: '80px',
                render: 'round',
            },
            {
                title: 'Department',
                type: 'text',
                name: 'department',
                width: '180px',
                source: ['Marketing','Accounts','General'],
            },
            {
                title: 'Extension',
                name: 'extension',
                width: '120px'
            },
        ],
    }]
});

document.getElementById("consolelog").onclick = function() { document.getElementById('console').innerHTML = JSON.stringify(data) }
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
const license = '###license###';

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const log = useRef();
    // Data
    const data = [
        {
           "id":1,
           "name":"Jorge",
           "img":"img/nophoto.jpg",
           "department":"Marketing",
           "extension":"3120",
        },
        {
           "id":2,
           "name":"Antonio",
           "img":"img/nophoto.jpg",
           "department":"Marketing",
           "extension":"3121",
        },
        {
           "id":3,
           "name":"Manoel",
           "img":"img/nophoto.jpg",
           "department":"Marketing",
           "extension":"3123",
        },
        {
           "id":4,
           "name":"Pedro",
           "img":"img/nophoto.jpg",
           "department":"Marketing",
           "extension":"3124",
        },
        {
           "id":5,
           "name":"Carlos",
           "img":"img/nophoto.jpg",
           "department":"Marketing",
           "extension":"3125",
        },
    ];

    // Columns
    const columns = [
        {
            title: 'Id',
            type: 'autonumber',
            name: 'id',
            readonly: true,
            primaryKey: true,
            width: '80px',
        },
        {
            title: 'Name',
            type: 'text',
            name: 'name',
            width: '140px',
        },
        {
            title: 'Photo',
            type: 'image',
            name: 'img',
            width: '80px',
            render: 'round',
        },
        {
            title: 'Department',
            type: 'text',
            name: 'department',
            width: '180px',
            source: ['Marketing','Accounts','General'],
        },
        {
            title: 'Extension',
            name: 'extension',
            width: '120px'
        },
    ];

    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} columns={columns} minDimensions={[6,5]} worksheetName={"Employees"} />
            </Spreadsheet>
            <textarea ref={log}></textarea>
            <input type='button' value='Get the content of the data variable'
                onClick={() => log.current.value = JSON.stringify(data)} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :minDimensions="[6,5]" worksheetName="Employees" />
    </Spreadsheet>
    <textarea ref="log"></textarea>
    <input type='button' value='Get the content of the data variable' @click="get" />
</template>

<script>
import { ref } from "vue";
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set the license
const license = '###license###';

// Data
const data = [
    {
        id: 1,
        name: "Jorge",
        img: "img/nophoto.jpg",
        department: "Marketing",
        extension: "3120",
    },
    {
        id: 2,
        name: "Antonio",
        img: "img/nophoto.jpg",
        department: "Marketing",
        extension: "3121",
    },
    {
        id: 3,
        name: "Manoel",
        img: "img/nophoto.jpg",
        department: "Marketing",
        extension: "3123",
    },
    {
        id: 4,
        name: "Pedro",
        img: "img/nophoto.jpg",
        department: "Marketing",
        extension: "3124",
    },
    {
        id: 5,
        name: "Carlos",
        img: "img/nophoto.jpg",
        department: "Marketing",
        extension: "3125",
    }
];

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        get() {
            this.$refs.log.value = JSON.stringify(this.data, null, 2);
        }
    },
    data() {
        const log = ref(null);

        // Columns
        const columns = [
            {
                title: 'Id',
                type: 'autonumber',
                name: 'id',
                readonly: true,
                primaryKey: true,
                width: '80px',
            },
            {
                title: 'Name',
                type: 'text',
                name: 'name',
                width: '140px',
            },
            {
                title: 'Photo',
                type: 'image',
                name: 'img',
                width: '80px',
                render: 'round',
            },
            {
                title: 'Department',
                type: 'text',
                name: 'department',
                width: '180px',
                source: ['Marketing','Accounts','General'],
            },
            {
                title: 'Extension',
                name: 'extension',
                width: '120px'
            },
        ];

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

// Get the data
const data = [
    {
        "id": 1,
        "name": "Jorge",
        "img": "img/nophoto.jpg",
        "department": "Marketing",
        "extension": "3120",
    },
    {
        "id": 2,
        "name": "Antonio",
        "img": "img/nophoto.jpg",
        "department": "Marketing",
        "extension": "3121",
    },
    {
        "id": 3,
        "name": "Manoel",
        "img": "img/nophoto.jpg",
        "department": "Marketing",
        "extension": "3123",
    },
    {
        "id": 4,
        "name": "Pedro",
        "img": "img/nophoto.jpg",
        "department": "Marketing",
        "extension": "3124",
    },
    {
        "id": 5,
        "name": "Carlos",
        "img": "img/nophoto.jpg",
        "department": "Marketing",
        "extension": "3125",
    },
];

@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <textarea #log></textarea>
        <input type='button' value='Get the content of the data variable' (click)="addLog()" />`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("log") log: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    data: any[] = [];

    // Create a new data grid
    ngAfterViewInit() {
        // Data
        this.data = data;
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: data,
                minDimensions: [6, 5],
                worksheetName: 'Employees',
                columns: [
                    {
                        title: 'Id',
                        type: 'autonumber',
                        name: 'id',
                        readonly: true,
                        primaryKey: true,
                        width: '80px',
                    },
                    {
                        title: 'Name',
                        type: 'text',
                        name: 'name',
                        width: '140px',
                    },
                    {
                        title: 'Photo',
                        type: 'image',
                        name: 'img',
                        width: '80px',
                        render: 'round',
                    },
                    {
                        title: 'Department',
                        type: 'text',
                        name: 'department',
                        width: '180px',
                        source: ['Marketing', 'Accounts', 'General'],
                    },
                    {
                        title: 'Extension',
                        name: 'extension',
                        width: '120px'
                    },
                ],
            }]
        });
    }

    addLog() {
        this.log.nativeElement.value = JSON.stringify(this.data)
    }
}
```
 
