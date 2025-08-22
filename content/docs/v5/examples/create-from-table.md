title: HTML Table To Data Grid
keywords: Jspreadsheet, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, data
description: Create a Jspreadsheet data grid from a simple HTML table.



# Create from a HTML table

From the v4+ is possible to create a Jspreadsheet spreadsheet from a static simple HTML table.

#### The Official Top 10 biggest albums of 2019

| POS | TITLE                                   | ARTIST                        | PEAK |
| ----|-----------------------------------------|-------------------------------|------|
| 1   | DIVINELY UNINSPIRED TO A HELLISH EXTENT | LEWIS CAPALDI                 | 1    |
| 2   | NO 6 COLLABORATIONS PROJECT             | ED SHEERAN                    | 1    |
| 3   | THE GREATEST SHOWMAN                    | MOTION PICTURE CAST RECORDING | 1    |
| 4   | WHEN WE ALL FALL ASLEEP WHERE DO WE GO  | BILLIE EILISH                 | 1    |
| 5   | STAYING AT TAMARA'S                     | GEORGE EZRA                   | 1    |
| 6   | BOHEMIAN RHAPSODY - OST                 | QUEEN                         | 3    |
| 7   | THANK U NEXT                            | ARIANA GRANDE                 | 1    |
| 8   | WHAT A TIME TO BE ALIVE                 | TOM WALKER                    | 1    |
| 9   | A STAR IS BORN                          | MOTION PICTURE CAST RECORDING | 1    |
| 10  | YOU'RE IN MY HEART                      | ROD STEWART                   | 1    |

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<h3>The Official Top 40 biggest albums of 2019</h3>

<table id="spreadsheet">
<thead>
<tr>
<td>POS</td>
<td>TITLE</td>
<td>ARTIST</td>
<td>PEAK</td>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>DIVINELY UNINSPIRED TO A HELLISH EXTENT</td>
<td>LEWIS CAPALDI</td>
<td>1</td>
</tr>
<tr>
<td>2</td>
<td>NO 6 COLLABORATIONS PROJECT</td>
<td>ED SHEERAN</td>
<td>1</td>
</tr>
<tr>
<td>3</td>
<td>THE GREATEST SHOWMAN</td>
<td>MOTION PICTURE CAST RECORDING</td>
<td>1</td>
</tr>
<tr>
<td>4</td>
<td>WHEN WE ALL FALL ASLEEP WHERE DO WE GO</td>
<td>BILLIE EILISH</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>STAYING AT TAMARA'S</td>
<td>GEORGE EZRA</td>
<td>1</td>
</tr>
<tr>
<td>6</td>
<td>BOHEMIAN RHAPSODY - OST</td>
<td>QUEEN</td>
<td>3</td>
</tr>
<tr>
<td>7</td>
<td>THANK U NEXT</td>
<td>ARIANA GRANDE</td>
<td>1</td>
</tr>
<tr>
<td>8</td>
<td>WHAT A TIME TO BE ALIVE</td>
<td>TOM WALKER</td>
<td>1</td>
</tr>
<tr>
<td>9</td>
<td>A STAR IS BORN</td>
<td>MOTION PICTURE CAST RECORDING</td>
<td>1</td>
</tr>
<tr>
<td>10</td>
<td>YOU'RE IN MY HEART</td>
<td>ROD STEWART</td>
<td>1</td>
</tr>
</tbody>
</table>

<br>

<script>
jspreadsheet(document.getElementById('spreadsheet')); 
</script>
</html>
```
