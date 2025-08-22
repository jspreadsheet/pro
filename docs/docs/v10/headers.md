title: Spreadsheet Headers: All About Column Titles
keywords: Jspreadsheet, Jexcel, data grids, JavaScript data grid, excel-like headers, column title, headers, data grid headers, column headers, customize headers, modify headers, spreadsheet customization, column title customization, data grid organization
description: Customize and modify column titles in your online data grids. Personalize headers and organize your data grid effectively. Learn more about programmatically changing headers and other customization options.

# Spreadsheet Headers

This section provides instructions for creating custom headers in spreadsheets and modifying them programmatically. The user can alter the header titles using the context menu or perform a long click on one of the headers. 

## Documentation

### Methods

You can update the headers programmatically using the following methods.

| Method      | Description                                                                                                                                                                                                  |
| ------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getHeaders  | Get all headers as an Array of strings or a string separated by commas. <br/>@param {mixed} - get all headers a string or as an Array. <br/>`getHeader(getAsArray: Boolean) : void`                          |
| showHeaders | Show the headers <br/>`showHeaders() : void`                                                                                                                                                                 |
| hideHeaders | Hide the headers <br/>`hideHeaders() : void`                                                                                                                                                                 |
| getHeader   | Get the header title by column number. <br/>@param {mixed} - get the header title by column number starting on zero. <br/>`getHeader(column: Number) : void`                                                 |
| setHeader   | Set a custom header title. <br/>@param {number} - column number starting on zero <br/>@param {string} - New title. Empty to reset the headers. <br/>`setHeader(colNumber: Number, newValue?: String) : void` |

 

### Initial Settings

To customize the headers, you can use the title and tooltip attributes in the column settings. 

