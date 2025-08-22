title: Javascript Calendar
keywords: Jspreadsheet, data grid, javascript, excel-like calendar, spreadsheet calendar, javascript calendar, data grid calendar, advanced calendar, calendar events, calendar settings, interactive data grid, customizable calendar, dynamic calendar, event-driven calendar, calendar integration
description: Explore the calendar input type in Jspreadsheet and delve into date operations, formatting, and other related features. Learn to leverage the power of the calendar editor for efficient date inputs, handling and customization.

# Date operations

This section focuses on the calendar input type and various date operations in JSS. It covers the following topics: 

  * Configuring the calendar picker editor
  * Validating date values based on other column values
  * Performing date operations using formulas
  * Using new valid tokens to format dates
  * Translations of date-related strings.

 

## Documentation

### Calendar editor

The [JavaScript calendar](https://jsuites.net/docs/javascript-calendar) from [jsuites.net](https://jsuites.net/docs) is a highly flexible and responsive plugin that offers numerous configurations to adapt to various application needs. For more information, refer to the *JavaScript calendar* documentation.

| Parameter                             | Description                                                                                       |
|---------------------------------------|---------------------------------------------------------------------------------------------------|
| type: `default \| year-month-picker`  | Render type. `Default: default`                                                                   |
| validRange: `[String, String]`        | Disables the dates out of the defined range. `[Initial date, Final date]`                         |
| startingDay: `Number`                 | The day of the week the calendar starts on (0 for Sunday - 6 for Saturday). `Default: 0 (Sunday)` |
| format: `String`                      | Date format. `Default: YYYY-MM-DD`                                                                |
| readonly: `Boolean`                   | Calendar input is readonly. `Default: false`                                                      |
| today: `Boolean`                      | Select today's date automatically when no date value is defined. `Default: true`                  |
| time: `Boolean`                       | Show hour and minute dropdown. `Default: false`                                                   |
| resetButton: `Boolean`                | Enabled reset button. `Default: true`                                                             |
| placeholder: `String`                 | Default place holder for the calendar input.                                                      |
| fullscreen: `Boolean`                 | Open in fullscreen mode.                                                                          |

  

## Examples

### Formulas with date operations

The example below shows date operations with formulas. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Create worksheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
        data: [
            [ '=NOW()', '=A1+1', '=A1+2', '=A1+3' ]
        ],
        cells: {
            A1: { format: 'dd/mm/yyyy' },
            B1: { format: 'dd/mm/yyyy' },
            C1: { format: 'dd/mm/yyyy' },
            D1: { format: 'dd/mm/yyyy' },
        }
    }]
});
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['=NOW()', '=A1+1', '=A1+2', '=A1+3']
    ]
    // Data grid cell definitions
    const cells = {
        A1: {format: 'dd/mm/yyyy'},
        B1: {format: 'dd/mm/yyyy'},
        C1: {format: 'dd/mm/yyyy'},
        D1: {format: 'dd/mm/yyyy'},
    }
    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} cells={cells} minDimensions={[4, 4]}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :cells="cells" :minDimensions="[4,4]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ '=NOW()', '=A1+1', '=A1+2', '=A1+3' ]
        ]
        // Data grid cell definitions
        const cells = {
            A1: { format: 'dd/mm/yyyy' },
            B1: { format: 'dd/mm/yyyy' },
            C1: { format: 'dd/mm/yyyy' },
            D1: { format: 'dd/mm/yyyy' },
        }

        return {
            data,
            cells,
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

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
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
                minDimensions: [4,4],
                data: [
                    [ '=NOW()', '=A1+1', '=A1+2', '=A1+3' ]
                ],
                cells: {
                    A1: { format: 'dd/mm/yyyy' },
                    B1: { format: 'dd/mm/yyyy' },
                    C1: { format: 'dd/mm/yyyy' },
                    D1: { format: 'dd/mm/yyyy' },
                }
            }]
        });
    }
}
```
 

 

### Column Calendar Customization

In the example below, we configure the calendar column type as a year-month picker only. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
        data: [
            [ '2021-01-01', '', '', '' ]
        ],
        columns: [  
            { type: 'calendar', options: { type: 'year-month-picker', format: 'Mon/YYYY' } },
        ]
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [ '2021-01-01', '', '', '' ]
    ];
    // Data grid cell definitions
    const columns = [
        { type: 'calendar', options: { type: 'year-month-picker', format: 'Mon/YYYY' } },
    ];
    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} minDimensions={[4,4]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" :minDimensions="[4,4]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [ '2021-01-01', '', '', '' ]
        ];
        // Data grid cell definitions
        const columns = [
            { type: 'calendar', options: { type: 'year-month-picker', format: 'Mon/YYYY' } },
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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
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
                minDimensions: [4,4],
                data: [
                    [ '2021-01-01', '', '', '' ]
                ],
                columns: [
                    { type: 'calendar', options: { type: 'year-month-picker', format: 'Mon/YYYY' } },
                ]
            }]
        });
    }
}
```
 

 

