title: Spreadsheet Search
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, search
description: Learn how to set up the spreadsheet search, and how to intercept, cancel or customize the search behavior using the onbeforesearch events.



# Spreadsheet Search

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
| onsearchstart  | `onsearchstart(worksheet: Object, terms: String)`<br/>It happens before all the search events.                                                                                                             |
| onsearchrow    | `onsearchrow(worksheet: Object, rowNumber: number, terms: String)`<br/>It helps to customize the searching process.                                                                                        |
| onbeforesearch | `onbeforesearch(worksheet: Object, terms: String, results: Array, search: Object)`<br/>Action to be executed before the search. It can be used to cancel or to intercept and customize the search process. |
| onsearch       | `onbeforesearch(worksheet: Object, terms: String, rowNumber: Array, search: Object)`<br/>After the search process is completed.                                                                            |

 

### Initial Settings

The following properties are available through the initialization of the online spreadsheet.

| Property        | Description               |
| ----------------|---------------------------|
| search: boolean | Enable or disable search. |

 

## Examples

 

### Data grid with search and pagination

Basic example with search and pagination. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type='button' value='Search for APP' id="searchbtn"/>

<script>
// Set your JSS license key (The following key only works for one day)
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

document.getElementById("searchbtn").onclick = () => worksheets[0].search('app');
</script>
</html>
```
 

### Custom local search

How to create a custom method to search for your rows. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
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
    oncreatecell: function(worksheet, td, col, row) {
        // JSS is creating a cell that should be highlighted
        if (worksheet.highlight && worksheet.highlight[row] && worksheet.highlight[row][col]) {
            td.classList.add('jss_highlight');
        }
    },
    onsearchstart: function(worksheet) {
        // Reset any potential previous highlighted cells
        if (worksheet.highlight) {
            for (let j = 0; j < worksheet.highlight.length; j++) {
                if (worksheet.highlight[j]) {
                    for (let i = 0; i < worksheet.highlight[j].length; i++) {
                        if (worksheet.records[j][i] && worksheet.records[j][i].element) {
                            worksheet.records[j][i].element.classList.remove('jss_highlight');
                        }
                    }
                }
            }
        }
        // Reset the highlighted and restart the search
        worksheet.highlight = [];
    },
    onsearchrow: function(worksheet, row, terms) {
        // Search for the term
        terms = new RegExp(terms, 'gi');
        // Value
        let value = null;
        // Result
        let test = false;
        // Get the values from the rows
        for (let col = 0; col < worksheet.options.columns.length; col++) {
            // Get the information from cell
            value = '' + worksheet.getValueFromCoords(col,row,true);
            // If find the term
            if (value.match(terms)) {
                // Highlight cell
                if (worksheet.records[row][col].element) {
                    worksheet.records[row][col].element.classList.add('jss_highlight');
                }
                // Highlighted cells container
                if (! worksheet.highlight[row]) {
                    worksheet.highlight[row] = [];
                }
                worksheet.highlight[row][col] = true;
                // Add to the result
                test = true;
            }
        }
        // Search
        return test;
    }
});
</script>
</html>
```
  

### Custom search using the backend

The following example shows how to intercept and change the search behavior by getting some information from the backend. For the sake of the testing, the server will return always [2,20,200] 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
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
            url: '/v9/test?q=' + str,
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
 
