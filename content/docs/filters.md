title: Data Grid Filters in Jspreadsheet
keywords: Jspreadsheet, data grid filters, JavaScript, Excel-like functionality, spreadsheet column filters, filter customization, filter methods, filter events
description: This section offers detailed insights into Jspreadsheet data grid column filters, including their settings, methods, and associated events.

# Spreadsheet Column Filters

Version 11 introduces an enhanced column filter feature, offering increased speed and flexibility. This section delves into the extensive customization options for data grid filters, including relevant methods, events, and properties.

{.green}
> **Introducing Cell Range Filters**\
> Starting from version 11.6.0, we've introduced Excel-compatible cell range filters. You can now define filters using cell ranges, such as 'A1:B4', to apply filtering to specific data ranges in your spreadsheet.

## Documentation

### Methods

| Method                       | Description                                                                                             |
|------------------------------|---------------------------------------------------------------------------------------------------------|
| setFilter(number, array)     | Apply filters programmatically.<br/>`setFilter(columnNumber: Number, values: String[])`                 |
| getFilter(mixed)             | Currently applied filters to a column or to all columns.<br/>`getFilter(columnNumber?: Number)`         |
| openFilter(number, boolean)  | Open the filter input.<br/>`openFilter(columnNumber: Number, getAsSets?: boolean)`                      |
| closeFilter()                | Close the filter input.<br/>`closeFilter()`                                                             |
| resetFilters()               | Reset all filters.<br/>`resetFilters()`                                                                 |
| showFilter(number\|string)   | Enable the filter icon for one or all columns.<br/>`showFilter(columnOrCellRange?: Number\|String)`     |
| hideFilter(number)           | Disable the filters.<br/>`hideFilter(columnNumber?: Number)`                                            |
| resetFilters(mixed, boolean) | Reset the filters for one or all columns..<br/>`resetFilters(columnNumber?: Number, destroy?: Boolean)` |

 

### Related events

You can intercept, cancel, or modify the filter results using the `onbeforefilter` event.

| Events         | Description                                                                                                                                                                                                                                                                                                                          |
| ---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforefilter | This method is executed before the filter is applied. It can return an array of valid row numbers or false to cancel the event. If no return or undefined is returned, the event will proceed without any modifications.<br/>`onbeforefilter(worksheet: Object, terms: Object, rowNumbers: Number[]) => Boolean \| Number[] \| void` |
| onfilter       | Called after the filter has been applied.<br/>`onfilter(worksheet: Object, terms: String[], rowNumbers: Number[])`                                                                                                                                                                                                                   |
| onopenfilter   | Allows customization of filter editor options upon opening.<br/>`onopenfilter(worksheet: Object, column: number options: Object[]) => options \| promisse \| undefined`                                                                                                                                                              |

 

### Initial Settings

| Property                 | Description                                                      |
|--------------------------|------------------------------------------------------------------|
| filters: boolean\|string | Start the spreadsheet with the filters enabled. `Default: false` |

 

#### Configuring Column-Specific Filters

To activate a filter for a specific column, use the `filter` attribute in the `column` object during `spreadsheet initialization`. 

{.ignore-execution}
```html
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
jspreadsheet.setLicense('###license###')

jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Jazz', 'Honda'],
            ['Civic', 'Honda'],
            ['Civic', 'Honda'],
            ['Picanto', 'Kia'],
            ['Optima', 'Kia'],
        ],
        filters: false,
        columns: [
            { type: 'text', title: 'Car', filter: true },
            { type: 'text' },
         ]
     }]
});
</script>
```

```jsx
import React, {useRef} from "content/docs/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Columns
    const columns = [
        {type: 'text', filter: true, width: '300px'},
        {type: 'text'},
    ]
    const data = [
        ['Jazz', 'Honda'],
        ['Civic', 'Honda'],
        ['Civic', 'Honda'],
        ['Picanto', 'Kia'],
        ['Optima', 'Kia'],
    ]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet data={data} columns={columns} filters={false}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" filters={true} />
    </Spreadsheet>
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
    data() {
        // Data grid column definitions
        const columns = [
            { type: 'text', filter: true, width: '300px' },
            { type: 'text' },
        ]

        const data = [
            ['Jazz', 'Honda'],
            ['Civic', 'Honda'],
            ['Civic', 'Honda'],
            ['Picanto', 'Kia'],
            ['Optima', 'Kia'],
        ]

        return {
            data,
            columns,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ['Jazz', 'Honda'],
                    ['Civic', 'Honda'],
                    ['Civic', 'Honda'],
                    ['Picanto', 'Kia'],
                    ['Optima', 'Kia'],
                ],
                filters: false,
                columns: [
                    { type: 'text', title: 'Car', filter: true },
                    { type: 'text' },
                 ]
             }]
        });
    }
}
```
 
