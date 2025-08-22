title: Jspreadsheet Fill Handle
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, Excel-like formulas, spreadsheet data, worksheet data, manage spreadsheet data, change cell data, update worksheet data
description: Learn more about the methods, events and configurations related to the Fill Handle features on Jspreadsheet.

# The Spreadsheet Fill Handle

The Jspreadsheet fill handle is a tool that allows users to quickly copy formulas or data vertically (up or down a column) or horizontally (across a row). Jspreadsheet offers a basic and fill handle advance mode. 

> ## Advanced Fill Handle
> 
> You can use the fill handle in combination with the Formula Pro feature to achieve results similar to those in Excel and Google Sheets.


## Documentation

### Settings

You can enable or disable the fill handle as below.

| Settings             | Description                                       |
|----------------------|---------------------------------------------------|
| fillHandle?: boolean | Enable or disable the fill-handle. Default: true  |

### Events

You can identify changes from a fill handle when the third argument `origin: "fill-hanlde"` available on the event `onafterchanges`

| Event                                                                                                                     |
|---------------------------------------------------------------------------------------------------------------------------|
| `onbeforechanges?: (worksheet: worksheetInstance, records: Array<any>, origin: string) => void \| boolean \| Array<any>;` |
| `onafterchanges?: (worksheet: worksheetInstance, records: Array<any>, origin: string) => void;`                           |

 

## Examples

### Disable the fill handle

```html
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
        fillHandle: false,
    }],
    onafterchanges: function(worksheet, records, origin) {
        console.log(origin, records);    
    }
});
</script>
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

    const onAfterChanges = function (worksheet, records, origin) {
        console.log(origin, records)
    }

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} onafterchanges={onAfterChanges}>
            <Worksheet minDimensions={[6, 6]} fillHandle={false}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :onafterchanges="onAfterChanges">
        <Worksheet :minDimensions="[6, 6]" :fillHandle="false" />
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
    methods: {
        onAfterChanges(worksheet, records, origin) {
            console.log(records, origin)
        }
    },
    data() {
        return { license }
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

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
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [6,6],
                fillHandle: false,
            }],
            onafterchanges: function(worksheet: any, records: any, origin: any) {
                console.log(origin, records);    
            }
        });
    }
}
```

#### Clone Data Only

The example below removes styles and editor configurations from the content.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [5,5],
        data: [['A']],
        cells: {
            A1: { type: 'dropdown', source: ['A','B'] }
        },
        style: {
            A1: 'background-color: red',
        }
    }],
    onbeforechanges: function(worksheet, records, origin) {
        // Remove any format or style
        if (origin === 'fill-handle' || origin === 'paste') {
            records.forEach(record => {
                if (typeof record.options !== 'undefined') {
                    // Do not paste information about the editors
                    delete record.options;
                }
                if (typeof record.style !== 'undefined') {
                    // Do not paste style
                    delete record.style;
                }
            });
        }
    }
});
</script>
</html>
```
```jsx
import React, {useRef} from "content/docs/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [['A']];
    const cells = {
        A1: { type: 'dropdown', source: ['A','B'] }
    }
    const style = {
        A1: 'background-color: red',
    }

    const onbeforechanges = (worksheet, records, origin) => {
        // Remove any format or style
        if (origin === 'fill-handle' || origin === 'paste') {
            records.forEach(record => {
                if (typeof record.options !== 'undefined') {
                    // Do not paste information about the editors
                    delete record.options;
                }
                if (typeof record.style !== 'undefined') {
                    // Do not paste style
                    delete record.style;
                }
            });
        }
    }

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} onbeforechanges={onbeforechanges}>
            <Worksheet data={data} cells={cells} style={style} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :onbeforepaste="onbeforepaste">
        <Worksheet :data="data" :cells="cells" :style="style" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        const data = [['A']];
        const cells = {
            A1: { type: 'dropdown', source: ['A','B'] }
        }
        const style = {
            A1: 'background-color: red',
        }
    
        const onbeforechanges = (worksheet, records, origin) => {
            // Remove any format or style
            if (origin === 'fill-handle' || origin === 'paste') {
                records.forEach(record => {
                    if (typeof record.options !== 'undefined') {
                        // Do not paste information about the editors
                        delete record.options;
                    }
                    if (typeof record.style !== 'undefined') {
                        // Do not paste style
                        delete record.style;
                    }
                });
            }
        }

        return {
          data,
          style,
          cells,
          onbeforechanges
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

// Create component
@Component({
  standalone: true,
  selector: 'app-root',
  template: `<div #spreadsheet></div>`,
})
export class AppComponent {
  @ViewChild('spreadsheet') spreadsheet: ElementRef;
  // Worksheets
  worksheets: jspreadsheet.worksheetInstance[];
  // Create a new data grid
  ngAfterViewInit() {
    // Create spreadsheet
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          minDimensions: [5, 5],
          data: [['A']],
          cells: {
            A1: { type: 'dropdown', source: ['A', 'B'] },
          },
          style: {
            A1: 'background-color: red',
          },
        },
      ],
      onbeforepaste: function(worksheet: any, records: any, origin: string) {
        // Remove any format or style
        if (origin === 'fill-handle' || origin === 'paste') {
          records.forEach(record => {
            if (typeof record.options !== 'undefined') {
              // Do not paste information about the editors
              delete record.options;
            }
            if (typeof record.style !== 'undefined') {
              // Do not paste style
              delete record.style;
            }
          });
        }
      },
    });
  }
}
```
