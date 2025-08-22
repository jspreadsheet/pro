title: Spreadsheet Merge cells
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, merge cells
description: How to create and manage merged cells on your online spreadsheets.

# Spreadsheet Merged cells

This section covers creating and managing merged cells in your online spreadsheets. 

## Documentation

### Methods

The following methods help to deal with the merged cells programmatically.

| Method                                    | Description                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **setMerge**                              | Set the defined merged cell by the number of columns and rows given. Null to consider all selected cells.<br/>`setMerge(mixed: String, colspan: Number, rowspan: number) : void`<br/>@Param {string?} columnName such as A1 or null to all selected cells<br/>@Param {number} colspan - Number of columns<br/>@Param {number} rowspan - Number of rows<br/> |
| **getMerge**                              | Get the merged cells by cell name or all merged cells when null is given.<br/>`getMerge(mixed: String) : mixed`<br/>@param {string?} Cellname such as A1 or null to return all merged cells.<br/>@return {array\|object} array with colspan/rowspan or an object with all merged cells.                                                                    |
| **removeMerge**                           | Destroy the merged cells by column name<br/>param string columnName - Column name, such as A1.<br/>`removeMerge(cellName: String) : null`                                                                                                                                                                                                                   |
| **destroyMerge** Destroy all merged cells | destroyMerge();                                                                                                                                                                                                                                                                                                                                             |

 

### Events

Spreadsheet merge cells related events.

| Method  | Description                                                           |
| --------|-----------------------------------------------------------------------|
| onmerge | `onmerge(worksheet: Object, newValue: Array, oldValue: Array) : void` |

 

### Initial Settings

The initial merge cells spreadsheet properties.

| Property          | Description                                                |
| ------------------|------------------------------------------------------------|
| mergeCells: array | Allow the user to define the initial default merged cells. |

 

## Examples

A basic example of how to initiate and programmatically change the merged cells definitions. 

The methods for merged cell management are: _setMerge, getMerge, removeMerge and destroyMerge_

Open the [merged cells example](https://jsfiddle.net/spreadsheet/gLc0a1x2/) on JSFiddle.  

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div><br/>
<div id="log"></div><br/>

<input type="button" value="setMerge('A3', 2, 3)" id="setmerge" />
<input type="button" value="removeMerge('A3')" id="removemerge" />
<input type="button" value="Get all merged cells" id="getmerge" />
<input type="button" value="Destroy all merged" id="destroymerge" />

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');
let data = [
    ['Mazda', 2001, 2000, '2006-01-01 12:00:00'],
    ['Peugeot', 2010, 5000, '2005-01-01 13:00:00'],
    ['Honda Fit', 2009, 3000, '2004-01-01 14:01:00'],
    ['Honda CRV', 2010, 6000, '2003-01-01 23:30:00'],
]

let table = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: data,
        columnDrag: true,
        worksheetName: 'Merged Cells',
        minDimensions: [50, 5000],
        tableOverflow: true,
        tableWidth: '800px',
        tableHeight: '300px',
        columns: [
            {
                type: 'text',
                width: '300px',
                title: 'Model',
            },
            {
                type: 'text',
                width: '80px',
                title: 'Year',
            },
            {
                type: 'text',
                width: '100px',
                title: 'Price',
            },
            {
                type: 'calendar',
                width: '150px',
                title: 'Date',
                options: {
                    format: 'DD/MM/YYYY HH24:MI',
                    time: 1,
                }
            },
        ],
        mergeCells: {
            A1: [2,2]
        },
        columnDrag: true,
    }]
});

document.getElementById("setmerge").onclick = () => table[0].setMerge('A3', 2, 3);
document.getElementById("removemerge").onclick = () => table[0].removeMerge('A3');
document.getElementById("getmerge").onclick = () => {
    document.getElementById("log").innerHTML = JSON.stringify(table[0].getMerge());
}
document.getElementById("destroymerge").onclick = () => table[0].destroyMerge();
</script>

</html>
```
 
