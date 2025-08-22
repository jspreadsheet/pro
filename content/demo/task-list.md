title: Jspreadsheet Demo Task list
keywords: Jspreadsheet, JavaScript data grid, spreadsheet controls, interactive data grid, web-based applications, lightweight, responsive controls, agnostic platform, Angular, React, Vue, spreadsheet-like plugin, documentation, examples, license
description: Task list demo using JavaScript spreadsheet. Manage tasks, statuses, and checkboxes in an interactive to-do format.

# Task list

This task list demo shows how a JavaScript spreadsheet component can serve as a simple task tracker with checkboxes, priorities, and completion states. It’s ideal for lightweight to-do applications or project feature lists embedded in web tools.

<br>

<div class="demo-code">

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    style: [
      "background-color: #D8E8F1;font-family: Open sans",
      "background-color:rgb(103, 173, 230);font-family: Open sans;font-weight: bold;text-transform:uppercase;font-size:20px;",
      "background-color:rgb(179, 213, 240);font-family: Open sans;font-weight: bold;text-transform:uppercase;font-size:18px;",
      "background-color:#f5f5f5;font-family: Open sans",
      "background-color:#f5f5f5",
      "background-color:rgb(103, 173, 230);font-family: Open sans;font-weight:bold;text-transform:uppercase;font-size:20px;color:#fdffff",
      "background-color:#e0e0e0",
      "background-color:#eeeeee",
      "font-family:Open sans;font-weight:bold;text-transform:uppercase;font-size:20px",
      "font-family:Open sans",
      ""
    ],
    worksheets: [
      {
        data: [
          ["", "To-Do List", "", "", null],
          ["", true, "Write project documentation", "High", null],
          ["", "", "Fix login page bug", "Low", null],
          ["", "", "Set up database backup", "High", null],
          ["", "", "Design dashboard layout", "Low", null],
          ["", true, "Review pull requests", "Medium", null],
          ["", "", "Schedule team meeting", "Low", null],
          ["", "", "Implement user authentication", "High", null],
          ["", true, "Optimize image loading", "Medium", null],
          ["", true, "Refactor old components", "Medium", null],
          ["", "", "Test payment integration", "High", null],
          ["", true, "Clean up unused code", "Low", null],
          ["", true, "Prepare quarterly budget report", "Medium", null],
          ["", true, "Research new frontend frameworks", "High", null],
          ["", "", "Update onboarding documentation", "Low", null],
          ["", "", "Conduct user feedback survey", "Low", null],
          ["", "", "Configure CI/CD pipeline", "Medium", null],
          ["", "", "Analyze website traffic trends", "High", null],
          ["", "", "Create presentation for stakeholders", "High", null],
          ["", true, "Create new demo", "High", null],
          ["", "", null, null, null]
        ],
        columns: [
          { "type": "text", "width": 35 },
          {
            "width": 120,
            "type": "checkbox",
            "align": "center",
            "title": "Done?"
          },
          { "width": 470, "type": "text", "align": "left", "title": "Task" },
          {
            "width": 125,
            "type": "dropdown",
            "source": [
              { "id": "Low", "name": "Low" },
              { "id": "Medium", "name": "Medium" },
              { "id": "High", "name": "High" }
            ],
            "align": "left",
            "title": "Priority"
          },
          { "type": "text", "width": 38 }
        ],
        cells: {
          "B1": { "type": "text" },
        },
        style: {
          "A1": 8,
          "B1": 5,
          "C1": 5,
          "D1": 5,
          "E1": 8,
          "A2": 9,
          "B2": 3,
          "C2": 3,
          "D2": 3,
          "E2": 9,
          "A3": 9,
          "B3": 3,
          "C3": 3,
          "D3": 3,
          "E3": 9,
          "A4": 9,
          "B4": 3,
          "C4": 3,
          "D4": 3,
          "E4": 9,
          "A5": 9,
          "B5": 3,
          "C5": 3,
          "D5": 3,
          "E5": 9,
          "A6": 9,
          "B6": 3,
          "C6": 3,
          "D6": 3,
          "E6": 9,
          "A7": 9,
          "B7": 3,
          "C7": 3,
          "D7": 3,
          "E7": 9,
          "A8": 9,
          "B8": 3,
          "C8": 3,
          "D8": 3,
          "E8": 9,
          "A9": 9,
          "B9": 3,
          "C9": 3,
          "D9": 3,
          "E9": 9,
          "A10": 9,
          "B10": 3,
          "C10": 3,
          "D10": 3,
          "E10": 9,
          "A11": 9,
          "B11": 3,
          "C11": 3,
          "D11": 3,
          "E11": 9,
          "A12": 9,
          "B12": 3,
          "C12": 3,
          "D12": 3,
          "E12": 9,
          "A13": 10,
          "B13": 4,
          "C13": 4,
          "D13": 4,
          "E13": 10,
          "A14": 10,
          "B14": 4,
          "C14": 4,
          "D14": 4,
          "E14": 10,
          "A15": 10,
          "B15": 4,
          "C15": 4,
          "D15": 4,
          "E15": 10,
          "A16": 10,
          "B16": 4,
          "C16": 4,
          "D16": 4,
          "E16": 10,
          "A17": 10,
          "B17": 4,
          "C17": 4,
          "D17": 4,
          "E17": 10,
          "A18": 10,
          "B18": 4,
          "C18": 4,
          "D18": 4,
          "E18": 10,
          "A19": 10,
          "B19": 4,
          "C19": 4,
          "D19": 4,
          "E19": 10,
          "A20": 10,
          "B20": 4,
          "C20": 4,
          "D20": 4,
          "E20": 10,
          "A21": 10,
          "B21": 4,
          "C21": 4,
          "D21": 4,
          "E21": 10
        },
        worksheetName: "To-Do List",
        gridline: false,
        tableOverflow: true,
        tableWidth: 1300,
        tableHeight: 620,
        resize: "both",
        minDimensions: [5, 21],
        mergeCells: { "B1": [3, 1] },
      }
    ],
    toolbar: true
});

