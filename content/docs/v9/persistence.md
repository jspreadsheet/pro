title: Jspreadsheet Data Persistence
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, persistence, data persistence
description: All the important points about the persistence of the data and the properties of the spreadsheet.

# Data Persistence

Jspreadsheet is a frontend tool but has methods, events, and other features to help with the backend data persistence. This section will cover the following points: 

  * Posting data to a remote server
  * Dealing with record IDs synchronization and sequences
  * Backend persistence in PHP example
  * Plugins for persistence

 

## Features

### Sequence

Jspreadsheet has an internal sequence for each worksheet. That is automatically incremented and allocated to a row when no record id is defined. It is possible to assign the sequence value to the row through `worksheet.setRowId(row, id)`.  

## Documentation

### Methods

| Method          | Description                                                                                                                                                                            |
| ----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getNextSequence | Get the next sequence number.<br/>`getNextSequence() : void`                                                                                                                           |
| getRowId        | Get the row ID from a row number given.<br/>`getRowId(rowNumber: Number) : void`                                                                                                       |
| setRowId        | Set the row ID from a row number given.<br/>`setRowId(rowNumber: Number, rowId: Number) : void`                                                                                        |
| getRowById      | Get the data from a row, or the row object by id.<br/>`getRowById(rowNumber: Number, element: Boolean) : any`                                                                          |
| save            | Internal method to post a request to the server. The callback is executed when the backend returns a JSON<br/>`save(url: String, data: Any, token: String, callback: Function) : void` |

 

### Events

The `onbeforesave` event can be used to intercept, change or cancel the user action.

| Method       | Description                                                                                                                                                                                                                                                                                 |
| -------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforesave | Executed before a server update request.<br/>`onbeforesave(spreadsheet: Object, worksheet: Object, data: Object) : Object`<br/>It will return false to cancel the event or the replacement for the original data. Data is the information about the event that requires server persistence. |
| onsave       | It will bring information about the server update request.<br/>`onsave(spreadsheet: Object, worksheet: Object, data: Object, result, Object) : void`                                                                                                                                        |

 

### Settings

| Property                                   | Description                                                                    |
| -------------------------------------------|--------------------------------------------------------------------------------|
| **On the spreadsheet configuration level** |
| server: string                             | URL for the server persistence requests. A global URL for all worksheets.      |
| **On the worksheet configuration level**   |
| persistence: string                        | URL for the server persistence requests. One URL for each worksheet.           |
| columns.primaryKey: boolean                | The primaryKey defines which column will be considered the ID for the records. |
| rows.id: number                            | Define the ID for the row                                                      |

 

## Posting data to a remote server

When the persistence directive is active, an HTTP request happens on each spreadsheet update. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        url: '/jspreadsheet/books.json',
        columns: [
            {
                type: 'autonumber',
                width: '50px',
                title: 'Code',
                name: 'id',
                readOnly: true,
                primaryKey: true
            },
            {
                type: 'image',
                width: '80px',
                title: 'Image',
                name: 'thumbnailUrl',
            },
            {
                type: 'text',
                width: '200px',
                title: 'Title',
                name: 'title'
            },
            {
                type: 'text',
                width: '55px',
                title: 'Pages',
                name: 'pageCount'
            },
            {
                type: 'calendar',
                width: '90px',
                title: 'Published',
                name: 'publishedDate'
            },
            {
                type: 'text',
                width: '200px',
                title: 'Author',
                name: 'authors'
            },
            {
                type: 'dropdown',
                width: '180px',
                title: 'Categories',
                name: 'categories',
                source: ['Internet','Web Development', 'Java', 'Mobile', 'Open Source'],
                multiple: true,
                render: 'tag'
            },
        ],
        allowComments:true,
        search: true,
        persistence: '/jspreadsheet/save',
    }],
    updateTable: function(instance, cell, col, row, val, label, cellName) {
        if (col == 1) {
            if (! val) {
                cell.innerHTML = '<img src="https://images-na.ssl-images-amazon.com/images/I/21%2Bwfxx2lyL._SX319_BO1,204,203,200_.jpg" style="width:60px;">';
            }
        }
    }
});
</script>
</html>
```
  

## Record ID synchronization and sequences

The following example implements a few concepts: 

  * How to load the data with hidden IDs for the user;
  * Using a custom column to create an icon to perform any action using the record id;
  * Get the record id from a remote server when a new row is added.

 

 NOTE: the example shows one new line, but you can interact to get more ids if more than one row is added.  

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let action = function() {
    let methods = {};
 
    methods.createCell = function(cell, value, x, y, instance, options) {
        let input = document.createElement('i');
        input.className = 'material-icons';
        input.style.cursor = 'pointer';
        input.style.fontSize = '22px';
        input.innerHTML = "search";
        input.onclick = function() {
            let id = instance.getRowId(y);
            // Do some action
            alert(id);
        }
 
        cell.appendChild(input);

        // Readonly
        cell.classList.add('readonly');
    }
 
    return methods;
}();
 
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            { id:1, data:['Google', '5', ''] },
            { id:2, data:['Bing', '4', ''] },
            { id:3, data:['Yahoo', '1', ''] },
            { id:4, data:['Duckduckgo', '5', ''] },
        ],
        columns: [
            { type: 'text', width:'400px' },
            { type: 'rating', width:'100px' },
            { type: action, width:'100px' },
        ],
        persistence: '/jspreadsheet/save',
    }],
    oninsertrow: function(a,b,c,d,e) {
        // Inserted before?
        let rowNumber = e == false ? b + 1 : b;
        // Go in remotely get the id and return to the cell
        jSuites.ajax({
            url: '/jspreadsheet/id',
            method: 'GET',
            dataType: 'json',
            success: function(result) {
                // The new id is
                alert('The new row has id: ' + result);
                // set row id
                a.setRowId(rowNumber, result);
            }
        })
    }
});
</script>
</html>
```
 

 
