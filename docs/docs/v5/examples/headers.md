title: Nested headers and column header updates
keywords: Jspreadsheet, spreadsheet, javascript, header updates, nested headers, javascript table
description: Enable nested headers in your spreadsheet and learn how to set or get header values.



# Spreadsheet Headers

## Nested headers

The JSS spreadsheet implements nested headers natively though the directive **nestedHeaders**
 

## Programmatically Header Updates

There are a few options to allow the user to interact with the header titles. Using the contextMenu over the desired header, by pressing an selected header and holding the click for 500ms, or via javascript.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['BR', 'Cheese', 1],
    ['CA', 'Apples', 0],
    ['US', 'Carrots', 1],
    ['GB', 'Oranges', 0],
];

let table = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns: [
        {
            type: 'autocomplete',
            title: 'Country',
            width: '300',
            url: '/jspreadsheet/countries'
        },
        {
            type: 'dropdown',
            title: 'Food',
            width: '150',
            source: ['Apples','Bananas','Carrots','Oranges','Cheese']
        },
        {
            type: 'checkbox',
            title: 'Stock',
            width:'100'
        },
    ],
    nestedHeaders:[
        [
            {
                title: 'Supermarket information',
                colspan: '3',
            },
        ],
        [
            {
                title: 'Location',
                colspan: '1',
            },
            {
                title: ' Other Information',
                colspan: '2'
            }
        ],
    ],
    columnDrag:true,
    license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById("setbtn").onclick = () => table.setHeader(document.getElementById('col').value)
document.getElementById("getbtn").onclick = () => alert(table.getHeader(document.getElementById('col').value))
</script>

<br/><select id='col'>
    <option value="0">Column 0</option>
    <option value="1">Column 1</option>
    <option value="2">Column 2</option>
</select>

<input type='button' value='Set' id="setbtn"/>
<input type='button' value='Get' id="getbtn"/>

</html>
```

## Programmatically Update Nested Headers

| Method                                              | Description                                                                       |
| ----------------------------------------------------|-----------------------------------------------------------------------------------|
| **updateNestedHeader = function(x, y, properties)** | Update the colspan, rowspan or title from the one nestedHeader coordinates (x, y) |