</script>
</html>
``` 
```jsx
import React , { useEffect, useRef } from "react";
import 'jspreadsheet/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';
import jspreadsheet from 'jspreadsheet';
import './App.css';

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

export default function App() {
  const spreadsheetRef = useRef(null);

  useEffect(() => {
    jspreadsheet.setLicense(license);

    const instance = jspreadsheet(spreadsheetRef.current, {
      style: [
        "background-color: #D8E8F1;font-family: Open sans",
        "background-color:rgb(103, 173, 230);font-family: Open sans;font-weight: bold;text-transform:uppercase;font-size:20px;",
        "background-color:rgb(179, 213, 240);font-family: Open sans;font-weight: bold;text-transform:uppercase;font-size:18px;",
        "background-color:#f5f5f5;font-family: Open sans",
        "background-color:#f5f5f5",
        "background-color:rgb(103, 173, 230);font-family: Open sans;font-weight:bold;text-transform:uppercase;font-size:20px;color:#fdffff",
        "background-color:#e0e0e0",
        "background-color:#eeeeee",
        "font-family:Open sans;font-weight:bold;text-transform:uppercase;font-size:20px",
        "font-family:Open sans",
        ""
      ],
      worksheets: [
        {
          data: [
            ["", "To-Do List", "", "", null],
            ["", true, "Write project documentation", "High", null],
            ["", "", "Fix login page bug", "Low", null],
            ["", "", "Set up database backup", "High", null],
            ["", "", "Design dashboard layout", "Low", null],
            ["", true, "Review pull requests", "Medium", null],
            ["", "", "Schedule team meeting", "Low", null],
            ["", "", "Implement user authentication", "High", null],
            ["", true, "Optimize image loading", "Medium", null],
            ["", true, "Refactor old components", "Medium", null],
            ["", "", "Test payment integration", "High", null],
            ["", true, "Clean up unused code", "Low", null],
            ["", true, "Prepare quarterly budget report", "Medium", null],
            ["", true, "Research new frontend frameworks", "High", null],
            ["", "", "Update onboarding documentation", "Low", null],
            ["", "", "Conduct user feedback survey", "Low", null],
            ["", "", "Configure CI/CD pipeline", "Medium", null],
            ["", "", "Analyze website traffic trends", "High", null],
            ["", "", "Create presentation for stakeholders", "High", null],
            ["", true, "Create new demo", "High", null],
            ["", "", null, null, null]
          ],
          columns: [
            { type: "text", width: 35 },
            {
              width: 120,
              type: "checkbox",
              align: "center",
              title: "Done?"
            },
            { width: 470, type: "text", align: "left", title: "Task" },
            {
              width: 125,
              type: "dropdown",
              source: [
                { id: "Low", name: "Low" },
                { id: "Medium", name: "Medium" },
                { id: "High", name: "High" }
              ],
              align: "left",
              title: "Priority"
            },
            { type: "text", width: 38 }
          ],
          mergeCells: { B1: [3, 1] },
          cells: {
            "B1": { "type": "text" },
          },
          style: {
            A1: 8, B1: 5, C1: 5, D1: 5, E1: 8,
            A2: 9, B2: 3, C2: 3, D2: 3, E2: 9,
            A3: 9, B3: 3, C3: 3, D3: 3, E3: 9,
            A4: 9, B4: 3, C4: 3, D4: 3, E4: 9,
            A5: 9, B5: 3, C5: 3, D5: 3, E5: 9,
            A6: 9, B6: 3, C6: 3, D6: 3, E6: 9,
            A7: 9, B7: 3, C7: 3, D7: 3, E7: 9,
            A8: 9, B8: 3, C8: 3, D8: 3, E8: 9,
            A9: 9, B9: 3, C9: 3, D9: 3, E9: 9,
            A10: 9, B10: 3, C10: 3, D10: 3, E10: 9,
            A11: 9, B11: 3, C11: 3, D11: 3, E11: 9,
            A12: 9, B12: 3, C12: 3, D12: 3, E12: 9,
            A13: 10, B13: 4, C13: 4, D13: 4, E13: 10,
            A14: 10, B14: 4, C14: 4, D14: 4, E14: 10,
            A15: 10, B15: 4, C15: 4, D15: 4, E15: 10,
            A16: 10, B16: 4, C16: 4, D16: 4, E16: 10,
            A17: 10, B17: 4, C17: 4, D17: 4, E17: 10,
            A18: 10, B18: 4, C18: 4, D18: 4, E18: 10,
            A19: 10, B19: 4, C19: 4, D19: 4, E19: 10,
            A20: 10, B20: 4, C20: 4, D20: 4, E20: 10,
            A21: 10, B21: 4, C21: 4, D21: 4, E21: 10,
          },
          worksheetName: "To-Do List",
          gridline: false,
          tableOverflow: true,
          tableWidth: 1300,
          tableHeight: 620,
          resize: "both",
          minDimensions: [5, 21]
        }
      ],
      toolbar: true
    });

    return () => {
      instance?.destroy?.();
    };
  }, []);

  return <div ref={spreadsheetRef}></div>;
}
```
```vue
<template>
  <Spreadsheet
    ref="spreadsheet"
    :license="license"
    :worksheets="worksheets"
    :styles="globalStyle"
    toolbar="true"
  />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

