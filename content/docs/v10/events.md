title: Spreadsheet Events: Integrations and Feature Customizations
keywords: Jspreadsheet, data grid, javascript, excel-like features, spreadsheet events, events, javascript events, customize user actions, integration events, feature customization, interactive data grid, event-driven programming, data grid customization, event handling
description: Explore a comprehensive summary of spreadsheet events in Jspreadsheet. Learn about specific JavaScript events and the global event dispatcher for enhanced event handling and customization.

# Events

The JSS data grid offers a range of custom events that allow for greater customization of applications. These events can be used in different ways, such as: 

  * The global event dispatcher method;
  * Implementing methods for individual events such as onchange, onclick, etc.;
  * Implementing the onevent method inside a spreadsheet plugin.

 In this section, we provide more details about the first two methods. If you are interested in the events inside plugins, please visit the [plugin's](/docs/plugins) documentation. 

## Documentation

### Specific event handlers

There are several specific event handlers available in Jspreadsheet as shown below:

| Event                    | description                                                                                                                                                                                                                                            |
| -------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onload                   | This method is called when the data in the spreadsheet is ready.<br/>`onload(spreadsheet: Object) => void`                                                                                                                                             |
| onclick                  | When the spreadsheet is clicked. Sections: nested \| header \| row \| cell \| selectall \| tabs \| cloning \| toolbar \| footer<br/>`onclick(worksheet: Object, section: String, x: Number, y: Number, event: Object) => void`                         |
| onundo                   | When undo is applied<br/>`onundo(worksheet: Object, historyRecord: Object) => void`                                                                                                                                                                    |
| onredo                   | When redo is applied<br/>`onredo(worksheet: Object, historyRecord: Object) => void`                                                                                                                                                                    |
| onbeforesave             | Before any data is sent to the backend. Can be used to overwrite the data or to cancel the action when return false.<br/>`onbeforesave(spreadsheet: Object, worksheet: Object, data: Object) => Boolean \| Object`                                     |
| onsave                   | After the data is sent to the server.<br/>`onsave(spreadsheet: Object, worksheet: Object, data: Object) => void`                                                                                                                                       |
| onerror                  | When a new error happens.<br/>`onerror(spreadsheet: Object, result: Object) => void`                                                                                                                                                                   |
| onbeforechange           | Before a column value is changed. NOTE: It is possible to overwrite the original value, by returning a new value on this method. v3.4.0+<br/>`onbeforechange(worksheet: Object, cell: DOMElement, x: Number, y: Number, value: Any) => Boolean \| Any` |
| onchange                 | After a column value is changed.<br/>`onchange(worksheet: Object, cell: DOMElement, x: Number, y: Number, newValue: Any, oldValue: Any) => void`                                                                                                       |
| onafterchanges           | After all changes are applied in the table.<br/>`onafterchanges(worksheet: Object, records: Array)`                                                                                                                                                    |
| oncopy                   | When a copy is performed in the spreadsheet. Any string returned will overwrite the user data or return null to progress with the default behavior.<br/>`oncopy(worksheet: Object, selectedCells: Array, data: String, cut: boolean) => String`        |
| onbeforepaste            | Before the paste action is performed. Can return parsed or filtered data, can cancel the action when return false.<br/>`onbeforepaste(worksheet: Object, data: Array, x: Number, y: Number, properties: Object[]) => boolean \| Array`                 |
| onpaste                  | After a paste action is performed in the spreadsheet.<br/>`onpaste(worksheet: Object, data: Array) => void`                                                                                                                                            |
| onbeforeinsertrow        | Before a new row is inserted. Return false to cancel the user action.<br/>`onbeforeinsertrow(worksheet: Object, rows: Object[]) => Boolean \| Object[] \| void`                                                                                        |
| oninsertrow              | After a new row is inserted.<br/>`oninsertrow(worksheet: Object, rows: Object[]) => void`                                                                                                                                                              |
| onbeforedeleterow        | Before a row is deleted. Return false to cancel the user action.<br/>`onbeforedeleterow(worksheet: Object, rows: Number[]) => Number[] \| Boolean \| void`                                                                                             |
| ondeleterow              | After a row is deleted.<br/>`ondeleterow(worksheet: Object, rows: Number[]) => void`                                                                                                                                                                   |
| onbeforeinsertcolumn     | Before a new column is inserted. Return false to cancel the user action.<br/>`onbeforeinsertcolumn(worksheet: Object, columns: Object[]) => Boolean \| Object[] \| void`                                                                               |
| oninsertcolumn           | After a new column is inserted.<br/>`oninsertcolumn(worksheet: Object, column: Object[]) => void`                                                                                                                                                      |
| onbeforedeletecolumn     | Before a column is excluded. Return false to cancel the user action.<br/>`onbeforedeletecolumn(worksheet: Object, cols: Number[]) => boolean \| Number[] \| void`                                                                                      |
| ondeletecolumn           | After a column is excluded.<br/>`ondeletecolumn(worksheet: Object, cols: Number[]) => void`                                                                                                                                                            |
| onmoverow                | After a row is moved to a new position.<br/>`onmoverow(worksheet: Object, origin: Number, destination: Number) => void;`                                                                                                                               |
| onmovecolumn             | After a column is moved to a new position.<br/>`onmovecolumn(worksheet: Object, origin: Number, destination: Number) => void`                                                                                                                          |
| onresizerow              | After a height change for one or more rows.<br/>`onresizerow(worksheet: Object, row: Mixed, height: Mixed, oldHeight: Mixed) => void`                                                                                                                  |
| onresizecolumn           | After a column width change for one or more columns.<br/>`onresizecolumn(worksheet: Object, column: Mixed, width: Mixed, oldWidth: Mixed) => void`                                                                                                     |
| onbeforeselection        | Before a selection happens.<br/>`onbeforeselection(worksheet: Object, px: Number, py: Number, ux: Number, uy: Number, origin?: Object) => void`                                                                                                        |
| onselection              | When the selection is changed.<br/>`onselection(worksheet: Object, px: Number, py: Number, ux: Number, uy: Number, origin?: Object) => void`                                                                                                           |
| onbeforecomments         | Before a new comment is added or updated. Return false to cancel the event.<br/>`onbeforecomments(worksheet: Object, newValues: Object) => Boolean \| void`                                                                                            |
| oncomments               | After a new comment is added or updated.<br/>`oncomments(worksheet: Object, cells: Object, oldValues: Object) => void`                                                                                                                                 |
| onbeforesort             | It runs before sorting a column. It should return an array with a custom sorting or false to cancel the user action.<br/>`onbeforesort(worksheet: Object, column: Number, direction: Number, newOrderValues: Array) => Any`                            |
| onsort                   | When a column is sorted.<br/>`onsort(worksheet: Object, column: Number, direction: Number, newOrderValues: Array) => void`                                                                                                                             |
| onfocus                  | When the spreadsheet gets the focus.<br/>`onfocus(worksheet: Object) => void`                                                                                                                                                                          |
| onblur                   | When the spreadsheet loses the focus.<br/>`onblur(worksheet: Object) => void`                                                                                                                                                                          |
| onmerge                  | When merge cells is executed.<br/>`onmerge(worksheet: Object, newValue: Object, oldValue: Object) => void`                                                                                                                                             |
| onchangeheader           | When the header title is changed.<br/>`onchangeheader(worksheet: Object, column: Number, newValue: String, oldValue: String) => void`                                                                                                                  |
| onchangefooter           | When the footers are created or updated.<br/>`onchangefooter(worksheet: Object, newValue: [], oldValue: []) => void`                                                                                                                                   |
| onchangefootervalue      | When the value in a cell footer is changed.<br/>`onchangefootervalue(worksheet: Object, x: Number, y: Number, value: String) => void`                                                                                                                  |
| onchangenested           | When updating the nested headers<br/>`onchangenested(worksheet: Object, options: object) => void`                                                                                                                                                      |
| onchangenestedcell       | When updating a nested cell<br/>`onchangenestedcell(worksheet: Object, x: Number, y: Number, properties: Object) => void`                                                                                                                              |
| oncreateeditor           | When an editor is created.<br/>`oncreateeditor(worksheet: Object, cell: DOMElement, x: Number, y: Number, element: DOMElement, options: Object) => void`                                                                                               |
| oneditionstart           | When the editor is opened.<br/>`oneditionstart(worksheet: Object, cell: DOMElement, x: Number, y: Number) => void`                                                                                                                                     |
| oneditionend             | When the editor is closed.<br/>`oneditionend(worksheet: Object, cell: DOMElement, x: Number, y: Number, newValue: Any, save: Boolean) => void`                                                                                                         |
| onchangestyle            | When the style of a cell is changed.<br/>`onchangestyle(worksheet: Object, newValue: Object, oldValue: Object) => void`                                                                                                                                |
| onchangemeta             | When cell meta information is added or updated.<br/>`onchangemeta(worksheet: Object, newValue: Object) => void`                                                                                                                                        |
| onbeforechangepage       | Before the page is changed. Can cancel the action by returning false.<br/>`onbeforechangepage(worksheet: Object, pageNumber: Number, oldPage: Number, quantityPerPage: Number) => Boolean \| void`                                                     |
| onchangepage             | When pagination is enabled and the user changes the page.<br/>`onchangepage(worksheet: Object, pageNumber: Number, oldPageNumber: Number, quantityPerPage: Number) => void`                                                                            |
| onbeforecreateworksheet  | Add or change the options for a new worksheet.<br/>`onbeforecreateworksheet(worksheetOptions: Object, position: Number) => boolean \| Any`                                                                                                             |
| oncreateworksheet        | When the user creates a new worksheet.<br/>`oncreateworksheet(worksheet: Object, worksheetOptions: Object, position: Number) => void`                                                                                                                  |
| onrenameworksheet        | When the user renames a worksheet.<br/>`onrenameworksheet(worksheet: Object, position: Number, newValue: String, oldValue: String) => void`                                                                                                            |
| ondeleteworksheet        | When the user deletes a worksheet.<br/>`ondeleteworksheet(worksheet: Object, position: Number) => void`                                                                                                                                                |
| onmoveworksheet          | When the user updates the worksheet tab position.<br/>`onmoveworksheet(worksheet: Object, from: Number, to: Number) => void`                                                                                                                           |
| onopenworksheet          | When the user opens a worksheet.<br/>`onopenworksheet(worksheet: Object, worksheet: Number) => void`                                                                                                                                                   |
| onchangerowid            | When there is a row id update.<br/>`onchangerowid(worksheet: Object, rows: Array) => void`                                                                                                                                                             |
| onbeforefilter           | Action to be executed before filtering rows. It can cancel the action by returning false.<br/>`onbeforefilter(worksheet: Object, filters: Array, data: Array) => void`                                                                                 |
| onfilter                 | After the filter has been applied to the rows.<br/>`onfilter(worksheet: Object, filters: Array, data: Array) => void`                                                                                                                                  |
| oncreatecell             | When a new cell is created.<br/>`oncreatecell(worksheet: Object, element: HTMLElement, x: Number, y: Number, value: String) => void`                                                                                                                   |
| oncreaterow              | After a new row is inserted.<br/>`oncreaterow(worksheet: Object, rowNumber: Number, tr: HTMLElement) => void`                                                                                                                                          |
| onbeforeformula          | Before executing a formula.<br/>`onbeforeformula(worksheet: Object, expression: String, x: Number, y: Number) => void \| string \| boolean`                                                                                                            |
| onformulachain           | Get the information about the expressions executed from the formula chain.<br/>`onformulachain(worksheet: Object, expressions: Array) => void`                                                                                                         |
| onopenfilter             | Customize the items available when the filter editor is open.<br/>`onopenfilter(worksheet: Object, column: number, options: Array) => options \| void`                                                                                                 |
| onresize                 | Viewport dimensions has changed.<br/>`onresize(worksheet: Object, w: number, h: number) => void`                                                                                                                                                       |
| onchangedefinednames     | When definedNames is updated.<br/>`onchangedefinednames(worksheet: Object, data: []) => void`                                                                                                                                                          |
| oninput                  | New char is entered on editor.<br/>`oninput(worksheet: Object, event: Object) => void`                                                                                                                                                                 |
| onchangerowvisibility    | When the visibility of rows changes.<br/>`onchangerowvisibility(worksheet: Object, state: boolean: affected: []]) => void`                                                                                                                             |
| onchangecolumnvisibility | When the visibility of cols changes.<br/>`onchangecolumnvisibility(worksheet: Object, state: boolean: affected: []]) => void`                                                                                                                          |
| onsearchstart            | It happens before all the search events.<br/>`onsearchstart(worksheet: Object, terms: String)`                                                                                                                                                         |
| onsearchrow              | It helps to customize the searching process.<br/>`onsearchrow(worksheet: Object, rowNumber: number, terms: String)`                                                                                                                                    |
| onbeforesearch           | Action to be executed before the search. It can be used to cancel or to intercept and customize the search process.<br/>`onbeforesearch(worksheet: Object, terms: String, results: Array, search: Object)`                                             |
| onsearch                 | After the search process is completed.<br/>`onbeforesearch(worksheet: Object, terms: String, rowNumber: Array, search: Object)`                                                                                                                        |
| oncreatecolumn           | When a new column is created.<br/>`oncreatecolumn(worksheet: Object, columnNumber: number, td: HTMLElement, options: Object)`                                                                                                                          |
| oncreaterow              | After a new row is inserted.<br/>`oncreaterow(worksheet: Object, rowNumber: Number, tr: HTMLElement)`                                                                                                                                                  |
| ongrouprow               | When the user creates a group of rows<br/>`oncreaterowgroup?: (worksheet: object, row: number, elements: number\|undefined) => void`                                                                                                                   |
| onopenrowgroup           | When the user opens a group of rows<br/>`onopenrowgroup?: (worksheet: object, row: number) => void`                                                                                                                                                    |
| oncloserowgroup          | When the user closes a group of rows<br/>`oncloserowgroup?: (worksheet: object, row: number) => void`                                                                                                                                                  |
| ongroupcolumn            | When the user creates a group of columns<br/>`oncreatecolumngroup?: (worksheet: Object, column: Number, elements: Number\|undefined) => void`                                                                                                          |
| onopencolumngroup        | When the user opens a group of columns<br/>`onopencolumngroup?: (worksheet: Object, column: Number) => void`                                                                                                                                           |
| onclosecolumnroup        | When the user closes a group of columns<br/>`onclosecolumnroup?: (worksheet: object, Object: Number) => void`                                                                                                                                          |

 

### Special events

| Event       | description                                                                                                                                                                                                            |
| ------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onevent     | General method to handler any event. The number of arguments depends on each event.<br/>`onevent(worksheet: Object, method: Object, a?: any, b?: any, c?: any, d?: any, e?: any, f?: any) => any`                      |
| contextmenu | Return false to cancel the contextMenu event, or return custom elements for the contextmenu.<br/>`contextMenu(worksheet: Object, x: Number, y: Number, e: Object, items: [], section: String, a1: Any, a2: Any) => []` |

 

### The global event handler

The `onevent` is a global and centralized method that handles all events. It's essential to note that the number of arguments required will depend on the specific event that has been triggered. NOTE: You can see events in the browser console. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000],
            ['Peugeot', 2010, 5000],
            ['Honda Fit', 2009, 3000],
            ['Honda CRV', 2010, 6000],
        ],
        columns:[
            { title:'Model', width:'300px' },
            { title:'Year', width:'80px' },
            { title:'Price', width:'100px' },
        ],
    }],
    onevent: function(event,a,b,c,d,e,f) {
        console.log(event,a,b,c,d,e,f);
    }
});
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
        ['Mazda', 2001, 2000],
        ['Peugeot', 2010, 5000],
        ['Honda Fit', 2009, 3000],
        ['Honda CRV', 2010, 6000],
    ];
    const columns = [
        {title: 'Model', width: '300px'},
        {title: 'Year', width: '80px'},
        {title: 'Price', width: '100px'},
    ];

    // Event handler
    const onevent = (event, a, b, c, d, e, f) => {
        console.log(event, a, b, c, d, e, f);
    };

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} onevent={onevent}>
            <Worksheet data={data} columns={columns}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onevent="onevent">
        <Worksheet :data="data" :columns="columns" />
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
        // Event handler
        onevent (event,a,b,c,d,e,f) {
            console.log(event,a,b,c,d,e,f);
        };
    },
    data() {
        // Data
        const data = [
            ['Mazda', 2001, 2000],
            ['Peugeot', 2010, 5000],
            ['Honda Fit', 2009, 3000],
            ['Honda CRV', 2010, 6000],
        ];
        const columns = [
            { title:'Model', width:'300px' },
            { title:'Year', width:'80px' },
            { title:'Price', width:'100px' },
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

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
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
                    ['Mazda', 2001, 2000],
                    ['Peugeot', 2010, 5000],
                    ['Honda Fit', 2009, 3000],
                    ['Honda CRV', 2010, 6000],
                ],
                columns:[
                    { title:'Model', width:'300px' },
                    { title:'Year', width:'80px' },
                    { title:'Price', width:'100px' },
                ],
            }],
            onevent: function(event,a,b,c,d,e,f) {
                console.log(event,a,b,c,d,e,f);
            }
        });
    }
}
```
 

 

### The event dispatcher

If you are building a custom plugin or extension, you might want to create your own events. 
