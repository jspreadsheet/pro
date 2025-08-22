title: Backend
keywords: Jspreadsheet, javascript, excel-like, excel, js excel, spreadsheet, table, grid, spreadsheet api, spreadsheets, worksheets, backend
description: Learn how to install Jspreadsheet Server on a Linux-based server, including configuration, web server setup, and database requirements.

# Backend

This guide explains how to install and configure **Jspreadsheet Server** on a Linux server. Before getting started, make sure the following system requirements are met.
  

### Requirements

- Nginx
- PostgreSQL
- Redis
- Node.js
- npm
- AWS S3 credentials (for image uploads and spreadsheet backups)


## Installation

### Installing Jspreadsheet Server

Jspreadsheet Server is a Node.js application that provides the Server API and real-time WebSocket communication. It handles backend logic and interacts with the Client API.
  

```bash
# Clone and install the server
cd /var
git clone https://github.com/jspreadsheet/server.git jspreadsheet
cd jspreadsheet
npm install
```

### Configuration

Set up your environment configuration:
  
```bash
cd /var/jspreadsheet
mv .env-sample .env
vi .env
```
  
Edit the `.env` file with your credentials and connection details:
  
```
# License Key
LICENSE=""

# AWS S3 (for images and backups)
AWS_S3_KEY=""
AWS_S3_SECRET=""
AWS_BUCKET=""
AWS_S3_REGION=""
AWS_S3_URL=""

# Redis
REDIS_CONFIG_HOST="localhost"
REDIS_CONFIG_PORT="6379"

# PostgreSQL
DB_CONFIG_TYPE="pgsql"
DB_CONFIG_HOST="postgresql"
DB_CONFIG_USER="postgres"
DB_CONFIG_PASS="postgres"
DB_CONFIG_NAME="jspreadsheet"
DB_CONFIG_PORT="5432"

# JWT Secret
BOSSANOVA_JWT_SECRET="ADD-YOUR-SECRET"
```

### Web Server Integration (Nginx)

To expose the API on port 80 with Nginx:
  
```bash
cd /etc/nginx/conf.d
vi yourdomain.conf
```
  
Add the following Nginx configuration:
  
```php
server {
    listen   80;
    client_max_body_size 100M;

    server_name ~^(.+)$
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    location / {
        root   /var/www/html/public/;
        index  index.php index.html index.htm;
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        root   /var/www/html/public/;
        fastcgi_pass   php:9000;
        fastcgi_index  index.php;
        include        fastcgi_params;
        fastcgi_param  APPLICATION_ENV  dev;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
    }

    location /api/ {
        proxy_set_header HOST $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header   X-NginX-Proxy    true;
        proxy_pass_request_headers on;
        proxy_pass http://sheets/;
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

upstream sheets {
    ip_hash;
    server 127.0.0.1:3000;
}
```
  

### Database

To complete the backend setup, create the database and load the initial schema:

```bash
psql -U postgres
> CREATE DATABASE jspreadsheet;
> \q
psql -U postgres jspreadsheet < server.sql
```
  
Here is the content of `server.sql`:
  
```sql
CREATE SCHEMA drive AUTHORIZATION postgres;
CREATE SCHEMA sheets AUTHORIZATION postgres;

CREATE TABLE drive.formify
(
    formify_id bigserial,
    user_id bigint,
    cloud_guid uuid,
    cloud_worksheet text COLLATE pg_catalog."default",
    formify_hash character varying(36) COLLATE pg_catalog."default"
);

CREATE TABLE drive.formify_log
(
    formify_id bigint,
    ip bigint
);

CREATE TABLE drive.sheets
(
    sheet_id bigserial,
    user_id integer,
    sheet_guid uuid,
    sheet_cluster smallint,
    sheet_privacy smallint,
    sheet_description text COLLATE pg_catalog."default",
    sheet_created timestamp without time zone DEFAULT now(),
    sheet_updated timestamp without time zone DEFAULT now(),
    sheet_status smallint,
    sheet_changed smallint,
    sheet_config jsonb
) PARTITION BY RANGE (sheet_id) ;

CREATE TABLE drive.sheets_0 PARTITION OF drive.sheets FOR VALUES FROM ('0') TO ('100000');

CREATE TABLE drive.sheets_users
(
    sheet_user_id bigserial,
    sheet_guid uuid,
    sheet_id bigint,
    user_id bigint,
    sheet_user_date timestamp without time zone,
    sheet_user_email text COLLATE pg_catalog."default",
    sheet_user_token text COLLATE pg_catalog."default",
    sheet_user_level smallint,
    sheet_user_status smallint
) PARTITION BY RANGE (sheet_id) ;

CREATE TABLE drive.sheets_users_0 PARTITION OF drive.sheets_users FOR VALUES FROM ('0') TO ('100000');

CREATE TABLE drive.signature
(
    signature_id bigserial,
    user_id bigint,
    user_signature uuid
)
```
