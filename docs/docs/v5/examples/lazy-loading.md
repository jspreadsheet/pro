title: Dealing with Large Spreadsheets Data Sets
keywords: Jspreadsheet, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data
description: An example of tackling large spreadsheet datasets using Jspreadsheet Pro.



# Lazy loading

The following table is dealing with 2 million+ cells. The lazy loading method allows render up to 80 rows at the same time and will render other rows based on the scrolling.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
mySpreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    csv:'/jspreadsheet/data.csv',
    csvHeaders:false,
    tableOverflow:true,
    lazyLoading:true,
    loadingSpin:true,
    columns: [
        { type:'text', width:'200px', title:'Name' },
        { type:'text', width:'300px', title:'Tags' },
        { type:'rating', width:'100px', title:'Rating' },
    ],
    license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById('download').onclick = function () {
    mySpreadsheet.download();
}
<script>

</script>
</html>
```
