title: Customize the spreadsheet via javascript
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, table scripting
description: Learn how to tackle conditional actions in your spreadsheet based on the available data within it.


# Data Grid scripting and customizations

Customize the data grid tables behavior via JavaScript events.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>

<div id="spreasheet"></div>

<script>
let data2 = [
    ['BR', 'Cheese', 1, 3.99],
    ['CA', 'Apples', 0, 1.00],
    ['US', 'Carrots', 1, 0.90],
    ['GB', 'Oranges', 0, 1.20],
    ['CH', 'Chocolats', 1, 0.40],
    ['AR', 'Apples', 1, 1.10],
    ['AR', 'Bananas', 1, 0.30],
    ['BR', 'Oranges', 1, 0.95],
    ['BR', 'Pears', 1, 0.90],
    ['', '', '', '=ROUND(SUM(D1:D8), 2)'],
];

let table2 = jspreadsheet(document.getElementById('spreasheet'), {
    data:data2,
    columnSorting:false,
    columns: [
        {
            type: 'autocomplete',
            title: 'Country',
            width: '250',
            url:'/jspreadsheet/countries'
        },
        {
            type: 'autocomplete',
            title:'Food',
            width:'150',
            source: ['Apples','Bananas','Carrots','Oranges','Cheese','Kiwi','Chocolats','Pears']
        },
        {
            type: 'checkbox',
            title:'Stock',
            width:'100'
        },
        {
            type: 'number',
            title:'Price',
            width:'100'
        },
    ],
    updateTable:function(instance, cell, col, row, val, label) {
        // Number formating
        if (col == 3) {
            // Get text
            txt = cell.innerText;
            // Format text
            txt = numeral(txt).format('0,0.00');
            // Update cell value
            cell.innerHTML = '$ ' + txt;
        }

        // Total row
        if (row == 9) {
            if (col < 3) {
                cell.innerHTML = '';
            } 

            if (col == 2) {
                cell.innerHTML = 'Total';
                cell.style.fontWeight = 'bold';
            }

            cell.className = '';
            cell.style.backgroundColor = '#f46e42';
            cell.style.color = '#ffffff';
        }
    },
    license: '###license###',
});
</script>

<style>
.jexcel tbody tr:nth-child(even) {
  background-color: #EEE9F1 !important;
}
</style>
</html>
```
 
