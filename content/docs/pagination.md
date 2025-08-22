title: Data Grid Pagination
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, data grid pagination, large data visualization, efficient data grid, high-performance data grid, paginated data grid, paginated data visualization
description: Efficiently handle large datasets in your HTML page with Jspreadsheet's worksheet pagination. Load and display millions of data records in a simple and efficient data grid, enhancing data visualization and optimizing user experience. Explore methods, settings, and configurations to customize pagination.

# Pagination

Jspreadsheet includes search and pagination to handle extensive spreadsheet data. It provides developers with customizable events and methods to seamlessly integrate pagination, optimizing application data navigation and display. 

## Documentation

### Methods

The following methods are related to pagination.

| Method         | Description                                                                                                                 |
| ---------------|-----------------------------------------------------------------------------------------------------------------------------|
| page           | `worksheet.page(pageNumber: Number) : void`<br/>Go to the page number.                                                      |
| whichPage      | `worksheet.whichPage(rowNumber?: Number) : void`<br/>Return the current page or which page you can find a row by its number |
| quantiyOfPages | `worksheet.quantiyOfPages() : number`<br/>Get the quantity of pages available.                                              |

 

### Events

The `onbeforechangepage` can be used to cancel the user action.

| Event              | Description                                                                                                                                                                                                |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforesearch     | `onbeforesearch(worksheet: Object, terms: String, results: Array, search: Object)`<br/>Action to be executed before the search. It can be used to cancel or to intercept and customize the search process. |
| onsearch           | `onsearch(worksheet: Object, terms: String, rowNumber: Array, search: Object)`<br/>After the search process is completed.                                                                            |
| onbeforechangepage | `onbeforechangepage(worksheet: Object, newPage: Number, previousPage: Number, quantityPerPage: Number)`<br/>Action to be executed before the page changes. It can cancel the action by returning false.    |
| onchangepage       | `onchangepage(worksheet: Object, newPage: Number, previousPage: Number, quantityPerPage: Number)`<br/>After the page has changed.                                                                          |

 

### Initial Settings

Initial configuration related to search and the pagination of your data grid.

| Property                 | Description                                                        |
| -------------------------|--------------------------------------------------------------------|
| search: boolean          | Enable or disable the search.                                      |
| pagination: number       | The number of items per page                                       |
| paginationOptions: array | The options for the user to select the number of results per page. |


### Translations

To customize the pagination controls for different languages, you can use the jspreadsheet.dictionary method.

{.ignore}
```javascript
jspreadsheet.setDictionary({
    'Search': 'Pesquisar',
    'Show': 'Exibir',
    'entries': 'entradas',
    'Showing {0} to {1} of {2} entries': 'Monstrando {0} até {1} de {2} entradas'
});
```

## Examples

### Data Grid Search and Pagination

How to enable the search and pagination features on spreadsheet initialization. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type='button' value='Search for APP' id="btn1"/>
<input type='button' value='Go to the second page' id="btn2"/></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet.setDictionary({
    'Search': 'Pesquisar',
    'Show': 'Mostrar',
    'entries': 'registros',
    'Showing {0} to {1} of {2} entries': 'Mostrando {0} até {1} de {2} registros',
});

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/tests/demo.csv',
        csvHeaders: true,
        search: true,
        pagination: 10,
        paginationOptions: [10,25,50,100,{ text: 'All', value: 999999 }],
        columns: [
            { type:'text', width:80 },
            { type:'text', width:200 },
            { type:'text', width:100 },
            { type:'text', width:200 },
            { type:'text', width:100 },
        ],
    }],
    onchangepage: function(el, pageNumber, oldPage) {
        console.log('New page: ' + pageNumber);
    }
});

document.getElementById("btn1").onclick = () => spreadsheet[0].search('app');
document.getElementById("btn2").onclick = () => spreadsheet[0].page(1);
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

const dictionary = {
    'Search': 'Pesquisar',
    'Show': 'Mostrar',
    'entries': 'registros',
    'Showing {0} to {1} of {2} entries': 'Mostrando {0} até {1} de {2} registros',
};


