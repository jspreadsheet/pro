title: Managing Rows: Methods, Events, and Settings
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, excel-like rows, spreadsheet rows, data table rows, row management, add rows, delete rows, move rows, row manipulation, row events, row settings, row documentation
description: Explore row management in Jspreadsheet, including adding, deleting, and moving rows and customizing their settings. Discover the methods, events, and settings that enable you to create dynamic customizations and integrations in your data grid application.

# Rows

This section covers all information about row management. 

> **Upgrades on methods and event function signatures**  If you are migrating from previous versions, it is essential to note that there are significant changes to the rows events and methods, including changes their function signatures. 

## Documentation

### Methods

The following methods interact with the rows programmatically.

| Method    | Description                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getHeight | Get the row height.<br/>`getHeight(rowNumber?: Number) => number`                                                                                                                                                                                                                                                                                                                                                                    |
| setHeight | Set the row height.<br/>`setHeight(rowNumber: Number, height: Number) => void`                                                                                                                                                                                                                                                                                                                                                       |
| getRow    | Get the row settings by number.<br/>`getRow(rowNumber: Number) => Object`                                                                                                                                                                                                                                                                                                                                                            |
| moveRow   | Change the position of a row.<br/>`moveRow(rowNumber: Number, newPositionNumber: Number) => void`                                                                                                                                                                                                                                                                                                                                    |
| insertRow | Create one or multiple new rows. <br/>@param {number\|number[]} - number of rows or rows definitions. <br/>@param {number?} rowNumber - The new row reference position \| null refers to the last row in the spreadsheet <br/>@param {boolean?} insertBefore - The new row(s) should be included before or after the rowNumber defined <br/>`insertRow(rows?: Number\|Object[], rowNumber?: Number, insertBefore?: Boolean) => void` |
| deleteRow | Delete one or more rows. <br/>@param {number\|number[]} rowNumber - Row number or list of row numbers to delete. <br/>@param {number} numOfRows - Number of rows to be excluded from the define row reference <br/>`deleteRow(rowNumber: Number\|Number[], numOfRows?: Number) => void;`                                                                                                                                             |
| showRow   | Show a row by number. <br/>@param {number} rowNumber - Show the row by its number <br/>`showRow(rowNumber: Number) => void`                                                                                                                                                                                                                                                                                                          |
| hideRow   | Hide a row by number. <br/>@param {number} rowNumber - Hide the row by its number <br/>`hideRow(rowNumber: Number) => void`                                                                                                                                                                                                                                                                                                          |

 

### Events

There are several events related to the row in your spreadsheet. There are a few <b>onbefore</b> events to intercept, validate or cancel a user action.

| Event                 | Description                                                                                                                                                     |
| ----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| oncreaterow           | After a new row is inserted.<br/>`oncreaterow(worksheet: Object, rowNumber: Number, tr: HTMLElement)`                                                           |
| onbeforeinsertrow     | Before a new row is inserted. Return false to cancel the user action.<br/>`onbeforeinsertrow(worksheet: Object, rows: Object[]) => Boolean \| Object[] \| void` |
| oninsertrow           | After a new row is inserted.<br/>`oninsertrow(worksheet: Object, rows: Object[]) => void`                                                                       |
| onbeforedeleterow     | Before a row is deleted. Return false to cancel the user action.<br/>`onbeforedeleterow(worksheet: Object, rows: Number[]) => Number[] \| Boolean \| void`      |
| ondeleterow           | After a row is deleted.<br/>`ondeleterow(worksheet: Object, rows: Number[]) => void`                                                                            |
| onmoverow             | After a row is moved to a new position.<br/>`onmoverow(worksheet: Object, origin: Number, destination: Number) => void`                                         |
| onresizerow           | After the height changes for one or more rows.<br/>`onresizerow(worksheet: Object, row: Mixed, height: Mixed, oldHeight: Mixed) => void`                        |
| onchangerowvisibility | When the visibility of rows changes.<br/>`onchangerowvisibility(worksheet: Object, state: boolean: affected: []]) => void`                                      |

 

### Initial Settings

The following row-related properties are available through the spreadsheet initialization.

