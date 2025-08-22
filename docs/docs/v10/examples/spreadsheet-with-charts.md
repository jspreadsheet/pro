title: Embedding Charts in Jspreadsheet with ChartJS
keywords: Jspreadsheet, JavaScript, Plugins, Spreadsheet, Data Grid, ChartJS, Embed Charts, Data Visualization, Web Application, Web Development
description: How to enhance your data grids by embedding interactive charts in Jspreadsheet using ChartJS.

# ChartJS integration



# Main Form

## Simple use

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
 
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>
 
<div id="spreadsheet"></div>
 
<script>
jspreadsheet.setLicense('###license###');
 
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['=CHART("pie", A4:A6, B4:B6)'],
                [],
                ['Proposals', 'Votes (%)'],
                ['Proposal 1', 0.36],
                ['Proposal 2', 0.29],
                ['Proposal 3', 0.35],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
            rows: {0: {height: '380px'}},
        }
    ]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet } from "@jspreadsheet/react";
import "@jspreadsheet/formula-charts";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Worksheets
    const worksheets = [
        {
            data: [
                ['=CHART("pie", A4:A6, B4:B6)'],
                [],
                ['Proposals', 'Votes (%)'],
                ['Proposal 1', 0.36],
                ['Proposal 2', 0.29],
                ['Proposal 3', 0.35],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
            rows: {0: {height: '380px'}},
        }
    ]

    // Render data grid component
    return (<Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets} />);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" />
</template>

<script>
import { Spreadsheet } from "@jspreadsheet/vue";
import "@jspreadsheet/formula-charts";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
    components: {
        Spreadsheet,
    },
    data() {

    const license = '###license###';

    // Worksheets
    const worksheets = [
        {
            data: [
                ['=CHART("pie", A4:A6, B4:B6)'],
                [],
                ['Proposals', 'Votes (%)'],
                ['Proposal 1', 0.36],
                ['Proposal 2', 0.29],
                ['Proposal 3', 0.35],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
            rows: {0: {height: '380px'}},
        }
    ]

        return {
            license,
            worksheets,
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
import "@jspreadsheet/formula-charts";

// Set the license
jspreadsheet.setLicense('###license###');

// Create the data grid component
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
        // Create summary spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        ['=CHART("pie", A4:A6, B4:B6)'],
                        [],
                        ['Proposals', 'Votes (%)'],
                        ['Proposal 1', 0.36],
                        ['Proposal 2', 0.29],
                        ['Proposal 3', 0.35],
                    ],
                    minDimensions: [5, 1],
                    mergeCells: {
                        'A1': [5, 1],
                    },
                    defaultColWidth: '40px',
                    columns: [
                        {width: '100px'},
                        {width: '100px'},
                    ],
                    rows: {0: {height: '380px'}},
                }
            ]
        });
    }
}
```
 

 

## Dataset object

  

#### Code



```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
 
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>
 
<div id="spreadsheet"></div>
 
<script>
jspreadsheet.setLicense('###license###');
 
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['=CHART("pie", A4:A6, {"data": (B4:B6), "color": ["#2196F3", "#66BB6A", "#FFEB3B"]})',],
                [],
                ['Proposals', 'Votes (%)'],
                ['Proposal 1', 0.36],
                ['Proposal 2', 0.29],
                ['Proposal 3', 0.35],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
            rows: {0: {height: '380px'}},
        }
    ]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet } from "@jspreadsheet/react";
import "@jspreadsheet/formula-charts";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Worksheets
    const worksheets = [
        {
            data: [
                ['=CHART("pie", A4:A6, {"data": (B4:B6), "color": ["#2196F3", "#66BB6A", "#FFEB3B"]})',],
                [],
                ['Proposals', 'Votes (%)'],
                ['Proposal 1', 0.36],
                ['Proposal 2', 0.29],
                ['Proposal 3', 0.35],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
        }
    ]

    // Render data grid component
    return (<Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets} />);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" />
</template>

