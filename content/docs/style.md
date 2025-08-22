title: Spreadsheet Style
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like style, spreadsheet cell style, table style, style, themes, style methods, style events, cell formatting, spreadsheet customization, grid style customization, data grid aesthetics, CSS for data grid, style settings, Jspreadsheet design, dynamic styling
description: Discover how to enable and apply CSS styles to cells in Jspreadsheet. Learn programmatic styling, set up new spreadsheets with custom styling, and track user changes using related events.

# Spreadsheet Style

Jspreadsheet is constructed using real DOM elements, which allows you to apply CSS directly to the cells. However, when you use external styling, there is no internal tracking, history, or persistence. Therefore, Jspreadsheet offers settings and methods to manage the internal style programmatically.  

{.secondary}
> **What is new**\
> Jspreadsheet now features a global style property at the spreadsheet level, enabling the reuse of styles across different worksheets cells, columns and rows. It allows CSS styles to be applied to entire rows or columns through Excel-like syntax, such as A:A or 1:1. 

## Documentation

### Methods

You can manage the spreadsheet cell style with the following methods.

| Method     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getStyle   | Get style from one or multiple cells. <br/>@param {string\|null} - Cell identification or null for the whole table. <br/>@param {boolean?} - Return the indexes of the global style. <br/>`getStyle(cellName: String \| null, onlyIndexes?: Boolean)`                                                                                                                                                                                                                             |
| setStyle   | Set a single cell style by name or range. Can be use in batch operations. <br/>@param {String\|String[]\|Object} - ID of a cell or an object with multiple cells and the style definitions. <br/>@param {String?} property - Style property <br/>@param {String?} value - Style value <br/>@param {Boolean?} forceOverwrite - true to overwrite the existing CSS. <br/>`setStyle: (cell: string \| object, property?: string, value?: string, forceOverwrite?: boolean) => void;` |
| resetStyle | Reset the style for one or multiple cells <br/>@param {string\|string[]} - String to identify a cell or an array of cell identifications (A1, A2... etc) <br/>`resetStyle(cellName: String \| String[])`                                                                                                                                                                                                                                                                          |
| getStyleId | Help to find existing styleId <br/>@param {string} - Style string                                                                                                                                                                                                                                                                                                                                                                                                                 |

 

### Events

Spreadsheet style related events.

| Event         | Description                                                                                                                                                    |
| --------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| onchangestyle | `onchangestyle(worksheet: Object, newValue: Object, oldValue: Objectd) : void`<br/>The method will return an object with the cells and the properties applied. |

 

### Initial Settings

The following property is available through the initialization of the online spreadsheet.

#### Worksheet level

| Property          | Description                                                                                                                            |
| ------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| style: object     | Each object property corresponds to a cell name and range, with the value representing either a CSS string or ID for the global style. |

#### Spreadsheet level

| Property          | Description                                                                                                                            |
| ------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| style: string[]   | The global style definition is an array of CSS strings to generate the CSS classes that will be used across all worksheets.            |

{.secondary .vue}
> **Note:**\
> When using the VueJS wrapper, the spreadsheet's `style` prop is renamed to `styles` to prevent conflicts with Vue's built-in `style` attribute.
 

The following declaration defined the style string that are available in the spreadsheet level, and you can utilize declare the style per cell, column or row.

{.ignore}
```javascript
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
        style: {
            'C:C': 0,
            'E1': 1,
        },
    }],
    style: ['background-color: #ccffff; font-weight: bold', 'color: red']
});
```

### Rows and Columns Style

You can now specify a style ID as a property in the column or row initial setting declaration.

{.ignore}
```javascript
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
        columns: [{ s: 1 }, { s: 1 }],
    }],
    style: ['background-color: #ccffff; font-weight: bold', 'color: red']
});
```


## Examples

### Style in the worksheet level

Create a data grid with the style definitions on the worksheet level. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,4],
        style: {
            'C:C': 'background-color: #ccffff; font-weight: bold',
            'E1': 'background-color: #ccffff;',
        },
    }]
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

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Style
    const style = {
        'C:C': 'background-color: #ccffff; font-weight: bold',
        'E1': 'background-color: #ccffff;',
    }

    // Render component
    return (<Spreadsheet ref={spreadsheet} license={license}>
        <Worksheet style={style} minDimensions={[6, 4]}/>
    </Spreadsheet>);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :style="style" :minDimensions="[6,4]" />
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
    setup() {
        // Style
        const style = {
            'C:C': 'background-color: #ccffff; font-weight: bold',
            'E1': 'background-color: #ccffff;',
        }
        // Return object
        return {
            style,
            license
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
            worksheets: [
                {
                    minDimensions: [6,4],
                    style: {
                        'C:C': 'background-color: #ccffff; font-weight: bold',
                        'E1': 'background-color: #ccffff;',
                    },
                }
            ]
        });
    }
}
```
 

 

### Spreadsheet level style

Utilize the new spreadsheet-level style property in Jspreadsheet to easily apply and reuse CSS styles across multiple worksheets. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,4],
        style: {
            'C:C': 0, // first position of the global array
            'E1': 1,
        },
    }],
    style: [
        'background-color: #ccffff; font-weight: bold',
        'background-color: #ccffff'
    ],
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
    // Style
    const globalStyle = [
        'background-color: #ccffff; font-weight: bold',
        'background-color: #ccffff'
    ]
    const style = {
        'C:C': 0, // first position of the global array
        'E1': 1,
    }
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} style={globalStyle}>
            <Worksheet style={style} minDimensions={[6,4]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :styles="globalStyle">
        <Worksheet :style="style" :minDimensions="[6,4]" />
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
    setup() {
        // Style
        const globalStyle = [
            'background-color: #ccffff; font-weight: bold',
            'background-color: #ccffff'
        ]
        const style = {
            'C:C': 0, // first position of the global array
            'E1': 1,
        }
        // Return object
        return {
            globalStyle,
            style,
            license
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
                minDimensions: [6,4],
                style: {
                    'C:C': 0, // first position of the global array
                    'E1': 1,
                },
            }],
            style: [
                'background-color: #ccffff; font-weight: bold',
                'background-color: #ccffff'
            ],
        });
    }
}
```
 

 

