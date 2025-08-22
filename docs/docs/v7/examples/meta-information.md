title: Data Grid Meta information
keywords: Javascript spreadsheet, javascript, javascript table, meta information
description: Manage hidden information about your data grid cells using meta information methods. Learn how to set and reveal hidden information.



# Meta information

Jspreadsheet meta information is a feature to help keep hidden information about cells not visible for the users.

It is possible to interact with any meta information during the initialization or programmatically using `getMeta` or `setMeta` methods.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>
<textarea id="console"></textarea><br/>

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
    license: '###license###',
    allowComments: true,
});

document.getElementById("setmetamulti").onclick = () => table.setMeta({ C1: { id:'1', y:'2019' }, C2: { id:'2' } });
document.getElementById("setmetab2").onclick = () => table.setMeta('B2', 'myMetaData', prompt('myMetaData:'));
document.getElementById("resetmeta").onclick = () => table.resetMeta(['A1','B2','C2'])
document.getElementById("getmetaa1").onclick = () => document.getElementById('console').value = JSON.stringify(table.getMeta('A1'));
document.getElementById("getallmeta").onclick = () => document.getElementById('console').value  = JSON.stringify(table.getMeta());
</script>

<input type="button" id="setmetamulti" value="Set meta data for multiple columns"/>
<input type="button" id="setmetab2" value="Set a meta information for B2"/>
<input type="button" id="resetmeta" value="Reset the meta information for A1, B2, C2"/>
<input type="button" id="getmetaa1" value="Get the meta information for A1"/>
<input type="button" id="getallmeta" value="Get all meta information"/>

</html>
```
 
