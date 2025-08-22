title: Vue Spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, using Jspreadsheet and Vue
description: An example of how to integrate Jspreadsheet with Vue. Create an online spreadsheet with Vue.



# Vue Spreadsheet

## Vue3 Examples

How to create an online spreadsheet with Vue3. [Vue3 spreadsheet with actions](https://codesandbox.io/s/vue3-spreadsheet-with-actions-chx7dw) [Vue3 spreadsheet](https://codesandbox.io/s/vue-spreadsheet-zpmf2)  

### Source


{.ignore}
```vue
<template>
  <Jspreadsheet :options="Options" />
</template>

<script>
import Jspreadsheet from "./components/Jspreadsheet";

export default {
  components: {
    Jspreadsheet,
  },
  setup() {
    const Options = {
      worksheets: [
        {
          search: true,
          data: [
            [42, 42, 42, 42],
            [42, 42, 42, 42],
          ],
          columns: [
            { title: "First Column", width: 100 },
            { title: "Second Column", width: 150 },
            { title: "Third Column", width: 200 },
            { title: "Fourth Column", width: 250 },
          ],
        },
      ],
      license: "###license###",
    };
    return { Options };
  },
};
</script>
```
  


{.ignore}

```vue

<template>
  <div ref="sheetEl"/>
</template>
<script>
  import {ref, onMounted} from "content/docs/v9/vue";
  import jspreadsheet from "jspreadsheet";
  import "jspreadsheet/dist/jspreadsheet.css";
  import "jsuites/dist/jsuites.css";

  export default {
    name: "Jspreadsheet",
    props: {
      options: {
        type: Object,
        require: true,
      },
    },
    setup(props) {
      const options = props.options ? {...props.options} : {};
      const sheetEl = ref(null);
      onMounted(() => {
        jspreadsheet(sheetEl.value, options);
      });
      return {sheetEl};
    },
  };
</script>
```
  

## How to create an online spreadsheet

Create a web-based spreadsheet using Vue and Jspreadsheet. 

   

[See a full example on codesandbox](https://codesandbox.io/embed/vue-default-template-p4hwn)

[Get a source code of a sample Vue project](https://github.com/jspreadsheet/example-with-vue)  

{.ignore}
```html
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>

<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<br>

<input type="button" value="Add new row" onclick="vm.insertRow()" />

<script>
let options = {
    data:[[]],
    minDimensions:[8,10],
    license: '###license###',
}

let vm = new Vue({
    el: '#spreadsheet',
    mounted: function() {
        let spreadsheet = jspreadsheet(this.$el, options);
        Object.assign(this, spreadsheet);
    }
}); 
</script>
```
 
