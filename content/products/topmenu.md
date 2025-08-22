title: Top Menu Extension: Customizable Menus for Enhanced Spreadsheet Interaction
keywords: Jspreadsheet, Jexcel, javascript, top menu, spreadsheet UI, menu customization, data grid, spreadsheet features, interactive spreadsheets, JavaScript plugin, toolbar, spreadsheet interface
description: Add a customizable top menu to your Jspreadsheet instance. Easily configure menu items, bind actions, and enhance user interaction with this lightweight UI extension.

### Top Menu Extension

The Top Menu extension lets you add a configurable menu bar to your Jspreadsheet interface. You can define custom items and actions—like file operations, formatting options, or app-specific commands—directly in JavaScript.


## Documentation

### Options Structure

#### Settings

| Property                | Description                                                                                                                                         |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `options: optionItem[]` | An array of option objects that define the top menu structure. Each object follows the format described in the **Option Properties** section below. |

#### Option Properties

| Property                  | Description                                                                                                            |
|---------------------------|------------------------------------------------------------------------------------------------------------------------|
| `title?: string`          | Text displayed for the menu item.                                                                                      |
| `submenu?: submenuItem[]` | Optional array of submenu items. Each submenu item follows the format described in the **Submenu Properties** section. |

#### Submenu Properties

| Property                  | Description                                            |
|---------------------------|--------------------------------------------------------|
| `title?: string`          | Text displayed for the submenu item.                   |
| `submenu?: submenuItem[]` | Optional array of nested submenu items.                |
| `onclick?: () => void`    | Function triggered when the item is clicked.           |
| `render?: () => void`     | Function executed when rendering the item.             |
| `type?: string`           | Type of item: `line`, `divisor`, or `default`.         |
| `id?: string`             | Sets the HTML `id` for the item’s DOM element.         |
| `disabled?: boolean`      | Disables the item if set to `true`.                    |
| `shortcut?: string`       | Display text for keyboard shortcuts, e.g., `Ctrl + C`. |
| `tooltip?: string`        | Tooltip text shown on mouse hover.                     |

### Installation

Please choose one of the following options 

#### Using NPM

```bash
$ npm install @jspreadsheet/topmenu
```
 

#### Using a CDN


{.ignore}
```html
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/topmenu/dist/index.min.js"></script>
```
  

## Examples

### Basic Topmenu Setup

A minimal example to get started with the Topmenu extension.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />

<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/topmenu/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ topmenu });

const options = [
    {
        title: 'Worksheet',
        submenu: [
            {
                title: 'Create new worksheet',
                onclick: function() {
                    jspreadsheet.current.createWorksheet();
                }
            },
            {
                title: 'Rename active worksheet',
                onclick: function() {
                    const newName = prompt('New name:')
                    jspreadsheet.current.renameWorksheet(jspreadsheet.current.getWorksheetActive(), newName);
                }
            },
            {
                title: 'Delete active worksheet',
                onclick: function() {
                    jspreadsheet.current.deleteWorksheet(jspreadsheet.current.getWorksheetActive())
                }
            }
        ]
    },
    {
        title: 'Log',
        submenu: [
            {
                title: 'Alert',
                onclick: function() {
                    alert('You clicked alert!!')
                }
            },
            {
                title: 'Prompt',
                onclick: function() {
                    let answer = prompt('Type something: ')

                    console.log(answer)
                }
            },
        ]
    }
]

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    topmenu: options,
    worksheets: [
        { minDimensions: [3, 3] },
        { minDimensions: [3, 3] },
        { minDimensions: [3, 3] }
    ],
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import topmenu from "@jspreadsheet/topmenu"

import "@lemonadejs/studio/dist/style.css"
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// License
const license = '###license###';

// Extensions
const extensions = { topmenu };

const options = [
    {
        title: 'Worksheet',
        submenu: [
            {
                title: 'Create new worksheet',
                onclick: function() {
                    jspreadsheet.current.createWorksheet();
                }
            },
            {
                title: 'Rename active worksheet',
                onclick: function() {
                    const newName = prompt('New name:')
                    jspreadsheet.current.renameWorksheet(jspreadsheet.current.getWorksheetActive(), newName);
                }
            },
            {
                title: 'Delete active worksheet',
                onclick: function() {
                    jspreadsheet.current.deleteWorksheet(jspreadsheet.current.getWorksheetActive())
                }
            }
        ]
    },
    {
        title: 'Log',
        submenu: [
            {
                title: 'Alert',
                onclick: function() {
                    alert('You clicked alert!!')
                }
            },
            {
                title: 'Prompt',
                onclick: function() {
                    let answer = prompt('Type something: ')

                    console.log(answer)
                }
            },
        ]
    }
]

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} topmenu={options} extensions={extensions} license={license}>
            <Worksheet />
            <Worksheet />
            <Worksheet />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :topmenu="options" :extensions="extensions" :license="license">
        <Worksheet />
        <Worksheet />
        <Worksheet />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import topmenu from "@jspreadsheet/topmenu";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@lemonadejs/studio/dist/style.css";


export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    setup() {
        // Set your JSS license key (The following key only works for one day)
        const license = '###license###';

        // Extensions
        const extensions = { topmenu };

        // Validations
        const options = [
            {
                title: 'Worksheet',
                submenu: [
                    {
                        title: 'Create new worksheet',
                        onclick: function() {
                            jspreadsheet.current.createWorksheet();
                        }
                    },
                    {
                        title: 'Rename active worksheet',
                        onclick: function() {
                            const newName = prompt('New name:')
                            jspreadsheet.current.renameWorksheet(jspreadsheet.current.getWorksheetActive(), newName);
                        }
                    },
                    {
                        title: 'Delete active worksheet',
                        onclick: function() {
                            jspreadsheet.current.deleteWorksheet(jspreadsheet.current.getWorksheetActive())
                        }
                    }
                ]
            },
            {
                title: 'Log',
                submenu: [
                    {
                        title: 'Alert',
                        onclick: function() {
                            alert('You clicked alert!!')
                        }
                    },
                    {
                        title: 'Prompt',
                        onclick: function() {
                            let answer = prompt('Type something: ')

                            console.log(answer)
                        }
                    },
                ]
            }
        ]

        // Return object
        return {
            license,
            extensions,
            options
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import topmenu from "@jspreadsheet/topmenu";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@lemonadejs/studio/dist/style.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ topmenu });

const options = [
    {
        title: 'Worksheet',
        submenu: [
            {
                title: 'Create new worksheet',
                onclick: function() {
                    jspreadsheet.current.createWorksheet();
                }
            },
            {
                title: 'Rename active worksheet',
                onclick: function() {
                    const newName = prompt('New name:')
                    jspreadsheet.current.renameWorksheet(jspreadsheet.current.getWorksheetActive(), newName);
                }
            },
            {
                title: 'Delete active worksheet',
                onclick: function() {
                    jspreadsheet.current.deleteWorksheet(jspreadsheet.current.getWorksheetActive())
                }
            }
        ]
    },
    {
        title: 'Log',
        submenu: [
            {
                title: 'Alert',
                onclick: function() {
                    alert('You clicked alert!!')
                }
            },
            {
                title: 'Prompt',
                onclick: function() {
                    let answer = prompt('Type something: ')

                    console.log(answer)
                }
            },
        ]
    }
]

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [{ minDimensions: [6, 6] }, { minDimensions: [6, 6] }, { minDimensions: [6, 6] }],
            topmenu: options
        });
    }
}
```

### Advanced Topmenu Configuration

A complete example demonstrating customization and integration in a more realistic use case.

```html
<html>
<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />

