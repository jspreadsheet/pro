title: Text Wrapping in Jspreadsheet
keywords: Jspreadsheet, javascript, plugins, spreadsheet, text wrap, content wrapping
description: How to use text wrap in a Jspreadsheet data grid.

# Text wrapping

You can use the `wrap: true` to automatic wrapping. 

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

let data = [
    ['Spyro Trilogy Reignited (PS4)', '29.99', 'Spyro Reignited Trilogy is a remaster of the original Spyro trilogy developed by Insomniac Games for the PlayStation: Spyro the Dragon, Spyro 2: Ripto\'s Rage!, and Spyro: Year of the Dragon'],
    ['Call of Duty: Black Ops 4 (PS4)', '49.99', 'Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.'],
];

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: data,
            columns: [
                { type:'text', width: '200px' },
                { type:'text' },
                { type:'text', width:'400px', align: 'left', wrap: true },
            ]
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

// Set the license
const license = '###license###';

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['Spyro Trilogy Reignited (PS4)', '29.99', 'Spyro Reignited Trilogy is a remaster of the original Spyro trilogy developed by Insomniac Games for the PlayStation: Spyro the Dragon, Spyro 2: Ripto\'s Rage!, and Spyro: Year of the Dragon'],
        ['Call of Duty: Black Ops 4 (PS4)', '49.99', 'Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.'],
    ]
    // Columns
    const columns = [
        { type:'text', width: '200px' },
        { type:'text' },
        { type:'text', width:'400px', align: 'left', wrap: true },
    ]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
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
            ['Spyro Trilogy Reignited (PS4)', '29.99', 'Spyro Reignited Trilogy is a remaster of the original Spyro trilogy developed by Insomniac Games for the PlayStation: Spyro the Dragon, Spyro 2: Ripto\'s Rage!, and Spyro: Year of the Dragon'],
            ['Call of Duty: Black Ops 4 (PS4)', '49.99', 'Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.'],
        ];
        // Columns
        const columns = [
            { type:'text', width: '200px' },
            { type:'text' },
            { type:'text', width:'400px', align: 'left', wrap: true },
        ];
        return {
            data,
            columns,
            license,
        }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Data
const data = [
    ['Spyro Trilogy Reignited (PS4)', '29.99', 'Spyro Reignited Trilogy is a remaster of the original Spyro trilogy developed by Insomniac Games for the PlayStation: Spyro the Dragon, Spyro 2: Ripto\'s Rage!, and Spyro: Year of the Dragon'],
    ['Call of Duty: Black Ops 4 (PS4)', '49.99', 'Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.'],
];

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
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                data: data,
                columns: [
                    { type:'text' },
                    { type:'text' },
                    { type:'text', align: 'left', wrap: true },
                ]
            }]
        });
    }
}
```
 
