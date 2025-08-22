Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![flag plugin icon](img/spreadsheet-plugin-flag.png)

jSpreadsheet Plugin : Persistence Flag
======================================

Replace Notification persistence and cloud by discret flag on toolbar

  
  

![preview](https://user-images.githubusercontent.com/52194475/94907348-4e4ed600-04a0-11eb-9039-30c5feadb5ca.png)

This plugin is **Free**

  

Documentation
-------------

  

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `css_progress` | Your class css for animated icon in progress | `String` | `(blank)` |
| `dateFormat` | Use in text `{date}` for add datetime or `{time}` for add onlytime | `Object` | `{ year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }` |
| `icon_error` | Material icon code | `String` | `error` |
| `icon_success` | Material icon code | `String` | `check_circle` |
| `icon_progress` | Material icon code | `String` | `cached` |
| `showText` | Show text with flag | `Boolean` | `true` |
| `showOnlyTime` | Show onlyt type with flag | `Boolean` | `false` |

  
  

### For translation

you can defined on translation global to replace var `text_XXXX_` _by `flagpersistance`_

| Option name | Default Value |
| --- | --- |
| `text_error` | `'Not updated'` |
| `text_progress` | `'Updating'` |
| `text_success` | `'Updated {date}'` |

  
  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/persistanceFlag.min.js"></script>

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true, // or Array/object
    ...
    plugins: [
        ...
        { name:'persistanceFlag', plugin:jss_persistanceFlag },
        ...
    ],
    ...
});
</script>
</html>
```
  

Example with options and style
------------------------------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/persistanceFlag.min.js"></script>

<style>
.jSpreadsheet-flagPersistance i {
    padding: 5px;
    font-size: 1.1em;
}

.jSpreadsheet-flagPersistance span {
    color: #999999;
    font-size: 1em;
}
</style>

// Initialize plugin on Jspreadsheet
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    toolbar: true, // or Array/object
    ...
    plugins: [
        ...
        { name:'persistanceFlag', plugin:jss_persistanceFlag, options:{showText:false} },
        ...
    ],
    ...
});
</script>
</html>
```
  

CDN
---

You can use this CDN link

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/persistanceFlag.min.js"></script>
```
  

NPM
---

{.ignore}
```bash
npm install @jspreadsheet/persistanceflag
```

{.ignore}
```javascript
import jss_persistanceFlag from  '@jspreadsheet/persistanceflag';
```
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License
