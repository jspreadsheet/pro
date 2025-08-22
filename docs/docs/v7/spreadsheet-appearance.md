title: Spreadsheet Appearance
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, grid, spreadshet appearance, style, themes, skin.
description: How to customize the appearance of your spreadsheets.



# Spreadsheet appearance

Jspreadsheet Pro brings a few different ways to change the appearance of your spreadsheets, such as:

## The skin classes

There are two skin classes that can be added to the spreadsheet container: `jexcel_default, jexcel_modern`. 

{.ignore}
```javascript
function skin(o) {
    if (document.getElementById('spreadsheet').classList.contains('jexcel_modern')) {
        // Back to the default skin
        document.getElementById('spreadsheet').classList.remove('jexcel_modern');
    } else {
        // Change to the modern skin
        document.getElementById('spreadsheet').classList.add('jexcel_modern');
    }
}
```
 

## The CSS themes

A few CSS variables are available so the user can customize the spreadsheet. There is a theme editor to do some testing using those variables.


{.ignore}
```html
<link rel="stylesheet" href="/v7/theme.css" type="text/css" />
<style>
    :root {
    --jexcel_header_color: #000;
    --jexcel_header_color_highlighted: #000;
    --jexcel_header_background: #f3f3f3;
    --jexcel_header_background_highlighted: #dcdcdc;
    --jexcel_content_color: #000;
    --jexcel_content_color_highlighted: #000;
    --jexcel_content_background: #fff;
    --jexcel_content_background_highlighted: rgba(0,0,0,0.05);
    --jexcel_menu_background: #fff;
    --jexcel_menu_background_highlighted: #ebebeb;
    --jexcel_menu_color: #555;
    --jexcel_menu_color_highlighted: #555;
    --jexcel_menu_box_shadow: 2px 2px 2px 0px rgba(143, 144, 145, 1);
    --jexcel_border_color: #ccc;
    --jexcel_border_color_highlighted: #000;
    --active_color: #007aff;
}
</style>
```
   

## Programmatically updates

It is possible to manage the cell style using the following methods: `setStyle, resetStyle, destroyStyle`. 

{.ignore}
```javascript
table.setStyle('A1', 'background-color', 'red');
```
 

[Working example](/docs/v7/examples/spreadsheet-style)  

## External CSS

External CSS can be used, and normally are much faster. But, it is important to bear in mind external CSS are not taken in consideration when using the copy and paste shortcuts. A very good example is to create an odd/even background colors in the spreadsheet rows.



```css
.jexcel tbody tr:nth-child(even) {
  background-color: #EEE9F1 !important;
}
```
 
