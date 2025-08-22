title: JSS Formula Premium: Powerful JavaScript Plugin for Advanced Spreadsheet Formulas
keywords: Jspreadsheet, Jexcel, javascript, payment calculator spreadsheet, formulas, excel formulas, excel-like formulas, JSS Formula Premium, JavaScript plugin, NodeJS, browser-based spreadsheet, advanced spreadsheet formulas, range handling, variable handling, JS precision, worksheet management, spreadsheet software, Excel compatibility, Google Sheets compatibility, formula parsing, formula execution, spreadsheet-like formulas, spreadsheet calculation, data manipulation, advanced data grids, dynamic spreadsheets, Excel to web
description: JSS Formula Premium is a JavaScript plugin that parses and executes Excel-like formulas. Experience advanced functionality with handling ranges, variables, precision, and more in NodeJS or your browser.

![Spreadsheet advance formulas](img/data-grid/formulas-pro.svg){.icon}

# Formula Pro

Formula Pro is a JavaScript plugin for parsing and executing spreadsheet formula strings on the browser or using NodeJS. It handles ranges, variables, worksheets and a great number of formulas available in other spreadsheet software such as Excel or Google Sheets. 

#### Parse excel-like formulas using JavaScript

For testing, you can use the following form, or use the browser’s console. 

<lm-calculator></lm-calculator>

#### What are the main features?

Formula Pro is a plugin that can parse Excel-like formulas into JavaScript, offering users a wide range of capabilities. Some of its key features include: 

  * More than 400 Excel formulas available in JavaScript;
  * Operates in a private scope;
  * Utilization of a custom shunting yard parser, `eliminating` the need for `eval `or `Function` constructs;
  * A bespoke approach to addressing JavaScript's precision limitations;
  * Capability to perform date operations;
  * Supports cross-worksheet calculations;
  * Supports defined names and external variable definitions;
  * Supports matrix calculations;
  * Offers international customizations, such as a translate method name feature;
  * Supports @ as a single operator;
  * Formula supports column name in calculations.

  

## Documentation

### Methods

| Method                        | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| define                        | Define external variables.<br>```define(variables: object) => void```    |
| setFormula                    | Append new custom formulas<br>```setFormula(formulas: object) => void``` |
| reset                         | Destroy external variables definitions<br>```reset() => void```          |

### Settings

| Property                                       | Description                                                      |
|------------------------------------------------|------------------------------------------------------------------|
| adjustPrecision: boolean                       | Automatically adjust JavaScript precision issues. Default: false |
| license: string \| object                      | License information                                              |
| cache: boolean                                 | Enable cache. Default: true                                      |
| onbeforeformula: (expression: string) : string | Intercept a formula before execution.                            |

> NOTE: When `adjustPrecision` is enabled, the results will be rounded to a maximum of ten decimal places.


### Installation

#### Browser

The basic standalone usage. 

{.ignore-execution}
```html
<html>
<script src="https://cdn.jsdelivr.net/npm/jsuites/dist/jsuites.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>
<script>
// Activate the precision adjust
formula.adjustPrecision = true;
// Define the license just once
formula.license({
    clientId: 'your-client-id',
    licenseKey: 'your-key',
});
</script>
</html>
```

#### NodeJS

Using formula pro on your backend. 

```bash
npm install @jspreadsheet/formula-pro
```

{.ignore}
```javascript
// Import formula pro
import formula from '@jspreadsheet/formula-pro';
// Define the license just once
formula.license({
    clientId: 'your-client-id',
    licenseKey: 'your-key',
});
// Calculate
formula('A1*2', { A1: 10 }); // Result 20
```

### License

