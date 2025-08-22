title: Fullscreen Mode
keywords: Jspreadsheet, javascript, plugins, spreadsheet, full screen
description: Fullscreen mode allows the spreadsheet to fit all available space on the screen.

# Full Screen

How to expand the spreadsheet to fit all available space on fullscreen mode. 

```html
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<p><input type="button" value="Set as fullscreen" id="togglebtn"/></p>

<script>
let toggle = function(b) {
    worksheets[0].fullscreen(true)
}

// Set the JSS spreadsheet license
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        minDimensions: [8,0],
        data: [
            ['Mazda', 2001, 2000, 1],
            ['Peugeot', 2010, 5000, 1],
            ['Honda Fit', 2009, 3000, 1],
            ['Honda CRV', 2010, 6000, 0],
        ],
    }]
});

document.getElementById("togglebtn").onclick = (e) => toggle(e.target)
</script>
</html>
```
 
