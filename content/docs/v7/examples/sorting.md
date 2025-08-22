title: Sorting the Spreadsheet Columns
keywords: Jspreadsheet, Jexcel, spreadsheet, javascript, javascript table, sorting
description: An example of how to sort the data grid by columns via JavaScript.


# Data Grid Sorting

You can sort your javascript data grid by a double click in the header, using the context menu or by javascript as follow:

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['Mazda', 2001, 2000, '2006-01-01', '453.00', '2', '=E1*F1'],
    ['Peugeot', 2010, 5000, '2005-01-01', '23.00', '5', '=E2*F2'],
    ['Honda Fit', 2009, 3000, '2004-01-01', '214.00', '3', '=E3*F3'],
    ['Honda CRV', 2010, 6000, '2003-01-01', '56.11', '2', '=E4*F4'],
];

let table = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'text', width:300 },
        { type: 'text', width:80 },
        { type: 'text', width:100 },
        { type: 'calendar', width:100 },
        { type: 'number', width:100 },
        { type: 'number', width:100 },
        { type: 'number', width:100 },
    ],
    license: '###license###',
});
document.getElementById("orderby").onclick = () => table.orderBy(document.getElementById('columnNumber').value);
</script>

<select id='columnNumber'>
    <option value='0'>Column 1</option>
    <option value='1'>Column 2</option>
    <option value='2'>Column 3</option>
    <option value='3'>Column 4</option>
</select>

<input type='button' value='Sort column' id="orderby"/>

</html>
```


## Disable the javascript data grid sorting

The sorting is a native enabled feature, use the columnSorting: false directive in the initialization to disabled it.

```html
<div id="spreadsheet"></div>

<script>
let data = [
    ['Mazda', 2001, 2000, '2006-01-01'],
    ['Peugeot', 2010, 5000, '2005-01-01'],
    ['Honda Fit', 2009, 3000, '2004-01-01'],
    ['Honda CRV', 2010, 6000, '2003-01-01'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type: 'text', tile:'Model', width:300 },
        { type: 'text', tile:'Year', width:100 },
        { type: 'text', tile:'Price', width:100 },
        { type: 'text', tile:'Date', width:100 },
    ],
    columnSorting: false,
    license: '###license###',
});
</script>
```
 

## Related Events

| Event            | Description                                                                                 |
| -----------------|---------------------------------------------------------------------------------------------|
| **onbeforesort** | `onbeforesort(DOMElement element, Number column, Number direction, Array newValue) : Array` |
| **onsort**       | `onsort(DOMElement element, Number column, Number direction, Array newValue) : void`        |


