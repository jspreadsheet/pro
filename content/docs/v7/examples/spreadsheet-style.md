title: Customize the spreadsheet style CSS
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, table style, css
description: Learn how to customize your JavaScript spreadsheet and bring a better visual experience to your applications.


# Spreadsheet Style

You can define style for specific columns during the initialization, or through programmatically JavaScript calls.

After the initialization is still possible to manage the cell style programmatically using the method getStyle or setStyle.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['US', 'Cheese', 'Yes', '2019-02-12'],
    ['CA;US;UK', 'Apples', 'Yes', '2019-03-01'],
    ['CA;BR', 'Carrots', 'No', '2018-11-10'],
    ['BR', 'Oranges', 'Yes', '2019-01-12'],
];

let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
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
    license: '###license###',
});

document.getElementById("setbackgroundbtn").onclick = () => spreadsheet.setStyle('A2', 'background-color', 'yellow');
document.getElementById("changestylebtn").onclick = () => spreadsheet.setStyle({ A3:'font-weight: bold;', B3:'background-color: yellow;' });
document.getElementById("geta1stylebtn").onclick = () => document.getElementById('console').innerHTML = spreadsheet.getStyle('A1');
document.getElementById("gettablestylebtn").onclick = () => document.getElementById('console').innerHTML = JSON.stringify(spreadsheet.getStyle());
</script>

<p><textarea id='console' style='width:100%;max-width:600px;height:100px;'></textarea></p>

<button type="button" id="setbackgroundbtn">Set A2 background</button>
<button type="button" id="changestylebtn">Change A3, B3 style</button>
<button type="button" id="geta1stylebtn">Get A1 style</button>
<button type="button" id="gettablestylebtn">Get the table style</button>
</html>
```
 
