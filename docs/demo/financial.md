title: Jspreadsheet Demo Investment Portfolio Tracker
keywords: Jspreadsheet, JavaScript data grid, spreadsheet controls, interactive data grid, web-based applications, lightweight, responsive controls, agnostic platform, Angular, React, Vue, spreadsheet-like plugin, documentation, examples, license
description: Track stock performance, calculate returns, and monitor financial KPIs in a sleek, Excel-like grid.

# Investment Portfolio Tracker

This demo showcases a professional, Excel-like spreadsheet layout designed for tracking and analysing stock performance. It includes key financial metrics such as purchase price, market value, and return analysis — ideal for developers building investment dashboards or financial planning tools.

<br>

<div class="demo-code">

```html
<html>
<link rel="stylesheet" href="https://jspreadsheet.com/v11/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jspreadsheet/charts/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/style.min.css" type="text/css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<script src="https://jspreadsheet.com/v11/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lemonadejs/dist/lemonade.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@lemonadejs/studio/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/charts/dist/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/validations/dist/index.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ formula, charts, validations });

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    "style": [
      "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-family: Open sans;color: #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-family: Open sans;color: #000000;",
      "background-color: #4EA72E;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;",
      "background-color: #0B77A0;font-size: 15px;font-weight: bold;font-family: Open sans;color: #FFFFFF;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
      "background-color: #C1E5F5;font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
      "background-color: #FF0000;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;",
      "background-color: #C04F15;font-size: 15px;font-weight: bold;font-family: Open sans;color: #FFFFFF;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
      "background-color: #FBE3D6;font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;",
      "border-top:1px solid black;border-right:1px solid black;border-left:1px solid black",
      "border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
      "border-right:1px solid black;border-left:1px solid black",
      "border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
      "border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black;font-weight:bold",
      "",
      "font-weight:bold",
      "font-weight:bold;font-size:large",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;text-align:center",
      "font-weight:bold;font-size:large;text-align:center",
      "background-color:#0B77A0;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
      "font-size:15px;font-family: Open sans;color:#000000;text-align:center",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
      "text-align:center",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-top:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
      "border-top:1px solid black;border-left:1px solid black",
      "border-top:1px solid black",
      "border-top:1px solid black;border-right:1px solid black",
      "border-left:1px solid black",
      "border-right:1px solid black",
      "border-bottom:1px solid black;border-left:1px solid black",
      "border-bottom:1px solid black",
      "border-right:1px solid black;border-bottom:1px solid black",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;text-align:center",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF",
      "background-color:#C04F15;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF",
      "background-color:#FBE3D6;font-size:15px;font-family: Open sans;color:#000000",
      "background-color:#C1E5F5;font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#FBE3D6;font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#FBE3D6;font-size:x-large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#9e9e9e;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
      "font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#bdbdbd;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#9e9e9e;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#757575",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#9e9e9e",
      "font-size:x-large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#f4fffe;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#9e9e9e",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#fdffff;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#fdffff;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e"
    ],
    "worksheets": [
      {
        "data": [
          [
            "Ticker",
            "Company Name",
            "Quantity",
            "Purchase Price",
            "Previous Close Price",
            "Total Cost",
            "Total Value (Prev. Close)",
            "Unrealized Gain/Loss",
            "Var. (%)",
            ""
          ],
          [
            "AAPL",
            "=VLOOKUP(A2,HELPER!A:B,2,0)",
            4300,
            189,
            "=VLOOKUP(A2,HELPER!A:C,3,0)",
            "=C2*D2",
            "=E2*C2",
            "=G2-F2",
            "=E2/D2-1",
            ""
          ],
          [
            "MSFT",
            "=VLOOKUP(A3,HELPER!A:B,2,0)",
            35000,
            400,
            "=VLOOKUP(A3,HELPER!A:C,3,0)",
            "=C3*D3",
            "=E3*C3",
            "=G3-F3",
            "=E3/D3-1",
            ""
          ],
          [
            "AMZN",
            "=VLOOKUP(A4,HELPER!A:B,2,0)",
            3400,
            224,
            "=VLOOKUP(A4,HELPER!A:C,3,0)",
            "=C4*D4",
            "=E4*C4",
            "=G4-F4",
            "=E4/D4-1",
            ""
          ],
          [
            "GOOGL",
            "=VLOOKUP(A5,HELPER!A:B,2,0)",
            4900,
            164,
            "=VLOOKUP(A5,HELPER!A:C,3,0)",
            "=C5*D5",
            "=E5*C5",
            "=G5-F5",
            "=E5/D5-1",
            ""
          ],
          [
            "META",
            "=VLOOKUP(A6,HELPER!A:B,2,0)",
            2000,
            712,
            "=VLOOKUP(A6,HELPER!A:C,3,0)",
            "=C6*D6",
            "=E6*C6",
            "=G6-F6",
            "=E6/D6-1",
            ""
          ],
          [
            "NVDA",
            "=VLOOKUP(A7,HELPER!A:B,2,0)",
            3000,
            151,
            "=VLOOKUP(A7,HELPER!A:C,3,0)",
            "=C7*D7",
            "=E7*C7",
            "=G7-F7",
            "=E7/D7-1",
            ""
          ],
          [
            "TSLA",
            "=VLOOKUP(A8,HELPER!A:B,2,0)",
            2000,
            391,
            "=VLOOKUP(A8,HELPER!A:C,3,0)",
            "=C8*D8",
            "=E8*C8",
            "=G8-F8",
            "=E8/D8-1",
            ""
          ],
          [
            "BRK.B",
            "=VLOOKUP(A9,HELPER!A:B,2,0)",
            1500,
            458,
            "=VLOOKUP(A9,HELPER!A:C,3,0)",
            "=C9*D9",
            "=E9*C9",
            "=G9-F9",
            "=E9/D9-1",
            ""
          ],
          ["", "", "", "", "", "", "", "", "", ""],
          [
            "",
            "Top 3 Performers",
            "",
            "Total Cost",
            "",
            "Average Return",
            "",
            "",
            "",
            ""
          ],
          ["", "", "", "=SUM(F2:F9)", "", "=D15/D12-1", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          [
            "",
            "Bottom 3 Performers",
            "",
            "Total Value (Prev. Close)",
            "",
            "Total Profit/Loss",
            "",
            "",
            "",
            ""
          ],
          ["", "", "", "=SUM(G2:G9)", "", "=SUM(H2:H9)", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""]
        ],
        "columns": [
          { "width": 65, "type": "text", "align": "left" },
          { "width": 223, "type": "text", "align": "left" },
          { "width": 77, "type": "text", "align": "left" },
          { "width": 169, "type": "text", "align": "left" },
          { "width": 147, "type": "text", "align": "left" },
          { "width": 143, "type": "text", "align": "left" },
          { "width": 167, "type": "text", "align": "left" },
          { "width": 150, "type": "text", "align": "left" },
          { "width": 75, "type": "text", "align": "left" },
          { "width": 60, "type": "text", "align": "left" }
        ],
        "rows": [
          { "height": 30 },
          { "height": 30 },
          { "height": 30 },
          { "height": 30 },
          { "height": 30 },
          { "height": 30 },
          { "height": 30 },
          { "height": 30 },
          { "height": 30 },
          { "height": 29 },
          { "height": 34 },
          { "height": 162 },
          { "height": 29 },
          { "height": 34 },
          { "height": 163 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "id": null, "height": 29 }
        ],
        "cells": {
          "D2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I2": { "format": "0.00%" },
          "D3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I3": { "format": "0.00%" },
          "D4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I4": { "format": "0.00%" },
          "D5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I5": { "format": "0.00%" },
          "D6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I6": { "format": "0.00%" },
          "D7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I7": { "format": "0.00%" },
          "D8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I8": { "format": "0.00%" },
          "D9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I9": { "format": "0.00%" },
          "C12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "D12": { "format": "$#,##0.00" },
          "E12": { "format": "0.00%" },
          "F12": { "format": "0.00%" },
          "D15": { "format": "$#,##0.00" },
          "F15": { "format": "$#,##0.00" },
          "C17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "D17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          }
        },
        "style": {
          "A1": 54,
          "B1": 56,
          "C1": 56,
          "D1": 56,
          "E1": 56,
          "F1": 56,
          "G1": 56,
          "H1": 56,
          "I1": 56,
          "A2": 2,
          "B2": 3,
          "C2": 3,
          "D2": 3,
          "E2": 3,
          "F2": 3,
          "G2": 3,
          "H2": 3,
          "I2": 3,
          "A3": 2,
          "B3": 3,
          "C3": 3,
          "D3": 3,
          "E3": 3,
          "F3": 3,
          "G3": 3,
          "H3": 3,
          "I3": 3,
          "A4": 2,
          "B4": 3,
          "C4": 3,
          "D4": 3,
          "E4": 3,
          "F4": 3,
          "G4": 3,
          "H4": 3,
          "I4": 3,
          "A5": 2,
          "B5": 3,
          "C5": 3,
          "D5": 3,
          "E5": 3,
          "F5": 3,
          "G5": 3,
          "H5": 3,
          "I5": 3,
          "A6": 2,
          "B6": 3,
          "C6": 3,
          "D6": 3,
          "E6": 3,
          "F6": 3,
          "G6": 3,
          "H6": 3,
          "I6": 3,
          "A7": 2,
          "B7": 3,
          "C7": 3,
          "D7": 3,
          "E7": 3,
          "F7": 3,
          "G7": 3,
          "H7": 3,
          "I7": 3,
          "A8": 2,
          "B8": 3,
          "C8": 3,
          "D8": 3,
          "E8": 3,
          "F8": 3,
          "G8": 3,
          "H8": 3,
          "I8": 3,
          "A9": 2,
          "B9": 3,
          "C9": 3,
          "D9": 3,
          "E9": 3,
          "F9": 3,
          "G9": 3,
          "H9": 3,
          "I9": 3,
          "A11": 21,
          "B11": 22,
          "C11": 37,
          "D11": 45,
          "E11": 21,
          "F11": 53,
          "G11": 26,
          "H11": 26,
          "I11": 26,
          "J11": 26,
          "A12": 18,
          "C12": 4,
          "D12": 46,
          "E12": 4,
          "F12": 51,
          "A13": 18,
          "C13": 4,
          "D13": 4,
          "E13": 4,
          "A14": 18,
          "B14": 20,
          "C14": 4,
          "D14": 48,
          "E14": 4,
          "F14": 54,
          "A15": 18,
          "C15": 4,
          "D15": 46,
          "E15": 4,
          "F15": 46,
          "A16": 11,
          "C16": 39,
          "D16": 39,
          "E16": 11,
          "F16": 11,
          "A17": 18,
          "C17": 4,
          "D17": 4,
          "E17": 4,
          "F17": 4,
          "A18": 18,
          "A19": 18
        },
        "textOverflow": true,
        "stripHTML": false,
        "defaultColAlign": "left",
        "worksheetName": "Sheet",
        "defaultColWidth": 66,
        "tableOverflow": true,
        "tableWidth": 1300,
        "tableHeight": 620,
        "resize": "both",
        "minDimensions": [10, 20],
        "worksheetId": "3e6c9903-5a3a-49de-a576-0d1149617487",
        "meta": {},
        "comments": {},
        "cache": {},
        "mergeCells": {},
        "media": [
          {
            "type": "chart",
            "width": 222,
            "height": 161,
            "options": {
              "type": "line",
              "range": "'Helper'!E2:F4",
              "orientation": 1,
              "labels": 0,
              "series": [
                {
                  "color":       "#006100",
                  "borderColor": "#006100",
                  "border":      { "width": 2 }
                }
              ]
            },
            "id": "f7d943fb-6435-46b1-bed6-c6e94eec1742",
            "top": 1,
            "left": 1,
            "cellAnchor": "B12",
            "zIndex": 1,
            "rotate": 0
          },
          {
            "type": "chart",
            "width": 222,
            "height": 162,
            "options": {
              "type": "line",
              "range": "'Helper'!E7:F9",
              "orientation": 1,
              "labels": 0,
              "series": [
                {
                  "color":       "#DA2E08",
                  "borderColor": "#DA2E08",
                  "border":      { "width": 2 }
                }
              ]
            },
            "id": "6a1d2da7-207a-4ccd-8bfc-c12fb9c7eefc",
            "top": 1,
            "left": 1,
            "cellAnchor": "B15",
            "zIndex": 2,
            "rotate": 0
          }
        ]
      },
      {
        "data": [
          [
            "Ticker",
            "Company Name",
            "Previous Close Price",
            null,
            "Top 3 Performers"
          ],
          [
            "AAPL",
            "Apple Inc.",
            202.92,
            null,
            "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,-1),1)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),1)"
          ],
          [
            "MSFT",
            "Microsoft Corporation",
            527.75,
            null,
            "=INDEX(SORTBY('Sheet'!A3:A10,'Sheet'!I3:I10,-1),2)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),2)"
          ],
          [
            "AMZN",
            "Amazon.com Inc.",
            213.75,
            null,
            "=INDEX(SORTBY('Sheet'!A4:A11,'Sheet'!I4:I11,-1),3)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),3)"
          ],
          ["GOOGL", "Alphabet Inc. (Class A)", 194.67],
          ["META", "Meta Platforms Inc.", 763.46002, null, "Bottom 3 Performers"],
          [
            "NVDA",
            "NVIDIA Corporation",
            178.25999,
            null,
            "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),1)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),1)"
          ],
          [
            "TSLA",
            "Tesla Inc.",
            308.72,
            null,
            "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),2)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),2)"
          ],
          [
            "BRK.B",
            "Berkshire Hathaway Inc. (Class B)",
            464.19,
            null,
            "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),3)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),3)"
          ],
          [null, null, ""]
        ],
        "columns": [
          { "type": "text", "width": 66, "align": "left" },
          { "width": 223, "type": "text", "align": "left" },
          { "width": 142, "type": "text", "align": "left" },
          { "type": "text", "width": 66, "align": "left" },
          { "type": "text", "width": 157, "align": "left" },
          { "type": "text", "width": 65, "align": "left" },
          { "type": "text", "width": 66, "align": "left" }
        ],
        "rows": [
          { "height": 30 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 30 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "id": null, "height": 29 }
        ],
        "cells": {
          "F2": { "format": "0.00%" },
          "F3": { "format": "0.00%" },
          "F4": { "format": "0.00%" },
          "F7": { "format": "0.00%" },
          "F8": { "format": "0.00%" },
          "F9": { "format": "0.00%" }
        },
        "style": {
          "A1": 27,
          "B1": 27,
          "C1": 16,
          "E1": 17,
          "A2": 28,
          "B2": 12,
          "C2": 12,
          "E2": 12,
          "F2": 12,
          "A3": 31,
          "B3": 14,
          "C3": 14,
          "E3": 14,
          "F3": 14,
          "A4": 31,
          "B4": 14,
          "C4": 14,
          "E4": 15,
          "F4": 15,
          "A5": 31,
          "B5": 14,
          "C5": 14,
          "A6": 31,
          "B6": 14,
          "C6": 14,
          "E6": 16,
          "A7": 31,
          "B7": 14,
          "C7": 14,
          "E7": 12,
          "F7": 12,
          "A8": 31,
          "B8": 14,
          "C8": 14,
          "E8": 14,
          "F8": 14,
          "A9": 33,
          "B9": 15,
          "C9": 15,
          "E9": 15,
          "F9": 15
        },
        "textOverflow": true,
        "stripHTML": false,
        "defaultColAlign": "left",
        "worksheetName": "Helper",
        "defaultColWidth": 66,
        "tableOverflow": true,
        "tableWidth": 1300,
        "tableHeight": 620,
        "resize": "both",
        "minDimensions": [7, 10],
        "worksheetId": "4e04d16a-e5ce-4c0e-b106-2abbfd252adc",
        "meta": {},
        "comments": {},
        "cache": {},
        "mergeCells": { "E1": [2, 1], "E6": [2, 1] },
        "media": []
      }
    ],
    "validations": [
      {
        "range": "SHEET!I2:I9",
        "action": "format",
        "criteria": "<",
        "type": "number",
        "value": [0],
        "format": { "color": "#ff0000" }
      },
      {
        "range": "SHEET!I2:I9",
        "action": "format",
        "criteria": ">",
        "type": "number",
        "value": [0],
        "format": { "color": "#006100" }
      },
      {
        "range": "SHEET!F12",
        "action": "format",
        "criteria": "<",
        "type": "number",
        "value": [0, ""],
        "format": { "color": "#ff0000" }
      },
      {
        "range": "SHEET!F12",
        "action": "format",
        "criteria": ">",
        "type": "number",
        "value": [0],
        "format": { "color": "#006100" }
      },
      {
        "range": "SHEET!F15",
        "action": "format",
        "criteria": "<",
        "type": "number",
        "value": [0],
        "format": { "color": "#ff0000" }
      },
      {
        "range": "SHEET!F15",
        "action": "format",
        "criteria": ">",
        "type": "number",
        "value": [0],
        "format": { "color": "#006100" }
      },
      null
    ],
    "toolbar": true
  }
);

fetch("https://jspreadsheet.com/jspreadsheet/demos/financial")
  .then((response) => response.json())
  .then((result) => {
    const closes = Object.values(result).map((item) => item.close);
    closes.unshift("Previous Close Price");
    jspreadsheet
      .getWorksheetInstanceByName("Helper")
      .setColumnData(2, closes, true);
  })
  .catch((error, response) => {
    console.error("Error:", error);
  });

</script>
</html>
``` 
```jsx
import React, { useEffect, useRef } from 'react';
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';
import charts from '@jspreadsheet/charts';
import studio from '@lemonadejs/studio';
import chartjs from '@jspreadsheet/formula-charts';
import validations from "@jspreadsheet/validations";

import '@lemonadejs/studio';
import '@lemonadejs/studio/dist/style.css';
import 'jsuites/dist/jsuites.css';
import 'jspreadsheet/dist/jspreadsheet.css';
import '@jspreadsheet/formula-charts';
import '@jspreadsheet/charts/dist/style.css';
import './App.css';

// Set your JSS license key (The following key only works for one day)
const license = '###license###';

export default function App() {
  const spreadsheetRef = useRef(null);

  useEffect(() => {
    jspreadsheet.setLicense(license);
    jspreadsheet.setExtensions({ formula, charts, validations });

    const instance = jspreadsheet(spreadsheetRef.current, {
      "style": [
        "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
        "font-size: 15px;font-family: Open sans;color: #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
        "font-size: 15px;font-family: Open sans;color: #000000;",
        "background-color: #4EA72E;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;",
        "background-color: #0B77A0;font-size: 15px;font-weight: bold;font-family: Open sans;color: #FFFFFF;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #C1E5F5;font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #FF0000;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;",
        "background-color: #C04F15;font-size: 15px;font-weight: bold;font-family: Open sans;color: #FFFFFF;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #FBE3D6;font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
        "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;",
        "border-top:1px solid black;border-right:1px solid black;border-left:1px solid black",
        "border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
        "border-right:1px solid black;border-left:1px solid black",
        "border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
        "border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black;font-weight:bold",
        "",
        "font-weight:bold",
        "font-weight:bold;font-size:large",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;text-align:center",
        "font-weight:bold;font-size:large;text-align:center",
        "background-color:#0B77A0;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
        "font-size:15px;font-family: Open sans;color:#000000;text-align:center",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
        "text-align:center",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-top:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
        "border-top:1px solid black;border-left:1px solid black",
        "border-top:1px solid black",
        "border-top:1px solid black;border-right:1px solid black",
        "border-left:1px solid black",
        "border-right:1px solid black",
        "border-bottom:1px solid black;border-left:1px solid black",
        "border-bottom:1px solid black",
        "border-right:1px solid black;border-bottom:1px solid black",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;text-align:center",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF",
        "background-color:#C04F15;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF",
        "background-color:#FBE3D6;font-size:15px;font-family: Open sans;color:#000000",
        "background-color:#C1E5F5;font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#FBE3D6;font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#FBE3D6;font-size:x-large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#9e9e9e;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
        "font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#bdbdbd;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#9e9e9e;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#757575",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#9e9e9e",
        "font-size:x-large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#f4fffe;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#9e9e9e",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#fdffff;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e",
        "font-size:15px;font-weight:bold;font-family: Open sans;color:#fdffff;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e"
      ],
      "worksheets": [
        {
          "data": [
            [
              "Ticker",
              "Company Name",
              "Quantity",
              "Purchase Price",
              "Previous Close Price",
              "Total Cost",
              "Total Value (Prev. Close)",
              "Unrealized Gain/Loss",
              "Var. (%)",
              ""
            ],
            [
              "AAPL",
              "=VLOOKUP(A2,HELPER!A:B,2,0)",
              4300,
              189,
              "=VLOOKUP(A2,HELPER!A:C,3,0)",
              "=C2*D2",
              "=E2*C2",
              "=G2-F2",
              "=E2/D2-1",
              ""
            ],
            [
              "MSFT",
              "=VLOOKUP(A3,HELPER!A:B,2,0)",
              35000,
              400,
              "=VLOOKUP(A3,HELPER!A:C,3,0)",
              "=C3*D3",
              "=E3*C3",
              "=G3-F3",
              "=E3/D3-1",
              ""
            ],
            [
              "AMZN",
              "=VLOOKUP(A4,HELPER!A:B,2,0)",
              3400,
              224,
              "=VLOOKUP(A4,HELPER!A:C,3,0)",
              "=C4*D4",
              "=E4*C4",
              "=G4-F4",
              "=E4/D4-1",
              ""
            ],
            [
              "GOOGL",
              "=VLOOKUP(A5,HELPER!A:B,2,0)",
              4900,
              164,
              "=VLOOKUP(A5,HELPER!A:C,3,0)",
              "=C5*D5",
              "=E5*C5",
              "=G5-F5",
              "=E5/D5-1",
              ""
            ],
            [
              "META",
              "=VLOOKUP(A6,HELPER!A:B,2,0)",
              2000,
              712,
              "=VLOOKUP(A6,HELPER!A:C,3,0)",
              "=C6*D6",
              "=E6*C6",
              "=G6-F6",
              "=E6/D6-1",
              ""
            ],
            [
              "NVDA",
              "=VLOOKUP(A7,HELPER!A:B,2,0)",
              3000,
              151,
              "=VLOOKUP(A7,HELPER!A:C,3,0)",
              "=C7*D7",
              "=E7*C7",
              "=G7-F7",
              "=E7/D7-1",
              ""
            ],
            [
              "TSLA",
              "=VLOOKUP(A8,HELPER!A:B,2,0)",
              2000,
              391,
              "=VLOOKUP(A8,HELPER!A:C,3,0)",
              "=C8*D8",
              "=E8*C8",
              "=G8-F8",
              "=E8/D8-1",
              ""
            ],
            [
              "BRK.B",
              "=VLOOKUP(A9,HELPER!A:B,2,0)",
              1500,
              458,
              "=VLOOKUP(A9,HELPER!A:C,3,0)",
              "=C9*D9",
              "=E9*C9",
              "=G9-F9",
              "=E9/D9-1",
              ""
            ],
            ["", "", "", "", "", "", "", "", "", ""],
            [
              "",
              "Top 3 Performers",
              "",
              "Total Cost",
              "",
              "Average Return",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "=CHART('line',['Helper'!E2,'Helper'!E3,'Helper'!E4],[{'data':('Helper'!F2:F4),'type':'line','backgroundColor':'#4a9d3f','fill':TRUE,'tension':0,'disableJssSimplification':TRUE}],{'disableJssSimplification':TRUE,'plugins':{'legend':{'display':FALSE,'labels':{'color':'#000000'}}},'scales':{'x':{'ticks':{'color':'#000000'}},'y':{'ticks':{'color':'#000000'}}}})",
              "",
              "=SUM(F2:F9)",
              "",
              "=D15/D12-1",
              "",
              "",
              "",
              ""
            ],
            ["", "", "", "", "", "", "", "", "", ""],
            [
              "",
              "Bottom 3 Performers",
              "",
              "Total Value (Prev. Close)",
              "",
              "Total Profit/Loss",
              "",
              "",
              "",
              ""
            ],
            [
              "",
              "=CHART('line',['Helper'!E7,'Helper'!E8,'Helper'!E9],[{'data':('Helper'!F7:F9),'type':'line','label':'Website Page Views','backgroundColor':'#ff0000','fill':TRUE,'tension':0,'disableJssSimplification':TRUE}],{'disableJssSimplification':TRUE,'plugins':{'legend':{'display':FALSE,'labels':{'color':'#000000'}}},'scales':{'x':{'ticks':{'color':'#000000'}},'y':{'ticks':{'color':'#000000'}}}})",
              "",
              "=SUM(G2:G9)",
              "",
              "=SUM(H2:H9)",
              "",
              "",
              "",
              ""
            ],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""]
          ],
          "columns": [
            { "width": 65, "type": "text", "align": "left" },
            { "width": 223, "type": "text", "align": "left" },
            { "width": 77, "type": "text", "align": "left" },
            { "width": 169, "type": "text", "align": "left" },
            { "width": 147, "type": "text", "align": "left" },
            { "width": 143, "type": "text", "align": "left" },
            { "width": 167, "type": "text", "align": "left" },
            { "width": 150, "type": "text", "align": "left" },
            { "width": 75, "type": "text", "align": "left" },
            { "width": 60, "type": "text", "align": "left" }
          ],
          "rows": [
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 34 },
            { "height": 116 },
            { "height": 29 },
            { "height": 34 },
            { "height": 116 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "id": null, "height": 29 }
          ],
          "cells": {
            "D2": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E2": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F2": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G2": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H2": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I2": { "format": "0.00%" },
            "D3": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E3": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F3": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G3": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H3": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I3": { "format": "0.00%" },
            "D4": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E4": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F4": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G4": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H4": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I4": { "format": "0.00%" },
            "D5": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E5": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F5": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G5": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H5": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I5": { "format": "0.00%" },
            "D6": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E6": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F6": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G6": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H6": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I6": { "format": "0.00%" },
            "D7": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E7": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F7": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G7": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H7": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I7": { "format": "0.00%" },
            "D8": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E8": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F8": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G8": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H8": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I8": { "format": "0.00%" },
            "D9": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E9": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F9": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G9": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H9": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I9": { "format": "0.00%" },
            "C12": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D12": { "format": "$#,##0.00" },
            "E12": { "format": "0.00%" },
            "F12": { "format": "0.00%" },
            "D15": { "format": "$#,##0.00" },
            "F15": { "format": "$#,##0.00" },
            "C17": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D17": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E17": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F17": {
              "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
            }
          },
          "style": {
            "A1": 54,
            "B1": 56,
            "C1": 56,
            "D1": 56,
            "E1": 56,
            "F1": 56,
            "G1": 56,
            "H1": 56,
            "I1": 56,
            "A2": 2,
            "B2": 3,
            "C2": 3,
            "D2": 3,
            "E2": 3,
            "F2": 3,
            "G2": 3,
            "H2": 3,
            "I2": 3,
            "A3": 2,
            "B3": 3,
            "C3": 3,
            "D3": 3,
            "E3": 3,
            "F3": 3,
            "G3": 3,
            "H3": 3,
            "I3": 3,
            "A4": 2,
            "B4": 3,
            "C4": 3,
            "D4": 3,
            "E4": 3,
            "F4": 3,
            "G4": 3,
            "H4": 3,
            "I4": 3,
            "A5": 2,
            "B5": 3,
            "C5": 3,
            "D5": 3,
            "E5": 3,
            "F5": 3,
            "G5": 3,
            "H5": 3,
            "I5": 3,
            "A6": 2,
            "B6": 3,
            "C6": 3,
            "D6": 3,
            "E6": 3,
            "F6": 3,
            "G6": 3,
            "H6": 3,
            "I6": 3,
            "A7": 2,
            "B7": 3,
            "C7": 3,
            "D7": 3,
            "E7": 3,
            "F7": 3,
            "G7": 3,
            "H7": 3,
            "I7": 3,
            "A8": 2,
            "B8": 3,
            "C8": 3,
            "D8": 3,
            "E8": 3,
            "F8": 3,
            "G8": 3,
            "H8": 3,
            "I8": 3,
            "A9": 2,
            "B9": 3,
            "C9": 3,
            "D9": 3,
            "E9": 3,
            "F9": 3,
            "G9": 3,
            "H9": 3,
            "I9": 3,
            "A11": 21,
            "B11": 22,
            "C11": 37,
            "D11": 45,
            "E11": 21,
            "F11": 53,
            "G11": 26,
            "H11": 26,
            "I11": 26,
            "J11": 26,
            "A12": 18,
            "C12": 4,
            "D12": 46,
            "E12": 4,
            "F12": 51,
            "A13": 18,
            "C13": 4,
            "D13": 4,
            "E13": 4,
            "A14": 18,
            "B14": 20,
            "C14": 4,
            "D14": 48,
            "E14": 4,
            "F14": 54,
            "A15": 18,
            "C15": 4,
            "D15": 46,
            "E15": 4,
            "F15": 46,
            "A16": 11,
            "C16": 39,
            "D16": 39,
            "E16": 11,
            "F16": 11,
            "A17": 18,
            "C17": 4,
            "D17": 4,
            "E17": 4,
            "F17": 4,
            "A18": 18,
            "A19": 18
          },
          "textOverflow": true,
          "stripHTML": false,
          "defaultColAlign": "left",
          "worksheetName": "Sheet",
          "defaultColWidth": 66,
          "tableOverflow": true,
          "tableWidth": 1300,
          "tableHeight": 620,
          "resize": "both",
          "minDimensions": [10, 20],
          "worksheetId": "3e6c9903-5a3a-49de-a576-0d1149617487",
          "meta": {},
          "comments": {},
          "cache": {},
          "mergeCells": {},
          "media": []
        },
        {
          "data": [
            [
              "Ticker",
              "Company Name",
              "Previous Close Price",
              null,
              "Top 3 Performers"
            ],
            [
              "AAPL",
              "Apple Inc.",
              201.45,
              null,
              "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,-1),1)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),1)"
            ],
            [
              "MSFT",
              "Microsoft Corporation",
              472.75,
              null,
              "=INDEX(SORTBY('Sheet'!A3:A10,'Sheet'!I3:I10,-1),2)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),2)"
            ],
            [
              "AMZN",
              "Amazon.com Inc.",
              216.98,
              null,
              "=INDEX(SORTBY('Sheet'!A4:A11,'Sheet'!I4:I11,-1),3)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),3)"
            ],
            ["GOOGL", "Alphabet Inc. (Class A)", 176.089996],
            [
              "META",
              "Meta Platforms Inc.",
              694.059998,
              null,
              "Bottom 3 Performers"
            ],
            [
              "NVDA",
              "NVIDIA Corporation",
              142.63,
              null,
              "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),1)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),1)"
            ],
            [
              "TSLA",
              "Tesla Inc.",
              308.57999,
              null,
              "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),2)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),2)"
            ],
            [
              "BRK.B",
              "Berkshire Hathaway Inc. (Class B)",
              493.32999,
              null,
              "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),3)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),3)"
            ],
            [null, null, ""]
          ],
          "columns": [
            { "type": "text", "width": 66, "align": "left" },
            { "width": 223, "type": "text", "align": "left" },
            { "width": 142, "type": "text", "align": "left" },
            { "type": "text", "width": 66, "align": "left" },
            { "type": "text", "width": 157, "align": "left" },
            { "type": "text", "width": 65, "align": "left" },
            { "type": "text", "width": 66, "align": "left" }
          ],
          "rows": [
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "height": 29 },
            { "id": null, "height": 29 }
          ],
          "cells": {
            "F2": { "format": "0.00%" },
            "F3": { "format": "0.00%" },
            "F4": { "format": "0.00%" },
            "F7": { "format": "0.00%" },
            "F8": { "format": "0.00%" },
            "F9": { "format": "0.00%" }
          },
          "style": {
            "A1": 27,
            "B1": 27,
            "C1": 16,
            "E1": 17,
            "A2": 28,
            "B2": 12,
            "C2": 12,
            "E2": 12,
            "F2": 12,
            "A3": 31,
            "B3": 14,
            "C3": 14,
            "E3": 14,
            "F3": 14,
            "A4": 31,
            "B4": 14,
            "C4": 14,
            "E4": 15,
            "F4": 15,
            "A5": 31,
            "B5": 14,
            "C5": 14,
            "A6": 31,
            "B6": 14,
            "C6": 14,
            "E6": 16,
            "A7": 31,
            "B7": 14,
            "C7": 14,
            "E7": 12,
            "F7": 12,
            "A8": 31,
            "B8": 14,
            "C8": 14,
            "E8": 14,
            "F8": 14,
            "A9": 33,
            "B9": 15,
            "C9": 15,
            "E9": 15,
            "F9": 15
          },
          "textOverflow": true,
          "stripHTML": false,
          "defaultColAlign": "left",
          "worksheetName": "Helper",
          "defaultColWidth": 66,
          "minDimensions": [7, 10],
          "worksheetId": "4e04d16a-e5ce-4c0e-b106-2abbfd252adc",
          "meta": {},
          "comments": {},
          "cache": {},
          "mergeCells": { "E1": [2, 1], "E6": [2, 1] }
        }
      ],
      "validations": [
        {
          "range": "SHEET!I2:I9",
          "action": "format",
          "criteria": "<",
          "type": "number",
          "value": [0],
          "format": { "color": "#ff0000" }
        },
        {
          "range": "SHEET!I2:I9",
          "action": "format",
          "criteria": ">",
          "type": "number",
          "value": [0],
          "format": { "color": "#006100" }
        },
        {
          "range": "SHEET!F12",
          "action": "format",
          "criteria": "<",
          "type": "number",
          "value": [0, ""],
          "format": { "color": "#ff0000" }
        },
        {
          "range": "SHEET!F12",
          "action": "format",
          "criteria": ">",
          "type": "number",
          "value": [0],
          "format": { "color": "#006100" }
        },
        {
          "range": "SHEET!F15",
          "action": "format",
          "criteria": "<",
          "type": "number",
          "value": [0],
          "format": { "color": "#ff0000" }
        },
        {
          "range": "SHEET!F15",
          "action": "format",
          "criteria": ">",
          "type": "number",
          "value": [0],
          "format": { "color": "#006100" }
        },
        null
      ],
      "toolbar": true
    }
  );

    fetch("https://jspreadsheet.com/jspreadsheet/demos/financial")
    .then((response) => response.json())
    .then((result) => {
      const closes = Object.values(result).map((item) => item.close);
      closes.unshift("Previous Close Price");
      const helperSheet = instance[1];
      helperSheet.setColumnData(2, closes, true);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

    return () => {
      instance?.destroy?.();
    };
  }, []);

  return <div ref={spreadsheetRef}></div>;
}
```
```vue
<template>
  <Spreadsheet
    ref="spreadsheet"
    :license="license"
    :validations="validations"
    :worksheets="worksheets"
    :styles="globalStyle"
    toolbar="true"
  />
</template>

<script>
import { ref, onMounted } from 'vue';
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';
import charts from '@jspreadsheet/charts';
import studio from '@lemonadejs/studio';
import chartjs from '@jspreadsheet/formula-charts';
import validations from "@jspreadsheet/validations";

import '@lemonadejs/studio';
import '@lemonadejs/studio/dist/style.css';
import 'jsuites/dist/jsuites.css';
import 'jspreadsheet/dist/jspreadsheet.css';
import '@jspreadsheet/formula-charts';
import '@jspreadsheet/charts/dist/style.css';

jspreadsheet.setLicense('###license###');
jspreadsheet.setExtensions({ formula, charts, validations });

export default {
  components: { Spreadsheet, Worksheet },
  
  setup() {
    const spreadsheet = ref(null)

    const license = '###license###';
    const globalStyle = [ 
      "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-family: Open sans;color: #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-family: Open sans;color: #000000;",
      "background-color: #4EA72E;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;",
      "background-color: #0B77A0;font-size: 15px;font-weight: bold;font-family: Open sans;color: #FFFFFF;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
      "background-color: #C1E5F5;font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
      "background-color: #FF0000;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;",
      "background-color: #C04F15;font-size: 15px;font-weight: bold;font-family: Open sans;color: #FFFFFF;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
      "background-color: #FBE3D6;font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;",
      "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;",
      "border-top:1px solid black;border-right:1px solid black;border-left:1px solid black",
      "border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
      "border-right:1px solid black;border-left:1px solid black",
      "border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
      "border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black;font-weight:bold",
      "",
      "font-weight:bold",
      "font-weight:bold;font-size:large",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;text-align:center",
      "font-weight:bold;font-size:large;text-align:center",
      "background-color:#0B77A0;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
      "font-size:15px;font-family: Open sans;color:#000000;text-align:center",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
      "text-align:center",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-top:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
      "border-top:1px solid black;border-left:1px solid black",
      "border-top:1px solid black",
      "border-top:1px solid black;border-right:1px solid black",
      "border-left:1px solid black",
      "border-right:1px solid black",
      "border-bottom:1px solid black;border-left:1px solid black",
      "border-bottom:1px solid black",
      "border-right:1px solid black;border-bottom:1px solid black",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;text-align:center",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF",
      "background-color:#C04F15;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF",
      "background-color:#FBE3D6;font-size:15px;font-family: Open sans;color:#000000",
      "background-color:#C1E5F5;font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#FBE3D6;font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#FBE3D6;font-size:x-large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#9e9e9e;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center",
      "font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#bdbdbd;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
      "background-color:#9e9e9e;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#757575",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#9e9e9e",
      "font-size:x-large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#f4fffe;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#9e9e9e",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#fdffff;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e",
      "font-size:15px;font-weight:bold;font-family: Open sans;color:#fdffff;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e" ]; 
    const worksheets = [ 
      {
        "data": [
          [
            "Ticker",
            "Company Name",
            "Quantity",
            "Purchase Price",
            "Previous Close Price",
            "Total Cost",
            "Total Value (Prev. Close)",
            "Unrealized Gain/Loss",
            "Var. (%)",
            ""
          ],
          [
            "AAPL",
            "=VLOOKUP(A2,HELPER!A:B,2,0)",
            4300,
            189,
            "=VLOOKUP(A2,HELPER!A:C,3,0)",
            "=C2*D2",
            "=E2*C2",
            "=G2-F2",
            "=E2/D2-1",
            ""
          ],
          [
            "MSFT",
            "=VLOOKUP(A3,HELPER!A:B,2,0)",
            35000,
            400,
            "=VLOOKUP(A3,HELPER!A:C,3,0)",
            "=C3*D3",
            "=E3*C3",
            "=G3-F3",
            "=E3/D3-1",
            ""
          ],
          [
            "AMZN",
            "=VLOOKUP(A4,HELPER!A:B,2,0)",
            3400,
            224,
            "=VLOOKUP(A4,HELPER!A:C,3,0)",
            "=C4*D4",
            "=E4*C4",
            "=G4-F4",
            "=E4/D4-1",
            ""
          ],
          [
            "GOOGL",
            "=VLOOKUP(A5,HELPER!A:B,2,0)",
            4900,
            164,
            "=VLOOKUP(A5,HELPER!A:C,3,0)",
            "=C5*D5",
            "=E5*C5",
            "=G5-F5",
            "=E5/D5-1",
            ""
          ],
          [
            "META",
            "=VLOOKUP(A6,HELPER!A:B,2,0)",
            2000,
            712,
            "=VLOOKUP(A6,HELPER!A:C,3,0)",
            "=C6*D6",
            "=E6*C6",
            "=G6-F6",
            "=E6/D6-1",
            ""
          ],
          [
            "NVDA",
            "=VLOOKUP(A7,HELPER!A:B,2,0)",
            3000,
            151,
            "=VLOOKUP(A7,HELPER!A:C,3,0)",
            "=C7*D7",
            "=E7*C7",
            "=G7-F7",
            "=E7/D7-1",
            ""
          ],
          [
            "TSLA",
            "=VLOOKUP(A8,HELPER!A:B,2,0)",
            2000,
            391,
            "=VLOOKUP(A8,HELPER!A:C,3,0)",
            "=C8*D8",
            "=E8*C8",
            "=G8-F8",
            "=E8/D8-1",
            ""
          ],
          [
            "BRK.B",
            "=VLOOKUP(A9,HELPER!A:B,2,0)",
            1500,
            458,
            "=VLOOKUP(A9,HELPER!A:C,3,0)",
            "=C9*D9",
            "=E9*C9",
            "=G9-F9",
            "=E9/D9-1",
            ""
          ],
          ["", "", "", "", "", "", "", "", "", ""],
          [
            "",
            "Top 3 Performers",
            "",
            "Total Cost",
            "",
            "Average Return",
            "",
            "",
            "",
            ""
          ],
          [
            "",
            "=CHART('line',['Helper'!E2,'Helper'!E3,'Helper'!E4],[{'data':('Helper'!F2:F4),'type':'line','backgroundColor':'#4a9d3f','fill':TRUE,'tension':0,'disableJssSimplification':TRUE}],{'disableJssSimplification':TRUE,'plugins':{'legend':{'display':FALSE,'labels':{'color':'#000000'}}},'scales':{'x':{'ticks':{'color':'#000000'}},'y':{'ticks':{'color':'#000000'}}}})",
            "",
            "=SUM(F2:F9)",
            "",
            "=D15/D12-1",
            "",
            "",
            "",
            ""
          ],
          ["", "", "", "", "", "", "", "", "", ""],
          [
            "",
            "Bottom 3 Performers",
            "",
            "Total Value (Prev. Close)",
            "",
            "Total Profit/Loss",
            "",
            "",
            "",
            ""
          ],
          [
            "",
            "=CHART('line',['Helper'!E7,'Helper'!E8,'Helper'!E9],[{'data':('Helper'!F7:F9),'type':'line','label':'Website Page Views','backgroundColor':'#ff0000','fill':TRUE,'tension':0,'disableJssSimplification':TRUE}],{'disableJssSimplification':TRUE,'plugins':{'legend':{'display':FALSE,'labels':{'color':'#000000'}}},'scales':{'x':{'ticks':{'color':'#000000'}},'y':{'ticks':{'color':'#000000'}}}})",
            "",
            "=SUM(G2:G9)",
            "",
            "=SUM(H2:H9)",
            "",
            "",
            "",
            ""
          ],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", ""]
        ],
        "columns": [
          { "width": 65, "type": "text", "align": "left" },
          { "width": 223, "type": "text", "align": "left" },
          { "width": 77, "type": "text", "align": "left" },
          { "width": 169, "type": "text", "align": "left" },
          { "width": 147, "type": "text", "align": "left" },
          { "width": 143, "type": "text", "align": "left" },
          { "width": 167, "type": "text", "align": "left" },
          { "width": 150, "type": "text", "align": "left" },
          { "width": 75, "type": "text", "align": "left" },
          { "width": 60, "type": "text", "align": "left" }
        ],
        "rows": [
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 34 },
          { "height": 116 },
          { "height": 29 },
          { "height": 34 },
          { "height": 116 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "id": null, "height": 29 }
        ],
        "cells": {
          "D2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I2": { "format": "0.00%" },
          "D3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I3": { "format": "0.00%" },
          "D4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I4": { "format": "0.00%" },
          "D5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I5": { "format": "0.00%" },
          "D6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I6": { "format": "0.00%" },
          "D7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I7": { "format": "0.00%" },
          "D8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I8": { "format": "0.00%" },
          "D9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "G9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "H9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "I9": { "format": "0.00%" },
          "C12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "D12": { "format": "$#,##0.00" },
          "E12": { "format": "0.00%" },
          "F12": { "format": "0.00%" },
          "D15": { "format": "$#,##0.00" },
          "F15": { "format": "$#,##0.00" },
          "C17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "D17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "E17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          },
          "F17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ "
          }
        },
        "style": {
          "A1": 54,
          "B1": 56,
          "C1": 56,
          "D1": 56,
          "E1": 56,
          "F1": 56,
          "G1": 56,
          "H1": 56,
          "I1": 56,
          "A2": 2,
          "B2": 3,
          "C2": 3,
          "D2": 3,
          "E2": 3,
          "F2": 3,
          "G2": 3,
          "H2": 3,
          "I2": 3,
          "A3": 2,
          "B3": 3,
          "C3": 3,
          "D3": 3,
          "E3": 3,
          "F3": 3,
          "G3": 3,
          "H3": 3,
          "I3": 3,
          "A4": 2,
          "B4": 3,
          "C4": 3,
          "D4": 3,
          "E4": 3,
          "F4": 3,
          "G4": 3,
          "H4": 3,
          "I4": 3,
          "A5": 2,
          "B5": 3,
          "C5": 3,
          "D5": 3,
          "E5": 3,
          "F5": 3,
          "G5": 3,
          "H5": 3,
          "I5": 3,
          "A6": 2,
          "B6": 3,
          "C6": 3,
          "D6": 3,
          "E6": 3,
          "F6": 3,
          "G6": 3,
          "H6": 3,
          "I6": 3,
          "A7": 2,
          "B7": 3,
          "C7": 3,
          "D7": 3,
          "E7": 3,
          "F7": 3,
          "G7": 3,
          "H7": 3,
          "I7": 3,
          "A8": 2,
          "B8": 3,
          "C8": 3,
          "D8": 3,
          "E8": 3,
          "F8": 3,
          "G8": 3,
          "H8": 3,
          "I8": 3,
          "A9": 2,
          "B9": 3,
          "C9": 3,
          "D9": 3,
          "E9": 3,
          "F9": 3,
          "G9": 3,
          "H9": 3,
          "I9": 3,
          "A11": 21,
          "B11": 22,
          "C11": 37,
          "D11": 45,
          "E11": 21,
          "F11": 53,
          "G11": 26,
          "H11": 26,
          "I11": 26,
          "J11": 26,
          "A12": 18,
          "C12": 4,
          "D12": 46,
          "E12": 4,
          "F12": 51,
          "A13": 18,
          "C13": 4,
          "D13": 4,
          "E13": 4,
          "A14": 18,
          "B14": 20,
          "C14": 4,
          "D14": 48,
          "E14": 4,
          "F14": 54,
          "A15": 18,
          "C15": 4,
          "D15": 46,
          "E15": 4,
          "F15": 46,
          "A16": 11,
          "C16": 39,
          "D16": 39,
          "E16": 11,
          "F16": 11,
          "A17": 18,
          "C17": 4,
          "D17": 4,
          "E17": 4,
          "F17": 4,
          "A18": 18,
          "A19": 18
        },
        "textOverflow": true,
        "stripHTML": false,
        "defaultColAlign": "left",
        "worksheetName": "Sheet",
        "defaultColWidth": 66,
        "tableOverflow": true,
        "tableWidth": 1300,
        "tableHeight": 620,
        "resize": "both",
        "minDimensions": [10, 20],
        "worksheetId": "3e6c9903-5a3a-49de-a576-0d1149617487",
        "meta": {},
        "comments": {},
        "cache": {},
        "mergeCells": {},
        "media": []
      },
      {
        "data": [
          [
            "Ticker",
            "Company Name",
            "Previous Close Price",
            null,
            "Top 3 Performers"
          ],
          [
            "AAPL",
            "Apple Inc.",
            201.45,
            null,
            "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,-1),1)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),1)"
          ],
          [
            "MSFT",
            "Microsoft Corporation",
            472.75,
            null,
            "=INDEX(SORTBY('Sheet'!A3:A10,'Sheet'!I3:I10,-1),2)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),2)"
          ],
          [
            "AMZN",
            "Amazon.com Inc.",
            216.98,
            null,
            "=INDEX(SORTBY('Sheet'!A4:A11,'Sheet'!I4:I11,-1),3)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),3)"
          ],
          ["GOOGL", "Alphabet Inc. (Class A)", 176.089996],
          [
            "META",
            "Meta Platforms Inc.",
            694.059998,
            null,
            "Bottom 3 Performers"
          ],
          [
            "NVDA",
            "NVIDIA Corporation",
            142.63,
            null,
            "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),1)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),1)"
          ],
          [
            "TSLA",
            "Tesla Inc.",
            308.57999,
            null,
            "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),2)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),2)"
          ],
          [
            "BRK.B",
            "Berkshire Hathaway Inc. (Class B)",
            493.32999,
            null,
            "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),3)",
            "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),3)"
          ],
          [null, null, ""]
        ],
        "columns": [
          { "type": "text", "width": 66, "align": "left" },
          { "width": 223, "type": "text", "align": "left" },
          { "width": 142, "type": "text", "align": "left" },
          { "type": "text", "width": 66, "align": "left" },
          { "type": "text", "width": 157, "align": "left" },
          { "type": "text", "width": 65, "align": "left" },
          { "type": "text", "width": 66, "align": "left" }
        ],
        "rows": [
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "height": 29 },
          { "id": null, "height": 29 }
        ],
        "cells": {
          "F2": { "format": "0.00%" },
          "F3": { "format": "0.00%" },
          "F4": { "format": "0.00%" },
          "F7": { "format": "0.00%" },
          "F8": { "format": "0.00%" },
          "F9": { "format": "0.00%" }
        },
        "style": {
          "A1": 27,
          "B1": 27,
          "C1": 16,
          "E1": 17,
          "A2": 28,
          "B2": 12,
          "C2": 12,
          "E2": 12,
          "F2": 12,
          "A3": 31,
          "B3": 14,
          "C3": 14,
          "E3": 14,
          "F3": 14,
          "A4": 31,
          "B4": 14,
          "C4": 14,
          "E4": 15,
          "F4": 15,
          "A5": 31,
          "B5": 14,
          "C5": 14,
          "A6": 31,
          "B6": 14,
          "C6": 14,
          "E6": 16,
          "A7": 31,
          "B7": 14,
          "C7": 14,
          "E7": 12,
          "F7": 12,
          "A8": 31,
          "B8": 14,
          "C8": 14,
          "E8": 14,
          "F8": 14,
          "A9": 33,
          "B9": 15,
          "C9": 15,
          "E9": 15,
          "F9": 15
        },
        "textOverflow": true,
        "stripHTML": false,
        "defaultColAlign": "left",
        "worksheetName": "Helper",
        "defaultColWidth": 66,
        "minDimensions": [7, 10],
        "worksheetId": "4e04d16a-e5ce-4c0e-b106-2abbfd252adc",
        "meta": {},
        "comments": {},
        "cache": {},
        "mergeCells": { "E1": [2, 1], "E6": [2, 1] }
      }
    ];
    const validations = [ 
      {
        "range": "SHEET!I2:I9",
        "action": "format",
        "criteria": "<",
        "type": "number",
        "value": [0],
        "format": { "color": "#ff0000" }
      },
      {
        "range": "SHEET!I2:I9",
        "action": "format",
        "criteria": ">",
        "type": "number",
        "value": [0],
        "format": { "color": "#006100" }
      },
      {
        "range": "SHEET!F12",
        "action": "format",
        "criteria": "<",
        "type": "number",
        "value": [0, ""],
        "format": { "color": "#ff0000" }
      },
      {
        "range": "SHEET!F12",
        "action": "format",
        "criteria": ">",
        "type": "number",
        "value": [0],
        "format": { "color": "#006100" }
      },
      {
        "range": "SHEET!F15",
        "action": "format",
        "criteria": "<",
        "type": "number",
        "value": [0],
        "format": { "color": "#ff0000" }
      },
      {
        "range": "SHEET!F15",
        "action": "format",
        "criteria": ">",
        "type": "number",
        "value": [0],
        "format": { "color": "#006100" }
      },
      null
    ]; 

    onMounted(() => {
      fetch("https://jspreadsheet.com/jspreadsheet/demos/financial")
        .then((response) => response.json())
        .then((result) => {
          const closes = Object.values(result).map((item) => item.close);
          closes.unshift("Previous Close Price");

          const helperSheet = spreadsheet.value.current[1];
          helperSheet.setColumnData(2, closes, true);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    return {
          spreadsheet,
          license,
          globalStyle,
          worksheets,
          validations
    };
  }
};
</script>
```
```angularjs
import { Component, ElementRef, ViewChild } from '@angular/core';
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';
import charts from '@jspreadsheet/charts';
import validations from '@jspreadsheet/validations';

import '@jspreadsheet/formula-charts';

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense(
  'OThlYWZmYzlmNjczNmIxNjUzNjFmYjFhYjk4MDM4ZjAyYjQ0MmM3YWQ0Y2UzMzE1YjMyMmY1ZjgyZjhiOGQzYzYyNGUzNmFhYmU1Mjg4ODFhOGVhMDY0NTZmZDcxZGQwYTZjYTMxZjI1ZWI0MjJlYzE2Y2E2OTFlNmU4MTBhM2MsZXlKamJHbGxiblJKWkNJNklpSXNJbTVoYldVaU9pSktjM0J5WldGa2MyaGxaWFFpTENKa1lYUmxJam94TnpVeU56RTJPRFE0TENKa2IyMWhhVzRpT2xzaWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWFuTm9aV3hzTG01bGRDSXNJbU56WWk1aGNIQWlMQ0p6ZEdGamEySnNhWFI2TG1sdklpd2lkMlZpWTI5dWRHRnBibVZ5TG1sdklpd2lkMlZpSWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpOQ0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1Ob1lYSjBjeUlzSW1admNtMXpJaXdpWm05eWJYVnNZU0lzSW5CaGNuTmxjaUlzSW5KbGJtUmxjaUlzSW1OdmJXMWxiblJ6SWl3aWFXMXdiM0owWlhJaUxDSmlZWElpTENKMllXeHBaR0YwYVc5dWN5SXNJbk5sWVhKamFDSXNJbkJ5YVc1MElpd2ljMmhsWlhSeklpd2lZMnhwWlc1MElpd2ljMlZ5ZG1WeUlpd2ljMmhoY0dWeklpd2labTl5YldGMElsMHNJbVJsYlc4aU9uUnlkV1Y5'
);

jspreadsheet.setExtensions({ formula, charts, validations });

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<div #spreadsheet></div>`,
})
export class AppComponent {
  @ViewChild('spreadsheet', { static: true }) spreadsheet!: ElementRef;

