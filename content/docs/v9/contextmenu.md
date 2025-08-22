title: Data Grid Context Menu
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, cells comments
description: How to customize or disabled the web-based spreadsheet context menu.



# Data Grid Context Menu

There are two possible ways to customize the context menu: defining a custom handler using the initial menu property or via a custom plugin. The handler will intercept, change the default items or cancel the user action. This method receives the default items, the section, and some other extra information about the click, such as coordinates.  If you are interested in learning more about plugins, [click here](/docs/plugins). 

## Documentation

### The event handler

| Event       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| contextmenu |  `contextmenu(worksheet: Object, col: Number, row: Number, event: Object, items: Array, section: String, a1: Any, a2: Any) => Array` <br/> @param {object} worksheet - Instance of the active worksheet<br/> @param {number=} col - column number<br/> @param {number=} row - row number<br/> @param {object} event - mouse event handler<br/> @param {array} items - default contextmenu items<br/> @param {string} section - section clicked. Sections: nested \| header \| row \| cell \| selectall \| tabs \| cloning \| toolbar \| footer<br/> @param {mixed} a1 - this is a first mixed argument that depends on the section<br/> @param {mixed} a2 - this is a second mixed argument that depends on the section |

 

### Item properties

As previously stated, the contextmenu custom handler should return an array of items. Each item is an Object and the following properties can be used

| Property                | Description                                                           |
| ------------------------|-----------------------------------------------------------------------|
| type: string            | Context menu item type: line \| divisor \| default                  |
| title: string           | Contextmenu item title                                                |
| icon: string            | Context menu icon key. (Material icon key icon identification)        |
| id: string              | HTML id property of the DOM element                                   |
| disabled: boolean       | The item is disabled                                                  |
| onclick: function       | Specific onclick event for the element.                               |
| shortcut: string        | A short description or instruction for the item. Normally a shortcut. |
| tooltip: string         | Show this text when the user mouse over the element                   |
| submenu: Array of items | Submenu items                                                         |

 

### Translation

You can add the following code to translate the context menu. See a working [example](https://jsfiddle.net/spreadsheet/o43xvaLu/) here. 

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

Customize the contextmenu with a few basic options depending on the section clicked. 

```html
<html>
<script src="https://jspreadsheet.com/v9/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v9/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['US', 'Cheese', '2019-02-12'],
    ['CA', 'Apples', '2019-03-01'],
    ['CA', 'Carrots', '2018-11-10'],
    ['BR', 'Oranges', '2019-01-12'],
];

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create a new spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
        { type: 'dropdown', url:'/jspreadsheet/countries', width:200, },
        { type: 'text', width:200, },
        { type: 'calendar', width:100, }
     ],
     allowComments: true,
     contextMenu: function(o, x, y, e, i, section) {
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
</script>
</html>
```
  

## Default contextmenu method

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

    // Click in the tabs
    if (section == 'tabs') {
        if (o.allowRenameWorksheet == true) {
            items.push({
                title: T('Rename this worksheet'),
                onclick: function() {
                    let newName = prompt(T('Rename this worksheet'), e.target.innerText);
                    if (newName) {
                        obj.parent.renameWorksheet(a1, newName);
                    }
                }
            });
        }

        if (o.allowDeleteWorksheet == true) {
            items.push({
                title: T('Delete this worksheet'),
                onclick: function() {
                    if (confirm(T('Are you sure?'), e.target.innerText)) {
                        obj.parent.deleteWorksheet(a1);
                    }
                }
            });
        }

        items.push({ type:'line' });
    }

    // Nested header only
    if (section == 'nested') {
        // Rename nested headers
        items.push({
            title: T('Rename this cell'),
            onclick: function() {
                // Get the new title
                let text = prompt(T('Rename this cell'), e.target.innerText);
                // Update the nested cell title
                obj.setNestedCell(a1, a2, { title: text });
            }
        });

        items.push({ type:'line' });
    }

    // Sections that affect the selection
    if (section == 'header' || section == 'row' || section == 'cell' || section == 'nested') {
        // Cut
        items.push({
            title: T('Cut'),
            icon: 'content_cut',
            shortcut: 'Ctrl + X',
            onclick: function() {
                obj.cut();
            }
        });

        // Copy
        items.push({
            title: T('Copy'),
            icon: 'content_copy',
            shortcut: 'Ctrl + C',
            onclick: function() {
                obj.copy();
            }
        });

        // Paste
        if (navigator && navigator.clipboard && navigator.clipboard.readText) {
            items.push({
                title: T('Paste'),
                icon: 'content_paste',
                shortcut: 'Ctrl + V',
                onclick: function() {
                    if (obj.selectedCell) {
                        navigator.clipboard.readText().then(function(text) {
                            if (text) {
                                obj.paste(obj.selectedCell[0], obj.selectedCell[1], text);
                            }
                        });
                    }
                }
            });
        }

        items.push({ type:'line' });
    }

    // Clicking in the headers
    if (section == 'header') {
        // Insert a new column
        if (obj.options.allowInsertColumn == true) {
            items.push({
                title: T('Insert a new column before'),
                onclick: function() {
                    obj.insertColumn(1, parseInt(x), 1);
                }
            });
        }

        if (obj.options.allowInsertColumn == true) {
            items.push({
                title: T('Insert a new column after'),
                onclick: function() {
                    obj.insertColumn(1, parseInt(x), 0);
                }
            });
        }

        // Delete a column
        if (obj.options.allowDeleteColumn == true) {
            items.push({
                title: T('Delete selected columns'),
                onclick: function() {
                    obj.deleteColumn(obj.getSelectedColumns().length ? undefined : parseInt(x));
                }
            });
        }

        // Rename column
        if (obj.options.allowRenameColumn == true) {
            items.push({
                title: T('Rename this column'),
                onclick: function() {
                    obj.setHeader(x);
                }
            });
        }

        // Sorting
        if (obj.options.columnSorting == true) {
            // Line
            items.push({ type:'line' });

            items.push({
                title: T('Order ascending'),
                onclick: function() {
                    obj.orderBy(x, 0);
                }
            });
            items.push({
                title: T('Order descending'),
                onclick: function() {
                    obj.orderBy(x, 1);
                }
            });

            items.push({ type:'line' });
        }
    }

    // Row only
    if (section == 'cell' || section == 'row') {
        // Insert new row
        if (obj.options.allowInsertRow == true) {
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

        if (obj.options.allowDeleteRow == true) {
            items.push({
                title: T('Delete selected rows'),
                onclick: function() {
                    obj.deleteRow(obj.getSelectedRows().length ? undefined : parseInt(y));
                }
            });
        }

        items.push({ type:'line' });
    }

    // Click in the cell
    if (section == 'cell') {
        if (obj.options.allowComments == true) {
            let title = obj.records[a2][a1].element.getAttribute('title') || '';

            items.push({
                title: title ? T('Edit comments') : T('Add comments'),
                icon: 'notes',
                onclick: function() {
                    let cell = Helpers.getColumnNameFromCoords(a1, a2);
                    let comment = prompt(T('Comments'), title);
                    if (comment) {
                        obj.setComments(cell, comment);
                    }
                }
            });

            if (title) {
                items.push({
                    title: T('Clear comments'),
                    onclick: function() {
                        let cell = Helpers.getColumnNameFromCoords(a1, a2);
                        obj.setComments(cell, '');
                    }
                });
            }
        }

        // Line
        items.push({ type:'line' });
    }

    // Save
    if (o.allowExport) {
        items.push({
            title: T('Save as'),
            icon: 'save',
            shortcut: 'Ctrl + S',
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
 
