title: Data Grid Appearance
keywords: Jspreadsheet, data grid, javascript, excel-like, spreadsheet, documentation, appearance
description: Change the spreadsheet appearance using the native modern CSS classes.



# Spreadsheet

## Layout

Currently there are two native layouts: the `default` and the `modern`. The latter can be selected by adding the `jss_modern` class to the spreadsheet DIV container. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="jspreadsheet"></div>

<script>
let toggle = function() {
    if (document.getElementById('jspreadsheet').classList.contains('jss_modern')) {
        document.getElementById('jspreadsheet').classList.remove('jss_modern');
    } else {
        document.getElementById('jspreadsheet').classList.add('jss_modern');
    }
}

jspreadsheet(document.getElementById('jspreadsheet'), {
    worksheets: [
        { minDimensions: [10,10] },
    ]
});

document.getElementById("togglebtn").onclick = () => toggle()
</script>

<button type="button" id="togglebtn">Toggle skin </button>

</html>
```
 
