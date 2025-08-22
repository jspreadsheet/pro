Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

![export plugin icon](img/jspreadsheet-export-icon.png)

Jspreadsheet export to XLS
==========================

How to convert from jspreadsheet to a XLS file.  
  

Author
------

Copyright [Jspreadsheet Team](https://jspreadsheet.com).  
  

License
-------

This is an open source plugin.  
  

License
-------

Official [github](https://github.com/jspreadsheet/jspreadsheet-export) repository  
  

Example
-------

See a working example: [export to XLS](/v7/examples/jspreadsheet-export)  
  

Source code
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/plugins/download.js"></script>

<div id="spreadsheet"></div>

<input type='button' value='Export to XLS'
    onclick="jspreadsheet.download(document.getElementById('spreadsheet'))">

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    minDimensions: [10,10],
});
</script>
</html>
```
