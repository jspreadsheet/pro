title: Angular Data Grid with Spreadsheet-Like Controls with Jspreadsheet Version 10
keywords: Jspreadsheet, Jexcel, javascript, Angular, data grid, spreadsheet-like controls, Angular data grid, Jspreadsheet integration, Angular integration, JavaScript data grid, spreadsheet controls in Angular
description: Discover how to use Jspreadsheet and Angular to create powerful data grids with spreadsheet-like controls. Explore the integration of Jspreadsheet in Angular applications for efficient data management and user-friendly interfaces.

# Angular Spreadsheet

Jspreadsheet offers an advanced data grid with a spreadsheet like controls with full support for TypeScript and Angular. This section provides information on installing and integrating Jspreadsheet into your Angular applications. You can quickly enhance your application's data input functionality with easy-to-follow steps and examples.  

## Documentation

 

### Installation



```bash
$ npm install jspreadsheet
```
  

### Examples

 

#### Online spreadsheet with Angular

A basic angular spreadsheet with export to XLSX. 

[Angular Online Spreadsheet](https://codesandbox.io/s/angular-spreadsheet-lbtcwf)

 

#### Online XLSX editor with Angular

[Angular Spreadsheet](https://codesandbox.io/s/online-angular-excel-spreadsheet-lk5bnc)

 

##### Sample angular code

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
 
