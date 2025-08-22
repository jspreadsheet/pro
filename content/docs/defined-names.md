title: Spreadsheet Defined Names: Excel-like Cell Ranges
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, defined names, named ranges, range references, formula readability, cell references, label references
description: Learn how to simplify Excel-like formulas using defined names. Learn the methods for creating and managing variables representing specific cells or ranges. Enhance flexibility and organization in your formulas.

# Spreadsheet Defined Names

## Introduction

In spreadsheet applications, the defined names serves as a method to assign more readable labels to cell references or ranges, enhancing formula readability and maintainability. This concept, common in Excel, is also available in Jspreadsheet, allowing for an Excel-like experience within a JavaScript data grid.

### Key Concepts

- Defined Names: Labels representing references to constants, single cells, cell ranges or formulas.
- Named Ranges: A specific defined name that refers to a cell range, facilitating easier reference in formulas.

{.secondary}
> ### Important Notes:
> - **Enterprise feature**: This feature is only available with the Premium Distribution with the Formulas Pro extension enabled.
> - **Capital Case**: All defined names should be defined with capital letters.
> - **Scope**: All defined names are going to be created on the spreadsheet level scope.
> - **Name Conflicts**: Do not use reserved names, such as names of cells, ranges or functions.

## Documentation

### Methods

You can use the following methods to read or create new defined names programmatically in your spreadsheet software.

| Method            | Description                                                                                                                                      |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| getDefinedNames   | Get a name by index. <br/>@param {string} index - defined name identification.<br/> `spreadsheet.getDefinedNames(index: String) => Object`       |
| setDefinedNames   | Create or update one or multiple names. <br/>@param {array} - Array with the indexes.<br/>`spreadsheet.setDefinedNames(names: Object[]) => void` |
| resetDefinedNames | Reset one or multiple names. <br/>@param {array} - Array with the indexes.<br/>`spreadsheet.resetDefinedNames(names: Object[]) => void`          |

### Settings

All available properties to define a validation

| Property            | Description               |
| --------------------|---------------------------|
| definedNames: array | An array of defined names |

 

## Examples

### Basic example with defined names

Here's a simple example of how to use defined names in your calculations within a spreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<p><input type="button" id="btn1" value="Create and Execute" /></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extension
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: [
            [10, "=SUM(Summary)"],
            [20, "1"],
            [30, "2"],
            [40, "3"],
            [50, "4"]
        ],
        minDimensions: [6, 6],
    }],
    definedNames: {
        Summary: 'Sheet1!A1:A6',
    }
});

document.getElementById('btn1').addEventListener('click', () => {
    // Create the defined name. All defined names are going to be created on the spreadsheet level.
    worksheets[0].setDefinedNames([
        { index: 'TOTAL', value: 'Sheet1!B1:B6' }
    ]);
    // Update the value of C1 to process the total
    worksheets[0].setValue('C1', '=SUM(TOTAL)');
})

</script>
</html>
```

```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({formula});

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [10, "=SUM(Summary)"],
        [20, "1"],
        [30, "2"],
        [40, "3"],
        [50, "4"]
    ];
    // Defined names
    const definedNames = {
        Summary: 'Sheet1!A1:A6',
    }

    const handleCreate = function () {
        // Create the defined name. All defined names are going to be created on the spreadsheet level.
        spreadsheet.current[0].setDefinedNames([
            {index: 'TOTAL', value: 'Sheet1!B1:B6'}
        ]);
        // Update the value of C1 to process the total
        spreadsheet.current[0].setValue('C1', '=SUM(TOTAL)');
    }

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} definedNames={definedNames}>
                <Worksheet data={data} minDimensions={[6, 6]}/>
            </Spreadsheet>
            <p><input type={"button"} value="Create and Execute" onClick={handleCreate}/></p>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :definedNames="definedNames">
        <Worksheet :data="data" />
    </Spreadsheet>
    <p><input type="button" value="Create and Execute" @click="handleCreate" /></p>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [10, "=SUM(Summary)"],
            [20, "1"],
            [30, "2"],
            [40, "3"],
            [50, "4"]
        ];
        // Defined names
        const definedNames = {
            Summary: 'Sheet1!A1:A6',
        }

        return {
            data,
            definedNames
        };
    },
    methods: {
        handleCreate: function() {
            // Create the defined name. All defined names are going to be created on the spreadsheet level.
            this.$refs.spreadsheet.current[0].setDefinedNames([
                { index: 'TOTAL', value: 'Sheet1!B1:B6' }
            ]);
            // Update the value of C1 to process the total
            this.$refs.spreadsheet.current[0].setValue('C1', '=SUM(TOTAL)');
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ formula });

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <button (click)="handleCreate()">Create and Execute</button>
    `,
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
            worksheets: [{
                data: [
                    [10, "=SUM(Summary)"],
                    [20, "1"],
                    [30, "2"],
                    [40, "3"],
                    [50, "4"]
                ],
                minDimensions: [6, 6],
            }],
            definedNames: {
                Summary: 'Sheet1!A1:A6',
            }
        });
    }

    handleCreate() {
            // Create the defined name. All defined names are going to be created on the spreadsheet level.
            this.worksheets[0].setDefinedNames([
                { index: 'TOTAL', value: 'Sheet1!B1:B6' }
            ]);
            // Update the value of C1 to process the total
            this.worksheets[0].setValue('C1', '=SUM(TOTAL)');
    }
}
```

