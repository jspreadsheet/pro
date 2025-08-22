title: Jspreadsheet Media: Images, Charts and Shapes
keywords: Jspreadsheet, Jexcel, data grid, JavaScript, excel-like images, spreadsheet images, floating images, worksheet images, images, cell embedded images, image integration, data grid images, worksheet floating images, image editing, image manipulation, image placement in cells, floating objects in Jspreadsheet, image display options, image handling, image customization, image controls, data visualization with images
description: Learn more about the Spreadsheet media features. 

# Spreadsheet Images

The recent release of Jspreadsheet introduces two enhanced methods to integrate images within the data grid. Users can embed images directly into cells or utilize the worksheet media library to provide floating images in the viewport.  

## Documentation

### Methods

| Method   | Description                                                                                                                     |
|----------|---------------------------------------------------------------------------------------------------------------------------------|
| getMedia | Get the media element position or object by guid.<br/>getMedia(guid: string, position?: boolean) => false \| undefined \| Media |
| setMedia | Add one or more element to worksheet media library.<br/>setMedia(content: Media \| Media[]) => void                             |


### Settings

Using the `media` property, you can establish images as the default when initializing the data grid.

| Property        |
| ----------------|
| media?: Media[] |

 

### Media

Media is an object with the following properties.

| Method                              | Description                                                   |
|-------------------------------------|---------------------------------------------------------------|
| type: 'image' \| 'chart' \| 'shape' | The media type. It requires an extension for chart and shapes |
| src: String                         | The URL or data that represents the image                     |
| width?: Number                      | Width of the image                                            |
| height?: Number                     | Height of the image                                           |
| top?: Number                        | Top reference of the image                                    |
| left?: Number                       | Left reference of the image                                   |
| options?: Object                    | Will have different settings depending on the type.           |
| cellAnchor?: String                 | Anchor cell name                                              |

 

## Examples

### Viewport floating images

You can use the `media` property of the worksheet to specify initial floating images in the viewport of the JSS data grid. 

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [6,6],
        media: [
            {
                type: 'image',
                src: 'https://lemonadejs.net/templates/default/img/components.svg',
                width: 200,
                height: 150,
            }
        ]
    }],
});
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data grid media items
    const media = [
        {
            type: 'image',
            src: 'https://lemonadejs.net/templates/default/img/components.svg',
            width: 200,
            height: 150,
        }
    ];
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet minDimensions={[6, 6]} media={media}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[6,6]" :media="media" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data grid media items
        const media = [
            {
                type: 'image',
                src: 'https://lemonadejs.net/templates/default/img/components.svg',
                width: 200,
                height: 150,
            }
        ];

        return {
            media,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [6,6],
                media: [
                    {
                        type: 'image',
                        src: 'https://lemonadejs.net/templates/default/img/components.svg',
                        width: 200,
                        height: 150,
                    }
                ]
            }],
        });
    }
}
```
 

 

### Column type image editor

Configure an image upload editor to insert an image in every cell across an entire column. 

Double-click in the image cell to upload a new image.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['LemonadejS', 'https://lemonadejs.net/templates/default/img/components.svg'],
        ],
        minDimensions: [2,4],
        columns: [
            { type:'text', width:300, title:'Title' },
            { type:'image', width:120, title:'Image' },
        ],
    }],
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['LemonadejS', 'https://lemonadejs.net/templates/default/img/components.svg'],
    ];
    // Column definitions
    const columns = [
        { type: 'text', width: 300, title: 'Title' },
        { type: 'image', width: 120, title: 'Image' },
    ]
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} minDimensions={[2,4]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[6,6]" :images="images" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Column definitions
        const images = [
            {
                src: 'https://lemonadejs.net/templates/default/img/components.svg',
                width: 200,
                height: 150,
            }
        ];

        return {
            images,
            license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [6,6],
                images: [
                    {
                        src: 'https://lemonadejs.net/templates/default/img/components.svg',
                        width: 200,
                        height: 150,
                    }
                ]
            }],
        });
    }
}
```
 

 

### Image editor with floating images

By defining a cell image editor at the cell level, you can upload images attached to that specific cell. 


```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ['LemonadeJS', 'https://lemonadejs.net/templates/default/img/home.png'],
        ],
        minDimensions: [4,8],
        cells: {
            B1: { type:'image', options: { absolute: true, width: '200px' } }
        },
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ['LemonadejS', 'https://lemonadejs.net/templates/default/img/components.svg'],
    ];
    // Column definitions
    const cells = {
        B1: { type:'image', options: { absolute: true, width: '200px' } }
    };
    // Render component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} cells={cells} minDimensions={[4,8]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[4,8]" :cells="cells" :data="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['LemonadejS', 'https://lemonadejs.net/templates/default/img/components.svg'],
        ];
        // Column definitions
        const cells = {
            B1: { type:'image', options: { absolute: true, width: '200px' } }
        };

        return {
            data,
            cells,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [4,8],
                cells: {
                    B1: { type:'image', options: { absolute: true, width: '200px' } }
                },
                data: [
                    ['LemonadejS', 'https://lemonadejs.net/templates/default/img/components.svg'],
                ],
            }],
        });
    }
}
```
