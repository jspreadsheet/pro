title: JavaScript Data Grid Updates
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, javascript programmatically changes
description: Learn how to apply changes to your data grid programmatically. Learn how to add, delete and move columns and rows, sorting, and other options.



# Programmatically Data Grid Updates

## Insert, remove and move columns and rows

The following example shows how to manage data programmatically in your javascript spreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
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
    license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById("button1").onclick = () => table1.insertColumn()
document.getElementById("button2").onclick = () => table1.insertColumn(5, 0, 1, null);
document.getElementById("button3").onclick = () => table1.insertColumn([ '0.99', '1.22', '3.11', '2.21' ]);
document.getElementById("button4").onclick = () => table1.insertRow()
document.getElementById("button5").onclick = () => table1.insertRow([ 'Pears', 10, 0.59, '=B2*C2' ], 1);
document.getElementById("button6").onclick = () => table1.insertRow(10);
document.getElementById("button7").onclick = () => table1.deleteRow(0, 1);
document.getElementById("button8").onclick = () => table1.deleteColumn();
document.getElementById("button9").onclick = () => table1.moveRow(3, 0);
document.getElementById("button10").onclick = () => table1.moveColumn(0, 2);
</script>

<br>

<ol class='example'>
    <li><a id="button1">Insert a new blank column at the end of the table</a></li>
    <li><a id="button2">Insert five new blank columns at the beginning of the table</a></li>
    <li><a id="button3">Insert a new column with pre-populated values at the end of the table</a></li>
    <li><a id="button4">Insert a new blank row at the end of the table</a></li>
    <li><a id="button5">Insert a new pre-populated row just after the second row</a></li>
    <li><a id="button6">Create ten rows at the end of the table</a></li>
    <li><a id="button7">Delete the first row</a></li>
    <li><a id="button8">Delete the last column</a></li>
    <li><a id="button9">Move the forth row to the first position</a></li>
    <li><a id="button10">Move the first column to the third position</a></li>
</ol>

</html>
```

## Updating column width and row height

Update the table width and height properties.


```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
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
    license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById("setwidth").onclick = () => table2.setWidth(document.getElementById('columnNumber').value, 200)
document.getElementById("setheight").onclick = () => table2.setHeight(0, 100)
</script>

<select id='columnNumber'>
    <option value='0'>Column 1</option>
    <option value='1'>Column 2</option>
    <option value='2'>Column 3</option>
    <option value='3'>Column 4</option>
</select>

<input type='button' value='Set column width to 200px' id="setwidth"/>
<input type='button' value='Set first row to height 100px' id="setheight">

</html>
```
 
