title: XLSX to JSS: Importing Excel Files
keywords: Jspreadsheet, javascript, plugins, spreadsheet, XLSX, XLSX parser, XLSX to JSS converter, data grid, import, conversion
description: Learn how to convert a local XLSX file to Jspreadsheet using the XLSX parser extension. Follow this example to import and convert your XLSX files into a Jspreadsheet data grid, unlocking the power of data manipulation and analysis within your web applications.

# XLSX

You might experience differences from the original files due to known limitations, depending on the file format and non-implemented features. We are constantly improving based on our users' feedback, so feel free to submit any improvement requests 

Click in the button below to create a local web-based spreadsheet from a XLSX file.   

{.alert .small}
Requires the parser extension included on the Enterprise Plan



```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/parser/dist/index.min.js"></script>

<div id="table1"></div>

<input type="file" name="file" id='file' style="display: none">

<input type='button' value='Load a XLSX file from my local computer' id="loadlocal">

<script>
// Set license
jspreadsheet.setLicense('###license###');

// Set extensions
jspreadsheet.setExtensions({ parser });

// Create the spreadsheet from a local file
let load = function(e) {
    // Parse XLSX file and create a new spreadsheet
    jspreadsheet.parser({
        file: e.target.files[0],
        // It would be used to updated the formats only
        locale: 'en-GB',
        onload: function(config) {
            jspreadsheet(document.getElementById('table1'), config);
        },
        onerror: function(error) {
            alert(error);
        }
    });
}

document.getElementById("loadlocal").onclick = () => document.getElementById('file').click()
document.getElementById("file").onchange = (event) => load(event)
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { jspreadsheet } from "@jspreadsheet/react";
import parser from "@jspreadsheet/parser";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set license
jspreadsheet.setLicense('###license###');

// Set extensions
jspreadsheet.setExtensions({ parser });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Create the spreadsheet from a local file
    const load = function(e) {
        // Parse XLSX file and create a new spreadsheet
        jspreadsheet.parser({
            file: e.target.files[0],
            // It would be used to updated the formats only
            locale: 'en-GB',
            onload: function(config) {
                jspreadsheet(spreadsheet.current, config);
            },
            onerror: function(error) {
                alert(error);
            }
        });
    }

    // Render component
    return (
        <>
            <div ref={spreadsheet}></div>
            <input type={"file"} name={"file"} id={"file"} onChange={load} style={{ display: 'none' }} />
            <input type={"button"} value={"Load a XLSX file from my local computer"}
                    onClick={() => document.getElementById("file").click()}/>
        </>
    );
}
```
```vue
<template>
    <div ref="sheetEl"></div>
    <input ref="file" type="file" name="file" style="display: none" @change="load" />
    <input type="button" value="Load a XLSX file from my local computer" @click="file.click()"/>
</template>

<script>
import { ref, onMounted } from "vue";
import jspreadsheet from "jspreadsheet";
import parser from "@jspreadsheet/parser";
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

jspreadsheet.setLicense("###license###");

jspreadsheet.setExtensions({ parser });

export default {
name: "Jspreadsheet",
setup() {
  const sheetEl = ref(null);
  const file = ref(null);

  const load = (e) => {
    jspreadsheet.parser({
      file: e.target.files[0],
      locale: "en-GB",
      onload: function (config) {
        jspreadsheet(sheetEl.value, config);
      },
      onerror: function (error) {
        alert(error);
      },
    });
  };

  return {
    sheetEl,
    file,
    load,
  };
},
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import parser from "@jspreadsheet/parser";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ parser });

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>
        <input #file type="file" name="file" style="display:none" />
        <input type="button" value="Load a XLSX file from my local computer" (click)="openFile()"/>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("file") file: ElementRef;

    ngAfterViewInit() {
        let spreadsheet = this.spreadsheet.nativeElement;
        // Add event to the file input
        this.file.nativeElement.onchange = function (e: any) {
            // Parse XLSX file and create a new spreadsheet
            jspreadsheet.parser!({
                file: e.target.files[0],
                locale: "en-GB",
                onload: function (config) {
                    jspreadsheet(spreadsheet, config);
                },
                onerror: function (error) {
                    alert(error);
                }
            });
        };
    }
    openFile() {
        this.file.nativeElement.click();
    }
}

```
 