export default {
  components: { Spreadsheet, Worksheet },
  data() {
    return {
      // Set your JSS license key (The following key only works for one day)
      license: '###license###',
      globalStyle: [
        "background-color: #D8E8F1;font-family: Open sans",
        "background-color:rgb(103, 173, 230);font-family: Open sans;font-weight: bold;text-transform:uppercase;font-size:20px;",
        "background-color:rgb(179, 213, 240);font-family: Open sans;font-weight: bold;text-transform:uppercase;font-size:18px;",
        "background-color:#f5f5f5;font-family: Open sans",
        "background-color:#f5f5f5",
        "background-color:rgb(103, 173, 230);font-family: Open sans;font-weight:bold;text-transform:uppercase;font-size:20px;color:#fdffff",
        "background-color:#e0e0e0",
        "background-color:#eeeeee",
        "font-family:Open sans;font-weight:bold;text-transform:uppercase;font-size:20px",
        "font-family:Open sans",
        "",
      ],
      worksheets: [
        {
          worksheetName: "To-Do List",
          toolbar: true,
          data: [
            ["", "To-Do List", "", "", null],
            ["", true, "Write project documentation", "High", null],
            ["", "", "Fix login page bug", "Low", null],
            ["", "", "Set up database backup", "High", null],
            ["", "", "Design dashboard layout", "Low", null],
            ["", true, "Review pull requests", "Medium", null],
            ["", "", "Schedule team meeting", "Low", null],
            ["", "", "Implement user authentication", "High", null],
            ["", true, "Optimize image loading", "Medium", null],
            ["", true, "Refactor old components", "Medium", null],
            ["", "", "Test payment integration", "High", null],
            ["", true, "Clean up unused code", "Low", null],
            ["", true, "Prepare quarterly budget report", "Medium", null],
            ["", true, "Research new frontend frameworks", "High", null],
            ["", "", "Update onboarding documentation", "Low", null],
            ["", "", "Conduct user feedback survey", "Low", null],
            ["", "", "Configure CI/CD pipeline", "Medium", null],
            ["", "", "Analyze website traffic trends", "High", null],
            ["", "", "Create presentation for stakeholders", "High", null],
            ["", true, "Create new demo", "High", null],
            ["", "", null, null, null],
          ],
          columns: [
            { type: "text", width: 35 },
            { type: "checkbox", width: 120, align: "center", title: "Done?" },
            { type: "text", width: 470, align: "left", title: "Task" },
            {
              type: "dropdown",
              width: 125,
              source: [
                { id: "Low", name: "Low" },
                { id: "Medium", name: "Medium" },
                { id: "High", name: "High" },
              ],
              align: "left",
              title: "Priority",
            },
            { type: "text", width: 38 },
          ],
          mergeCells: {
            B1: [3, 1],
          },
          cells: {
            "B1": { "type": "text" },
          },
          style: {
            A1: 8, B1: 5, C1: 5, D1: 5, E1: 8,
            A2: 9, B2: 3, C2: 3, D2: 3, E2: 9,
            A3: 9, B3: 3, C3: 3, D3: 3, E3: 9,
            A4: 9, B4: 3, C4: 3, D4: 3, E4: 9,
            A5: 9, B5: 3, C5: 3, D5: 3, E5: 9,
            A6: 9, B6: 3, C6: 3, D6: 3, E6: 9,
            A7: 9, B7: 3, C7: 3, D7: 3, E7: 9,
            A8: 9, B8: 3, C8: 3, D8: 3, E8: 9,
            A9: 9, B9: 3, C9: 3, D9: 3, E9: 9,
            A10: 9, B10: 3, C10: 3, D10: 3, E10: 9,
            A11: 9, B11: 3, C11: 3, D11: 3, E11: 9,
            A12: 9, B12: 3, C12: 3, D12: 3, E12: 9,
            A13: 10, B13: 4, C13: 4, D13: 4, E13: 10,
            A14: 10, B14: 4, C14: 4, D14: 4, E14: 10,
            A15: 10, B15: 4, C15: 4, D15: 4, E15: 10,
            A16: 10, B16: 4, C16: 4, D16: 4, E16: 10,
            A17: 10, B17: 4, C17: 4, D17: 4, E17: 10,
            A18: 10, B18: 4, C18: 4, D18: 4, E18: 10,
            A19: 10, B19: 4, C19: 4, D19: 4, E19: 10,
            A20: 10, B20: 4, C20: 4, D20: 4, E20: 10,
            A21: 10, B21: 4, C21: 4, D21: 4, E21: 10,
          },
          gridline: false,
          tableOverflow: true,
          tableWidth: 1300,
          tableHeight: 620,
          resize: "both",
          minDimensions: [5, 21],
        },
      ],
    };
  },
};
</script>
```
```angularjs
import { Component, ElementRef, ViewChild } from '@angular/core';
import jspreadsheet from 'jspreadsheet';

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<div #spreadsheet></div>`,
})

