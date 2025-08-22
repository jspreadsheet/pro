title: How to merge the spreadsheet cells
keywords: Jspreadsheet, spreadsheet, javascript, javascript table, merged cells
description: An example of how to merge cells in your JavaScript data grid.



# Merged cells

You can merge cells on your spreadsheet in the table initialization or programmatically as follow:

The following methods are available for merge cells management: `setMerge, getMerge, removeMerge, destroyMerged`

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div><br/>
<div id="log"></div><br/>

<script>
let data = [
    ['Mazda', 2001, 2000, '2006-01-01'],
    ['Peugeot', 2010, 5000, '2005-01-01'],
    ['Honda Fit', 2009, 3000, '2004-01-01'],
    ['Honda CRV', 2010, 6000, '2003-01-01'],
];

let table = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    colHeaders: ['Model', 'Year', 'Price', 'Date'],
    colWidths: [ 300, 80, 100, 100 ],
    columns: [
        { type: 'text' },
        { type: 'text' },
        { type: 'text' },
        { type: 'calendar' },
    ],
    mergeCells:{
        A1:[2,1]
    },
    minDimensions:[10,10],
    license: '39130-64ebc-bd98e-26bc4',
});

document.getElementById("setmerge").onclick = () => table.setMerge('A3', 2, 3);
document.getElementById("removemerge").onclick = () => table.removeMerge('A3');
document.getElementById("getmerge").onclick = () => {
    document.getElementById("log").innerHTML = JSON.stringify(table.getMerge());
}
document.getElementById("destroymerge").onclick = () => table.destroyMerge();
</script>

<input type="button" value="setMerge('A3', 2, 3)" id="setmerge" />
<input type="button" value="removeMerge('A3')" id="removemerge" />
<input type="button" value="Get all merged cells" id="getmerge" />
<input type="button" value="Destroy all merged" id="destroymerge" />
</html>
```
 
