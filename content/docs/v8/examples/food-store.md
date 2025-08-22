title: Basic Grocery Store Spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, cases, food store
description: A grocery store inventory management spreadsheet with search, pagination, image upload using Jspreadsheet Pro Version 8.



# Grocery Store

A basic spreadsheet example with search, pagination and image upload.


```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let data = [
    [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/220px-Vegetable-Carrot-Bundle-wStalks.jpg', 'Vegetables', 'Carrots', '2019-02-12', '14.00', '4' ],
    [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/1920px-Pink_lady_and_cross_section.jpg', 'Fruits', 'Apple', '2019-03-01', '45.00', '5'],
    [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Split_ananas.jpg/800px-Split_ananas.jpg', 'Fruits', 'Pinapples', '2018-11-10', '30.00', '4'],
    [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/1280px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg', 'Fruits', 'Plums', '2019-01-12', '14.00', '4' ],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: data,
        search: true,
        pagination: 10,
        paginationOptions: [10,25,50],
        columns: [
            { type: 'image', width: '110px', title: 'Photo' },
            {
                type: 'dropdown',
                width: '120px',
                title: 'Category',
                source: [
                    'Vegetables',
                    'Fruits',
                    'Grains, Beans and Nuts',
                    'Meat and Poultry',
                    'Fish and Seafood',
                    'Dairy Foods'
                ]
            },
            { type: 'text', width: '150px', title: 'Description' },
            { type: 'calendar', width: '100px', title: 'Best before' },
            { type: 'text', width: '80px', title: 'Price', mask: '$ #,##' },
            { type: 'rating', width: '90px', title: 'Rating', color: 'red' }
         ],
    }],
    onafterchanges: function(worksheet, records) {
        console.log(records);
    },
    onundo: function(worksheet, records) {
        console.log(records);
    },
    onredo: function(worksheet, records) {
        console.log(records);
    },
});
</script>
</html>
```
 
