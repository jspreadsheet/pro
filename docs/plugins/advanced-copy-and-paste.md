Jspreadsheet Plugins

[Back to the plugins section](/plugins/)

  
  
![copy and paste plugin icon](img/spreadsheet-plugin-copy-and-paste.png)

Advanced copy and paste
=======================

The advanced copy and paste plugin improves the copy paste functionality of jSpreadsheet. It works even if access to the clipboard is denied or in error.

![preview](https://user-images.githubusercontent.com/52194475/91473978-ece08980-e899-11ea-9a89-ad0f8bc89d42.png)

This plugin is **Free**

  

### Features

* Add items cut, copy, paste on default toolbar
* Add item paste on default context menu when it is not present
* Upgrade copy/paste of jSpreadsheet when clipboard access is denied
* Override copy methods of jSpreadsheet
* Can copy scale like Excel
* Work on Mobile
* Paste data from Excel (with or without style)
* Add items on topmenu bar (plugin)

  
  

Documentation
-------------

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `allow_pastestyle` | Allow paste style on copy/paste | `Boolean` | `true` |

  

### For translation

you can defined on translation global to replace var `text XXXX` by `copypasteadv`

| Option name | Default Value |
| --- | --- |
| `text_paste_special` | `Paste special` |
| `text_paste_only_style` | `Paste only format` |
| `text_paste_only_value` | `Paste only value` |

  

### Methods of plugin

| Method | Description | Example |
| --- | --- | --- |
| `copy(_Optional_ Boolean cut) → Array` | Copy selected cells. If copy(true), you cut selected cell. This methods return same result of jspreadsheet.current.copy(). | `jspreadsheet.current.plugins.copypaste_adv.copy();` |
| `paste(_Optional_ Boolean OnlyValue) → Void` | paste data copied on selected cell | `jspreadsheet.current.plugins.copypaste_adv.paste();` |

  
  

Get started
-----------

### Example

{.ignore}
```html
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />


<script src="/path/to/copypaste_advanced.min.js"></script>
```

Initialize plugin on jSpreadsheet

{.ignore}
```html
<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    ...
    plugins: [
      ...
      { name:'copypaste_adv', plugin:jss_copypaste_advanced},
      ...  
    ],
    ...
});
</script>
```
  

CDN
---

You can use this CDN link

{.ignore}
```html
<script src="https://cdn.jsdelivr.net/gh/GBonnaire/jspreadsheet-plugins-and-editors@latest/plugins/dist/copypaste_advanced.min.js"></script>
```
  

NPM
---

{.ignore}
```bash
npm install @jspreadsheet/copypaste_advanced
```
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the MIT License
