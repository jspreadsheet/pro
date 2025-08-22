title: Data Grid Headers
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, headers
description: Learn to add custom headers to your spreadsheet and how to change those programmatically.



# Data Grid Headers

This section covers creating spreadsheets with custom headers and how to change them programmatically. By default, the user can change the header titles using the context menu or with a long click. 

## Documentation

### Methods

The following methods are available to update the headers programmatically.

| Method     | Description                                                                                                                                                                                                 |
| -----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getHeader  | Get the header title by column number.<br/>`getHeader(column: Number) : void`<br/>@param {mixed} - get the header title by column number starting on zero.                                                  |
| getHeaders | Get all headers as an Array of strings or a string separated by commas.<br/>`getHeader(getAsArray: Boolean) : void`<br/>@param {mixed} - get all headers a string or as an Array.                           |
| setHeader  | Set a custom header title.<br/>`setHeader(colNumber: Number, newValue?: String) : void` <br/>@param {number} - column number starting on zero <br/>@param {string} - New title. Empty to reset the headers. |

 

### Initial Settings

The header titles and tooltip can be defined through the attributes title and tooltip within the column settings as follow: 

```html
<div id="table"></div>

<script>
jspreadsheet(document.getElementById('table'), {
    columns: [
        {
            type: 'text',
            title: 'Country',
            tooltip: 'This is the country',
            width: '300px',
        }
    ]
});
</script>
```
  

### Available Events

| Event          | Description                                                                                                                        |
| ---------------|------------------------------------------------------------------------------------------------------------------------------------|
| onchangeheader | When changing the header title.<br/>`onchangeheader(worksheet: Object, column: Number, newValue: String, oldValue: String) : void` |

 

## Examples

### Updates to the headers

The following example starts the spreadsheet with basic headers with the option to update the titles programmatically. 

Change the headers programmatically

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['BR', 'Cheese', 1],
    ['CA', 'Apples', 0],
    ['US', 'Carrots', 1],
    ['GB', 'Oranges', 0],
];

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        columns: [
            {
                type: 'autocomplete',
                title: 'Country',
                tooltip: 'Country of origin',
                width: '200px',
                url: '/jspreadsheet/countries'
            },
            {
                type: 'dropdown',
                title: 'Food',
                tooltip: 'Category of food',
                width: '100px',
                source: ['Apples','Bananas','Carrots','Oranges','Cheese']
            },
            {
                type: 'checkbox',
                title: 'Stock',
                tooltip: 'Quantity on stock',
                width: '100px'
            },
            {
                type: 'number',
                title: 'Price',
                tooltip: 'Retail pricing',
                width: '100px'
            },
        ],
    }]
});
document.getElementById("setbtn").onclick = () => table[0].setHeader(document.getElementById('col').value)
document.getElementById("getbtn").onclick = () => alert(table[0].getHeader(document.getElementById('col').value))
</script>

<br/><select id='col'>
    <option value="0">Column 0</option>
    <option value="1">Column 1</option>
    <option value="2">Column 2</option>
    <option value="3">Column 3</option>
</select>

<input type='button' value='Set' id="setbtn"/>
<input type='button' value='Get' id="getbtn"/>

</html>
```
 