### Calendar Date Validations

In the example below, `filterOptions` is used to overwrite the column configuration `validRange` just before the edit. The rule is that the last column cannot have a date after the previous column date. Additionally, the onbeforechange event behavior blocks the user from pasting or programmatically breaking this rule. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let filterOptions = function(worksheet, cell, x, y, value, config) {
    // Get the value of the previous column
    let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
    // Set a valid range to avoid past dates to be selected
    config.options.validRange = [ previousColumnValue, null ];
    // Customized options
    return config;
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['Roger Taylor', '2019-01-01', '2019-03-01' ],
            ['Bob Shiran', '2019-04-03', '2019-05-03'],
            ['Daniel P.', '2018-12-03', '2018-12-03'],
            ['Karen Roberts', '2018-12-03', '2019-01-03'],
        ],
        columns: [
            {
                type:'text',
                title:'Name',
                width:'300px',
            },
            {
                type:'calendar',
                title:'From',
                options: { format:'DD/MM/YYYY' },
                width:'150px',
            },
            {
                type:'calendar',
                title:'To',
                options: { format:'DD/MM/YYYY' },
                filterOptions: filterOptions,
                width:'150px',
            },
        ],
        worksheetName: 'Rules',
    }],
    onbeforechange: function(worksheet, cell, x, y, value) {
        // Valid only for second column
        if (x == 2 && value) {
            // Get the value of the previous column
            let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
            if (previousColumnValue > value) {
                cell.style.border = '1px solid red';
                // Return nothing
                return '';
            } else {
                cell.style.border = '';
            }
        }
        return value;
    }
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###';

