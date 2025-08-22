title: Jspreadsheet Pro Version 5 with Angular
keywords: Jspreadsheet, javascript, using Jspreadsheet and angular
description: An example of how to integrate Jspreadsheet with Angular.



# Jspreadsheet with Angular

## Installing Jspreadsheet in an angular project



```bash
$ npm install Jspreadsheet-pro
```
 

Running Example:

[Click here to see the project running on codesandbox.](https://codesandbox.io/s/lucid-cohen-rn8o5)

 

### Source code


{.ignore}
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import * as Jspreadsheet from "Jspreadsheet-pro";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("spreadsheet") spreadsheet: ElementRef;
  title = "CodeSandbox";

  ngAfterViewInit() {
    Jspreadsheet(this.spreadsheet.nativeElement, {
      data: [[]],
      columns: [
        { type: "dropdown", width: "100px", source: ["Y", "N"] },
        { type: "color", width: "100px", render: "square" }
      ],
      minDimensions: [10, 10]
    });
  }
}
```
  

NOTE: Make sure to import the Jspreadsheet.css in your angular.json


{.ignore}
```javascript
"styles": ["styles.css","./node_modules/Jspreadsheet-pro/dist/jspreadsheet.css"],
```
  

Base angular project using Jspreadsheet

[View source](https://github.com/jexcel/Jspreadsheet-with-angular)
