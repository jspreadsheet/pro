title: JavaScript Data Grid With Spreadsheet Controls
keywords: Jspreadsheet, JavaScript plugin, online spreadsheet, excel-like tables, Google Sheets, data grid, datatables
description: Jspreadsheet is a JavaScript plugin that enables you to create rich online spreadsheets with features similar to Microsoft Excel and Google Sheets. Our powerful data grid and datatable functionality make it easy to manage, sort, filter, and visualize large amounts of data. Whether you need a payment calculator, inventory tracker, or project management tool, Jspreadsheet is the perfect solution for all your spreadsheet needs.

<div class="home">

<div class="row">
    <div class="column f4">
        <div class="limit-75">
            <h1>JavaScript Data Grid with Advanced Spreadsheet Controls</h1>
            <p class="justify" style="font-size: 1.2em;">With the best front-end data grid component, developers can integrate professional spreadsheet controls into their applications faster and more flexibly than ever.</p><br>
            <button class="button main" style="width: 160px;"><a href="/docs">Get Started</a></button>
            <br>
            <br>
            <br>
        </div>
    </div>
    <div class="column f4">
        <div style="aspect-ratio: 16/9;">
            <video width="640" height="360" autoplay muted loop preload="metadata" playsinline loading="lazy" style="max-width: 100%; height: auto;">
                <source src="media/home.webm" type="video/webm">
                Your browser does not support the video tag. Please update your browser.
            </video>
        </div>
        <div class="home-container p20"><img src="img/taylor/home.webp" alt="JavaScript Data Grid Mascot Taylor" /></div>
        <div class="row middle framework-logos">
            <a href='/docs/getting-started'><img src='/templates/default/img/javascript.png' width="30" height="30" alt="JavaScript Vanilla"/></a>
            <a href='/docs/react'><img src='/templates/default/img/react.png' width="30" height="30" alt="React data grid"/></a>
            <a href='/docs/vue'><img src='/templates/default/img/vuejs.png' width="30" height="30" alt="VueJS data grid"/></a>
            <a href='/docs/angular'><img src='/templates/default/img/angular.png' width="30" height="30" alt="Angular data grid"/></a>
        </div>
    </div>
</div>

<div class="companies-wrapper center" style="margin: 80px 0">
    <span>Used by the world’s leading companies</span>
    <div class="carousel-container">
        <div class="carousel-content">
            <img src='img/logo/virgin_media.jpg' alt="Virgin Media" style="width: 81px; height: 50px;"/>
            <img src='img/logo/samsung.webp' alt="Samsung" style="width: 150px; height: 50px;"/>
            <img src='img/logo/deloitte.webp' alt="Deloitte" style="width: 115px; height: 36px;"/>
            <img src='img/logo/nissan.svg' alt="Nissan" style="width: 64px; height: 54px;"/>
            <img src='img/logo/johnson-and-johnson.svg' alt="Johnson & Johnson"  style="width: 180px; height: 36px;"/>
            <img src='img/logo/ge.svg' alt="General Electrics" style="width: 52px; height: 46px;"/>
            <img src='img/logo/mckinsey.svg' alt="McKinsey" style="width: 135px; height: 90px;"/>
            <img src='img/logo/kawasaki.svg' alt="Kawasaki" style="width: 146px; height: 26px;"/>
            <img src='img/logo/bp.svg' alt="BP" style="width: 37px; height: 50px;"/>
            <img src='img/logo/comcast.svg' alt="Comcast" style="width: 120px; height: 80px;"/>
            <img src='img/logo/asahikasei.svg' alt="Asahikasei" style="width: 127px; height: 18px;" />
            <img src='img/logo/lockheed.svg' alt="Lockheed" style="height: 24px; display: none;" />
            <img src='img/logo/denso-wave.png' alt="Denso Wave" style="width: 92px; height: 32px;" />
            <img src='img/logo/moodys.svg' alt="Moody's" style="width: 103px; height: 22px;" />
            <img src='img/logo/verizon.svg' alt="Verizon" style="width: 117px; height: 26px;" />
            <img src='img/logo/kyocera.svg' alt="Kyocera" style="width: 120px; height: 30px;" />
            <img src='img/logo/mizuho.svg' alt="Mizuho" style="width: 93px; height: 28px;" />
            <img src='img/logo/noritz.svg' alt="Noritz" style="width: 117px; height: 24px;" />
            <img src='img/logo/lexisnexis.svg' alt="Lexisnexis" style="width: 137px; height: 32px;" />
        </div>
    </div>
</div>

<div class="space200 line"></div>