This extension requires a custom license. It uses formulas from [formulajs](https://github.com/formulajs/formulajs/blob/master/LICENSE) and multiple contributors.

## Features

### JavaScript precision

JSS Formula Premium's `adjustPrecision` flag assists with rounding issues in JavaScript by employing an adaptive toFixed method that adjusts dynamically based on the number of decimals required. 

{.ignore}
```javascript
// Activate the precision adjust
formula.adjustPrecision = true;

formula('37.02 + 2.56');
// Without adjustPrecision: 39.580000000000005
// With adjustPrecision: 39.58

formula('185.32 - 84.78');
// Without adjustPrecision: 100.53999999999999
// With adjustPrecision: 100.54

formula('25.92 * 3.33');
// Without adjustPrecision: 86.31360000000001
// With adjustPrecision: 86.3136

formula('9.15 / 6');
// Without adjustPrecision: 1.5250000000000001
// With adjustPrecision: 1.525
```
 

### External variables

You can define variables to be used in your calculations as below. 

{.ignore}
```javascript
// Define a number
formula.define({ number: 1000 });
// You can also define a number with single quotes
formula.define({ number: '2000' });
// Define a string you must define with the double quotes.
formula.define({ hello: '"Dealing with strings"' });
```
 

### Usage example

The formula method receives the expression and the variables that will support the calculations. 

{.ignore}
```javascript
/**
 * @param {string} expression - the formula to be calculated
 * @param {object} variables - the variables and values necessary to parse the expression
 * @param {number=} x - a optional coordinate reference
 * @param {number=} y - a optional coordinate reference
*/
formula(expression: String, variables: Object, [x: Number], [y: Number]) : string|array
```
 

### Internationalization

Translate the formulas name to portuguese, for example: 

{.ignore-execution}
```html
<html>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>
<script>
// Activate the precision adjust
formula.adjustPrecision = true;

// Formula parser
formula.onbeforeformula = function(expression) {
    return expression.replace(/\./g, '').replace(/\,/g, '.')
}

// Translate the formula names
let translate = {
    NOW: "AGORA",
    RAND: "ALEATÓRIO",
    RANDBETWEEN: "ALEATÓRIOENTRE",
    YEAR: "ANO",
    AREAS: "ÁREAS",
    ROUND: "ARRED",
    FLOOR: "ARREDMULTB",
    TRIM: "ARRUMAR",
    ASINH: "ASENH",
    ASIN: "ASEN",
    AVERAGEIF: "MÉDIASE",
    DB: "BD",
    DCOUNT: "BDCONTAR",
    DCOUNTA: "BDCONTARA",
    // (...)
    FV: "VF",
    FVSCHEDULE: "VFPLANO",
    PV: "VP",
    NPV: "VPL",
    XIRR: "XTIR",
    XNPV: "XVPL",
}

let keys = Object.keys(translate)
keys.forEach(function(v){
    formula[translate[v]] = formula[v];
});

// By default, method arguments are separated by comma. But you can change that using:
formula.divisor = ';';

// Run the formula
formula("SOMA(1;2;3)"); // result = 6
</script>
</html>
```
  

### Examples

You can run the following tests in the browser's console when initialized as above. 

#### Range operations


{.ignore}
```javascript
formula('A1:B1*2', { A1: 2, B1: 4 });
// Returns Array[ 4, 8 ]

formula('SUM(A1:B1*2)', { A1: 1, B1: 'A2+B2', A2: 3, B2: 4 })
// Returns 16

formula('SUM(A1:A6)', { A1: 2, A2: 4, A3: 5, A4: 1, A5: 5, A6: 1 });
// Returns 18

formula('AVERAGE(CALCULATION*10)', { CALCULATION: 'A1:A3', A1: 1, A2: 2, A3: 3 })
// Returns 20

formula('SUM(B:B)', { B1: 1, B2: 1, B3: 14 });
// Returns 16
```
 

#### Conditional calculations


{.ignore}
```javascript
formula('IF(B1=0,0,B9/B1)', { B1:0, B9: 3 });
// Returns zero when B1 is zero

formula('IF(true, CALCULATION, 10)', { CALCULATION: 'A1:A3', A1: 1, A2: 2, A3: 3 })
// Returns [[1], [2], [3]]

formula('IF(C16+C15!=0,C13+C14,false)', { C16: 0, C15: 0, C14: 3, C13: 12 })
// Returns false
```
  

#### Comparisons


{.ignore}
```javascript
formula('1*2<1^4');
// Returns false

formula('(1==1)<>(2>2)')
// Returns true
```
  

#### Date calculations


{.ignore}
```javascript
formula('NOW()+1');
// Today + one day

formula('DATE(2021,1,1) > DATE(2021,2,1)');
// false
```
  

#### Cross worksheets


{.ignore}
```javascript
formula('SHEET1!A1*A1', { 'SHEET1!A1': 2, 'A1': 3 });
// Returns 6

formula('SUM(SHEET3!B1:B3)', { 'SHEET3!B1': 3, 'SHEET3!B2': 3, 'SHEET3!B3': 4 });
// Returns 10

formula('SUM(B:B)', { 'B1': 1, 'B2': 2, 'B3': 4 });
// Returns 7
```
  

#### Worksheet operations


{.ignore}
```javascript
formula('SHEET1!A1*10', { SHEET1: [[1,2,3],[4,5,6]] });
// Returns 1 * 10

formula('SHEET1!B1*SHEET2!B1', { SHEET1: [[1,2,3],[4,5,6]], SHEET2: [[10,20,30]] });
// Returns 2 * 20
```
  
## Limitations

A few of known Formula Pro limitations:

- Limited loop detection within conditional functions.

## Available formulas

You can find a list of the available formulas here.  

<lm-formulas></lm-formulas>

## Integrating with JSS spreadsheet

### Basic integration

How to integrate JSS spreadsheet and the formula-pro plugin. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Add-on for JSpreadsheet
jspreadsheet.setExtensions({ formula });

// Create the spreadsheets
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [5, 5], data: [['=SUM(10, 10)']] },
        { minDimensions: [5, 5] },
    ],
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
jspreadsheet.setLicense('###license###');