  ngAfterViewInit() {
    const instance = jspreadsheet(this.spreadsheet.nativeElement, {
      style: [
        'font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;',
        'font-size: 15px;font-family: Open sans;color: #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;',
        'font-size: 15px;font-family: Open sans;color: #000000;',
        'background-color: #4EA72E;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;',
        'background-color: #0B77A0;font-size: 15px;font-weight: bold;font-family: Open sans;color: #FFFFFF;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color: #C1E5F5;font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color: #FF0000;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;',
        'background-color: #C04F15;font-size: 15px;font-weight: bold;font-family: Open sans;color: #FFFFFF;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color: #FBE3D6;font-size: 15px;font-family: Open sans;color: #000000;border-left: 1px solid #000000;border-right: 1px solid #000000;border-bottom: 1px solid #000000;',
        'font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;',
        'border-top:1px solid black;border-right:1px solid black;border-left:1px solid black',
        'border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black',
        'border-right:1px solid black;border-left:1px solid black',
        'border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black',
        'border-top:1px solid black;border-right:1px solid black;border-bottom:1px solid black;border-left:1px solid black;font-weight:bold',
        '',
        'font-weight:bold',
        'font-weight:bold;font-size:large',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;text-align:center',
        'font-weight:bold;font-size:large;text-align:center',
        'background-color:#0B77A0;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center',
        'font-size:15px;font-family: Open sans;color:#000000;text-align:center',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center',
        'text-align:center',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-top:1px solid black;border-bottom:1px solid black;border-left:1px solid black',
        'border-top:1px solid black;border-left:1px solid black',
        'border-top:1px solid black',
        'border-top:1px solid black;border-right:1px solid black',
        'border-left:1px solid black',
        'border-right:1px solid black',
        'border-bottom:1px solid black;border-left:1px solid black',
        'border-bottom:1px solid black',
        'border-right:1px solid black;border-bottom:1px solid black',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;text-align:center',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF',
        'background-color:#C04F15;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF',
        'background-color:#FBE3D6;font-size:15px;font-family: Open sans;color:#000000',
        'background-color:#C1E5F5;font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#FBE3D6;font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#FBE3D6;font-size:x-large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#9e9e9e;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center',
        'font-size:large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#bdbdbd;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#9e9e9e;font-size:15px;font-weight:bold;font-family: Open sans;color:#FFFFFF;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#757575',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#9e9e9e',
        'font-size:x-large;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-bottom:1px solid #000000',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#f4fffe;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;text-align:center;background-color:#9e9e9e',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#fdffff;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e',
        'font-size:15px;font-weight:bold;font-family: Open sans;color:#fdffff;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000;background-color:#9e9e9e',
      ],
      worksheets: [
        {
          data: [
            [
              'Ticker',
              'Company Name',
              'Quantity',
              'Purchase Price',
              'Previous Close Price',
              'Total Cost',
              'Total Value (Prev. Close)',
              'Unrealized Gain/Loss',
              'Var. (%)',
              '',
            ],
            [
              'AAPL',
              '=VLOOKUP(A2,HELPER!A:B,2,0)',
              4300,
              189,
              '=VLOOKUP(A2,HELPER!A:C,3,0)',
              '=C2*D2',
              '=E2*C2',
              '=G2-F2',
              '=E2/D2-1',
              '',
            ],
            [
              'MSFT',
              '=VLOOKUP(A3,HELPER!A:B,2,0)',
              35000,
              400,
              '=VLOOKUP(A3,HELPER!A:C,3,0)',
              '=C3*D3',
              '=E3*C3',
              '=G3-F3',
              '=E3/D3-1',
              '',
            ],
            [
              'AMZN',
              '=VLOOKUP(A4,HELPER!A:B,2,0)',
              3400,
              224,
              '=VLOOKUP(A4,HELPER!A:C,3,0)',
              '=C4*D4',
              '=E4*C4',
              '=G4-F4',
              '=E4/D4-1',
              '',
            ],
            [
              'GOOGL',
              '=VLOOKUP(A5,HELPER!A:B,2,0)',
              4900,
              164,
              '=VLOOKUP(A5,HELPER!A:C,3,0)',
              '=C5*D5',
              '=E5*C5',
              '=G5-F5',
              '=E5/D5-1',
              '',
            ],
            [
              'META',
              '=VLOOKUP(A6,HELPER!A:B,2,0)',
              2000,
              712,
              '=VLOOKUP(A6,HELPER!A:C,3,0)',
              '=C6*D6',
              '=E6*C6',
              '=G6-F6',
              '=E6/D6-1',
              '',
            ],
            [
              'NVDA',
              '=VLOOKUP(A7,HELPER!A:B,2,0)',
              3000,
              151,
              '=VLOOKUP(A7,HELPER!A:C,3,0)',
              '=C7*D7',
              '=E7*C7',
              '=G7-F7',
              '=E7/D7-1',
              '',
            ],
            [
              'TSLA',
              '=VLOOKUP(A8,HELPER!A:B,2,0)',
              2000,
              391,
              '=VLOOKUP(A8,HELPER!A:C,3,0)',
              '=C8*D8',
              '=E8*C8',
              '=G8-F8',
              '=E8/D8-1',
              '',
            ],
            [
              'BRK.B',
              '=VLOOKUP(A9,HELPER!A:B,2,0)',
              1500,
              458,
              '=VLOOKUP(A9,HELPER!A:C,3,0)',
              '=C9*D9',
              '=E9*C9',
              '=G9-F9',
              '=E9/D9-1',
              '',
            ],
            ['', '', '', '', '', '', '', '', '', ''],
            [
              '',
              'Top 3 Performers',
              '',
              'Total Cost',
              '',
              'Average Return',
              '',
              '',
              '',
              '',
            ],
            [
              '',
              "=CHART('line',['Helper'!E2,'Helper'!E3,'Helper'!E4],[{'data':('Helper'!F2:F4),'type':'line','backgroundColor':'#4a9d3f','fill':TRUE,'tension':0,'disableJssSimplification':TRUE}],{'disableJssSimplification':TRUE,'plugins':{'legend':{'display':FALSE,'labels':{'color':'#000000'}}},'scales':{'x':{'ticks':{'color':'#000000'}},'y':{'ticks':{'color':'#000000'}}}})",
              '',
              '=SUM(F2:F9)',
              '',
              '=D15/D12-1',
              '',
              '',
              '',
              '',
            ],
            ['', '', '', '', '', '', '', '', '', ''],
            [
              '',
              'Bottom 3 Performers',
              '',
              'Total Value (Prev. Close)',
              '',
              'Total Profit/Loss',
              '',
              '',
              '',
              '',
            ],
            [
              '',
              "=CHART('line',['Helper'!E7,'Helper'!E8,'Helper'!E9],[{'data':('Helper'!F7:F9),'type':'line','label':'Website Page Views','backgroundColor':'#ff0000','fill':TRUE,'tension':0,'disableJssSimplification':TRUE}],{'disableJssSimplification':TRUE,'plugins':{'legend':{'display':FALSE,'labels':{'color':'#000000'}}},'scales':{'x':{'ticks':{'color':'#000000'}},'y':{'ticks':{'color':'#000000'}}}})",
              '',
              '=SUM(G2:G9)',
              '',
              '=SUM(H2:H9)',
              '',
              '',
              '',
              '',
            ],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
          ],
          columns: [
            { width: 65, type: 'text', align: 'left' },
            { width: 223, type: 'text', align: 'left' },
            { width: 77, type: 'text', align: 'left' },
            { width: 169, type: 'text', align: 'left' },
            { width: 147, type: 'text', align: 'left' },
            { width: 143, type: 'text', align: 'left' },
            { width: 167, type: 'text', align: 'left' },
            { width: 150, type: 'text', align: 'left' },
            { width: 75, type: 'text', align: 'left' },
            { width: 60, type: 'text', align: 'left' },
          ],
          rows: [
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 34 },
            { height: 116 },
            { height: 29 },
            { height: 34 },
            { height: 116 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
          ],
          cells: {
            D2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I2: { format: '0.00%' },
            D3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I3: { format: '0.00%' },
            D4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I4: { format: '0.00%' },
            D5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I5: { format: '0.00%' },
            D6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I6: { format: '0.00%' },
            D7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I7: { format: '0.00%' },
            D8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I8: { format: '0.00%' },
            D9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I9: { format: '0.00%' },
            C12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D12: { format: '$#,##0.00' },
            E12: { format: '0.00%' },
            F12: { format: '0.00%' },
            D15: { format: '$#,##0.00' },
            F15: { format: '$#,##0.00' },
            C17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]*  ;_-[$$-409]* -??_ ;_-@_ ',
            },
          },
          style: {
            A1: 54,
            B1: 56,
            C1: 56,
            D1: 56,
            E1: 56,
            F1: 56,
            G1: 56,
            H1: 56,
            I1: 56,
            A2: 2,
            B2: 3,
            C2: 3,
            D2: 3,
            E2: 3,
            F2: 3,
            G2: 3,
            H2: 3,
            I2: 3,
            A3: 2,
            B3: 3,
            C3: 3,
            D3: 3,
            E3: 3,
            F3: 3,
            G3: 3,
            H3: 3,
            I3: 3,
            A4: 2,
            B4: 3,
            C4: 3,
            D4: 3,
            E4: 3,
            F4: 3,
            G4: 3,
            H4: 3,
            I4: 3,
            A5: 2,
            B5: 3,
            C5: 3,
            D5: 3,
            E5: 3,
            F5: 3,
            G5: 3,
            H5: 3,
            I5: 3,
            A6: 2,
            B6: 3,
            C6: 3,
            D6: 3,
            E6: 3,
            F6: 3,
            G6: 3,
            H6: 3,
            I6: 3,
            A7: 2,
            B7: 3,
            C7: 3,
            D7: 3,
            E7: 3,
            F7: 3,
            G7: 3,
            H7: 3,
            I7: 3,
            A8: 2,
            B8: 3,
            C8: 3,
            D8: 3,
            E8: 3,
            F8: 3,
            G8: 3,
            H8: 3,
            I8: 3,
            A9: 2,
            B9: 3,
            C9: 3,
            D9: 3,
            E9: 3,
            F9: 3,
            G9: 3,
            H9: 3,
            I9: 3,
            A11: 21,
            B11: 22,
            C11: 37,
            D11: 45,
            E11: 21,
            F11: 53,
            G11: 26,
            H11: 26,
            I11: 26,
            J11: 26,
            A12: 18,
            C12: 4,
            D12: 46,
            E12: 4,
            F12: 51,
            A13: 18,
            C13: 4,
            D13: 4,
            E13: 4,
            A14: 18,
            B14: 20,
            C14: 4,
            D14: 48,
            E14: 4,
            F14: 54,
            A15: 18,
            C15: 4,
            D15: 46,
            E15: 4,
            F15: 46,
            A16: 11,
            C16: 39,
            D16: 39,
            E16: 11,
            F16: 11,
            A17: 18,
            C17: 4,
            D17: 4,
            E17: 4,
            F17: 4,
            A18: 18,
            A19: 18,
          },
          textOverflow: true,
          defaultColAlign: 'left',
          worksheetName: 'Sheet',
          defaultColWidth: 66,
          tableOverflow: true,
          tableWidth: 1000,
          tableHeight: 620,
          resize: 'both',
          minDimensions: [10, 20],
          worksheetId: '3e6c9903-5a3a-49de-a576-0d1149617487',
          meta: {},
          comments: {},
          cache: {},
          mergeCells: {},
          media: [],
        },
        {
          data: [
            [
              'Ticker',
              'Company Name',
              'Previous Close Price',
              null,
              'Top 3 Performers',
            ],
            [
              'AAPL',
              'Apple Inc.',
              201.45,
              null,
              "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,-1),1)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),1)",
            ],
            [
              'MSFT',
              'Microsoft Corporation',
              472.75,
              null,
              "=INDEX(SORTBY('Sheet'!A3:A10,'Sheet'!I3:I10,-1),2)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),2)",
            ],
            [
              'AMZN',
              'Amazon.com Inc.',
              216.98,
              null,
              "=INDEX(SORTBY('Sheet'!A4:A11,'Sheet'!I4:I11,-1),3)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,-1),3)",
            ],
            ['GOOGL', 'Alphabet Inc. (Class A)', 176.089996],
            [
              'META',
              'Meta Platforms Inc.',
              694.059998,
              null,
              'Bottom 3 Performers',
            ],
            [
              'NVDA',
              'NVIDIA Corporation',
              142.63,
              null,
              "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),1)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),1)",
            ],
            [
              'TSLA',
              'Tesla Inc.',
              308.57999,
              null,
              "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),2)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),2)",
            ],
            [
              'BRK.B',
              'Berkshire Hathaway Inc. (Class B)',
              493.32999,
              null,
              "=INDEX(SORTBY('Sheet'!A2:A9,'Sheet'!I2:I9,1),3)",
              "=INDEX(SORTBY('Sheet'!I2:I9,'Sheet'!I2:I9,1),3)",
            ],
            [null, null, ''],
          ],
          columns: [
            { type: 'text', width: 66, align: 'left' },
            { width: 223, type: 'text', align: 'left' },
            { width: 142, type: 'text', align: 'left' },
            { type: 'text', width: 66, align: 'left' },
            { type: 'text', width: 157, align: 'left' },
            { type: 'text', width: 65, align: 'left' },
            { type: 'text', width: 66, align: 'left' },
          ],
          rows: [
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
            { height: 29 },
          ],
          cells: {
            F2: { format: '0.00%' },
            F3: { format: '0.00%' },
            F4: { format: '0.00%' },
            F7: { format: '0.00%' },
            F8: { format: '0.00%' },
            F9: { format: '0.00%' },
          },
          style: {
            A1: 27,
            B1: 27,
            C1: 16,
            E1: 17,
            A2: 28,
            B2: 12,
            C2: 12,
            E2: 12,
            F2: 12,
            A3: 31,
            B3: 14,
            C3: 14,
            E3: 14,
            F3: 14,
            A4: 31,
            B4: 14,
            C4: 14,
            E4: 15,
            F4: 15,
            A5: 31,
            B5: 14,
            C5: 14,
            A6: 31,
            B6: 14,
            C6: 14,
            E6: 16,
            A7: 31,
            B7: 14,
            C7: 14,
            E7: 12,
            F7: 12,
            A8: 31,
            B8: 14,
            C8: 14,
            E8: 14,
            F8: 14,
            A9: 33,
            B9: 15,
            C9: 15,
            E9: 15,
            F9: 15,
          },
          textOverflow: true,
          defaultColAlign: 'left',
          worksheetName: 'Helper',
          defaultColWidth: 66,
          minDimensions: [7, 10],
          worksheetId: '4e04d16a-e5ce-4c0e-b106-2abbfd252adc',
          meta: {},
          comments: {},
          cache: {},
          mergeCells: { E1: [2, 1], E6: [2, 1] },
        },
      ],
      validations: [
        {
          range: 'SHEET!I2:I9',
          action: 'format',
          criteria: '<',
          type: 'number',
          value: [0],
          format: { color: '#ff0000' },
          dropdown: true,
        },
        {
          range: 'SHEET!I2:I9',
          action: 'format',
          criteria: '>',
          type: 'number',
          value: [0],
          format: { color: '#006100' },
          dropdown: true,
        },
        {
          range: 'SHEET!F12',
          action: 'format',
          criteria: '<',
          type: 'number',
          value: [0],
          format: { color: '#ff0000' },
          dropdown: true,
        },
        {
          range: 'SHEET!F12',
          action: 'format',
          criteria: '>',
          type: 'number',
          value: [0],
          format: { color: '#006100' },
          dropdown: true,
        },
        {
          range: 'SHEET!F15',
          action: 'format',
          criteria: '<',
          type: 'number',
          value: [0],
          format: { color: '#ff0000' },
          dropdown: true,
        },
        {
          range: 'SHEET!F15',
          action: 'format',
          criteria: '>',
          type: 'number',
          value: [0],
          format: { color: '#006100' },
          dropdown: true,
        },
      ],
      toolbar: true,
    });

    interface FinancialItem {
      close: String;
    }

    interface FinancialData {
      [key: string]: FinancialItem;
    }

    fetch('https://jspreadsheet.com/jspreadsheet/demos/financial')
      .then((response) => response.json())
      .then((result: FinancialData) => {
        const closes = Object.values(result).map(
          (item: FinancialItem) => item.close
        );
        closes.unshift('Previous Close Price');
        const helperSheet = instance[1];
        helperSheet.setColumnData(2, closes, true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
```

</div>
