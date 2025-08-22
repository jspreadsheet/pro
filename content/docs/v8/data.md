title: Spreadsheet Data
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, spreadsheet data
description: Learn all the different ways to load and manipulate the worksheet data of your online spreadsheets, including methods for programmatically updates and all related events to help integrate the spreadsheet with various applications.



# Spreadsheet Data

This section is dedicated to the methods, events and settings related to data and its operations. 

## Create a new spreadsheet

There are different ways to create a new spreadsheet and there are different ways to load the data, such as: 

  * From an existing HTML table;
  * Load data from a CSV file
  * Load data from a JSON string or remote JSON file
  * Load data from a JavaScript Array.
  * Load data from an XLSX file (This requires an extension and there are known limitations).

 

## Data Grid Cell Binding

It is possible to bind the spreadsheet cells data to an array or a single or multi-level object. In the following code, the changes in the spreadsheet cell will reflect in the data variable automatically. 

See a [Data binding](/docs/v8/examples/data-binding) example  

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<div id='console'></div>

<input type='button' id='showonconsole' value='console.log on data'/>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

let data = [
    {
        name: 'Jorge',
        address: {
            number: '201',
            city: 'New York'
        }
    },
    {
        name: 'Paul',
        address: {
            number: '1',
            city: 'New Jersey'
        }
    },
];

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        columns: [{
            name: 'name',
            title: 'Fullname',
            type: 'text',
            width: '200px',
        },
        {
            name: 'address.number',
            title: 'Number',
            type: 'text',
            width: '200px',
        },
        {
            name: 'address.city',
            title: 'City',
            type: 'text',
            width: '300px',
        }]
    }]
});

