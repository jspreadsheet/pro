title: Jspreadsheet Formula Picker
keywords: Jspreadsheet, formula picker, JavaScript spreadsheet formulas, user-friendly formula selection, external formula components
description: The Jspreadsheet formula picker simplifies the creation of range strings through worksheet selections. This versatile component supports the development of external HTML elements, allowing for intuitive, Excel-like range selections using worksheet mouse interactions.

# Formula Picker

The formula picker simplifies adding variables to formulas through mouse or keyboard selections. Additionally, it can transform an HTML element into a range selector, enabling the creation of Excel-style ranges with a mouse selection over worksheets.

{.secondary}
> ### New Features in Version 11
> - Enhanced flexibility to switch between worksheets during the worksheet variable selection;
> - Keyboard navigation to facilitate range creation.

## Documentation

### Settings

To customize the integration of the formula picker in your application, you can use the following options.

| Property                      | Description                                                                                                                                                               |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type?: 'formula' \| 'picker'  | Define the render type. type: 'formula' understand a formula when the string start with '=', where type: 'picker' starts an event by click in the picker button.          |
| onchange?: function           | The function is triggered when the user completes the selection of cells in the data grid.<br/>`onchange(element: HTMLElement, mouseEvent: object) => void`               |
| onupdate?: function           | The function is triggered when the user moves their mouse to update the cell selection in the data grid.<br/>`onupdate(element: HTMLElement, mouseEvent: object) => void` |
| palette: string[]             | Customize the colors of the formula token.<br>Default: `['#006CD4','#BC2F34','#7C53AC','#107042','#D50888','#DB6B10','#00758F']`                                          |
| single: boolean               | Always reset the input on start.                                                                                                                                          |
| worksheetName: boolean        | Always include the worksheet name during the selection.                                                                                                                   |

#### Syntax

{.ignore}
```html
<script>
jspreadsheet.picker(document.getElementById('picker'), {
    type: 'formula',
    palette: ['#006CD4','#BC2F34','#7C53AC','#107042','#D50888','#DB6B10','#00758F'],
    onchange: function(v) {
        // Do something
    }
});
</script>
```

### Methods

| Method            | Description                               |
|-------------------|-------------------------------------------|
| palette: string[] | Customize the colors of the formula token |

##### Customize the Color Palette

It is possible to customize the formula token colors to match your application requirements.

{.ignore}
```javascript
// Customize the colors
jspreadsheet.picker.palette(['#006CD4','#BC2F34','#7C53AC','#107042','#D50888','#DB6B10','#00758F'])
```


## Examples

### Formula Picker Example

Create a javascript formula picker using Jspreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<p><div id="picker" style="max-width: 320px;"></div></p>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
    }]
});

jspreadsheet.picker(document.getElementById('picker'), {
    type: 'picker',
    onchange: function() {
        // Do something
    }
});
</script>

</html>
```

```jsx
import React, {useRef, useEffect} from "react";
import {Spreadsheet, Worksheet, Picker, jspreadsheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const picker = useRef();

    const onchange = (value) => {
        console.log(value)
    }

    // Render component
    return (
        <>
            <Picker type="picker" onchange={onchange}/>
            <Spreadsheet ref={spreadsheet}>
                <Worksheet/>
            </Spreadsheet>
        </>
    );
}
```
```vue
<template>
    <Picker ref="picker" type="picker" :onchange="onChange" />
    <Spreadsheet ref="spreadsheet">
        <Worksheet />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, Picker, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');


export default {
    components: {
        Spreadsheet,
        Worksheet,
        Picker
    },
    methods: {
        onChange: function(v) {
            console.log(v)
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

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #picker></div>
        <div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("picker") picker: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create the spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [8,8],
            }]
        });

        jspreadsheet.picker(this.picker.nativeElement, {
            type: 'picker',
            onchange: function() {
                // Do something
            }
        });
    }
}
```
 
