title: Advanced Comments Extension: Enabling Multiple Comments in the Spreadsheet Cells
keywords: Jspreadsheet, Jexcel, javascript, payment calculator spreadsheet, grid, data grid, comments, multiple spreadsheet comments, Advanced Comments Extension, user identification, date tracking, interactive spreadsheets, data management, JavaScript plugin, data grid plugin
description: Improve collaboration and organization in Jspreadsheet with the Advanced Comments Extension. Effortlessly add multiple comments in a single cell, complete with user identification and date tracking, for enhanced teamwork and data management.

![Data Grid Advanced Comments](img/data-grid/advanced-comments.svg){.icon}

# Spreadsheet Comments

The JSS advanced comments extension offers a user-friendly method for adding multiple comments to a specific cell within the JSS spreadsheet. It allows for the inclusion of user and date information with each comment, providing a simple and effective means of managing comments within the spreadsheet. 

## Documentation

### Configuration

| Setting          | Description                        |
| -----------------|------------------------------------|
| name?: String    | The user full name                 |
| image?: String   | Photo of the user                  |
| user_id?: Number | User unique identification number. |

 

#### Declaring the user in this session

You can identify which user is currently using the spreadsheet, enabling proper identification of any comments added to the cells. 

{.ignore}
```javascript
// Declare the user information to the session
comments({
    user_id: 1,
    name: 'John Lennon',
    image: 'img/john.jpg',
})
```
 

### Installation

Please choose one of the following options

#### Using NPM

Install the necessary dependencies

```bash
$ npm install @jspreadsheet/comments
```

Import the necessary CSS

{.ignore}
```javascript
import "@jsuites/css/dist/style.css";
import "@jspreadsheet/comments/dist/style.css";
```
#### Using a CDN

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/comments/dist/index.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jsuites/css/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/comments/dist/style.min.css" type="text/css" />
```
 

## Examples

### Multiple comments to a data grid

A new option is added to the context menu. Right-click above any cell and click in the Comments option. 

```html
<html>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jsuites/css/dist/style.min.css" type="text/css"/>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/comments/dist/style.min.css" type="text/css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jsuites/css/dist/style.min.css" type="text/css"/>

<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/comments/dist/index.min.js"></script>

<div id='spreadsheet'></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.license = '###license###';

// Advance comments add-on for the JSS data grid
jspreadsheet.setExtensions({ comments });

// Define the information about the user
jspreadsheet.comments({
    user_id: 1000,
    name: 'John Lennon',
    image: 'img/lennon.png'
});

// Create the spreadsheets
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [
        {
            minDimensions: [6,8],
            comments: {
                // Advance comments receive an object
                A3: [
                    {
                         name: 'George Michael',
                         image: 'img/4.jpg',
                         date: '2022-04-28 12:00:21',
                         comments: 'Please can you try that one?',
                    },
                    {
                         name: 'Miguel Rodrigues',
                         image: 'img/7359.jpg',
                         date: '2022-05-01 00:00:21',
                         comments: 'Yes. Can you send more details about the calculations?',
                    }
                ],
                // Simple comments (notes)
                F1: 'test',
             }
        },
    ],
});
</script>
</html>
```
```jsx
import React, { useRef, useState } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import comments from "@jspreadsheet/comments";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@jsuites/css/dist/style.css";
import "@jspreadsheet/comments/dist/style.css";

// Set the data grid license
const license = '###license###';

// Define the data grid extensions
const extensions = { comments };

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Who is connected to the data grid
    comments({
        user_id: 1000,
        name: 'John Lennon',
        image: 'img/lennon.png'
    });

    // Comments
    const worksheetComments = {
        // Advance comments receive an object
        A3: [
            {
                 name: 'George Michael',
                 image: 'img/4.jpg',
                 date: '2022-04-28 12:00:21',
                 comments: 'Please can you try that one?',
            },
            {
                 name: 'Miguel Rodrigues',
                 image: 'img/7359.jpg',
                 date: '2022-05-01 00:00:21',
                 comments: 'Yes. Can you send more details about the calculations?',
            }
        ],
        // Simple comments (notes)
        F1: 'test',
     }

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license} extensions={extensions}>
            <Worksheet comments={worksheetComments} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions">
        <Worksheet :minDimensions="[10,10]" :comments="comments" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import comments from "@jspreadsheet/comments";

// Define the data grid license
const license = '###license###';

// Define the data grid extensions
const extensions = { comments };

// Who is connected to the data grid
comments({
    user_id: 1000,
    name: "John Lennon",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg",
});

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Comments
        const comments = {
            A3: [{
                name: "George Michael",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNBvnyqH0ZPLUFNGhOpZ09m7C4e3PDzsHELj51FYdcu_jIU1z97Y-ucjrSnxr1H-S0TM&usqp=CAU",
                date: "2022-04-28 12:00:21",
                comments: "Please can you try that one?",
            },
            {
                 name: 'Miguel Rodrigues',
                 image: 'img/7359.jpg',
                 date: '2022-05-01 00:00:21',
                 comments: 'Yes. Can you send more details about the calculations?',
            }],
            // Simple comments (notes)
            F1: "test",
        }

        return {
            comments,
            license,
            extensions,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import comments from "@jspreadsheet/comments";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@jsuites/css/dist/style.css";
import "@jspreadsheet/comments/dist/style.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Extensions
jspreadsheet.setExtensions({ comments });

// Who is connected to the data grid
comments({
    user_id: 1000,
    name: "John Lennon",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg"
});

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [10, 10],
                comments: {
                    A3: [{
                        name: "George Michael",
                        date: "2022-04-28 12:00:21",
                        comments: "Please can you try that one?"
                    },
                    {
                        name: 'Miguel Rodrigues',
                        date: '2022-05-01 00:00:21',
                        comments: 'Yes. Can you send more details about the calculations?',
                    }],
                    // Simple comments (notes)
                    F1: "test"
                }
            }]
        });
    }
}
```
 
