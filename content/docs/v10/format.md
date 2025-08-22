title: Data Format and Mask
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like format, currency format, date format, date mask, spreadsheet currency, cell formatting, format, number formatting, mask, data display customization, data formatting techniques, value masking, Jspreadsheet formatting options
description: Learn how to format and customize data in Jspreadsheet. Explore techniques for formatting numbers, currency, dates, and more to enhance the display of your spreadsheet data.

# Spreadsheet format

Jspreadsheet provides `mask, format, and locale` properties, which help format column and cell data. These properties enable Jspreadsheet to be more compatible with other popular spreadsheets software like Excel and Google Sheets. 

## Documentation

### Locale property



### Mask and format properties

The initial part of this chapter explains how to use the mask and format properties. The `mask` property restricts the user from entering only specific input, defined by spreadsheet-like tokens, while the `format` property is applied after the user finishes editing a cell. These tokens are compatible with other spreadsheet software, and you can use them as demonstrated below. 

{.ignore}
```javascript
/**
A few valid tokens can be used with mask as below:
0
0.00
0%
0.00%
#,##0
#,##0.00
#,##0;(#,##0)
#,##0;[Red](#,##0)
#,##0.00;(#,##0.00)
#,##0.00;[Red](#,##0.00)
d-mmm-yy
d-mmm
dd/mm/yyyy
mmm-yy
h:mm AM/PM
h:mm:ss AM/PM
h:mm
h:mm:ss
m/d/yy h:mm
mm:ss
[h]:mm:ss
*/
```
 

{.ignore-execution}
```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            // Excel like token to format the currency input
            mask: 'U$ #.##0,00'
        }]
    }]
});
</script>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const columns = [{
        type: 'number',
        // Excel like token to format the currency input
        mask: 'U$ #.##0,00'
    }];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet columns={columns} minDimensions={[10, 10]}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const columns = [{
            type: 'number',
            // Excel like token to format the currency input
            mask: 'U$ #.##0,00'
        }];

        return {
            columns
        };
    }
}
</script>
```
```angularjs
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [10,10],
                columns: [{
                    type: 'number',
                    // Excel like token to format the currency input
                    mask: 'U$ #.##0,00'
                }]
            }]
        });
    }
}
```
 

 

## Locale

### Currency formatting

You must provide a currency property when using the 'currency' style in Jspreadsheet. Additionally, you can use the optional currencyDisplay and currencySign properties to control how the currency unit is displayed. 


{.ignore-execution}
```html
<div id="spreadsheet1"></div>
<div id="spreadsheet2"></div>
<div id="spreadsheet3"></div>

<script>
// India currency
jspreadsheet(document.getElementById('spreadsheet1'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            // Locale will enable number formatting
            locale: 'en-IN',
            // Options for the number format class. You can find more about he options on the link above
            options: { style:'currency', currency: 'INR' }
        }]
    }]
});

// Accounting notation
jspreadsheet(document.getElementById('spreadsheet2'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            locale: 'bn',
            options: { style:'currency', currency: 'USD', currencySign: 'accounting' }
        }]
    }]
});

// Currency with decimals
jspreadsheet(document.getElementById('spreadsheet3'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            locale: 'bn',
            options: {
                 style: 'currency', 
                 currency: 'EUR', 
                 maximumFractionDigits: 4,
                 minimumFractionDigits: 1
            }
        }]
    }]
});
</script>
```
```jsx
// India currency
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Columns
    const columns = [{
        type: 'number',
        // Locale will enable number formatting
        locale: 'en-IN',
        // Options for the number format class. You can find more about he options on the link above
        options: { style:'currency', currency: 'INR' }
    }];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet columns={columns} minDimensions={[10,10]} />
        </Spreadsheet>
    );
}

// Accounting notation
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Columns
    const columns = [{
        type: 'number',
        locale: 'bn',
        options: { style:'currency', currency: 'USD', currencySign: 'accounting' }
    }];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet columns={columns} minDimensions={[10,10]} />
        </Spreadsheet>
    );
}

// Currency with decimals
export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Columns
    const columns = [{
        type: 'number',
        locale: 'bn',
        options: {
             style: 'currency',
             currency: 'EUR',
             maximumFractionDigits: 4,
             minimumFractionDigits: 1
        }
    }];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet columns={columns} minDimensions={[10,10]} />
        </Spreadsheet>
    );
}
```
```vue
<script>
export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Columns
        const columns = [{
            type: 'number',
            locale: 'bn',
            options: { style:'currency', currency: 'USD', currencySign: 'accounting' }
        }];

        return {
            columns
        };
    }
};

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Columns
        const columns = [{
            type: 'number',
            locale: 'bn',
            options: { style:'currency', currency: 'USD', currencySign: 'accounting' }
        }];

        return {
            columns
        };
    }
};

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Columns
        const columns = [{
            type: 'number',
            locale: 'bn',
            options: {
                 style: 'currency',
                 currency: 'EUR',
                 maximumFractionDigits: 4,
                 minimumFractionDigits: 1
            }
        }];

        return {
            columns
        };
    }
};
</script>
```
```angularjs
export class AppComponent {
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [10,10],
                columns: [{
                    type: 'number',
                    // Locale will enable number formatting
                    locale: 'en-IN',
                    // Options for the number format class. You can find more about he options on the link above
                    options: { style:'currency', currency: 'INR' }
                }]
            }]
        });
    }
}

export class AppComponent {
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [10,10],
                columns: [{
                    type: 'number',
                    locale: 'bn',
                    options: { style:'currency', currency: 'USD', currencySign: 'accounting' }
                }]
            }]
        });
    }
}

export class AppComponent {
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [10,10],
                columns: [{
                    type: 'number',
                    locale: 'bn',
                    options: {
                         style: 'currency',
                         currency: 'EUR',
                         maximumFractionDigits: 4,
                         minimumFractionDigits: 1
                    }
                }]
            }]
        });
    }
}
```
 

 

