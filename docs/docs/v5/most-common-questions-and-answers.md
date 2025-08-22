title: Most common implementation questions
keywords: Jspreadsheet, jquery, javascript, excel-like, spreadsheet, tables, most common questions
description: Library of the most common questions and answers



# Most common questions and answers

 

### 1. What is the best way to create odd/even rows on a Jspreadsheet spreadsheet and tables?

Solution: Adding the following CSS code on your project.



```css
.jspreadsheet tbody tr:nth-child(even) {
  background-color: #EEE9F1 !important;
}
```
  
### 2. How to transform multiple HTML static tables in dynamic Jspreadsheet tables?


{.ignore}
```javascript
let tables = document.querySelectorAll('table');
for (let i = 0; i < tables.length; i++) {
    Jspreadsheet(tables[i]);
}
```
  
### 3. How to disable paste over a Jspreadsheet spreadsheet?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    onbeforepaste: function(instance, data, x, y) {
        return false;
    }
});
</script>
```
  
### 4. How to intercept and change a pasted string over a Jspreadsheet table?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    onbeforepaste: function(instance, data, x, y) {
        data = data.replace(',', '.', data);
        return data;
    }
});
</script>
```
  
  5. ### How to overwrite a type of a cell over a column type?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    columns: [
        { type: 'text' },
        { type: 'text' }, 
    ],
    cells: {
        B2: { type:'number', mask:'$ #,##.00', decimal:'.' },
        B3: { type:'percent' },
    }
});
</script>
```
 **NOTE:** Only available from Jspreadsheet Pro v5.  
  6. ### How to disabled the javascript contextmenu of my spreadsheet?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    columns: [
        { type: 'text' },
        { type: 'text' }, 
    ],
    contextMenu: function() {
        return false;
    }
});
</script>
```
  
  7. ### How to change the default download filename?


{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    csvFileName: 'yourname'
});
</script>
```
 