<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/topmenu/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>
// Set the license for both plugin and the spreadsheet
jspreadsheet.setLicense('###license###');
// Set the extensions
jspreadsheet.setExtensions({ topmenu });

const getActive = function () {
    if (jspreadsheet.current) {
        return jspreadsheet.current;
    }
}

const setStyleForSelected = function (style, value) {
    const s = getActive();
    const selected = s.getSelected();

    for (let i = 0; i < selected.length; i++) {
        const { x, y } = selected[i];
        const cellName = s.helpers.getCellNameFromCoords(x, y);
        s.setStyle(cellName, style, value);
    }
}

const options = [
    {
        title: 'File',
        submenu: [
            {
                title: 'New Spreadsheet',
                disabled: true,
                icon: 'add_box',
                onclick: function () {
                }
            },
            {
                title: 'Open',
                icon: 'folder',
                disabled: true,
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Share',
                disabled: true,
                icon: 'share',
                onclick: function () {
                },
            },
            {
                title: 'Download',
                icon: 'file_download',
                submenu: [
                    {
                        title: 'Microsoft Excel',
                        onclick: function () {
                            let s = getActive();
                            if (s) {
                                s.download();
                            }
                        },
                    },
                    {
                        title: 'CSV',
                        onclick: function () {
                            let s = getActive();
                            if (s) {
                                s.downloadCSV(false, true, ",");
                            }
                        },
                    },
                    {
                        title: 'TSV',
                        onclick: function () {
                            let s = getActive();
                            if (s) {
                                s.downloadCSV(false, true, "\t");
                            }
                        },
                    },
                ]
            },
            {
                title: 'Print',
                icon: 'print',
                onclick: function () {
                    getActive(self).parent.tools.exportPdf(true);
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Rename',
                disabled: true,
                icon: 'drive_file_rename_outline',
                onclick: function () {
                },
            },
            {
                title: 'Move to trash',
                disabled: true,
                icon: 'delete',
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'History',
                disabled: true,
                icon: 'history',
                onclick: function () {
                },
                restricted: true,
            }
        ]
    },
    {
        title: 'Edit',
        submenu: [
            {
                title: 'Undo',
                icon: 'undo',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.undo()
                    }
                },
                shortcut: 'Ctrl+Z',
            },
            {
                title: 'Redo',
                icon: 'redo',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.redo()
                    }
                },
                shortcut: 'Ctrl+Y',
            },
            {
                type: 'line'
            },
            {
                title: 'Cut',
                icon: 'content_cut',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.cut()
                    }
                },
                shortcut: 'Ctrl+X',
            },
            {
                title: ('Copy'),
                icon: 'content_copy',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.copy()
                    }
                },
                shortcut: 'Ctrl+C',
            },
            {
                title: ('Paste'),
                icon: 'content_paste',
                onclick: function () {
                    navigator.clipboard.readText().then(data => {
                        const s = getActive();
                        if (s) {
                            const [{ x, y }] = s.getSelected();
                            s.paste(x, y, data)
                        }
                    })
                },
                shortcut: 'Ctrl+V',
            },
            {
                type: 'line'
            },
            {
                title: 'Delete',
                icon: 'delete',
                submenu: [
                    {
                        title: 'Selected rows',
                        onclick: function () {
                            const s = getActive();

                            const rows = s.getSelectedRows();
                            s.deleteRow(rows, rows.length);
                        },
                    },
                    {
                        title: 'Selected columns',
                        onclick: function () {
                            const s = getActive();

                            const cols = s.getSelectedColumns();
                            s.deleteColumn(cols, cols.length);
                        },
                    },
                ]
            },
            {
                title: 'Find and replace',
                disabled: true,
                icon: 'find_replace',
                onclick: function () {
                },
                shortcut: 'Ctrl+F',
            },
        ]
    },
    {
        title: 'Insert',
        submenu: [
            {
                title: 'Rows',
                icon: 'table_rows',
                submenu: [
                    {
                        title: 'Add a new line before',
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertRow(1, y, true);
                            }
                        },
                    },
                    {
                        title: ('Add a new line after'),
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertRow(1, y, false);
                            }
                        },
                    }
                ],
            },
            {
                title: 'Columns',
                icon: 'view_column',
                submenu: [
                    {
                        title: 'Add a new column before',
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertColumn(1, x, true);
                            }
                        },
                    },
                    {
                        title: 'Add a new column after',
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertColumn(1, x, false);
                            }
                        },
                    }
                ],
            },
            {
                title: 'Create a new worksheet',
                onclick: function () {
                    jspreadsheet.current.createWorksheet();
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Add chart',
                icon: 'addchart',
                disabled: true,
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Link',
                disabled: true,
                icon: 'link',
                onclick: function () {
                }
            },
            {
                title: 'Checkbox',
                disabled: true,
                icon: 'check_box',
                onclick: function () {
                }
            },
            {
                title: 'Comments',
                disabled: true,
                icon: 'comment',
                onclick: function () {
                }
            }
        ]
    },
    {
        title: 'Format',
        submenu: [
            {
                title: 'Format',
                icon: '123',
                disabled: true,
                submenu: [
                    {
                        title: 'Text',
                        onclick: function () {
                        },
                    },
                    {
                        title: 'Number',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Percentage',
                        shortcut: '10.00%',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Currency',
                        shortcut: '$ 10.00',
                        onclick: function () {
                        }
                    },
                    {
                        type: 'line'
                    },
                    {
                        title: 'Date',
                        shortcut: '25/07/1998',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Hour',
                        shortcut: '12:59:59',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Date and hour',
                        shortcut: '25/07/1998 12:59:59',
                        onclick: function () {
                        }
                    },
                    {
                        type: 'line'
                    },
                    {
                        title: 'Custom',
                        onclick: function () {
                        }
                    },
                ]
            },
            {
                title: 'Text',
                icon: 'format_bold',
                submenu: [
                    {
                        title: 'Bold',
                        onclick: function () {
                            setStyleForSelected('font-weight', 'bold')
                        }
                    },
                    {
                        title: 'Italic',
                        onclick: function () {
                            setStyleForSelected('font-style', 'italic')
                        }
                    },
                    {
                        title: 'Underline',
                        onclick: function () {
                            setStyleForSelected('text-decoration', 'underline')
                        }
                    },
                    {
                        title: 'Line through',
                        onclick: function () {
                            setStyleForSelected('text-decoration', 'line-through')
                        }
                    }
                ]
            },
            {
                title: 'Rotate',
                submenu: [
                    {
                        title: '+90deg',
                        icon: 'text_rotate_up',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, 90);
                            }
                        }
                    },
                    {
                        title: '+45deg',
                        icon: 'text_rotation_angleup',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, 45);
                            }
                        }
                    },
                    {
                        title: '0deg',
                        icon: 'text_rotation_none',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, 0);
                            }
                        }
                    },
                    {
                        title: '-45deg',
                        icon: 'text_rotation_angledown',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, -45);
                            }
                        }
                    },
                    {
                        title: '-90deg',
                        icon: 'text_rotation_down',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, -90);
                            }
                        }
                    },
                ]
            },
            {
                type: 'line'
            },
            {
                title: 'Font size',
                icon: 'format_size',
                submenu: [
                    {
                        title: '6',
                        onclick: function () {
                            setStyleForSelected('font-size', '6px')
                        }
                    },
                    {
                        title: '7',
                        onclick: function () {
                            setStyleForSelected('font-size', '7px')
                        }
                    },
                    {
                        title: '8',
                        onclick: function () {
                            setStyleForSelected('font-size', '8px')
                        }
                    },
                    {
                        title: '9',
                        onclick: function () {
                            setStyleForSelected('font-size', '9px')
                        }
                    },
                    {
                        title: '10',
                        onclick: function () {
                            setStyleForSelected('font-size', '10px')
                        },
                    },
                    {
                        title: '11',
                        onclick: function () {
                            setStyleForSelected('font-size', '11px')
                        }
                    },
                    {
                        title: '12',
                        onclick: function () {
                            setStyleForSelected('font-size', '12px')
                        }
                    },
                    {
                        title: '14',
                        onclick: function () {
                            setStyleForSelected('font-size', '14px')
                        }
                    },
                    {
                        title: '16',
                        onclick: function () {
                            setStyleForSelected('font-size', '16px')
                        },
                    },
                    {
                        title: '18',
                        onclick: function () {
                            setStyleForSelected('font-size', '18px')
                        }
                    },
                    {
                        title: '24',
                        onclick: function () {
                            setStyleForSelected('font-size', '24px')
                        }
                    },
                    {
                        title: '36',
                        onclick: function () {
                            setStyleForSelected('font-size', '36px')
                        }
                    },
                ]
            },
            {
                type: 'line'
            },
            {
                title: 'Alternate colors',
                disabled: true,
                icon: 'opacity',
                submenu: [
                    {
                        title: 'Add',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Remove',
                        onclick: function () {
                        }
                    }
                ],
            },
            {
                title: 'Remove all format',
                icon: 'format_clear',
                onclick: function () {
                    const s = getActive();
                    const selected = s.getSelected();

                    for (let i = 0; i < selected.length; i++) {
                        const { x, y } = selected[i];
                        const cellName = s.helpers.getCellNameFromCoords(x, y);
                        s.resetStyle(cellName)
                    }
                },
                shortcut: 'Ctrl+\\'
            },
        ]
    },
    {
        title: 'Data',
        submenu: [
            {
                title: 'Sorting',
                submenu: [
                    {
                        title: 'Sorting column from A to Z',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelectedColumns();

                            for (let i = 0; i < selected.length; i++) {
                                s.orderBy(selected[i], true);
                            }
                        },
                    },
                    {
                        title: 'Sorting column from Z to A',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelectedColumns();

                            for (let i = 0; i < selected.length; i++) {
                                s.orderBy(selected[i], false);
                            }
                        },
                    },
                ],
            },
            {
                title: 'Toggle filters',
                icon: 'filter_alt',
                onclick: function (a, b, c) {
                    const s = getActive();
                    const selected = s.getSelectedColumns();

                    if (selected[0]) {
                        s.showFilter(selected[0]);
                    }
                }
            },
            {
                title: 'Data validations',
                icon: 'grading',
                disabled: true,
                onclick: function () {
                }
            }
        ]
    },
    {
        title: 'Tools',
        submenu: [
            {
                title: 'Create forms',
                icon: 'post_add',
                disabled: true,
                onclick: function () {

                },
            },
        ]
    },
    {
        title: 'Help',
        disabled: true,
        submenu: [
            {
                title: 'Rename',
                icon: 'edit',
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Privacy Police',
                icon: 'article',
                onclick: function () {
                },
            },
            {
                title: 'Terms and conditions',
                icon: 'article',
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Function list',
                icon: 'functions',
                onclick: function () {
                }
            }
        ]
    }
]

