title: Excel-Like Formulas in Jspreadsheet
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like formulas, formulas, calculations, spreadsheet calculations, spreadsheet formulas, spreadsheet-like formulas, Excel formulas, Google Sheet formulas, event handling, customizations, internationalization
description: Explore the Jspreadsheet Excel-like formulas features and unlock powerful calculation capabilities for your web-based spreadsheets.

# Excel-Like Formulas

Jspreadsheet supports Excel-like formulas, offering excellent compatibility with popular spreadsheet applications such as Excel and Google Sheets. This section details the range of formulas you can utilize, guides you on creating custom formulas, and discusses additional formula-related functionalities to enhance your spreadsheet tasks.

* **Formula Auto-update**: Adjusts on cell actions such as copy and paste;
* **Excel-style Formulas**: Customizable formulas resembling Excel.
* **Cross-Calculations**: Calculations across different sheets.
* **DOM in Cells**: Formulas output DOM objects to cells.
* **Range Calculations**: Performs operations with arrays.


<br>

The formulas engine offers two tiers: Formula Basic, included by default, and Formula Pro, available as an extension. Formula Pro is necessary for many advanced operations and extended or advanced formulas. For additional details about its features and capabilities, please visit [Formula Pro](/products/formulas).


{.green}
> **What's new on version 11?**
>
> - **Row Range**: new row range calculations. For example: =SUM(1:1);
> - **Namespaces**: calculations scope. [More information](/docs/namespaces)

## Documentation

This section details the settings, methods, and events associated with spreadsheet calculations in Jspreadsheet. Note that all formula names, including custom ones, should be capitalized for consistency and functionality.


### Settings

A summary of configurations related to the use of formulas.

| Configuration                    | Description                                                                                                             |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| secureFormulas?: boolean         | Enable formula security. Default: true                                                                                  |
| editorFormulas?: boolean         | Enable the formula editor. Default: true                                                                                |
| parseFormulas?: boolean          | Enable formula calculations. Default: true                                                                              |
| debugFormulas?: boolean          | Enable the formula debug notices. Default: true                                                                         |
| autoIncrement?: boolean          | Formula variable increment on cloning or copying. Default: true                                                         |
| columnNamesInFormulas?: boolean  | It enables calculations using the column names. Only column names with more than three characters will be registered.   |


### Events

All events related to formulas.

| Event                      | Description                                                                                                                                         |
| ---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| onbeforeformula?: Function | Intercept and parse a formula just before the execution.<br/>onbeforeformula(worksheet: Object, expression: String, x: Number, y: Number) => String |
| onformulachain?: Function  | Get the information about the expressions executed from the formula chain.<br/>onformulachain(worksheet: Object, executions: Object) => void        |


### Methods

All methods related to formulas in the JSS context.

| Method                    | Description                                                                                                                     |
| --------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| executeFormula?: Function | Execute a formula.<br/>executeFormula(expression: string, x?: number, y?: number, caching?: boolean, basic?: boolean) => String |

### Calculation State

It is possible to queue/release calculations using `jspreadsheet.calculations` when loading multiple spreadsheets with cross calculations. [Read more](/docs/calculations)


## Available Formulas

### List of all available formulas

We are working to bring as many formulas as possible. Meanwhile, you can check for the existing implementation. For security reasons, all references should use capital letters, including the implementation of custom methods.

<lm-formulas></lm-formulas>

#### Formula Feature Roadmap

Ongoing enhancements and the introduction of new methods are part of our commitment to align Jspreadsheet with other software standards, such as Excel and Google Sheets.


## Advance Usage

### Special formulas

To support calculations, Jspreadsheet has a few special formulas listed below:

| Method       | Example                                 |
| -------------|-----------------------------------------|
| **=TABLE()** | Return the Jspreadsheet table instance. |

### Formula Pro Extension

Jspreadsheet offers formulas in two tiers: Basic and Premium. The Basic tier comes standard with all Jspreadsheet distributions. In contrast, the Premium tier, offered as an extension for Enterprise and Premium plans, includes additional advanced features:

