title: Data Grid Cell Meta Information
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, cell meta information
description: Meta information is the easier way to store hidden information about the spreadsheet cells.



# Data Grid Cell Meta Information

This feature keeps hidden information about the cells. There is no interface to define any meta information. This should be done programmatically. 

## Documentation

### Methods

Methods related to managing the spreadsheet meta information.

| Method  | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getMeta | Get the meta information from a cell or from the whole spreadsheet.<br/>`getMeta(cellName: String \| null)`<br/>@Param mixed - cell identification or null for the whole table.                                                                                                                                                                                                                                     |
| setMeta | Set the meta information for a single cell by name or for multiple cells.<br/>`setMeta(cellName: Mixed \| Array, key: String, value: String)` <br/>@param {string\|Object} - Identification of a cell or an array of objects with multiple cell meta information. <br/>@param {string=} k - the key string to identify the meta information. <br/>@param {string=} v - the value string with the meta information. |

 

### Events

| Event        | Description                                                |
| -------------|------------------------------------------------------------|
| onchangemeta | `onchangemeta(worksheet: Object, newValue: Object) : void` |

 

### Initial Settings

The `meta` property defines the meta information for the worksheet cells.

| Property     | Description               |
| -------------|---------------------------|
| meta: Object | Initial meta information. |

 

## Examples

Basic example using the native meta information methods. 

 It is possible to interact with any meta information during initialization or programmatically using the methods: `getMeta` or `setMeta`. Set meta data for multiple columns Set a meta information for B2 Get the meta information for A1 Get all meta information    [Spreadsheet meta information](https://jsfiddle.net/spreadsheet/vauo24ws/) working example on JSFiddle.  

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<textarea id='console' style='width:100%;height:80px;'></textarea>

<input type="button" id="setmetamulti" value="Set meta data for multiple columns"/><br/><br/>
<input type="button" id="setmetab2" value="Set a meta information for B2"/><br/><br/>
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
            { type: 'dropdown', title: 'Product Origin', width: '300px', url: '/jspreadsheet/countries', autocomplete: true, multiple: true },
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
document.getElementById("getmetaa1").onclick = () => document.getElementById('console').value = JSON.stringify(table[0].getMeta('A1'));
document.getElementById("getallmeta").onclick = () => document.getElementById('console').value  = JSON.stringify(table[0].getMeta());
</script>
</html>
```
 
