title: Image Upload and Management in Jspreadsheet
keywords: Spreadsheet Image Upload, Image Management, S3 Integration, Base64 Images, Cloud Storage, Performance Optimization, MongoDB, Image Handling
description: Learn how to manage and optimize image uploads in your Jspreadsheet server, including handling Base64 images, integrating with S3 storage for better performance, and managing image transformations on both the client and server-side.

# Spreadsheet Images

By default, when users upload images, they're stored as Base64 in the spreadsheet's JSON configuration. This method increases the file size and server storage requirements. To optimize performance and scalability, it is recommended to store images externally—such as in an S3 bucket—and replace the image source in the spreadsheet with a URL.

## Intercepting the Upload

### Server

You can intercept uploads using the `beforeChange` event on the server. This allows you to process the image, upload it to your preferred storage (e.g., file system, S3), and replace the Base64 string with a direct URL before saving.

### Client

When using external image storage, clients should retrieve images with the correct authentication. Use the `onbeforeloadimage` event to intercept and customize image loading from private sources such as S3.

## Examples

### Save images to the server's disk

You can store images in a public folder on your server and serve them as static files. This setup helps offload storage from your main database and makes the images accessible via direct links.

{.ignore}
```javascript
const server = require('@jspreadsheet/server');
const adapter = require('@jspreadsheet/redis-adapter');
const fs = require('fs');
const path = require('path');

// Helper function to save the image to disk
function saveImageToDisk(base64Image, imageName) {
    // Strip metadata from the base64 string
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
    // Define the directory where images will be saved
    const imageDir = path.join(__dirname, 'public', 'images');
    // Ensure the directory exists
    if (! fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true });
    }
    // Full path for the image
    const imagePath = path.join(imageDir, imageName);
    // Write the image to the file system
    fs.writeFileSync(imagePath, base64Data, { encoding: 'base64' });
    // Return the URL of the image to be saved in the spreadsheet
    return `/images/${imageName}`;
}

// Jspreadsheet license
const license = {
    clientId: '356a192b7913b04c54574d18c28d46e6395428ab',
    licenseKey: 'YOUR_LICENSE_KEY'
};

// Create the Server
server({
    config: {
        cors: {
            origin: "*"
        },
    },
    port: 3000,
    error: function(e) {
        console.error(e);
    },
    auth: async function(query) {
        return true;
    },
    load: async function(guid) {
        return await adapter.load(guid);
    },
    beforeChange: async function(guid, changes, query) {
        // Check for image upload event
        if (query && query.guid) {
            // Check for the correct event that upload images
            if (changes.method === 'setMedia' && Array.isArray(changes.args[0])) {
                // Go through all images
                for (const v of changes.args[0]) {
                    if (v.src && v.src.startsWith('data:')) {
                        // Generate a unique name for the image
                        const imageName = `image_${Date.now()}.png`;
                        // Save the image to disk
                        const imageUrl = saveImageToDisk(v.src, imageName);
                        // Replace the base64 src with the image URL
                        v.src = imageUrl;
                    }
                }
            }
        }

        return changes;
    },
    change: async function(guid, changes, query, onerror) {
        return await adapter.change(guid, changes, query, onerror);
    },
    create: async function(guid, config, query) {
        return await adapter.create(guid, config, query);
    },
    destroy: async function(guid, query) {
        return await adapter.destroy(guid, query);
    },
    license: license
});
```

### Using MongoDB and S3

When using the MongoDB adapter, you can intercept `setMedia` events, upload the images to S3, and return a public or private URL that replaces the Base64 data.

#### Server-side Handling

Handle the image transformation and upload process on the server using your configured S3 credentials.

{.ignore}
```javascript
const api = require('@jspreadsheet/api');
const server = require('@jspreadsheet/server');
const adapter = require('@jspreadsheet/mongodb-adapter');

// Jspreadsheet license
const license = {
    clientId: '356a192b7913b04c54574d18c28d46e6395428ab',
    licenseKey: 'YOUR_LICENSE_KEY'
}

// Define S3 configuration
api({
    s3: {
        key: "your-key",
        secret: "your-secret",
        bucket: "your-bucket",
        region: "us-your-region",
        url: "https://bucketname.s3.amazonaws.com/",
    },
    adapter: adapter
})

server({
    config: {
        cors: {
            origin: "*"
        },
    },
    port: 3000,
    error: function(e) {
        console.error(e)
    },
    auth: async function(query) {
        return true;
    },
    load: async function(guid) {
        return await adapter.load(guid);
    },
    beforeChange: async function(guid, changes, query) {
        if (query && query.guid) {
            if (changes.method === 'setMedia' && Array.isArray(changes.args[0])) {
                for (const v of changes.args[0]) {
                    if (v.src && v.src.startsWith('data:')) {
                        // Upload to S3
                        let ret = await api.setImage(guid, v.src);
                        if (ret) {
                            v.src = ret;  // Overwrite base64 with the S3 URL
                        }
                    }
                }
            }
        }

        return test;
    },
    change: async function(guid, changes, query, onerror) {
        return await adapter.change(guid, changes, query, onerror);
    },
    create: async function(guid, config, query) {
        return await adapter.create(guid, config, query);
    },
    destroy: async function(guid, query) {
        return await adapter.destroy(guid, query);
    },
    license: license,
    extensions: { api },
});
```

#### Client-side Handling

Intercept image loading on the client and fetch images using the API with a Bearer token for authorization. This helps load images from private S3 URLs securely.

{.ignore}
```javascript
server({
    client: {
        url: 'http://localhost:3009',
        token: token,
        onbeforeloadimage: function (worksheet, img, options) {
            if (options.src.includes('/api')) {
                fetch('http://localhost:3009' + options.src, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(response => response.blob())
                .then(blob => {
                    img.src = URL.createObjectURL(blob);  // Set the image source to the blob URL
                });

                return false;  // Prevent default image load until the API call completes
            }
        },
    }
});
```

## Final Notes

To improve performance and security:


- Always strip unnecessary metadata from Base64 strings before upload.
- Use `beforeChange` to transform and sanitize image inputs before persistence.
- Ensure proper permissions and token validation when accessing private resources (e.g., images on S3).
- Apply size limits and checks to prevent large or malicious file uploads.
