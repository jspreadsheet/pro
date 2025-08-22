title: Spreadsheet as a web component
keywords: Jspreadsheet, Jexcel, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, webcomponents
description: How to create a spreadsheet JavaScript web component using Jspreadsheet.


# Javascript web component online spreadsheet

Create an online javascript spreadsheet using Jspreadsheet Pro Version 7.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<script type="text/javascript" src="https://jspreadsheet.com/v7/webcomponent.js"></script>

<script>
class Jspreadsheet extends HTMLElement {
    constructor() {
        super();
    }

    init(o) {
        // Shadow root
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Style
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.type = 'text/css'
        css.href = 'https://jspreadsheet.com/v7/jspreadsheet.css';
        shadowRoot.appendChild(css);

        const cssJsuites = document.createElement('link');
        cssJsuites.rel = 'stylesheet';
        cssJsuites.type = 'text/css'
        cssJsuites.href = 'https://jsuites.net/v5/jsuites.css';
        shadowRoot.appendChild(cssJsuites);

        // Jspreadsheet container
        let container = document.createElement('div'); 
        shadowRoot.appendChild(container);

        // Create Jspreadsheet element
        this.el = jspreadsheet(container, {
            root: shadowRoot,
            minDimensions: [10,10]
        });
    }

    connectedCallback() {
        this.init(this);
    }

    disconnectedCallback() {
    }

    attributeChangedCallback() {
    }
}

window.customElements.define('j-spreadsheet', Jspreadsheet);
</script>

<j-spreadsheet></j-spreadsheet>

</html>
```

