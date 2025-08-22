title: Spreadsheet as a web component
keywords: Jspreadsheet, javascript, javascript vanilla, javascript plugin, plugin, excel-like, spreadsheet, table, tables, grid, datatables, webcomponents
description: How to create a spreadsheet JavaScript web component using Jspreadsheet.



# Javascript Spreadsheet Web components

Create a javascript spreadsheet web component using Jspreadsheet Pro.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://jspreadsheet.com/v5/jspreadsheet.css" type="text/css" />
<script type="text/javascript" src="https://jspreadsheet.com/v5/jspreadsheet.webcomponent.js"></script>

<script>
class Jspreadsheet extends HTMLElement {
    constructor() {
        super();
    }

    init(o) {
        // Shadow root
        const shadowRoot = this.attachShadow({ mode: 'open' });

        // Style
        const cssJspreadsheet = document.createElement('link');
        cssJspreadsheet.rel = 'stylesheet';
        cssJspreadsheet.type = 'text/css'
        cssJspreadsheet.href = 'https://jspreadsheet.com/v5/jspreadsheet.css';
        shadowRoot.appendChild(cssJspreadsheet);

        const cssJsuites = document.createElement('link');
        cssJsuites.rel = 'stylesheet';
        cssJsuites.type = 'text/css'
        cssJsuites.href = 'https://jsuites.net/v5/jsuites.css';
        shadowRoot.appendChild(cssJsuites);

        // Jspreadsheet container
        let container = document.createElement('div'); 
        shadowRoot.appendChild(container);

        // Create Jspreadsheet element
        this.el = Jspreadsheet(container, {
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

window.customElements.define('Jspreadsheet-spreadsheet', Jspreadsheet);
</script>

<Jspreadsheet-spreadsheet></Jspreadsheet-spreadsheet>

</html>
```

