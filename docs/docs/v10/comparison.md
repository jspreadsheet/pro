title: Comparing the Jspreadsheet distributions
keywords: Jspreadsheet, Jexcel, data grid, javascript, excel-like, spreadsheet, table, documentation, performance, spreadsheet differences, version comparison.
description: Get a detailed comparison of the most important differences between the Jspreadsheet distributions. Make an informed decision that suits your requirements.

# Comparison table

The main differences between the JSS distributions:

| Distributions                                                | CE distribution | Pro distribution | Pro distribution |
| -------------------------------------------------------------|-----------------|------------------|------------------|
| Feature                                                      | CE              | Base             | Premium          |
| License                                                      | Free (MIT)      | Required         | Required         |
| Spreadsheet-like formulas                                    | Yes             | Advanced         | Advanced         |
| Copy and paste features                                      | Yes             | Advanced         | Advanced         |
| Viewport                                                     | Lazy loading    | Smart loading*   | Smart loading*   |
| Compatible with Formula Premium (Requires a special license) | Yes             | Yes              | Yes              |
| Cloud support                                                | No              | Yes              | Yes              |
| Persistence support                                          | No              | Yes              | Yes              |
| Plugins support                                              | No              | Yes              | Yes              |
| Advance filtering and multiple column filtering              | No              | Yes              | Yes              |
| Worksheets management                                        | No              | Yes              | Yes              |
| Native persistance features                                  | Limited         | Yes              | Yes              |
| Automatic formula update on copy and paste                   | No              | Yes              | Yes              |
| Automatic formula update on corner copy                      | No              | Yes              | Yes              |
| Formula returning DOM objects to cells.                      | No              | Yes              | Yes              |
| Cell renderer                                                | No              | Yes              | Yes              |
| Editor definitions at a cell level                           | No              | Yes              | Yes              |
| Cross worksheet calculations                                 | No              | No               | Yes              |
| Native validations                                           | No              | No               | Yes              |
| Column and row grouping                                      | No              | No               | Yes              |
| Defined names (Range and variables)                          | No              | No               | Yes              |
| Premium extensions                                           | No              | No               | Yes              |
| Formula picker                                               | No              | No               | Yes              |
| Certificate management API                                   | No              | No               | Yes              |

 

## More details

 

### Worksheet management

This includes events and actions such as drag-and-drop, deleting or renaming a worksheet, adding a new worksheet button and the context menu.  

### Persistence support

The native persistence features include the internal row id, internal sequences, update row id, saving methods, and persistence plugin integration.  

### Advanced lazyloading

Better DOM management is offered with pagination and lazy loading in the PRO distributions, creating and showing the DOM elements only when needed. From version 8, the lazyloading is based on the viewport and extends the virtual DOM management to the columns.  

### Definitions at a cell level

The Pro distribution allows the developer to define configurations at a cell level, such as masking and format, type, among the other properties available.  

### Premium extensions

The list of [premium extensions](/products) is available here. 
