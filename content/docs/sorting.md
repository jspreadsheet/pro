title: Jspreadsheet Data Sorting
keywords: Jspreadsheet, spreadsheet, javascript, javascript table sorting, spreadsheet sorting, data grid sorting, custom sorting, data organization, sortable data grid, javascript data grid, column sorting, row sorting, excel-like sorting, Jexcel sorting, spreadsheet controls, data grid controls, dynamic data sorting
description: Explore comprehensive information on Jspreadsheet data sorting, including sorting events, programmatic sorting, customization methods, and initial settings.

# Data Sorting

JSS provides a great deal of flexibility and control when it comes to sorting, enabling the developer to: 

  * Create a sorting handler method to customize the JavaScript sorting behavior.
  * Use the onbeforesorting event to intercept, change, or cancel the sorting results for the user.

You can sort the data grid using the context menu, double-clicking the column header, or invoking the `orderBy` method. 

## Documentation

### Methods

The developer can call the spreadsheet sorting programmatically using the following methods.

| Method  | Description                                                                                                                                                                                              |
| --------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| orderBy |  Sort the data grid. <br/>@param {number} columnNumber - Sort by column number <br/>@param {boolean} direction: false (asc), true (desc) <br/>`orderBy(columnNumber: Number, direction: Boolean) : void` |

 

### Events

The `onbeforesort` can be used to intercept, change or cancel the order results.

| Event        | Description                                                                                   |
| -------------|-----------------------------------------------------------------------------------------------|
| onbeforesort | `onbeforesort(worksheet: Object, column: Number, direction: Number, newValue: Array) : Array` |
| onsort       | `onsort(worksheet: Object, column: Number, direction: Number, newValue: Array) : void`        |

 

### Initial Settings

The following property helps to define the sorting behavior.

| Property                         | Description                                                                    |
|----------------------------------|--------------------------------------------------------------------------------|
| sorting: function                | Define a custom sorting handler.<br/>`sorting(direction: Boolean) : function`  |
| columnSorting: boolean           | Allow the user to sort the spreadsheet by columns. `Default: true`             |
| columnSortingOnDblClick: boolean | Double click in the header for sorting.  `Default: true`                       |
 

### Native sorting handler

The following code is the default sorting method. You can customize the function to create different sorting results.  

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
/**
 * Default sorting method
 * @param {boolean} direction
 * @param {number} column number starting on zero.
 */
const sortingHandler = function(direction, column) {
    // Handler
    return function(a, b) {
        let valueA = a[1];
        let valueB = b[1];

        if (! direction) {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
        } else {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
        }
    }
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
    sorting: sortingHandler,
});
</script>
</html>
```
```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

/**
 * Default sorting method
 * @param {boolean} Direction
 * @param {number} Column number starting on zero.
 */
const sortingHandler = function (direction, column) {
    // Handler
    return function (a, b) {
        let valueA = a[1];
        let valueB = b[1];

        if (!direction) {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
        } else {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
        }
    }
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} sorting={sortingHandler}>
            <Worksheet/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :sorting="sortingHandler">
        <Worksheet :minDimensions="[10,10]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

/**
 * Default sorting method
 * @param {boolean} Direction
 * @param {number} Column number starting on zero.
 */
const sortingHandler = function(direction, column) {
    // Handler
    return function(a, b) {
        let valueA = a[1];
        let valueB = b[1];

        if (! direction) {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
        } else {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
        }
    }
}

