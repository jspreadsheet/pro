Jspreadsheet Plugins

[Back to the plugins section](/v10/plugins/)

  
  
![mobile plugin icon](img/spreadsheet-plugin-mobile.png)

JSpreadsheet Plugin : Mobile
============================

The mobile plugin improve JSpreadsheet for usage on mobile :

* Button for open contextMenu
* New item in contextMenu for edit cell
* Select range after first selection cell origin

![preview](https://user-images.githubusercontent.com/52194475/123639007-118df080-d820-11eb-9609-10dddc3a861b.png)

This plugin is **Premium**

  

Source
------

Source available on Repo.Gbonnaire.fr : [Repo.Gbonnaire.fr](https://repo.gbonnaire.fr/product/jexcel-plugin-mobile)

  

Documentation
-------------

### Dependencies

* Materials Icon (You can use font awesome with change icon\_menu\_open property)

  

### Options of plugin

| Option name | Description | Type | Default Value |
| --- | --- | --- | --- |
| `icon_menu_open` | Icon for button to open context menu | `String` | `_menu_open_` |
| `cssButton` | CSS of button to open context menu | `Boolean` | `position: absolute;background-color: white;width: 23px;height: 23px;border: 2px solid lightgray;border-top-left-radius: 5px;border-bottom-left-radius: 5px;` |

  

### For translation

| Option name | Default Value |
| --- | --- |
| `text_edit` | Edit |

  
  

Get started
-----------

{.ignore}
```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jspreadsheet.com/v10/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jsuites.css" type="text/css" />

<script src="/path/to/jexcel.mobile.js"></script>
<link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">

Initialize plugin on Jspreadsheet

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
	...
	plugins: [
      ...
      { name:'mobile', plugin:jss_mobile},
      ...  
    ],
    ...
});
</script>
</html>
```
  

Copyright and license
---------------------

Copyright [GBonnaire.fr](https://www.gbonnaire.fr) and Code released under the Commercial License. This plugin requiere license of [Repo.gbonnaire.fr](https://repo.gbonnaire.fr)