title: Getting started Jspreadsheet Pro Version 9
keywords: Jspreadsheet, Jexcel, spreadsheet, javascript, javascript tables, grid, excel-like spreadsheets, online spreadsheets
description: Getting started with Jspreadsheet Pro. Learning the basics, create your first online spreadsheet, more about the JavaScript data grid features and get more information about the JSS web-based spreadsheets.



# Getting started

Jspreadsheet is a Vanilla JavaScript application for creating online data grids that feel like a spreadsheet. It helps you create rich and interactive datasets to bring a great user experience to your web-based applications. 

## Installation

Please choose one of the following options: 

### To install jspreadsheet V9 using NPM 

```bash
$ npm install jspreadsheet@9
```
 

### Run jspreadsheet directly from JSDelivr CDN


{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/jspreadsheet@9/dist/index.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jspreadsheet@9/dist/jspreadsheet.min.css" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/jsuites/dist/jsuites.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsuites/dist/jsuites.min.css" type="text/css" />
```
  

### Alternatively from our website

{.ignore}
```html
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
```
 

Download and run jspreadsheet on your server or local machine\
* **Version 9**  <https://jspreadsheet.com/v9/jspreadsheet.zip>
* **Version 8**  <https://jspreadsheet.com/v8/jspreadsheet.zip>
* **Version 7**  <https://jspreadsheet.com/v7/jspreadsheet.zip> 

 

## License

The Pro distribution requires a license, but you can test in development for free. A trial certificate is valid for 30 days but can be renewed as many times as needed. Free technical support is available for 30 days.    

## Integrations

You can integrate JSS spreadsheet with the most important JavaScript frameworks. 

  * [Create an online spreadsheet using Angular](/docs/v9/angular)
  * [Create an online spreadsheet using React](/docs/v9/react)
  * [Create an online spreadsheet using Vue](/docs/v9/vue)

 

## Create a spreadsheet

You can created an online spreadsheet from an HTML table element, a JS array, a CSV, a JSON file or an excel XLSX file.  

### Create a spreadsheet from a JavaScript array

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000],
            ['Peugeot', 2010, 5000],
            ['Honda Fit', 2009, 3000],
            ['Honda CRV', 2010, 6000],
        ],
        columns: [
            { title:'Model', width:'300px' },
            { title:'Year', width:'80px' },
            { title:'Price', width:'100px' },
        ]
    }]
});
</script>
</html>
```
 

### Create a spreadsheet from a JSON object

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            { name:'Jorge', id:'3', age:'40', gender:'Male' },
            { name:'Cosme Sergio', id:'4', age:'48', gender:'Male' },
            { name:'Georgina Santos', id:'5', age:'32', gender:'Female' },
        ],
        columns: [
            { type:'text', width:'300px', name:'id' },
            { type:'text', width:'200px', name:'name' },
            { type:'text', width:'100px', name:'age' },
            { type:'hidden', name:'gender' },
         ]
    }]
});
</script>
</html>
```
 

### Create a spreadsheet from a CSV file

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/jspreadsheet/demo.csv',
        csvHeaders: true,
        tableOverflow: true,
        tableWidth: 600,
        columns: [
            { width: '300px' },
            { width: '100px' },
            { width: '100px' },
        ]
    }]
});
</script>
</html>
```

### Create a spreadsheet from a existing HTML table element

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<h4>The Official Top biggest albums of 2019</h4>

<table id="spreadsheet">
<thead>
<tr>
<td>POS</td>
<td>TITLE</td>
<td>ARTIST</td>
<td>PEAK</td>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>DIVINELY UNINSPIRED TO A HELLISH EXTENT</td>
<td>LEWIS CAPALDI</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>NO 6 COLLABORATIONS PROJECT</td>
<td>ED SHEERAN</td>
<td>1</td>
</tr>
<tr>
<td>3</td>
<td>THE GREATEST SHOWMAN</td>
<td>MOTION PICTURE CAST RECORDING</td>
<td>1</td>
</tbody>
</table>

<br>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet')); 
</script>
</html>
```
 

This feature requires an extension that is part of the Premium and Enterprise license. 

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/parser@2.1.0/dist/index.min.js"></script>

<script>
jspreadsheet.setLicense('###license###');

// Bind the XSLX parser to your JSS distribution
jspreadsheet.setExtensions({ parser });

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create spreadsheet from the XLSX
jspreadsheet.parser({
    url: '/tests/Samples/sample.xlsx',
    onload: function(config) {
        // Create the spreadsheet
        jspreadsheet(document.getElementById('spreadsheet'), config);
    },
}); 
</script>
</html>
```
 

This extension is subject to the XLSX version and the operations included in the file. You might experience differences in the final render or even limitations. We are constantly improving. So, if you wish to investigate limitations you are experiencing, please send a message to contact@jspreadsheet.com

 

## Destroy a spreadsheet

To destroy an existing spreadsheet and its data, you can use the method destroy as below. 

   

[Open this example on jsfiddle.net](https://jsfiddle.net/spreadsheet/xqoh1a60/)

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id='spreadsheet'></div>

<p><input type='button' value='Destroy' id="destroy" />
<input type='button' value='Create' id="create" /></p>

<script>
// Create a new spreadsheet
let create = function() {
    jspreadsheet(document.getElementById('spreadsheet'), {
    	worksheets: [ { minDimensions:[5,5] } ]
    });
}

// Destroy the spreadsheet
let destroy = function() {
    jspreadsheet.destroy(document.getElementById('spreadsheet'));
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [5,5],
    }]
});

document.getElementById("destroy").onclick = () => destroy()
document.getElementById("create").onclick = () => create()
</script>
</html>
```
 