| Property                      | Description                                                                                              |
| ------------------------------|----------------------------------------------------------------------------------------------------------|
| allowInsertRow: boolean       | Enable the user to enter new rows. `Default: true`                                                       |
| allowManualInsertRow: boolean | A new row is automatically inserted when the user presses the enter key in the last row. `Default: true` |
| allowDeleteRow: boolean       | Allow the user to delete rows. `Default: true`                                                           |
| rowDrag: boolean              | Allow the user to change the position of one row by dragging and dropping. `Default: true`               |
| rowResize: boolean            | Allow the user to resize rows. `Default: true`                                                           |
| defaultRowHeight: number      | The default row height.                                                                                  |
| minSpareRows: number          | The mandatory number of blank rows at the end of the spreadsheet. `Default: none.`                       |

 

### Available properties

It is possible to initialize the spreadsheet with a custom id, text and height using the following properties:

| Property          | Description                                                                                  |
| ------------------|----------------------------------------------------------------------------------------------|
| id: number        | Unique identifier for the row, which can be used to synchronize the content with a database. |
| height: number    | The height of the row in pixels.                                                             |
| title: string     | The title or name of the row.                                                                |
| visible: boolean  | Determines whether the row is visible or not.                                                |
| ~~style: string~~ | Deprecated. Style to TR elements should be added using oncreaterow.                          |
| group: number     | The number of rows that this row is grouped with.                                            |
| state: boolean    | The state of the row group (collapsed or expanded).                                          |
| readOnly: boolean | Determines whether the row is read-only or not.                                              |

 

## Examples

A basic spreadsheet with a few programmatic methods available. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<ol class='example' style='cursor:pointer;'>
    <li><a id="insertblankbtn">Click to insert a new blank row at the end of the spreadsheet</a></li>
    <li><a id="inserttwobtn">Click to insert two new blank rows at the beginning of the spreadsheet</a></li>
    <li><a id="insertprepopbtn">Click to insert a new row with pre-populated values at the end of the spreadsheet</a></li>
    <li><a id="deletelastbtn">Click to delete the last row</a></li>
    <li><a id="movefirstbtn">Click to move the first row to the third position</a></li>
    <li><a id="hidefirstbtn">Hide the first row</a></li>
    <li><a id="showfirstbtn">Show the first row</a></li>
</ol>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Cheese', 1000 ],
            ['CA', 'Apples', 1200 ],
            ['CA', 'Carrots', 2000 ],
            ['BR', 'Oranges', 3800 ],
        ],
        worksheetName: 'Row management',
    }],
});

