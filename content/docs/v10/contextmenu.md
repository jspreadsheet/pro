title: Configuring the Data Grid Context Menu in Jspreadsheet
keywords: Jspreadsheet, context menu customization, data grid enhancements, JavaScript spreadsheets, dynamic context menu entries, Excel-like interface
description: Tailor the context menu within Jspreadsheet data grid to fit your needs. Learn to manage default items, access cell coordinates, and inject additional data. Expand the menu with custom entries tailored to your application's requirements and conditions.

# Data Grid Contextmenu

Jspreadsheet enables customization of the context menu by defining a method with the contextmenu property. The handler receives default items, section info, coordinates, and extra information, allowing developers to create new entries based on conditions and rules within the application.  

> **Customize the menu via plugins**  Plugins is a convenient way to customize the contextmenu of your application. [Learn more](/docs/plugins). 

## Documentation

### The event handler

{.ignore}
```javascript
/**
 * Customize the items of the (JavaScript data grid) context menu.
 * @param {object} worksheet - Instance of the active worksheet
 * @param {number} x - column number
 * @param {number} y - row number
 * @param {object} event - mouse event handler
 * @param {items[]} items - default contextmenu items
 * @param {string} section - Available: nested | header | row | cell | selectall | tabs | cloning | toolbar | footer
 * @param {mixed} a1 - this is a first mixed argument that depends on the section
 * @param {mixed} a2 - this is a second mixed argument that depends on the section
 */
contextMenu(worksheet: Object, x: Number, y: Number, e: Object, items: [], section: String, a1: Any, a2: Any) => []
```
  

### Properties for each entry

As previously mentioned, the contextmenu custom handler should return an array of menu items. Each item in the array is an object that can have the following properties.

| Property                | Description                                                           |
| ------------------------|-----------------------------------------------------------------------|
| type: string            | Context menu item type: line \| divisor \| default                    |
| title: string           | Contextmenu item title                                                |
| icon: string            | Context menu icon key. (Material icon key icon identification)        |
| id: string              | HTML id property of the DOM element                                   |
| disabled: boolean       | The item is disabled                                                  |
| onclick: function       | Specific onclick event for the element.                               |
| shortcut: string        | A short description or instruction for the item. Normally a shortcut. |
| tooltip: string         | Show this text when the user mouse over the element                   |
| submenu: Array of items | Submenu items                                                         |

 

### Translation

How to translate the data grid contextmenu options? You can use jSuites.setDictionary to define the word in english and the desirable translation. 

{.ignore}
```javascript
jspreadsheet.setDictionary({
    'Rename this worksheet': 'Renomear worksheet',
    'Delete this worksheet': 'Apagar worksheet',
    'Are you sure?': 'Tem certeza?',
    'Rename this cell': 'Renomear essa celula',
    'Cut': 'Cortar',
    'Copy': 'Copy',
    'Paste': 'Colar',
    'Insert a new column before': 'Inserir uma coluna antes',
    'Insert a new column after': 'Inserior uma coluna depois',
    'Insert a new column after': 'Inserior uma coluna depois',
    'Delete selected columns': 'Apagar colunas selecionadas',
    'Rename this column': 'Renomar essa coluna',
    'Create a new row': 'Criar uma nova linha',
    'Order ascending': 'Ordenar asc',
    'Order descending': 'Ordenar desc',
    'Insert a new row before': 'Inserir uma linha antes',
    'Insert a new row after': 'Inserir uma nova linha depois',
    'Delete selected rows': 'Apagar linhas selecionadas',
    'Edit notes': 'Editar notas',
    'Add notes': 'Adicionar notas',
    'Notes': 'Notas',
    'Clear notes': 'Apagar notas',
    'Save as': 'Salvar como',
    'About': 'Sobre',
});
```
  

Jspreadsheet uses jSuites contextmenu plugin. For more details and example, please visit: <https://jsuites.net/v5/contextmenu>.

 

## Examples

### Disable the contextmenu

How do I disable the contextmenu on Jspreadsheet? Add a method contextMenu and return false. 


```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        minDimensions: [4,4],
    }],
    contextmenu: function() {
        return false;
    }
});
</script>
</html>
```

```jsx
import React, {useRef} from "content/docs/v10/react";
import {Spreadsheet, Worksheet} from "@jspreadsheet/react";

const license = "###license###";

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Disable the context menu
    const contextMenu = () => {
        return false;
    };

    return (
        <Spreadsheet ref={spreadsheet} license={license} contextMenu={contextMenu}>
            <Worksheet minDimensions={[10, 10]}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :contextMenu="contextMenu">
        <Worksheet :minDimensions="[4,4]" />
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
        // Disable the context menu
        const contextMenu = () => {
            return false;
        };

        return {
            contextMenu,
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
                minDimensions: [4,4],
            }],
            contextmenu: function() {
                return false;
            }
        });
    }
}
```
 

 