// Create the spreadsheet
const spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [{
        data: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ],
        minDimensions: [7, 6],
    }],
    topmenu: options
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/react";
import topmenu from "@jspreadsheet/topmenu";

import "@lemonadejs/studio/dist/style.css"
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

// License
const license = '###license###';

// Extensions
const extensions = { topmenu };

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    const getActive = function () {
        if (jspreadsheet.current) {
            return jspreadsheet.current;
        }
    }

    const setStyleForSelected = function (style, value) {
        const s = getActive();
        const selected = s.getSelected();

        for (let i = 0; i < selected.length; i++) {
            const { x, y } = selected[i];
            const cellName = s.helpers.getCellNameFromCoords(x, y);
            s.setStyle(cellName, style, value);
        }
    }

    const options = [
        {
            title: 'File',
            submenu: [
                {
                    title: 'New Spreadsheet',
                    disabled: true,
                    icon: 'add_box',
                    onclick: function () {
                    }
                },
                {
                    title: 'Open',
                    icon: 'folder',
                    disabled: true,
                    onclick: function () {
                    },
                },
                {
                    type: 'line'
                },
                {
                    title: 'Share',
                    disabled: true,
                    icon: 'share',
                    onclick: function () {
                    },
                },
                {
                    title: 'Download',
                    icon: 'file_download',
                    submenu: [
                        {
                            title: 'Microsoft Excel',
                            onclick: function () {
                                let s = getActive();
                                if (s) {
                                    s.download();
                                }
                            },
                        },
                        {
                            title: 'CSV',
                            onclick: function () {
                                let s = getActive();
                                if (s) {
                                    s.downloadCSV(false, true, ",");
                                }
                            },
                        },
                        {
                            title: 'TSV',
                            onclick: function () {
                                let s = getActive();
                                if (s) {
                                    s.downloadCSV(false, true, "\t");
                                }
                            },
                        },
                    ]
                },
                {
                    title: 'Print',
                    icon: 'print',
                    onclick: function () {
                        getActive(self).parent.tools.exportPdf(true);
                    },
                },
                {
                    type: 'line'
                },
                {
                    title: 'Rename',
                    disabled: true,
                    icon: 'drive_file_rename_outline',
                    onclick: function () {
                    },
                },
                {
                    title: 'Move to trash',
                    disabled: true,
                    icon: 'delete',
                    onclick: function () {
                    },
                },
                {
                    type: 'line'
                },
                {
                    title: 'History',
                    disabled: true,
                    icon: 'history',
                    onclick: function () {
                    },
                    restricted: true,
                }
            ]
        },
        {
            title: 'Edit',
            submenu: [
                {
                    title: 'Undo',
                    icon: 'undo',
                    onclick: function () {
                        const s = getActive();

                        if (s) {
                            s.undo()
                        }
                    },
                    shortcut: 'Ctrl+Z',
                },
                {
                    title: 'Redo',
                    icon: 'redo',
                    onclick: function () {
                        const s = getActive();

                        if (s) {
                            s.redo()
                        }
                    },
                    shortcut: 'Ctrl+Y',
                },
                {
                    type: 'line'
                },
                {
                    title: 'Cut',
                    icon: 'content_cut',
                    onclick: function () {
                        const s = getActive();

                        if (s) {
                            s.cut()
                        }
                    },
                    shortcut: 'Ctrl+X',
                },
                {
                    title: ('Copy'),
                    icon: 'content_copy',
                    onclick: function () {
                        const s = getActive();

                        if (s) {
                            s.copy()
                        }
                    },
                    shortcut: 'Ctrl+C',
                },
                {
                    title: ('Paste'),
                    icon: 'content_paste',
                    onclick: function () {
                        navigator.clipboard.readText().then(data => {
                            const s = getActive();
                            if (s) {
                                const [{ x, y }] = s.getSelected();
                                s.paste(x, y, data)
                            }
                        })
                    },
                    shortcut: 'Ctrl+V',
                },
                {
                    type: 'line'
                },
                {
                    title: 'Delete',
                    icon: 'delete',
                    submenu: [
                        {
                            title: 'Selected rows',
                            onclick: function () {
                                const s = getActive();

                                const rows = s.getSelectedRows();
                                s.deleteRow(rows, rows.length);
                            },
                        },
                        {
                            title: 'Selected columns',
                            onclick: function () {
                                const s = getActive();

                                const cols = s.getSelectedColumns();
                                s.deleteColumn(cols, cols.length);
                            },
                        },
                    ]
                },
                {
                    title: 'Find and replace',
                    disabled: true,
                    icon: 'find_replace',
                    onclick: function () {
                    },
                    shortcut: 'Ctrl+F',
                },
            ]
        },
        {
            title: 'Insert',
            submenu: [
                {
                    title: 'Rows',
                    icon: 'table_rows',
                    submenu: [
                        {
                            title: 'Add a new line before',
                            onclick: function () {
                                const s = getActive();

                                const [{ x, y }] = s.getSelected();

                                if (s) {
                                    s.insertRow(1, y, true);
                                }
                            },
                        },
                        {
                            title: ('Add a new line after'),
                            onclick: function () {
                                const s = getActive();

                                const [{ x, y }] = s.getSelected();

                                if (s) {
                                    s.insertRow(1, y, false);
                                }
                            },
                        }
                    ],
                },
                {
                    title: 'Columns',
                    icon: 'view_column',
                    submenu: [
                        {
                            title: 'Add a new column before',
                            onclick: function () {
                                const s = getActive();

                                const [{ x, y }] = s.getSelected();

                                if (s) {
                                    s.insertColumn(1, x, true);
                                }
                            },
                        },
                        {
                            title: 'Add a new column after',
                            onclick: function () {
                                const s = getActive();

                                const [{ x, y }] = s.getSelected();

                                if (s) {
                                    s.insertColumn(1, x, false);
                                }
                            },
                        }
                    ],
                },
                {
                    title: 'Create a new worksheet',
                    onclick: function () {
                        jspreadsheet.current.createWorksheet();
                    },
                },
                {
                    type: 'line'
                },
                {
                    title: 'Add chart',
                    icon: 'addchart',
                    disabled: true,
                    onclick: function () {
                    },
                },
                {
                    type: 'line'
                },
                {
                    title: 'Link',
                    disabled: true,
                    icon: 'link',
                    onclick: function () {
                    }
                },
                {
                    title: 'Checkbox',
                    disabled: true,
                    icon: 'check_box',
                    onclick: function () {
                    }
                },
                {
                    title: 'Comments',
                    disabled: true,
                    icon: 'comment',
                    onclick: function () {
                    }
                }
            ]
        },
        {
            title: 'Format',
            submenu: [
                {
                    title: 'Format',
                    icon: '123',
                    disabled: true,
                    submenu: [
                        {
                            title: 'Text',
                            onclick: function () {
                            },
                        },
                        {
                            title: 'Number',
                            onclick: function () {
                            }
                        },
                        {
                            title: 'Percentage',
                            shortcut: '10.00%',
                            onclick: function () {
                            }
                        },
                        {
                            title: 'Currency',
                            shortcut: '$ 10.00',
                            onclick: function () {
                            }
                        },
                        {
                            type: 'line'
                        },
                        {
                            title: 'Date',
                            shortcut: '25/07/1998',
                            onclick: function () {
                            }
                        },
                        {
                            title: 'Hour',
                            shortcut: '12:59:59',
                            onclick: function () {
                            }
                        },
                        {
                            title: 'Date and hour',
                            shortcut: '25/07/1998 12:59:59',
                            onclick: function () {
                            }
                        },
                        {
                            type: 'line'
                        },
                        {
                            title: 'Custom',
                            onclick: function () {
                            }
                        },
                    ]
                },
                {
                    title: 'Text',
                    icon: 'format_bold',
                    submenu: [
                        {
                            title: 'Bold',
                            onclick: function () {
                                setStyleForSelected('font-weight', 'bold')
                            }
                        },
                        {
                            title: 'Italic',
                            onclick: function () {
                                setStyleForSelected('font-style', 'italic')
                            }
                        },
                        {
                            title: 'Underline',
                            onclick: function () {
                                setStyleForSelected('text-decoration', 'underline')
                            }
                        },
                        {
                            title: 'Line through',
                            onclick: function () {
                                setStyleForSelected('text-decoration', 'line-through')
                            }
                        }
                    ]
                },
                {
                    title: 'Rotate',
                    submenu: [
                        {
                            title: '+90deg',
                            icon: 'text_rotate_up',
                            onclick: function () {
                                const s = getActive();
                                const selected = s.getSelected();


                                for (let i = 0; i < selected.length; i++) {
                                    const { x, y } = selected[i];
                                    const cellName = s.helpers.getCellNameFromCoords(x, y);
                                    s.rotate(cellName, 90);
                                }
                            }
                        },
                        {
                            title: '+45deg',
                            icon: 'text_rotation_angleup',
                            onclick: function () {
                                const s = getActive();
                                const selected = s.getSelected();


                                for (let i = 0; i < selected.length; i++) {
                                    const { x, y } = selected[i];
                                    const cellName = s.helpers.getCellNameFromCoords(x, y);
                                    s.rotate(cellName, 45);
                                }
                            }
                        },
                        {
                            title: '0deg',
                            icon: 'text_rotation_none',
                            onclick: function () {
                                const s = getActive();
                                const selected = s.getSelected();


                                for (let i = 0; i < selected.length; i++) {
                                    const { x, y } = selected[i];
                                    const cellName = s.helpers.getCellNameFromCoords(x, y);
                                    s.rotate(cellName, 0);
                                }
                            }
                        },
                        {
                            title: '-45deg',
                            icon: 'text_rotation_angledown',
                            onclick: function () {
                                const s = getActive();
                                const selected = s.getSelected();


                                for (let i = 0; i < selected.length; i++) {
                                    const { x, y } = selected[i];
                                    const cellName = s.helpers.getCellNameFromCoords(x, y);
                                    s.rotate(cellName, -45);
                                }
                            }
                        },
                        {
                            title: '-90deg',
                            icon: 'text_rotation_down',
                            onclick: function () {
                                const s = getActive();
                                const selected = s.getSelected();


                                for (let i = 0; i < selected.length; i++) {
                                    const { x, y } = selected[i];
                                    const cellName = s.helpers.getCellNameFromCoords(x, y);
                                    s.rotate(cellName, -90);
                                }
                            }
                        },
                    ]
                },
                {
                    type: 'line'
                },
                {
                    title: 'Font size',
                    icon: 'format_size',
                    submenu: [
                        {
                            title: '6',
                            onclick: function () {
                                setStyleForSelected('font-size', '6px')
                            }
                        },
                        {
                            title: '7',
                            onclick: function () {
                                setStyleForSelected('font-size', '7px')
                            }
                        },
                        {
                            title: '8',
                            onclick: function () {
                                setStyleForSelected('font-size', '8px')
                            }
                        },
                        {
                            title: '9',
                            onclick: function () {
                                setStyleForSelected('font-size', '9px')
                            }
                        },
                        {
                            title: '10',
                            onclick: function () {
                                setStyleForSelected('font-size', '10px')
                            },
                        },
                        {
                            title: '11',
                            onclick: function () {
                                setStyleForSelected('font-size', '11px')
                            }
                        },
                        {
                            title: '12',
                            onclick: function () {
                                setStyleForSelected('font-size', '12px')
                            }
                        },
                        {
                            title: '14',
                            onclick: function () {
                                setStyleForSelected('font-size', '14px')
                            }
                        },
                        {
                            title: '16',
                            onclick: function () {
                                setStyleForSelected('font-size', '16px')
                            },
                        },
                        {
                            title: '18',
                            onclick: function () {
                                setStyleForSelected('font-size', '18px')
                            }
                        },
                        {
                            title: '24',
                            onclick: function () {
                                setStyleForSelected('font-size', '24px')
                            }
                        },
                        {
                            title: '36',
                            onclick: function () {
                                setStyleForSelected('font-size', '36px')
                            }
                        },
                    ]
                },
                {
                    type: 'line'
                },
                {
                    title: 'Alternate colors',
                    disabled: true,
                    icon: 'opacity',
                    submenu: [
                        {
                            title: 'Add',
                            onclick: function () {
                            }
                        },
                        {
                            title: 'Remove',
                            onclick: function () {
                            }
                        }
                    ],
                },
                {
                    title: 'Remove all format',
                    icon: 'format_clear',
                    onclick: function () {
                        const s = getActive();
                        const selected = s.getSelected();

                        for (let i = 0; i < selected.length; i++) {
                            const { x, y } = selected[i];
                            const cellName = s.helpers.getCellNameFromCoords(x, y);
                            s.resetStyle(cellName)
                        }
                    },
                    shortcut: 'Ctrl+\\'
                },
            ]
        },
        {
            title: 'Data',
            submenu: [
                {
                    title: 'Sorting',
                    submenu: [
                        {
                            title: 'Sorting column from A to Z',
                            onclick: function () {
                                const s = getActive();
                                const selected = s.getSelectedColumns();

                                for (let i = 0; i < selected.length; i++) {
                                    s.orderBy(selected[i], true);
                                }
                            },
                        },
                        {
                            title: 'Sorting column from Z to A',
                            onclick: function () {
                                const s = getActive();
                                const selected = s.getSelectedColumns();

                                for (let i = 0; i < selected.length; i++) {
                                    s.orderBy(selected[i], false);
                                }
                            },
                        },
                    ],
                },
                {
                    title: 'Toggle filters',
                    icon: 'filter_alt',
                    onclick: function (a, b, c) {
                        const s = getActive();
                        const selected = s.getSelectedColumns();

                        if (selected[0]) {
                            s.showFilter(selected[0]);
                        }
                    }
                },
                {
                    title: 'Data validations',
                    icon: 'grading',
                    disabled: true,
                    onclick: function () {
                    }
                }
            ]
        },
        {
            title: 'Tools',
            submenu: [
                {
                    title: 'Create forms',
                    icon: 'post_add',
                    disabled: true,
                    onclick: function () {

                    },
                },
            ]
        },
        {
            title: 'Help',
            disabled: true,
            submenu: [
                {
                    title: 'Rename',
                    icon: 'edit',
                    onclick: function () {
                    },
                },
                {
                    type: 'line'
                },
                {
                    title: 'Privacy Police',
                    icon: 'article',
                    onclick: function () {
                    },
                },
                {
                    title: 'Terms and conditions',
                    icon: 'article',
                    onclick: function () {
                    },
                },
                {
                    type: 'line'
                },
                {
                    title: 'Function list',
                    icon: 'functions',
                    onclick: function () {
                    }
                }
            ]
        }
    ]

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} topmenu={options} extensions={extensions} license={license}>
            <Worksheet />
            <Worksheet />
            <Worksheet />
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :topmenu="options" :extensions="extensions" :license="license">
        <Worksheet />
        <Worksheet />
        <Worksheet />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import topmenu from "@jspreadsheet/topmenu";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@lemonadejs/studio/dist/style.css";