document.getElementById("insertblankbtn").onclick = () => spreadsheet[0].insertRow();
document.getElementById("inserttwobtn").onclick = () => spreadsheet[0].insertRow(2, 0, 1);
document.getElementById("insertprepopbtn").onclick = () => spreadsheet[0].insertRow([{ data: ['0.99', '1.22', '3.11', '2.21' ]}]);
document.getElementById("deletelastbtn").onclick = () => spreadsheet[0].deleteRow();
document.getElementById("movefirstbtn").onclick = () => spreadsheet[0].moveRow(0, 2);
document.getElementById("hidefirstbtn").onclick = () => spreadsheet[0].hideRow(0);
document.getElementById("showfirstbtn").onclick = () => spreadsheet[0].showRow(0);
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
    // Data
    const data = [
        ['US', 'Cheese', 1000],
        ['CA', 'Apples', 1200],
        ['CA', 'Carrots', 2000],
        ['BR', 'Oranges', 3800],
    ];
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet minDimensions={[6, 6]} worksheetName="Row management"/>
            </Spreadsheet>
            <ol class='example' style={{cursor: 'pointer'}}>
                <li><a onClick={() => spreadsheet.current[0].insertRow()}>
                    Click to insert a new blank row at the end of the spreadsheet
                </a></li>
                <li><a onClick={() => spreadsheet.current[0].insertRow(2, 0, 1)}>
                    Click to insert two new blank rows at the beginning of the spreadsheet
                </a></li>
                <li><a onClick={() => spreadsheet.current[0].insertRow([{data: ['0.99', '1.22', '3.11', '2.21']}])}>
                    Click to insert a new row with pre-populated values at the end of the spreadsheet
                </a></li>
                <li><a onClick={() => spreadsheet.current[0].deleteRow()}>
                    Click to delete the last row
                </a></li>
                <li><a onClick={() => spreadsheet.current[0].moveRow(0, 2)}>
                    Click to move the first row to the third position
                </a></li>
                <li><a onClick={() => spreadsheet.current[0].hideRow(0)}>
                    Hide the first row
                </a></li>
                <li><a onClick={() => spreadsheet.current[0].showRow(0)}>
                    Show the first row
                </a></li>
            </ol>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" />
    </Spreadsheet>
    <ol class='example' style='cursor:pointer;'>
        <li><a @click="this.$refs.spreadsheet.current[0].insertRow()">
            Click to insert a new blank row at the end of the spreadsheet
        </a></li>
        <li><a @click="this.$refs.spreadsheet.current[0].insertRow(2, 0, 1)">
            Click to insert two new blank rows at the beginning of the spreadsheet
        </a></li>
        <li><a @click="this.$refs.spreadsheet.current[0].insertRow([{ data: [ '0.99', '1.22', '3.11', '2.21' ]}])">
            Click to insert a new row with pre-populated values at the end of the spreadsheet
        </a></li>
        <li><a @click="this.$refs.spreadsheet.current[0].deleteRow()">
            Click to delete the last row
        </a></li>
        <li><a @click="this.$refs.spreadsheet.current[0].moveRow(0, 2)">
            Click to move the first row to the third position
        </a></li>
        <li><a @click="this.$refs.spreadsheet.current[0].hideRow(0)">
            Hide the first row
        </a></li>
        <li><a @click="this.$refs.spreadsheet.current[0].showRow(0)">
            Show the first row
        </a></li>
    </ol>
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
            ['US', 'Cheese', 1000 ],
            ['CA', 'Apples', 1200 ],
            ['CA', 'Carrots', 2000 ],
            ['BR', 'Oranges', 3800 ],
        ];
        return {
            data,
            license: license,
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

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <ol class='example' style='cursor:pointer;'>
            <li><a (click)="this.worksheets[0].insertRow()">
                Click to insert a new blank row at the end of the spreadsheet
            </a></li>
            <li><a (click)="this.worksheets[0].insertRow(2, 0, 1)">
                Click to insert two new blank rows at the beginning of the spreadsheet
            </a></li>
            <li><a (click)="this.worksheets[0].insertRow([{ data: [ '0.99', '1.22', '3.11', '2.21' ]}])">
                Click to insert a new row with pre-populated values at the end of the spreadsheet
            </a></li>
            <li><a (click)="this.worksheets[0].deleteRow()">
                Click to delete the last row
            </a></li>
            <li><a (click)="this.worksheets[0].moveRow(0, 2)">
                Click to move the first row to the third position
            </a></li>
            <li><a (click)="this.worksheets[0].hideRow(0)">
                Hide the first row
            </a></li>
            <li><a (click)="this.worksheets[0].showRow(0)">
                Show the first row
            </a></li>
        </ol>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            data: [
                ['US', 'Cheese', 1000 ],
                ['CA', 'Apples', 1200 ],
                ['CA', 'Carrots', 2000 ],
                ['BR', 'Oranges', 3800 ],
            ],
            worksheetName: 'Row management',
        });
    }
}
```
 

 

### Intercept a new row action

The following example demonstrates the usage of the `onbeforeinsertrow` event to modify the configuration of a newly created rows by including default data in each new row. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>
<br/><button id="insertrow">Click to insert a new blank row at the end of the spreadsheet</button>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
    }],
    onbeforeinsertrow: function(worksheet, rows) {
        console.log('Intercepting row insertion and adding some data in it...')
        return rows.map(function(v) {
            return { ...v, data:[1,2,3] }
        });
    }
});

document.getElementById("insertrow").onclick = () => spreadsheet[0].insertRow();
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Adding a new column event
    const onbeforeinsertrow = (worksheet, rows) => {
        return rows.map(function(v) {
            return { ...v, data:[1,2,3] }
        });
    };
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} onbeforeinsertrow={onbeforeinsertrow}>
            <Worksheet minDimensions={[4,4]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onbeforeinsertrow="onbeforeinsertrow">
        <Worksheet :minDimensions="[4,4]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        // Adding a new column event
        onbeforeinsertrow(worksheet, rows) {
            return rows.map(function(v) {
                return { ...v, data:[1,2,3] }
            });
        };
    },
    data() {
        return {
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

// Create component
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
                minDimensions: [4,4],
            }],
            onbeforeinsertrow: function(worksheet, rows) {
                return rows.map(function(v) {
                    return { ...v, data:[1,2,3] }
                });
            }
        });
    }
}
```
 
