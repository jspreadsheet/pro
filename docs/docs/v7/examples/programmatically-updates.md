title: Javascript Data Grid Updates
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, javascript programmatically changes
description: Learn how to apply changes to your table programmatically. Learn how to add, delete and move columns and rows, sorting, and other options.


# Programmatically table updates

## Insert, remove and move columns and rows

The following example shows how to manage data programmatically in your javascript spreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data1 = [
    [ 'Cheese', 10, 1.10, '=B1*C1'],
    [ 'Apples', 30, 0.40, '=B2*C2'],
    [ 'Carrots', 15, 0.45, '=B3*C3'],
    [ 'Oranges', 20, 0.49, '=B4*C4'],
];

let table1 = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data1,
    columns: [
        {
            title: 'Product',
            type: 'autocomplete',
            source:[ 'Apples','Bananas','Carrots','Oranges','Cheese','Pears' ],
            width:'300px',
        },
        {
            title: 'Quantity',
            type: 'number',
            width:'100px',
        },
        {
            title: 'Price',
            type: 'number',
            width:'100px',
        },
        {
            title: 'Total',
            type: 'number',
            width:'100px',
        },
    ],
    license: '###license###',
});

document.getElementById('btn1').onclick = function() { table1.insertColumn(); };
document.getElementById('btn2').onclick = function() { table1.insertColumn(2, 0, 1); };
document.getElementById('btn3').onclick = function() { table1.insertColumn(['0.99', '1.22', '3.11', '2.21']); };
document.getElementById('btn4').onclick = function() { table1.deleteColumn(); };
document.getElementById('btn5').onclick = function() { table1.moveColumn(0, 2); };
document.getElementById('btn6').onclick = function() { table1.hideColumn(0); };
document.getElementById('btn7').onclick = function() { table1.showColumn(0); };
</script>

<br>

<ol class='example cursor'>
    <li><button id="btn1">Insert a new blank column at the end</button></li>
    <li><button id="btn2">Insert two new blank columns at the beginning</button></li>
    <li><button id="btn3">Click to insert a new column with pre-populated values at the end of the table</button></li>
    <li><button id="btn4">Click to delete the last column</button></li>
    <li><button id="btn5">Click to move the first column to the third position</button></li>
    <li><button id="btn6">Hide the first column</button></li>
    <li><button id="btn7">Show the first column</button></li>
</ol>

</html>
```

## Updating column width and row height

Update the table width and height properties.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data2 = [
    [ 'Cheese', 10, 1.10, '=B1*C1'],
    [ 'Apples', 30, 0.40, '=B2*C2'],
    [ 'Carrots', 15, 0.45, '=B3*C3'],
    [ 'Oranges', 20, 0.49, '=B4*C4'],
];

let table2 = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data2,
    colHeaders: [ 'Product', 'Quantity', 'Price', 'Total' ],
    colWidths: [ 300, 100, 100, 100 ],
    columns: [
        { type: 'autocomplete', source:[ 'Apples','Bananas','Carrots','Oranges','Cheese','Pears' ] },
        { type: 'number' },
        { type: 'number' },
        { type: 'number' },
    ],
    rowResize:true,
    license: '###license###',
});

document.getElementById("setbtn").onclick = () => table2.setHeader(document.getElementById('col').value)
document.getElementById("getbtn").onclick = () => alert(table2.getHeader(document.getElementById('col').value))
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
 
