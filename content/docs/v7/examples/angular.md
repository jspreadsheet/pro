title: Jspreadsheet Pro Version 7 with Angular
keywords: Jspreadsheet, Jexcel, javascript, using Jspreadsheet and angular
description: How to integrate Jspreadsheet Pro Version 5 with Angular.


# Angular Spreadsheet

## Installing Jspreadsheet in an angular project

```bash
$ npm install jspreadsheet-pro
```

Running Example:

[Click here to see the project running on codesandbox.](https://codesandbox.io/s/lucid-cohen-rn8o5)

{.ignore}
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import * as jspreadsheet from "jspreadsheet-pro";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("spreadsheet") spreadsheet: ElementRef;
  title = "CodeSandbox";

  ngAfterViewInit() {
    jspreadsheet(this.spreadsheet.nativeElement, {
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
  

NOTE: Make sure to import the jspreadsheet.css in your angular.json


{.ignore}
```javascript
"styles": ["styles.css","./node_modules/jspreadsheet-pro/dist/jspreadsheet.css"],
```
  

Base angular project using jspreadsheet

[View source](https://github.com/jspreadsheet/jspreadsheet-with-angular)
