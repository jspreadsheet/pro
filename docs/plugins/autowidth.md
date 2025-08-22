Jspreadsheet Plugins

[Back to the plugins section](/docs/plugins/)

  
![auto width plugin icon](img/spreadsheet-auto-width-plugin.png)

Auto Width
==========

The autoWidth plugin add possibility to set auto width of columns.  
  

This plugin is **Free**

  

### Features

* Auto width columns without width property or property:"auto" on intialization
* the min width is egal to defaultColWidth
* can setWidth with "auto" value

  

Documentation
-------------

if you have a lot a plugins, add on the top autoWidth

  

### Get started

Header on page


{.ignore}
```html
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="/path/to/autoWidth.min.js"></script>
```
  

Initialize plugin on jSpreadsheet

{.ignore}
```html
<script>
jSpreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name: 'autoWidth', plugin:jss_autoWidth},
      ...  
    ],
    ...
});
</script>
```
  

CDN
---

You can use this CDN link
```html
<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/autoWidth.min.js"></script>
```
  

NPM
---

{.ignore}
```bash
npm install @jspreadsheet/autowidth
```

{.ignore}
```javacript
import jss_autoWidth from '@jspreadsheet/autowidth';
```
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License
