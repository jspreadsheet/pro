title: Real-time Collaboration in Jspreadsheet: Boost Productivity with Shared Spreadsheets
keywords: Jspreadsheet, JavaScript, Plugins, Spreadsheet, Real-time Collaboration, Shared Spreadsheets, Teamwork, Productivity, Efficiency, Web Application, Web Development
description: Discover how to implement real-time spreadsheet sharing and collaboration using Jspreadsheet Private Cloud. Learn the technical aspects of enabling secure and efficient teamwork on spreadsheets in real-time.

# Real-time spreadsheet
* Requires Jspreadsheet Server

Intrasheets is a service that enables real-time sharing and collaboration with other users. You can install it on your servers to maintain control over your data and privacy. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://jspreadsheet.com/v10/plugins/cloud.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Load the cloud extension
jspreadsheet.setExtensions({ cloud });
// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
     cloud: 'e6e15247-e9fb-40c6-b07d-8519f6a53ca1',
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import cloud from '@jspreadsheet/cloud';

// Set the license
jspreadsheet.setLicense('###license###');

// Load the cloud extension
jspreadsheet.setExtensions({ cloud });

// Create the component
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} cloud={"e6e15247-e9fb-40c6-b07d-8519f6a53ca1"} />
    );
}
```
```vue
import { Spreadsheet } from "@jspreadsheet/vue";
import cloud from '@jspreadsheet/cloud';

// Set the license
jspreadsheet.setLicense('###license###');

// Load the cloud extension
jspreadsheet.setExtensions({ cloud });

// Create components
export default {
    components: {
        Spreadsheet
    },
    template: `<Spreadsheet ref="spreadsheet" cloud="e6e15247-e9fb-40c6-b07d-8519f6a53ca1" />`,
};
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"
import cloud from '@jspreadsheet/cloud';

// Set the license
jspreadsheet.setLicense('###license###');

// Load the cloud extension
jspreadsheet.setExtensions({ cloud });

// Create the data grid component
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
        // Create summary spreadsheet
        jspreadsheet(this.spreadsheet.nativeElement, {
            cloud: 'e6e15247-e9fb-40c6-b07d-8519f6a53ca1',
        });
    }
}
```
 
