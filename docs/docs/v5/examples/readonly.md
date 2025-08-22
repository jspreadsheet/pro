title: Data Grid Readonly Columns and Cells
keywords: Jspreadsheet, spreadsheet, javascript, javascript table, readonly
description: How to use readonly columns and cells. Learn how to programmatically change the readonly status of one cell.



# Readonly Columns and Cells

Setting a readonly the whole column or a single specific data grid cell.

```html
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let toggle = function(b) {
    if (table.isReadOnly('B2')) {
        table.setReadOnly('B2', false);
        b.value = 'Disable B2';
    } else {
        table.setReadOnly('B2', true);
        b.value = 'Enable B2';
    }
}

let data = [
    ['Mazda', 2001, 2000, 1],
    ['Peugeot', 2010, 5000, 1],
    ['Honda Fit', 2009, 3000, 1],
    ['Honda CRV', 2010, 6000, 0],
];

let table = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        {
            type: 'text',
            title:'Description',
            width:'200px',
            readOnly:true,
        },
        {
            type: 'text',
            title:'Year',
            width:'200px'
        },
        {
            type: 'text',
            title:'Price',
            width:'100px',
            mask:'#.##',
        },
        {
            type: 'checkbox',
            title:'Automatic',
            width:'100px'
        },
    ],
    updateTable: function(el, cell, x, y, source, value, label) {
        if (x == 2 && y == 2) {
            cell.classList.add('readonly');
        }
    },
    license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById("togglebtn").onclick = (e) => toggle(e.target)
</script>
<p><input type="button" value="Disabled B2" id="togglebtn"></p>
</html>
```
 