### Translations

You can translate the filter controls by utilizing the command provided below. 

{.ignore}
```javascript
// Translating the spreadsheet filter controls to French
jspreadsheet.setDictionary({
    'Contains': 'Contient',
    'Does not contain': 'Ne contient pas',
    'Begins with': 'Commence par',
    'Ends with': 'Se termine par',
    'Equal': 'Égal à',
    'Not equal': 'Pas égal à',
    'Greater than': 'Plus grand que',
    'Lower than': 'Moins que',
    'Search': 'Recherche',
    'No matches': 'Pas de correspondance',
    'Ok': 'Ok',
    'Cancel': 'Annuler',
});
```
  

## Examples

### Column Filters Methods

Initiate the `column filters` upon setup and then programmatically apply or reset them as needed.

Apply ['Honda'] programmatically to the second column on the first `worksheet`. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<p><input type='button' value='Apply' id="btn1" />
<input type='button' value='Reset' id="btn2" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

const apply = function() {
    worksheets[0].setFilter(1, ['Honda']);
}
const reset = function() {
    worksheets[0].resetFilters();
}

const worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Jazz', 'Honda', '2019-02-12', true, '2000,00', '=E1*0.1', '#777700'],
            ['Civic', 'Honda', '2018-07-11', false, '4000,01', '=E2*0.1', '#007777'],
            ['Civic', 'Honda', '2018-07-12', true, '3200,01', '=E3*0.1', '#117717'],
            ['Picanto', 'Kia', '2018-07-12', false, '4000,00', '=E4*0.1', '#ffb74d'],
            ['Optima', 'Kia', '2020-01-12', false, '3000,00', '=E5*0.1', '#4db6ac'],
        ],
        filters: true,
        columns: [
            {
                type:'text',
                title:'Car',
                // Start the data grid with the following filters applied for this column
                filters: ['Civic','Picanto'],
            },
            {
                type: 'dropdown',
                title:'Make',
                source:[
                    "Alfa Romeo",
                    "Audi",
                    "Bmw",
                    "Chevrolet",
                    "Chrystler",
                    "Dodge",
                    "Ferrari",
                    "Fiat",
                    "Ford",
                    "Honda",
                    "Hyundai",
                    "Jaguar",
                    "Jeep",
                    "Kia",
                    "Mazda",
                    "Mercedez-Benz",
                    "Mitsubish",
                    "Nissan",
                    "Peugeot",
                    "Porsche",
                    "Subaru",
                    "Suzuki",
                    "Toyota",
                    "Volkswagen"
                  ]
            },
            {
                type: 'calendar',
                title:'Available',
                options:{ format:'DD/MM/YYYY' }
            },
            {
                type: 'checkbox',
                title:'Stock',
            },
            {
                type: 'number',
                title:'Price',
                mask:'$ #.##0,00',
                decimal:','
            },
            {
                type: 'text',
                title:'Commission',
                truncate: 3,
            },
            {
                title: 'Color',
                type: 'color',
                render:'square',
            },
         ]
     }]
});