// Filter option will change the column settings just before the edition
const filterOptions = (worksheet, cell, x, y, value, config) => {
    // Get the value of the previous column
    let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
    // Set a valid range to avoid past dates to be selected
    config.options.validRange = [ previousColumnValue, null ];
    // Customized options
    return config;
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Roger Taylor', '2019-01-01', '2019-03-01' ],
        ['Bob Shiran', '2019-04-03', '2019-05-03'],
        ['Daniel P.', '2018-12-03', '2018-12-03'],
        ['Karen Roberts', '2018-12-03', '2019-01-03'],
    ];
    // Data grid cell definitions
    const columns = [
        {
            type:'text',
            title:'Name',
            width:'300px',
        },
        {
            type:'calendar',
            title:'From',
            options: { format:'DD/MM/YYYY' },
            width:'150px',
        },
        {
            type:'calendar',
            title:'To',
            options: { format:'DD/MM/YYYY' },
            filterOptions: filterOptions,
            width:'150px',
        },
    ];
    // Event
    const onbeforechange = (worksheet, cell, x, y, value) => {
        // Valid only for second column
        if (x == 2 && value) {
            // Get the value of the previous column
            let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
            if (previousColumnValue > value) {
                cell.style.border = '1px solid red';
                // Return nothing
                return '';
            } else {
                cell.style.border = '';
            }
        }
        return value;
    }

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} onbeforechange={onbeforechange}>
            <Worksheet worksheetName={"Rules"} data={data} columns={columns} minDimensions={[4,4]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onbeforechange="onbeforechange">
        <Worksheet :data="data" :columns="columns" :minDimensions="[4,4]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

// Filter the options in real time before opening the editor
const filterOptions = function(worksheet, cell, x, y, value, config) {
    // Get the value of the previous column
    let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
    // Set a valid range to avoid past dates to be selected
    config.options.validRange = [ previousColumnValue, null ];
    // Customized options
    return config;
}

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        onbeforechange(worksheet, cell, x, y, value) {
            // Valid only for second column
            if (x == 2 && value) {
                // Get the value of the previous column
                let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
                if (previousColumnValue > value) {
                    cell.style.border = '1px solid red';
                    // Return nothing
                    return '';
                } else {
                    cell.style.border = '';
                }
            }
            return value;
        }
    },
    data() {
        // Data
        const data = [
            ['Roger Taylor', '2019-01-01', '2019-03-01' ],
            ['Bob Shiran', '2019-04-03', '2019-05-03'],
            ['Daniel P.', '2018-12-03', '2018-12-03'],
            ['Karen Roberts', '2018-12-03', '2019-01-03'],
        ];
        // Data grid cell definitions
        const columns = [
            {
                type:'text',
                title:'Name',
                width:'300px',
            },
            {
                type:'calendar',
                title:'From',
                options: { format:'DD/MM/YYYY' },
                width:'150px',
            },
            {
                type:'calendar',
                title:'To',
                options: { format:'DD/MM/YYYY' },
                filterOptions: filterOptions,
                width:'150px',
            },
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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Filter the options in real time before opening the editor
const filterOptions = function(worksheet, cell, x, y, value, config) {
    // Get the value of the previous column
    let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
    // Set a valid range to avoid past dates to be selected
    config.options.validRange = [ previousColumnValue, null ];
    // Customized options
    return config;
}

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
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
                    ['Roger Taylor', '2019-01-01', '2019-03-01' ],
                    ['Bob Shiran', '2019-04-03', '2019-05-03'],
                    ['Daniel P.', '2018-12-03', '2018-12-03'],
                    ['Karen Roberts', '2018-12-03', '2019-01-03'],
                ],
                columns: [
                    {
                        type:'text',
                        title:'Name',
                        width:'300px',
                    },
                    {
                        type:'calendar',
                        title:'From',
                        options: { format:'DD/MM/YYYY' },
                        width:'150px',
                    },
                    {
                        type:'calendar',
                        title:'To',
                        options: { format:'DD/MM/YYYY' },
                        filterOptions: filterOptions,
                        width:'150px',
                    },
                ],
                worksheetName: 'Rules',
            }],
            onbeforechange: function(worksheet, cell, x, y, value) {
                // Valid only for second column
                if (x == 2 && value) {
                    // Get the value of the previous column
                    let previousColumnValue = worksheet.getValueFromCoords(x - 1, y);
                    if (previousColumnValue > value) {
                        cell.style.border = '1px solid red';
                        // Return nothing
                        return '';
                    } else {
                        cell.style.border = '';
                    }
                }
                return value;
            }
        });
    }
}
```
 

 

### International Calendar Configurations

To translate the text in the calendar plugin, you can include the following words in your global `jSuites.dictionary` definitions. 

```html
<div id="spreadsheet"></div>

<script>
//The dictionary can be defined as below
let dictionary = {
    // Other entries (...)
    // Calendar specific entries
    'Jan': 'Jan',
    'Feb': 'Fev',
    'Mar': 'Mar',
    'Apr': 'Abr',
    'May': 'Mai',
    'Jun': 'Jun',
    'Jul': 'Jul',
    'Aug': 'Ago',
    'Sep': 'Set',
    'Oct': 'Out',
    'Nov': 'Nov',
    'Dec': 'Dez',
    'January': 'Janeiro',
    'February': 'Fevereiro',
    'March': 'Março',
    'April': 'Abril',
    'May': 'Maio',
    'June': 'Junho',
    'July': 'Julho',
    'August': 'Agosto',
    'September': 'Setembro',
    'October': 'Outubro',
    'November': 'Novembro',
    'December': 'Dezembro',
    'Sunday': 'Domingo',
    'Monday': 'Segunda',
    'Tuesday': 'Terca',
    'Wednesday': 'Quarta',
    'Thursday': 'Quinta',
    'Friday': 'Sexta',
    'Saturday': 'Sabado',
    'Done': 'Feito',
    'Reset': 'Apagar',
    'Update': 'Atualizar',
}

// Send dictionary to the JSS scope
jspreadsheet.setDictionary(dictionary);

// Create worksheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
        columns: [  
            { type: 'calendar', options: { startingDay: 1 } },
            { type: 'calendar', options: { startingDay: 1 } },
            { type: 'calendar', options: { startingDay: 1 } },
            { type: 'calendar', options: { startingDay: 1 } },
        ]
    }]
});
</script>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";

const license = '###license###';

