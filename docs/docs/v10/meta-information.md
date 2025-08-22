title: Hidden Meta Data in Jspreadsheet Cells
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, excel-like features, spreadsheet meta information, cell meta information, hidden metadata in cells, hidden data in Jspreadsheet, data grid meta information, cell metadata management, managing hidden metadata, storing additional information in cells, Jspreadsheet cell properties, cell meta information methods, data grid customization
description: Discover how meta information in Jspreadsheet allows you to store hidden data about cells, enabling advanced data management and customization within your data grid.

# Data Grid Cell Meta Information

This feature allows for keeping hidden metadata about cells without an interface for defining the information. It must be done programmatically. 

## Documentation

### Methods

Methods related to managing the spreadsheet meta information.

| Method    | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getMeta   | Get the meta information from a cell or from the whole spreadsheet. <br/>@Param mixed - cell identification or null for the whole table. <br/>`getMeta(cellName: String \| null)`                                                                                                                                                                                                                                       |
| setMeta   | Set the meta information for a single cell by name or for multiple cells. <br/>@param {string\|Object} - Identification of a cell or an array of objects with multiple cell meta information. <br/>@param {string=} k - the key string to identify the meta information. <br/>@param {string=} v - the value string with the meta information. <br/>`setMeta(cellName: String \| Object[], key: String, value: String)` |
| resetMeta | Reset the meta information in a batch or reset all the meta information for all cells. <br/>@param {string[]?} - List of cell names <br/>`resetMeta(cellName: String[])`                                                                                                                                                                                                                                                |

 

### Events

| Event        | Description                                                |
| -------------|------------------------------------------------------------|
| onchangemeta | `onchangemeta(worksheet: Object, newValue: Object) : void` |

 

### Initial Settings

The `meta` property defines the meta information for the data grid cells.

| Property     | Description               |
| -------------|---------------------------|
| meta: Object | Initial meta information. |

 

## Examples

Basic example using the native meta information methods. 

 You can interact with any meta information using the `getMeta` and `setMeta` methods, either during initialization or programmatically. Set meta data for multiple cells Set a meta information for B2 Reset the meta information for A1, B2, C2 Get the meta information for A1 Get all meta information    