// Create the data grid component
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        return {
            sortingHandler,
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

/**
 * Default sorting method
 * @param {boolean} Direction
 * @param {number} Column number starting on zero.
 */
const sortingHandler = function(direction:any, column:any) {
    // Handler
    return function(a:any, b:any) {
        let valueA = a[1];
        let valueB = b[1];

        if (! direction) {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
        } else {
            return (valueA === '' && valueB !== '') ? 1 : (valueA !== '' && valueB === '') ? -1 :
                (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
        }
    }
}

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
                minDimensions: [6,6],
            }],
            sorting: sortingHandler,
        });
    }
}
```
 

## Examples

### Basic sorting

The following example shows the behavior when sorting through different column types.

{.small}
Double-click in any `data grid` column header below

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<p><select id='btn2'>
    <option value='0'>Column 1</option>
    <option value='1'>Column 2</option>
    <option value='2'>Column 3</option>
    <option value='3'>Column 4</option>
</select>
<input type='button' value='Sort column' id="btn1" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Mazda', 2001, 2000, '2006-01-01', '453.00', '2', '=E1*F1'],
            ['Peugeot', 2010, 5000, '2005-01-01', '23.00', '5', '=E2*F2'],
            ['Honda Fit', 2009, 3000, '2004-01-01', '214.00', '3', '=E3*F3'],
            ['Honda CRV', 2010, 6000, '2003-01-01', '56.11', '2', '=E4*F4'],
        ]
    }]
});
document.getElementById("btn1").onclick = (e) => table[0].orderBy(e.target.previousElementSibling.value);
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
    const select = useRef();
    // Data
    const data = [
        ['Mazda', 2001, 2000, '2006-01-01', '453.00', '2', '=E1*F1'],
        ['Peugeot', 2010, 5000, '2005-01-01', '23.00', '5', '=E2*F2'],
        ['Honda Fit', 2009, 3000, '2004-01-01', '214.00', '3', '=E3*F3'],
        ['Honda CRV', 2010, 6000, '2003-01-01', '56.11', '2', '=E4*F4'],
    ];

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} />
            </Spreadsheet>
            <select ref={select}>
            <option value='0'>Column 1</option>
            <option value='1'>Column 2</option>
            <option value='2'>Column 3</option>
            <option value='3'>Column 4</option>
            </select>
            <input type='button' value='Sort column'
                onClick={() => spreadsheet.current[0].orderBy(select.current.value)} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" />
    </Spreadsheet>
    <select ref="select">
    <option value='0'>Column 1</option>
    <option value='1'>Column 2</option>
    <option value='2'>Column 3</option>
    <option value='3'>Column 4</option>
    </select>
    <input type="button" value="Sort column" @click="sortColumn" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Create the data grid component
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        sortColumn() {
            this.$refs.spreadsheet.current[0].orderBy(this.$refs.select.value);
        }
    },
    data() {
        // Data
        const data = [
            ['Mazda', 2001, 2000, '2006-01-01', '453.00', '2', '=E1*F1'],
            ['Peugeot', 2010, 5000, '2005-01-01', '23.00', '5', '=E2*F2'],
            ['Honda Fit', 2009, 3000, '2004-01-01', '214.00', '3', '=E3*F3'],
            ['Honda CRV', 2010, 6000, '2003-01-01', '56.11', '2', '=E4*F4'],
        ];

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
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <select id='columnNumber'>
        <option value='0'>Column 1</option>
        <option value='1'>Column 2</option>
        <option value='2'>Column 3</option>
        <option value='3'>Column 4</option>
        </select>
        <input type='button' value='Sort column'
            (click)="this.worksheets[0].orderBy(this.select.nativeElement.value)">`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("select") select: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ['Mazda', 2001, 2000, '2006-01-01', '453.00', '2', '=E1*F1'],
                    ['Peugeot', 2010, 5000, '2005-01-01', '23.00', '5', '=E2*F2'],
                    ['Honda Fit', 2009, 3000, '2004-01-01', '214.00', '3', '=E3*F3'],
                    ['Honda CRV', 2010, 6000, '2003-01-01', '56.11', '2', '=E4*F4'],
                ]
            }]
        });
    }
}
```

### Custom sorting handler

The following example shows how to customize the spreadsheet sorting behavior using the `sorting` property.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Spreadsheets', 1],
            ['Grids', 2],
            ['Tables', 3],
            ['Plugins', 4],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
        ],
        columns: [
            { type: 'text', width:200 },
            { type: 'text', width:400 },
        ],
    }],
    sorting: function(direction, column) {
        return function(a, b) {
            let valueA = a[1];
            let valueB = b[1];

            // Consider blank rows in the sorting
            if (! direction) {
                return (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
            } else {
                return (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
            }
        }
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
        ['Spreadsheets', 1],
        ['Grids', 2],
        ['Tables', 3],
        ['Plugins', 4],
        ['', ''],
        ['', ''],
        ['', ''],
        ['', ''],
    ];
    // Columns
    const columns = [
        { type: 'text', width:200 },
        { type: 'text', width:400 },
    ];
    // Sorting handler
    const sorting = (direction, column) => {
        return (a, b) => {
            let valueA = a[1];
            let valueB = b[1];

            // Consider blank rows in the sorting
            if (! direction) {
                return (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
            } else {
                return (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
            }
        }
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} sorting={sorting}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :sorting="sorting">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Create the data grid component
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        // Sorting handler
        sorting(direction, column) {
            return (a, b) => {
                let valueA = a[1];
                let valueB = b[1];

                // Consider blank rows in the sorting
                if (! direction) {
                    return (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
                } else {
                    return (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
                }
            }
        }
    },
    data() {
        // Data
        const data = [
            ['Spreadsheets', 1],
            ['Grids', 2],
            ['Tables', 3],
            ['Plugins', 4],
            ['', ''],
            ['', ''],
            ['', ''],
            ['', ''],
        ];
        // Columns
        const columns = [
            { type: 'text', width:200 },
            { type: 'text', width:400 },
        ];

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
                    ['Spreadsheets', 1],
                    ['Grids', 2],
                    ['Tables', 3],
                    ['Plugins', 4],
                    ['', ''],
                    ['', ''],
                    ['', ''],
                    ['', ''],
                ],
                columns: [
                    { type: 'text', width:200 },
                    { type: 'text', width:400 },
                ],
            }],
            sorting: function(direction, column) {
                return function(a, b) {
                    let valueA = a[1];
                    let valueB = b[1];

                    // Consider blank rows in the sorting
                    if (! direction) {
                        return (valueA > valueB) ? 1 : (valueA < valueB) ? -1 : 0;
                    } else {
                        return (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
                    }
                }
            }
        });
    }
}
```
 
### Disable Sorting on the First Column

How to use `onbeforesort` to disable sorting for the first column only.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }],
    onbeforesort: function(worksheet, column) {
        if (column === 0) {
            return false;
        }
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

    const onbeforesort = (worksheet, column) => {
        if (column === 0) {
            return false;
        }
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} onbeforesort={onbeforesort}>
            <Worksheet />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onbeforesort="onbeforesort">
        <Worksheet />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Create the data grid component
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        // Sorting handler
        sorting(worksheet, column) {
          if (column === 0) {
            return false;
          }
        }
    },
    data() {
        return {
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
                minDimensions: [6,6],
            }],
            onbeforesort: function(
                worksheet: any,
                column: number,
                direction: number,
                newOrderValues: number[]
              ): false | undefined {
                  if (column === 0) {
                      return false;
                  }
                  return undefined;
              }                 
        });
    }
}
```