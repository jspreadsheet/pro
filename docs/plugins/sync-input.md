Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![syncinput plugin icon](img/spreadsheet-plugin-syncinput.png)

Sync Input
==========

The syncInput plugin sync data of jSpreadsheet in Input hidden.  
  

This plugin is **Free**

  

### Features

* Sync data in input hidden

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `checkRow` | Function for checkRow before add in sync value | `Function (row data, instance of jSpreadsheet, index rows) → should return true or false` | `null` |
| `fieldsRequired` | Array of index columns or name columns who are not empty | `Array` | `[]` |
| `inputElement` | DOMElement of input | `DOMElement` | `null` |
| `inputId` | Id of Element, if element not exist, plugin create input with id=inputId and name=inputId, id inputId is null by default input is jSpreadsheet_DATA | `String` | `null` |
| `processedValues` | get processed value (replace formula by value) | `Boolean` | `true` |

if you have a lot a plugins, add on the top autoWidth

  

### Get started

Header on page

{.ignore}
```html
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />

<script src="/path/to/syncInput.min.js"></script>

// Initialize plugin on jSpreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name:'syncInput', plugin:jss_syncInput, options:{inputId:'IdMyInput'} },
      ...  
    ],
    ...
});
</script>
```

  
  

CDN
---

You can use this CDN link

<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/syncInput.min.js"></script>

  
  

NPM
---

{.ignore}
```bash
npm install @jspreadsheet/syncinput  
```

{.ignore}
```javascript
import jss_syncInput from '@jspreadsheet/syncinput';
```
Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License