title: Handling events on Jspreadsheet
keywords: Jspreadsheet, jquery, javascript, excel-like, spreadsheet, table, grid, events
description: How to handle events on your javascript spreadsheet.



# Events on Jspreadsheet spreadsheet

## Custom table scripting after changes

Jspreadsheet offers a native feature to customize your table on the go. You can define the method updateTable to create rules to customize the data that should be shown to the user, as the example below.

[See an example in action](/docs/v5/examples/table-scripting)

## Event dispatch

Although you have various specific events, Jspreadsheet has one global event dispatcher that can be used as below.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
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

## Single Events

Jspreadsheet available events in this version.

[Example on handling events on your spreasheet](/docs/v5/examples/events)

| Event                       | description                                                                                                                           |
| ----------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| **onevent**                 | This method is called when any of the following elements in these tables happens.                                                     |
| **onbeforesave**            | Before any data is sent to the backend                                                                                                |
| **onsave**                  | After any data is sent to the backend                                                                                                 |
| **onload**                  | This method is called when the method setData                                                                                         |
| **onbeforechange**          | Before a column value is changed. NOTE: It is possible to overwrite the original value, by return a new value on this method. v3.4.0+ |
| **onchange**                | After a column value is changed.                                                                                                      |
| **onafterchanges**          | After all changes are applied in the table.                                                                                           |
| **onpaste**                 | After a paste action is performed in the javascript table.                                                                            |
| **onbeforepaste**           | Before the paste action is performed. Used to parse any input data, should return the data.                                           |
| **oninsertrow**             | After a new row is inserted.                                                                                                          |
| **onbeforeinsertrow**       | Before a new row is inserted. You can cancel the insert event by returning false.                                                     |
| **ondeleterow**             | After a row is excluded.                                                                                                              |
| **onbeforedeleterow**       | Before a row is deleted. You can cancel the delete event by returning false.                                                          |
| **oninsertcolumn**          | After a new column is inserted.                                                                                                       |
| **onbeforeinsertcolumn**    | Before a new column is inserted. You can cancel the insert event by returning false.                                                  |
| **ondeletecolumn**          | After a column is excluded.                                                                                                           |
| **onbeforedeletecolumn**    | Before a column is excluded. You can cancel the insert event by returning false.                                                      |
| **onmoverow**               | After a row is moved to a new position.                                                                                               |
| **onmovecolumn**            | After a column is moved to a new position.                                                                                            |
| **onresizerow**             | After a change in the row height.                                                                                                     |
| **onresizecolumn**          | After a change in the column width.                                                                                                   |
| **onselection**             | On the selection is changed.                                                                                                          |
| **onsort**                  | After a colum is sorted.                                                                                                              |
| **onfocus**                 | On table focus                                                                                                                        |
| **onblur**                  | On table blur                                                                                                                         |
| **onmerge**                 | On column merge                                                                                                                       |
| **onchangeheader**          | On header change                                                                                                                      |
| **onundo**                  | On undo is applied                                                                                                                    |
| **onredo**                  | On redo is applied                                                                                                                    |
| **oneditionstart**          | When an openEditor is called.                                                                                                         |
| **oneditionend**            | When a closeEditor is called.                                                                                                         |
| **onchangestyle**           | When a setStyle is called.                                                                                                            |
| **onchangemeta**            | When a setMeta is called.                                                                                                             |
| **onchangepage**            | Call when pagination is enabled and the page is changed.                                                                              |
| **onbeforecreateworksheet** | Before a creating of a new worksheet tab.                                                                                             |
| **onbeforecreateworksheet** | Before a creating of a new worksheet tab.                                                                                             |