- Matrix Calculations: Complex matrix operations.
- New Operators: '%' for percentages, '@' for formula specifics.
- Range Operation: Row/column range operations (A:A, 1:1).
- Extended Formulas: Access to advanced formulas.
- Private Scope: Secure, isolated formula execution.
- Special Properties: 'x', 'y', 'instance' for dynamic formulas.
- Standalone Compatibility: Formula execution in separate apps.
- Formula Picker: Easy formula selection and insertion.

[More about Formula Pro](/products/formulas)

### Custom Formulas

Jspreadsheet allows you create custom excel-like formulas. We have a dedicated page to explain more about custom formulas.

[Custom Excel-like Formulas](/docs/custom-formulas)

## Examples

### Basic spreadsheet with formulas.

A basic spreadsheet example using formulas, including currency, percentage and mask. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    style: ['background-color:orange; font-weight: bold;'],
    worksheets: [{
        data: [
            [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
            [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
            [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
            [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
            [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
            [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
            [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
            [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
            [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
        ],
        columns: [
            { type: 'text', title:'Product', width:'300' },
            { type: 'text', title:'Qtd', width:'80', mask:'#.##0' },
            { type: 'text', title:'Price', width:'100px', mask:'$ #.##0,00'  },
            { type: 'text', title:'Discount', mask:'0.00%' },
            {
                type: 'number',
                title: 'Total',
                width: '100px',
                format: 'US #.##0,00;[Red](#.##0,00)',
            },
        ],
        style: {
            'A9:E9': 0,
        },
        columnSorting:false,
        worksheetName: 'Calculations',
    }]
});
</script>
</html>
```
```jsx
import React, {useRef} from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Global grid style
    const styles = ['background-color:orange; font-weight: bold;'];

    // Worksheet data
    const data = [
        ['Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)'],
        ['Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)'],
        ['Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)'],
        ['Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)'],
        ['Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)'],
        ['Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)'],
        ['Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)'],
        ['Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)'],
        ['Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)'],
    ]

    // Column definitions
    const columns = [
        {type: 'text', title: 'Product', width: '300'},
        {type: 'text', title: 'Qtd', width: '80', mask: '#.##0'},
        {type: 'text', title: 'Price', width: '100px', mask: '$ #.##0,00'},
        {type: 'text', title: 'Discount', mask: '0.00%'},
        {
            type: 'number',
            title: 'Total',
            width: '100px',
            format: 'US #.##0,00;[Red](#.##0,00)',
        },
    ]

    // Data grid style
    const style = {
        'A9:E9': 0,
    }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} style={styles} toolbar={true}>
            <Worksheet data={data} columns={columns} style={style} worksheetName="Calculations" columnSorting/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :styles="styles">
        <Worksheet :data="data" :columns="columns" :style="style" columnSorting worksheetName="Calculations" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import formula from "@jspreadsheet/formula-pro";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });


export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Global grid style
        const styles = ['background-color:orange; font-weight: bold;'];

        // Worksheet data
        const data = [
            [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
            [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
            [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
            [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
            [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
            [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
            [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
            [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
            [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
        ]

        // Column definitions
        const columns = [
            { type: 'text', title:'Product', width:'300' },
            { type: 'text', title:'Qtd', width:'80', mask:'#.##0' },
            { type: 'text', title:'Price', width:'100px', mask:'$ #.##0,00'  },
            { type: 'text', title:'Discount', mask:'0.00%' },
            {
                type: 'number',
                title: 'Total',
                width: '100px',
                format: 'US #.##0,00;[Red](#.##0,00)',
            },
        ]

        // Data grid style
        const style = {
            'A9:E9': 0,
        }

        return {
            styles,
            data,
            columns,
            style,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import * as formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

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
            toolbar: true,
            style: ['background-color:orange; font-weight: bold;'],
            worksheets: [{
                data: [
                    [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
                    [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
                    [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
                    [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
                    [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
                    [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
                    [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
                    [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
                    [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
                ],
                columns: [
                    { type: 'text', title:'Product', width: 300 },
                    { type: 'text', title:'Qtd', width: 80, mask:'#.##0' },
                    { type: 'text', title:'Price', width: 100, mask:'$ #.##0,00'  },
                    { type: 'text', title:'Discount', mask:'0.00%' },
                    {
                        type: 'number',
                        title: 'Total',
                        width: 100,
                        format: 'US #.##0,00;[Red](#.##0,00)',
                    },
                ],
                style: {
                    'A9:E9': 0,
                },
                columnSorting:false,
                worksheetName: 'Calculations',
            }]
        });
    }
}
```

### Cross-Calculations

This example demonstrates formula calculations that span across different worksheets and spreadsheets.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['Cheese', 10, 6.00, "=B1*C1"],
                ['Apples', 5, 4.00, "=B2*C2"],
                ['Carrots', 5, 1.00, "=B3*C3"],
                ['Oranges', 6, 2.00, "=B4*C4"],
                ['Reference from the spreadsheet above: ', '=Calculations!C9', '', '=Calculations!E9'],
            ],
            worksheetName: 'Example1',
            minDimensions: [5,5],
            defaultColWidth: '50px',
            columns: [{
                width: '300px'
            }],
            cells: {
                B5: { mask:'#.##0' },
                D5: { mask:'#.##0' },
            }
        },
        {
            data: [
                ['20%', "=Example1!D1"],
                ['20%', "=Example1!D2"],
                ['20%', "=Example1!D3"],
                ['20%', "=Example1!D4"],
            ],
            worksheetName: 'Example2',
            minDimensions: [5,5],
        },
        {
            data: [
                [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
                [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
                [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
                [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
                [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
                [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
                [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
                [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
                [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
            ],
            columns: [
                { type: 'text', title:'Product', width: 300 },
                { type: 'text', title:'Qtd', width: 80, mask:'#.##0' },
                { type: 'text', title:'Price', width: 100, mask:'$ #.##0,00'  },
                { type: 'text', title:'Discount', mask:'0.00%' },
                {
                    type: 'number',
                    title: 'Total',
                    width: 100,
                    format: 'US #.##0,00;[Red](#.##0,00)',
                },
            ],
            style: {
                'A9:E9': 0,
            },
            columnSorting:false,
            worksheetName: 'Calculations',
        }
    ]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import formula from "@jspreadsheet/formula-pro";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // All worksheets in a single variable
    const worksheets = [
        {
            data: [
                ['Cheese', 10, 6.00, "=B1*C1"],
                ['Apples', 5, 4.00, "=B2*C2"],
                ['Carrots', 5, 1.00, "=B3*C3"],
                ['Oranges', 6, 2.00, "=B4*C4"],
                ['Reference from the spreadsheet above: ', '=Calculations!C9', '', '=Calculations!E9'],
            ],
            worksheetName: 'Example1',
            minDimensions: [5,5],
            defaultColWidth: '50px',
            columns: [{
                width: '300px'
            }],
            cells: {
                B5: { mask:'#.##0' },
                D5: { mask:'#.##0' },
            }
        },
        {
            data: [
                ['20%', "=Example1!D1"],
                ['20%', "=Example1!D2"],
                ['20%', "=Example1!D3"],
                ['20%', "=Example1!D4"],
            ],
            worksheetName: 'Example2',
            minDimensions: [5,5],
        },
        {
            data: [
                [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
                [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
                [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
                [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
                [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
                [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
                [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
                [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
                [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
            ],
            columns: [
                { type: 'text', title:'Product', width: 300 },
                { type: 'text', title:'Qtd', width: 80, mask:'#.##0' },
                { type: 'text', title:'Price', width: 100, mask:'$ #.##0,00'  },
                { type: 'text', title:'Discount', mask:'0.00%' },
                {
                    type: 'number',
                    title: 'Total',
                    width: 100,
                    format: 'US #.##0,00;[Red](#.##0,00)',
                },
            ],
            style: {
                'A9:E9': 0,
            },
            columnSorting:false,
            worksheetName: 'Calculations',
        }
    ]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} worksheets={worksheets} />
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :worksheets="worksheets" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import formula from "@jspreadsheet/formula-pro";


// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // All worksheets in a single variable
        const worksheets = [
            {
                data: [
                    ['Cheese', 10, 6.00, "=B1*C1"],
                    ['Apples', 5, 4.00, "=B2*C2"],
                    ['Carrots', 5, 1.00, "=B3*C3"],
                    ['Oranges', 6, 2.00, "=B4*C4"],
                    ['Reference from the spreadsheet above: ', '=Calculations!C9', '', '=Calculations!E9'],
                ],
                worksheetName: 'Example1',
                minDimensions: [5,5],
                defaultColWidth: '50px',
                columns: [{
                    width: '300px'
                }],
                cells: {
                    B5: { mask:'#.##0' },
                    D5: { mask:'#.##0' },
                }
            },
            {
                data: [
                    ['20%', "=Example1!D1"],
                    ['20%', "=Example1!D2"],
                    ['20%', "=Example1!D3"],
                    ['20%', "=Example1!D4"],
                ],
                worksheetName: 'Example2',
                minDimensions: [5,5],
            },
            {
                data: [
                    [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
                    [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
                    [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
                    [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
                    [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
                    [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
                    [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
                    [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
                    [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
                ],
                columns: [
                    { type: 'text', title:'Product', width: 300 },
                    { type: 'text', title:'Qtd', width: 80, mask:'#.##0' },
                    { type: 'text', title:'Price', width: 100, mask:'$ #.##0,00'  },
                    { type: 'text', title:'Discount', mask:'0.00%' },
                    {
                        type: 'number',
                        title: 'Total',
                        width: 100,
                        format: 'US #.##0,00;[Red](#.##0,00)',
                    },
                ],
                style: {
                    'A9:E9': 0,
                },
                columnSorting:false,
                worksheetName: 'Calculations',
            }
        ]

        return {
            worksheets,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import * as formula from "@jspreadsheet/formula-pro";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

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
            worksheets: [
                {
                    data: [
                        ['Cheese', 10, 6.00, "=B1*C1"],
                        ['Apples', 5, 4.00, "=B2*C2"],
                        ['Carrots', 5, 1.00, "=B3*C3"],
                        ['Oranges', 6, 2.00, "=B4*C4"],
                        ['Reference from the spreadsheet above: ', '=Calculations!C9', '', '=Calculations!E9'],
                    ],
                    worksheetName: 'Example1',
                    minDimensions: [5,5],
                    defaultColWidth: '50px',
                    columns: [{
                        width: 300
                    }],
                    cells: {
                        B5: { mask:'#.##0' },
                        D5: { mask:'#.##0' },
                    }
                },
                {
                    data: [
                        ['20%', "=Example1!D1"],
                        ['20%', "=Example1!D2"],
                        ['20%', "=Example1!D3"],
                        ['20%', "=Example1!D4"],
                    ],
                    worksheetName: 'Example2',
                    minDimensions: [5,5],
                },
                {
                    data: [
                        [ 'Crayons Crayola only (No Rose Art)', 2, 5.01, 0.01, '=B1*C1*(1-D1)' ],
                        [ 'Colored Pencils Crayola only', 2, 4.41, 0.02, '=B2*C2*(1-D2)' ],
                        [ 'Expo Dry-erase Markers Wide', 4, 3.00, 0.1, '=B3*C3*(1-D3)' ],
                        [ 'Index Cards Unlined', 3, 6.00, 0.03, '=B4*C4*(1-D4)' ],
                        [ 'Tissues', 10, 1.90, 0.01, '=B5*C5*(1-D5)' ],
                        [ 'Ziploc Sandwich-size Bags', 5, 1.00, 0.01, '=B6*C6*(1-D6)' ],
                        [ 'Thin Markers Crayola only', 2, 3.00, 0.02, '=B7*C7*(1-D7)' ],
                        [ 'Highlighter', 4, 1.20, 0.01, '=B8*C8*(1-D8)' ],
                        [ 'Total', '=SUM(B1:B8)', '=ROUND(SUM(C1:C8), 2)', '', '=SUM(E1:E8)' ],
                    ],
                    columns: [
                        { type: 'text', title:'Product', width: 300 },
                        { type: 'text', title:'Qtd', width: 80, mask:'#.##0' },
                        { type: 'text', title:'Price', width: 100, mask:'$ #.##0,00'  },
                        { type: 'text', title:'Discount', mask:'0.00%' },
                        {
                            type: 'number',
                            title: 'Total',
                            width: 100,
                            format: 'US #.##0,00;[Red](#.##0,00)',
                        },
                    ],
                    style: {
                        'A9:E9': 0,
                    },
                    columnSorting:false,
                    worksheetName: 'Calculations',
                }
            ]
        });
    }
}
```

{.enterprise}
### Defined names

This feature is only available in with the [Formula Pro](/products/formulas) extension.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                [ 1, '=SUM(Test*10)' ],
                [ 2, '' ],
                [ 3, '' ],
                [ 4, '' ],
            ],
            minDimensions: [5,5],
            worksheetName: 'Named ranges',
        }
    ],
    // On JSS the defined names must be uppercase
    definedNames: {
        'TEST': 'A1:A4',
    },
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // All worksheets in a single variable
    const worksheets = [
        {
            data: [
                [ 1, '=SUM(Test*10)' ],
                [ 2, '' ],
                [ 3, '' ],
                [ 4, '' ],
            ],
            minDimensions: [5,5],
            worksheetName: 'Named ranges',
        }
    ];

    // On JSS the defined names must be uppercase
    const definedNames = {
        TEST: 'A1:A4',
    };

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} worksheets={worksheets} definedNames={definedNames} />
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :worksheets="worksheets" :definedNames="definedNames" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // All worksheets in a single variable
        const worksheets = [
            {
                data: [
                    [ 1, '=SUM(Test*10)' ],
                    [ 2, '' ],
                    [ 3, '' ],
                    [ 4, '' ],
                ],
                minDimensions: [5,5],
                worksheetName: 'Named ranges',
            }
        ];

        // On JSS the defined names must be uppercase
        const definedNames = {
            TEST: 'A1:A4',
        };

        return {
            worksheets,
            definedNames,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import * as formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

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
            worksheets: [
                {
                    data: [
                        [ 1, '=SUM(Test*10)' ],
                        [ 2, '' ],
                        [ 3, '' ],
                        [ 4, '' ],
                    ],
                    minDimensions: [5,5],
                    worksheetName: 'Named ranges',
                }
            ],
            // On JSS the defined names must be uppercase
            definedNames: {
                'TEST': 'A1:A4',
            }
        });
    }
}
```

### Columns Name Calculations

You can use custom column name in your calculations. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [ 10, '=@Quantity*10' ],
            [ 20, '=@Quantity*10' ],
            [ 30, '=@Quantity*10' ],
        ],
        columns: [
            { type: 'text', width:'300', title: 'Quantity' },
            { type: 'text', width:'200', title: 'Total' },
        ]
    }],
    columnNamesInFormulas: true,
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Extensions
const extensions = { formula };

// Create the component
export default function App() {
    // Array with all the data grids
    const spreadsheet = useRef();

    // Data grid
    const data = [
        [ 10, '=@Quantity*10' ],
        [ 20, '=@Quantity*10' ],
        [ 30, '=@Quantity*10' ],
    ];

    // Grid column definitions
    const columns = [
        { type: 'text', width:'300', title: 'Quantity' },
        { type: 'text', width:'200', title: 'Total' },
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} extensions={extensions} columnNamesInFormulas={true}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions" :columnNamesInFormulas="true">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

// Extensions
const extensions = { formula };

// Create data grid component
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data grid
        const data = [
            [ 10, '=@Quantity*10' ],
            [ 20, '=@Quantity*10' ],
            [ 30, '=@Quantity*10' ],
        ];

        // Grid column definitions
        const columns = [
            { type: 'text', width:'300', title: 'Quantity' },
            { type: 'text', width:'200', title: 'Total' },
        ];

        return {
            extensions,
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
import * as formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create the data grid component
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
                    [ 10, '=@Quantity*10' ],
                    [ 20, '=@Quantity*10' ],
                    [ 30, '=@Quantity*10' ],
                ],
                columns: [
                    { type: 'text', width: 300, title: 'Quantity' },
                    { type: 'text', width: 200, title: 'Total' },
                ]
            }],
            columnNamesInFormulas: true,
        });
    }
}
```
 
## More information

The documentation provides more information about Jspreadsheet calculations. To explore more, please select one of the options below to explore specific features and functionalities.

- [Custom Excel-Like Formulas](/docs/custom-formulas)
- [Formula Selector](/docs/formula-picker)
- [The Calculation Queue State](/docs/calculations)
- [Namespaces](/docs/namespaces)
- [The Formula Pro Extension](/products/formulas)
- [Defined Names](/docs/defined-names)
 
