title: Spreadsheet Search
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, search
description: Learn how to set up the spreadsheet search, and how to intercept, cancel or customize the search behavior using the onbeforesearch events.



# Search

The search feature works as a filter to help with large spreadsheet datasets. It is also possible to intercept, cancel or customize the search behavior using the onbeforesearch event. 

## Documentation

### Methods

The following methods are related to the spreadsheet search.

| Method      | Description                                                                              |
| ------------|------------------------------------------------------------------------------------------|
| search      | `search(terms: String) : void`<br/>Search for the rows that contain the specified terms. |
| resetSearch | `resetSearch() : void`<br/>Reset the search terms and show all rows again.               |
| showSearch  | `showSearch() : void`<br/>Show the search input box.                                     |
| hideSearch  | `hideSearch() : void`<br/>Hide the search input box.                                     |

 

### Events

The `onbeforesearch` can be used to intercept, change or cancel the search results.

| Event          | Description                                                                                                                                                                                                |
| ---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforesearch | `onbeforesearch(worksheet: Object, terms: String, results: Array, search: Object)`<br/>Action to be executed before the search. It can be used to cancel or to intercept and customize the search process. |
| onsearch       | `onsearch(worksheet: Object, terms: String, rowNumber: Array, search: Object)`<br/>After the search process is completed.                                                                            |

 

### Initial Settings

The following properties are available through the initialization of the online spreadsheet.

| Property        | Description               |
| ----------------|---------------------------|
| search: boolean | Enable or disable search. |

 

## Examples

### Search and pagination

Basic example with search and pagination. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<input type='button' value='Search for APP' id="btn1" />

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
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
    }]
});

document.getElementById("btn1").onclick = () => worksheets[0].search('app');
</script>
</html>
```
  

### Custom search

The following example shows how to intercept and change the search behavior by getting some information from the backend. For the sake of the testing, the server will return always [2,20,200] 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/tests/demo.csv',
        csvHeaders: true,
        search: true,
        pagination: 10,
        paginationOptions: [10,25,50,100],
        defaultColWidth: 150,
    }],
    onbeforesearch: function(worksheet, str, currentResults) {
        // Loading spin
        jSuites.loading.show();
        // Remote search processing
        jSuites.ajax({
            url: '/v8/test?q=' + str,
            dataType: 'json',
            success: function(newResults) {
                // Loading spin
                jSuites.loading.hide();
                // Set the rowIds that should be return to the user.
                if (newResults && newResults.length) {
                    worksheet.results = newResults;
                } else {
                    worksheet.results = null;
                }
                // Execute the update
                worksheet.updateSearch();
            }
        })

        // Cancel the native search
        return false;
    }
});
</script>
</html>
```
 
