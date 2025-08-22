title: Formifier
keywords: Jspreadsheet Extensions, NodeJS Extensions, Spreadsheet Extensions, Jspreadsheet Premium, Collaborative Spreadsheets, Forms, Collect Data
description: Create and share forms to collect data directly into your online spreadsheets using Jspreadsheet.

# Formifier

The Formifier extension allows users to collect data directly into online spreadsheets. Through a simple modal interface, users can select which spreadsheet columns should appear in the public form, generate a sharing link or embed code, and manage various configuration options.

![Formifier](/templates/default/img/formifier.png){style="width: 320px"}

## Documentation

Formifier converts selected spreadsheet columns into form fields, enabling external users to input data directly into a spreadsheet.

### Frontend

#### Config Tab

| Property            | Description                                                                                                                           |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `Visible Columns`   | Specifies which spreadsheet columns should be included in the public form.                                                            |
| `Instructions`      | Text instructions at the top of the form, providing context or guidelines for end-users.                                              |
| `Thank you message` | Upon successful form submission, a confirmation message will be displayed.                                                            |
| `Limit`             | Sets a local restriction to prevent multiple submissions from the same device. You can manage this limit through the developer tools. |


#### Preview Tab

This tab gives a live preview of the form based on current settings.

#### Sharing Tab

The Sharing tab generates both a direct link and an embed code for use on external websites.

##### Example

Embed code snippet:

{.ignore}
```html
<div id="formify"></div>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formify@3/dist/index.min.js"></script>
<script>
formify(document.getElementById('formify'), {
    url: 'http://localhost:3009/api/formify/2043e788-aad6-13e2-e2d4-89f1a9c72687/0'
});
</script>
```

---

### Authentication

Forms created with Formifier are publicly accessible by default. However, private spreadsheets require validation logic to allow data insertion from Formifier.

You can manage this using the `onbeforeload` and `onbeforechange` server events by detecting the request origin.

Authentication handler:

{.ignore}
```javascript
const Authentication = async function(method, guid, auth) {
    // The user is trying to load a document
    if (guid) {
        // Accept all formify actions
        if (auth.origin === 'formify') {
            return true;
        }
    } else {
        // Connection the server
        return true;
    }
    // No access
    return false;
}

/**
 * Create the Jspreadsheet Server
 */
server({
    config: {
        cors: {
            origin: "*"
        },
    },
    port: 3000,
    beforeConnect: async function(auth) {
        // Return false to block the user to connect
        return await Authentication('connect', null, auth);
    },
    beforeLoad: async function(guid, auth) {
        // Return false to block the user to load a spreadsheet
        return await Authentication('load', guid, auth);
    },
    beforeChange: async function(guid, changes, auth) {
        // Before the user changes the spreadsheet
        return await Authentication('change', guid, auth);
    },
    load: async function(guid, auth, cachedConfiguration) {
        return await adapter.load(guid, auth, cachedConfiguration);
    },
    change: async function(guid, changes, auth, onerror) {
        return await adapter.change(guid, changes, auth, onerror);
    },
    create: async function(guid, config, auth) {
        return await adapter.create(guid, config, auth);
    },
    destroy: async function(guid, auth) {
        return await adapter.destroy(guid, auth);
    },
    replace: async function(guid, config, auth) {
        return await adapter.replace(guid, config, auth);
    },
    error: function(e) {
        console.error('Error', e)
    },
    license: license
});
```

### Security Considerations

To ensure proper use, consider rate-limiting or adding validations to prevent spam submissions or misuse, especially if the form is embedded on public pages.

Avoid leaving write access open without proper controls. Always validate what gets inserted into the spreadsheet and set spreadsheet privacy appropriately.