document.getElementById("btn1").onclick = apply
document.getElementById("btn2").onclick = reset
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Jazz', 'Honda', '2019-02-12', true, '2000,00', '=E1*0.1', '#777700'],
        ['Civic', 'Honda', '2018-07-11', false, '4000,01', '=E2*0.1', '#007777'],
        ['Civic', 'Honda', '2018-07-12', true, '3200,01', '=E3*0.1', '#117717'],
        ['Picanto', 'Kia', '2018-07-12', false, '4000,00', '=E4*0.1', '#ffb74d'],
        ['Optima', 'Kia', '2020-01-12', false, '3000,00', '=E5*0.1', '#4db6ac'],
    ]
    // Columns
    const columns = [
        {
            type:'text',
            title:'Car',
            // Start the data grid with the following filters applied for this column
            filters: ['Civic','Picanto'],
        },
        {
            type: 'dropdown',
            title:'Make',
            source:[
                "Alfa Romeo",
                "Audi",
                "Bmw",
                "Chevrolet",
                "Chrystler",
                "Dodge",
                "Ferrari",
                "Fiat",
                "Ford",
                "Honda",
                "Hyundai",
                "Jaguar",
                "Jeep",
                "Kia",
                "Mazda",
                "Mercedez-Benz",
                "Mitsubish",
                "Nissan",
                "Peugeot",
                "Porsche",
                "Subaru",
                "Suzuki",
                "Toyota",
                "Volkswagen"
              ]
        },
        {
            type: 'calendar',
            title:'Available',
            options:{ format:'DD/MM/YYYY' }
        },
        {
            type: 'checkbox',
            title:'Stock',
        },
        {
            type: 'number',
            title:'Price',
            mask:'$ #.##0,00',
            decimal:','
        },
        {
            type: 'text',
            title:'Commission',
            truncate: 3,
        },
        {
            title: 'Color',
            type: 'color',
            render:'square',
        },
    ]

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                    <Worksheet data={data} columns={columns} filters />
            </Spreadsheet>
            <input type='button' value='Apply' onClick={() => spreadsheet.current[0].setFilter(1, ['Honda'])}/>
            <input type='button' value='Reset' onClick={() => spreadsheet.current[0].resetFilters()}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns"/>
    </Spreadsheet>
    <input type='button' value='Apply' @click="setFilter(1, ['Honda'])">
    <input type='button' value='Reset' @click="resetFilters()">
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
        setFilter(column, filter) {
            this.$refs.spreadsheet.current[0].setFilter(column, filter);
        },
        resetFilters() {
            this.$refs.spreadsheet.current[0].resetFilters();
        },
    },
    data() {
        // Data
        const data = [
            ['Jazz', 'Honda', '2019-02-12', true, '2000,00', '=E1*0.1', '#777700'],
            ['Civic', 'Honda', '2018-07-11', false, '4000,01', '=E2*0.1', '#007777'],
            ['Civic', 'Honda', '2018-07-12', true, '3200,01', '=E3*0.1', '#117717'],
            ['Picanto', 'Kia', '2018-07-12', false, '4000,00', '=E4*0.1', '#ffb74d'],
            ['Optima', 'Kia', '2020-01-12', false, '3000,00', '=E5*0.1', '#4db6ac'],
        ];

        // Columns
        const columns = [
            {
                type:'text',
                title:'Car',
                // Start the data grid with the following filters applied for this column
                filters: ['Civic','Picanto'],
            },
            {
                type: 'dropdown',
                title:'Make',
                source:[
                    "Alfa Romeo",
                    "Audi",
                    "Bmw",
                    "Chevrolet",
                    "Chrystler",
                    "Dodge",
                    "Ferrari",
                    "Fiat",
                    "Ford",
                    "Honda",
                    "Hyundai",
                    "Jaguar",
                    "Jeep",
                    "Kia",
                    "Mazda",
                    "Mercedez-Benz",
                    "Mitsubish",
                    "Nissan",
                    "Peugeot",
                    "Porsche",
                    "Subaru",
                    "Suzuki",
                    "Toyota",
                    "Volkswagen"
                  ]
            },
            {
                type: 'calendar',
                title:'Available',
                options:{ format:'DD/MM/YYYY' }
            },
            {
                type: 'checkbox',
                title:'Stock',
            },
            {
                type: 'number',
                title:'Price',
                mask:'$ #.##0,00',
                decimal:','
            },
            {
                type: 'text',
                title:'Commission',
                truncate: 3,
            },
            {
                title: 'Color',
                type: 'color',
                render:'square',
            },
        ];

        return {
            columns,
            data,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from '@angular/core';
import jspreadsheet from 'jspreadsheet';

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense(
  '###license###'
);

@Component({
  selector: 'app-root',
  template: `
        <div #spreadsheet></div>
        <input type='button' value='Apply' (click)="applyFilter()">
        <input type='button' value='Reset' (click)="resetFilters()">
    `,
})
export class AppComponent {
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  // Worksheets
  worksheets: jspreadsheet.worksheetInstance[];

  // Methods to handle button clicks
  applyFilter() {
    if (this.worksheets && this.worksheets[0]) {
      this.worksheets[0].setFilter(1, ['Honda']);
    }
  }

  resetFilters() {
    if (this.worksheets && this.worksheets[0]) {
      this.worksheets[0].resetFilters();
    }
  }

  // Create a new data grid
  ngAfterViewInit() {
    // Create spreadsheet
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          data: [
            [
              'Jazz',
              'Honda',
              '2019-02-12',
              true,
              '2000,00',
              '=E1*0.1',
              '#777700',
            ],
            [
              'Civic',
              'Honda',
              '2018-07-11',
              false,
              '4000,01',
              '=E2*0.1',
              '#007777',
            ],
            [
              'Civic',
              'Honda',
              '2018-07-12',
              true,
              '3200,01',
              '=E3*0.1',
              '#117717',
            ],
            [
              'Picanto',
              'Kia',
              '2018-07-12',
              false,
              '4000,00',
              '=E4*0.1',
              '#ffb74d',
            ],
            [
              'Optima',
              'Kia',
              '2020-01-12',
              false,
              '3000,00',
              '=E5*0.1',
              '#4db6ac',
            ],
          ],
          filters: true,
          columns: [
            {
              type: 'text',
              title: 'Car',
            },
            {
              type: 'dropdown',
              title: 'Make',
              source: [
                'Alfa Romeo',
                'Audi',
                'Bmw',
                'Chevrolet',
                'Chrystler',
                'Dodge',
                'Ferrari',
                'Fiat',
                'Ford',
                'Honda',
                'Hyundai',
                'Jaguar',
                'Jeep',
                'Kia',
                'Mazda',
                'Mercedez-Benz',
                'Mitsubish',
                'Nissan',
                'Peugeot',
                'Porsche',
                'Subaru',
                'Suzuki',
                'Toyota',
                'Volkswagen',
              ],
            },
            {
              type: 'calendar',
              title: 'Available',
              options: { format: 'DD/MM/YYYY' },
            },
            {
              type: 'checkbox',
              title: 'Stock',
            },
            {
              type: 'number',
              title: 'Price',
              mask: '$ #.##0,00',
              decimal: ',',
            },
            {
              type: 'text',
              title: 'Commission',
              truncate: 3,
            },
            {
              title: 'Color',
              type: 'color',
              render: 'square',
            },
          ],
        },
      ],
    });

    this.worksheets[0].setFilter(0, ['Civic', 'Picanto']);
  }
}
```

### Activating Filters on Specific Columns

Filters can be implemented at the `column level`, allowing their application to individual columns as required. 


```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'Jazz', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Picanto', 'Kia' ],
            [ 'Optima', 'Kia' ],
        ],
        filters: false,
        columns: [
            { type: 'text', filter: true, width: '300px' },
            { type: 'text' },
         ]
     }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [ 'Jazz', 'Honda' ],
        [ 'Civic', 'Honda' ],
        [ 'Civic', 'Honda' ],
        [ 'Picanto', 'Kia' ],
        [ 'Optima', 'Kia' ],
    ]
    // Columns
    const columns = [
        { type: 'text', filter: true, width: '300px' },
        { type: 'text' },
    ]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} filters={false} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns"/>
    </Spreadsheet>
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
    data() {
        // Data
        const data = [
            [ 'Jazz', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Picanto', 'Kia' ],
            [ 'Optima', 'Kia' ],
        ]
        // Columns
        const columns = [
            { type: 'text', filter: true, width: '300px' },
            { type: 'text' },
        ]

        return {
            columns,
            data,
            license,
        };
    }
}
</script>
```
```angularjs
@Component({
  selector: 'app-root',
  template: `<div #spreadsheet></div>`,
})
export class AppComponent {
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  // Worksheets
  worksheets: jspreadsheet.worksheetInstance[];
  // Create a new data grid
  ngAfterViewInit() {
    // Create spreadsheet
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          data: [
            ['Jazz', 'Honda'],
            ['Civic', 'Honda'],
            ['Civic', 'Honda'],
            ['Picanto', 'Kia'],
            ['Optima', 'Kia'],
          ],
          filters: false,
          columns: [
            // @ts-ignore
            { type: 'text', filter: true, width: 300 },
            { type: 'text' },
          ],
        },
      ],
    });
  }
}
```


### Cell Range filter

Starting from version 11.6.0, you can enable filtering for a specific cell range, as shown in the example below:

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ '', '' ],
            [ 'Jazz', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'Picanto', 'Kia' ],
            [ 'Optima', 'Kia' ],
        ],
        filters: 'A1:B4',
        minDimensions: [6,6],
     }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [ '', '' ],
        [ 'Jazz', 'Honda' ],
        [ 'Civic', 'Honda' ],
        [ 'Civic', 'Honda' ],
        [ 'Picanto', 'Kia' ],
        [ 'Optima', 'Kia' ],
    ]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} filters={"A1:B4"} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" filters="A1:B4" />
    </Spreadsheet>
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
    data() {
        // Data
        const data = [
          [ '', '' ],
          [ 'Jazz', 'Honda' ],
          [ 'Civic', 'Honda' ],
          [ 'Civic', 'Honda' ],
          [ 'Picanto', 'Kia' ],
          [ 'Optima', 'Kia' ],
        ]

        return {
            data,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    [ '', '' ],
                    [ 'Jazz', 'Honda' ],
                    [ 'Civic', 'Honda' ],
                    [ 'Civic', 'Honda' ],
                    [ 'Picanto', 'Kia' ],
                    [ 'Optima', 'Kia' ],
                ],
                filters: 'A1:B4'
             }]
        });
    }
}
```


