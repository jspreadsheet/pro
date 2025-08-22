title: Spreadsheet Validations in Jspreadsheet - Data Input Validations
keywords: Jspreadsheet, spreadsheets, data validation, cell validation, input data rules, business data rules
description: Explore Jspreadsheet validations for maintaining data integrity and accuracy. Learn to implement rule-based data validations to enforce valid and consistent data entry, enhancing reliability and data quality in your spreadsheets.

# Spreadsheet validations

Data validations in Jspreadsheet enable the creation of rules for the data entered in the grid, ensuring that users input valid or expected data types. 

> **Upgrading from version 9**  Starting from JSS version 10, the validations feature can be used without the validation extension. The extension is now limited to providing a no-code modal where users can create their own rules. Also, you can use column range such as Sheet1!E:E 

## Documentation

### Methods

Below are the methods available to set or retrieve validations for one or multiple cells in Jspreadsheet:

| Method           | Description                                                                                                                                                                                                                                                                                                                                                                   |
| -----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| getValidations   | Get validations by index. <br/>@param {number} index - validation index. <br/>`getValidations(index: Number) => Object`                                                                                                                                                                                                                                                       |
| setValidations   | Add or edit a new validation. <br/>@param {object} - Array with the validations. <br/>`setValidations(validations: Validations[]) => void`                                                                                                                                                                                                                                    |
| resetValidations | Add or edit a new validation. <br/>@param {array} - Array with the validation indexes to be reset. Null to delete all validations. <br/>`resetValidations(validations?: Array) => void`                                                                                                                                                                                       |
| loadValidations  | Get all validation rules applicable for one cell based on its coordinates. <br/>@param {number} - x <br/>@param {number} - y <br/>`loadValidations(x: Number, y: Number) => Object[]`                                                                                                                                                                                         |
| hasErrors        | This method returns true if a cell fails to meet all the defined validation criteria. If invoked without arguments, this method will scan the entire worksheet and return true if it detects validation errors. <br/>@param {number?\|string?} - x \| column name \| undefined <br/>@param {number?} - y \| undefined <br/>`hasErrors(col?: Number, row?: Number) => Boolean` |

 

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

 

### Validation object

| Property            | Description                                                                                                                                                                            |
| --------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| range: string       | A cell or a range of cells affect by the validation rules. Example: Sheet1!A1:A8 or a whole column as Sheet1!E:E                                                                       |
| type: string        | number \| text \| date \| list \| textLength \| empty \| notEmpty                                                                                                                      |
| Action: string      | warning \| reject \| format                                                                                                                                                            |
| criteria: string    | '=' \| '!=' \| '>=' \| '>' \| '<=' \| '<' \| 'between \| 'not between' \| 'valid date' \| 'valid email' \| 'valid url' \| 'contains' \| 'not contains' \| 'begins with' \| 'ends with' |
| text: string        | Define the warning or reject message.                                                                                                                                                  |
| allowBlank: boolean | Allow blank values. Only valid for warning messages                                                                                                                                    |
| format: object      | color, background-color, font-weight, font-style.                                                                                                                                      |
| className: string   | Class name to be added to the cell when the condition is match.                                                                                                                        |

 

## Examples

### Basic data grid with validations

You can define the data grid or spreadsheet validations during initialization or through programmatic methods. 

   





```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>
<input type="button" value="Add new validation" id="addValidation">
<input type="button" value="Remove validation" id="removeValidation">

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
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
    spreadsheet[0].setValidations([{
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
    spreadsheet[0].resetValidations([1]);
}

document.getElementById("addValidation").onclick = create
document.getElementById("removeValidation").onclick = remove
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import jspreadsheet from "jspreadsheet";

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
    const validations: [
        {
            range: 'Sheet1!A1:A6',
            action: "warning",
            criteria: "between",
            type: "number",
            allowBlank: false,
            value: [10, 30],
        }
    ]

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
        const validations: [
            {
                range: 'Sheet1!A1:A6',
                action: "warning",
                criteria: "between",
                type: "number",
                allowBlank: false,
                value: [10, 30],
            }
        ];

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
            }
        }]);
    }

    remove() {
        // Remove the validation by the index
        this.worksheets[0].resetValidations([1]);
    }
}
```
 