### Unit formatting

If the style is 'unit,' a unit property must be provided. Optionally, unitDisplay controls the unit formatting. 


{.ignore-execution}
```html
<div id="spreadsheet"></div>

<script>
// → '3,500 liters'
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            locale: 'en-US',
            options: { style: 'unit', unit: 'liter', unitDisplay: 'long' }
        }]
    }]
});
</script>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Columns
    const columns = [{
            type: 'number',
            locale: 'en-US',
            options: { style: 'unit', unit: 'liter', unitDisplay: 'long' }
        }]
    }];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet columns={columns} minDimensions={[10,10]} />
        </Spreadsheet>
    );
}
```
```vue
<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Reference for the array of worksheet instances
        const spreadsheet = ref(null);

        // Columns
        const columns = [{
                type: 'number',
                locale: 'en-US',
                options: { style: 'unit', unit: 'liter', unitDisplay: 'long' }
            }]
        }];

        return {
            spreadsheet,
            columns
        };
    }
}
</script>
```
```angularjs
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [10,10],
                columns: [{
                    type: 'number',
                    locale: 'en-US',
                    options: { style: 'unit', unit: 'liter', unitDisplay: 'long' }
                }]
            }]
        });
    }
}
```
 

 

### Scientific, engineering or compact notations

Scientific and compact notation are represented by the notation option and can be formatted like this: 

{.ignore-execution}
```html
<div id="spreadsheet"></div>

<script>
// Example: 9.9亿
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: 'number',
            locale: 'zh-CN',
            options: { notation: "compact" }
        }]
    }]
});
</script>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Columns
    const columns = [{
            type: 'number',
            locale: 'zh-CN',
            options: { notation: "compact" }
        }]
    }];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet columns={columns} minDimensions={[10,10]} />
        </Spreadsheet>
    );
}
```
```vue
<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Reference for the array of worksheet instances
        const spreadsheet = ref(null);

        // Columns
        const columns = [{
                type: 'number',
                locale: 'zh-CN',
                options: { notation: "compact" }
            }]
        }];

        return {
            spreadsheet,
            columns
        };
    }
}
</script>
```
```angularjs
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [10,10],
                columns: [{
                    type: 'number',
                    locale: 'zh-CN',
                    options: { notation: "compact" }
                }]
            }]
        });
    }
}
```

### Percentage

Percentages can be formatted like this: 

{.ignore-execution}
```html
<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [10,10],
        columns: [{
            type: "number",
            locale: 'en-US',
            options: { style: 'percent' },
        }]
    }]
});
</script>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";


export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Columns
    const columns = [{
        { type: "number", locale: 'en-US', options: { style: 'percent' }},
    }];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet}>
            <Worksheet columns={columns} minDimensions={[10,10]} />
        </Spreadsheet>
    );
}
```
```vue
<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";


export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Reference for the array of worksheet instances
        const spreadsheet = ref(null);

        // Columns
        const columns = [{
            { type: "number", locale: 'en-US', options: { style: 'percent' }},
        }];

        return {
            spreadsheet,
            columns
        };
    }
}
</script>
```
```angularjs
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [{
                minDimensions: [10,10],
                columns: [{
                    { type: "number", locale: 'en-US', options: { style: 'percent' }},
                }]
            }]
        });
    }
}
```
 

 

