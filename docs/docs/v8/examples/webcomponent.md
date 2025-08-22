title: Spreadsheet as web component using Jspreadsheet
keywords: Jspreadsheet, javascript, plugins, spreadsheet, web components
description: The example shows how to implement Jspreadsheet data grid as a web components.



# Spreadsheet Web Components

Create a web-based spreadsheet as a web component. 

See a spreadsheet web component on this [jsfiddle](https://jsfiddle.net/spreadsheet/yz52chkg/) example. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script>
class Jspreadsheet extends HTMLElement {
    constructor() {
        super();
    }

    init(o) {
        // Shadow root
        const shadowRoot = this.attachShadow({mode: 'open'});

        // Style
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.type = 'text/css'
        css.href = 'https://cdn.jsdelivr.net/npm/jspreadsheet/dist/jspreadsheet.min.css';
        shadowRoot.appendChild(css);

        const cssJsuites = document.createElement('link');
        cssJsuites.rel = 'stylesheet';
        cssJsuites.type = 'text/css'
        cssJsuites.href = 'https://cdn.jsdelivr.net/npm/jsuites/dist/jsuites.min.css';
        shadowRoot.appendChild(cssJsuites);

        const cssMaterial = document.createElement('link');
        cssMaterial.rel = 'stylesheet';
        cssMaterial.type = 'text/css'
        cssMaterial.href = 'https://fonts.googleapis.com/css?family=Material+Icons';
        shadowRoot.appendChild(cssMaterial);

        // JSS container
        let container = document.createElement('div'); 
        shadowRoot.appendChild(container);

        // Properties
        let toolbar = this.getAttribute('toolbar') == "true" ? true : false;

        // Create jexcel element
        this.el = jspreadsheet(container, {
            tabs: true,
            toolbar: toolbar,
            root: shadowRoot,
            worksheets: [{
                filters: true,
                tableOverflow: true,
                minDimensions: [40,1000],
                freezeColumns: 3,
            }],
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

