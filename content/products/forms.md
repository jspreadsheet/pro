title: JSS Forms: Streamline Data Entry with Spreadsheet-Integrated HTML Forms
keywords: Jspreadsheet, Jexcel, javascript, data grid, forms, spreadsheet to forms converter, JSS Forms, premium extension, HTML forms, column definitions, remote server, new spreadsheet rows, onbeforesave function, custom behaviour, form data, data entry, spreadsheet integration, form creation, spreadsheet conversion, spreadsheet to form transformation, data management, spreadsheet solutions, data grid plugin
description: Transform your JSS spreadsheets into dynamic HTML forms with the JSS Forms extension. Easily send form data to a server, create new spreadsheet rows, or customize behaviour for versatile data management.

![Spreadsheet to HTML form](img/data-grid/spreadsheet-to-form.svg){.icon}

# Spreadsheet to HTML form

JSS Forms is a premium extension that enables you to create an HTML form directly from the spreadsheet column definitions in your JSS spreadsheet. With this tool, you can send form data to a remote server, create new spreadsheet rows, or define custom behaviour using the `onbeforesave` function. 

## Documentation

### Settings

| Method                   | Description                                                                             |
| -------------------------|-----------------------------------------------------------------------------------------|
| url?: String             | The URL where the data should be sent.                                                  |
| logo?: String            | The URL of the form logo.                                                               |
| instructions?: String    | Text with the instructions for the user. `Default: 'Please fill the form below'`        |
| completeMessage?: String | Text the users after submitting the form. Default: `Default: 'Thank you for your time'` |
| columns?: Array          | Form field definitions, extracted from a valid JSS spreadsheet.                         |
| onbeforesave?: Function  | Intercept the save to change or cancel the user action.                                 |
| onsave?: Function        | Will trigger the method after the form is submitted by the user.                        |

 

## Installation

Please choose one of the following options 

### Using NPM

```bash
$ npm install @jspreadsheet/forms
```
 

### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/forms/dist/index.min.js"></script>
```
 

## Example

The following example creates an HTML form from the JSS spreadsheet and the data will be added to a spreadsheet. But, you can send this data to a server for example.  

 
### Create a Form From my Spreadsheet

Create a new row in the spreadsheet with the form data

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/forms/dist/index.min.js"></script>

<div id="spreadsheet1"></div>

<p><input type='button' value='Create form' id="btn1"></p>

<div id="spreadsheet2"></div>

<script>
let create = function() {
    // Spreadsheet instance of the first worksheet
    let worksheet = jss[0];

    // Create form from the spreadsheet
    jspreadsheet.forms(document.getElementById('spreadsheet2'), {
        logo: 'https://jspreadsheet.com/jspreadsheet/logo.png',
        columns: worksheet.options.columns,
        onbeforesave: function(el, data) {
            // Get the values
            worksheet.insertRow([{ data: Object.values(data) }]);
            // Stop default behavior
            return false;
        }
    });
}

// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');

// Set the extensions
jspreadsheet.setExtensions({ forms });

// Create the spreadsheet
let jss = jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [{
        minDimensions: [ 6, 4 ],
        columns: [
            {
                title: 'Name'
            },
            {
                title: 'Birthday',
                type: 'calendar'
            },
            {
                title: 'Team color',
                type: 'color'
            },
            {
                title: 'Department',
                type: 'dropdown',
                source: ['Accounts','IT','Marketing'],
                width: '150px',
            },
            {
                title: 'Rating',
                type: 'rating',
            },
            {
                title: 'Reviewed',
                type: 'checkbox',
            },
        ]
    }],
});

document.getElementById("btn1").onclick = create
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import forms from "@jspreadsheet/forms";

import "@lemonadejs/studio";
import "@lemonadejs/studio/dist/style.css";
import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Define the grid license
const license = '###license###';

// Define the grid extensions
const extensions = { forms };

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Form
    const form = useRef();
    // Columns
    const columns = [
        { title: 'Name' },
        { title: 'Birthday', type: 'calendar' },
        { title: 'Team color', type: 'color' },
        { title: 'Department', type: 'dropdown', source: ['Accounts','IT','Marketing'] },
        { title: 'Rating', type: 'rating', }, { title: 'Reviewed', type: 'checkbox', }
    ];
    // Create form
    const create = () => {
        // First worksheet instance
        let worksheet = spreadsheet.current[0];
        // Create form from the spreadsheet
        jspreadsheet.forms(form.current, {
            logo: 'https://jspreadsheet.com/jspreadsheet/logo.png',
            columns: worksheet.options.columns,
            onbeforesave: function(el, data) {
                // Get the values
                worksheet.insertRow([{ data: Object.values(data) }]);
                // Stop default behavior
                return false;
            }
        });
    }
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} extensions={extensions}>
                <Worksheet columns={columns} minDimensions={[6, 4]}/>
            </Spreadsheet>
            <div ref={form}></div>
            <input type="button" value="Create form" onClick={() => create()} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions">
        <Worksheet :minDimensions="[6, 4]" :columns="columns" />
    </Spreadsheet>
    <div ref="form"></div>
    <input type="button" value="Create form" @click="create" />
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from '@jspreadsheet/vue';
import forms from '@jspreadsheet/forms';

import '@lemonadejs/studio';
import '@lemonadejs/studio/dist/style.css';
import 'jspreadsheet/dist/jspreadsheet.css';
import 'jsuites/dist/jsuites.css';

// Define the grid license
const license = '###license###';

// Define the grid extensions
const extensions = { forms };

export default {
  components: {
    Spreadsheet,
    Worksheet,
  },
  methods: {
    create() {
      // First worksheet instance
      let worksheet = this.$refs.spreadsheet.current[0];
      // Create form from the spreadsheet
      jspreadsheet.forms(this.$refs.form, {
        logo: 'https://jspreadsheet.com/jspreadsheet/logo.png',
        columns: worksheet.options.columns,
        onbeforesave: function (el, data) {
          // Get the values
          worksheet.insertRow([{ data: Object.values(data) }]);
          // Stop default behavior
          return false;
        },
      });
    },
  },
  data() {
    return {
      license,
      extensions,
      columns: [
        { title: 'Name' },
        { title: 'Birthday', type: 'calendar' },
        { title: 'Team color', type: 'color' },
        {
          title: 'Department',
          type: 'dropdown',
          source: ['Accounts', 'IT', 'Marketing'],
        },
        { title: 'Rating', type: 'rating' },
        { title: 'Reviewed', type: 'checkbox' },
      ],
    };
  },
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"
import form from "@jspreadsheet/form";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ form });

@Component({
  selector: "app-root",
  template: `<div #spreadsheet></div>
    <div #form></div>
    <input type="button" value="Create form" (click)="create()" />`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("form") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [ 6, 4 ],
                columns: [
                    {
                        title: 'Name'
                    },
                    {
                        title: 'Birthday',
                        type: 'calendar'
                    },
                    {
                        title: 'Team color',
                        type: 'color'
                    },
                    {
                        title: 'Department',
                        type: 'dropdown',
                        source: ['Accounts','IT','Marketing'],
                        width: '150px',
                    },
                    {
                        title: 'Rating',
                        type: 'rating',
                    },
                    {
                        title: 'Reviewed',
                        type: 'checkbox',
                    },
                ]
            }],
        });
    }
    create() {
        // First worksheet instance
        let worksheet = this.worksheets[0];
        // Create form from the spreadsheet
        jspreadsheet.forms(this.form, {
            logo: 'https://jspreadsheet.com/jspreadsheet/logo.png',
            columns: worksheet.options.columns,
            onbeforesave: function(el, data) {
                // Get the values
                worksheet.insertRow([{ data: Object.values(data) }]);
                // Stop default behavior
                return false;
            }
        });
    }
}
```
 