document.getElementById('showonconsole').onclick = function () { document.getElementById('console').innerHTML = JSON.stringify(data) }
</script>
</html>
```
  

## Documentation

### Methods

Up to version 7, the method setData would destroy and recreate the table losing information such as comments and style. From version 8, setData only replaces the data from the worksheet, keeping the other cell properties.

| Event              | Description                                                                                                                                                                                                                                                                                                         |
| -------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getValue           | Get the value of a cell.<br/>`getValue(cellName: string, processed: Boolean) => any`<br/>@param {string} cellName - The string to represent a cellname, such as A1,B1, etc.<br/>@param {bool} Get the raw data (false). Get the processed data (true)                                                               |
| getValueFromCoords | Get the value of a cell from its coordinates.<br/>`getValueFromCoords(x: Number, y: Number, processed: Boolean) => any`                                                                                                                                                                                             |
| setValue           | Set the value of a cell.<br/>`setValue(cellName: String, value: String\|Number, force: Boolean) => void`<br/>@param {string} cellName - The string to represent a cellname, such as A1,B1, etc.<br/>@param {value} - The cell new value<br/>@param {bool} - Help update values on read-only cells.                 |
| setValueFromCoords | Set the value of a cell from its coordinates<br/>`setValueFromCoords(x: Number, y: Number, value: String\|Number, force: Boolean) => void`                                                                                                                                                                         |
| setData            | Replace the data from the spreadsheet.<br/>`setData(data: Array) => void`<br/>@param {array} The most basic format is a matrix of lines and columns. It is also possible to use the advanced data format to add IDs to the spreadsheet.                                                                             |
| loadData           | Reset the data from the JavaScript grid.<br/>`loadData(data: Array) => void`<br/>@param {array} The most basic format is a matrix of lines and columns, but it can be defined as a JSON.                                                                                                                            |
| getData            | Extract the data from the spreadsheet.<br/>`getData(highlighted?: Boolean, processed?: Boolean, delimiter?: String, asJson?: Boolean) => array`<br/>@param {bool} Get the data from the highlighted cells only.<br/>@param {bool} Get the raw data (false). Get the processed data (true). Delimiter for exporting. |
| getRowData         | Get the data from one row by its number starting on zero.<br/>`getRowData(rowNumber: Number, processed: Boolean) => array`<br/>@param {number} Row number.                                                                                                                                                          |
| setRowData         | Set the data for one row by its number starting on zero.<br/>`getRowData(rowNumber: Number, data: Array) => void`<br/>@param {number} Row number<br/>@param {array} The new data.                                                                                                                                   |
| getColumnData      | Get the data from one column by its number starting on zero.<br/>`getColumnData(colNumber: Number, processed: Boolean) => array`<br/>@param {number} Column number.                                                                                                                                                 |
| setColumnData      | Set the data for one column by its number starting on zero.<br/>`setColumnData(rowNumber: Number, data: Array, force: Boolean) => void`<br/>@param {number} Column number.<br/>@param {array} The new data.<br/>@param {boolean} Force update on readonly cells.                                                    |
| refresh            | Refresh the data, it will send an HTTP request when the data is loaded from an external source.<br/>`refresh() => void`                                                                                                                                                                                             |
| download           | Download the data from a worksheet in a CSV format.<br/>`download(includeHeaders: Boolean, processed: Boolean) => void`<br/>@param {bool} Include the headers<br/>@param {bool} Returns the raw data when false or Returns the processed data and formulas when true.<br/>                                          |
| copy               | Copy the selected cells<br/>`copy(cut: Boolean) => void`<br/>@param {bool} Clear the data before pasting.                                                                                                                                                                                                           |
| paste              | Paste the data to the current cursor position<br/>`paste() => void`                                                                                                                                                                                                                                                 |

 

#### Advanced data format

It is possible to use the advanced data format to load specific rows, with specific ids, and the data for the columns as follows: 

{.ignore}
```javascript
table.setData([
    { id: 1000, row: 0, data:[1,2,3] },
    { id: 2000, row: 1, data:[4,5,6] },
    { id: 2001, row: 2, data:[7,8,9] },
]);
```
  

### Events

Events related to operations with the spreadsheet data.

| Event          | Description                                                                                                                                                                                                  |
| ---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforechange | `onbeforechange(worksheet: Object, cell: DOMElement, x: Number, y: Number, value: Value) => void`<br/>Before changing the cell value. This can be used to intercept, change or cancel the user action.       |
| onchange       | `onchange(worksheet: Object, cell:DOMElement, x: Number, y: Number, newValue: Any, oldValue: Any)`<br/>After a new value is updated.                                                                         |
| onafterchanges | `onafterchanges(worksheet: Object, records: Array)`<br/>An array of cells affected.                                                                                                                          |
| oncopy         | `oncopy(worksheet: Object, highlighted: Boolean, str: String)`<br/>The data copied to the clipboard.                                                                                                         |
| onbeforepaste  | `onbeforepaste(worksheet: Object, data: Array, x: Number, y: Number, style: Array)`<br/>This happens before pasting the data in the spreadsheet, can be used to intercept, change or cancel the user action. |
| onpaste        | `onpaste(worksheet: Object, records: Array)`<br/>After the paste action.                                                                                                                                     |

 

### Initial Settings

| Property             | Description                                     |
| ---------------------|-------------------------------------------------|
| data: Array\|Object | Define the new data from a local JSON or array. |
| url: String          | Load the data from an external file.            |
| csv: String          | Load the data from an external CSV file.        |
| csvHeaders: Boolean  | The first row of the CSV file is the headers    |
| csvDelimiter: String | CSV divisor. `Default: ','`                     |

 

## Examples

### Create a web-based spreadsheet

How to create a new spreadsheet from an HTML table element, a JS array, a CSV or a JSON file, as shown below: 

#### Create a spreadsheet from a JavaScript array

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

data = [
    ['Mazda', 2001, 2000],
    ['Peugeot', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        columns: [
            { title:'Model', width:'300px' },
            { title:'Price', width:'80px' },
            { title:'Model', width:'100px' }
        ]
    }]
});
</script>
</html>
```
#### Create a spreadsheet from a JSON object

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            { name:'Jorge', id:'3', age:'40', gender:'Male' },
            { name:'Cosme Sergio', id:'4', age:'48', gender:'Male' },
            { name:'Jorgina Santos', id:'5', age:'32', gender:'Female' },
        ],
        columns: [
            { type:'text', width:'300px', name:'id' },
            { type:'text', width:'200px', name:'name' },
            { type:'text', width:'100px', name:'age' },
            { type:'hidden', name:'gender' },
         ]
     }]
});
</script>
</html>
```

#### Create a spreadsheet from a CSV file

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/jspreadsheet/demo.csv',
        csvHeaders: true,
        tableOverflow: true,
        tableWidth: 600,
        columns: [
            { width:300 },
            { width:80 },
            { width:100 }
        ]
    }]
});
</script>
</html>
```

#### Create a spreadsheet from a existing HTML table element

{.ignore}
```html
<table id="spreadsheet">
    <thead>
        <tr>
            <td>POS</td>
            <td>TITLE</td>
            <td>ARTIST</td>
            <td>PEAK</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>DIVINELY UNINSPIRED TO A HELLISH EXTENT</td>
            <td>LEWIS CAPALDI</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2</td>
            <td>NO 6 COLLABORATIONS PROJECT</td>
            <td>ED SHEERAN</td>
            <td>1</td>
        </tr>
        <tr>
            <td>3</td>
            <td>THE GREATEST SHOWMAN</td>
            <td>MOTION PICTURE CAST RECORDING</td>
            <td>1</td>
        </tr>
    </tbody>
</table>

<br>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet')); 
</script>
</html>
```

 The XLSX parser is a premium JSS extension and it is not part in the native distribution. You need to activate the extension in your profile. This extension is subject to the XLSX version and the operations included in the file. You might experience differences in the final render or even limitations. We are constantly improving. So, if you wish to investigate limitations you are experiencing, please send a message to contact@jspreadsheet.com 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://jspreadsheet.com/v8/plugins/parser.js"></script>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Bind the XSLX parser to your JSS distribution
jspreadsheet.setExtensions({ parser });

// Create spreadsheet from the XLSX
jspreadsheet.parser({
    url: '/tests/Samples/sample.xlsx',
    onload: function(config) {
        // Create the spreadsheet
        jspreadsheet(document.getElementById('spreadsheet'), config);
    },
}); 
</script>
```