<div class="center">
    <div style="max-width: 600px; margin: 0 auto;">
    <h2 class="limit-75" style="margin: 0 auto;">Manipulate large amounts of data in a tabular format</h2>
    <p>Work with literally millions of records in milliseconds. The new data grid version includes a navigation system that leverages the viewport to load only the data visible to the user. This feature enhances the user experience by creating a seamless and speedy performance while minimizing the application's resource utilization.</p>
    </div>
    <br>
    <div style="text-align: left; display: inline-block">
    <lm-performance></lm-performance>
    </div>
    <p class="small">The One Billion Cells JavaScript Data Grid (10000 x 100000)</p>
</div>

<div class="space200 line big-screen-only"></div>

<div id="showcase-examples" style="display: none;">

# style


{tag="style" title="Spreadsheet Style" description="Apply CSS directly to the cells"}
```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="root"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Create the spreadsheet
jspreadsheet(document.getElementById('root'), {
    worksheets: [{
        minDimensions: [4,4],
        style: {
            'A:A': 'background-color: #ccffff; font-weight: bold',
            'C2': 'background-color: #ccffff;',
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

    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} tabs>
                <Worksheet minDimensions={[4, 3]} />
                <Worksheet minDimensions={[4, 3]} />
            </Spreadsheet>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[4,3]" />
        <Worksheet :minDimensions="[4,3]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        return {
            // License
            license: '###license###',
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import "jspreadsheet/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

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
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            // Allow create a new tab button
            tabs: true,
            // Initial worksheet
            worksheets: [
                { minDimensions: [4, 3] },
                { minDimensions: [4, 3] },
            ],
        });
    }
}
```

# tabs

{tag="tabs" title="Worksheets" description="Customise your spreadsheet with multiple worksheets"}
```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="root"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
let worksheets = jspreadsheet(document.getElementById('root'), {
    // Allow create a new tab button
    tabs: true,
    // Initial worksheet
    worksheets: [
        { minDimensions: [4, 3] },
        { minDimensions: [4, 3] },
    ],
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
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license} tabs>
                <Worksheet minDimensions={[4,3]} />
                <Worksheet minDimensions={[4,3]} />
            </Spreadsheet>
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[4,3]" />
        <Worksheet :minDimensions="[4,3]" />
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
        return {
            // License
            license: license,
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

@Component({
    standalone: true,
    selector: "app-root",
    template: "<div #spreadsheet></div>"
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            // Allow create a new tab button
            tabs: true,
            // Initial worksheet
            worksheets: [
                { minDimensions: [4,3] },
                { minDimensions: [4,3] },
            ],
        });
    }
}
```

# parser

{tag="parser" title="Import from XLSX" description="Convert XLSX files to JSON format"}
```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/parser/dist/index.min.js"></script>

<div id="spreadsheet"></div>
<input type="file" name="file" id='file' style='display:none'>
<p><input type='button' value='Upload a .XLSX' onclick="document.getElementById('file').click()"/></p>

<script>
// Set license
jspreadsheet.setLicense('###license###');
// Set extensions
jspreadsheet.setExtensions({ parser });
// Root
let root = document.getElementById('spreadsheet');
// Create the spreadsheet from a local file
let load = function(e) {
    // Parse XLSX file and create a new spreadsheet
    jspreadsheet.parser({
        file: e.target.files[0],
        // It would be used to updated the formats only
        locale: 'en-GB',
        onload: function(config) {
            jspreadsheet(root, config);
        },
        onerror: function(error) {
            alert(error);
        }
    });
}
document.getElementById("file").onchange = (e) => load(e)
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
jspreadsheet.setLicense("###license###");
// Set extensions
jspreadsheet.setExtensions({ parser });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef(null);
    const inputRef = useRef(null);
    const style = { 'display: none' };
    // Create the spreadsheet from a local file
    const load = function (e) {
        // Parse XLSX file and create a new spreadsheet
        jspreadsheet.parser({
            file: e.target.files[0],
            // It would be used to update the formats only
            locale: "en-GB",
            onload: function (config) {
                jspreadsheet(spreadsheet.current, config);
            },
            onerror: function (error) {
                alert(error);
            },
        });
    };
    // Render component
    return (
        <>
            <div ref={spreadsheet}></div>
            <input
                ref={inputRef}
                id="file"
                type="file"
                name="file"
                onChange={load}
                style={style}
            />
            <input
                type="button"
                value="Load a XLSX file from my local computer"
                onClick={() => inputRef.current.click()}
            />
        </>
    );
}
```
```vue
<template>
  <div ref="spreadsheet"></div>
  <input
    type="file"
    name="file"
    ref="fileInput"
    @change="loadFile"
    style="display: none"
  />
  <input
    type="button"
    value="Load a XLSX file from my local computer"
    @click="triggerFileInput"
  />
</template>
<script>
import { jspreadsheet } from "@jspreadsheet/vue";
import parser from "@jspreadsheet/parser";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ parser });

export default {
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    loadFile(e) {
      const spreadsheetEl = this.$refs.spreadsheet;
      jspreadsheet.parser({
        file: e.target.files[0],
        locale: "en-GB",
        onload: function (config) {
          jspreadsheet(spreadsheetEl, config);
        },
        onerror: function (error) {
          alert(error);
        },
      });
    },
  },
};
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import parser from "@jspreadsheet/parser";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ parser });

@Component({
    standalone: true,
    selector: "app-root",
    template: '<div #spreadsheet></div><input #file type="file" name="file" style="display:none" /><input type="button" value="Load a XLSX file from my local computer" (click)="this.file.click()"/>'
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    @ViewChild("file") file: ElementRef;
    ngAfterViewInit() {
        let spreadsheet = this.spreadsheet.nativeElement;
        // Add event to the file input
        this.file.nativeElement.onchange = function (e) {
            // Parse XLSX file and create a new spreadsheet
            jspreadsheet.parser({
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
}
```