### Customize the contextmenu

Customize the contextmenu with a few basic options depending on the section clicked. 

```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            ["Apples", "Produce", 1.5, 10, "=C1*(1-(D1/100))"],
            ["Bread", "Bakery", 3.0, 20, "=C2*(1-(D2/100))"],
            ["Cheese", "Dairy", 5.0, 15, "=C3*(1-(D3/100))"],
            ["Eggs", "Dairy", 2.5, 0, "=C4*(1-(D4/100))"],
        ],
        columns: [
            { title: 'Food', width: '140px' },
            { title: 'Category' },
            { title: 'Unit Price' },
            { title: 'Discount' },
            { title: 'Total ' },
         ],
         allowComments: true,
    }],
    contextMenu: function(o, x, y, e, items, section) {
         // Reset all items
         let itemsArr = [];

         // If the click was in the headers
         if (section == 'header') {
            // Items to the header only
            itemsArr.push({
                title: jSuites.translate('Execute one action'),
                onclick: function() {
                    alert('test')
                }
            });

            // Add a line
            itemsArr.push({ type: 'line' });
         }

         // Save
         itemsArr.push({
             title: jSuites.translate('Save as'),
             shortcut: 'Ctrl + S',
             icon: 'save',
             onclick: function () {
                 o.download();
             }
         });

         // About
         itemsArr.push({
             title: jSuites.translate('About'),
             onclick: function() {
                 alert('https://jspreadsheet.com');
             }
         });

         return itemsArr;
     }
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";
import jSuites from "jsuites";

const license = '###license###';

// Intercept the context menu
const contextMenu = (o, x, y, e, items, section) => {
     // Reset all items
     let items = [];

     // If the click was in the headers
     if (section == 'header') {
        // Items to the header only
        items.push({
            title: jSuites.translate('Execute one action'),
            onclick: function() {
                alert('test')
            }
        });

        // Add a line
        items.push({ type: 'line' });
     }

     // Save
     items.push({
         title: jSuites.translate('Save as'),
         shortcut: 'Ctrl + S',
         icon: 'save',
         onclick: function () {
             o.download();
         }
     });

     // About
     items.push({
         title: jSuites.translate('About'),
         onclick: function() {
             alert('https://jspreadsheet.com');
         }
     });

     return items;
}

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();
    // Data
    const data = [
        ["Apples", "Produce", 1.5, 10, "=C1*(1-(D1/100))"],
        ["Bread", "Bakery", 3.0, 20, "=C2*(1-(D2/100))"],
        ["Cheese", "Dairy", 5.0, 15, "=C3*(1-(D3/100))"],
        ["Eggs", "Dairy", 2.5, 0, "=C4*(1-(D4/100))"],
    ];
    // Columns
    const columns = [
        { title: 'Food', width: '140px' },
        { title: 'Category' },
        { title: 'Unit Price' },
        { title: 'Discount' },
        { title: 'Total ' },
    ];

    return (
        <Spreadsheet ref={spreadsheet} license={license} contextMenu={contextMenu}>
            <Worksheet data={data} columns={columns} />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :contextMenu="contextMenu">
        <Worksheet :data="data" :columns="data" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import jSuites from "jsuites";

const license = '###license###';

// Intercept the context menu
const contextMenu = (o, x, y, e, items, section) => {
     // Reset all items
     let items = [];

     // If the click was in the headers
     if (section == 'header') {
        // Items to the header only
        items.push({
            title: jSuites.translate('Execute one action'),
            onclick: function() {
                alert('test')
            }
        });

        // Add a line
        items.push({ type: 'line' });
     }

     // Save
     items.push({
         title: jSuites.translate('Save as'),
         shortcut: 'Ctrl + S',
         icon: 'save',
         onclick: function () {
             o.download();
         }
     });

     // About
     items.push({
         title: jSuites.translate('About'),
         onclick: function() {
             alert('https://jspreadsheet.com');
         }
     });

     return items;
}

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    data() {
        // Data
        const data = [
            ["Apples", "Produce", 1.5, 10, "=C1*(1-(D1/100))"],
            ["Bread", "Bakery", 3.0, 20, "=C2*(1-(D2/100))"],
            ["Cheese", "Dairy", 5.0, 15, "=C3*(1-(D3/100))"],
            ["Eggs", "Dairy", 2.5, 0, "=C4*(1-(D4/100))"],
        ];
        // Columns
        const columns = [
            { title: 'Food', width: '140px' },
            { title: 'Category' },
            { title: 'Unit Price' },
            { title: 'Discount' },
            { title: 'Total ' },
        ];

        return {
            contextmenu,
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

// Create component
@Component({
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
                data: [
                    ["Apples", "Produce", 1.5, 10, "=C1*(1-(D1/100))"],
                    ["Bread", "Bakery", 3.0, 20, "=C2*(1-(D2/100))"],
                    ["Cheese", "Dairy", 5.0, 15, "=C3*(1-(D3/100))"],
                    ["Eggs", "Dairy", 2.5, 0, "=C4*(1-(D4/100))"],
                ],
                columns: [
                    { title: 'Food', width: '140px' },
                    { title: 'Category' },
                    { title: 'Unit Price' },
                    { title: 'Discount' },
                    { title: 'Total ' },
                 ],
                 allowComments: true,
            }],
            contextMenu: function(o, x, y, e, items, section) {
                 // Reset all items
                 let items = [];

                 // If the click was in the headers
                 if (section == 'header') {
                    // Items to the header only
                    items.push({
                        title: jSuites.translate('Execute one action'),
                        onclick: function() {
                            alert('test')
                        }
                    });

                    // Add a line
                    items.push({ type: 'line' });
                 }

                 // Save
                 items.push({
                     title: jSuites.translate('Save as'),
                     shortcut: 'Ctrl + S',
                     icon: 'save',
                     onclick: function () {
                         o.download();
                     }
                 });

                 // About
                 items.push({
                     title: jSuites.translate('About'),
                     onclick: function() {
                         alert('https://jspreadsheet.com');
                     }
                 });

                 return items;
             }
        });
    }
}
```
 

 

