title: Data Grid Column Filters
keywords: Jspreadsheet, javascript, multiple spreadsheets, column filters, filters
description: How to enable column filters on your javascript spreadsheets.



# Column filters

Enable the column filters on your javascript data grid.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['US', 'Cheese', '2019-02-12'],
    ['CA', 'Apples', '2019-03-01'],
    ['CA', 'Carrots', '2018-11-10'],
    ['BR', 'Oranges', '2019-01-12'],
];

mySpreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type: 'autocomplete', url:'/jspreadsheet/countries', width:'200px', },
        { type: 'text', width:'200px', },
        { type: 'calendar', width:'200px', }
     ],
     filters: true,
     columnDrag: true,
     license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
