title: Jspreadsheet Server Custom Menu
keywords: Jspreadsheet Server, Custom Menu, Jspreadsheet Server Custom Menu
description: Discover how to customize, add, or remove options from the Jspreadsheet Server top menu to tailor functionality to your needs.

# Jspreadsheet Server Custom Menu

The `menu` property in Jspreadsheet Server allows developers to enhance the interface by adding, modifying, or removing menu options to integrate custom features. During initialization, the `menu()` method enables the creation of tailored menu items, embedding specific workflows or utilities directly into the interface.

## Customizing the Menu

The `menu()` function intercepts and customizes default menu options during initialization as needed.

| Method           | Description                     |
|------------------|---------------------------------|
| `menu(object[])` | Intercept the top menu options. |

{.ignore}
```javascript
server({
    bar: {
        suggestions: true
    },
    client: {
        url: 'http://localhost:3009',
        auth: {
            token: token,
            invitation: invitation,
        },
        onerror: function(e) {
            jSuites.notification(e);
        },
    },
    menu: function(options) {
        // Default options
    }
})
```

### Menu Item Properties

Each menu item can be configured with properties to improve usability:

| Property            | Description                                                                   |
|---------------------|-------------------------------------------------------------------------------|
| `title: string`     | Text displayed for the menu item, expandable in wide layouts.                 |
| `submenu: Item[]`   | Array of sub-items creating a dropdown for related features.                  |
| `icon: string`      | Material icon keyword to visually represent the item.                         |
| `type: string`      | Defines item type: `"line"` for separators or `"item"` for clickable options. |
| `shortcut: string`  | Keyboard shortcut for quick access.                                           |
| `disabled: boolean` | Disables the item if set to `true`.                                           |
| `tooltip: string`   | Tooltip text shown on hover, providing additional context.                    |

### Event Hooks

Leverage events to add interactivity and functionality:

| Event      | Description                                                   |
|------------|---------------------------------------------------------------|
| `onclick`  | Executes on click, ideal for feature-specific actions.        |
| `render`   | Customizes item display, allowing for dynamic content.        |


### Top Menu Component

The Jspreadsheet Server top menu is built using the LemonadeJS JavaScript Top Menu. Refer to the documentation for more details.

[LemonadeJS Top Menu Component](https://lemonadejs.com/docs/plugins/top-menu){.button}

<br>

## Examples

### Remove the Last Item

{.ignore}
```javascript
server({
    bar: {
        suggestions: true
    },
    client: {
        url: 'http://localhost:3009',
        auth: {
            token: token,
            invitation: invitation,
        },
        onerror: function(e) {
            jSuites.notification(e);
        },
    },
    menu: function(options) {
        // Remove the last option
        options.shift();
    }
})
```
