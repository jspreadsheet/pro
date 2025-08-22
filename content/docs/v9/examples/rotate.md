title: Spreadsheet Text Rotation
keywords: Jspreadsheet, javascript, plugins, spreadsheet, rotate text
description: How to rotate the spreadsheet data grid cell text.



# Rotate The Cell Text

How to rotate the cell text between -90 to 90 degrees. 

## Documentation

### Methods

| Method               | Description                                                                                 |
| ---------------------|---------------------------------------------------------------------------------------------|
| rotate(mixed, value) | Rotate the spreadsheet cell text.<br/>`rotate(cell: string\|array, number: number) : void` |

 

### Initial Settings

The initial definition for a text rotation is using the property cells.  

## Examples

How to rotate the cell text between -90 to 90 degrees. 

```html
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="Rotate A1 (-90deg)" id="rotatebtn"></p>

<script>
let rotate = function(b) {
    worksheets[0].rotate('A1', -90);
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ],
        columns: [{},{},{},{ type:'checkbox' }],
        cells: {
            A1: { rotate: 90, }
        },
    }]
});

document.getElementById("rotatebtn").onclick = (e) => rotate(e.target)
</script>
</html>
```
 
