title: Spreadsheet Validations: Ensuring Data Integrity through Input Rules
keywords: Jspreadsheet, data validation, cell validation techniques, input validation rules, data integrity, spreadsheet management
description: Explore Jspreadsheet validations for data integrity. Learn rule-based input checks for consistent and accurate spreadsheet data entry.

# Spreadsheet Validations

Jspreadsheet validations enforce data entry rules, flagging cells for corrections and ensuring inputs match specific requirements. This boosts data integrity by minimizing errors and streamlining data management.


## Documentation

### Methods

Below are the methods available to manage validations in Jspreadsheet.

| Method                          | Description                                                                                                                             |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `getValidations`                | Retrieves validation rules for a given index or null for all validations.<br>`getValidations(index?: Number \| null) => Object`         |
| `setValidations`                | Create new or change exiting validation rules.<br>`setValidations(validations: Object[]) => void`                                       |
| `resetValidations`              | Resets specific validation rules by index or reset all if no parameters are provided.<br>`resetValidations(indexes?: Number[]) => void` |
| `loadValidations`               | Retrieves all validation rules for a specific cell given its coordinates.<br>`loadValidations(x: Number, y: Number) => Object[]`        |
| `hasErrors`                     | Checks if a specific worksheet cell fails the validation rules.<br>`hasErrors(col?: Number\|String, row?: Number) => Boolean`           |
 

### Events

Events related to validations.

| Method       | Description                                                                  |
| -------------|------------------------------------------------------------------------------|
| onvalidation | `onvalidation(worksheet: worksheetInstance, records: Validations[]) => void` |

 
### Validations[]

All available properties to define a validation

| Property            | Description                       |
| --------------------|-----------------------------------|
| index: number       | Index of an array of validations. |
| value: Validation[] | Array of validation objects       |

 
#### Validation object

| Property            | Description                                                                                                                                                                            |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| range: string       | A cell or a range of cells affect by the validation rules. Example: Sheet1!A1:A8 or a whole column as Sheet1!E:E                                                                       |
| type: string        | 'number' \| 'text' \| 'date' \| 'list' \| 'textLength' \| 'empty' \| 'notEmpty' or 'your-custom-valication'                                                                            |
| action: string      | 'warning' \| 'reject' \| 'format'                                                                                                                                                      |
| criteria: string    | '=' \| '!=' \| '>=' \| '>' \| '<=' \| '<' \| 'between \| 'not between' \| 'valid date' \| 'valid email' \| 'valid url' \| 'contains' \| 'not contains' \| 'begins with' \| 'ends with' |
| text: string        | Define the warning or reject message.                                                                                                                                                  |
| allowBlank: boolean | Allow blank values. Only valid for warning messages                                                                                                                                    |
| format: object      | color, background-color, font-weight, font-style.                                                                                                                                      |
| className: string   | Class name to be added to the cell when the condition is match.                                                                                                                        |

### Custom Validations

You can create custom cell validations in the Jspreadsheet data grid by defining a method that returns true or false based on your validation logic inside this function. The keyword `this` refers to the cell object, giving you access to its coordinates (this. x, this.y) and the worksheet instance (this.w).

> Note: Custom validations are not exported to XLSX when using the render extension.

#### Example

For instance, to validate that a cell value starts with an '=', you can define a validation method like `isFormula`, which checks the first character of the cell's value.

{.ignore}
```javascript
jSuites.validations.isFormula = function(value, options) {
    // Get the raw value of the cell (this.w is the instance of the worksheet)
    let raw = this.w.getValueFromCoords(this.x, this.y);
    // Validate if is a formula
    return raw && typeof(raw) === 'string' && raw[0] === '=';
}
```

Now, you can declare your cell validations within the configuration of your Jspreadsheet data grid.

{.ignore}
```javascript
// Create the spreadsheet
const grid = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ["A1*2"],
            ["=A2*2"],
            ["A3*2"],
            ["=A4*2"],
            ["A5*2"]
        ],
        minDimensions: [6, 6],
    }],
    validations: [{
        range: 'Sheet1!A1:A6',
        action: "warning",
        text: "This is not a formula",
        type: "isFormula", // This should be declared as jSuites.validations.isFormula
    }]
});
```