## Examples

### Data grid with different currencies

The example below implements number formatting using Intl.NumberFormat or mask. 

See more examples of the [spreadsheet format](https://jsfiddle.net/spreadsheet/L9jxszf3/) on jsfiddle

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true,
    worksheets: [
        {
            minDimensions:[6, 10],
            data: [
                [1024,1024,0.24,1024,1024,1024],
                [1000.456,1000.456,0.4155,1000.456,1000.456,1000.456],
                ['547','547,98','7,98','547.98','547,98','547.98'],
            ],
            columns: [
                {
                    title:"Currency INR",
                    type: "number",
                    locale: 'en-IN',
                    options: { style:'currency', currency: 'INR' } },
                {
                    title: "Currency BRL",
                    type: "number",
                    locale: 'pt-BR',
                    options: { style: 'currency', currency: 'BRL' } },
                {
                    title: "Percent US",
                    type: "number",
                    mask: "0.00%" },
                {
                    title: "Units Liter US",
                    type: "number",
                    locale: 'en-US',
                    options: { style: 'unit', unit: 'liter', unitDisplay: 'long' } },
                {
                    type: "number",
                    format: '#.##0,00'
                },
                {
                    type: "number",
                    mask: '#,##0'
                },
            ],
            defaultColWidth: '120px',
        }
    ]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        [1024,1024,0.24,1024,1024,1024],
        [1000.456,1000.456,0.4155,1000.456,1000.456,1000.456],
        ['547','547,98','7,98','547.98','547,98','547.98'],
    ];
    // Columns
    const columns = [
        {
            title:"Currency INR",
            type: "number",
            locale: 'en-IN',
            options: { style:'currency', currency: 'INR' } },
        {
            title: "Currency BRL",
            type: "number",
            locale: 'pt-BR',
            options: { style: 'currency', currency: 'BRL' } },
        {
            title: "Percent US",
            type: "number",
            mask: "0.00%" },
        {
            title: "Units Liter US",
            type: "number",
            locale: 'en-US',
            options: { style: 'unit', unit: 'liter', unitDisplay: 'long' } },
        {
            type: "number",
            format: '#.##0,00'
        },
        {
            type: "number",
            mask: '#,##0'
        }
    ];

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} toolbar={true}>
            <Worksheet data={data} columns={columns} minDimensions={[6,10]} defaultColWidth="120px" />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet">
        <Worksheet :data="data" :columns="columns" :minDimensions="[6,10]" defaultColWidth="120px" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            [1024,1024,0.24,1024,1024,1024],
            [1000.456,1000.456,0.4155,1000.456,1000.456,1000.456],
            ['547','547,98','7,98','547.98','547,98','547.98'],
        ];

        // Columns
        const columns = [
            {
                title:"Currency INR",
                type: "number",
                locale: 'en-IN',
                options: { style:'currency', currency: 'INR' } },
            {
                title: "Currency BRL",
                type: "number",
                locale: 'pt-BR',
                options: { style: 'currency', currency: 'BRL' } },
            {
                title: "Percent US",
                type: "number",
                mask: "0.00%" },
            {
                title: "Units Liter US",
                type: "number",
                locale: 'en-US',
                options: { style: 'unit', unit: 'liter', unitDisplay: 'long' } },
            {
                type: "number",
                format: '#.##0,00'
            },
            {
                type: "number",
                mask: '#,##0'
            }
        ];

        return {
            columns,
            data,
            license
        };
    }
}
</script>
```
```angularjs
@Component({
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [
                {
                    minDimensions:[6, 10],
                    data: [
                        [1024,1024,0.24,1024,1024,1024],
                        [1000.456,1000.456,0.4155,1000.456,1000.456,1000.456],
                        ['547','547,98','7,98','547.98','547,98','547.98'],
                    ],
                    columns: [
                        {
                            title:"Currency INR",
                            type: "number",
                            locale: 'en-IN',
                            options: { style:'currency', currency: 'INR' } },
                        {
                            title: "Currency BRL",
                            type: "number",
                            locale: 'pt-BR',
                            options: { style: 'currency', currency: 'BRL' } },
                        {
                            title: "Percent US",
                            type: "number",
                            mask: "0.00%" },
                        {
                            title: "Units Liter US",
                            type: "number",
                            locale: 'en-US',
                            options: { style: 'unit', unit: 'liter', unitDisplay: 'long' } },
                        {
                            type: "number",
                            format: '#.##0,00'
                        },
                        {
                            type: "number",
                            mask: '#,##0'
                        },
                    ],
                    defaultColWidth: '120px',
                }
            ]
        });
    }
}
```
 

 

### Apply a mask programmatically

The example below shows how to change the currency of the data grid dynamically. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<br/>

<input type="button" value="set $ #,##0.00 to A1" id="setformatbtn" />

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

let setFormat = function() {
	table[0].updateProperty(0,0, {mask: '$ #,##0.00' });
}

// Create the spreadsheet
let table = jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
    	data: [['101.00']],
        minDimensions: [8,8],
    }],
});

document.getElementById("setformatbtn").onclick = setFormat
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import jspreadsheet from "jspreadsheet";

const license = '###license###';

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [['101.00']]

    // Render data grid component
    return (
        <>
            <Spreadsheet ref={spreadsheet} license={license}>
                <Worksheet data={data} minDimensions={[6,10]} />
            </Spreadsheet>
            <input type="button" value="set $ #,##0.00 to A1"
                onClick={() => spreadsheet.current[0].updateProperty(0,0, { mask: '$ #,##0.00' })} />
        </>

    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" />
    </Spreadsheet>
    <input type="button" value="set $ #,##0.00 to A1" @click="setFormat" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    methods: {
        setFormat() {
            this.$refs.spreadsheet.current[0].updateProperty(0,0, { mask: '$ #,##0.00' })}
        },
    },
    data() {
        // Data
        const data = [['101.00']]

        return {
            data,
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

@Component({
    selector: "app-root",
    template: `
        <div #spreadsheet></div>
        <button type="button" (click)="this.worksheets[0].updateProperty(0,0, {mask: '$ #,##0.00' });">set $ #,##0.00 to A1</button>
    `
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            tabs: true,
            toolbar: true,
            worksheets: [{
                data: [['101.00']],
                minDimensions: [8,8],
            }],
        });
    }
}
```
 

 

