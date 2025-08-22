title: Searchable Javascript Data Grid
keywords: Jspreadsheet, Jexcel, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data
description: An example of utilizing search and pagination to tackle big datasets.


# Spreadsheet with search and pagination

How to create a javascript spreadsheet instance with a modern design including search and pagination using Jspreadsheet Version 7.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="table"></div>

<script>
let table = jspreadsheet(document.getElementById('table'), {
    csv: '/jspreadsheet/demo.csv',
    csvHeaders: true,
    search: true,
    pagination: 10,
    paginationOptions: [10,25,50,100],
    columns: [
        { type:'text', width:80 },
        { type:'text', width:200 },
        { type:'text', width:100 },
        { type:'text', width:200 },
        { type:'text', width:100 },
    ],
    license: '###license###',
    onchangepage: function(el, pageNumber, oldPage) {
        console.log('New page: ' + pageNumber);
    }
});

function skin(o) {
    if (document.getElementById('table').classList.contains('jexcel_modern')) {
        document.getElementById('table').classList.remove('jexcel_modern');
        o.value = 'Change to the modern theme';
    } else {
        document.getElementById('table').classList.add('jexcel_modern');
        o.value = 'Change to the default theme';
    }
}

document.getElementById("setdefault").onclick = (e) => skin(e.target)
</script>

<p><input type='button' value='Change to the default theme' id="setdefault"></p>
</html>
```
  

## Related events

| Events         | Description                                                                                                                                                                                             |
| ---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforesearch | `onbeforesearch(DOMElement el, String str, Array rowNumbers, Object search)`<br/>Action to be executed before the search. It can be used to cancel or to intercept and customize the searching process. |
| onsearch       | `onbeforesearch(DOMElement el, String str, Array rowNumbers, Object search)`<br/>After the search process is completed.                                                                                 |
| onchangepage   | `onchangepage(DOMElement el, Number pageNumber, Number oldPage, Number quantityPerPage)`<br/>Action to be executed before the page changes. It can cancel the action by returning false.                |
| onpage         | `onpage(DOMElement el, Number quantityPerPage, Number oldPage, Number pageNumber)`<br/>After the page has changed.                                                                                      |

 

## Related methods

| Method         | Description                                                |
| ---------------|------------------------------------------------------------|
| page           | `table.page(Number pageNumber)`<br/>Go to the page number. |
| whichPage      | `table.whichPage()`<br/>Return the current page.           |
| quantiyOfPages | `table.quantiyOfPages()`<br/>Get the quantity of pages.    |