// Add-on for JSpreadsheet
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet minDimensions={[5, 5]} data={[['=SUM(10, 10)']]} />
            <Worksheet minDimensions={[5, 5]}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
  <Spreadsheet
    ref="spreadsheet"
    :license="license"
    :extensions="extensions"
    toolbar="true"
  >
    <Worksheet :minDimensions="[10, 10]" :data="[['=SUM(10, 10)']]" />
    <Worksheet :minDimensions="[10, 10]" />
  </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from '@jspreadsheet/vue';
import formula from '@jspreadsheet/formula-pro';

import '@lemonadejs/studio';
import '@lemonadejs/studio/dist/style.css';
import 'jspreadsheet/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense(
  'OWJiZDQ3MTYzYTUzZTNkOTExZTdhY2M3NWUxNmJlNDNkYjdiNzA4Y2E2YzYxYjdjNDg1ODllYmU1YjRkZjgzNDAwYjcyZGQ0NjE3ZTY1NmVlMzc3MDI4NWVmYmM2MjM0M2NmNGRjNTczMmRlZGY4MGY3MWVlNTBlMzM1MDE1MzgsZXlKamJHbGxiblJKWkNJNklpSXNJbTVoYldVaU9pSktjM0J5WldGa2MyaGxaWFFpTENKa1lYUmxJam94TnpVek16RTJNek16TENKa2IyMWhhVzRpT2xzaWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWFuTm9aV3hzTG01bGRDSXNJbU56WWk1aGNIQWlMQ0p6ZEdGamEySnNhWFI2TG1sdklpd2lkMlZpWTI5dWRHRnBibVZ5TG1sdklpd2lkMlZpSWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpOQ0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1Ob1lYSjBjeUlzSW1admNtMXpJaXdpWm05eWJYVnNZU0lzSW5CaGNuTmxjaUlzSW5KbGJtUmxjaUlzSW1OdmJXMWxiblJ6SWl3aWFXMXdiM0owWlhJaUxDSmlZWElpTENKMllXeHBaR0YwYVc5dWN5SXNJbk5sWVhKamFDSXNJbkJ5YVc1MElpd2ljMmhsWlhSeklpd2lZMnhwWlc1MElpd2ljMlZ5ZG1WeUlpd2ljMmhoY0dWeklpd2labTl5YldGMElsMHNJbVJsYlc4aU9uUnlkV1Y5'
);

// Add-on for JSpreadsheet
jspreadsheet.setExtensions({ formula });

export default {
  components: {
    Spreadsheet,
    Worksheet,
  },
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Add-on for JSpreadsheet
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
            worksheets: [
                { minDimensions: [5, 5], data: [['=SUM(10, 10)']] },
                { minDimensions: [5, 5] },
            ],
        });
    }
}
```

### External Variables Example

How to use external variable in my formulas. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Define custom variables to be use in the calculations
formula.define({ QTY: 10, CALC: 20, HELLO: '"Dealing with strings"' })

// Add-on for Jspreadsheet
jspreadsheet.setExtensions({ formula });

// Create the spreadsheets
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { data: [['=QTY*10', '=CALC*10', '=HELLO']] },
    ],
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

// License
jspreadsheet.setLicense('###license###');

// Define custom variables to be use in the calculations
formula.define({ QTY: 10, CALC: 20, HELLO: '"Dealing with strings"' });

// Extensions
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [['=QTY*10', '=CALC*10', '=HELLO']];

    // Render component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet data={data} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" :minDimensions="[10,10]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// License
jspreadsheet.setLicense('###license###');

// Define custom variables to be use in the calculations
formula.define({ QTY: 10, CALC: 20, HELLO: '"Dealing with strings"' });

// Extensions
jspreadsheet.setExtensions({ formula });


export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [['=QTY*10', '=CALC*10', '=HELLO']];

        return {
            data,
        };
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

// Define custom variables to be use in the calculations
formula.define({ QTY: 10, CALC: 20, HELLO: '"Dealing with strings"' });

// Extensions
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
            worksheets: [
                { data: [['=QTY*10', '=CALC*10', '=HELLO']] },
            ],
        });
    }
}
```
 

### More examples

  * [JSS Formula documentation](/docs/formulas)
  * [Footer summary formulas example](/docs/footers)
  * [Cross formula example](/docs/examples/cross-calculations)
  * [Custom formulas example](/docs/examples/custom-formulas)