<script>
import { Spreadsheet } from "@jspreadsheet/vue";
import "@jspreadsheet/formula-charts";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
    components: {
        Spreadsheet,
    },
    data() {
    const license = '###license###';
    
    // Worksheets
    const worksheets = [
        {
            data: [
                ['=CHART("pie", A4:A6, {"data": (B4:B6), "color": ["#2196F3", "#66BB6A", "#FFEB3B"]})',],
                [],
                ['Proposals', 'Votes (%)'],
                ['Proposal 1', 0.36],
                ['Proposal 2', 0.29],
                ['Proposal 3', 0.35],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
        }
    ]

        return {
            license,
            worksheets,
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
import "@jspreadsheet/formula-charts";

// Set the license
jspreadsheet.setLicense('###license###');

// Create the data grid component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`;
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create summary spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        ['=CHART("pie", A4:A6, {"data": (B4:B6), "color": ["#2196F3", "#66BB6A", "#FFEB3B"]})',],
                        [],
                        ['Proposals', 'Votes (%)'],
                        ['Proposal 1', 0.36],
                        ['Proposal 2', 0.29],
                        ['Proposal 3', 0.35],
                    ],
                    minDimensions: [5, 1],
                    mergeCells: {
                        'A1': [5, 1],
                    },
                    defaultColWidth: '40px',
                    columns: [
                        {width: '100px'},
                        {width: '100px'},
                    ],
                    rows: {0: {height: '380px'}},
                }
            ]
        });
    }
}
```
 

 

## List of Datasets

  

#### Code



```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
 
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>
 
<div id="spreadsheet"></div>
 
<script>
jspreadsheet.setLicense('###license###');
 
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['=CHART("bar", B3:M3, [B4:M4, {"data": (B5:M5), "color": "blue", "label": (A5)}, B6:M6]);', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['Products', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                ['Product1', 50, 52, 55, 575, 150, 225, 325, 450, 475, 500, 550, 550],
                ['Product2', 150, 100, 50, 90, 90, 150, 120, 175, 200, 250, 300, 300],
                ['Product3', 15, 20, 25, 30, 90, 100, 120, 120, 150, 180, 200, 200],
            ],
            mergeCells: {
                'A1': [13, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
            ],
        }
    ]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet } from "@jspreadsheet/react";
import "@jspreadsheet/formula-charts";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Worksheets
    const worksheets = [
        {
            data: [
                ['=CHART("bar", B3:M3, [B4:M4, {"data": (B5:M5), "color": "blue", "label": (A5)}, B6:M6]);', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['Products', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                ['Product1', 50, 52, 55, 575, 150, 225, 325, 450, 475, 500, 550, 550],
                ['Product2', 150, 100, 50, 90, 90, 150, 120, 175, 200, 250, 300, 300],
                ['Product3', 15, 20, 25, 30, 90, 100, 120, 120, 150, 180, 200, 200],
            ],
            mergeCells: {
                'A1': [13, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
            ],
        }
    ]

    // Render data grid component
    return (<Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets} />);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" />
</template>

<script>
import { Spreadsheet } from "@jspreadsheet/vue";
import "@jspreadsheet/formula-charts";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
    components: {
        Spreadsheet,
    },
    data() {
    const license = '###license###';
    
    // Worksheets
    const worksheets = [
        {
            data: [
                ['=CHART("bar", B3:M3, [B4:M4, {"data": (B5:M5), "color": "blue", "label": (A5)}, B6:M6]);', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', '', '', '', '', ''],
                ['Products', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                ['Product1', 50, 52, 55, 575, 150, 225, 325, 450, 475, 500, 550, 550],
                ['Product2', 150, 100, 50, 90, 90, 150, 120, 175, 200, 250, 300, 300],
                ['Product3', 15, 20, 25, 30, 90, 100, 120, 120, 150, 180, 200, 200],
            ],
            mergeCells: {
                'A1': [13, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
            ],
        }
    ]

        return {
            license,
            worksheets,
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
import "@jspreadsheet/formula-charts";

// Set the license
jspreadsheet.setLicense('###license###');

// Create the data grid component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`;
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create summary spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        ['=CHART("bar", B3:M3, [B4:M4, {"data": (B5:M5), "color": "blue", "label": (A5)}, B6:M6]);', '', '', '', '', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', '', '', '', '', ''],
                        ['Products', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        ['Product1', 50, 52, 55, 575, 150, 225, 325, 450, 475, 500, 550, 550],
                        ['Product2', 150, 100, 50, 90, 90, 150, 120, 175, 200, 250, 300, 300],
                        ['Product3', 15, 20, 25, 30, 90, 100, 120, 120, 150, 180, 200, 200],
                    ],
                    mergeCells: {
                        'A1': [13, 1],
                    },
                    defaultColWidth: '40px',
                    columns: [
                        {width: '100px'},
                    ],
                }
            ]
        });
    }
}
```


## Chart Options

  

#### Code



```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
 
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>
 
<div id="spreadsheet"></div>
 
<script>
jspreadsheet.setLicense('###license###');
 
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['=CHART("line", A4:A11, B4:B11, { "legend": FALSE, "titleAxesX": (B1), "titleAxesY": (B2) })',],
                [],
                ['Month', 'Sales amount'],
                ['January', 5],
                ['February', 22],
                ['March', 57],
                ['April', 131],
                ['May', 204],
                ['June', 198],
                ['July', 164],
                ['August', 243],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
            rows: {0: {height: '380px'}},
        }
    ]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet } from "@jspreadsheet/react";