### Programmatic updates

Defining cell style during initialization and changing it programmatically can be achieved using the following example. 

Even after the initialization, the cell style can still be managed programmatically through the getStyle and setStyle methods.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let w = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['US', 'Cheese', 'Yes', '2019-02-12'],
            ['CA;US;UK', 'Apples', 'Yes', '2019-03-01'],
            ['CA;BR', 'Carrots', 'No', '2018-11-10'],
            ['BR', 'Oranges', 'Yes', '2019-01-12'],
        ],
        columns: [
            {
                type: 'dropdown',
                title: 'Product Origin',
                width: 300,
                url: 'https://jspreadsheet.com/jspreadsheet/countries', // Remote source for your dropdown
                autocomplete: true,
                multiple: true
            },
            {
                type: 'text',
                title: 'Description',
                width: 200
            },
            {
                type: 'dropdown',
                title: 'Stock',
                width: 100 ,
                source: ['No','Yes']
            },
            {
                type: 'calendar',
                title: 'Best before',
                width: 100
            },
        ],
        style: {
            A1:'background-color: orange;',
            B1:'background-color: orange;',
        },
    }]
});

document.getElementById("btn1").onclick = () => w[0].setStyle('A2', 'background-color', 'yellow');
document.getElementById("btn2").onclick = () => w[0].setStyle({ A3:'font-weight: bold;', B3:'background-color: yellow;' });
document.getElementById("btn3").onclick = () => document.getElementById('console').innerHTML = w[0].getStyle('A1');
document.getElementById("btn4").onclick = () => document.getElementById('console').innerHTML = JSON.stringify(w[0].getStyle());
</script>

<p><textarea id='console' style="width:100%;max-width:600px;height:100px;"></textarea></p>

