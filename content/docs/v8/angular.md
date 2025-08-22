title: Angular Spreadsheet
keywords: Jspreadsheet, Jexcel, javascript, using Jspreadsheet and angular
description: An example of how to create a Angular Spreadsheet using Jspreadsheet Pro version 8.



# Angular Spreadsheet

How to create an online spreadsheet with Angular and JSS. 

```bash
// Install version 8
$ npm install jspreadsheet

// Install version 7
$ npm install jspreadsheet-pro
```
  

## Examples

### Online spreadsheet with Angular

[Angular Spreadsheet](https://codesandbox.io/s/online-spreadsheet-with-jss-3k96f)

 

### Online XLSX editor with Angular

[Angular XLSX editor](https://codesandbox.io/s/online-angular-excel-spreadsheet-editor-xlsx-b4rnz)

{.ignore}
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("spreadsheet") spreadsheet: ElementRef;

  ngAfterViewInit() {
    // License for Formula Plugin
    jspreadsheet.setLicense("###license###");
    // Create spreadsheet
    jspreadsheet(this.spreadsheet.nativeElement, {
      worksheets: [
        {
          data: [[]],
          minDimensions: [6, 4],
          columns: [
            {
              type: "dropdown",
              width: 100,
              source: ["Y", "N"]
            },
            {
              type: "color",
              width: 100,
              render: "square"
            }
          ]
        }
      ]
    });
  }
}
```
  

**NOTE** : Make sure to import the Jspreadsheet and Jsuites CSS files to your angular.json

{.ignore}
```javascript
"styles": [
    "styles.css",
    "jsuites/dist/jsuites.css",
    "jspreadsheet/dist/jspreadsheet.css"
],
```
 