## Examples

### Basic Data Grid with Validations

Validations in Jspreadsheet ensure data integrity by enforcing rules either initially or programmatically. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div><br><br>

<input type="button" value="Add new validation" id="btn1">
<input type="button" value="Remove validation" id="btn2">

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
const grid = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [10,"=A1*2"],
            [20,"=A2*2"],
            [30,"=A3*2"],
            [40,"=A4*2"],
            [50,"=A5*2"]
        ],
        minDimensions: [6, 6],
    }],
    validations: [{
        range: 'Sheet1!A1:A6',
        action: "warning",
        criteria: "between",
        type: "number",
        allowBlank: false,
        value: [10, 30],
    }]
});

const create = function() {
    grid[0].setValidations([{
        index: 1,
        value: {
            range: 'Sheet1!B1:B3',
            action: "format",
            criteria: "<",
            type: "number",
            value: [500],
            format: { color: '#ff0000' },
        }
    }]);
}

const remove = function() {
    // Remove the validation by the index of the array spreadsheet[0].parent.config.validations
    grid[0].resetValidations([1]);
}

document.getElementById("btn1").onclick = create
document.getElementById("btn2").onclick = remove
</script>
</html>
```
```jsx
import React, {useRef} from "react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

// Example on how to create a new validation on React
const create = function (worksheet) {
    worksheet.setValidations([{
        index: 1,
        value: {
            range: 'Sheet1!B1:B3',
            action: "format",
            criteria: "<",
            type: "number",
            value: [500],
            format: {color: '#ff0000'},
        }
    }]);
}

