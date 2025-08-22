title: Spreadsheet Merged cells
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, merge cells
description: How to create and manage merged cells on your online spreadsheets.



# Spreadsheet Merged Cells

This section covers creating and managing merged cells in your online spreadsheets. 

## Documentation

### Methods

The following methods help to deal with the merged cells programmatically.

| Method           | Description                                                                                                                                                                                                                                                                                                                                                               |
| -----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **setMerge**     | Set the defined merged cell by the number of columns and rows given.<br/>`setMerge(cells: String\|Object, colspan?: Number, rowspan?: number) : void`<br/>@Param {string} cellName, for example A1, A2. Can be used as an object to apply multiple merge operations.<br/>@Param {number?} colspan - Number of columns<br/>@Param {number?} rowspan - Number of rows<br/> |
| **getMerge**     | Get a merged cell or all merge cells.<br/>`getMerge(cells?: String) : mixed`<br/>@param {string?} Cell name such as A1 or null to return all merged cells.<br/>@return {string\|null} - cell name or null for all cells with merge properties.                                                                                                                           |
| **removeMerge**  | Destroy the merged cells by the cell name.<br/>`removeMerge(cells: String\|Object) : null`<br/>@param {string\|Object} - Cell name, such as A1 or an object with all cell names. For example: { A1: true, D1: true }                                                                                                                                                    |
| **destroyMerge** | Destroy all merged cells<br/>`destroyMerge() : null`                                                                                                                                                                                                                                                                                                                      |

 

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

 

#### Known limitations

Merged cells over hidden or frozen rows and columns can cause unexpected results. We expect to handle exceptions in future releases. 

## Examples

A basic example of how to initiate and programmatically change the merged cells definitions. 

The methods for merged cell management are: _setMerge, getMerge, removeMerge and destroyMerge_
Open the [merged cells example](https://jsfiddle.net/spreadsheet/gLc0a1x2/) on JSFiddle.  

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br/>
<div id="log"></div><br/>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

let data = [
    ['Mazda', 2001, 2000, '2006-01-01 12:00:00'],
    ['Peugeot', 2010, 5000, '2005-01-01 13:00:00'],
    ['Honda Fit', 2009, 3000, '2004-01-01 14:01:00'],
    ['Honda CRV', 2010, 6000, '2003-01-01 23:30:00'],
]

// Create the spreadsheet
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

<input type="button" value="setMerge('A3', 2, 3)" id="setmerge" />
<input type="button" value="removeMerge('A3')" id="removemerge" />
<input type="button" value="Get all merged cells" id="getmerge" />
<input type="button" value="Destroy all merged" id="destroymerge" />

</html>
```
  

## Batch operations

The batch operation enables you to apply with single command multiple merged operations.  

### Example

{.ignore}
```javascript
// To apply set merge in multiple cells at the same time
instance.setMerge({ A1: [2,2], E1: [2,2] });

// To remove merge in multiple cells at the same time
instance.removeMerge({ A1: true, E1: true });
```
 
