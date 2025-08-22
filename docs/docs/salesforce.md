title: How to Integrate Jspreadsheet into Salesforce - Lighting Web Components
keywords: Jspreadsheet, Jexcel, data grid, JavaScript data grid, Excel-like features, online spreadsheet, data table, lwc, salesforce, lightning web components
description: How to create salesforce lighting web components - lwc using Jspreadsheet.

# Salesforce

## Overview

This section guides developers on creating Salesforce Lightning Web Components (LWC) using Jspreadsheet.

### General Considerations

Before you begin integration, consider the following:

- Upload the Static Resources to your Salesforce Development Platform.
- Include the Material icons classes in your component.css.
- You must have a developer account on the Salesforce Development Platform.

### License Considerations

- Jspreadsheet may be utilized within any Salesforce account for internal purposes and should not be distributed on Salesforce Marketplace.
- It requires a valid Ultimate license

### Useful References

- [JavaScript Third Party Libraries](https://developer.salesforce.com/docs/platform/lwc/guide/js-third-party-library.html)
- [Lightning Studio Chrome Extension](https://chromewebstore.google.com/detail/lightning-studio/ehkpneicmpbdejpoancidgkejlkahjgo)


## Tutorial

### Upload the Static Files

1. Download the [Jspreadsheet Package](/v11/jspreadsheet.zip){target="_blank"}.
2. Log into your Salesforce development account.
3. Search for Static Resources.
4. Create a new resource.
5. Upload the downloaded Jspreadsheet Package.

<br>

![LWC Static Resources](img/tutorial/sales-force/lwc-static-resources.png)

<br><br>

### Lightning Web Component

To create a new web component we will use the [Lightning Studio Chrome Extension](https://chromewebstore.google.com/detail/lightning-studio/ehkpneicmpbdejpoancidgkejlkahjgo){target="_blank"}, following the steps:

1. Login to your salesforce developer account them click on the extension.

![Lightning Studio Chrome Extension](img/tutorial/sales-force/lightning-studio-extension.png)

<br>

2. Click on create a new web component.

![Create A Lightning Web Component](img/tutorial/sales-force/create-web-component.png)

<br>

3. Fill the form with the following information.

![Lightning Web Component](img/tutorial/sales-force/create-web-component-2.png)

<br>

4. Your web component will have four files, and you will need to update the content of those files as follow:

- spreadsheet.js
- spreadsheet.css
- spreadsheet.html
- spreadsheet.js-meta.xml

<br>

#### HTML Web Component File

Your basic HTML file should contain the following properties.

{.ignore}
```html
<template lwc:render-mode="shadow">
    <div lwc:dom="manual"></div>
</template>
```

#### JavaScript Web Component File

Create your main JavaScript LWC component.

{.ignore}
```javascript
import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import jss from "@salesforce/resourceUrl/jss";

// Your Jspreadsheet License
const licenseKey = '###license###';

export default class Spreadsheet extends LightningElement {
    isCmptInitialized = false;

    renderedCallback() {
        if (this.isCmptInitialized) {
            return;
        }
        this.isCmptInitialized = true;

        try {
            Promise.all([
                loadStyle(this, jss + '/jsuites.css'),
                loadStyle(this, jss + '/jspreadsheet.css'),
                loadScript(this, jss + '/jsuites.js'),
                loadScript(this, jss + '/jspreadsheet.js'),
                loadScript(this, jss + '/jszip.js'),
                loadScript(this, jss + '/render.js')
            ]).then(() => {
                this.create();
            })
        } catch (error) {
            console.log('error',error);
        }
    }

    create() {
        // Declare the license
        jspreadsheet.setLicense({
            clientId: 'your-client-id',
            licenseKey: licenseKey,
        });
        // Declare the render extension
        jspreadsheet.setExtensions({ render });

        // Create the spreadsheet
        this.spreadsheet = jspreadsheet(this.template.firstChild, {
            toolbar: true,
            worksheets: [
                {
                    minDimensions: [10,10],
                    tableOverflow: true,
                    tableWidth: 600,
                    tableHeight: 300,
                    data: [[1,2,4]],
                    freezeColumnControl: true,
                    freezeRowControl: true,
                    filters: true
                }
            ],
            root: this.template.firstChild,
        });
    }
}
```

#### Style Web Component File

You can use your component CSS file to include Material icons to correctly render the icons on the context menu, filters, and toolbar.

```css
/* fallback */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
```

#### Meta File

You need to make sure your meta file has the following content.

```xml
<?xml version="1.0"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
	<apiVersion>57.0</apiVersion>
	<isExposed>true</isExposed>
	<targets>
        <target>lightning__RecordPage</target>
		<target>lightning__AppPage</target>
		<target>lightning__HomePage</target>
	</targets>
</LightningComponentBundle>
```

<br><br>

### Session Settings

Enabling the **Use Lightning Web Security for Lightning Web Components and Aura Components** option will ensure your component renders correctly in your Salesforce developer account.

![Studio](img/tutorial/sales-force/sales-force-session-settings.png)

### Final steps

Now, you can create your `App` on your Salesforce developer account and embed your web component on a new page.