title: User Authentication
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, worksheets, authentication
description: Learn more about authentication on Intrasheets servers.

# Authentication

## Overview

Jspreadsheet Server uses an event-based architecture that allows developers to implement custom authentication tailored to their application's needs.

### Authentication Events

On the client side, authentication is provided using the `auth` property, which is available in all server events.

The server offers `onbefore*` events to validate authentication logic before a user performs actions. These events let you check things like JWT tokens or custom access rules. They must return `true` or `false` to indicate whether the user can proceed.


| **Event**                          | **Description**                                                                                                          |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| `onbeforeconnect(auth)`           | Validates whether a user is allowed to connect.                                                                          |
| `onbeforeload(auth)`              | Checks if a user is allowed to load a document.                                                                          |
| `onbeforechange(auth)`            | Validates spreadsheet changes or allows you to override them before they're applied.                                     |


## Examples

### Owner-Only Access

This example checks if the authenticated user is the owner of the spreadsheet.

#### Server-side

{.ignore}
```javascript
/**
 * Method to check if the user has permission to proceed
 * @param {string} method Purpose of the request (e.g., load, change)
 * @param {string} guid The document's unique identifier
 * @param {object} auth Information about the user's authentication
 * @returns {boolean}
 */
const Authentication = async function(method, guid, auth) {
    if (guid) {
        // Validate signature and get the jwt information
        let info = await jwt.verify(auth.token, process.env.JWT_SECRET);
        if (info) {
            // Get the document information from the database
            let document = await adapter.get(guid);
            if (document && info.sub === document.user_id) {
                // The user is the owner of the document
                return true;
            }
        }
    }
    return false;
};

// Server setup
server({
    port: 3000,
    beforeLoad: async function(guid, auth) {
        // Return false to block access if the user is not the owner
        return await Authentication('load', guid, auth);
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
    }
});
```

#### Client-side

{.ignore}
```javascript

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

intrasheets({
    bar: {
        suggestions: true
    },
    client: {
        url: 'http://localhost:3009',
        auth: {
            token: token
        },
    }
})
```

### Public Spreadsheet Example

This setup allows any user to access documents marked as public.

{.ignore}
```javascript
/**
 * Method to check if the user has permission to proceed
 * @param {string} method Purpose of the request (e.g., load, change)
 * @param {string} guid The document's unique identifier
 * @param {object} auth Information about the user's authentication
 * @returns {boolean}
 */
const Authentication = async function(method, guid, auth) {
    if (guid) {
        // Retrieve the document information from the database
        let document = await adapter.get(guid);
        if (document && document.state === 0) {
            // The document is public
            return true;
        }
    }
    // The document is either private or does not exist
    return false;
};

// Server setup
server({
    port: 3000,

    beforeLoad: async function(guid, auth) {
        // Allow or block access based on the document's visibility
        return await Authentication('load', guid, auth);
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
    }
});
```


## Access Levels

Jspreadsheet recommends the use of three access levels:

- **Owner (2)** — full access
- **Editor (1)** — can edit
- **Viewer (0)** — read-only

These levels are set and validated by your application logic.

{.ignore}
```javascript
/**
 * This method retrieves the user's access level for the specified document.
 * @param {string} guid The document's unique identifier
 * @param {object} auth The authentication object containing token and invitation information
 * @returns {number|boolean} Returns the user's access level (0 for read-only, 1 for editor, 2 for owner) or false if no access
 */
const getUserLevel = async function(guid, auth) {
    // Validate signature and get the jwt information
    let info = await jwt.verify(auth.token, process.env.JWT_SECRET);
    // Retrieve the document information from the database
    let document = await adapter.get(guid);
    if (document) {
        // Check if the user is the owner (user_id matches the subject in the JWT token)
        if (info && info.sub === document.user_id) {
            return 2; // Owner level
        }

        // Check if the spreadsheet is public (privacy flag is false)
        if (!document.spreadsheet.privacy) {
            return 1; // Editor privileges
        }

        // Check if the user has an invitation to access the document
        if (auth.invitation && document.users && document.users.length) {
            for (let i = 0; i < document.users.length; i++) {
                // Match the invitation code with the invited users
                if (document.users[i].hash === auth.invitation) {
                    // Return the access level based on the invitation (0: read-only, 1: editor, 2: owner)
                    return document.users[i].level;
                }
            }
        }
    }

    // No access granted
    return false;
}

/**
 * Method to check if the user has permission to proceed
 * @param {string} method The request's purpose (e.g., 'load', 'change')
 * @param {string|null} guid The document's unique identifier (or null if connecting to the server)
 * @param {object} auth The authentication object containing token and invitation information
 * @return {Promise<boolean>} Returns true if the user is authorized, false otherwise
 */
const Authentication = async function(method, guid, auth) {
    // If a document is being accessed
    if (guid) {
        // Get the user's access level for the specified document
        let level = await getUserLevel(guid, auth);

        if (level !== false) {
            // Any invited user can connect or load the document. Only editors (1) or owners (2) can make changes.
            if (level === 0) {
                // Read-only users cannot change the spreadsheet
                if (method !== 'change') {
                    return true;
                }
            } else {
                // Editors and owners have full access
                return true;
            }
        }
    } else {
        // Would you like to allow everyone to connect?
        return true;
    }

    // If none of the conditions are met, deny access
    return false;
}
```

> 🔐 Reminder: Always validate JWT signatures and securely manage access. The above examples skip some checks for simplicity.