# render

{tag="render" title="Export to XLSX" description="Convert your data grids and spreadsheets into XLSX files"}
```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/jszip@3.6.0/dist/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/render/dist/index.min.js"></script>
<div id='spreadsheet'></div>
<p><input type="button" value="Download" id="btn1" /></p>
<script>
const download = function(spreadsheet) {
    jspreadsheet.render(spreadsheet, {
        filename: 'file.xlsx',
    });
}

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Add-on for Spreadsheet
jspreadsheet.setExtensions({ render });

// Create the spreadsheets
let worksheets = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [4, 3] },
        { minDimensions: [4, 3] },
    ],
});
document.getElementById("btn1").onclick = function() {
    download(worksheets[0].parent);
}
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import jspreadsheet from "jspreadsheet";
import render from "@jspreadsheet/render";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Add-on for your JSS data grid
jspreadsheet.setExtensions({ render });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const download = function() {
        jspreadsheet.render(spreadsheet.current[0].parent.el, {
            filename: 'file.xlsx',
        });
    }
    // Render component
    return (
        <>
            <Spreadsheet ref={spreadsheet}>
                <Worksheet />
                <Worksheet />
            </Spreadsheet>
            <input type="button" value="Generate XLSX" onClick={() => download()} />
        </>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :extensions="extensions">
        <Worksheet :minDimensions="[10,10]" />
        <Worksheet :minDimensions="[10,10]" />
    </Spreadsheet>
    <input type="button" value="Generate XLSX" @click="download" />
</template>
<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import render from "@jspreadsheet/render";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Define the data grid license
const license = '###license###';
// Define the data grid extensions
const extensions = { render };

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        download() {
            // Spreadsheet instance
            jspreadsheet.render(this.$refs.spreadsheet.current[0].parent.el, {
                filename: 'file.xlsx',
            });
        }
    },
    data() {
        const spreadsheet = ref(null);
        return {
            spreadsheet,
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
import render from "@jspreadsheet/render";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ render });

@Component({
    standalone: true,
    selector: "app-root",
    template: "<div #spreadsheet></div><input type=\"button\" value=\"Generate XLSX\" (click)=\"this.export()\" />"
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                { minDimensions: [4, 3] },
                { minDimensions: [4, 3] }
            ]
        });
    }
    export() {
        // Spreadsheet instance
        jspreadsheet.render(this.worksheets[0].parent.el, {
            filename: 'file.xlsx',
        });
    }
}
```

# formulas

