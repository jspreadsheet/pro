title: Persisting data on your Data Grids
keywords: Data grid persistence, database, persistence
description: The basic guide to save data from your data grids to the database using PHP.

{.breadcrumb}
* [Go back to the Blog section](/blog)

# Persisting the Data Grid information

_Persisting the data grid information with PHP and PostgresSQL_

<br>

![Jspreadsheet Data Grid](img/icon.png){.icon}

**Jspreadsheet Team** \
Published at 21/09/2023

 ![Persisting tne data grid information with PostgreSQL database](img/blog/javascript-data-grid-persistence-with-postgresql.jpg){.cover}

## Introduction

Jspreadsheet is a lightweight JavaScript library that enables users to embed data grids with spreadsheet-like controls into their web applications. With features reminiscent of popular spreadsheet software, it allows effortless data management and enhances the usability of any web-based software. This guide will show you how to integrate Jspreadsheet with a PostgreSQL database using a PHP container in Docker. 

### Source code

If you are interested in this project, you can find the source code example on our GitHub at: <https://github.com/jspreadsheet/jss-database-integration>. 

### Pre-requisites

  * Docker installed on your local machine.
  * Basic knowledge of Docker, PostgreSQL, and PHP.

 

## Step-by-step Guide

##### Step 1: Set Up the Project Locally

Start by downloading the project to your local machine. This project will contain essential configurations and files to facilitate the integration. 

##### Step 2: Start the Docker Containers

Navigate to the root folder of the downloaded project and execute the following command: 

```bash
$ docker-compose up
```
 This command will initiate the containers specified in the docker-compose.yml file. It will include containers for PHP and PostgreSQL.  

##### Step 3: Access the PHP Container

In another terminal window, while positioned in the root folder of the project, run: 

```bash
$ docker-compose exec php bash
```
 This command allows you to access the shell of the PHP container.  

##### Step 4: Install Necessary PHP Dependencies

Within the PHP container terminal, execute the following command to install the required PHP packages and dependencies: 

```bash
$ composer install
```
 These dependencies will likely include packages that enable PHP to communicate with PostgreSQL, among other requirements.  

##### Step 5: Access the PostgreSQL Container

Now, it's time to set up our database. To do this, in another terminal window (still positioned in the root folder), run: 

```bash
$ docker-compose exec postgresql bash
```
 This command provides access to the shell of the PostgreSQL container, allowing you to interact directly with the database server.  

##### Step 6: Define Your Tables

Before we can persist our spreadsheet data to the database, we must define the tables that will store this data. To achieve this, we must modify the public/index.php file, writing the appropriate SQL commands and PHP code to synchronize Jspreadsheet with a specific table in PostgreSQL. Consider structuring your table with columns such as **ID** , **Name** , **Age** , and **Occupation** , reflecting the corresponding fields within your spreadsheet. Utilize the appropriate SQL commands to create these columns and ensure they can hold the data types you'll enter in Jspreadsheet. 

##### Step 7: Launch the Application

Now, open your web browser and navigate to: http://localhost:8081 Here, you'll see the Jspreadsheet in action, and any changes made will be persisted in the PostgreSQL database.  

## Summary of Integration

Integrating Jspreadsheet with a PostgreSQL database can be streamlined using Docker, as demonstrated in the steps above. This approach provides a reliable way of managing and storing data from spreadsheets in a relational database. As a result, web applications can benefit from the ease of data manipulation offered by spreadsheets while ensuring the robustness and security of a PostgreSQL database backend. 
