title: JavaScript Shapes Extension
keywords: Jspreadsheet, Jexcel, javascript, data grid, charts
description: Jspreadsheet Shapes extensions helps users to add and manage excel-like floating shapes on their Jspreadsheet data grids.

![Data Grid Shapes](img/data-grid/shapes.svg){.icon}

# Shapes Extensions

The shapes extension allows users to add floating shapes on their worksheets.

## Documentation

### Initial Setting

| Settings              | Description                               |
|-----------------------|-------------------------------------------|
| type: String         | Must be 'shape' when using shape-based media.    |
| options: Object      | Shape configuration object. Must include type to define the shape type.    |
| options.type: String | The shape to display. See Shape Types below. |
| top?: Number          | Shape top position (relative). Default 0px  |
| left?: Number         | Shape left position (relative). Default 0px |
| width?: Number        | Shape width. Default 400px                |
| height?: Number       | Shape height. Default 300px               |
| zIndex?: Number       | Shape z-index. Default 3                  |

### Shape Types

Below are the most common shape types. Additional shapes can be found at the end of this page.

| Shape types    |
|----------------|
| rectangle |
| triangle |
| ellipse |
| diamond |
| trapezium |
| pentagon |
| parallelogram |
| hexagon |
| heptagon |
| octagon |
| decagon |
| simpleLine |
| lineWithArrow |


## Installation

Please choose one of the following options

### Using NPM

```bash
$ npm install @jspreadsheet/shapes
```

### Using a CDN

You can include the charts on your browser as below. To run the extension please make sure all extensions area loaded, as shown on the following example.

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/shapes/dist/index.min.js"></script>
```

## Examples

### Data grid shapes

Create a new data grid with some basic shapes.

```html
<html>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/shapes/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/shapes/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ shapes });

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [{
        minDimensions: [8,8],
        data: [
            ['Test','',''],
            ['Jan','400','234'],
            ['Fev','300','431'],
            ['Mar','200','134'],
            ['Apr','321','513'],
        ],
        media: [{
            type: 'shape',
            options: {
                type: 'rounded-rectangle',
                text: 'test'
            },
            top: 50,
            left: 50,
            width: 100,
            height: 80,
        }]
    }],
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import shapes from "@jspreadsheet/shapes";

import "@lemonadejs/studio";
import "@lemonadejs/studio/dist/style.css";
import "@jspreadsheet/shapes/dist/style.css";
import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Add license
jspreadsheet.setLicense('###license###');
// Define the data grid extensions
jspreadsheet.setExtensions({ shapes });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Data
    const data = [
        ['Test', '', ''],
        ['Jan', '400', '234'],
        ['Fev', '300', '431'],
        ['Mar', '200', '134'],
        ['Apr', '321', '513'],
    ];

    // Media declaration
    const media = [{
        type: 'shape',
        options: {
            type: 'rounded-rectangle',
            text: 'test'
        },
        top: 50,
        left: 50,
        width: 100,
        height: 80,
    }]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} toolbar={true}>
            <Worksheet data={data} media={media} minDimensions={[8, 8]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
  <Spreadsheet ref="spreadsheet" :toolbar="true">
      <Worksheet :data="data" :media="media" :minDimensions="[8, 8]" />
  </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import shapes from "@jspreadsheet/shapes";

import "@lemonadejs/studio";
import "@lemonadejs/studio/dist/style.css";
import "@jspreadsheet/shapes/dist/style.css";
import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Add license
jspreadsheet.setLicense('###license###');
// Define the data grid extensions
jspreadsheet.setExtensions({ shapes });

export default {
  components: {
      Spreadsheet,
      Worksheet,
  },
  data() {
      // Data
      const data = [
          ['Test','',''],
          ['Jan','400','234'],
          ['Fev','300','431'],
          ['Mar','200','134'],
          ['Apr','321','513'],
      ];

      // Media declaration
      const media = [{
        type: 'shape',
        options: {
          type: 'rounded-rectangle',
          text: 'test'
        },
        top: 50,
        left: 50,
        width: 100,
        height: 80,
      }]

      return {
          data,
          media
      };
  }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import shapes from "@jspreadsheet/shapes";

// Add license
jspreadsheet.setLicense('###license###');
// Define the data grid extensions
jspreadsheet.setExtensions({ shapes });

@Component({
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
    this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
        toolbar: true,
        worksheets: [{
            minDimensions: [8,8],
            data: [
                ['Test','',''],
                ['Jan','400','234'],
                ['Fev','300','431'],
                ['Mar','200','134'],
                ['Apr','321','513'],
            ],
            media: [{
                type: 'shape',
                options: {
                    type: 'rounded-rectangle',
                    text: 'test'
                },
                top: 50,
                left: 50,
                width: 100,
                height: 80,
            }]
        }],
    });
    }
}
```

### All Shape Types

| All Shape types    |
|----------------|
| rectangle |
| triangle |
| ellipse |
| diamond |
| trapezium |
| pentagon |
| parallelogram |
| hexagon |
| heptagon |
| octagon |
| decagon |
| simpleLine |
| lineWithArrow |
| doubleArrowLine |
| elbowConnector |
| elbowArrowConnector |
| doubleArrowElbowConnector |
| curvedElbowConnector |
| curvedArrowConnector |
| curvedDoubleArrowConnector |
| rounded-rectangle |
| singleCutCornerRectangle |
| doubleCutCornerRectangle |
| oppositeCutCornerRectangle |
| roundedTopRightRectangle |
| roundedTopLeftRectangle |
| roundedTopRightBottomLeftRectangle |
| right-triangle |
| ovalInterfaceIcon |
| cutCircle |
| circlewithtoprightoutsideangle |
| doubleLineSquare |
| doubledtoprighangle |
| doubleLineShape |
| mouldingCrown |
| crossIcon |
| plaqueShape |
| cylinderShape |
| cubeShape |
| bevelShape |
| donutShape |
| noShape |
| blockArk |
| smileyFace |
| heart |
| lightningBolt |
| sun |
| crescentMoon |
| cloud |
| arcCurve |
| leftSquareBrackets |
| rightSquareBrackets |
| squareBracketsPair |
| leftFlowerBracket |
| rightFlowerBracket |
| flowerBrackets |
| rightBlockArrow |
| leftBlockArrow |
| upBlockArrow |
| downBlockArrow |
| upDownArrow |
| leftRightArrow |
| quadArrow |
| leftRightUpArrow |
| bentArrow |
| uTurnArrow |
| leftUpArrow |
| bentUpArrow |
| curvedRightArrow |
| curvedLeftArrow |
| curvedUpArrow |
| curvedDownArrow |
| stripedRightArrow |
| notchedRightArrow |
| pentagonArrow |
| chevron |
| rightArrowCallout |
| downArrowCallout |
| leftArrowCallout |
| upArrowCallout |
| leftRightArrowCallout |
| quadArrowCallout |
| circularArrow |
| plus |
| minus |
| multiplication |
| division |
| equal |
| notEqualTo |
| predefinedTask |
| internalStorage |
| document |
| multitaskingDocuments |
| terminator |
| preparation |
| manualInput |
| manualOperation |
| offpageConnector |
| card |
| punchedTape |
| swimmingJunction |
| orShape |
| collateShape |
| sortShape |
| extractShape |
| mergeShape |
| storedDataShape |
| delayShape |
| sequentialAccessStorageShape |
| directAccessStorage |
| displayShape |
| blockShape |