import "@jspreadsheet/formula-charts";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Worksheets
    const worksheets = [
        {
            data: [
                ['=CHART("line", A4:A11, B4:B11, { "legend": FALSE, "titleAxesX": (B1), "titleAxesY": (B2) })',],
                [],
                ['Month', 'Sales amount'],
                ['January', 5],
                ['February', 22],
                ['March', 57],
                ['April', 131],
                ['May', 204],
                ['June', 198],
                ['July', 164],
                ['August', 243],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
        }
    ]

    // Render data grid component
    return (<Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets} />);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" />
</template>

<script>
import { Spreadsheet } from "@jspreadsheet/vue";
import "@jspreadsheet/formula-charts";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
    components: {
        Spreadsheet,
    },
    data() {
        const license = '###license###';

        // Worksheets
        const worksheets = [
            {
                data: [
                    ['=CHART("line", A4:A11, B4:B11, { "legend": FALSE, "titleAxesX": (B1), "titleAxesY": (B2) })',],
                    [],
                    ['Month', 'Sales amount'],
                    ['January', 5],
                    ['February', 22],
                    ['March', 57],
                    ['April', 131],
                    ['May', 204],
                    ['June', 198],
                    ['July', 164],
                    ['August', 243],
                ],
                minDimensions: [5, 1],
                mergeCells: {
                    'A1': [5, 1],
                },
                defaultColWidth: '40px',
                columns: [
                    { width: '100px' },
                    { width: '100px' },
                ],
            }
        ]

        return {
            license,
            worksheets,
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
import "@jspreadsheet/formula-charts";

// Set the license
jspreadsheet.setLicense('###license###');

// Create the data grid component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`;
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create summary spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        ['=CHART("line", A4:A11, B4:B11, { "legend": FALSE, "titleAxesX": (B1), "titleAxesY": (B2) })',],
                        [],
                        ['Month', 'Sales amount'],
                        ['January', 5],
                        ['February', 22],
                        ['March', 57],
                        ['April', 131],
                        ['May', 204],
                        ['June', 198],
                        ['July', 164],
                        ['August', 243],
                    ],
                    minDimensions: [5, 1],
                    mergeCells: {
                        'A1': [5, 1],
                    },
                    defaultColWidth: '40px',
                    columns: [
                        {width: '100px'},
                        {width: '100px'},
                    ],
                    rows: {0: {height: '380px'}},
                }
            ]
        });
    }
}
```

## Disable property mapping

  

#### Code



```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
 
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>
 
<div id="spreadsheet"></div>
 
<script>
jspreadsheet.setLicense('###license###');
 
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['=CHART("line", A4:A11, { "disableJssSimplification": TRUE, "data": (B4:B11), "fill": TRUE, "borderColor": "#FFD54F", "backgroundColor": "#FFE082" }, { "disableJssSimplification": TRUE, "plugins": { "legend": { "display": FALSE } }, "scales": { "x": { "ticks": { "color": "#388E3C" } }, "y": { "ticks": { "color": "#039BE5" } } } })',],
                [],
                ['Month', 'Sales amount'],
                ['January', 5],
                ['February', 22],
                ['March', 57],
                ['April', 131],
                ['May', 204],
                ['June', 198],
                ['July', 164],
                ['August', 243],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
            rows: {0: {height: '380px'}},
        }
    ]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet } from "@jspreadsheet/react";
