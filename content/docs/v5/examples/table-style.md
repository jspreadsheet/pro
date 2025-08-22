title: Spreadsheet CSS Style
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, table style, css
description: Learn how to customize your JavaScript spreadsheet and bring a better visual experience to your applications.



# Custom Javascript Spreadsheet Style

## How to apply style to your data grids

You can define the CSS for specific columns during the initialization, or through programmatically javascript calls.

But, after the initialization is still possible to manage the cell style programmatically using the method getStyle or setStyle.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data1 = [
    ['US', 'Cheese', 'Yes', '2019-02-12'],
    ['CA;US;UK', 'Apples', 'Yes', '2019-03-01'],
    ['CA;BR', 'Carrots', 'No', '2018-11-10'],
    ['BR', 'Oranges', 'Yes', '2019-01-12'],
];
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data1,
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
    license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById("setbackgroundbtn").onclick = () => table.setStyle('A2', 'background-color', 'yellow');
document.getElementById("changestylebtn").onclick = () => table.setStyle({ A3:'font-weight: bold;', B3:'background-color: yellow;' });
document.getElementById("geta1stylebtn").onclick = () => document.getElementById('console').innerHTML = table.getStyle('A1');
document.getElementById("gettablestylebtn").onclick = () => document.getElementById('console').innerHTML = JSON.stringify(table.getStyle());
</script>

<p><textarea id='console' style='width:100%;max-width:600px;height:100px;'></textarea></p>

<button type="button" id="setbackgroundbtn">Set A2 background</button>
<button type="button" id="changestylebtn">Change A3, B3 style</button>
<button type="button" id="geta1stylebtn">Get A1 style</button>
<button type="button" id="gettablestylebtn">Get the table style</button>
</html>
```
 