// Send dictionary to the JSS scope
jspreadsheet.setDictionary({
    // Other entries (...)
    // Calendar specific entries
    'Jan': 'Jan',
    'Feb': 'Fev',
    'Mar': 'Mar',
    'Apr': 'Abr',
    'May': 'Mai',
    'Jun': 'Jun',
    'Jul': 'Jul',
    'Aug': 'Ago',
    'Sep': 'Set',
    'Oct': 'Out',
    'Nov': 'Nov',
    'Dec': 'Dez',
    'January': 'Janeiro',
    'February': 'Fevereiro',
    'March': 'Março',
    'April': 'Abril',
    'May': 'Maio',
    'June': 'Junho',
    'July': 'Julho',
    'August': 'Agosto',
    'September': 'Setembro',
    'October': 'Outubro',
    'November': 'Novembro',
    'December': 'Dezembro',
    'Sunday': 'Domingo',
    'Monday': 'Segunda',
    'Tuesday': 'Terca',
    'Wednesday': 'Quarta',
    'Thursday': 'Quinta',
    'Friday': 'Sexta',
    'Saturday': 'Sabado',
    'Done': 'Feito',
    'Reset': 'Apagar',
    'Update': 'Atualizar',
});

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        { type: 'calendar', options: { startingDay: 1 } },
        { type: 'calendar', options: { startingDay: 1 } },
        { type: 'calendar', options: { startingDay: 1 } },
        { type: 'calendar', options: { startingDay: 1 } },
    ]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} minDimensions={[4,4]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";

const license = '###license###';

// Send dictionary to the JSS scope
jspreadsheet.setDictionary({
    // Other entries (...)
    // Calendar specific entries
    'Jan': 'Jan',
    'Feb': 'Fev',
    'Mar': 'Mar',
    'Apr': 'Abr',
    'May': 'Mai',
    'Jun': 'Jun',
    'Jul': 'Jul',
    'Aug': 'Ago',
    'Sep': 'Set',
    'Oct': 'Out',
    'Nov': 'Nov',
    'Dec': 'Dez',
    'January': 'Janeiro',
    'February': 'Fevereiro',
    'March': 'Março',
    'April': 'Abril',
    'May': 'Maio',
    'June': 'Junho',
    'July': 'Julho',
    'August': 'Agosto',
    'September': 'Setembro',
    'October': 'Outubro',
    'November': 'Novembro',
    'December': 'Dezembro',
    'Sunday': 'Domingo',
    'Monday': 'Segunda',
    'Tuesday': 'Terca',
    'Wednesday': 'Quarta',
    'Thursday': 'Quinta',
    'Friday': 'Sexta',
    'Saturday': 'Sabado',
    'Done': 'Feito',
    'Reset': 'Apagar',
    'Update': 'Atualizar',
});

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            { type: 'calendar', options: { startingDay: 1 } },
            { type: 'calendar', options: { startingDay: 1 } },
            { type: 'calendar', options: { startingDay: 1 } },
            { type: 'calendar', options: { startingDay: 1 } },
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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

//The dictionary can be defined as below
const dictionary = {
    // Other entries (...)
    // Calendar specific entries
    'Jan': 'Jan',
    'Feb': 'Fev',
    'Mar': 'Mar',
    'Apr': 'Abr',
    'May': 'Mai',
    'Jun': 'Jun',
    'Jul': 'Jul',
    'Aug': 'Ago',
    'Sep': 'Set',
    'Oct': 'Out',
    'Nov': 'Nov',
    'Dec': 'Dez',
    'January': 'Janeiro',
    'February': 'Fevereiro',
    'March': 'Março',
    'April': 'Abril',
    'May': 'Maio',
    'June': 'Junho',
    'July': 'Julho',
    'August': 'Agosto',
    'September': 'Setembro',
    'October': 'Outubro',
    'November': 'Novembro',
    'December': 'Dezembro',
    'Sunday': 'Domingo',
    'Monday': 'Segunda',
    'Tuesday': 'Terca',
    'Wednesday': 'Quarta',
    'Thursday': 'Quinta',
    'Friday': 'Sexta',
    'Saturday': 'Sabado',
    'Done': 'Feito',
    'Reset': 'Apagar',
    'Update': 'Atualizar',
}

// Send dictionary to the JSS scope
jspreadsheet.setDictionary(dictionary);

// Create component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
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
                minDimensions: [4,4],
                columns: [
                    { type: 'calendar', options: { startingDay: 1 } },
                    { type: 'calendar', options: { startingDay: 1 } },
                    { type: 'calendar', options: { startingDay: 1 } },
                    { type: 'calendar', options: { startingDay: 1 } },
                ]
            }]
        });
    }
}
```
 

 

## Related content

  * [JavaScript calendar](https://jsuites.net/docs/javascript-calendar) JSS uses the jSuites calendar component.


