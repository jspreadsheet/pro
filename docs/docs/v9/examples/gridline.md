title: Spreadsheet Grid Line
keywords: Jspreadsheet, javascript, plugins, spreadsheet, rotate text, grid line, grid lines.
description: How to disable the spreadsheet grid line. Dealing with the grid lines.



# Spreadsheet Grid Line

The property **gridline: false** disables the worksheet grid line. Default: true  

## Examples

The following example shows how to disable the spreadsheet grid line. 

```html
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type="button" value="toggle()" id="togglebtn"></p>

<script>
let toggle = function(b) {
    if (worksheets[0].table.classList.contains('jss_nogridline')) {
        worksheets[0].table.classList.remove('jss_nogridline');
    } else {
        worksheets[0].table.classList.add('jss_nogridline');
    }
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
        gridline: false,
    }]
});

document.getElementById("togglebtn").onclick = () => toggle(worksheets[0]);
</script>
</html>
```
 
