title: VueJS Data Grid with Spreadsheet-Like Controls
keywords: Jspreadsheet, Jexcel, javascript, Vue.js, data grid, spreadsheet-like controls, Vue data grid, Jspreadsheet integration, Vue integration, JavaScript data grid, spreadsheet controls in Vue
description: How to create powerful data grid applications with Excel-like controls using Jspreadsheet in Vue.js. Discover the flexibility of integrating Jspreadsheet with or without the Vue wrapper for seamless data management and user-friendly interfaces.

# Vue Spreadsheet

Introducing the new Vue wrapper for Jspreadsheet - the advanced data grid solution with intuitive spreadsheet-like controls. The Vue wrapper provides streamlined integration with easy implementation and customization options. 

## Documentation

### Using the vue data grid wrapper


First install the JSS data grid vue wrapper

```bash
$ npm install @jspreadsheet/vue
```
 

#### Create your first JSS vue data grid

How to create a web-based spreadsheet using the Jspreadsheet vue wrapper. 

{.ignore}
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
    <input type="button" value="getData" @click="getData()" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        getData() {
            console.log(this.$refs.spreadsheet.current[0].getData());
        }
    },
    data() {
        // Worksheet data
        const data = [
            ["US", "Cheese", "2019-02-12"],
            ["CA", "Apples", "2019-03-01"],
            ["CA", "Carrots", "2018-11-10"],
            ["BR", "Oranges", "2019-01-12"],
        ]

        // Columns
        const columns = [
            { width: "300px" },
            { width: "200px" },
            { width: "200px" }
        ]

        return {
            data,
            columns,
            license,
        }
    }
}
</script>
```
  

### Using the library

Alternatively, developers can use the library directly for more flexibility and customization in their implementation. 

#### Integration with Vue3


{.ignore}
```vue
<template>
  <Jspreadsheet :options="Options" />
</template>

<script>
import Jspreadsheet from "./components/Jspreadsheet";

const license = '###license###';

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
      license
    };
    return { Options };
  },
};
</script>
```
  

#### Integration with Vue2


{.ignore}
```html
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>

<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<br>

<input type="button" value="Add new row" onclick="vm.insertRow()" />

<script>
jspreadsheet.setLicense('###license###');

let options = {
    worksheets: [{
        data:[[]],
        minDimensions:[8,10],
    }],
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
 

### More Vue3 and Jspreadsheet examples

  * [Vue3 spreadsheet with actions](https://codesandbox.io/s/vue3-spreadsheet-with-actions-chx7dw)
  * [Vue3 spreadsheet](https://codesandbox.io/s/vue-spreadsheet-zpmf2)


