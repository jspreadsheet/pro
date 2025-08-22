title: Jspreadsheet Formula Picker
keywords: Jspreadsheet, spreadsheets, spreadsheet-like formula picker, JavaScript formula picker, formula selection
description: Learn how the formula picker simplifies formula creation by enabling users to create range string representations through mouse selection.

# Formula picker

The formula picker feature allows users to automatically generate range strings in external HTML elements by selecting cells on a JSS spreadsheet with their mouse. 

## Documentation

### Options

To customize the integration of the formula picker in your application, you can use the following options.

| Method                       | Description                                                                                                                                                               |
| -----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type?: 'default' \| 'picker' | Define the render type.                                                                                                                                                   |
| onchange?: function          | The function is triggered when the user completes the selection of cells in the data grid.<br/>`onchange(element: HTMLElement, mouseEvent: object) => void`               |
| onupdate?: function          | The function is triggered when the user moves their mouse to update the cell selection in the data grid.<br/>`onupdate(element: HTMLElement, mouseEvent: object) => void` |

 

### Syntax


{.ignore}
```html
<script>
jspreadsheet.picker(document.getElementById('picker'), {
    type: 'picker',
    onchange: function(v) {
        // Do something
    }
});
</script>
```
  

## Example

Create a javascript formula picker using Jspreadsheet. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="picker" style="max-width: 320px; border: solid 1px red;"></div>

<div id="data-grid"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('data-grid'), {
    worksheets: [{
        minDimensions: [8,8],
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
import React, {useRef, useEffect} from "content/docs/v10/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";


// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const picker = useRef();

    useEffect(() => {
        jspreadsheet.picker(picker.current, {
            type: 'picker',
            onchange: function () {
                // Do something
            }
        });
    });


    // Render component
    return (
        <>
            <div ref={picker}/>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet/>
            </Spreadsheet>
        </>
    );
}
```
```vue
<template>
    <div ref="picker"></div>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet />
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
    mounted() {
        jspreadsheet.picker(this.$refs.picker.value, {
            type: 'picker',
            onchange: function() {
                // Do something
            }
        });
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

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
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
 
