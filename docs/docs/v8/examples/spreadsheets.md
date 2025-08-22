Examples



# Spreadsheet

## Create a spreadsheet from a JavaScript array

How to create a basic online spreadsheet from a JavaScript array. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    [ '1', '2', '3', '4', '5', '6' ],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    minDimensions: [ 10,10 ],
    license: `###license###`,
});
</script>
</html>
```
  

## Create a spreadsheet from a JavaScript

How to create a basic online spreadsheet from a JavaScript array. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    [ '1', '2', '3', '4', '5', '6' ],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    minDimensions: [ 10,10 ],
    license: `###license###`,
});
</script>
</html>
```
 