[Data Grid Meta Information](https://jsfiddle.net/spreadsheet/vauo24ws/) working example on JSFiddle. 





```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>
<textarea id='console' style='width:100%;height:80px;'></textarea>

<input type="button" id="setmetamulti" value="Set meta data for multiple columns"/><br/><br/>
<input type="button" id="setmetab2" value="Set a meta information for B2"/><br/><br/>
<input type="button" id="resetmeta" value="Reset the meta information for A1, B2, C2"/><br/><br/>
<input type="button" id="getmetaa1" value="Get the meta information for A1"/><br/><br/>
<input type="button" id="getallmeta" value="Get all meta information"/><br/><br/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Apples', 'Yes', '2019-02-12'],
            ['CA;US;UK', 'Carrots', 'Yes', '2019-03-01'],
            ['CA;BR', 'Oranges', 'No', '2018-11-10'],
            ['BR', 'Coconuts', 'Yes', '2019-01-12'],
        ],
        columns: [
            {
                type: 'dropdown',
                title: 'Product Origin',
                width: '300px',
                url: '/jspreadsheet/countries',
                autocomplete: true,
                multiple: true
            },
            { type: 'text', title: 'Description', width: '200px' },
            { type: 'dropdown', title: 'Stock', width: '100px', source: ['No','Yes'] },
            { type: 'calendar', title: 'Best before', width: '100px' },
        ],
        meta:{
            A1: { myMeta: 'this is just a test', otherMetaInformation: 'other test' },
            A2: { info: 'test' }
        },
    }]
});

document.getElementById("setmetamulti").onclick = () => table[0].setMeta({ C1: { id:'1', y:'2019' }, C2: { id:'2' } });
document.getElementById("setmetab2").onclick = () => table[0].setMeta('B2', 'myMetaData', prompt('myMetaData:'));
document.getElementById("resetmeta").onclick = () => table[0].resetMeta(['A1','B2','C2'])
document.getElementById("getmetaa1").onclick = () => document.getElementById('console').value = JSON.stringify(table[0].getMeta('A1'));
document.getElementById("getallmeta").onclick = () => document.getElementById('console').value  = JSON.stringify(table[0].getMeta());
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const console = useRef();
    // Data
    const data = [
        ['US', 'Apples', 'Yes', '2019-02-12'],
        ['CA;US;UK', 'Carrots', 'Yes', '2019-03-01'],
        ['CA;BR', 'Oranges', 'No', '2018-11-10'],
        ['BR', 'Coconuts', 'Yes', '2019-01-12'],
    ];
    // Columns
    const columns = [
        {
            type: 'dropdown',
            title: 'Product Origin',
            width: '300px',
            url: '/jspreadsheet/countries',
            autocomplete: true,
            multiple: true
        },
        {type: 'text', title: 'Description', width: '200px'},
        {type: 'dropdown', title: 'Stock', width: '100px', source: ['No', 'Yes']},
        {type: 'calendar', title: 'Best before', width: '100px'},
    ];
    // Meta information
    const meta = {
        A1: {myMeta: 'this is just a test', otherMetaInformation: 'other test'},
        A2: {info: 'test'}
    }

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} columns={columns} meta={meta}/>
            </Spreadsheet>
            <textarea ref={console} style={{width: '100%', height: '80px'}}></textarea>
            <button type="button" value="Set meta data for multiple columns"
                    onClick={() => spreadsheet.current[0].setMeta({C1: {id: '1', y: '2019'}, C2: {id: '2'}})}/>
            <button type="button" value="Set a meta information for B2"
                    onClick={() => spreadsheet.current[0].setMeta('B2', 'myMetaData', prompt('myMetaData:'))}/>
            <button type="button" value="Reset the meta information for A1, B2, C2"
                    onClick={() => spreadsheet.current[0].resetMeta(['A1', 'B2', 'C2'])}/>
            <button type="button" value="Get the meta information for A1"
                    onClick={() => console.current.value = JSON.stringify(spreadsheet.current[0].getMeta('A1'))}/>
            <button type="button" value="Get all meta information"
                    onClick={() => console.current.value = JSON.stringify(spreadsheet.current[0].getMeta())}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :meta="meta" />
    </Spreadsheet>
    <textarea ref="log" style='width:100%;height:80px;'></textarea>
    <button type="button" value="Set meta data for multiple columns"
        @click="this.$refs.spreadsheet.current[0].setMeta({ C1: { id:'1', y:'2019' }, C2: { id:'2' } })" />
    <button type="button" value="Set a meta information for B2"
        @click="this.$refs.spreadsheet.current[0].setMeta('B2', 'myMetaData', prompt('myMetaData:'))" />
    <button type="button" value="Reset the meta information for A1, B2, C2"
        @click="this.$refs.spreadsheet.current[0].resetMeta(['A1','B2','C2'])" />
    <button type="button" value="Get the meta information for A1"
        @click="this.$refs.console.value.value = JSON.stringify(this.$refs.spreadsheet.current[0].getMeta('A1'))" />
    <button type="button" value="Get all meta information"
        @click="this.$refs.console.value.value = JSON.stringify(this.$refs.spreadsheet.current[0].getMeta())" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['US', 'Apples', 'Yes', '2019-02-12'],
            ['CA;US;UK', 'Carrots', 'Yes', '2019-03-01'],
            ['CA;BR', 'Oranges', 'No', '2018-11-10'],
            ['BR', 'Coconuts', 'Yes', '2019-01-12'],
        ];
        // Columns
        const columns = [
            {
                type: 'dropdown',
                title: 'Product Origin',
                width: '300px',
                url: '/jspreadsheet/countries',
                autocomplete: true,
                multiple: true
            },
            { type: 'text', title: 'Description', width: '200px' },
            { type: 'dropdown', title: 'Stock', width: '100px', source: ['No','Yes'] },
            { type: 'calendar', title: 'Best before', width: '100px' },
        ];
        // Meta information
        const meta = {
            A1: { myMeta: 'this is just a test', otherMetaInformation: 'other test' },
            A2: { info: 'test' }
        }

        return {
            data,
            columns,
            meta,
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
import jSuites from "jSuites";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <textarea #console style='width:100%;height:80px;'></textarea>
        <button type="button" onclick="this.worksheets[0].setMeta({ C1: { id:'1', y:'2019' }, C2: { id:'2' } });">
        Set meta data for multiple columns
        </button>
        <button type="button" onclick="this.worksheets[0].setMeta('B2', 'myMetaData', prompt('myMetaData:'));">
        Set a meta information for B2
        </button>
        <button type="button" onclick="this.worksheets[0].resetMeta(['A1','B2','C2'])">
        Reset the meta information for A1, B2, C2
        </button>
        <button type="button" onclick="this.log.nativeElement.value = JSON.stringify(this.worksheets[0].getMeta('A1'));">
        Get the meta information for A1
        </button>
        <button type="button" onclick="this.log.nativeElement.value  = JSON.stringify(this.worksheets[0].getMeta());">
        Get all meta information
        </button>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("log") log: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ['US', 'Apples', 'Yes', '2019-02-12'],
                    ['CA;US;UK', 'Carrots', 'Yes', '2019-03-01'],
                    ['CA;BR', 'Oranges', 'No', '2018-11-10'],
                    ['BR', 'Coconuts', 'Yes', '2019-01-12'],
                ],
                columns: [
                    {
                        type: 'dropdown',
                        title: 'Product Origin',
                        width: '300px',
                        url: '/jspreadsheet/countries',
                        autocomplete: true,
                        multiple: true
                    },
                    { type: 'text', title: 'Description', width: '200px' },
                    { type: 'dropdown', title: 'Stock', width: '100px', source: ['No','Yes'] },
                    { type: 'calendar', title: 'Best before', width: '100px' },
                ],
                meta:{
                    A1: { myMeta: 'this is just a test', otherMetaInformation: 'other test' },
                    A2: { info: 'test' }
                },
            }]
        });
    }
}
```
 

 

## Releases notes

### Differences from version 9

 

| **getMeta** | The method getMethod accepts one argument. The second argument is deprecated |
| ------------|------------------------------------------------------------------------------|


