title: Handling events on Jspreadsheet
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, grid, events
description: How to handle events on your javascript spreadsheet.



# Spreadsheet Events

## Custom data grid table scripting after changes

Jspreadsheet offers a native feature to customize your table on the go. You can define the method updateTable to create rules to customize the data that should be shown to the user, as the example below.

[See an example in action](/docs/v7/examples/table-scripting)


## Data Grid Event dispatcher

Although you have various specific events, jspreadsheet has one global event dispatcher that can be used as below.


```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
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
    data:data,
    columns:[
        { title:'Model', width:300 },
        { title:'Price', width:80 },
        { title:'Model', width:100 }
    ],
    onevent: function(event,a,b,c,d,e,f) {
        console.log(event,a,b,c,d,e,f);
    }
});
</script>
</html>
```
  

## Events

Jspreadsheet available events.

[Example on handling events on your spreasheet](/docs/v7/examples/events)

| Event                                      | description                                                                                                                                                                                                                                        |
| -------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onevent                                    | `onevent(arguments)`<br/>This is the general event and it is called together with any other events. The arguments are different depending on the event.                                                                                            |
| onbeforesave                               | `onbeforesave(DOMElement el, Object instance, Array data)`<br/>Before any data is sent to the backend. Can be used to overwrite the data or to cancel the action when return false.                                                                |
| onsave                                     | `onsave(DOMElement el, Object instance, Array data)`<br/>After the data is sent to the server.                                                                                                                                                     |
| onload                                     | `onload(DOMElement el, Object instance)`<br/>This method is called when the data in the spreadsheet is ready.                                                                                                                                      |
| onbeforechange                             | `onbeforechange(DOMElement el, DOMElement cell, Number x, Number y, Mixed value)`<br/>Before a column value is changed. NOTE: It is possible to overwrite the original value, by return a new value on this method. v3.4.0+                        |
| onchange                                   | `onchage(DOMElement el, DOMElement cell, Number x, Number y, Mixed newValue, Mixed oldValue)`<br/>After a column value is changed.                                                                                                                 |
| onafterchanges                             | `onafterchanges(DOMElement el, Array records)`<br/>After all changes are applied in the table.                                                                                                                                                     |
| onbeforepaste                              | `onbeforepaste(DOMElement el, Array data, Number x, Number y, null, Array processedData)`<br/>Before the paste action is performed. Can return parsed or filtered data, can cancel the action when return false. From 7.9.11 The data is an Array. |
| onpaste                                    | `onpaste(DOMElement el, Array data)`<br/>After a paste action is performed in the spreadsheet.                                                                                                                                                     |
| onbeforeinsertrow                          | `onbeforeinsertrow(DOMElement el, Number rowNumber, Number numOfRows, Boolean insertBefore)`<br/>Before a new row is inserted. You can cancel the insert event by returning false.                                                                 |
| oninsertrow                                | `oninsertrow(DOMElement el, Number rowNumber, Number numOfRows, Boolean insertBefore)`<br/>After a new row is inserted.                                                                                                                            |
| onbeforedeleterow                          | `onbeforedeleterow(DOMElement el, Number rowNumber, Number numOfRows)`<br/>Before a row is deleted. You can cancel the delete event by returning false.                                                                                            |
| ondeleterow                                | `ondeleterow(DOMElement el, Number rowNumber, Number numOfRows, Array rowDOMElements, Array rowData, Array cellAttributes)`<br/>After a row is excluded.                                                                                           |
| onbeforeinsertcolumn                       | `onbeforeinsertcolumn(DOMElement el, Number columnNumber, Number numOfColumns, Boolean insertBefore)`<br/>Before a new column is inserted. You can cancel the insert event by returning false.                                                     |
| oninsertcolumn                             | `oninsertcolumn(DOMElement el, Number columnNumber, Number numOfColumns, Array historyRecords, Boolean insertBefore)`<br/>After a new column is inserted.                                                                                          |
| onbeforedeletecolumn                       | `onbeforedeletecolumn(DOMElement el, Number columnNumber, Number numOfColumns)`<br/>Before a column is excluded. You can cancel the insert event by returning false.                                                                               |
| ondeletecolumn                             | `ondeletecolumn(DOMElement el, Number columnNumber, Number numOfColumns, Array affectedDOMElements, Array historyProperties, Array cellAttributes)`<br/>After a column is excluded.                                                                |
| onmoverow                                  | `onmoverow(DOMElement el, Number origin, Number destination)`<br/>After a row is moved to a new position.                                                                                                                                          |
| onmovecolumn                               | `onmovecolumn(DOMElement el, Number origin, Number destination)`<br/>After a column is moved to a new position.                                                                                                                                    |
| onresizerow                                | `onresizerow(DOMElement el, Mixed row, Mixed height, Mixed oldHeight)`<br/>After a height change for one or more rows.                                                                                                                             |
| onresizecolumn                             | `onresizecolumn(DOMElement el, Mixed column, Mixed width, Mixed oldWidth)`<br/>After a column width change for one or more columns.                                                                                                                |
| onselection                                | `onselection(DOMElement el, Number px, Number py, Number ux, Number uy, Number origin)`<br/>When the selection is changed.                                                                                                                         |
| onbeforesort                               | `onbeforesort(DOMElement el, Number column, Number direction, Array newOrderValues)`<br/>Before a column is sorted. It is possible to cancel the action when returning false.                                                                      |
| onsort                                     | `onsort(DOMElement el, Number column, Number direction, Array newOrderValues)`<br/>When a column is sorted.                                                                                                                                        |
| cache, onbeforesort, freezeNested  onfocus | `onfocus(DOMElement el)`<br/>On table focus                                                                                                                                                                                                        |
| onblur                                     | `onblur(DOMElement el)`<br/>On table blur                                                                                                                                                                                                          |
| onmerge                                    | `onmerge(DOMElement el, String cellName, Number colspan, Number rowspan)`<br/>On column merge                                                                                                                                                      |
| onchangeheader                             | `onchangeheader(DOMElement el, Number column, String newValue, String oldValue)`<br/>When the title is changed                                                                                                                                     |
| onundo                                     | `onundo(DOMElement el, Object historyRecord)`<br/>On undo is applied                                                                                                                                                                               |
| onredo                                     | `onredo(DOMElement el, Object historyRecord)`<br/>On redo is applied                                                                                                                                                                               |
| oneditionstart                             | `oneditionstart(DOMElement el, DOMElement cell, Number x, Number y)`<br/>When an openEditor is called.                                                                                                                                             |
| oneditionend                               | `oneditionend(DOMElement el, DOMElement cell, Number x, Number y, Mixed newValue, Boolean save)`<br/>When a closeEditor is called.                                                                                                                 |
| onchangestyle                              | `onchangestyle(DOMElement el, Mixed mixed, String key, String value)`<br/>When a setStyle is called.                                                                                                                                               |
| onchangemeta                               | `onchangemeta(DOMElement el, Mixed mixed, String key, String value)`<br/>When a setMeta is called.                                                                                                                                                 |
| onbeforechangepage                         | `onbeforechangepage(DOMElement el, Number pageNumber, Number oldPage, Number quantityPerPage)`<br/>Before the page is changed. Can cancel the action when return is false.                                                                         |
| onchangepage                               | `onchangepage(DOMElement el, Number pageNumber, Number oldPageNumber)`<br/>When pagination is enabled and the page is changed.                                                                                                                     |
| onbeforecreateworksheet                    | `onbeforecreateworksheet(JSON worksheetOptions)`<br/>Add or change the options of a new worksheet.                                                                                                                                                 |
| oncreateworksheet                          | `oncreateworksheet(JSON worksheetOptions)`<br/>Add or change the options of a new worksheet.                                                                                                                                                       |
| ondeleteworksheet                          | `ondeleteworksheet(DOMElement el, Number worksheetNumber)`<br/>When a worksheet is removed.                                                                                                                                                        |
| onmoveworksheet                            | `onmoveworksheet(DOMElement el, Number from, Number to)`<br/>When a worksheet position is changed.                                                                                                                                                 |
| onopenworksheet                            | `onopenworksheet(DOMElement el, Number worksheet)`<br/>When a worksheet is opened.                                                                                                                                                                 |
| onchangerowid                              | `onopenworksheet(DOMElement el, Object Instance, Array rows)`<br/>When update the id from rows.                                                                                                                                                    |
| onbeforesearch                             | `onbeforesearch(DOMElement el, Array filters, Array data)`<br/>Action to be executed before filtering rows. It can cancel the action by returning false.                                                                                           |
| onsearch                                   | `onsearch(DOMElement el, Array filters, Array data)`<br/>After the filter has been applied to the rows.                                                                                                                                            |
| onbeforefilter                             | `onbeforefilter(DOMElement el, Array filters, Array data)`<br/>Action to be executed before filtering rows. It can cancel the action by returning false.                                                                                           |
| onfilter                                   | `onfilter(DOMElement el, Array filters, Array data)`<br/>After the filter has been applied to the rows.                                                                                                                                            |
| oncomments                                 | `oncomments(DOMElement el, Object cells)`<br/>After a new comment is added or updated.                                                                                                                                                             |


