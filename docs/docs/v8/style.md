title: Spreadsheet and Cell Styling
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, style, themes
description: How to apply CSS to the cells of your spreadsheets. Learn how to handle style programmatically and tracking the related events.



# Spreadsheet Style

It is possible to apply CSS to the spreadsheet cell DOM elements. That is faster and sometimes useful, but there won’t be any internal tracking, history, or persistence for those cases. For that reason, the initialization property style is available to define the initial cell style. Changes in the Style will be tracked and included in the persistence and history.  

## Documentation

### Methods

You can manage the spreadsheet cell style with the following methods.

| Method     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getStyle   | Get style from one or multiple cells.<br/>`spreadsheet.getStyle(cellName: String \| null)`<br/>@Param mixed - cell identification or null for the whole table.                                                                                                                                                                                                                                                                                     |
| setStyle   | Set a single cell style by name, or set the style for multiple cells.<br/>`spreadsheet.setStyle(cellName: String \| Object, property: String, value: String, force: Boolean)` <br/>@param {string\|Object} - ID of a cell or an object with multiple cells and the style definitions. <br/>@param {string} property - Style property <br/>@param {string} value - Style value <br/>@param {boolean} force - Force the style (do not toggle style) |
| resetStyle | Reset the style for one or multiple cells<br/>`spreadsheet.resetStyle(cellName: Mixed \| Array)` <br/>@param {string\|Object} - String to identify a cell or an array of cell identifications (A1, A2... etc)                                                                                                                                                                                                                                     |

 

### Events

Spreadsheet style related events.

| Event         | Description                                                                                                                                                    |
| --------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onchangestyle | `onchangestyle(worksheet: Object, newValue: Object, oldValue: Objectd) : void`<br/>The method will return an object with the cells and the properties applied. |

 

### Initial Settings

The following property is available through the initialization of the online spreadsheet.

| Property      | Description                                                                    |
| --------------|--------------------------------------------------------------------------------|
| style: object | Each property of the object represents a cellName and its value for the style. |

 

## Examples

### Basic cell styling

Define cell style on initialization and programmatically using the following example. 

After initialization, it is still possible to manage the cell style programmatically using the getStyle or setStyle methods.

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let w = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Cheese', 'Yes', '2019-02-12'],
            ['CA;US;UK', 'Apples', 'Yes', '2019-03-01'],
            ['CA;BR', 'Carrots', 'No', '2018-11-10'],
            ['BR', 'Oranges', 'Yes', '2019-01-12'],
        ],
        columns: [
            {
                type: 'dropdown',
                title: 'Product Origin',
                width: 300,
                url: '/jspreadsheet/countries', // Remote source for your dropdown
                autocomplete: true,
                multiple: true
            },
            {
                type: 'text',
                title: 'Description',
                width: 200
            },
            {
                type: 'dropdown',
                title: 'Stock',
                width: 100 ,
                source: ['No','Yes']
            },
            {
                type: 'calendar',
                title: 'Best before',
                width: 100
            },
        ],
        style: {
            A1:'background-color: orange;',
            B1:'background-color: orange;',
        },
    }]
});

document.getElementById("setbackgroundbtn").onclick = () => w[0].setStyle('A2', 'background-color', 'yellow');
document.getElementById("changestylebtn").onclick = () => w[0].setStyle({ A3:'font-weight: bold;', B3:'background-color: yellow;' });
document.getElementById("geta1stylebtn").onclick = () => document.getElementById('console').innerHTML = w[0].getStyle('A1');
document.getElementById("gettablestylebtn").onclick = () => document.getElementById('console').innerHTML = JSON.stringify(w[0].getStyle());
</script>

<p><textarea id='console' style='width:100%;max-width:600px;height:100px;'></textarea></p>

<button type="button" id="setbackgroundbtn">Set A2 background</button>
<button type="button" id="changestylebtn">Change A3, B3 style</button>
<button type="button" id="geta1stylebtn">Get A1 style</button>
<button type="button" id="gettablestylebtn">Get the table style</button>
</html>
```
  

### CSS styling

The following example uses global CSS to apply a background color on even rows. 

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [8, 10],
    }]
});
</script>

<style>
#spreadsheet tbody tr:nth-child(even) {
  background-color: #eee;
}
</style>
</html>
```
 
