title: Data Persistence in Jspreadsheet Server
keywords: Data Persistence, Database Storage, Collaboration, Spreadsheet Storage, Custom Adapters, Server-Side Events
description: Discover how Jspreadsheet Server enables flexible data persistence with custom adapters and server-side event management for seamless spreadsheet data storage in your preferred database.

# Spreadsheet Sharing

Jspreadsheet Server provides a powerful spreadsheet sharing feature, allowing users to distribute their spreadsheets via links or embed them on websites. This feature includes robust access control, enabling developers to implement custom authentication rules and permissions based on ownership, privacy, invitation status, or other tailored criteria.

## Sharing via Link

Jspreadsheet Server empowers developers to define custom authentication mechanisms to manage access to shared spreadsheets. For instance, when a user accesses a spreadsheet link, the server can verify ownership or confirm the presence of a valid invitation. This allows users to securely view public spreadsheets or access private ones through invitation-based links.

### Inviting a New User

Jspreadsheet Server offers a user-friendly interface for generating invitations. The system creates a unique **invitation token** when adding a new user, which can be managed through the interface or via the API, if enabled.

#### 1. Invitation Token

The invitation token is a unique hash appended to the spreadsheet URL, enabling the server to validate user permissions and control access based on predefined rules. For more details, refer to the [authentication methods](/docs/server/authentication).

<code>
Example:
https://yourdomain.com/sheets/4b8bd2c1-f3c4-4c36-b4ec-e5e3fb15f1e7/<span style="color:red">27aff468</span>
</code>


#### 2. Token Persistence

The token is typically embedded within the spreadsheet object, structured as follows:

{.ignore}
```javascript
{
    spreadsheet: {}
    users: [
        {
            email: 'test@test.com',
            level: 0, // 0 = viewer, 1 = editor, 2 = owner
            token: '27aff468'
        }
    ]
}
```

### Custom Email Notifications

When sharing a spreadsheet, users can opt to send email notifications via the sharing interface. Developers can customize this process by leveraging the `beforeChange` event on the server side, allowing precise control over email notification triggers and delivery.

{.ignore}
```javascript
server({
    // Other events (...)
    beforeChange: async function(guid, changes, auth) {
        // Before the user changes the spreadsheet
        let test = await Authentication('change', guid, auth);
        if (test) {
            // Verify if the method requires ownership
            if (requireOwnership(changes.method)) {
                // Requires ownership
                let level = await getUserLevel(guid, auth);
                // User is owner
                if (level === 2) {
                    // For the users check if you need to send email
                    if (changes.method === 'setUsers') {
                        // Interface is flagged to send email
                        let sendmail = changes.args[1];
                        if (sendmail) {
                            let users = changes.args[0];
                            if (users && users.length) {
                                // Send the invitation by email
                                console.log(users)
                            }
                        }
                    }
                } else {
                    // The user does not have permission
                    return false;
                }
            }
        }
        return test;
    }
    // Other properties (...)
})
```


## Embed Spreadsheets

For public spreadsheets, Jspreadsheet Server enables the generation of embeddable code snippets to integrate spreadsheets into any website. These snippets can be created directly within the Jspreadsheet Server application.

![Formifier](/templates/default/img/formifier.png){style="width: 320px"}

### Sample Code

Users can generate an embeddable code snippet from the Jspreadsheet Server interface, as shown below:

{.ignore}
```html
<div id="spreadsheet"></div>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/cloudify/dist/index.min.js"></script>
<script>
// Create a Jspreadsheet Cloud spreadsheet
cloudify(document.getElementById('spreadsheet'), {
    url: 'https://yourddomain.com/api',
    guid: '1766f0e3-f898-47d8-8e34-f8efaee471ff',
    license: 'your-license',
});
</script>
```