{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        columns: [
            {
                type: 'text',
                title: 'Country',
                tooltip: 'This is the country',
                width: '300px',
            }
        ]
    }]
});
</script>
```
  

### Available Events

| Event          | Description                                                                                                                        |
| ---------------|------------------------------------------------------------------------------------------------------------------------------------|
| onchangeheader | When changing the header title.<br/>`onchangeheader(worksheet: Object, column: Number, newValue: String, oldValue: String) : void` |

 

## Examples

### Updates to the headers

The following example starts the spreadsheet with basic headers with the option to update the titles programmatically. 

Change the headers programmatically

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['BR', 'Cheese', 1],
            ['CA', 'Apples', 0],
            ['US', 'Carrots', 1],
            ['GB', 'Oranges', 0],
        ],
        columns: [
            {
                type: 'autocomplete',
                title: 'Country',
                tooltip: 'Country of origin',
                width: '200px',
                url: '/jspreadsheet/countries'
            },
            {
                type: 'dropdown',
                title: 'Food',
                tooltip: 'Category of food',
                width: '100px',
                source: ['Apples','Bananas','Carrots','Oranges','Cheese']
            },
            {
                type: 'checkbox',
                title: 'Stock',
                tooltip: 'Quantity on stock',
                width: '100px'
            },
            {
                type: 'number',
                title: 'Price',
                tooltip: 'Retail pricing',
                width: '100px'
            },
        ],
    }]
});

document.getElementById("setbtn").onclick = () => table[0].setHeader(document.getElementById('col').value)
document.getElementById("getbtn").onclick = () => alert(table[0].getHeader(document.getElementById('col').value))
</script>

<br/><select id='col'>
    <option value="0">Column 0</option>
    <option value="1">Column 1</option>
    <option value="2">Column 2</option>
    <option value="3">Column 3</option>
</select>

<input type='button' value='Set' id="setbtn"/>
<input type='button' value='Get' id="getbtn"/>

</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const select = useRef();
    // Data
    const data = [
        ['BR', 'Cheese', 1],
        ['CA', 'Apples', 0],
        ['US', 'Carrots', 1],
        ['GB', 'Oranges', 0],
    ]
    // Columns settings
    const columns = [
        {
            type: 'autocomplete',
            title: 'Country',
            tooltip: 'Country of origin',
            width: '200px',
            url: '/jspreadsheet/countries'
        },
        {
            type: 'dropdown',
            title: 'Food',
            tooltip: 'Category of food',
            width: '100px',
            source: ['Apples', 'Bananas', 'Carrots', 'Oranges', 'Cheese']
        },
        {
            type: 'checkbox',
            title: 'Stock',
            tooltip: 'Quantity on stock',
            width: '100px'
        },
        {
            type: 'number',
            title: 'Price',
            tooltip: 'Retail pricing',
            width: '100px'
        }
    ];

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} columns={columns}/>
            </Spreadsheet>
            <select ref={select}>
                <option value="0">Column 0</option>
                <option value="1">Column 1</option>
                <option value="2">Column 2</option>
                <option value="3">Column 3</option>
            </select>
            <input type='button' value='Set'
                   onClick={() => spreadsheet.current[0].setHeader(select.current.value)}/>
            <input type='button' value='Get'
                   onClick={() => spreadsheet.current[0].getHeader(select.current.value)}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
    <select ref="select">
    <option value="0">Column 0</option>
    <option value="1">Column 1</option>
    <option value="2">Column 2</option>
    <option value="3">Column 3</option>
    </select>
    <input type='button' value='Set'
        @click="this.$refs.spreadsheet.current[0].setHeader(select.current.value)" />
    <input type='button' value='Get'
        @click="this.$refs.spreadsheet.current[0].getHeader(select.current.value)" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";

const license = '###license###';

// Data
let data = [];
for (let j = 0; j < 50; j++) {
    data[j] = [];
    for (let i = 0; i < 50; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['BR', 'Cheese', 1],
            ['CA', 'Apples', 0],
            ['US', 'Carrots', 1],
            ['GB', 'Oranges', 0],
        ]
        // Columns settings
        const columns = [
            {
                type: 'autocomplete',
                title: 'Country',
                tooltip: 'Country of origin',
                width: '200px',
                url: '/jspreadsheet/countries'
            },
            {
                type: 'dropdown',
                title: 'Food',
                tooltip: 'Category of food',
                width: '100px',
                source: [ 'Apples','Bananas','Carrots','Oranges','Cheese' ]
            },
            {
                type: 'checkbox',
                title: 'Stock',
                tooltip: 'Quantity on stock',
                width: '100px'
            },
            {
                type: 'number',
                title: 'Price',
                tooltip: 'Retail pricing',
                width: '100px'
            }
        ];

        return {
            data,
            options,
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

// Data
let data = [];
for (let j = 0; j < 50; j++) {
    data[j] = [];
    for (let i = 0; i < 50; i++) {
        data[j][i] = jspreadsheet.helpers.getColumnNameFromCoords(i, j);
    }
}

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <select #col>
        <option value="0">Column 0</option>
        <option value="1">Column 1</option>
        <option value="2">Column 2</option>
        <option value="3">Column 3</option>
        </select>
        <input type='button' value='Set' (click)="this.worksheets[0].setHeader(this.col.nativeElement.value)" />
        <input type='button' value='Get' (click)="this.worksheets[0].getHeader(this.col.nativeElement.value)" />`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("col") col: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ['BR', 'Cheese', 1],
                    ['CA', 'Apples', 0],
                    ['US', 'Carrots', 1],
                    ['GB', 'Oranges', 0],
                ],
                columns: [
                    {
                        type: 'autocomplete',
                        title: 'Country',
                        tooltip: 'Country of origin',
                        width: '200px',
                        url: '/jspreadsheet/countries'
                    },
                    {
                        type: 'dropdown',
                        title: 'Food',
                        tooltip: 'Category of food',
                        width: '100px',
                        source: ['Apples','Bananas','Carrots','Oranges','Cheese']
                    },
                    {
                        type: 'checkbox',
                        title: 'Stock',
                        tooltip: 'Quantity on stock',
                        width: '100px'
                    },
                    {
                        type: 'number',
                        title: 'Price',
                        tooltip: 'Retail pricing',
                        width: '100px'
                    },
                ],
            }]
        });
    }
}
```
 
