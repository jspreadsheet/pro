title: Jspreadsheet Demo Performance
keywords: Jspreadsheet, JavaScript data grid, spreadsheet controls, interactive data grid, web-based applications, lightweight, responsive controls, agnostic platform, Angular, React, Vue, spreadsheet-like plugin, documentation, examples, license
description: Example of rendering speed and scalability of Jspreadsheet: 10,000 x 100,000 cell spreadsheet rendered in milliseconds.

# Performance

Performance demo that highlights the rendering speed and scalability of Jspreadsheet by initializing a table with 10,000 columns and 100,000 rows in under 200 milliseconds. It showcases the engine’s ability to handle large datasets while maintaining a responsive UI, ideal for high-volume data applications.
<br><br>

<div class="demo-code">

````html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id="spreadsheet"></div>
<p id="log"></p>

<script>
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ formula });

const s = Date.now();

const log = document.getElementById('log');

 jspreadsheet(document.getElementById('spreadsheet'), {
      toolbar: true,
      worksheets: [
        {
          data: [[1, "=SUM(A1:A3)"], [2], [3]],
          minDimensions: [10000, 100000],
          tableOverflow: true,
          tableWidth: 1300,
          tableHeight: 320,
          resize: "both",
          columns: [],
          worksheetName: "Sheet1",
          worksheetId: "dad25d0e-07f5-41f2-bab4-bb58c41d6899",
          rows: [],
          meta: {},
          comments: {},
          cells: {},
          cache: {},
          mergeCells: {}
        }
      ],

      onload: function () {
        const e = Date.now();
        self.log.innerText = 'This table has 10000 columns x 100000 rows and it was created in: ' + (e - s) + 'ms.';
      }
    });
  </script>
````
````jsx
import React, { useEffect ,useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import './App.css';

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

export default function App() {
  const spreadsheetRef = useRef(null);

  const s = Date.now();

  const log = document.getElementById('log');

  useEffect(() => {
    jspreadsheet.setLicense(license);
    jspreadsheet.setExtensions({ formula });

    const instance = jspreadsheet(spreadsheetRef.current, {
      toolbar: true,
      worksheets: [
        {
          data: [[1, "=SUM(A1:A3)"], [2], [3]],
          minDimensions: [10000, 100000],
          tableOverflow: true,
          tableWidth: 1300,
          tableHeight: 320,
          resize: "both",
          columns: [],
          worksheetName: "Sheet1",
          worksheetId: "dad25d0e-07f5-41f2-bab4-bb58c41d6899",
          rows: [],
          meta: {},
          comments: {},
          cells: {},
          cache: {},
          mergeCells: {}
        }
      ],

      onload: function () {
        const e = Date.now();
        self.log.innerText = 'This table has 10000 columns x 100000 rows and it was created in: ' + (e - s) + 'ms.';
      }
    });

    return () => {
      instance?.destroy?.();
    };
  }, []);

  return <>
        <div ref={spreadsheetRef}></div>
        <p id="log"></p>
    </>;
}
````
````vue
<template>
  <Spreadsheet
    ref="spreadsheet"
    :license="license"
    :worksheets="worksheets"
    :styles="globalStyle"
    toolbar="true">
  </Spreadsheet>
  <p id="log"></p>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');
jspreadsheet.setExtensions({ formula });

export default {
  components: { Spreadsheet, Worksheet },
  data() {
    return {
      start: Date.now(),
      toolbar: true,
      worksheets: [
        {
          data: [[1, "=SUM(A1:A3)"], [2], [3]],
          minDimensions: [10000, 100000],
          tableOverflow: true,
          tableWidth: 1300,
          tableHeight: 320,
          resize: "both",
          columns: [],
          worksheetName: "Sheet1",
          worksheetId: "dad25d0e-07f5-41f2-bab4-bb58c41d6899",
          rows: [],
          meta: {},
          comments: {},
          cells: {},
          cache: {},
          mergeCells: {}
        }
      ]
    };
  },
  methods: {
    handleLoad() {
      const end = Date.now();
      this.$refs.log.innerText =
        `This table has 10000 columns x 100000 rows and was created in ${end - this.start} ms.`;
    },
  },
};
</script>
````
````angularjs
import { Component, ElementRef, ViewChild } from '@angular/core';
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';

jspreadsheet.setLicense('###license###');
jspreadsheet.setExtensions({ formula });

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div #spreadsheet></div>
    <p #log></p>
  `,
})
export class AppComponent {
  @ViewChild('spreadsheet', { static: true }) spreadsheet!: ElementRef<HTMLDivElement>;
  @ViewChild('log', { static: true }) log!: ElementRef<HTMLParagraphElement>;

  private startTime = Date.now();

  ngAfterViewInit() {
    const logEl = this.log.nativeElement;
    const s = this.startTime;

    jspreadsheet(this.spreadsheet.nativeElement, {
      toolbar: true,
      worksheets: [
        {
          data: [[1, '=SUM(A1:A3)'], [2], [3]],
          minDimensions: [10000, 100000],
          tableOverflow: true,
          tableWidth: '800px',
          tableHeight: '300px',
          columns: [],
          worksheetName: 'Sheet1',
          worksheetId: 'dad25d0e-07f5-41f2-bab4-bb58c41d6899',
          rows: [],
          meta: {},
          comments: {},
          cells: {},
          cache: {},
          mergeCells: {}
        }
      ],
      onload: () => {
        const e = Date.now();
        logEl.innerText = 
          `This table has 10000 columns x 100000 rows and was created in: ${e - s} ms.`;
      }
    });
  }
}
````

</div>