import "@jspreadsheet/formula-charts";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Worksheets
    const worksheets = [
        {
            data: [
                ['=CHART("line", A4:A11, { "disableJssSimplification": TRUE, "data": (B4:B11), "fill": TRUE, "borderColor": "#FFD54F", "backgroundColor": "#FFE082" }, { "disableJssSimplification": TRUE, "plugins": { "legend": { "display": FALSE } }, "scales": { "x": { "ticks": { "color": "#388E3C" } }, "y": { "ticks": { "color": "#039BE5" } } } })',],
                [],
                ['Month', 'Sales amount'],
                ['January', 5],
                ['February', 22],
                ['March', 57],
                ['April', 131],
                ['May', 204],
                ['June', 198],
                ['July', 164],
                ['August', 243],
            ],
            minDimensions: [5, 1],
            mergeCells: {
                'A1': [5, 1],
            },
            defaultColWidth: '40px',
            columns: [
                {width: '100px'},
                {width: '100px'},
            ],
            rows: {0: {height: '380px'}},
        }
    ]

    // Render data grid component
    return (<Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets} />);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" />
</template>

<script>
import { Spreadsheet } from "@jspreadsheet/vue";
import "@jspreadsheet/formula-charts";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
    components: {
        Spreadsheet,
    },
    data() {
        const license = '###license###';

        // Worksheets
        const worksheets = [
            {
                data: [
                    ['=CHART("line", A4:A11, { "disableJssSimplification": TRUE, "data": (B4:B11), "fill": TRUE, "borderColor": "#FFD54F", "backgroundColor": "#FFE082" }, { "disableJssSimplification": TRUE, "plugins": { "legend": { "display": FALSE } }, "scales": { "x": { "ticks": { "color": "#388E3C" } }, "y": { "ticks": { "color": "#039BE5" } } } })',],
                    [],
                    ['Month', 'Sales amount'],
                    ['January', 5],
                    ['February', 22],
                    ['March', 57],
                    ['April', 131],
                    ['May', 204],
                    ['June', 198],
                    ['July', 164],
                    ['August', 243],
                ],
                minDimensions: [5, 1],
                mergeCells: {
                    'A1': [5, 1],
                },
                defaultColWidth: '40px',
                columns: [
                    {width: '100px'},
                    {width: '100px'},
                ],
                rows: {0: {height: '380px'}},
            }
        ]

        return {
            license,
            worksheets,
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
import "@jspreadsheet/formula-charts";

// Set the license
jspreadsheet.setLicense('###license###');

// Create the data grid component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`;
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create summary spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        ['=CHART("line", A4:A11, { "disableJssSimplification": TRUE, "data": (B4:B11), "fill": TRUE, "borderColor": "#FFD54F", "backgroundColor": "#FFE082" }, { "disableJssSimplification": TRUE, "plugins": { "legend": { "display": FALSE } }, "scales": { "x": { "ticks": { "color": "#388E3C" } }, "y": { "ticks": { "color": "#039BE5" } } } })',],
                        [],
                        ['Month', 'Sales amount'],
                        ['January', 5],
                        ['February', 22],
                        ['March', 57],
                        ['April', 131],
                        ['May', 204],
                        ['June', 198],
                        ['July', 164],
                        ['August', 243],
                    ],
                    minDimensions: [5, 1],
                    mergeCells: {
                        'A1': [5, 1],
                    },
                    defaultColWidth: '40px',
                    columns: [
                        {width: '100px'},
                        {width: '100px'},
                    ],
                    rows: {0: {height: '380px'}},
                }
            ]
        });
    }
}
```

# Sparkline Form

## Simple use

  

#### Code



```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
 
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>
 
<div id="spreadsheet"></div>
 
<script>
jspreadsheet.setLicense('###license###');
 
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['Line progression', 150, 50, 250, 300, 350, '=CHART("sparkline", B1:F1)'],
            ],
            columns: [
                {type: 'text', width: '200px'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'text', width: '200px'},
            ],
            rows: {
                0: {height: '100px'}
            },
            worksheetName: 'Line progression',
        },
    ]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet } from "@jspreadsheet/react";
import "@jspreadsheet/formula-charts";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Worksheets
    const worksheets = [
        {
            data: [
                ['Line progression', 150, 50, 250, 300, 350, '=CHART("sparkline", B1:F1)'],
            ],
            columns: [
                {type: 'text', width: '200px'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'text', width: '200px'},
            ],
            rows: {
                0: {height: '100px'}
            },
            worksheetName: 'Line progression',
        },
    ]

    // Render data grid component
    return (<Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets} />);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" />
</template>

