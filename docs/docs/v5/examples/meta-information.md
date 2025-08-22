title: Data Grid Meta information
keywords: Javascript spreadsheet, javascript, javascript table, meta information,
description: Manage hidden information about your data grid cells using meta information methods. Learn how to set and reveal hidden information.



# Meta information

This feature helps you keep import information about the data grid cells hidden from users.

You can define any meta information during the initialization or programmatically after that thought getMeta or setMeta methods.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>
<textarea id='console' style='width:100%;height:80px;'></textarea>

<script>
let data = [
    ['US', 'Apples', 'Yes', '2019-02-12'],
    ['CA;US;UK', 'Carrots', 'Yes', '2019-03-01'],
    ['CA;BR', 'Oranges', 'No', '2018-11-10'],
    ['BR', 'Coconuts', 'Yes', '2019-01-12'],
];

let table = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'dropdown', title: 'Product Origin', width: '300px', url: '/jspreadsheet/countries', autocomplete: true, multiple: true },
        { type: 'text', title: 'Description', width: '200px' },
        { type: 'dropdown', title: 'Stock', width: '100px', source: ['No','Yes'] },
        { type: 'calendar', title: 'Best before', width: '100px' },
    ],
    meta:{
        A1: { myMeta: 'this is just a test', otherMetaInformation: 'other test' },
        A2: { info: 'test' }
    },
    license: '39130-64ebc-bd98e-26bc4',
    allowComments: true,
});

document.getElementById("setmetamulti").onclick = () => table.setMeta({ C1: { id:'1', y:'2019' }, C2: { id:'2' } });
document.getElementById("setmetab2").onclick = () => table.setMeta('B2', 'myMetaData', prompt('myMetaData:'));
document.getElementById("getmetaa1").onclick = () => document.getElementById('console').value = JSON.stringify(table.getMeta('A1'));
document.getElementById("getallmeta").onclick = () => document.getElementById('console').value  = JSON.stringify(table.getMeta());
</script>

<input type="button" id="setmetamulti" value="Set meta data for multiple columns"/><br/><br/>
<input type="button" id="setmetab2" value="Set a meta information for B2"/><br/><br/>
<input type="button" id="getmetaa1" value="Get the meta information for A1"/><br/><br/>
<input type="button" id="getallmeta" value="Get all meta information"/><br/><br/>

</html>
```
 