export class AppComponent {
  @ViewChild('spreadsheet', { static: true }) spreadsheet!: ElementRef;

  ngAfterViewInit() {
    jspreadsheet(this.spreadsheet.nativeElement, {
      style: [
        'background-color: #D8E8F1;font-family: Open sans',
        'background-color:rgb(103, 173, 230);font-family: Open sans;font-weight: bold;text-transform:uppercase;font-size:20px;',
        'background-color:rgb(179, 213, 240);font-family: Open sans;font-weight: bold;text-transform:uppercase;font-size:18px;',
        'background-color:#f5f5f5;font-family: Open sans',
        'background-color:#f5f5f5',
        'background-color:rgb(103, 173, 230);font-family: Open sans;font-weight:bold;text-transform:uppercase;font-size:20px;color:#fdffff',
        'background-color:#e0e0e0',
        'background-color:#eeeeee',
        'font-family:Open sans;font-weight:bold;text-transform:uppercase;font-size:20px',
        'font-family:Open sans',
        '',
      ],
      worksheets: [
        {
          data: [
            ['', 'To-Do List', '', '', null],
            ['', true, 'Write project documentation', 'High', null],
            ['', '', 'Fix login page bug', 'Low', null],
            ['', '', 'Set up database backup', 'High', null],
            ['', '', 'Design dashboard layout', 'Low', null],
            ['', true, 'Review pull requests', 'Medium', null],
            ['', '', 'Schedule team meeting', 'Low', null],
            ['', '', 'Implement user authentication', 'High', null],
            ['', true, 'Optimize image loading', 'Medium', null],
            ['', true, 'Refactor old components', 'Medium', null],
            ['', '', 'Test payment integration', 'High', null],
            ['', true, 'Clean up unused code', 'Low', null],
            ['', true, 'Prepare quarterly budget report', 'Medium', null],
            ['', true, 'Research new frontend frameworks', 'High', null],
            ['', '', 'Update onboarding documentation', 'Low', null],
            ['', '', 'Conduct user feedback survey', 'Low', null],
            ['', '', 'Configure CI/CD pipeline', 'Medium', null],
            ['', '', 'Analyze website traffic trends', 'High', null],
            ['', '', 'Create presentation for stakeholders', 'High', null],
            ['', true, 'Create new demo', 'High', null],
            ['', '', null, null, null],
          ],
          columns: [
            { type: 'text', width: 35 },
            {
              width: 120,
              type: 'checkbox',
              align: 'center',
              title: 'Done?',
            },
            { width: 470, type: 'text', align: 'left', title: 'Task' },
            {
              width: 125,
              type: 'dropdown',
              source: [
                { id: 'Low', name: 'Low' },
                { id: 'Medium', name: 'Medium' },
                { id: 'High', name: 'High' },
              ],
              align: 'left',
              title: 'Priority',
            },
            { type: 'text', width: 38 },
          ],
          cells: {
            B1: { type: 'text' },
          },
          style: {
            A1: 8,
            B1: 5,
            C1: 5,
            D1: 5,
            E1: 8,
            A2: 9,
            B2: 3,
            C2: 3,
            D2: 3,
            E2: 9,
            A3: 9,
            B3: 3,
            C3: 3,
            D3: 3,
            E3: 9,
            A4: 9,
            B4: 3,
            C4: 3,
            D4: 3,
            E4: 9,
            A5: 9,
            B5: 3,
            C5: 3,
            D5: 3,
            E5: 9,
            A6: 9,
            B6: 3,
            C6: 3,
            D6: 3,
            E6: 9,
            A7: 9,
            B7: 3,
            C7: 3,
            D7: 3,
            E7: 9,
            A8: 9,
            B8: 3,
            C8: 3,
            D8: 3,
            E8: 9,
            A9: 9,
            B9: 3,
            C9: 3,
            D9: 3,
            E9: 9,
            A10: 9,
            B10: 3,
            C10: 3,
            D10: 3,
            E10: 9,
            A11: 9,
            B11: 3,
            C11: 3,
            D11: 3,
            E11: 9,
            A12: 9,
            B12: 3,
            C12: 3,
            D12: 3,
            E12: 9,
            A13: 10,
            B13: 4,
            C13: 4,
            D13: 4,
            E13: 10,
            A14: 10,
            B14: 4,
            C14: 4,
            D14: 4,
            E14: 10,
            A15: 10,
            B15: 4,
            C15: 4,
            D15: 4,
            E15: 10,
            A16: 10,
            B16: 4,
            C16: 4,
            D16: 4,
            E16: 10,
            A17: 10,
            B17: 4,
            C17: 4,
            D17: 4,
            E17: 10,
            A18: 10,
            B18: 4,
            C18: 4,
            D18: 4,
            E18: 10,
            A19: 10,
            B19: 4,
            C19: 4,
            D19: 4,
            E19: 10,
            A20: 10,
            B20: 4,
            C20: 4,
            D20: 4,
            E20: 10,
            A21: 10,
            B21: 4,
            C21: 4,
            D21: 4,
            E21: 10,
          },
          worksheetName: 'To-Do List',
          gridline: false,
          tableOverflow: true,
          tableWidth: 1300,
          tableHeight: 620,
          resize: 'both',
          minDimensions: [5, 21],
          mergeCells: { B1: [3, 1] },
        },
      ],
      toolbar: true,
    });
  }
}
```

</div>