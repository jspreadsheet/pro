title: Spreadsheet Pagination
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, pagination
description: Learn how to intercept, cancel or customize the pagination behavior using the onbeforechangepage events.



# Pagination

Search and pagination are features that help with large spreadsheet datasets. It is also possible to intercept, cancel or customize the search behavior using the `onbeforechangepage` events. 

## Documentation

### Methods

The following methods are related to pagination.

| Method         | Description                                                          |
| ---------------|----------------------------------------------------------------------|
| page           | `page(pageNumber: Number) : void`<br/>Go to the page number.         |
| whichPage      | `whichPage() : void`<br/>Return the current page.                    |
| quantiyOfPages | `quantiyOfPages() : number`<br/>Get the quantity of pages available. |

 

### Events

The `onbeforesearch` can be used to intercept, change or cancel the search results.

| Event          | Description                                                                                                                                                                                                |
| ---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforesearch | `onbeforesearch(worksheet: Object, terms: String, results: Array, search: Object)`<br/>Action to be executed before the search. It can be used to cancel or to intercept and customize the search process. |
| onsearch       | `onbeforesearch(worksheet: Object, terms: String, rowNumber: Array, search: Object)`<br/>After the search process is completed.                                                                            |
| onchangepage   | `onbeforechangepage(worksheet: Object, newPage: Number, previousPage: Number, quantityPerPage: Number)`<br/>Action to be executed before the page changes. It can cancel the action by returning false.    |
| onpage         | `onchangepage(worksheet: Object, newPage: Number, previousPage: Number, quantityPerPage: Number)`<br/>After the page has changed.                                                                          |

 

### Initial Settings

The following properties are available through the initialization of the online spreadsheet.

| Property                 | Description                                                        |
| -------------------------|--------------------------------------------------------------------|
| search: boolean          | Enable or disable the search.                                      |
| pagination: number       | The number of items per page                                       |
| paginationOptions: array | The options for the user to select the number of results per page. |

 

## Examples

How to enable the search and pagination features on spreadsheet initialization. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<input type='button' value='Search for APP' id="searchbtn"/>
<input type='button' value='Go to the second page' id="gotosecond"/>

<script>
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/tests/demo.csv',
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
    }],
    onchangepage: function(el, pageNumber, oldPage) {
        console.log('New page: ' + pageNumber);
    }
});

document.getElementById("searchbtn").onclick = () => spreadsheet[0].search('app');
document.getElementById("gotosecond").onclick = () => spreadsheet[0].page(1);
</script>
</html>
```
 
