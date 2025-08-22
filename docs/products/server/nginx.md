title: Running Jspreadsheet Server with nginx
keywords: Jspreadsheet, Jexcel, javascript, grid, data grid, real-time spreadsheet collaboration, Jspreadsheet Server, data persistence, real-time collaboration, JavaScript plugin, data management, data grid plugin
description: This tutorial shows how to set up Jspreadsheet Server with nginx.

![Data Grid Server](img/data-grid/server.svg){.icon}

# Running Jspreadsheet Server with Nginx

The Jspreadsheet Server extension is a JavaScript plugin to enable real-time collaboration in Jspreadsheet. This tutorial shows how to install Jspreadsheet Server in a nginx based Linux distribution.

## Tutorial

### Create a quick start demo

% git clone https://github.com/jspreadsheet/server.git \
% cd server\
% npm install\
% cd dist\
% pm2 start index.js\

### Config nginx

### Add the proxy server entry to your domain.conf

```
server {
    listen   443;

    ssl    on;
    client_max_body_size 32M;

    location / {
        (...)
        index  index.php index.html index.htm;
        try_files $uri $uri/ /index.php?$args;
    }
    
    (...)
    
    location /server/ {
        proxy_set_header HOST $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header   X-NginX-Proxy    true;
        proxy_pass_request_headers on;
        proxy_pass http://server/;
        proxy_redirect off;
        proxy_http_version 1.0;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        if ($cors = false) {
            add_header 'Access-Control-Allow-Origin' '*';
            set $cors true;
        }
    }
}

upstream server {
    server 127.0.0.1:3010;
    keepalive 15;
}
```

### Start nginx

% service nginx restart\