### Custom Filter Behavior

Utilize the `onbeforefilter` event to develop custom filtering logic. For instance, cancel the filtering process if "Canada" is among the chosen options.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['United States', 'Wholemeal', 'Yes', '2019-02-12'],
            ['Canada', 'Breakfast Cereals', 'Yes', '2019-03-01'],
            ['Canada', 'Grains', 'No', '2018-11-10'],
            ['Brazil', 'Pasta', 'Yes', '2019-01-12'],
        ],
        defaultColWidth: '140px',
        filters: true,
    }],
    onbeforefilter: function(worksheet, terms, results) {
        // Show all rows if Canada is one of the options
        if (terms[0] && terms[0].indexOf('Canada') >= 0) {
            return false;
        }
        return results;
    }
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['United States', 'Wholemeal', 'Yes', '2019-02-12'],
        ['Canada', 'Breakfast Cereals', 'Yes', '2019-03-01'],
        ['Canada', 'Grains', 'No', '2018-11-10'],
        ['Brazil', 'Pasta', 'Yes', '2019-01-12'],
    ]
    // Event
    const onbeforefilter = (worksheet, terms, results) => {
        // Show all rows if Canada is one of the options
        if (terms[0] && terms[0].indexOf('Canada') >= 0) {
            return false;
        }
        return results;
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} onbeforefilter={onbeforefilter}>
            <Worksheet data={data} filters defaultColWidth="140px" />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onbeforefilter="onbeforefilter">
        <Worksheet :data="data" :filters="true" />
    </Spreadsheet>
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
        // Event
        onbeforefilter(worksheet, terms, results) {
            // Show all rows if Canada is one of the options
            if (terms[0] && terms[0].indexOf('Canada') >= 0) {
                return false;
            }
            return results;
        }
    },
    data() {
        // Data
        const data = [
            ['United States', 'Wholemeal', 'Yes', '2019-02-12'],
            ['Canada', 'Breakfast Cereals', 'Yes', '2019-03-01'],
            ['Canada', 'Grains', 'No', '2018-11-10'],
            ['Brazil', 'Pasta', 'Yes', '2019-01-12'],
        ]

        return {
            data,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ['United States', 'Wholemeal', 'Yes', '2019-02-12'],
                    ['Canada', 'Breakfast Cereals', 'Yes', '2019-03-01'],
                    ['Canada', 'Grains', 'No', '2018-11-10'],
                    ['Brazil', 'Pasta', 'Yes', '2019-01-12'],
                ],
                defaultColWidth: '140px',
                filters: true,
            }],
            onbeforefilter: function(worksheet, terms, results) {
                // Show all rows if Canada is one of the options
                if (terms[0] && terms[0].indexOf('Canada') >= 0) {
                    return false;
                }
                return results;
            }
        });
    }
}
```

### Customizing Filter Options

This example leverages the `onopenfilter` event to intercept and remove duplicate case-sensitive values from the filter options, showcasing Jspreadsheet flexibility in tailoring filter options to meet varied application needs.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
 
<div id="spreadsheet"></div>
 
<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
 
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 'Jazz', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'CIVIC', 'Honda' ],
        ],
        filters: false,
        columns: [
            { type: 'text', filter: true, width: '300px' },
            { type: 'text' },
        ]
     }],
     onopenfilter: function(worksheet, column, filters) {
         let unique = new Map;
         let newFilters = [];
         filters.forEach(function(item) {
            if (typeof(item.k) !== 'undefined') {
                let key = item.k.toLowerCase();
                if (! unique.get(key)) {
                    unique.set(key, true);
                    newFilters.push(item);
                }
            } else {
                newFilters.push(item);
            }
         });
         return newFilters;
    }
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [ 'Jazz', 'Honda' ],
        [ 'Civic', 'Honda' ],
        [ 'CIVIC', 'Honda' ],
    ]
    // Columns
    const columns = [
        { type: 'text', filter: true, width: '300px' },
        { type: 'text' },
    ]
    // Event
    const onOpenFilter = function(worksheet, column, filters) {
        let unique = new Map;
        let newFilters = [];
        filters.forEach(function(item) {
            if (typeof(item.k) !== 'undefined') {
                let key = item.k.toLowerCase();
                if (! unique.get(key)) {
                    unique.set(key, true);
                    newFilters.push(item);
                }
            } else {
                newFilters.push(item);
            }
        });
        return newFilters;
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} onopenfilter={onOpenFilter}>
            <Worksheet data={data} columns={columns} filters={false}  />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :onopenfilter="onOpenFilter">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        // Event
        onOpenFilter(worksheet, column, filters) {
            let unique = new Map;
            let newFilters = [];
            filters.forEach(function(item) {
                if (typeof(item.k) !== 'undefined') {
                    let key = item.k.toLowerCase();
                    if (! unique.get(key)) {
                        unique.set(key, true);
                        newFilters.push(item);
                    }
                } else {
                    newFilters.push(item);
                }
            });
            return newFilters;
        }
    },
    data() {
        // Data
        const data = [
            [ 'Jazz', 'Honda' ],
            [ 'Civic', 'Honda' ],
            [ 'CIVIC', 'Honda' ],
        ]

        const columns = [
            { type: 'text', filter: true, width: '300px' },
            { type: 'text' },
        ]

        return {
            data,
            columns,
        };
    }
}
</script>
```
```angularjs
// @ts-nocheck
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    [ 'Jazz', 'Honda' ],
                    [ 'Civic', 'Honda' ],
                    [ 'CIVIC', 'Honda' ],
                ],
                columns: [
                    { type: 'text', filter: true, width: 300 },
                    { type: 'text' },
                ],
                filters: false,
            }],
            onopenfilter: function(worksheet, column, filters) {
                let unique = new Map;
                let newFilters = [];
                filters.forEach(function(item) {
                    if (typeof(item.k) !== 'undefined') {
                        let key = item.k.toLowerCase();
                        if (! unique.get(key)) {
                            unique.set(key, true);
                            newFilters.push(item);
                        }
                    } else {
                        newFilters.push(item);
                    }
                });
                return newFilters;
            }
        });
    }
}
```

#### Load Remote Options

The `onopenfilter` event accept a promise on return, so you can populate the options of your filter from a backend call. 

{.ignore}
```javascript
let options = {
    worksheets: [{
        // Data pass as a reference
        minDimensions: [10,10],
        filters: true,
    }],
    onopenfilter: function(worksheet, columns, items) {
        return fetch('/getmyitems')
            .then(response => response.json())
            .then(data => {
                // Assuming data is an array of items to be added
                data.forEach(item => {
                    items.push(item);
                });
                // Return the updated items
                return items;
            });
    }
};
```