title: Getting started with Jspreadsheet Pro Version 7
keywords: Jspreadsheet, Jexcel, javascript, excel-like, spreadsheet, table, grid
description: Getting started with Jspreadsheet. Learning the basics, create instances, and more about the general spreadsheet configuration.



# Getting started

Jspreadsheet is a JavaScript vanilla plugin to create online data grids that fell like a spreadsheet. Bring life to your datasets and improve the user experience of your web-based applications.

## Installation

Please choose one of the following options:


### To install Jspreadsheet using NPM

```bash
$ npm install jspreadsheet-pro
```
 

### To integrate Jspreadsheet on your application using our CDN

{.ignore}
```html
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
```

To download Jspreadsheet and install on local project

<https://jspreadsheet.com/v7/jspreadsheet.zip>

## License key

The license key on version v7+ works as a certificate. Each certificate has an expiration date and should be updated in the same frequency of the chosen subscription plan. The developer should update that manually or they can create an automatic API request to update that automatically. For convenience, it is possible to activate the automatic certificate management, which allows Jspreadsheet to download a new certificate automatically. Apart from the latter option, there is no online validation. So, all certificates work and are validated in offline mode. To avoid causing any disruption, Jspreadsheet will continue working with an expired certificate for 30 days. After that, the spreadsheet would be shown in read-only mode. The certificate can be generated using an online account. For evaluation, a certificate can be generated using a demo account for free and the certificate would be valid for 30 days. 

[Create an demo account for free](/me/register)

  

## Create your first spreadsheet

A online spreadsheet can be created from an HTML table element, a JS array, a CSV or a JSON file, as below:

### Create a spreadsheet from a JavaScript array

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
let data = [
    ['Mazda', 2001, 2000],
    ['Peugeot', 2010, 5000],
    ['Honda Fit', 2009, 3000],
    ['Honda CRV', 2010, 6000],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { title:'Model', width:'300px' },
        { title:'Price', width:'80px' },
        { title:'Model', width:'100px' }
    ]
});
</script>
</html>
```
 

 

### Create a spreadsheet from a JSON object

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data: [
        { name:'Jorge', id:'3', age:'40', gender:'Male' },
        { name:'Cosme Sergio', id:'4', age:'48', gender:'Male' },
        { name:'Jorgina Santos', id:'5', age:'32', gender:'Female' },
    ],
    columns: [
        { type:'text', width:'300px', name:'id' },
        { type:'text', width:'200px', name:'name' },
        { type:'text', width:'100px', name:'age' },
        { type:'hidden', name:'gender' },
     ]
});
</script>
</html>
```

### Create a spreadsheet from a CSV file

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    csv: '/jspreadsheet/demo.csv',
    csvHeaders: true,
    tableOverflow: true,
    tableWidth: 600,
});
</script>
</html>
```

Create a spreadsheet from a existing HTML table element

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />

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
jspreadsheet(document.getElementById('spreadsheet')); 
</script>
</html>
```
 

NOTE: A table will be generate in read-only mode if no license is provided. Evaluation certificate is available for 30 days for free.

[See a working example](/docs/v7/examples/basic-spreadsheet)

### Destroy an existing spreadsheet

It is possible to destroy a spreadsheet, all data and events related.

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id='spreadsheet'></div>

<script>
let myInstance = jspreadsheet(document.getElementById('spreadsheet'), {
    csv: 'demo.csv',
    csvHeaders: true,
    columns: [
        { width: '300px' },
        { width: '100px' },
        { width: '100px' },
    ]
});

// If second argument is true will destroy
// all handlers and you can't create any other instance.
jspreadsheet.destroy(myInstance, true);
</script>
</html>
```
 
