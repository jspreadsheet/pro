title: The new Formula Pro v5
keywords: Excel-like formulas, Excel formulas, google sheet formulas, spreadsheet formulas
description: The power of Excel-like formula to your applications using JavaScript.

{.breadcrumb}
* [Go back to the Blog section](/blog)

# Introducing Formula Pro v5

_Unlock advanced calculation capabilities with Formula Pro version 5, featuring enhanced functions, optimized performance, and improved handling of ranges and dates._ 

<br>

![Jspreadsheet Data Grid](img/icon.png){.icon}

**Jspreadsheet Team** \
Published at 21/03/2024

![Excel-like formulas on the browser or nodejs.](img/blog/the-new-formula-pro-v4.jpg){.cover}

Formula Pro is a JavaScript plugin that performs spreadsheet-like calculations in the browser or via Node.js. It addresses ranges, variables, and JavaScript precision limitations. It integrates with Jspreadsheet and supports the most important Excel and Google Sheets formulas.

The most recent version brings the function count to 498, significantly expanding your calculation toolkit. With only 46 functions left to integrate, Formula Pro is close to offering full coverage, achieving a 91.54% completion rate and providing a comprehensive toolkit for your calculation needs.

## What's new in Formula Pro v5?

Version 5 brings performance enhancements and an extended formula library, improving calculation efficiency and Jspreadsheet compatibility with other major spreadsheet software.

### Function Enhancements

Formula Pro's update boosts Jspreadsheet compatibility with improvements such as advanced date handling, among other enhancements detailed below.

- **Added Functions**: It now supports LAMBDA, LET, MAKEARRAY, MAP, SCAN, BYCOL, BYROW, and ISOMITTED, expanding capabilities in data handling and analysis.
- **Updated Functions**: Enhancements to ROW, CELL, COLUMN, SHEET, SHEETS, SINGLE, ISFORMULA, FORMULATEXT, INDIRECT, OFFSET, AGGREGATE, T.DIST, DSTDEV, DSTDEVP, DVAR, DVARP improving compatibility with different spreadsheet software.



### Enhanced Range Handling

Formula Pro introduces row range functionality, enabling expressions like SUM(1:1) or =SUM(Sheet1!1:1), improving compatibility and ease of use.

### Improved Test Coverage

With the release of version 5, Formula Pro significantly increased its test coverage. Extensive unit testing ensures each formula's reliability and over 90% of the code is thoroughly tested for robustness and accuracy.

## Roadmap

Those are formulas not implemented at this point and should be consider in future releases.

* **Remaining Functions for Integration:** ACCRINTM, ASC, BAHTTEXT, CALL, CUBEKPIMEMBER, CUBEMEMBER, CUBEMEMBERPROPERTY, CUBERANKEDMEMBER, CUBESET, CUBESETCOUNT, CUBEVALUE, DBCS, DURATION, EUROCONVERT, FILTERXML, FORECAST.ETS, FORECAST.ETS.CONFINT, FORECAST.ETS.SEASONALITY, FORECAST.ETS.STAT, GETPIVOTDATA, IMAGE, JIS, MDURATION, ODDFPRICE, ODDFYIELD, ODDLPRICE, ODDLYIELD, PERCENTILE, PERCENTRANK, PHONETIC, RANK, RECEIVED, REDUCE, REGISTER.ID, RTD, STOCKHISTORY, TAKE, TOCOL, TOROW, VAR, VDB, VSTACK, WEBSERVICE, WEIBULL, WRAPCOLS, WRAPROWS.

## Useful links

  * [Formula Pro Documentation](/products/formulas)
  * [Jspreadsheet Formulas](/docs/formulas)
  * [Jspreadsheet Calculations](/docs/calculations)
  * [Formula Picker Documentation](/docs/formula-picker)
  * [Cross-spreadsheet calculations example using Jspreadsheet](/docs/examples/cross-calculations)


