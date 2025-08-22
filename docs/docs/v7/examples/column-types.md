title: Data Grid Column Types
keywords: Jspreadsheet, Jexcel, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data
description: Learn more about the data grid column types. This example demonstrates all native column types and how to create your own custom type using Jspreadsheet Version 7.


# Data Grid Column Types

For each column type there are several other properties to customize the behavior, those properties and configurations should be referred to [jSuites Plugins](http://jsuites.net/).

  * text
  * numeric
  * hidden
  * dropdown
  * checkbox
  * radio
  * calendar
  * image
  * color
  * email
  * url
  * progressbar
  * rating
  * autonumber
  * richtext
  * percent
  * notes

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['Jazz', 'Honda', '2019-02-12', '', true, 2000.00, '#777700'],
    ['Civic', 'Honda', '2018-07-11', '', true, 4000.01, '#007777'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    filters: true,
    columns: [
        {
            type:'text',
            title:'Car',
            width:120
        },
        {
            type: 'dropdown',
            title:'Make',
            width:180,
            source:[
                "Alfa Romeo",
                "Audi",
                "Bmw",
                "Chevrolet",
                "Chrystler",
                "Dodge",
                "Ferrari",
                "Fiat",
                "Ford",
                "Honda",
                "Hyundai",
                "Jaguar",
                "Jeep",
                "Kia",
                "Mazda",
                "Mercedez-Benz",
                "Mitsubish",
                "Nissan",
                "Peugeot",
                "Porsche",
                "Subaru",
                "Suzuki",
                "Toyota",
                "Volkswagen"
              ]
        },
        {
            type: 'calendar',
            title:'Available',
            width:120,
            options:{ format:'DD/MM/YYYY' }
        },
        {
            type: 'image',
            title:'Photo',
            width:120
        },
        {
            type: 'checkbox',
            title:'Stock',
            width:80
        },
        {
            type: 'number',
            title:'Price',
            mask:'$ #.##0,00',
            width:100,
            decimal:',',
            disabledMaskOnEdition: true
        },
        {
            type: 'color',
            width:100,
            render:'square',
        },
     ],
     license: '###license###',
});
</script>
</html>
```
 
