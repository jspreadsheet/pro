title: Loading from a JSON object
keywords: Jspreadsheet, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, loading from json
description: How to create a dynamic table from a JSON object.



# Loading from JSON

Create a JSS data grid from json and keep the references.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    {
        name:'Richard',
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

jspreadsheet(document.getElementById('spreadsheet'), {
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
     license: '39130-64ebc-bd98e-26bc4',
});
document.getElementById("getjson").onclick = () => {
    document.getElementById('log').value = JSON.stringify(document.getElementById('spreadsheet').jspreadsheet.getJson())
}
</script>
<textarea id='log' style='width:100%;height:100px;'></textarea>
<input type='button' value='Get JSON' id="getjson"/>
</html>
```
 
