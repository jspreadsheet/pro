title: Create a Data Grid From a JSON object
keywords: Jspreadsheet, Jexcel, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, loading from json
description: How to create a dynamic data grid from a JSON object.


# Data Grid from JSON

Create a data grid from a JSON reference.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    {
        name:'Jorge',
        id:'3',
        age:'40',
        gender:'Male'
    },
    {
        name:'Rogerio Sergio',
        id:'4',
        age:'48',
        gender:'Male'
    },
    {
        name:'Jorgina Santos',
        id:'5',
        age:'32',
        gender:'Female'
    },
    {
        name:'Arnaldo Antunes',
        id:'6',
        age:'63',
        gender:'Male'
    },
];

let instance = jspreadsheet(document.getElementById('spreadsheet'), {
    json: data,
    columns: [
        {
            type:'text',
            width:'300',
            name:'id'
        },
        {
            type:'text',
            width:'200',
            name:'name'
        },
        {
            type:'text',
            width:'100',
            name:'age'
        },
        {
            type:'hidden',
            name:'gender'
        },
     ],
     license: '###license###',
});
document.getElementById("getjson").onclick = function() {
    console.log(instance.getJson())
    console.log(document.getElementById('log'))
    document.getElementById('log').value = JSON.stringify(instance.getJson())
}
</script>
<textarea id='log' style='width:400px;height:100px;'></textarea><br/>
<input type='button' id="getjson" value='Get JSON' />
   
</html>
```
