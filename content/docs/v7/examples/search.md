title: Spreadsheet Custom Search
keywords: Jspreadsheet, Jexcel, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, native search, custom search.
description: How to customize the native spreadsheet search methods using onbeforesearch event.


# Custom spreadsheet search

Jspreadsheet Pro v7.7.1+ brings two new events `onbeforesearch` and `onsearch`. It is possible, using the event `onbeforesearch` to intercept the search, cancel or apply a different algorithm to customize the results to the user. In the following example, the event will cancel the native method, trigger an ajax request to query the results in the backend.

## How to process a search in the backend

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    csv: '/jspreadsheet/demo.csv',
    csvHeaders: true,
    search: true,
    pagination: 10,
    paginationOptions: [10,25,50,100],
    defaultColWidth: 100,
    license: '###license###',
    onbeforesearch: function(el, str, currentResults) {
        // Loading spin
        jSuites.loading.show();
        // Remote search processing
        jSuites.ajax({
            url: '/search',
            dataType: 'json',
            success: function(newResults) {
                // Set the rowIds that should be return to the user.
                // For this example the return will be [5,21]
                el.jexcel.results = newResults;
                // Execute the update
                el.jexcel.search.update();
                // Loading spin
                jSuites.loading.hide();
            }
        })

        // Cancel the native search
        return false;
    } 
});
</script>
</html>
```
  

## Onbeforesearch signature

{.ignore}
```javascript
onbeforesearch(el: DOMElement, str: String, rowNumbers: Array, search: Object) => arrayWithResults: Array

// The return should be an array with rowNumbers.
// In the following example the spreasheed will show three records.
// It is possible to cancel the search by return === false

return [10,99,1355]; 
```

| Argument   | description                                                 |
| -----------|-------------------------------------------------------------|
| el         | The jspreadsheet DOM container.                             |
| str        | The string used by the user                                 |
| rowNumbers | The current results, which can be intercepted and overwrite |
| search     | The object with the search handler methods                  |

  

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

