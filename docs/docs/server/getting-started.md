title: Getting Started
keywords: Jspreadsheet, real-time collaboration, Jspreadsheet, JavaScript spreadsheet, Excel-like interface, data grid solution, spreadsheet API, multi-user spreadsheets, collaborative worksheets, setup guide
description: Quickly set up Jspreadsheet, the real-time collaborative spreadsheet for complex data management and teamwork with an Excel-like, data-rich interface.

# Getting Started with Jspreadsheet Server

## Overview

Jspreadsheet Server uses Socket.IO to keep a real-time virtual spreadsheet in sync with every user's local instance. Any change made by one user is instantly reflected across all connected users, ensuring seamless collaboration.

### What do I need to implement?

You are responsible for authentication and data persistence.
Jspreadsheet Server takes care of real-time synchronization and spreadsheet logic behind the scenes.

<br>

## Install

### Backend

```bash
npm install @jspreadsheet/server
```

[Server Overview](/docs/products/server){.button}
