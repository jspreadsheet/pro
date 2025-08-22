title: Jspreadsheet Pro 5 with Vue
keywords: Jspreadsheet, javascript, using Jspreadsheet and Vue
description: An example of how to integrate Jspreadsheet Pro version 5 with Vue.



# The Javascript Spreadsheet with Vue

Integrating Jspreadsheet Pro version 5 with Vue

[See a full example on codesandbox](https://codesandbox.io/embed/vue-default-template-p4hwn)

[Get a source code of a sample Vue project](https://github.com/jexcel/Jspreadsheet-with-vue)  

```html
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>

<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<br>

<input type="button" value="Add new row" onclick="vm.insertRow()" />

<script>
let options = {
    data:[[]],
    minDimensions:[10,10],
    license: '39130-64ebc-bd98e-26bc4',
}

let vm = new Vue({
    el: '#spreadsheet',
    mounted: function() {
        let spreadsheet = Jspreadsheet(this.$el, options);
        Object.assign(this, spreadsheet);
    }
}); 
</script>
```
 