<input type="button" value="Set A2 background" id="btn1">
<input type="button" value="Change A3, B3 style" id="btn2">
<input type="button" value="Get A1 style" id="btn3">
<input type="button" value="Get the table style" id="btn4">
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
    const console = useRef();
    const data = [
        ['US', 'Cheese', 'Yes', '2019-02-12'],
        ['CA;US;UK', 'Apples', 'Yes', '2019-03-01'],
        ['CA;BR', 'Carrots', 'No', '2018-11-10'],
        ['BR', 'Oranges', 'Yes', '2019-01-12'],
    ];
    const columns = [
        {
            type: 'dropdown',
            title: 'Product Origin',
            width: 300,
            url: 'https://jspreadsheet.com/jspreadsheet/countries', // Remote source for your dropdown
            autocomplete: true,
            multiple: true
        },
        {
            type: 'text',
            title: 'Description',
            width: 200
        },
        {
            type: 'dropdown',
            title: 'Stock',
            width: 100 ,
            source: ['No','Yes']
        },
        {
            type: 'calendar',
            title: 'Best before',
            width: 100
        },
    ];
    const style = {
        A1:'background-color: orange;',
        B1:'background-color: orange;',
    };
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} columns={columns} style={style} />
            </Spreadsheet>
            <textarea ref={console} style={{ width: '100%', maxWidth: '600px', height: '100px'}}></textarea>
            <input type="button" value="Set A2 background"
                onClick={() => spreadsheet.current[0].setStyle('A2', 'background-color', 'yellow')} />
            <input type="button" value="Change A3, B3 style"
                onClick={() => spreadsheet.current[0].setStyle({ A3:'font-weight: bold;', B3:'background-color: yellow;' })} />
            <input type="button" value="Get A1 style"
                onClick={() => console.current.innerHTML = spreadsheet.current[0].getStyle('A1')} />
            <input type="button" value="Get the table style"
                onClick={() => console.current.innerHTML = JSON.stringify(spreadsheet.current[0].getStyle())} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :style="style" />
    </Spreadsheet>
    <textarea ref="consoleRef" style="width:100%;max-width:600px;height:100px;"></textarea>
    <input type="button" value="Set A2 background" @click="setStyle1" />
    <input type="button" value="Change A3, B3 style" @click="setStyle2" />
    <input type="button" value="Get A1 style" @click="setStyle3" />
    <input type="button" value="Get the table style" @click="setStyle4" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import { ref } from "vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: { Spreadsheet, Worksheet },
    setup() {
        const data = [
            ["US", "Cheese", "Yes", "2019-02-12"],
            ["CA;US;UK", "Apples", "Yes", "2019-03-01"],
            ["CA;BR", "Carrots", "No", "2018-11-10"],
            ["BR", "Oranges", "Yes", "2019-01-12"]
        ];
        const columns = [
            {
                type: "dropdown",
                title: "Product Origin",
                width: 300,
                url: "https://jspreadsheet.com/jspreadsheet/countries",
                autocomplete: true,
                multiple: true
            },
            { type: "text", title: "Description", width: 200 },
            { type: "dropdown", title: "Stock", width: 100, source: ["No", "Yes"] },
            { type: "calendar", title: "Best before", width: 100 }
        ];
        const style = {
            A1: "background-color: orange;",
            B1: "background-color: orange;"
        };

        const consoleRef = ref();

        return { data, columns, style, license, consoleRef };
    },
    methods: {
        setStyle1() {
            this.$refs.spreadsheet.current[0].setStyle("A2", "background-color", "yellow");
        },
        setStyle2() {
            this.$refs.spreadsheet.current[0].setStyle({
                A3: "font-weight: bold;",
                B3: "background-color: yellow;"
            });
        },
        setStyle3() {
            this.$refs.consoleRef.value =
                this.$refs.spreadsheet.current[0].getStyle("A1");
        },
        setStyle4() {
            this.$refs.consoleRef.value = JSON.stringify(
                this.$refs.spreadsheet.current[0].getStyle()
            );
        }
    }
};
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
      <textarea #consoleRef style="width:100%;max-width:600px;height:100px;"></textarea>
  
      <input type="button" value="Set A2 background"
          (click)="worksheets[0].setStyle('A2', 'background-color', 'yellow')" />
  
      <input type="button" value="Change A3, B3 style"
          (click)="worksheets[0].setStyle({ A3: 'font-weight: bold;', B3: 'background-color: yellow;' })" />
  
      <input type="button" value="Get A1 style" (click)="getA1Style()" />
  
      <input type="button" value="Get the table style" (click)="getTableStyle()" />
    `
  })
  export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet!: ElementRef;
    @ViewChild("consoleRef") consoleRef!: ElementRef<HTMLTextAreaElement>;
  
    worksheets: jspreadsheet.worksheetInstance[];
  
    ngAfterViewInit() {
      this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
        worksheets: [
          {
            data: [
              ["US", "Cheese", "Yes", "2019-02-12"],
              ["CA;US;UK", "Apples", "Yes", "2019-03-01"],
              ["CA;BR", "Carrots", "No", "2018-11-10"],
              ["BR", "Oranges", "Yes", "2019-01-12"]
            ],
            columns: [
              {
                type: "dropdown",
                title: "Product Origin",
                width: 300,
                url: "https://jspreadsheet.com/jspreadsheet/countries",
                autocomplete: true,
                multiple: true
              },
              { type: "text", title: "Description", width: 200 },
              { type: "dropdown", title: "Stock", width: 100, source: ["No", "Yes"] },
              { type: "calendar", title: "Best before", width: 100 }
            ],
            style: {
              A1: "background-color: orange;",
              B1: "background-color: orange;"
            },
            tableOverflow: true,
            minDimensions: [4, 4]


          }
        ]
      });
    }
  
    getA1Style() {
      this.consoleRef.nativeElement.value = this.worksheets[0].getStyle('A1') as string;
    }
  
    getTableStyle() {
      this.consoleRef.nativeElement.value = JSON.stringify(this.worksheets[0].getStyle());
    }
  }
```

### Row or Column style using ranges

Starting with version 11.1.0, you can programmatically apply styles to entire rows or columns using ranges.

{.ignore}
```javascript
// Apply style to the first column
instance.setStyle('A:A', 'background-color', 'pink');
// Apply style to the first row
instance.setStyle('1:1', 'background-color', 'blue');
```

### Reset All Style

The following script can be used to reset the style of the entire data grid.

{.ignore}
```javascript
instance.resetStyle(Object.keys(instance.getStyle()));
```

### External CSS styling

The following example uses global CSS to apply a background color on even rows. 

{.ignore}
```html
<div id="spreadsheet"></div>

<script>
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [8, 10],
    }]
});
</script>
<style>
#spreadsheet tbody tr:nth-child(even) {
    background-color: #eee;
}
</style>
```
 
{.green}
> ## Release Notes
> ### Differences from version 10
> From version 11 you can declare the id of the style string during the spreadsheet initiation using the property columns or rows.

{.ignore}
```javascript
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
        columns: [{ s: 1 }, { s: 1 }],
        rows: [ { s: 0 }],
    }],
    style: ['background-color: #ccffff; font-weight: bold', 'color: red']
});
```