<script>
import { Spreadsheet } from "@jspreadsheet/vue";
import "@jspreadsheet/formula-charts";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
    components: {
        Spreadsheet,
    },
    data() {
        const license = '###license###';

        // Worksheets
        const worksheets = [
            {
                data: [
                    ['Line progression', 150, 50, 250, 300, 350, '=CHART("sparkline", B1:F1)'],
                ],
                columns: [
                    {type: 'text', width: '200px'},
                    {type: 'number'},
                    {type: 'number'},
                    {type: 'number'},
                    {type: 'number'},
                    {type: 'number'},
                    {type: 'text', width: '200px'},
                ],
                rows: {
                    0: {height: '100px'}
                },
                worksheetName: 'Line progression',
            },
        ]

        return {
            license,
            worksheets,
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
import "@jspreadsheet/formula-charts";

// Set the license
jspreadsheet.setLicense('###license###');

// Create the data grid component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`;
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create summary spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        ['Line progression', 150, 50, 250, 300, 350, '=CHART("sparkline", B1:F1)'],
                    ],
                    columns: [
                        {type: 'text', width: '200px'},
                        {type: 'number'},
                        {type: 'number'},
                        {type: 'number'},
                        {type: 'number'},
                        {type: 'number'},
                        {type: 'text', width: '200px'},
                    ],
                    rows: {
                        0: {height: '100px'}
                    },
                    worksheetName: 'Line progression',
                },
            ]
        });
    }
}
```

## Dataset object

  

#### Code



```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
 
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
 
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>
 
<div id="spreadsheet"></div>
 
<script>
jspreadsheet.setLicense('###license###');
 
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        {
            data: [
                ['Pie chart', 30, 50, 26, 150, 90, '=CHART("sparkline", { "data": (B1:F1), "color": ["#F06292", "#64B5F6", "#81C784", "#FF7043", "#FFD54F"] }, "pie")'],
            ],
            columns: [
                {type: 'text', width: '200px'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'text', width: '200px'},
            ],
            rows: {0: {height: '100px'}},
            worksheetName: 'Pie chart',
        },
    ]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet } from "@jspreadsheet/react";
import "@jspreadsheet/formula-charts";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Worksheets
    const worksheets = [
        {
            data: [
                ['Pie chart', 30, 50, 26, 150, 90, '=CHART("sparkline", { "data": (B1:F1), "color": ["#F06292", "#64B5F6", "#81C784", "#FF7043", "#FFD54F"] }, "pie")'],
            ],
            columns: [
                {type: 'text', width: '200px'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'number'},
                {type: 'text', width: '200px'},
            ],
            worksheetName: 'Pie chart',
        },
    ]

    // Render data grid component
    return (<Spreadsheet ref={spreadsheet} license={license} worksheets={worksheets} />);
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :worksheets="worksheets" />
</template>

<script>
import { Spreadsheet } from "@jspreadsheet/vue";
import "@jspreadsheet/formula-charts";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

export default {
    components: {
        Spreadsheet,
    },
    data() {
        const license = '###license###';

        // Worksheets
        const worksheets = [
            {
                data: [
                    ['Pie chart', 30, 50, 26, 150, 90, '=CHART("sparkline", { "data": (B1:F1), "color": ["#F06292", "#64B5F6", "#81C784", "#FF7043", "#FFD54F"] }, "pie")'],
                ],
                columns: [
                    {type: 'text', width: '200px'},
                    {type: 'number'},
                    {type: 'number'},
                    {type: 'number'},
                    {type: 'number'},
                    {type: 'number'},
                    {type: 'text', width: '200px'},
                ],
                worksheetName: 'Pie chart',
            },
        ]

        return {
            license,
            worksheets,
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
import "@jspreadsheet/formula-charts";

// Set the license
jspreadsheet.setLicense('###license###');

// Create the data grid component
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`;
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create summary spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                {
                    data: [
                        ['Pie chart', 30, 50, 26, 150, 90, '=CHART("sparkline", { "data": (B1:F1), "color": ["#F06292", "#64B5F6", "#81C784", "#FF7043", "#FFD54F"] }, "pie")'],
                    ],
                    columns: [
                        {type: 'text', width: '200px'},
                        {type: 'number'},
                        {type: 'number'},
                        {type: 'number'},
                        {type: 'number'},
                        {type: 'number'},
                        {type: 'text', width: '200px'},
                    ],
                    rows: {0: {height: '100px'}},
                    worksheetName: 'Pie chart',
                },
            ]
        });
    }
}
```

 