const getActive = function () {
    if (jspreadsheet.current) {
        return jspreadsheet.current;
    }
}

const setStyleForSelected = function (style, value) {
    const s = getActive();
    const selected = s.getSelected();


    for (let i = 0; i < selected.length; i++) {
        const { x, y } = selected[i];
        const cellName = s.helpers.getCellNameFromCoords(x, y);
        s.setStyle(cellName, style, value);
    }
}

// Topmenu Options
const options = [
    {
        title: 'File',
        submenu: [
            {
                title: 'New Spreadsheet',
                disabled: true,
                icon: 'add_box',
                onclick: function () {
                }
            },
            {
                title: 'Open',
                icon: 'folder',
                disabled: true,
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Share',
                disabled: true,
                icon: 'share',
                onclick: function () {
                },
            },
            {
                title: 'Download',
                icon: 'file_download',
                submenu: [
                    {
                        title: 'Microsoft Excel',
                        onclick: function () {
                            let s = getActive();
                            if (s) {
                                s.download();
                            }
                        },
                    },
                    {
                        title: 'CSV',
                        onclick: function () {
                            let s = getActive();
                            if (s) {
                                s.downloadCSV(false, true, ",");
                            }
                        },
                    },
                    {
                        title: 'TSV',
                        onclick: function () {
                            let s = getActive();
                            if (s) {
                                s.downloadCSV(false, true, "\t");
                            }
                        },
                    },
                ]
            },
            {
                title: 'Print',
                icon: 'print',
                onclick: function () {
                    getActive(self).parent.tools.exportPdf(true);
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Rename',
                disabled: true,
                icon: 'drive_file_rename_outline',
                onclick: function () {
                },
            },
            {
                title: 'Move to trash',
                disabled: true,
                icon: 'delete',
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'History',
                disabled: true,
                icon: 'history',
                onclick: function () {
                },
                restricted: true,
            }
        ]
    },
    {
        title: 'Edit',
        submenu: [
            {
                title: 'Undo',
                icon: 'undo',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.undo()
                    }
                },
                shortcut: 'Ctrl+Z',
            },
            {
                title: 'Redo',
                icon: 'redo',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.redo()
                    }
                },
                shortcut: 'Ctrl+Y',
            },
            {
                type: 'line'
            },
            {
                title: 'Cut',
                icon: 'content_cut',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.cut()
                    }
                },
                shortcut: 'Ctrl+X',
            },
            {
                title: ('Copy'),
                icon: 'content_copy',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.copy()
                    }
                },
                shortcut: 'Ctrl+C',
            },
            {
                title: ('Paste'),
                icon: 'content_paste',
                onclick: function () {
                    navigator.clipboard.readText().then(data => {
                        const s = getActive();
                        if (s) {
                            const [{ x, y }] = s.getSelected();
                            s.paste(x, y, data)
                        }
                    })
                },
                shortcut: 'Ctrl+V',
            },
            {
                type: 'line'
            },
            {
                title: 'Delete',
                icon: 'delete',
                submenu: [
                    {
                        title: 'Selected rows',
                        onclick: function () {
                            const s = getActive();

                            const rows = s.getSelectedRows();
                            s.deleteRow(rows, rows.length);
                        },
                    },
                    {
                        title: 'Selected columns',
                        onclick: function () {
                            const s = getActive();

                            const cols = s.getSelectedColumns();
                            s.deleteColumn(cols, cols.length);
                        },
                    },
                ]
            },
            {
                title: 'Find and replace',
                disabled: true,
                icon: 'find_replace',
                onclick: function () {
                },
                shortcut: 'Ctrl+F',
            },
        ]
    },
    {
        title: 'Insert',
        submenu: [
            // {
            //     title: 'Lines',
            //     submenu: [
            //         {
            //             type: 'inline',
            //             render: function (e) {
            //                 studio.Color(e, this);
            //             }
            //         },
            //         {
            //             title: 'Add a new line before',
            //             onclick: function () {
            //             },
            //         },
            //         {
            //             title: ('Add a new line after'),
            //             onclick: function () {
            //             },
            //         }
            //     ],
            // },
            {
                title: 'Rows',
                icon: 'table_rows',
                submenu: [
                    {
                        title: 'Add a new line before',
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertRow(1, y, true);
                            }
                        },
                    },
                    {
                        title: ('Add a new line after'),
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertRow(1, y, false);
                            }
                        },
                    }
                ],
            },
            {
                title: 'Columns',
                icon: 'view_column',
                submenu: [
                    {
                        title: 'Add a new column before',
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertColumn(1, x, true);
                            }
                        },
                    },
                    {
                        title: 'Add a new column after',
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertColumn(1, x, false);
                            }
                        },
                    }
                ],
            },
            {
                title: 'Create a new worksheet',
                onclick: function () {
                    jspreadsheet.current.createWorksheet();
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Add chart',
                icon: 'addchart',
                disabled: true,
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Link',
                disabled: true,
                icon: 'link',
                onclick: function () {
                }
            },
            {
                title: 'Checkbox',
                disabled: true,
                icon: 'check_box',
                onclick: function () {
                }
            },
            {
                title: 'Comments',
                disabled: true,
                icon: 'comment',
                onclick: function () {
                }
            }
        ]
    },
    {
        title: 'Format',
        submenu: [
            {
                title: 'Format',
                icon: '123',
                disabled: true,
                submenu: [
                    {
                        title: 'Text',
                        onclick: function () {
                        },
                    },
                    {
                        title: 'Number',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Percentage',
                        shortcut: '10.00%',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Currency',
                        shortcut: '$ 10.00',
                        onclick: function () {
                        }
                    },
                    {
                        type: 'line'
                    },
                    {
                        title: 'Date',
                        shortcut: '25/07/1998',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Hour',
                        shortcut: '12:59:59',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Date and hour',
                        shortcut: '25/07/1998 12:59:59',
                        onclick: function () {
                        }
                    },
                    {
                        type: 'line'
                    },
                    {
                        title: 'Custom',
                        onclick: function () {
                        }
                    },
                ]
            },
            {
                title: 'Text',
                icon: 'format_bold',
                submenu: [
                    {
                        title: 'Bold',
                        onclick: function () {
                            setStyleForSelected('font-weight', 'bold')
                        }
                    },
                    {
                        title: 'Italic',
                        onclick: function () {
                            setStyleForSelected('font-style', 'italic')
                        }
                    },
                    {
                        title: 'Underline',
                        onclick: function () {
                            setStyleForSelected('text-decoration', 'underline')
                        }
                    },
                    {
                        title: 'Line through',
                        onclick: function () {
                            setStyleForSelected('text-decoration', 'line-through')
                        }
                    }
                ]
            },
            {
                title: 'Rotate',
                submenu: [
                    {
                        title: '+90deg',
                        icon: 'text_rotate_up',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, 90);
                            }
                        }
                    },
                    {
                        title: '+45deg',
                        icon: 'text_rotation_angleup',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, 45);
                            }
                        }
                    },
                    {
                        title: '0deg',
                        icon: 'text_rotation_none',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, 0);
                            }
                        }
                    },
                    {
                        title: '-45deg',
                        icon: 'text_rotation_angledown',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, -45);
                            }
                        }
                    },
                    {
                        title: '-90deg',
                        icon: 'text_rotation_down',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, -90);
                            }
                        }
                    },
                ]
            },
            {
                type: 'line'
            },
            {
                title: 'Font size',
                icon: 'format_size',
                submenu: [
                    {
                        title: '6',
                        onclick: function () {
                            setStyleForSelected('font-size', '6px')
                        }
                    },
                    {
                        title: '7',
                        onclick: function () {
                            setStyleForSelected('font-size', '7px')
                        }
                    },
                    {
                        title: '8',
                        onclick: function () {
                            setStyleForSelected('font-size', '8px')
                        }
                    },
                    {
                        title: '9',
                        onclick: function () {
                            setStyleForSelected('font-size', '9px')
                        }
                    },
                    {
                        title: '10',
                        onclick: function () {
                            setStyleForSelected('font-size', '10px')
                        },
                    },
                    {
                        title: '11',
                        onclick: function () {
                            setStyleForSelected('font-size', '11px')
                        }
                    },
                    {
                        title: '12',
                        onclick: function () {
                            setStyleForSelected('font-size', '12px')
                        }
                    },
                    {
                        title: '14',
                        onclick: function () {
                            setStyleForSelected('font-size', '14px')
                        }
                    },
                    {
                        title: '16',
                        onclick: function () {
                            setStyleForSelected('font-size', '16px')
                        },
                    },
                    {
                        title: '18',
                        onclick: function () {
                            setStyleForSelected('font-size', '18px')
                        }
                    },
                    {
                        title: '24',
                        onclick: function () {
                            setStyleForSelected('font-size', '24px')
                        }
                    },
                    {
                        title: '36',
                        onclick: function () {
                            setStyleForSelected('font-size', '36px')
                        }
                    },
                ]
            },
            {
                type: 'line'
            },
            {
                title: 'Alternate colors',
                disabled: true,
                icon: 'opacity',
                submenu: [
                    {
                        title: 'Add',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Remove',
                        onclick: function () {
                        }
                    }
                ],
            },
            {
                title: 'Remove all format',
                icon: 'format_clear',
                onclick: function () {
                    const s = getActive();
                    const selected = s.getSelected();

                    for (let i = 0; i < selected.length; i++) {
                        const { x, y } = selected[i];
                        const cellName = s.helpers.getCellNameFromCoords(x, y);
                        s.resetStyle(cellName)
                    }
                },
                shortcut: 'Ctrl+\\'
            },
        ]
    },
    {
        title: 'Data',
        submenu: [
            {
                title: 'Sorting',
                submenu: [
                    {
                        title: 'Sorting column from A to Z',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelectedColumns();

                            for (let i = 0; i < selected.length; i++) {
                                s.orderBy(selected[i], true);
                            }
                        },
                    },
                    {
                        title: 'Sorting column from Z to A',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelectedColumns();

                            for (let i = 0; i < selected.length; i++) {
                                s.orderBy(selected[i], false);
                            }
                        },
                    },
                ],
            },
            {
                title: 'Toggle filters',
                icon: 'filter_alt',
                onclick: function (a, b, c) {
                    const s = getActive();
                    const selected = s.getSelectedColumns();

                    if (selected[0]) {
                        s.showFilter(selected[0]);
                    }
                }
            },
            {
                title: 'Data validations',
                icon: 'grading',
                disabled: true,
                onclick: function () {
                }
            }
        ]
    },
    {
        title: 'Tools',
        submenu: [
            {
                title: 'Create forms',
                icon: 'post_add',
                disabled: true,
                onclick: function () {

                },
            },
        ]
    },
    {
        title: 'Help',
        disabled: true,
        submenu: [
            {
                title: 'Rename',
                icon: 'edit',
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Privacy Police',
                icon: 'article',
                onclick: function () {
                },
            },
            {
                title: 'Terms and conditions',
                icon: 'article',
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Function list',
                icon: 'functions',
                onclick: function () {
                }
            }
        ]
    }
]