### Default data grid context menu

If you wish to customize the original method, you can use this code as a reference. 

{.ignore}
```javascript
/**
 * Translation helper
 */
function T(t) {
    return jSuites.translate(t);
}

/**
 * Default context menu items
 * @param {object} obj - worksheet
 * @param {number} x
 * @param {number} y
 * @param {object} event
 * @param {string} section
 * @param {object\|number} argument1
 * @param {number} argument2
 * @return {array} Return the items to create the contextmenu
 */
function(obj, x, y, e, section, a1, a2) {
    let items = [];
    let o = obj.parent.config;

    // Is mac
    let ctrl = (navigator.userAgent.indexOf("Mac") !== -1) ? '⌘' : 'Ctrl';

    // Click in the tabs
    if (section === 'tabs') {
        if (o.allowRenameWorksheet === true) {
            items.push({
                title: T('Rename this worksheet'),
                onclick: function() {
                    let newName = prompt(T('Rename this worksheet'), e.target.textContent);
                    if (newName) {
                        obj.parent.renameWorksheet(a1, newName);
                    }
                }
            });
        }

        if (o.allowDeleteWorksheet === true) {
            items.push({
                title: T('Delete this worksheet'),
                onclick: function() {
                    if (confirm(T('Are you sure?'), e.target.textContent)) {
                        obj.parent.deleteWorksheet(a1);
                    }
                }
            });
        }

        items.push({ type:'line' });
    }

    // Nested header only
    if (section === 'nested') {
        // Rename nested headers
        items.push({
            title: T('Rename this cell'),
            onclick: function() {
                // Get the new title
                let text = prompt(T('Rename this cell'), e.target.textContent);
                // Update the nested cell title
                obj.setNestedCell(a1, a2, { title: text });
            }
        });

        items.push({ type:'line' });
    }

    // Sections that affect the selection
    if (section === 'header' || section === 'row' || section === 'cell' || section === 'nested') {
        // Cut
        items.push({
            title: T('Cut'),
            icon: 'content_cut',
            shortcut: ctrl + ' + X',
            onclick: function() {
                obj.cut();
            }
        });

        // Copy
        items.push({
            title: T('Copy'),
            icon: 'content_copy',
            shortcut: ctrl + ' + C',
            onclick: function() {
                obj.copy();
            }
        });

        // Paste
        if (navigator && navigator.clipboard && navigator.clipboard.readText) {
            items.push({
                title: T('Paste'),
                icon: 'content_paste',
                shortcut: ctrl + ' + V',
                onclick: function() {
                    if (obj.selectedCell) {
                        navigator.clipboard.readText().then(function(text) {
                            if (text) {
                                let px = Math.min(obj.selectedCell[0], obj.selectedCell[2]);
                                let py = Math.min(obj.selectedCell[1], obj.selectedCell[3]);
                                obj.paste(px, py, text);
                            }
                        });
                    }
                }
            });
        }

        items.push({ type:'line' });
    }

    // Clicking in the headers
    if (section === 'header') {
        // Insert a new column
        if (obj.options.allowInsertColumn === true) {
            items.push({
                title: T('Insert a new column before'),
                onclick: function() {
                    obj.insertColumn(1, parseInt(a1), 1);
                }
            });
        }

        if (obj.options.allowInsertColumn === true) {
            items.push({
                title: T('Insert a new column after'),
                onclick: function() {
                    obj.insertColumn(1, parseInt(a1), 0);
                }
            });
        }

        // Delete a column
        if (obj.options.allowDeleteColumn === true) {
            items.push({
                title: T('Delete selected columns'),
                onclick: function() {
                    obj.deleteColumn(obj.getSelectedColumns());
                }
            });
        }

        // Rename column
        if (obj.options.allowRenameColumn === true) {
            items.push({
                title: T('Rename this column'),
                onclick: function() {
                    obj.setHeader(a1);
                }
            });
        }

        // Append new row
        if (! obj.options.data.length) {
            // Line
            items.push({ type:'line' });

            items.push({
                title: T('Create a new row'),
                onclick: function() {
                    obj.insertRow(0);
                }
            });
        }

        // Sorting
        if (obj.options.columnSorting === true) {
            // Line
            items.push({ type:'line' });

            items.push({
                title: T('Order ascending'),
                onclick: function() {
                    obj.orderBy(a1, 0);
                }
            });
            items.push({
                title: T('Order descending'),
                onclick: function() {
                    obj.orderBy(a1, 1);
                }
            });

            items.push({ type:'line' });
        }

        items.push({
            title: T('Hide'),
            onclick: function() {
                obj.hideColumn(obj.getSelectedColumns());
            }
        });

        items.push({
            title: T('Show'),
            onclick: function() {
                obj.showColumn(obj.getSelectedColumns());
            }
        });

        items.push({ type:'line' });
    }

    // Row only
    if (section === 'cell' || section === 'row') {
        // Insert new row
        if (obj.options.allowInsertRow === true) {
            items.push({
                title: T('Insert a new row before'),
                onclick: function() {
                    obj.insertRow(1, parseInt(y), 1);
                }
            });

            items.push({
                title: T('Insert a new row after'),
                onclick: function() {
                    obj.insertRow(1, parseInt(y));
                }
            });
        }

        if (obj.options.allowDeleteRow === true) {
            items.push({
                title: T('Delete selected rows'),
                onclick: function() {
                    obj.deleteRow(obj.getSelectedRows(true));
                }
            });
        }

        items.push({ type:'line' });
    }

    if (section === 'row') {
        items.push({
            title: T('Hide'),
            onclick: function() {
                obj.hideRow(obj.getSelectedRows());
            }
        });

        items.push({
            title: T('Show'),
            onclick: function() {
                obj.showRow(obj.getSelectedRows());
            }
        });

        items.push({ type:'line' });
    }

    // Click in the cell
    if (section === 'cell') {
        if (obj.options.allowComments === true) {
            let title = obj.records[a2][a1].element.getAttribute('title') || '';

            items.push({
                title: title ? T('Edit notes') : T('Add notes'),
                icon: 'notes',
                onclick: function() {
                    let comment = prompt(T('Notes'), title);
                    if (comment) {
                        let cell = Helpers.getColumnNameFromCoords(a1, a2);
                        obj.setComments(cell, comment);
                    }
                }
            });

            if (title) {
                items.push({
                    title: T('Clear notes'),
                    onclick: function() {
                        let cell = Helpers.getColumnNameFromCoords(a1, a2);
                        obj.setComments(cell, '');
                    }
                });
            }

            // Line
            items.push({ type:'line' });
        }
    }

    if (section === 'selectall') {
        items.push({
            title: T('Show all'),
            onclick: function() {
                obj.showRow(obj.getSelectedRows());
                obj.showColumn(obj.getSelectedColumns());
            }
        });

        // Line
        items.push({ type:'line' });
    }

    // Save
    if (o.allowExport) {
        items.push({
            title: T('Save as'),
            icon: 'save',
            shortcut: ctrl + ' + S',
            onclick: function () {
                obj.download();
            }
        });
    }

    // About
    if (o.about) {
        items.push({
            title: T('About'),
            icon: 'info',
            onclick: function() {
                if (o.about === true) {
                    alert(Version().print());
                } else {
                    alert(o.about);
                }
            }
        });
    }

    return items;
}
```
 
