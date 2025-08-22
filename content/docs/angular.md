title: Angular Spreadsheet
keywords: Angular, Jspreadsheet, spreadsheet controls, data grid integration, TypeScript support, Angular application development, JavaScript grid functionality
description: Learn to create powerful data grids with Jspreadsheet and Angular with spreadsheet-like controls, featuring spreadsheet-like controls for enhanced functionality.

# Angular Spreadsheet

Jspreadsheet extends its advanced JavaScript Data Grid component capabilities to Angular, offering spreadsheet-like controls tailored for TypeScript and Angular environments. This guide details the steps for incorporating Jspreadsheet into your Angular projects, ensuring a smooth integration process. Each example within this documentation is complemented by an Angular implementation, illustrating practical applications in Angular contexts.

## Documentation

### Installation

```bash
$ npm install jspreadsheet
```
 

### Examples


#### Online Spreadsheet with Angular

A basic angular spreadsheet with export to XLSX. 

- [Angular Online Spreadsheet](https://codesandbox.io/s/angular-spreadsheet-lbtcwf)
- [Angular Data Grid with Spreadsheet Controls](https://stackblitz.com/edit/data-grid-with-spreadsheet-controls)
- [Dynamic spreadsheets](https://stackblitz.com/edit/online-spreadsheets)
 

#### Online XLSX editor with Angular

Import XLSX files and edit them online using Jspreadsheet Pro.

[Angular Spreadsheet](https://codesandbox.io/s/online-angular-excel-spreadsheet-lk5bnc)

 

##### Sample Angular Code

{.ignore}
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

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
    "jsuites/dist/jsuites.css",
    "jspreadsheet/dist/jspreadsheet.css"
],
```

### More Spreadsheet Angular Examples

* [Data Grid Custom Cell Editor](https://stackblitz.com/~/github.com/nicolasjesse/jss-custom-column-ng)
 