## Custom formatting

Jspreadsheet allows you to integrate custom masking using the method `render`, as shown below. 

### Format your cells using MomentJS

The example below shows how to mask a cell using MomentJS. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://cdn.jsdelivr.net/npm/moment/moment.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
const customRender = function(td, value, x, y, instance, options) {
    if (td && td.innerText && options.customFormat) {
        td.innerText = moment(td.innerText).format(options.customFormat);
    }
}

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    tabs: true,
    toolbar: true,
    worksheets: [{
        data: [['2022-01-01 12:14:12'],['=TODAY()']],
        columns: [{
            width: 300,
            customFormat: 'MMMM Do YYYY, h:mm:ss a',
            render: customRender,
            align: 'right',
        }],
        minDimensions: [6,8],
    }],
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import jspreadsheet from "jspreadsheet";
import moment from "momentjs";

const license = '###license###';

// Create a new spreadsheet
const customRender = function(td, value, x, y, instance, options) {
    if (td && td.innerText && options.customFormat) {
        td.innerText = moment(td.innerText).format(options.customFormat);
    }
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [['2022-01-01 12:14:12'],['=TODAY()']];
    // Columns
    const columns = [{
        width: 300,
        customFormat: 'MMMM Do YYYY, h:mm:ss a',
        render: customRender,
        align: 'right',
    }]

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet data={data} columns={columns} minDimensions={[6,8]} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :data="data" :columns="columns" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [['2022-01-01 12:14:12'],['=TODAY()']];
        // Columns
        const columns = [{
            width: 300,
            customFormat: 'MMMM Do YYYY, h:mm:ss a',
            render: (td, value, x, y, instance, options) => {
                if (td && td.innerText && options.customFormat) {
                    td.innerText = moment(td.innerText).format(options.customFormat);
                }
            },
            align: 'right',
        }];

        return {
            data,
            columns,
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

// Create a new spreadsheet
const customRender = function(td, value, x, y, instance, options) {
    if (td && td.innerText && options.customFormat) {
        td.innerText = moment(td.innerText).format(options.customFormat);
    }
}

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
            tabs: true,
            toolbar: true,
            worksheets: [{
                data: [['2022-01-01 12:14:12'],['=TODAY()']],
                columns: [{
                    width: 300,
                    customFormat: 'MMMM Do YYYY, h:mm:ss a',
                    render: customRender,
                    align: 'right',
                }],
                minDimensions: [6,8],
            }]
        });
    }
}
```
 
