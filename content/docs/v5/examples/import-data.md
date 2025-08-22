title: Spreadsheets from CSV or JSON or XLSX
keywords: Jspreadsheet, javascript, excel-like, spreadsheet, loading data, csv, json, xlsx.
description: How to create a new spreadsheet based on different data sources, such as CSV, JSON, array, or XLSX files.



# Create a javascript spreadsheet

There are a few different ways to load data to your javascript spreadsheet shown in the next four examples below:


## Based on a external CSV file

The example below helps you to create a javascript spreadsheet table based on a remote CSV file, including the headers.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<p><button id='download'>Export my spreadsheet as CSV</button></p>

<script>
let mySpreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    csv:'/jspreadsheet/arts.csv',
    csvHeaders:true,
    tableOverflow:true,
    columns: [
        { type:'text', width:300 },
        { type:'text', width:80 },
        { type:'dropdown', width:120, source:['England','Wales','Northern Ireland','Scotland'] },
        { type:'text', width:120 },
        { type:'text', width:120 },
    ],
    license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById('download').onclick = function () {
    mySpreadsheet.download();
}
</script>
</html>
```
  
## Based on an external JSON file

In a similar way, you can create a table based on an external JSON file format by using the _url: directive_ as below. 

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
    jspreadsheet(document.getElementById('spreadsheet'), {
        url: '/v3/test.json',
        columns: [
            { type:'text', width:300 },
            { type:'text', width:100 },
        ],
        license: '39130-64ebc-bd98e-26bc4',
    });
</script>
</html>
```

## Based on an JSON object

The data directive can be used to define a JSON object. In this case you can define by the name directive the order of the columns.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
    jspreadsheet(document.getElementById('spreadsheet'), {
        data:[
            {
                name:'Richard',
                id:'3',
                age:'40',
                gender:'Male'
            },
            {
                name:'Cosme Sergio',
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
        ],
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
</script>
</html>
```

## Importing from a XLSX file

The following example imports the data from a XLSX file using a third party library, slightly customized in order to improve the CSS parser.

IMPORTANT: This is an experimental implementation and there is no guarantee your spreadsheet will be correctly parsed.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/jszip.js"></script>
<script src="https://bossanova.uk/jspreadsheet/v3/xlsx.js"></script>

<div id="spreadsheet"></div>

<script>
jspreadsheet.fromSpreadsheet('/jspreadsheet/list.xlsx', function(result) {
    if (! result.length) {
        console.error('Jspreadsheet: Something went wrong.');
    } else {
        for (let i = 0; i < result.length; i++) {
            let options = result[i];
            options.license = '39130-64ebc-bd98e-26bc4';
            options.tabs = true;
            jspreadsheet(document.getElementById('spreadsheet'), options);
        }
    }
});
</script>
</html>
```
 
**NOTE** : This example is based on a customized version of the free version of [Sheetjs](https://sheetjs.com/). There is no guarantee in the use of this library. Please consider purchase their professional version.

 
