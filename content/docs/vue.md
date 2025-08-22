title: VueJS Data Grid with Spreadsheet-Like Controls
keywords: Jspreadsheet, Jexcel, javascript, Vue.js, data grid, spreadsheet-like controls, Vue data grid, Jspreadsheet integration, Vue integration, JavaScript data grid, spreadsheet controls in Vue
description: How to create powerful data grid applications with Excel-like controls using Jspreadsheet in Vue.js. Discover the flexibility of integrating Jspreadsheet with or without the Vue wrapper for seamless data management and user-friendly interfaces.

# Vue Spreadsheet

Introducing the new Vue wrapper for Jspreadsheet. The advanced data grid solution with intuitive spreadsheet-like controls. The Vue wrapper provides streamlined integration with easy implementation and customization options. 

> **Updates**\
> From version 11, please import the CSS files as below.
>
> `import "jsuites/dist/jsuites.css";`\
> `import "jspreadsheet/dist/jspreadsheet.css";`

## Documentation

### Using the JSpreadsheet Vue Data Grid Wrapper

To integrate JSpreadsheet with Vue, use the `@jspreadsheet/vue` wrapper for a seamless data grid experience. This wrapper simplifies the setup and provides Vue-specific features for building interactive spreadsheets.

{.secondary .vue}
> **Note:**\
> When using the VueJS wrapper, the spreadsheet's `style` prop is renamed to `styles` to prevent conflicts with Vue's built-in `style` attribute.

#### Installation

Install the JSpreadsheet Vue wrapper using npm:

```bash
$ npm install @jspreadsheet/vue
```
 

#### Create Your First Vue Data Grid with Spreadsheet Controls

How to create a web-based spreadsheet using the Jspreadsheet Vue Wrapper. 

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
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

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

The following example demonstrates how to use JSpreadsheet without a dedicated wrapper. By leveraging the library directly, developers gain greater flexibility and control, enabling highly customized implementations tailored to their specific needs. 

#### Integration with Vue 3

{.ignore}
```vue
<template>
  <div ref="spreadsheetRef"></div>
</template>

<script setup>
import jspreadsheet from 'jspreadsheet';
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import { onMounted, ref } from 'vue'

jspreadsheet.setLicense('###license###');

const options = {
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
};

const spreadsheetRef = ref(null)

onMounted(() => {
  jspreadsheet(spreadsheetRef.value, options)
})
</script>
```

#### Creating a Custom Editor with a Vue 3 Component

The following example demonstrates how to integrate a Vue 3 component as a custom editor in JSpreadsheet, enabling advanced interactivity and tailored functionality within spreadsheet cells.

