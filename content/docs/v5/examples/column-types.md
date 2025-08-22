title: Data Grid Column types
keywords: Jspreadsheet, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data
description: Discover more about the native column types and learn to create your own custom data grid cell editors.



# Column types

Jspreadsheet Pro brings a few exclusive native column type implementations as below. There are several other properties to change the behavior of those columns, those are describe in more details in other examples.

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

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['Jazz', 'Honda', '2019-02-12', '', true, '$ 2.000,00', '#777700'],
    ['Civic', 'Honda', '2018-07-11', '', true, '$ 4.000,01', '#007777'],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        { type: 'text', title:'Car', width:'120px' },
        { type: 'dropdown', title:'Make', width:'200px', source:[ "Alfa Romeo", "Audi", "Bmw" ] },
        { type: 'calendar', title:'Available', width:'200px', options:{ format:'DD/MM/YYYY' } },
        { type: 'image', title:'Photo', width:'120px' },
        { type: 'checkbox', title:'Stock', width:'80px' },
        { type: 'numeric', title:'Price', width:'100px', mask:'$ #.##,00', decimal:',' },
        { type: 'color', width:'100px', render:'square', }
    ],
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