{tag="formulas" title="Formula Pro" description="A plugin that can parse Excel-like formulas"}
```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>

<div id='spreadsheet'></div>

<script>

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Add-on for JSpreadsheet
jspreadsheet.setExtensions({ formula });

// Create the spreadsheets
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4, 4],
        data: [
            ['1', '=SUM(A1:A4)'],
            ['2', '=PRODUCT(A1:A4)'],
            ['10', ''],
            ['20', ''],
        ]
    }],
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Add-on for JSpreadsheet
jspreadsheet.setExtensions({ formula });

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    const data = [
        ['1', '=SUM(A1:A4)'],
        ['2', '=PRODUCT(A1:A4)'],
        ['10', ''],
        ['20', ''],
    ]
    // Render component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet minDimensions={[5, 5]} data={data} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" :minDimensions="[5,5]" />
    </Spreadsheet>
</template>
<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// License
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ formula });

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ['1', '=SUM(A1:A4)'],
            ['2', '=PRODUCT(A1:A4)'],
            ['10', ''],
            ['20', ''],
        ]
        return {
            data,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import formula from "@jspreadsheet/formula-pro";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ formula });

@Component({
    standalone: true,
    selector: "app-root",
    template: "<div #spreadsheet></div>"
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
                data: [
                    ['1', '=SUM(A1:A4)'],
                    ['2', '=PRODUCT(A1:A4)'],
                    ['10', ''],
                    ['20', ''],
                ],
            }],
        });
    }
}
```

</div>

<lm-showcase></lm-showcase>

<div class="space200 line"></div>

<div class="row">
    <div class="column f3">
        <div class="limit-85 p30" style="position: relative;">
            <div style="width: 175px; position: relative;"><div class="is-premium"><div class="tooltip-text">This feature is available on the Ultimate plan</div></div></div>
            <h2 style="margin-top: 30px;">Enhance Your JavaScript Data Grid with AI</h2>
            <p>Incorporate ChatGPT API or Llama into your web-based data grids to enable automated content generation and advanced data analysis. When paired with Jspreadsheet Server, this powerful integration empowers real-time data queries directly from the front end, connecting to your back-end API to deliver instant insights and responses to users.</p>
        </div>
    </div><div class="column f3 big-screen-only">
        <video width="640" height="360" autoplay muted loop preload="metadata" playsinline loading="lazy" style="max-width: 100%; height: auto;">
            <source src="media/data-grid-ai.webm" type="video/webm">
            Your browser does not support the video tag. Please update your browser.
        </video>
   </div>
</div>

<div class="space200 line"></div>

<div class="center">
    <h2>Let our users tell you</h2>
    <div class="eval-section">
        <a href="https://www.softwareadvice.com/product/522157-Jspreadsheet/reviews/" target="_blank"> <img src="https://brand-assets.softwareadvice.com/badge/cb68000c-c4d7-401d-a9e9-aa9ea2e653cc.png" style="width: 197px; height: 80px" alt="Software Advice" /> </a>
        <a href="https://www.getapp.com/collaboration-software/a/jspreadsheet/reviews/" target="_blank"> <img src="https://brand-assets.getapp.com/badge/4bf6d71c-84fb-4e04-a224-fa09ba73ee12.png" style="width: 180px; height: 120px" alt="Get APP"  /> </a>
        <a href="https://www.capterra.com/p/10023389/Jspreadsheet/reviews/" target="_blank"> <img src="https://brand-assets.capterra.com/badge/4a715a3b-03e3-4007-9698-389cb99c5fa0.svg" style="width: 245px; height: 80px" alt="Capterra" /> </a>
    </div>
</div>

<div class="space200 line"></div>

<div class="row" style="font-size: 0.9em;">
    <div class="column f1 p30">
        <div style="aspect-ratio: 16/9;"><img src="media/data-grid-fullstack.webp" width="640" height="360" style="width: 100%; height: auto;" alt="Full Stack JavaScript Data Grid" ></div>
    </div>
    <div class="column f1 limit-85 p30">
        <h2>JavaScript Data Grid with Full-Stack Capabilities</h2>
        <p>Unlock real-time collaboration, new ways to implement persistence, automation, non-consecutive selections, advanced multi-copy handling, optimized array operations, and robust privacy controls.</p><br>
    </div>
</div>

<div class="space200 line"></div>

<div class="box shadow" data-number="3">
    <div>
        <img src="img/home/integrations-icon.svg" alt="Data Grid Integrations" style="height: 44px; width: 44px;">
        <b>Integrations</b>
        <p>Jspreadsheet allows you to integrate your spreadsheet with other plugins to create rich applications.</p>
    </div>
    <div>
        <img src="img/home/lightweight-icon.svg" alt="Super Lightweight" style="height: 44px; width: 44px;">
        <b>Lightweight</b>
        <p>Just 0.3 Mb. Jspreadsheet is designed to be lean and efficient, making it a breeze to integrate into your application.</p>
    </div>
    <div>
        <img src="img/home/persistence-icon.svg" alt="Persistence Feature" style="height: 44px; width: 44px;">
        <b>Persistence</b>
        <p>Different methods, events, and features to help with the backend data persistence.</p>
    </div>
</div>

<div class="space100"></div>

<div class="bg-section big-screen-only" style="background-color:#F7F7F7; height: 650px;"></div>