[See this example on stackblitz](https://stackblitz.com/edit/vitejs-vite-p8oviskx)

{.ignore}
```vue
<template>
  <Spreadsheet ref="spreadsheet" :license="license">
    <Worksheet :data="data" :columns="columns" /> </Spreadsheet
  ><br />
  <input type="button" value="getData" @click="getData()" />
  <input type="button" value="setValue('A1', false)" @click="setValue()" />
</template>

<script>
  import { h, createApp, ref } from 'vue';
  import { Spreadsheet, Worksheet } from '@jspreadsheet/vue';
  import InputSwitch from 'primevue/inputswitch';
  import PrimeVue from 'primevue/config';

  const license =
      'MTRmM2M2NTI1M2YyY2VlOWM4ZGU0ZDZlYjZkYjY0ZTZkNTkxNjU0YTA5ZmUwNGRkMjA5MzZiYjk5NjU5MzA2MzlkYTQwYWEwMzQ3MzRmM2Q3NjYxMWUwMDE0YzIxMDQ5MmE3YTNhZjU4NGIwZTllNzRmY2EyNDFlNmViZjhhMGUsZXlKamJHbGxiblJKWkNJNklqTTFObUV4T1RKaU56a3hNMkl3TkdNMU5EVTNOR1F4T0dNeU9HUTBObVUyTXprMU5ESTRZV0lpTENKdVlXMWxJam9pVUdGMWJDQkliMlJsYkNJc0ltUmhkR1VpT2pFM09EQTNPRFk0TURBc0ltUnZiV0ZwYmlJNld5SnFjMmhsYkd3dWJtVjBJaXdpWTNOaUxtRndjQ0lzSW1wemNISmxZV1J6YUdWbGRDNWpiMjBpTENKalpIQnVMbWx2SWl3aWFXNTBjbUZ6YUdWbGRITXVZMjl0SWl3aWMzUmhZMnRpYkdsMGVpNWpiMjBpTENKM1pXSmpiMjUwWVdsdVpYSXVhVzhpTENKM1pXSmpiMjUwWVdsdVpYSXVhVzhpTENKM1pXSWlMQ0pzYjJOaGJHaHZjM1FpWFN3aWNHeGhiaUk2SWpNMUlpd2ljMk52Y0dVaU9sc2lkamNpTENKMk9DSXNJblk1SWl3aWRqRXdJaXdpZGpFeElpd2labTl5YlhNaUxDSm1iM0p0ZFd4aElpd2ljbVZ1WkdWeUlpd2ljR0Z5YzJWeUlpd2lhVzF3YjNKMFpYSWlMQ0oyWVd4cFpHRjBhVzl1Y3lJc0ltTnZiVzFsYm5Seklpd2ljMlZoY21Ob0lpd2lZMmhoY25Seklpd2ljSEpwYm5RaUxDSmlZWElpTENKemFHVmxkSE1pTENKemFHRndaWE1pTENKelpYSjJaWElpTENKbWIzSnRZWFFpTENKbWIzSnRZWFFpTENKcGJuUnlZWE5vWldWMGN5SmRmUT09';

  const Editor = {
    createCell(cell, value, x, y, instance) {
      // Create reactive state for the cell
      const isChecked = ref(value === 'true' || value === true);

      // Create Vue app for the cell
      createApp({
        setup() {
          return () =>
              h(InputSwitch, {
                modelValue: isChecked.value,
                'onUpdate:modelValue': (newValue) => {
                  isChecked.value = newValue; // Update reactive state
                  instance.setValueFromCoords(x, y, newValue, true); // Force update
                },
              });
        },
      }).mount(cell);

      cell.vueState = isChecked;
    },
    updateCell(cell, value, x, y, instance) {
      if (cell.vueState) {
        const newValue = !!(value === 'true' || value === true || value === 1);
        if (cell.vueState.value !== newValue) {
          cell.vueState.value = newValue;
        }
      }
    },
    openEditor(cell) {
      cell.vueState.value = !cell.vueState.value;
      return false; // No separate editor
    },
    closeEditor() {
      return false; // Not used
    },
    destroyCell(cell) {
      // Cleanup Vue app
      if (cell.vueApp) {
        cell.vueApp.unmount();
        cell.vueState = null;
      }
    },
  };

  export default {
    components: {
      Spreadsheet,
      Worksheet,
    },
    methods: {
      getData() {
        console.log(this.$refs.spreadsheet.current[0].getData());
      },
      setValue() {
        console.log(this.$refs.spreadsheet.current[0].setValue('A1', false));
      },
    },
    data() {
      // Worksheet data
      const data = [
        [true, 'Cheese', ''],
        [true, 'Apples', ''],
        [true, 'Carrots', ''],
        [false, 'Oranges', ''],
      ];

      // Columns
      const columns = [{ type: Editor }];

      return {
        data,
        columns,
        license,
      };
    },
  };
</script>
```


#### Integration with Vue2


{.ignore}
```html
<html>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>

<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
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

  * [Vue3 Spreadsheet with actions](https://codesandbox.io/s/vue3-spreadsheet-with-actions-chx7dw)
  * [Vue3 Spreadsheet](https://codesandbox.io/s/vue-spreadsheet-zpmf2)
  * [Vue3 Custom Editor](https://stackblitz.com/edit/vitejs-vite-p8oviskx)


