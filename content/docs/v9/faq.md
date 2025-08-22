title: Most common questions
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, most common questions and answers
description: The most common technical questions about JSS - the online spreadsheet.



# Most frequently asked questions and answers



#### 1. Jspreadsheet converts a string to a number.

This is because autoCasting is set as default. It tries to improve the calculations by converting a string to a number. Solution: set autoCasting: false as a property in the column definitions.


{.ignore}
```javascript
columns: [{
    type:'text', autoCasting: false
}]
```
 
#### 2. What is the best way to create odd/even rows in an online spreadsheets?

Solution: Add the following CSS code to your project.



```css
.jss tbody tr:nth-child(even) {
  background-color: #EEE9F1 !important;
}
```
 
#### 3. How do I transform multiple HTML static tables to dynamic Jspreadsheet tables?

{.ignore}
```javascript
let tables = document.querySelectorAll('table');
for (let i = 0; i < tables.length; i++) {
    jspreadsheet(tables[i]);
}
```
 
#### 4. How do I disable paste over a JSS spreadsheet?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
    onbeforepaste: function(instance, data, x, y) {
        return false;
    }
});
</script>
```
 
#### 5. How can I intercept and change a pasted string over a JSS spreadsheet?



{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
    onbeforepaste: function(instance, data, x, y) {
        data = data.replace(',', '.', data);
        return data;
    }
});
</script>
```
 
#### 6. How do I overwrite a type of a cell over a column type?



{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        columns: [
            { type: 'text' },
            { type: 'text' }, 
        ],
        cells: {
            B2: { type:'number', mask:'$ #,##0.00', decimal:'.' },
            B3: { type:'percent' },
        }
    }
});
</script>
```
 **NOTE:** Only available from Jspreadsheet Pro v7.
#### 7. How do I disabled the JavaScript contextmenu in my spreadsheet?



{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        columns: [
            { type: 'text' },
            { type: 'text' }, 
        ],
        cells: {
            B2: { type:'number', mask:'$ #,##0.00', decimal:'.' },
            B3: { type:'percent' },
        }
    },
    contextMenu: function() {
        return false;
    }
});
</script>
```
 
#### 8. How do I change the default download filename?



{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
    csvFileName: 'yourname'
});
</script>
```
 
#### 9. How do I add an external action without losing the spreadsheet focus?

Working example:

<https://jsfiddle.net/spreadsheet/v5tbxg01/>
#### 10. How do I keep the selection in the spreadsheet when clicking on an element outside the sheet?

Add a class to the external element: **jss_object**

<https://jsfiddle.net/spreadsheet/rg1tdh0z/>
#### 11. How do I automatic align numbers to the right using JSS spreadsheet?

Working example:

<https://jsfiddle.net/spreadsheet/Lfxm6qw1/>
#### 12. How do I automatic add unique ID to the cells?

Working example:

<https://jsfiddle.net/spreadsheet/8svzf9pc/> 