const remove = function (worksheet) {
    // Remove the validation by the index of the array spreadsheet[0].parent.config.validations
    worksheet.resetValidations([1]);
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [10, "=A1*2"],
        [20, "=A2*2"],
        [30, "=A3*2"],
        [40, "=A4*2"],
        [50, "=A5*2"]
    ]
    // Validations
    const validations = [{
        range: 'Sheet1!A1:A6',
        action: "warning",
        criteria: "between",
        type: "number",
        allowBlank: false,
        value: [10, 30],
    }]

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} validations={validations}>
                <Worksheet data={data} minDimensions={[6, 6]}/>
            </Spreadsheet>
            <input type="button" value="Add new validation" onClick={() => create(spreadsheet.current[0])}/>
            <input type="button" value="Remove validation" onClick={() => remove(spreadsheet.current[0])}/>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :validations="validations">
        <Worksheet :data="data" />
    </Spreadsheet>
    <input type="button" value="Add new validation" @click="create" />
    <input type="button" value="Remove validation" @click="remove" />
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
        create() {
            // Get the first worksheet instance
            let worksheet = this.$refs.spreadsheet.current[0];

            // Add a new validation to the Sheet1
            worksheet.setValidations([{
                index: 1,
                value: {
                    range: 'Sheet1!B1:B3',
                    action: "format",
                    criteria: "<",
                    type: "number",
                    value: [500],
                    format: { color: '#ff0000' },
                }
            }]);
        },
        remove() {
            // Get the first worksheet instance
            let worksheet = this.$refs.spreadsheet.current[0];

            // Destroy the validations rules index one.
            worksheet.resetValidations([1]);
        },
    },
    data() {
        // Data
        const data = [
            [10,"=A1*2"],
            [20,"=A2*2"],
            [30,"=A3*2"],
            [40,"=A4*2"],
            [50,"=A5*2"]
        ];
        // Validations
        const validations = [{
            range: 'Sheet1!A1:A6',
            action: "warning",
            criteria: "between",
            type: "number",
            allowBlank: false,
            value: [10, 30],
        }];

        return {
            data,
            validations,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
    standalone: true,
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <input type="button" value="Add new validation" (click)="create()" />
        <input type="button" value="Remove validation" (click)="remove()" />`
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
                    [10,"=A1*2"],
                    [20,"=A2*2"],
                    [30,"=A3*2"],
                    [40,"=A4*2"],
                    [50,"=A5*2"]
                ],
                minDimensions: [6, 6],
            }],
            validations: [{
                range: 'Sheet1!A1:A6',
                action: "warning",
                criteria: "between",
                type: "number",
                allowBlank: false,
                value: [10, 30],
                dropdown: true
            }]
        });
    }

    create() {
        // Create or update the validation on position one in the array of validations
        this.worksheets[0].setValidations([{
            index: 1,
            value: {
                range: 'Sheet1!B1:B3',
                action: "format",
                criteria: "<",
                type: "number",
                value: [500],
                format: { color: '#ff0000' },
                dropdown: true
            }
        }]);
    }

    remove() {
        // Remove the validation by the index
        this.worksheets[0].resetValidations([1]);
    }
}
```


### Custom Validation

The follow example validate if a cell contains a formula

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');

// Declare the validation
jSuites.validations.isFormula = function(value, options) {
    // Get the raw value of the cell (this.w is the instance of the worksheet)
    let raw = this.w.getValueFromCoords(this.x, this.y);
    // Validate if is a formula
    return raw && typeof(raw) === 'string' && raw[0] === '=';
}

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ["A1*2"],
            ["=A2*2"],
            ["A3*2"],
            ["=A4*2"],
            ["A5*2"]
        ],
        minDimensions: [6, 6],
        worksheetName: 'Custom',
    }],
    validations: [{
        range: 'Custom!A1:A6',
        action: "warning",
        text: "This is not a formula",
        type: "isFormula", // This should be declared as jSuites.validations.isFormula
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import jSuites from "jsuites";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

jSuites.validations.isFormula = function(value, options) {
    // Get the raw value of the cell (this.w is the instance of the worksheet)
    let raw = this.w.getValueFromCoords(this.x, this.y);
    // Validate if is a formula
    return raw && typeof(raw) === 'string' && raw[0] === '=';
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ["A1*2"],
        ["=A2*2"],
        ["A3*2"],
        ["=A4*2"],
        ["A5*2"]
    ];
    // Validations
    const validations = [{
        range: 'Custom!A1:A6',
        action: "warning",
        text: "This is not a formula",
        type: "isFormula", // This should be declared as jSuites.validations.isFormula
    }];

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} validations={validations}>
                <Worksheet data={data} minDimensions={[6,6]} worksheetName={"Custom"} />
            </Spreadsheet>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :validations="validations">
        <Worksheet :data="data" :minDimensions="[6, 6]" worksheetName="Custom" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import jSuites from "jsuites";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

jSuites.validations.isFormula = function(value, options) {
    // Get the raw value of the cell (this.w is the instance of the worksheet)
    let raw = this.w.getValueFromCoords(this.x, this.y);
    // Validate if is a formula
    return raw && typeof(raw) === 'string' && raw[0] === '=';
}

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ["A1*2"],
            ["=A2*2"],
            ["A3*2"],
            ["=A4*2"],
            ["A5*2"]
        ];

        // Validations
        const validations = [{
            range: 'Custom!A1:A6',
            action: "warning",
            text: "This is not a formula",
            type: "isFormula", // This should be declared as jSuites.validations.isFormula
        }];

        return {
            data,
            validations,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import jSuites from "jsuites";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Declare the validation
        (jSuites.validations as any).isFormula = function (value: any, options: any) {
            const raw = (this as any).w.getValueFromCoords((this as any).x, (this as any).y);
            return raw && typeof raw === "string" && raw[0] === "=";
        };

        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: [
                    ["A1*2"],
                    ["=A2*2"],
                    ["A3*2"],
                    ["=A4*2"],
                    ["A5*2"]
                ],
                minDimensions: [6, 6],
            }],
            validations: [
                {
                    range: "Sheet1!A1:A6",
                    action: "warning",
                    text: "This is not a formula",
                    type: "isFormula" as any,
                    criteria: "between",
                    dropdown: true
                }
            ]
        });
    }
}
```

## Validations Extension

The Validations Extension allows end-users to oversee cell validations within the data grid. It enables the creation of custom rules through an intuitive interface accessible via a toolbar icon.

### Learn More

[Click here to Learn More](/products/validations){.button}

## More examples

### React Data Grid Validations

- [Spreadsheet with date validations](https://codesandbox.io/p/devbox/nameless-bash-9m96r8)_