export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    setup() {
        // Set your JSS license key (The following key only works for one day)
        const license = '###license###';

        // Extensions
        const extensions = { topmenu };



        // Return object
        return {
            license,
            extensions,
            options
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";
import topmenu from "@jspreadsheet/topmenu";

import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";
import "@lemonadejs/studio/dist/style.css";

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');
// Extensions
jspreadsheet.setExtensions({ topmenu });

const getActive = function () {
    if (jspreadsheet.current) {
        return jspreadsheet.current;
    }
}

const setStyleForSelected = function (style, value) {
    const s = getActive();
    const selected = s.getSelected();


    for (let i = 0; i < selected.length; i++) {
        const { x, y } = selected[i];
        const cellName = s.helpers.getCellNameFromCoords(x, y);
        s.setStyle(cellName, style, value);
    }
}

const options = [
    {
        title: 'File',
        submenu: [
            {
                title: 'New Spreadsheet',
                disabled: true,
                icon: 'add_box',
                onclick: function () {
                }
            },
            {
                title: 'Open',
                icon: 'folder',
                disabled: true,
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Share',
                disabled: true,
                icon: 'share',
                onclick: function () {
                },
            },
            {
                title: 'Download',
                icon: 'file_download',
                submenu: [
                    {
                        title: 'Microsoft Excel',
                        onclick: function () {
                            let s = getActive();
                            if (s) {
                                s.download();
                            }
                        },
                    },
                    {
                        title: 'CSV',
                        onclick: function () {
                            let s = getActive();
                            if (s) {
                                s.downloadCSV(false, true, ",");
                            }
                        },
                    },
                    {
                        title: 'TSV',
                        onclick: function () {
                            let s = getActive();
                            if (s) {
                                s.downloadCSV(false, true, "\t");
                            }
                        },
                    },
                ]
            },
            {
                title: 'Print',
                icon: 'print',
                onclick: function () {
                    getActive(self).parent.tools.exportPdf(true);
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Rename',
                disabled: true,
                icon: 'drive_file_rename_outline',
                onclick: function () {
                },
            },
            {
                title: 'Move to trash',
                disabled: true,
                icon: 'delete',
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'History',
                disabled: true,
                icon: 'history',
                onclick: function () {
                },
                restricted: true,
            }
        ]
    },
    {
        title: 'Edit',
        submenu: [
            {
                title: 'Undo',
                icon: 'undo',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.undo()
                    }
                },
                shortcut: 'Ctrl+Z',
            },
            {
                title: 'Redo',
                icon: 'redo',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.redo()
                    }
                },
                shortcut: 'Ctrl+Y',
            },
            {
                type: 'line'
            },
            {
                title: 'Cut',
                icon: 'content_cut',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.cut()
                    }
                },
                shortcut: 'Ctrl+X',
            },
            {
                title: ('Copy'),
                icon: 'content_copy',
                onclick: function () {
                    const s = getActive();

                    if (s) {
                        s.copy()
                    }
                },
                shortcut: 'Ctrl+C',
            },
            {
                title: ('Paste'),
                icon: 'content_paste',
                onclick: function () {
                    navigator.clipboard.readText().then(data => {
                        const s = getActive();
                        if (s) {
                            const [{ x, y }] = s.getSelected();
                            s.paste(x, y, data)
                        }
                    })
                },
                shortcut: 'Ctrl+V',
            },
            {
                type: 'line'
            },
            {
                title: 'Delete',
                icon: 'delete',
                submenu: [
                    {
                        title: 'Selected rows',
                        onclick: function () {
                            const s = getActive();

                            const rows = s.getSelectedRows();
                            s.deleteRow(rows, rows.length);
                        },
                    },
                    {
                        title: 'Selected columns',
                        onclick: function () {
                            const s = getActive();

                            const cols = s.getSelectedColumns();
                            s.deleteColumn(cols, cols.length);
                        },
                    },
                ]
            },
            {
                title: 'Find and replace',
                disabled: true,
                icon: 'find_replace',
                onclick: function () {
                },
                shortcut: 'Ctrl+F',
            },
        ]
    },
    {
        title: 'Insert',
        submenu: [
            // {
            //     title: 'Lines',
            //     submenu: [
            //         {
            //             type: 'inline',
            //             render: function (e) {
            //                 studio.Color(e, this);
            //             }
            //         },
            //         {
            //             title: 'Add a new line before',
            //             onclick: function () {
            //             },
            //         },
            //         {
            //             title: ('Add a new line after'),
            //             onclick: function () {
            //             },
            //         }
            //     ],
            // },
            {
                title: 'Rows',
                icon: 'table_rows',
                submenu: [
                    {
                        title: 'Add a new line before',
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertRow(1, y, true);
                            }
                        },
                    },
                    {
                        title: ('Add a new line after'),
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertRow(1, y, false);
                            }
                        },
                    }
                ],
            },
            {
                title: 'Columns',
                icon: 'view_column',
                submenu: [
                    {
                        title: 'Add a new column before',
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertColumn(1, x, true);
                            }
                        },
                    },
                    {
                        title: 'Add a new column after',
                        onclick: function () {
                            const s = getActive();

                            const [{ x, y }] = s.getSelected();

                            if (s) {
                                s.insertColumn(1, x, false);
                            }
                        },
                    }
                ],
            },
            {
                title: 'Create a new worksheet',
                onclick: function () {
                    jspreadsheet.current.createWorksheet();
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Add chart',
                icon: 'addchart',
                disabled: true,
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Link',
                disabled: true,
                icon: 'link',
                onclick: function () {
                }
            },
            {
                title: 'Checkbox',
                disabled: true,
                icon: 'check_box',
                onclick: function () {
                }
            },
            {
                title: 'Comments',
                disabled: true,
                icon: 'comment',
                onclick: function () {
                }
            }
        ]
    },
    {
        title: 'Format',
        submenu: [
            {
                title: 'Format',
                icon: '123',
                disabled: true,
                submenu: [
                    {
                        title: 'Text',
                        onclick: function () {
                        },
                    },
                    {
                        title: 'Number',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Percentage',
                        shortcut: '10.00%',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Currency',
                        shortcut: '$ 10.00',
                        onclick: function () {
                        }
                    },
                    {
                        type: 'line'
                    },
                    {
                        title: 'Date',
                        shortcut: '25/07/1998',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Hour',
                        shortcut: '12:59:59',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Date and hour',
                        shortcut: '25/07/1998 12:59:59',
                        onclick: function () {
                        }
                    },
                    {
                        type: 'line'
                    },
                    {
                        title: 'Custom',
                        onclick: function () {
                        }
                    },
                ]
            },
            {
                title: 'Text',
                icon: 'format_bold',
                submenu: [
                    {
                        title: 'Bold',
                        onclick: function () {
                            setStyleForSelected('font-weight', 'bold')
                        }
                    },
                    {
                        title: 'Italic',
                        onclick: function () {
                            setStyleForSelected('font-style', 'italic')
                        }
                    },
                    {
                        title: 'Underline',
                        onclick: function () {
                            setStyleForSelected('text-decoration', 'underline')
                        }
                    },
                    {
                        title: 'Line through',
                        onclick: function () {
                            setStyleForSelected('text-decoration', 'line-through')
                        }
                    }
                ]
            },
            {
                title: 'Rotate',
                submenu: [
                    {
                        title: '+90deg',
                        icon: 'text_rotate_up',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, 90);
                            }
                        }
                    },
                    {
                        title: '+45deg',
                        icon: 'text_rotation_angleup',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, 45);
                            }
                        }
                    },
                    {
                        title: '0deg',
                        icon: 'text_rotation_none',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, 0);
                            }
                        }
                    },
                    {
                        title: '-45deg',
                        icon: 'text_rotation_angledown',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, -45);
                            }
                        }
                    },
                    {
                        title: '-90deg',
                        icon: 'text_rotation_down',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelected();


                            for (let i = 0; i < selected.length; i++) {
                                const { x, y } = selected[i];
                                const cellName = s.helpers.getCellNameFromCoords(x, y);
                                s.rotate(cellName, -90);
                            }
                        }
                    },
                ]
            },
            {
                type: 'line'
            },
            {
                title: 'Font size',
                icon: 'format_size',
                submenu: [
                    {
                        title: '6',
                        onclick: function () {
                            setStyleForSelected('font-size', '6px')
                        }
                    },
                    {
                        title: '7',
                        onclick: function () {
                            setStyleForSelected('font-size', '7px')
                        }
                    },
                    {
                        title: '8',
                        onclick: function () {
                            setStyleForSelected('font-size', '8px')
                        }
                    },
                    {
                        title: '9',
                        onclick: function () {
                            setStyleForSelected('font-size', '9px')
                        }
                    },
                    {
                        title: '10',
                        onclick: function () {
                            setStyleForSelected('font-size', '10px')
                        },
                    },
                    {
                        title: '11',
                        onclick: function () {
                            setStyleForSelected('font-size', '11px')
                        }
                    },
                    {
                        title: '12',
                        onclick: function () {
                            setStyleForSelected('font-size', '12px')
                        }
                    },
                    {
                        title: '14',
                        onclick: function () {
                            setStyleForSelected('font-size', '14px')
                        }
                    },
                    {
                        title: '16',
                        onclick: function () {
                            setStyleForSelected('font-size', '16px')
                        },
                    },
                    {
                        title: '18',
                        onclick: function () {
                            setStyleForSelected('font-size', '18px')
                        }
                    },
                    {
                        title: '24',
                        onclick: function () {
                            setStyleForSelected('font-size', '24px')
                        }
                    },
                    {
                        title: '36',
                        onclick: function () {
                            setStyleForSelected('font-size', '36px')
                        }
                    },
                ]
            },
            {
                type: 'line'
            },
            {
                title: 'Alternate colors',
                disabled: true,
                icon: 'opacity',
                submenu: [
                    {
                        title: 'Add',
                        onclick: function () {
                        }
                    },
                    {
                        title: 'Remove',
                        onclick: function () {
                        }
                    }
                ],
            },
            {
                title: 'Remove all format',
                icon: 'format_clear',
                onclick: function () {
                    const s = getActive();
                    const selected = s.getSelected();

                    for (let i = 0; i < selected.length; i++) {
                        const { x, y } = selected[i];
                        const cellName = s.helpers.getCellNameFromCoords(x, y);
                        s.resetStyle(cellName)
                    }
                },
                shortcut: 'Ctrl+\\'
            },
        ]
    },
    {
        title: 'Data',
        submenu: [
            {
                title: 'Sorting',
                submenu: [
                    {
                        title: 'Sorting column from A to Z',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelectedColumns();

                            for (let i = 0; i < selected.length; i++) {
                                s.orderBy(selected[i], true);
                            }
                        },
                    },
                    {
                        title: 'Sorting column from Z to A',
                        onclick: function () {
                            const s = getActive();
                            const selected = s.getSelectedColumns();

                            for (let i = 0; i < selected.length; i++) {
                                s.orderBy(selected[i], false);
                            }
                        },
                    },
                ],
            },
            {
                title: 'Toggle filters',
                icon: 'filter_alt',
                onclick: function (a, b, c) {
                    const s = getActive();
                    const selected = s.getSelectedColumns();

                    if (selected[0]) {
                        s.showFilter(selected[0]);
                    }
                }
            },
            {
                title: 'Data validations',
                icon: 'grading',
                disabled: true,
                onclick: function () {
                }
            }
        ]
    },
    {
        title: 'Tools',
        submenu: [
            {
                title: 'Create forms',
                icon: 'post_add',
                disabled: true,
                onclick: function () {

                },
            },
        ]
    },
    {
        title: 'Help',
        disabled: true,
        submenu: [
            {
                title: 'Rename',
                icon: 'edit',
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Privacy Police',
                icon: 'article',
                onclick: function () {
                },
            },
            {
                title: 'Terms and conditions',
                icon: 'article',
                onclick: function () {
                },
            },
            {
                type: 'line'
            },
            {
                title: 'Function list',
                icon: 'functions',
                onclick: function () {
                }
            }
        ]
    }
]

@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        jspreadsheet(this.spreadsheet.nativeElement, {
            toolbar: true,
            worksheets: [{ minDimensions: [6, 6] }, { minDimensions: [6, 6] }, { minDimensions: [6, 6] }],
            topmenu: options
        });
    }
}
```