export default function App() {
  const spreadsheet = useRef();

  const columns = [
    { type: "text", width: 80 },
    { type: "text", width: 200 },
    { type: "text", width: 100 },
    { type: "text", width: 200 },
    { type: "text", width: 100 },
  ];

  const onchangepage = (el, pageNumber, oldPage) => {
    console.log("New page:", pageNumber);
  };

  const searchApp = () => {
    spreadsheet.current[0].search("app");
  };

  const goToSecondPage = () => {
    spreadsheet.current[0].page(1);
  };

  return (
    <div>
      <Spreadsheet
        ref={spreadsheet}
        license={license}
        dictionary={dictionary}
        onchangepage={onchangepage}
      >
        <Worksheet
          columns={columns}
          csv="/data.csv"
          csvHeaders={true}
          search={true}
          pagination={10}
          paginationOptions={[10, 25, 50, 100]}
        />
      </Spreadsheet>

      <p>
        <button onClick={searchApp}>Search for APP</button>
        <button onClick={goToSecondPage}>Go to the second page</button>
      </p>
    </div>
  );
}
```
```vue
<template>
  <div>
    <Spreadsheet ref="spreadsheet" :license="license" :dictionary="dictionary" :onchangepage="onchangepage">
      <Worksheet :columns="columns" csv="./tests/demo.csv" :csvHeaders="true" :search="true" :pagination="10" :paginationOptions="[10, 25, 50, 100]" />
    </Spreadsheet>

    <p>
      <button @click="searchApp">Search for APP</button>
      <button @click="goToSecondPage">Go to the second page</button>
    </p>
  </div>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
  components: {
    Spreadsheet,
    Worksheet,
  },
  data() {
    return {
      license:'###license###',
      dictionary: {
            'Search': 'Pesquisar',
            'Show': 'Mostrar',
            'entries': 'registros',
            'Showing {0} to {1} of {2} entries': 'Mostrando {0} até {1} de {2} registros',
        },
      columns: [
        { type: "text", width: 80 },
        { type: "text", width: 200 },
        { type: "text", width: 100 },
        { type: "text", width: 200 },
        { type: "text", width: 100 },
      ],
    };
  },
  methods: {
    onchangepage(el, pageNumber, oldPage) {
      console.log("New page: " + pageNumber);
    },
    searchApp() {
      this.$refs.spreadsheet.current[0].search("app");
    },
    goToSecondPage() {
      this.$refs.spreadsheet.current[0].page(1);
    },
  }
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from '@angular/core';

import jspreadsheet from 'jspreadsheet';
import 'jspreadsheet/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';

jspreadsheet.setLicense('###license###');

jspreadsheet.setDictionary({
    'Search': 'Pesquisar',
    'Show': 'Mostrar',
    'entries': 'registros',
    'Showing {0} to {1} of {2} entries': 'Mostrando {0} até {1} de {2} registros',
});

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div #spreadsheet></div>
    <input type="button" value="Search for APP" (click)="searchApp()" />
    <input type="button" value="Go to the second page" (click)="goToSecondPage()" />
  `,
})
export class AppComponent {
  @ViewChild('spreadsheet', { static: true }) spreadsheet!: ElementRef;
  worksheets: any[] = [];

  ngAfterViewInit() {
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          csv: '/assets/demo.csv',
          csvHeaders: true,
          search: true,
          pagination: 10,
          paginationOptions: [10, 25, 50, 100],
          columns: [
            { type: 'text', width: 80 },
            { type: 'text', width: 200 },
            { type: 'text', width: 100 },
            { type: 'text', width: 200 },
            { type: 'text', width: 100 },
          ],
        },
      ],
      onchangepage: (el: any, pageNumber: any, oldPage: any) => {
        console.log('New page:', pageNumber);
      },
    });
  }

  searchApp() {
    this.worksheets[0].search('app');
  }

  goToSecondPage() {
    this.worksheets[0].page(1);
  }
}   
```


### Quantity per Page

The following example demonstrates how to programmatically update the number of rows displayed per page.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type='button' value='Update to 50' id="btn1" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        csv: '/tests/demo.csv',
        csvHeaders: true,
        search: true,
        pagination: 10,
        columns: [
            { type:'text', width:80 },
            { type:'text', width:200 },
            { type:'text', width:100 },
            { type:'text', width:200 },
            { type:'text', width:100 },
        ],
    }]
});

document.getElementById("btn1").onclick = () => {
    // Update quantity per page
    spreadsheet[0].options.pagination = 50;
    // Re-render pagination
    spreadsheet[0].page(0);
}

</script>
</html>
```

## Related Content

- [Data Grid Search](/docs/search)