<div class="space100"></div>

<div>
    <div class="center">
        <h2>What Our Customers Are Saying</h2>
        <p>Jspreadsheet reduces our customers’ development time. Here are some of their experiences.</p>
    </div>
    <div class="row p10">
        <div class="column f1">
            <div class="quote-wrapper">
                <div class="quote-box">
                    <div>Lucas Segers</div>
                    <div>“At SplitC we struggled sometimes when users wanted to bulk insert/edit things (sometimes over 100k rows) and we needed performance Jspreadsheet is probably the fastest spreadsheet component you’ll find out there, and with a small bundle size. By the way, support is awesome.”</div>
                </div>
                <div class="row middle author">
                    <img src="img/logo/splitc.png" alt="SplitC" style="width: 104px; height: 40px; margin-right: 20px;">
                </div>
            </div>
        </div>
        <div class="column f1">
            <div class="quote-wrapper">
                <div class="quote-box">
                    <div>Lode Cools</div>
                    <div>“We vetted 10 JavaScript components and we must say that Jspreadsheet comes out as the best.”</div>
                </div>
                <div class="row middle author">
                    <img src="img/logo/bizzcontrol.png" alt="Bizz Control" style="width: 174px; height: 40px; margin-right: 20px;">
                </div>
            </div>
        </div>
        <div class="column f1">
            <div class="quote-wrapper">
                <div class="quote-box">
                    <div>Dana Stoesz</div>
                    <div>“The latest version of Jspreadsheet is a powerful data grid tool, providing an excellent front end for our spreadsheet interface. The Jspreadsheet team is helpful and quick to respond.”</div>
                </div>
                <div class="row middle author">
                    <img src="img/logo/pharmacywire-logo.png" alt="PharmacyWire" style="width: 210px; height: 40px; margin-right: 20px;">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="space200"></div>

<div id="toggle-wrapper">
    <div class="toggle-item toggle-opened">
        <h3>What is Jspreadsheet?</h3>
        <div>Jspreadsheet is a robust full-stack JavaScript Data Grid solution that directly integrates the functionality and user-friendly experience of spreadsheet applications like Excel and Google Sheets into your web applications. It offers a smooth, efficient user interface, enabling batch actions, table manipulation, and a host of other features that ensure flawless compatibility between your web application and Excel/Sheets. This familiar environment enhances productivity, simplifies user adoption, and minimizes the need for extensive training.<br/>More than just a JS data grid component, Jspreadsheet is a comprehensive solution designed to meet a variety of application requirements in spreadsheet and data management for web platforms. It optimizes workflow development, streamlines process automation, and facilitates the smooth transition of tasks from Excel to the web. Additionally, Jspreadsheet provides a wide range of extensions to address diverse needs within the data grid and spreadsheet ecosystem, making it a versatile choice for various business applications.</div>
    </div>
    <div class="toggle-item">
        <h3>How to generate my license key?</h3>
        <div>You will register the base domain (Valid for any subdomain).<br/> So, if you add to your profile, let’s say: <br/><br/> mycompany.com <br/><br/> Any subdomain will be valid: <br/><br/> www.mycompany.com <br/> dev.mycompany.com <br/><br/> Press save; a new certificate will be generated. <br/> You can also add the IP to the authorised domains box and save your profile, and a new certificate will be generated with the IP address. <br/> The local host is already included.</div>
    </div>
    <div class="toggle-item">
        <h3>How to renew my license key?</h3>
        <div>Your license key is valid for one year and works offline. To ensure continued use, you’ll need to renew and replace it in your deployment after the year has elapsed. You can generate a new license key at any time through your profile, even before the current license expires. Important: Your old license key will remain valid until its expiration date, allowing you to transition to the new key smootliney without any interruption in service.<br/> To renew your license, please follow these steps:<br/> Go to your profile at https://jspreadsheet.com/me/profile.<br/> Click on “Renew License.”<br/> Scroll down to the bottom of the page and click “Save.”<br/> Copy the new certificate key and replace the old one in your code with this updated key.</div>
    </div>
</div>

<div class="space200 line"></div>

<div class="center">
    <div>
        <h2>Try it for free</h2>
        <div style="text-align: center; max-width: 640px;margin: 0 auto;">The free trial certificate is valid for 30 days. If you need additional time for testing,<br/>kindly inform us, and we will extend the period for you.</div><br>
        <button class="button main" style="width: 160px;"><a href="/me/login?create" target="_top">Free Trial</a></button>
    </div>
</div>

<div class="space200 line"></div>

</div>