### Data Grid External Constants

Use defined names to define constants for the data grid calculations.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

AAA: <input type="number" id="btn1" data-id="AAA" value="0" />
BBB: <input type="number" id="btn2" data-id="BBB" value="0" />

<p><div id="spreadsheet"></div></p>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extension
jspreadsheet.setExtensions({ formula });

// Create a new spreadsheet
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        data: [
            [ 'AAA', '=AAA', '=B1' ],
            [ 'BBB', '=BBB', '=B2' ],
            [ 'AAA*BBB', '=AAA*BBB', '=C1*C2'],
        ],
        minDimensions: [6, 6],
    }],
    definedNames: {
        'AAA': '0',
        'BBB': '0',
    }
});

// Updates
function update(e) {
    worksheets[0].setDefinedNames([
        {
            index: e.target.getAttribute('data-id'),
            value: e.target.value
        }
    ]);
}

document.getElementById('btn1').addEventListener('keyup', update)
document.getElementById('btn2').addEventListener('keyup', update)

</script>
</html>
```
```jsx
import React, { useRef, useState } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###')

// Set the extension
jspreadsheet.setExtensions({ formula })

export default function App() {
    // Create local state for inputs
    const [AAA, setAAA] = useState('0');
    const [BBB, setBBB] = useState('0');


    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    const data = [
        [ 'AAA', '=AAA', '=B1' ],
        [ 'BBB', '=BBB', '=B2' ],
        [ 'AAA*BBB', '=AAA*BBB', '=C1*C2'],
    ]

    const update = function(e) {
        spreadsheet.current[0].setDefinedNames([
            {
                index: e.target.getAttribute('data-id'),
                value: e.target.value
            }
        ])
    }

    // Render component
    return <>
        AAA: <input type="number" id="btn1" data-id="AAA" value={AAA} onChange={(e) => {
            setAAA(e.target.value)
            update(e)
        }} />
        BBB: <input type="number" id="btn2" data-id="BBB" value={BBB} onChange={(e) => {
            setBBB(e.target.value)
            update(e)
        }} /><br/>
        <Spreadsheet ref={spreadsheet} toolbar={true} definedNames={{ 'AAA': '0', 'BBB': '0'  }}>
            <Worksheet data={data} minDimensions={[6, 6]} />
        </Spreadsheet>
    </>;
}
```
```vue
<template>
    AAA: <input type="number" id="btn1" data-id="AAA" :value="AAA" @change="(e) => {
            this.AAA = e.target.value
            update(e)
        }" />
    BBB: <input type="number" id="btn2" data-id="BBB" :value="BBB" @change="(e) => {
            this.BBB = e.target.value
            update(e)
        }" /><br/>
    <Spreadsheet ref="spreadsheet" :toolbar="true" :definedNames="{ 'AAA': '0', 'BBB': '0' }">
        <Worksheet :data="data" :minDimensions="[6, 6]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###')

// Set the extension
jspreadsheet.setExtensions({ formula })

export default {
    components: {
        Spreadsheet,
        Worksheet
    },
    data() {
        return {
            AAA: '0',
            BBB: '0',
            data: [
                [ 'AAA', '=AAA', '=B1' ],
                [ 'BBB', '=BBB', '=B2' ],
                [ 'AAA*BBB', '=AAA*BBB', '=C1*C2'],
            ]
        }
    },
    methods: {
        update: function(e) {
            this.$refs.spreadsheet.current[0].setDefinedNames([
                {
                    index: e.target.getAttribute('data-id'),
                    value: e.target.value
                }
            ])
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from '@angular/core';
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';

jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ formula })

@Component({
    standalone: true,
    selector: 'app-root',
    template: `<div>
        AAA: <input type="number" id="btn1" data-id="AAA" value="0" (change)="onInputChange($event, 'AAA')" />
        BBB: <input type="number" id="btn2" data-id="BBB" value="0" (change)="onInputChange($event, 'BBB')" />
        <br/>
        <div #spreadsheet></div>
    </div>`,
})
export class AppComponent {
    @ViewChild('spreadsheet') spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [{
                data: [
                    [ 'AAA', '=AAA', '=B1' ],
                    [ 'BBB', '=BBB', '=B2' ],
                    [ 'AAA*BBB', '=AAA*BBB', '=C1*C2'],
                ],
                minDimensions: [6, 6],
            }],
            definedNames: {
                'AAA': '0',
                'BBB': '0',
            }
        });
    }

    onInputChange(e: Event, index: string) {
        this.worksheets[0].setDefinedNames([
            {
                index: index,
                value: (e.target as HTMLInputElement).value
            }
        ])
    }
}
```