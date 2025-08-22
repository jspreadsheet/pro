title: Vue Data Grid with Spreadsheet Controls
keywords: Jspreadsheet, Jexcel, javascript, using Jspreadsheet and Vue
description: An example of how to create vue data grid with spreadsheet controls.


# Vue Spreadsheet

Integrating jspreadsheet with Vue to create amazing data grid with spreadsheet controls.


[See a full example on codesandbox](https://codesandbox.io/embed/vue-default-template-p4hwn)

[Get a source code of a sample Vue project](https://github.com/jspreadsheet/jspreadsheet-with-vue)  

{.ignore}
```html
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>

<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<br>

<input type="button" value="Add new row" id="addrow" />

<script>
let options = {
    data:[[]],
    minDimensions:[10,10],
    license: '###license###',
}

let vm = new Vue({
    el: '#spreadsheet',
    mounted: function() {
        let spreadsheet = jspreadsheet(this.$el, options);
        Object.assign(this, spreadsheet);
    }
}); 

document.getElementById("addrow").onclick = () => vm.insertRow()
</script>
```
 
