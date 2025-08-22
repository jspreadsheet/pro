title: Data Grid Column Filters
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, column filters
description: This section covers more about filters for columns. How to use and customize, and details of the available methods and events.



# Spreadsheet filters

This section provides more details about the methods, events, and properties related to the spreadsheet filters. Jspreadsheet gives developers a flexible way to interact programmatically with the filters and customize their behavior. 

## Documentation

### Methods

| Method                   | Description                                                                                           |
| -------------------------|-------------------------------------------------------------------------------------------------------|
| setFilter(number, array) | Apply filters programmatically.<br/>`setFilter(columnNumber: Number, values: String[])`               |
| getFilter(mixed)         | Currently applied filters to a column or to all columns.<br/>`getFilter(columnNumber: Number\|null)` |
| openFilter(number)       | Open the filter input.<br/>`openFilter(columnNumber: Number)`                                         |
| closeFilter()            | Close the filter input.<br/>`closeFilter()`                                                           |
| resetFilters()           | Reset all filters.<br/>`resetFilters()`                                                               |
| showFilter(number)       | Enable the filter icon for one or all columns.<br/>`showFilter(columnNumber: Number\|null)`          |
| hideFilter(number)       | Disable the filter icon for one or all columns.<br/>`hideFilter(columnNumber: Number\|null)`         |
| resetFilters(mixed)      | Reset the filters for one or all columns..<br/>`resetFilters(columnNumber: Number\|null)`            |

 

### Related events

It is possible to completely overwrite the filters' behavior using `onbeforefilter`. The event can be used to intercept andcancel or change the filter results.

| Events         | Description                                                                                                                                                                                                                                                                          |
| ---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforefilter | Action to be executed before applying the filter. Returns an array with the valid row numbers or returns false to return all rows.<br/>`onbeforefilter(worksheet: Object, terms: Object, rowNumbers: Number[])`. The object contains the terms used in each of the existing columns. |
| onfilter       | After the filter has been applied to the rows.<br/>`onfilter(worksheet: Object, terms: String[], rowNumbers: Number[])`                                                                                                                                                              |
| onopenfilter   | Customize the items available when the filter editor is open.<br/>`onopenfilter(worksheet: Object, column: number options: Object[]) => options \| undefined`                                                                                                                       |

 

### Initial Settings

| Property         | Description                                                      |
| -----------------|------------------------------------------------------------------|
| filters: boolean | Start the spreadsheet with the filters enabled. `Default: false` |

 

#### Enable the filter for individual columns

The properties `filter` is available on the columns object when creating a new spreadsheet. The property **filter: true** will enable the filter for the column specified. 

```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        filters: false,
        columns: [
            { type: 'text', title: 'Car', filter: true },
            { type: 'text' },
         ]
     }]
});
</script>
```
  

## Examples

### Interacting with the filters programmatically

Enable the filters on the initialization and apply or reset filters programmatically. 

   

Apply ['Honda'] programatically to the first worksheet, second column


```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type='button' value='Apply' id="applybtn">
<input type='button' value='Reset' id="resetbtn">

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

let apply = function() {
    worksheets[0].setFilter(1, ['Honda']);
}
let reset = function() {
    worksheets[0].resetFilters();
}

let data = [
    ['Jazz', 'Honda', '2019-02-12', true, '2000,00', '=E1*0.1', '#777700'],
    ['Civic', 'Honda', '2018-07-11', false, '4000,01', '=E2*0.1', '#007777'],
    ['Civic', 'Honda', '2018-07-12', true, '3200,01', '=E3*0.1', '#117717'],
    ['Picanto', 'Kia', '2018-07-12', false, '4000,00', '=E4*0.1', '#ffb74d'],
    ['Optima', 'Kia', '2020-01-12', false, '3000,00', '=E5*0.1', '#4db6ac'],
];

let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
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
                type: 'checkbox',
                title:'Stock',
                width:80
            },
            {
                type: 'number',
                title:'Price',
                mask:'$ #.##0,00',
                width:100,
                decimal:','
            },
            {
                type: 'text',
                width:110,
                title:'Commission',
                truncate: 3,
            },
            {
                title: 'Color',
                type: 'color',
                width:100,
                render:'square',
            },
         ]
     }]
});

document.getElementById("applybtn").onclick = apply
document.getElementById("resetbtn").onclick = reset
</script>
</html>
```
  

### Enable filters for individual columns

It is possible to enable the filters at the column level. This means you can use the filters for one specific column only. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let data2 = [
    ['Jazz', 'Honda', '2019-02-12'],
    ['Civic', 'Honda', '2018-07-11'],
    ['Civic', 'Honda', '2018-07-12'],
    ['Picanto', 'Kia', '2018-07-12'],
    ['Optima', 'Kia', '2020-01-12'],
];
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data2,
        filters: false,
        columns: [
            { type: 'text', filter: true, width: '300px' },
            { type: 'text' },
         ]
     }]
});
</script>
</html>
```
  

### Customize the spreadsheet filter behavior

Custom filters can be created using the onbeforefilter event. 

 In this example, if "Canada" is present in the terms in the first column filter, always display all rows.  

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['United States', 'Wholemeal', 'Yes', '2019-02-12'],
            ['Canada', 'Breakfast Cereals', 'Yes', '2019-03-01'],
            ['Canada', 'Grains', 'No', '2018-11-10'],
            ['Brazil', 'Pasta', 'Yes', '2019-01-12'],
        ],
        defaultColWidth: '140px',
        filters: true,
    }],
    onbeforefilter: function(worksheet, terms, results) {
        // Show all rows if Canada is one of the options
        if (terms[0] && terms[0].indexOf('Canada') >= 0) {
            return false;
        }
        return results;
    }
});
</script>
</html>
```
 
