title: Data Grid Footers
keywords: Jspreadsheet, javascript, multiple spreadsheets, formulas, table footer
description: Adding fixed formulas on the javascript data grid footer.



# Table footer

Adding fixed custom calculations in the footer of your javascript spreadsheets.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['Cheese', 10, 6.00, "=B1*C1"],
    ['Apples', 5, 4.00, "=B2*C2"],
    ['Carrots', 5, 1.00, "=B3*C3"],
    ['Oranges', 6, 2.00, "=B4*C4"],
];

// A custom method to SUM all the cells in the current column

let SUMCOL = function(instance, columnId) {
    let total = 0;
    for (let j = 0; j < instance.options.data.length; j++) {
        if (Number(instance.records[j][columnId-1].element.innerHTML)) {
            total += Number(instance.records[j][columnId-1].element.innerHTML);
        }
    }
    return total;
}

let table = jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    minDimensions: [4,10],
    columnDrag:true,
    footers: [
        ['Total','=SUMCOL(TABLE(), COLUMN())','=SUMCOL(TABLE(), COLUMN())','=SUMCOL(TABLE(), COLUMN())']
    ],
    columns: [{
        width:'400px',
    }],
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
  
