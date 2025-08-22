title: Spreadsheet Events
keywords: Jspreadsheet, data grid, javascript, excel-like, spreadsheet, documentation, events, javascript events.
description: This section brings a summary of all spreadsheet events. Also, learn more about the specific JS events and the global event dispatcher.



# Events

JavaScript events are the perfect way to integrate the spreadsheet with your applications. There are three ways to handler those events, such as: 

  * The global data grid event dispatcher method;
  * Implementing methods for individual events such as onchange, onclick, etc;
  * Implementing the onevent method inside a spreadsheet plugin.

In this section, we provide more details about the first two methods. If you are interested in the events inside plugins, please visit the [plugin's](/docs/v8/plugins) documentation.  

## Specific Event Handlers

There are several specific event handlers available in Jspreadsheet as shown below:

| Event                   | description                                                                                                                                                                                                                                                                                                                                 |
| ------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onload                  | `onload(spreadsheet: Object) => void`<br/>This method is called when the data in the spreadsheet is ready.                                                                                                                                                                                                                                  |
| onclick                 | `onclick(worksheet: Object, section: String, x: Number, y: Number) => void`<br/>When the spreadsheet is clicked. Sections: nested \| header \| row \| cell \| selectall \| tabs \| cloning \| toolbar \| footer                                                                                                                     |
| onundo                  | `onundo(worksheet: Object, historyRecord: Object) => void`<br/>When undo is applied                                                                                                                                                                                                                                                         |
| onredo                  | `onredo(worksheet: Object, historyRecord: Object) => void`<br/>When redo is applied                                                                                                                                                                                                                                                         |
| onbeforesave            | `onbeforesave(spreadsheet: Object, worksheet: Object, data: Object) => Boolean \| Object`<br/>Before any data is sent to the backend. Can be used to overwrite the data or to cancel the action when return false.                                                                                                                         |
| onsave                  | `onsave(spreadsheet: Object, worksheet: Object, data: Object) => void`<br/>After the data is sent to the server.                                                                                                                                                                                                                            |
| onbeforechange          | `onbeforechange(worksheet: Object, cell: DOMElement, x: Number, y: Number, value: Any) => Boolean \| Any`<br/>Before a column value is changed. NOTE: It is possible to overwrite the original value, by returning a new value on this method. v3.4.0+                                                                                     |
| onchange                | `onchage(worksheet: Object, cell: DOMElement, x: Number, y: Number, newValue: Any, oldValue: Any) => void`<br/>After a column value is changed.                                                                                                                                                                                             |
| onafterchanges          | `onafterchanges(worksheet: Object, records: Array)`<br/>After all changes are applied in the table.                                                                                                                                                                                                                                         |
| oncopy                  | `oncopy(worksheet: Object, selectedCells: Array, data: String) => String`<br/>When a copy is performed in the spreadsheet. Any string returned will overwrite the user data or return null to progress with the default behavior.                                                                                                           |
| onbeforepaste           | `onbeforepaste(worksheet: Object, data: Array, x: Number, y: Number, style: Array, processedData: String) => boolean \| Array`<br/>Before the paste action is performed. Can return parsed or filtered data, can cancel the action when return false.                                                                                      |
| onpaste                 | `onpaste(worksheet: Object, data: Array) => void`<br/>After a paste action is performed in the spreadsheet.                                                                                                                                                                                                                                 |
| onbeforeinsertrow       | `onbeforeinsertrow(worksheet: Object, rowNumber: Number, numOfRows: Number, insertBefore: Boolean) => boolean \| void`<br/>Before a new row is inserted. You can cancel the insert event by returning false.                                                                                                                               |
| oninsertrow             | `oninsertrow(worksheet: Object, rowNumber: Number, numOfRows: Number, records: Array, insertBefore: Boolean) => void`<br/>After a new row is inserted.                                                                                                                                                                                      |
| onbeforedeleterow       | `onbeforedeleterow(worksheet: Object, rowNumber: Number, numOfRows: Number) => boolean \| void`<br/>Before a row is deleted. You can cancel the delete event by returning false.                                                                                                                                                           |
| ondeleterow             | `ondeleterow(worksheet: Object, rowNumber: Number, numOfRows: Number, rowDOMElements: Array, rowData: Array, cellAttributes: Array) => void`<br/>After a row is deleted.                                                                                                                                                                    |
| onbeforeinsertcolumn    | `onbeforeinsertcolumn(worksheet: Object, columnNumber: Number, numOfColumns: Number, insertBefore: Boolean) => boolean \| void`<br/>Before a new column is inserted. You can cancel the insert event by returning false.                                                                                                                   |
| oninsertcolumn          | `oninsertcolumn(worksheet: Object, columnNumber: Number, numOfColumns: Number, historyRecords: Array, insertBefore: Boolean) => void`<br/>After a new column is inserted.                                                                                                                                                                   |
| onbeforedeletecolumn    | `onbeforedeletecolumn(worksheet: Object, columnNumber: Number, numOfColumns: Number) => Boolean \| void`<br/>Before a column is excluded. You can cancel the insert event by returning false.                                                                                                                                              |
| ondeletecolumn          | `ondeletecolumn(worksheet: Object, columnNumber: Number, numOfColumns: Number, affectedDOMElements: Array, historyProperties: Array, cellAttributes: Array) => void`<br/>After a column is excluded.                                                                                                                                        |
| onmoverow               | `onmoverow(worksheet: Object, origin: Number, destination: Number) => void;`<br/>After a row is moved to a new position.                                                                                                                                                                                                                    |
| onmovecolumn            | `onmovecolumn(worksheet: Object, origin: Number, destination: Number) => void`<br/>After a column is moved to a new position.                                                                                                                                                                                                               |
| onresizerow             | `onresizerow(worksheet: Object, row: Mixed, height: Mixed, oldHeight: Mixed) => void`<br/>After a height change for one or more rows.                                                                                                                                                                                                       |
| onresizecolumn          | `onresizecolumn(worksheet: Object, column: Mixed, width: Mixed, oldWidth: Mixed) => void`<br/>After a column width change for one or more columns.                                                                                                                                                                                          |
| onselection             | `onselection(worksheet: Object, px: Number, py: Number, ux: Number, uy: Number, origin?: Object) => void`<br/>When the selection is changed.                                                                                                                                                                                                |
| onbeforecomments        | `onbeforecomments(worksheet: Object, newValues: Object) => Boolean \| void`<br/>Before a new comment is added or updated. Return false to cancel the event.                                                                                                                                                                                |
| oncomments              | `oncomments(worksheet: Object, cells: Object, oldValues: Object) => void`<br/>After a new comment is added or updated.                                                                                                                                                                                                                      |
| onbeforesort            | `onbeforesort(worksheet: Object, column: Number, direction: Number, newOrderValues: Array) => Any`<br/>It runs before sorting a column. It should return an array with a custom sorting or false to cancel the user action.                                                                                                                 |
| onsort                  | `onsort(worksheet: Object, column: Number, direction: Number, newOrderValues: Array) => void`<br/>When a column is sorted.                                                                                                                                                                                                                  |
| onfocus                 | `onfocus(worksheet: Object) => void`<br/>When the spreadsheet gets the focus.                                                                                                                                                                                                                                                               |
| onblur                  | `onblur(worksheet: Object) => void`<br/>When the spreadsheet loses the focus.                                                                                                                                                                                                                                                               |
| onmerge                 | `onmerge(worksheet: Object, newValue: Object, oldValue: Object) => void`<br/>When merge cells is executed.                                                                                                                                                                                                                                  |
| onchangeheader          | `onchangeheader(worksheet: Object, column: Number, newValue: String, oldValue: String) => void`<br/>When the header title is changed.                                                                                                                                                                                                       |
| onchangefooter          | `onchangefooter(worksheet: Object, newValue: [], oldValue: []) => void`<br/>When the footers are created or updated.                                                                                                                                                                                                                        |
| onchangefootervalue     | `onchangefootervalue(worksheet: Object, x: Number, y: Number, value: String) => void`<br/>When the value in a cell footer is changed.                                                                                                                                                                                                       |
| onchangenested          | `onchangenested(worksheet: Object, options: object) => void`<br/>When updating the nested headers                                                                                                                                                                                                                                           |
| onchangenestedcell      | `onchangenestedcell(worksheet: Object, x: Number, y: Number, properties: Object) => void`<br/>When updating a nested cell                                                                                                                                                                                                                   |
| oncreateeditor          | `oncreateeditor(worksheet: Object, cell: DOMElement, x: Number, y: Number, element: DOMElement, options: Object) => void`<br/>When an editor is created.                                                                                                                                                                                    |
| oneditionstart          | `oneditionstart(worksheet: Object, cell: DOMElement, x: Number, y: Number) => void`<br/>When the editor is opened.                                                                                                                                                                                                                          |
| oneditionend            | `oneditionend(worksheet: Object, cell: DOMElement, x: Number, y: Number, newValue: Any, save: Boolean) => void`<br/>When the editor is closed.                                                                                                                                                                                              |
| onchangestyle           | `onchangestyle(worksheet: Object, newValue: Object, oldValue: Object) => void`<br/>When the style of a cell is changed.                                                                                                                                                                                                                     |
| onchangemeta            | `onchangemeta(worksheet: Object, newValue: Object) => void`<br/>When cell meta information is added or updated.                                                                                                                                                                                                                             |
| onbeforechangepage      | `onbeforechangepage(worksheet: Object, pageNumber: Number, oldPage: Number, quantityPerPage: Number) => Boolean \| void`<br/>Before the page is changed. Can cancel the action by returning false.                                                                                                                                         |
| onchangepage            | `onchangepage(worksheet: Object, pageNumber: Number, oldPageNumber: Number, quantityPerPage: Number) => void`<br/>When pagination is enabled and the user changes the page.                                                                                                                                                                 |
| onbeforecreateworksheet | `onbeforecreateworksheet(worksheetOptions: Object, position: Number) => boolean \| Any`<br/>Add or change the options for a new worksheet.                                                                                                                                                                                                 |
| oncreateworksheet       | `oncreateworksheet(worksheet: Object, worksheetOptions: Object, position: Number) => void`<br/>When the user creates a new worksheet.                                                                                                                                                                                                       |
| onrenameworksheet       | `onrenameworksheet(worksheet: Object, position: Number, newValue: String, oldValue: String) => void`<br/>When the user renames a worksheet.                                                                                                                                                                                                 |
| ondeleteworksheet       | `ondeleteworksheet(worksheet: Object, position: Number) => void`<br/>When the user deletes a worksheet.                                                                                                                                                                                                                                     |
| onmoveworksheet         | `onmoveworksheet(worksheet: Object, from: Number, to: Number) => void`<br/>When the user updates the worksheet tab position.                                                                                                                                                                                                                |
| onopenworksheet         | `onopenworksheet(worksheet: Object, worksheet: Number) => void`<br/>When the user opens a worksheet.                                                                                                                                                                                                                                        |
| onchangerowid           | `onchangerowid(worksheet: Object, rows: Array) => void`<br/>When there is a row id update.                                                                                                                                                                                                                                                  |
| onbeforesearch          | `onbeforesearch(worksheet: Object, query: String, results: Array) => Array \| boolean \| void`<br/>Action to be executed before searching. The accepted method return would be: **null** to continue with the default behavior, **false** to cancel the user action or an **array** with the row numbers to overwrite the default result. |
| onsearch                | `onsearch(worksheet: Object, query: String, results: Array) => void`<br/>After the search is applied to the rows.                                                                                                                                                                                                                           |
| onbeforefilter          | `onbeforefilter(worksheet: Object, filters: Array, data: Array) => void`<br/>Action to be executed before filtering rows. It can cancel the action by returning false.                                                                                                                                                                      |
| onfilter                | `onfilter(worksheet: Object, filters: Array, data: Array) => void`<br/>After the filter has been applied to the rows.                                                                                                                                                                                                                       |
| oncreatecell            | `oncreatecell(worksheet: Object, element: HTMLElement, x: Number, y: Number, value: String) => void`<br/>When a new cell is created.                                                                                                                                                                                                        |
| oncreaterow             | `oncreaterow(worksheet: Object, rowNumber: Number, tr: HTMLElement) => void`<br/>After a new row is inserted.                                                                                                                                                                                                                               |
| onbeforeformula         | `onbeforeformula(worksheet: Object, expression: String, x: Number, y: Number) => void \| string \| boolean`<br/>Before executing a formula.                                                                                                                                                                                               |
| onformulachain          | `onformulachain(worksheet: Object, expressions: Array) => void`<br/>Get the information about the expressions executed from the formula chain.                                                                                                                                                                                              |
| onopenfilter            | `onopenfilter(worksheet: Object, column: number, options: Array) => options \| void`<br/>Customize the items available when the filter editor is open.                                                                                                                                                                                     |

 

## Special Data Grid Events

| Event       | description                                                                                                                                                                                                                                               |
| ------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contextmenu | `contextmenu(worksheet: Object, x: Number, y: Number, e: Event, section: String, section_argument1?: Any, section_argument2?: Any) => Array \| boolean`<br/>Return false to cancel the contextMenu event, or return custom elements for the contextmenu. |
| updateTable | `updateTable(worksheet: Object, cell: Object, x: Number, y: Number, value: String) => void`<br/>Run every single table update action. Can bring performance issues if performing too much changes.                                                        |

 

## The Data Grid Event dispatcher

The data grid event dispatcher is a global-centralized method to handle all events. The number of arguments depends on the event triggered. NOTE: You can see events in the browser console. 
 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
let data = [
    ['Mazda', 2001, 2000],
    ['Peugeot', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

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
            { title:'Price', width:'80px' },
            { title:'Model', width:'100px' },
        ],
    }],
    onevent: function(event,a,b,c,d,e,f) {
        console.log(event,a,b,c,d,e,f);
    }
});
</script>
</html>
```
 
