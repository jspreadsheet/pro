title: Jspreadsheet Demo Fiscal Year
keywords: Jspreadsheet, JavaScript data grid, spreadsheet controls, interactive data grid, web-based applications, lightweight, responsive controls, agnostic platform, Angular, React, Vue, spreadsheet-like plugin, documentation, examples, license
description: Plan and review monthly HR budgets and expenses across departments with this structured, finance-ready spreadsheet view.

# Fiscal Year

This demo showcases a fiscal year budget planner using JavaScript spreadsheet UI. With editable monthly fields, categorised expenses, and real-time totals, it provides a solid template for HR or finance applications requiring interactive budget tracking in the browser.

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

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-charts@4.0.0/dist/index.min.js"></script>

<div id="spreadsheet"></div>

<script>

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

jspreadsheet.setExtensions({ formula, charts });

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    "style": [
        "background-color: #C4BD97;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #C4BD97;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;",
        "font-size: 15px;font-family: Open sans;color: #000000;",
        "background-color: #EEECE1;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #EEECE1;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #EEECE1;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;",
        "background-color: #EEECE1;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-bottom: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-bottom: 1px solid #000000;",
        "background-color: #7F7F7F;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #7F7F7F;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color:#c9c987;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#c9c987;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#c37c57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#c37c57;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#c17a57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#c17a57;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#c17a57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#c17a57;font-size:15px;font-family:Open sans;color:#000000;border-bottom:1px solid #000000",
        "background-color:#d1a764;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#d1a764;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#d1a764;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#d1a764;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#ffebee;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#ffebee;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid black;border-top:1px solid black;border-bottom:1px solid black",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid black;border-top:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350",
        "background-color:#d84315;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#d84315;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f4511e;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f4511e;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#ff8a65;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#ff8a65;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#ff9800;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#ff9800;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-family:Open sans;color:#f4fdff;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top",
        "background-color:#f57c00;font-size:15px;font-family:Open sans;color:#f4fdff",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#f4fdff",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#000000;border-bottom:1px solid #000000",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000",
        "background-color:#78909c;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#78909c;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#5d4037;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#5d4037;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#b71c1c;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350",
        "background-color:#b71c1c;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350",
        "background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350",
        "background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350",
        "background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top",
        "background-color:#4dd0e1;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top",
        "background-color:#f17918;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top",
        "background-color:#21f821;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#21f821;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000",
        "background-color:#21f821;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#21f821;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#f4fdff",
        "background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#fbebb7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#fbebb7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#f7fffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#f7fffe;border-top:1px solid #000000",
        "background-color:#fbebb7;font-size:15px;font-weight:bold;font-family:Open sans;color:#f7fffe;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#fbebb7;font-size:15px;font-family:Open sans;color:#f7fffe;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#77c1a7",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #ef5350",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #ef5350",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #020018;border-top:1px solid #020018;border-left:1px solid #020018",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018;border-top:1px solid #020018;border-left:1px solid #020018",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018;border-top:1px solid #020018;border-right:1px solid #020018;border-left:1px solid #020018",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #020018",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018"
    ],
    "worksheets": [
        {
        "data": [
            [
            "",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
            ],
            [
            "Revenue - Product",
            459301,
            421849,
            454942,
            485108,
            481892,
            477166,
            447446,
            447714,
            447719,
            416951,
            482545,
            479651
            ],
            [
            "Revenue - Services",
            804212,
            810103,
            761531,
            798971,
            847777,
            849565,
            769154,
            776036,
            816283,
            798603,
            779462,
            792224
            ],
            [
            "Revenue - Other",
            429849,
            351896,
            422604,
            432253,
            391601,
            441223,
            427618,
            419093,
            444278,
            428409,
            380026,
            361942
            ],
            [
            "Gross Sales",
            "=SUM(B2:B4)",
            "=SUM(C2:C4)",
            "=SUM(D2:D4)",
            "=SUM(E2:E4)",
            "=SUM(F2:F4)",
            "=SUM(G2:G4)",
            "=SUM(H2:H4)",
            "=SUM(I2:I4)",
            "=SUM(J2:J4)",
            "=SUM(K2:K4)",
            "=SUM(L2:L4)",
            "=SUM(M2:M4)"
            ],
            [
            "Cost of Goods Sold",
            101443,
            116772,
            102418,
            101755,
            106734,
            114183,
            117243,
            105868,
            110807,
            110781,
            116224,
            103729
            ],
            [
            "Other Direct Charges",
            46213,
            49227,
            49568,
            48373,
            48350,
            46444,
            42509,
            44390,
            43281,
            49472,
            42179,
            41532
            ],
            [
            "Cost of Sales",
            "=SUM(B6:B7)",
            "=SUM(C6:C7)",
            "=SUM(D6:D7)",
            "=SUM(E6:E7)",
            "=SUM(F6:F7)",
            "=SUM(G6:G7)",
            "=SUM(H6:H7)",
            "=SUM(I6:I7)",
            "=SUM(J6:J7)",
            "=SUM(K6:K7)",
            "=SUM(L6:L7)",
            "=SUM(M6:M7)"
            ],
            [
            "Gross Margin",
            1545706,
            1417849,
            1487091,
            1566204,
            1566186,
            1607327,
            1484466,
            1492585,
            1554192,
            1483710,
            1483630,
            1488556
            ],
            [
            "Payroll",
            255222,
            270347,
            257795,
            275535,
            263382,
            255333,
            269035,
            279715,
            259117,
            260534,
            263517,
            275924
            ],
            [
            "General and Administrative",
            25812,
            29369,
            32788,
            29175,
            29906,
            29375,
            25824,
            33117,
            29412,
            28372,
            28560,
            28001
            ],
            [
            "Travel",
            24346,
            21636,
            22327,
            24345,
            23383,
            23840,
            24941,
            22601,
            23889,
            22471,
            23944,
            21829
            ],
            [
            "Marketing",
            10041,
            10039,
            13024,
            11738,
            10270,
            14058,
            11243,
            10032,
            11598,
            12913,
            10295,
            13882
            ],
            [
            "Outsourcing",
            10891,
            8521,
            11256,
            8159,
            8506,
            11654,
            11647,
            9357,
            11714,
            11179,
            9643,
            9564
            ],
            [
            "Utilities",
            9416,
            8945,
            9000,
            9273,
            9686,
            9438,
            9242,
            8165,
            9789,
            8065,
            9089,
            9591
            ],
            [
            "Operating Expenses",
            "=SUM(B10:B15)",
            "=SUM(C10:C15)",
            "=SUM(D10:D15)",
            "=SUM(E10:E15)",
            "=SUM(F10:F15)",
            "=SUM(G10:G15)",
            "=SUM(H10:H15)",
            "=SUM(I10:I15)",
            "=SUM(J10:J15)",
            "=SUM(K10:K15)",
            "=SUM(L10:L15)",
            "=SUM(M10:M15)"
            ],
            [
            "EBITDA",
            "=B9-B16",
            "=C9-C16",
            "=D9-D16",
            "=E9-E16",
            "=F9-F16",
            "=G9-G16",
            "=H9-H16",
            "=I9-I16",
            "=J9-J16",
            "=K9-K16",
            "=L9-L16",
            "=M9-M16"
            ],
            [
            "Interest Expense",
            1281,
            948,
            1443,
            992,
            1400,
            999,
            821,
            977,
            1324,
            1317,
            1004,
            1007
            ],
            [
            "Interest Income",
            1026,
            1477,
            1004,
            1317,
            1189,
            1120,
            1214,
            1480,
            1404,
            1319,
            1164,
            1253
            ],
            [
            "Depreciation and Amortization",
            659,
            543,
            734,
            718,
            543,
            663,
            536,
            641,
            685,
            552,
            793,
            509
            ],
            [
            "Earnings Before Tax",
            "=B17-SUM(B18:B20)",
            "=C17-SUM(C18:C20)",
            "=D17-SUM(D18:D20)",
            "=E17-SUM(E18:E20)",
            "=F17-SUM(F18:F20)",
            "=G17-SUM(G18:G20)",
            "=H17-SUM(H18:H20)",
            "=I17-SUM(I18:I20)",
            "=J17-SUM(J18:J20)",
            "=K17-SUM(K18:K20)",
            "=L17-SUM(L18:L20)",
            "=M17-SUM(M18:M20)"
            ],
            [
            "Taxes",
            205540,
            181726,
            193753,
            205289,
            207450,
            214724,
            192506,
            192008,
            205371,
            193736,
            193451,
            192015
            ],
            [
            "Net Income",
            1003524,
            887252,
            945975,
            1002297,
            1012849,
            1048363,
            939885,
            937452,
            1002697,
            945890,
            944498,
            937487
            ]
        ],
        "columns": [
            { "width": 205, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
            { "width": 130, "type": "text", "align": "left" },
        ],
        "cells": {
            "B2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            }
        },
        "style": {
            "A1": 72,
            "B1": 72,
            "C1": 72,
            "D1": 72,
            "E1": 72,
            "F1": 72,
            "G1": 72,
            "H1": 72,
            "I1": 72,
            "J1": 72,
            "K1": 72,
            "L1": 72,
            "M1": 72,
            "A2": 2,
            "B2": 3,
            "C2": 3,
            "D2": 3,
            "E2": 3,
            "F2": 3,
            "G2": 3,
            "H2": 3,
            "I2": 3,
            "J2": 3,
            "K2": 3,
            "L2": 3,
            "M2": 3,
            "A3": 2,
            "B3": 3,
            "C3": 3,
            "D3": 3,
            "E3": 3,
            "F3": 3,
            "G3": 3,
            "H3": 3,
            "I3": 3,
            "J3": 3,
            "K3": 3,
            "L3": 3,
            "M3": 3,
            "A4": 2,
            "B4": 3,
            "C4": 3,
            "D4": 3,
            "E4": 3,
            "F4": 3,
            "G4": 3,
            "H4": 3,
            "I4": 3,
            "J4": 3,
            "K4": 3,
            "L4": 3,
            "M4": 3,
            "A5": 81,
            "B5": 82,
            "C5": 82,
            "D5": 82,
            "E5": 82,
            "F5": 82,
            "G5": 82,
            "H5": 82,
            "I5": 82,
            "J5": 82,
            "K5": 82,
            "L5": 82,
            "M5": 82,
            "A6": 2,
            "B6": 3,
            "C6": 3,
            "D6": 3,
            "E6": 3,
            "F6": 3,
            "G6": 3,
            "H6": 3,
            "I6": 3,
            "J6": 3,
            "K6": 3,
            "L6": 3,
            "M6": 3,
            "A7": 2,
            "B7": 3,
            "C7": 3,
            "D7": 3,
            "E7": 3,
            "F7": 3,
            "G7": 3,
            "H7": 3,
            "I7": 3,
            "J7": 3,
            "K7": 3,
            "L7": 3,
            "M7": 3,
            "A8": 83,
            "B8": 84,
            "C8": 84,
            "D8": 84,
            "E8": 84,
            "F8": 84,
            "G8": 84,
            "H8": 84,
            "I8": 84,
            "J8": 84,
            "K8": 84,
            "L8": 84,
            "M8": 84,
            "A9": 85,
            "B9": 86,
            "C9": 86,
            "D9": 86,
            "E9": 86,
            "F9": 86,
            "G9": 86,
            "H9": 86,
            "I9": 86,
            "J9": 86,
            "K9": 86,
            "L9": 86,
            "M9": 86,
            "A10": 2,
            "B10": 3,
            "C10": 3,
            "D10": 3,
            "E10": 3,
            "F10": 3,
            "G10": 3,
            "H10": 3,
            "I10": 3,
            "J10": 3,
            "K10": 3,
            "L10": 3,
            "M10": 3,
            "A11": 2,
            "B11": 3,
            "C11": 3,
            "D11": 3,
            "E11": 3,
            "F11": 3,
            "G11": 3,
            "H11": 3,
            "I11": 3,
            "J11": 3,
            "K11": 3,
            "L11": 3,
            "M11": 3,
            "A12": 2,
            "B12": 3,
            "C12": 3,
            "D12": 3,
            "E12": 3,
            "F12": 3,
            "G12": 3,
            "H12": 3,
            "I12": 3,
            "J12": 3,
            "K12": 3,
            "L12": 3,
            "M12": 3,
            "A13": 2,
            "B13": 3,
            "C13": 3,
            "D13": 3,
            "E13": 3,
            "F13": 3,
            "G13": 3,
            "H13": 3,
            "I13": 3,
            "J13": 3,
            "K13": 3,
            "L13": 3,
            "M13": 3,
            "A14": 2,
            "B14": 3,
            "C14": 3,
            "D14": 3,
            "E14": 3,
            "F14": 3,
            "G14": 3,
            "H14": 3,
            "I14": 3,
            "J14": 3,
            "K14": 3,
            "L14": 3,
            "M14": 3,
            "A15": 2,
            "B15": 3,
            "C15": 3,
            "D15": 3,
            "E15": 3,
            "F15": 3,
            "G15": 3,
            "H15": 3,
            "I15": 3,
            "J15": 3,
            "K15": 3,
            "L15": 3,
            "M15": 3,
            "A16": 99,
            "B16": 100,
            "C16": 100,
            "D16": 100,
            "E16": 100,
            "F16": 100,
            "G16": 100,
            "H16": 100,
            "I16": 100,
            "J16": 100,
            "K16": 100,
            "L16": 100,
            "M16": 100,
            "A17": 79,
            "B17": 80,
            "C17": 80,
            "D17": 80,
            "E17": 80,
            "F17": 80,
            "G17": 80,
            "H17": 80,
            "I17": 80,
            "J17": 80,
            "K17": 80,
            "L17": 80,
            "M17": 80,
            "A18": 2,
            "B18": 3,
            "C18": 3,
            "D18": 3,
            "E18": 3,
            "F18": 3,
            "G18": 3,
            "H18": 3,
            "I18": 3,
            "J18": 3,
            "K18": 3,
            "L18": 3,
            "M18": 3,
            "A19": 2,
            "B19": 3,
            "C19": 3,
            "D19": 3,
            "E19": 3,
            "F19": 3,
            "G19": 3,
            "H19": 3,
            "I19": 3,
            "J19": 3,
            "K19": 3,
            "L19": 3,
            "M19": 3,
            "A20": 2,
            "B20": 3,
            "C20": 3,
            "D20": 3,
            "E20": 3,
            "F20": 3,
            "G20": 3,
            "H20": 3,
            "I20": 3,
            "J20": 3,
            "K20": 3,
            "L20": 3,
            "M20": 3,
            "A21": 85,
            "B21": 86,
            "C21": 86,
            "D21": 86,
            "E21": 86,
            "F21": 86,
            "G21": 86,
            "H21": 86,
            "I21": 86,
            "J21": 86,
            "K21": 86,
            "L21": 86,
            "M21": 86,
            "A22": 2,
            "B22": 3,
            "C22": 3,
            "D22": 3,
            "E22": 3,
            "F22": 3,
            "G22": 3,
            "H22": 3,
            "I22": 3,
            "J22": 3,
            "K22": 3,
            "L22": 3,
            "M22": 3,
            "A23": 91,
            "B23": 92,
            "C23": 92,
            "D23": 92,
            "E23": 92,
            "F23": 92,
            "G23": 92,
            "H23": 92,
            "I23": 92,
            "J23": 92,
            "K23": 92,
            "L23": 92,
            "M23": 92
        },
        "textOverflow": true,
        "stripHTML": false,
        "defaultColAlign": "left",
        "worksheetName": "Sheet1",
        "defaultColWidth": 66,
        "tableOverflow": true,
        "tableWidth": 1300,
        "tableHeight": 620,
        "resize": "both",
        "minDimensions": [13, 25],
        "media": [
            {
            "id": "33ff7359-81bd-4b71-a99e-1491674ca74f",
            "type": "chart",
            "options": {
                "orientation": false,
                "range": "Sheet1!B1:M5",
                "headers": false,
                "title": {
                "text": "Gross Sales",
                "font": { "size": 19, "color": "#595959" }
                },
                "labels": 0,
                "datasets": [4],
                "series": [{ "color": "#f07818" }],
                "axis": {
                "base": {
                    "grid": { "display": false },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                },
                "side": {
                    "grid": { "width": 1, "color": "#D9D9D9" },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                }
                },
                "type": "column",
                "legend": { "display": false }
            },
            "cellAnchor": "A25",
            "left": 4,
            "top": 2,
            "width": 488,
            "height": 372,
            "zIndex": 3
            },
            {
            "id": "228b778f-ef36-432c-b79d-96897eca5870",
            "type": "chart",
            "options": {
                "orientation": false,
                "range": "Sheet1!B1:M23",
                "headers": false,
                "title": {
                "text": "Net Income by Month",
                "font": { "size": 19, "color": "#595959" }
                },
                "labels": 0,
                "datasets": [22],
                "series": [
                {
                    "drawNullValues": false,
                    "borderColor": "#78c0a8",
                    "line": { "width": 1 },
                    "color": "#78c0a8",
                    "point": { "style": false }
                }
                ],
                "axis": {
                "base": {
                    "grid": { "display": false },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                },
                "side": {
                    "grid": { "width": 1, "color": "#D9D9D9" },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                }
                },
                "type": "line",
                "legend": { "display": false }
            },
            "cellAnchor": "D25",
            "left": 76,
            "top": 4,
            "width": 488,
            "height": 372,
            "zIndex": 3,
            "rotate": 0
            },
            {
            "id": "c535c6b7-90fe-4c19-a006-c3fc0c22a282",
            "type": "chart",
            "options": {
                "orientation": false,
                "range": "Sheet1!A1:M15",
                "headers": true,
                "title": {
                "text": "Operating Expenses Breakdown by Month",
                "font": { "size": 19, "color": "#595959" }
                },
                "labels": 0,
                "datasets": [9, 10, 11, 12, 13, 14],
                "series": [
                { "color": "#f0a830" },
                { "color": "#f07818" },
                { "color": "#78c0a8" },
                { "color": "#fcebb6" },
                { "color": "#5e412f" },
                { "color": "#276A7C" }
                ],
                "axis": {
                "base": {
                    "grid": { "display": false },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                },
                "side": {
                    "grid": { "width": 1, "color": "#D9D9D9" },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" },
                    "min": 200000,
                    "forceTheLimits": true
                }
                },
                "type": "stacked-column",
                "legend": {
                "display": true,
                "position": "right",
                "labels": { "font": { "size": 12, "color": "#595959" } }
                }
            },
            "cellAnchor": "I25",
            "left": 11,
            "top": 2,
            "width": 556,
            "height": 372,
            "zIndex": 3
            }
        ],
        "worksheetId": "056b47d0-03f7-4ae2-b3c2-a4ceaa59c1b2",
        "meta": {},
        "comments": {},
        "cache": {},
        "mergeCells": {}
        }
    ],
    "bar": true,
    "toolbar": true,
    "validations": []
    }
);

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
    jspreadsheet.setExtensions({ formula, charts });


    const instance = jspreadsheet(spreadsheetRef.current, {
        "style": [
            "background-color: #C4BD97;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
            "background-color: #C4BD97;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
            "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;",
            "font-size: 15px;font-family: Open sans;color: #000000;",
            "background-color: #EEECE1;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
            "background-color: #EEECE1;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
            "background-color: #EEECE1;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;",
            "background-color: #EEECE1;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;",
            "background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
            "background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
            "background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;",
            "background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;",
            "background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-bottom: 1px solid #000000;",
            "background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-bottom: 1px solid #000000;",
            "background-color: #7F7F7F;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
            "background-color: #7F7F7F;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
            "background-color:#c9c987;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#c9c987;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#c37c57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#c37c57;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#c17a57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#c17a57;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
            "background-color:#c17a57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
            "background-color:#c17a57;font-size:15px;font-family:Open sans;color:#000000;border-bottom:1px solid #000000",
            "background-color:#d1a764;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#d1a764;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
            "background-color:#d1a764;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#d1a764;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#ffebee;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#ffebee;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid black;border-top:1px solid black;border-bottom:1px solid black",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid black;border-top:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350",
            "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350",
            "background-color:#d84315;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#d84315;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#f4511e;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#f4511e;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#ff8a65;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#ff8a65;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#ff9800;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#ff9800;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#f57c00;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#f57c00;font-size:15px;font-family:Open sans;color:#f4fdff;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top",
            "background-color:#f57c00;font-size:15px;font-family:Open sans;color:#f4fdff",
            "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top",
            "background-color:#212121;font-size:15px;font-family:Open sans;color:#f4fdff",
            "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#212121;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
            "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
            "background-color:#212121;font-size:15px;font-family:Open sans;color:#000000;border-bottom:1px solid #000000",
            "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#212121;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000",
            "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
            "background-color:#212121;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000",
            "background-color:#78909c;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#78909c;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
            "background-color:#5d4037;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#5d4037;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
            "background-color:#b71c1c;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350",
            "background-color:#b71c1c;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350",
            "background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350",
            "background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350",
            "background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top",
            "background-color:#4dd0e1;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top",
            "background-color:#f17918;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top",
            "background-color:#21f821;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#21f821;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000",
            "background-color:#21f821;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
            "background-color:#21f821;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000",
            "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000",
            "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
            "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000",
            "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top",
            "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#f4fdff",
            "background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
            "background-color:#fbebb7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#fbebb7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#f7fffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
            "background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#f7fffe;border-top:1px solid #000000",
            "background-color:#fbebb7;font-size:15px;font-weight:bold;font-family:Open sans;color:#f7fffe;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#fbebb7;font-size:15px;font-family:Open sans;color:#f7fffe;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
            "background-color:#77c1a7",
            "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #ef5350",
            "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #ef5350",
            "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #020018;border-top:1px solid #020018;border-left:1px solid #020018",
            "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018;border-top:1px solid #020018;border-left:1px solid #020018",
            "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018;border-top:1px solid #020018;border-right:1px solid #020018;border-left:1px solid #020018",
            "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #020018",
            "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018"
        ],
        "worksheets": [
            {
            "data": [
                [
                "",
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
                ],
                [
                "Revenue - Product",
                459301,
                421849,
                454942,
                485108,
                481892,
                477166,
                447446,
                447714,
                447719,
                416951,
                482545,
                479651
                ],
                [
                "Revenue - Services",
                804212,
                810103,
                761531,
                798971,
                847777,
                849565,
                769154,
                776036,
                816283,
                798603,
                779462,
                792224
                ],
                [
                "Revenue - Other",
                429849,
                351896,
                422604,
                432253,
                391601,
                441223,
                427618,
                419093,
                444278,
                428409,
                380026,
                361942
                ],
                [
                "Gross Sales",
                "=SUM(B2:B4)",
                "=SUM(C2:C4)",
                "=SUM(D2:D4)",
                "=SUM(E2:E4)",
                "=SUM(F2:F4)",
                "=SUM(G2:G4)",
                "=SUM(H2:H4)",
                "=SUM(I2:I4)",
                "=SUM(J2:J4)",
                "=SUM(K2:K4)",
                "=SUM(L2:L4)",
                "=SUM(M2:M4)"
                ],
                [
                "Cost of Goods Sold",
                101443,
                116772,
                102418,
                101755,
                106734,
                114183,
                117243,
                105868,
                110807,
                110781,
                116224,
                103729
                ],
                [
                "Other Direct Charges",
                46213,
                49227,
                49568,
                48373,
                48350,
                46444,
                42509,
                44390,
                43281,
                49472,
                42179,
                41532
                ],
                [
                "Cost of Sales",
                "=SUM(B6:B7)",
                "=SUM(C6:C7)",
                "=SUM(D6:D7)",
                "=SUM(E6:E7)",
                "=SUM(F6:F7)",
                "=SUM(G6:G7)",
                "=SUM(H6:H7)",
                "=SUM(I6:I7)",
                "=SUM(J6:J7)",
                "=SUM(K6:K7)",
                "=SUM(L6:L7)",
                "=SUM(M6:M7)"
                ],
                [
                "Gross Margin",
                1545706,
                1417849,
                1487091,
                1566204,
                1566186,
                1607327,
                1484466,
                1492585,
                1554192,
                1483710,
                1483630,
                1488556
                ],
                [
                "Payroll",
                255222,
                270347,
                257795,
                275535,
                263382,
                255333,
                269035,
                279715,
                259117,
                260534,
                263517,
                275924
                ],
                [
                "General and Administrative",
                25812,
                29369,
                32788,
                29175,
                29906,
                29375,
                25824,
                33117,
                29412,
                28372,
                28560,
                28001
                ],
                [
                "Travel",
                24346,
                21636,
                22327,
                24345,
                23383,
                23840,
                24941,
                22601,
                23889,
                22471,
                23944,
                21829
                ],
                [
                "Marketing",
                10041,
                10039,
                13024,
                11738,
                10270,
                14058,
                11243,
                10032,
                11598,
                12913,
                10295,
                13882
                ],
                [
                "Outsourcing",
                10891,
                8521,
                11256,
                8159,
                8506,
                11654,
                11647,
                9357,
                11714,
                11179,
                9643,
                9564
                ],
                [
                "Utilities",
                9416,
                8945,
                9000,
                9273,
                9686,
                9438,
                9242,
                8165,
                9789,
                8065,
                9089,
                9591
                ],
                [
                "Operating Expenses",
                "=SUM(B10:B15)",
                "=SUM(C10:C15)",
                "=SUM(D10:D15)",
                "=SUM(E10:E15)",
                "=SUM(F10:F15)",
                "=SUM(G10:G15)",
                "=SUM(H10:H15)",
                "=SUM(I10:I15)",
                "=SUM(J10:J15)",
                "=SUM(K10:K15)",
                "=SUM(L10:L15)",
                "=SUM(M10:M15)"
                ],
                [
                "EBITDA",
                "=B9-B16",
                "=C9-C16",
                "=D9-D16",
                "=E9-E16",
                "=F9-F16",
                "=G9-G16",
                "=H9-H16",
                "=I9-I16",
                "=J9-J16",
                "=K9-K16",
                "=L9-L16",
                "=M9-M16"
                ],
                [
                "Interest Expense",
                1281,
                948,
                1443,
                992,
                1400,
                999,
                821,
                977,
                1324,
                1317,
                1004,
                1007
                ],
                [
                "Interest Income",
                1026,
                1477,
                1004,
                1317,
                1189,
                1120,
                1214,
                1480,
                1404,
                1319,
                1164,
                1253
                ],
                [
                "Depreciation and Amortization",
                659,
                543,
                734,
                718,
                543,
                663,
                536,
                641,
                685,
                552,
                793,
                509
                ],
                [
                "Earnings Before Tax",
                "=B17-SUM(B18:B20)",
                "=C17-SUM(C18:C20)",
                "=D17-SUM(D18:D20)",
                "=E17-SUM(E18:E20)",
                "=F17-SUM(F18:F20)",
                "=G17-SUM(G18:G20)",
                "=H17-SUM(H18:H20)",
                "=I17-SUM(I18:I20)",
                "=J17-SUM(J18:J20)",
                "=K17-SUM(K18:K20)",
                "=L17-SUM(L18:L20)",
                "=M17-SUM(M18:M20)"
                ],
                [
                "Taxes",
                205540,
                181726,
                193753,
                205289,
                207450,
                214724,
                192506,
                192008,
                205371,
                193736,
                193451,
                192015
                ],
                [
                "Net Income",
                1003524,
                887252,
                945975,
                1002297,
                1012849,
                1048363,
                939885,
                937452,
                1002697,
                945890,
                944498,
                937487
                ]
            ],
            "columns": [
                { "width": 205, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" },
                { "width": 113, "type": "text", "align": "left" }
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
                { "height": 30 },
                { "height": 30 },
                { "height": 30 },
                { "height": 30 },
                { "height": 30 },
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
                { "height": 29 }
            ],
            "cells": {
                "B2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M2": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M3": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M4": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M5": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M6": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M7": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M8": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M9": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M10": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M11": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M12": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M13": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M14": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M15": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M16": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M17": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M18": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M19": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M20": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M21": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M22": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "B23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "C23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "D23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "E23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "F23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "G23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "H23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "I23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "J23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "K23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "L23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                },
                "M23": {
                "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
                }
            },
            "style": {
                "A1": 72,
                "B1": 72,
                "C1": 72,
                "D1": 72,
                "E1": 72,
                "F1": 72,
                "G1": 72,
                "H1": 72,
                "I1": 72,
                "J1": 72,
                "K1": 72,
                "L1": 72,
                "M1": 72,
                "A2": 2,
                "B2": 3,
                "C2": 3,
                "D2": 3,
                "E2": 3,
                "F2": 3,
                "G2": 3,
                "H2": 3,
                "I2": 3,
                "J2": 3,
                "K2": 3,
                "L2": 3,
                "M2": 3,
                "A3": 2,
                "B3": 3,
                "C3": 3,
                "D3": 3,
                "E3": 3,
                "F3": 3,
                "G3": 3,
                "H3": 3,
                "I3": 3,
                "J3": 3,
                "K3": 3,
                "L3": 3,
                "M3": 3,
                "A4": 2,
                "B4": 3,
                "C4": 3,
                "D4": 3,
                "E4": 3,
                "F4": 3,
                "G4": 3,
                "H4": 3,
                "I4": 3,
                "J4": 3,
                "K4": 3,
                "L4": 3,
                "M4": 3,
                "A5": 81,
                "B5": 82,
                "C5": 82,
                "D5": 82,
                "E5": 82,
                "F5": 82,
                "G5": 82,
                "H5": 82,
                "I5": 82,
                "J5": 82,
                "K5": 82,
                "L5": 82,
                "M5": 82,
                "A6": 2,
                "B6": 3,
                "C6": 3,
                "D6": 3,
                "E6": 3,
                "F6": 3,
                "G6": 3,
                "H6": 3,
                "I6": 3,
                "J6": 3,
                "K6": 3,
                "L6": 3,
                "M6": 3,
                "A7": 2,
                "B7": 3,
                "C7": 3,
                "D7": 3,
                "E7": 3,
                "F7": 3,
                "G7": 3,
                "H7": 3,
                "I7": 3,
                "J7": 3,
                "K7": 3,
                "L7": 3,
                "M7": 3,
                "A8": 83,
                "B8": 84,
                "C8": 84,
                "D8": 84,
                "E8": 84,
                "F8": 84,
                "G8": 84,
                "H8": 84,
                "I8": 84,
                "J8": 84,
                "K8": 84,
                "L8": 84,
                "M8": 84,
                "A9": 85,
                "B9": 86,
                "C9": 86,
                "D9": 86,
                "E9": 86,
                "F9": 86,
                "G9": 86,
                "H9": 86,
                "I9": 86,
                "J9": 86,
                "K9": 86,
                "L9": 86,
                "M9": 86,
                "A10": 2,
                "B10": 3,
                "C10": 3,
                "D10": 3,
                "E10": 3,
                "F10": 3,
                "G10": 3,
                "H10": 3,
                "I10": 3,
                "J10": 3,
                "K10": 3,
                "L10": 3,
                "M10": 3,
                "A11": 2,
                "B11": 3,
                "C11": 3,
                "D11": 3,
                "E11": 3,
                "F11": 3,
                "G11": 3,
                "H11": 3,
                "I11": 3,
                "J11": 3,
                "K11": 3,
                "L11": 3,
                "M11": 3,
                "A12": 2,
                "B12": 3,
                "C12": 3,
                "D12": 3,
                "E12": 3,
                "F12": 3,
                "G12": 3,
                "H12": 3,
                "I12": 3,
                "J12": 3,
                "K12": 3,
                "L12": 3,
                "M12": 3,
                "A13": 2,
                "B13": 3,
                "C13": 3,
                "D13": 3,
                "E13": 3,
                "F13": 3,
                "G13": 3,
                "H13": 3,
                "I13": 3,
                "J13": 3,
                "K13": 3,
                "L13": 3,
                "M13": 3,
                "A14": 2,
                "B14": 3,
                "C14": 3,
                "D14": 3,
                "E14": 3,
                "F14": 3,
                "G14": 3,
                "H14": 3,
                "I14": 3,
                "J14": 3,
                "K14": 3,
                "L14": 3,
                "M14": 3,
                "A15": 2,
                "B15": 3,
                "C15": 3,
                "D15": 3,
                "E15": 3,
                "F15": 3,
                "G15": 3,
                "H15": 3,
                "I15": 3,
                "J15": 3,
                "K15": 3,
                "L15": 3,
                "M15": 3,
                "A16": 99,
                "B16": 100,
                "C16": 100,
                "D16": 100,
                "E16": 100,
                "F16": 100,
                "G16": 100,
                "H16": 100,
                "I16": 100,
                "J16": 100,
                "K16": 100,
                "L16": 100,
                "M16": 100,
                "A17": 79,
                "B17": 80,
                "C17": 80,
                "D17": 80,
                "E17": 80,
                "F17": 80,
                "G17": 80,
                "H17": 80,
                "I17": 80,
                "J17": 80,
                "K17": 80,
                "L17": 80,
                "M17": 80,
                "A18": 2,
                "B18": 3,
                "C18": 3,
                "D18": 3,
                "E18": 3,
                "F18": 3,
                "G18": 3,
                "H18": 3,
                "I18": 3,
                "J18": 3,
                "K18": 3,
                "L18": 3,
                "M18": 3,
                "A19": 2,
                "B19": 3,
                "C19": 3,
                "D19": 3,
                "E19": 3,
                "F19": 3,
                "G19": 3,
                "H19": 3,
                "I19": 3,
                "J19": 3,
                "K19": 3,
                "L19": 3,
                "M19": 3,
                "A20": 2,
                "B20": 3,
                "C20": 3,
                "D20": 3,
                "E20": 3,
                "F20": 3,
                "G20": 3,
                "H20": 3,
                "I20": 3,
                "J20": 3,
                "K20": 3,
                "L20": 3,
                "M20": 3,
                "A21": 85,
                "B21": 86,
                "C21": 86,
                "D21": 86,
                "E21": 86,
                "F21": 86,
                "G21": 86,
                "H21": 86,
                "I21": 86,
                "J21": 86,
                "K21": 86,
                "L21": 86,
                "M21": 86,
                "A22": 2,
                "B22": 3,
                "C22": 3,
                "D22": 3,
                "E22": 3,
                "F22": 3,
                "G22": 3,
                "H22": 3,
                "I22": 3,
                "J22": 3,
                "K22": 3,
                "L22": 3,
                "M22": 3,
                "A23": 91,
                "B23": 92,
                "C23": 92,
                "D23": 92,
                "E23": 92,
                "F23": 92,
                "G23": 92,
                "H23": 92,
                "I23": 92,
                "J23": 92,
                "K23": 92,
                "L23": 92,
                "M23": 92
            },
            "textOverflow": true,
            "stripHTML": false,
            "defaultColAlign": "left",
            "worksheetName": "Sheet1",
            "defaultColWidth": 66,
            "tableOverflow": true,
            "tableWidth": 1300,
            "tableHeight": 620,
            "resize": "both",
            "minDimensions": [13, 25],
            "media": [
                {
                "id": "33ff7359-81bd-4b71-a99e-1491674ca74f",
                "type": "chart",
                "options": {
                    "orientation": false,
                    "range": "Sheet1!B1:M5",
                    "headers": false,
                    "title": {
                    "text": "Gross Sales",
                    "font": { "size": 19, "color": "#595959" }
                    },
                    "labels": 0,
                    "datasets": [4],
                    "series": [{ "color": "#f07818" }],
                    "axis": {
                    "base": {
                        "grid": { "display": false },
                        "ticks": { "display": false },
                        "labels": { "size": 12, "color": "#595959" }
                    },
                    "side": {
                        "grid": { "width": 1, "color": "#D9D9D9" },
                        "ticks": { "display": false },
                        "labels": { "size": 12, "color": "#595959" }
                    }
                    },
                    "type": "column",
                    "legend": { "display": false }
                },
                "cellAnchor": "A25",
                "left": 4,
                "top": 2,
                "width": 488,
                "height": 372,
                "zIndex": 3
                },
                {
                "id": "228b778f-ef36-432c-b79d-96897eca5870",
                "type": "chart",
                "options": {
                    "orientation": false,
                    "range": "Sheet1!B1:M23",
                    "headers": false,
                    "title": {
                    "text": "Net Income by Month",
                    "font": { "size": 19, "color": "#595959" }
                    },
                    "labels": 0,
                    "datasets": [22],
                    "series": [
                    {
                        "drawNullValues": false,
                        "borderColor": "#78c0a8",
                        "line": { "width": 1 },
                        "color": "#78c0a8",
                        "point": { "style": false }
                    }
                    ],
                    "axis": {
                    "base": {
                        "grid": { "display": false },
                        "ticks": { "display": false },
                        "labels": { "size": 12, "color": "#595959" }
                    },
                    "side": {
                        "grid": { "width": 1, "color": "#D9D9D9" },
                        "ticks": { "display": false },
                        "labels": { "size": 12, "color": "#595959" }
                    }
                    },
                    "type": "line",
                    "legend": { "display": false }
                },
                "cellAnchor": "D25",
                "left": 76,
                "top": 4,
                "width": 488,
                "height": 372,
                "zIndex": 3,
                "rotate": 0
                },
                {
                "id": "c535c6b7-90fe-4c19-a006-c3fc0c22a282",
                "type": "chart",
                "options": {
                    "orientation": false,
                    "range": "Sheet1!A1:M15",
                    "headers": true,
                    "title": {
                    "text": "Operating Expenses Breakdown by Month",
                    "font": { "size": 19, "color": "#595959" }
                    },
                    "labels": 0,
                    "datasets": [9, 10, 11, 12, 13, 14],
                    "series": [
                    { "color": "#f0a830" },
                    { "color": "#f07818" },
                    { "color": "#78c0a8" },
                    { "color": "#fcebb6" },
                    { "color": "#5e412f" },
                    { "color": "#276A7C" }
                    ],
                    "axis": {
                    "base": {
                        "grid": { "display": false },
                        "ticks": { "display": false },
                        "labels": { "size": 12, "color": "#595959" }
                    },
                    "side": {
                        "grid": { "width": 1, "color": "#D9D9D9" },
                        "ticks": { "display": false },
                        "labels": { "size": 12, "color": "#595959" },
                        "min": 200000,
                        "forceTheLimits": true
                    }
                    },
                    "type": "stacked-column",
                    "legend": {
                    "display": true,
                    "position": "right",
                    "labels": { "font": { "size": 12, "color": "#595959" } }
                    }
                },
                "cellAnchor": "I25",
                "left": 11,
                "top": 2,
                "width": 556,
                "height": 372,
                "zIndex": 3
                }
            ],
            "worksheetId": "056b47d0-03f7-4ae2-b3c2-a4ceaa59c1b2",
            "meta": {},
            "comments": {},
            "cache": {},
            "mergeCells": {}
            }
        ],
        "bar": true,
        "toolbar": true,
        "validations": []
        }
);

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
    :worksheets="worksheets"
    :styles="globalStyle"
    toolbar="true" />
</template>

<script>
import { Spreadsheet, Worksheet } from "@jspreadsheet/vue";
import jspreadsheet from 'jspreadsheet';
import formula from '@jspreadsheet/formula-pro';
import charts from '@jspreadsheet/charts';
import studio from '@lemonadejs/studio';
import chartjs from '@jspreadsheet/formula-charts';

import '@lemonadejs/studio';
import '@lemonadejs/studio/dist/style.css';
import 'jsuites/dist/jsuites.css';
import 'jspreadsheet/dist/jspreadsheet.css';
import '@jspreadsheet/formula-charts';
import '@jspreadsheet/charts/dist/style.css';

jspreadsheet.setLicense('###license###');
jspreadsheet.setExtensions({ formula, charts });

export default {
  components: { Spreadsheet, Worksheet },
  data() {
    return {
      // Set your JSS license key (The following key only works for one day)
      license: '###license###',
      "globalStyle": [
        "background-color: #C4BD97;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #C4BD97;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;",
        "font-size: 15px;font-family: Open sans;color: #000000;",
        "background-color: #EEECE1;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #EEECE1;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #EEECE1;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;",
        "background-color: #EEECE1;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-bottom: 1px solid #000000;",
        "background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-bottom: 1px solid #000000;",
        "background-color: #7F7F7F;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color: #7F7F7F;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;",
        "background-color:#c9c987;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#c9c987;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#c37c57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#c37c57;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#c17a57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#c17a57;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#c17a57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#c17a57;font-size:15px;font-family:Open sans;color:#000000;border-bottom:1px solid #000000",
        "background-color:#d1a764;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#d1a764;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#d1a764;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#d1a764;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#ffebee;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#ffebee;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid black;border-top:1px solid black;border-bottom:1px solid black",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid black;border-top:1px solid black;border-bottom:1px solid black;border-left:1px solid black",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350",
        "background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350",
        "background-color:#d84315;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#d84315;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f4511e;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f4511e;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#ff8a65;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#ff8a65;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#ff9800;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#ff9800;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-family:Open sans;color:#f4fdff;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top",
        "background-color:#f57c00;font-size:15px;font-family:Open sans;color:#f4fdff",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#f4fdff",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#000000;border-bottom:1px solid #000000",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000",
        "background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#212121;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000",
        "background-color:#78909c;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#78909c;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#5d4037;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#5d4037;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#b71c1c;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350",
        "background-color:#b71c1c;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350",
        "background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350",
        "background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350",
        "background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top",
        "background-color:#4dd0e1;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top",
        "background-color:#f17918;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top",
        "background-color:#21f821;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#21f821;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000",
        "background-color:#21f821;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#21f821;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#f4fdff",
        "background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000",
        "background-color:#fbebb7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#fbebb7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#f7fffe;text-align:center;vertical-align:top;border-top:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#f7fffe;border-top:1px solid #000000",
        "background-color:#fbebb7;font-size:15px;font-weight:bold;font-family:Open sans;color:#f7fffe;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#fbebb7;font-size:15px;font-family:Open sans;color:#f7fffe;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000",
        "background-color:#77c1a7",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #ef5350",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #ef5350",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #020018;border-top:1px solid #020018;border-left:1px solid #020018",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018;border-top:1px solid #020018;border-left:1px solid #020018",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018;border-top:1px solid #020018;border-right:1px solid #020018;border-left:1px solid #020018",
        "background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #020018",
        "background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018"
    ],
    "worksheets": [
        {
        "data": [
            [
            "",
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
            ],
            [
            "Revenue - Product",
            459301,
            421849,
            454942,
            485108,
            481892,
            477166,
            447446,
            447714,
            447719,
            416951,
            482545,
            479651
            ],
            [
            "Revenue - Services",
            804212,
            810103,
            761531,
            798971,
            847777,
            849565,
            769154,
            776036,
            816283,
            798603,
            779462,
            792224
            ],
            [
            "Revenue - Other",
            429849,
            351896,
            422604,
            432253,
            391601,
            441223,
            427618,
            419093,
            444278,
            428409,
            380026,
            361942
            ],
            [
            "Gross Sales",
            "=SUM(B2:B4)",
            "=SUM(C2:C4)",
            "=SUM(D2:D4)",
            "=SUM(E2:E4)",
            "=SUM(F2:F4)",
            "=SUM(G2:G4)",
            "=SUM(H2:H4)",
            "=SUM(I2:I4)",
            "=SUM(J2:J4)",
            "=SUM(K2:K4)",
            "=SUM(L2:L4)",
            "=SUM(M2:M4)"
            ],
            [
            "Cost of Goods Sold",
            101443,
            116772,
            102418,
            101755,
            106734,
            114183,
            117243,
            105868,
            110807,
            110781,
            116224,
            103729
            ],
            [
            "Other Direct Charges",
            46213,
            49227,
            49568,
            48373,
            48350,
            46444,
            42509,
            44390,
            43281,
            49472,
            42179,
            41532
            ],
            [
            "Cost of Sales",
            "=SUM(B6:B7)",
            "=SUM(C6:C7)",
            "=SUM(D6:D7)",
            "=SUM(E6:E7)",
            "=SUM(F6:F7)",
            "=SUM(G6:G7)",
            "=SUM(H6:H7)",
            "=SUM(I6:I7)",
            "=SUM(J6:J7)",
            "=SUM(K6:K7)",
            "=SUM(L6:L7)",
            "=SUM(M6:M7)"
            ],
            [
            "Gross Margin",
            1545706,
            1417849,
            1487091,
            1566204,
            1566186,
            1607327,
            1484466,
            1492585,
            1554192,
            1483710,
            1483630,
            1488556
            ],
            [
            "Payroll",
            255222,
            270347,
            257795,
            275535,
            263382,
            255333,
            269035,
            279715,
            259117,
            260534,
            263517,
            275924
            ],
            [
            "General and Administrative",
            25812,
            29369,
            32788,
            29175,
            29906,
            29375,
            25824,
            33117,
            29412,
            28372,
            28560,
            28001
            ],
            [
            "Travel",
            24346,
            21636,
            22327,
            24345,
            23383,
            23840,
            24941,
            22601,
            23889,
            22471,
            23944,
            21829
            ],
            [
            "Marketing",
            10041,
            10039,
            13024,
            11738,
            10270,
            14058,
            11243,
            10032,
            11598,
            12913,
            10295,
            13882
            ],
            [
            "Outsourcing",
            10891,
            8521,
            11256,
            8159,
            8506,
            11654,
            11647,
            9357,
            11714,
            11179,
            9643,
            9564
            ],
            [
            "Utilities",
            9416,
            8945,
            9000,
            9273,
            9686,
            9438,
            9242,
            8165,
            9789,
            8065,
            9089,
            9591
            ],
            [
            "Operating Expenses",
            "=SUM(B10:B15)",
            "=SUM(C10:C15)",
            "=SUM(D10:D15)",
            "=SUM(E10:E15)",
            "=SUM(F10:F15)",
            "=SUM(G10:G15)",
            "=SUM(H10:H15)",
            "=SUM(I10:I15)",
            "=SUM(J10:J15)",
            "=SUM(K10:K15)",
            "=SUM(L10:L15)",
            "=SUM(M10:M15)"
            ],
            [
            "EBITDA",
            "=B9-B16",
            "=C9-C16",
            "=D9-D16",
            "=E9-E16",
            "=F9-F16",
            "=G9-G16",
            "=H9-H16",
            "=I9-I16",
            "=J9-J16",
            "=K9-K16",
            "=L9-L16",
            "=M9-M16"
            ],
            [
            "Interest Expense",
            1281,
            948,
            1443,
            992,
            1400,
            999,
            821,
            977,
            1324,
            1317,
            1004,
            1007
            ],
            [
            "Interest Income",
            1026,
            1477,
            1004,
            1317,
            1189,
            1120,
            1214,
            1480,
            1404,
            1319,
            1164,
            1253
            ],
            [
            "Depreciation and Amortization",
            659,
            543,
            734,
            718,
            543,
            663,
            536,
            641,
            685,
            552,
            793,
            509
            ],
            [
            "Earnings Before Tax",
            "=B17-SUM(B18:B20)",
            "=C17-SUM(C18:C20)",
            "=D17-SUM(D18:D20)",
            "=E17-SUM(E18:E20)",
            "=F17-SUM(F18:F20)",
            "=G17-SUM(G18:G20)",
            "=H17-SUM(H18:H20)",
            "=I17-SUM(I18:I20)",
            "=J17-SUM(J18:J20)",
            "=K17-SUM(K18:K20)",
            "=L17-SUM(L18:L20)",
            "=M17-SUM(M18:M20)"
            ],
            [
            "Taxes",
            205540,
            181726,
            193753,
            205289,
            207450,
            214724,
            192506,
            192008,
            205371,
            193736,
            193451,
            192015
            ],
            [
            "Net Income",
            1003524,
            887252,
            945975,
            1002297,
            1012849,
            1048363,
            939885,
            937452,
            1002697,
            945890,
            944498,
            937487
            ]
        ],
        "columns": [
            { "width": 205, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" },
            { "width": 113, "type": "text", "align": "left" }
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
            { "height": 30 },
            { "height": 30 },
            { "height": 30 },
            { "height": 30 },
            { "height": 30 },
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
            { "height": 29 }
        ],
        "cells": {
            "B2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M2": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M3": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M4": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M5": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M6": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M7": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M8": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M9": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M10": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M11": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M12": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M13": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M14": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M15": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M16": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M17": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M18": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M19": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M20": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M21": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M22": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "B23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "C23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "D23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "E23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "F23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "G23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "H23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "I23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "J23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "K23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "L23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            },
            "M23": {
            "format": "_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ "
            }
        },
        "style": {
            "A1": 72,
            "B1": 72,
            "C1": 72,
            "D1": 72,
            "E1": 72,
            "F1": 72,
            "G1": 72,
            "H1": 72,
            "I1": 72,
            "J1": 72,
            "K1": 72,
            "L1": 72,
            "M1": 72,
            "A2": 2,
            "B2": 3,
            "C2": 3,
            "D2": 3,
            "E2": 3,
            "F2": 3,
            "G2": 3,
            "H2": 3,
            "I2": 3,
            "J2": 3,
            "K2": 3,
            "L2": 3,
            "M2": 3,
            "A3": 2,
            "B3": 3,
            "C3": 3,
            "D3": 3,
            "E3": 3,
            "F3": 3,
            "G3": 3,
            "H3": 3,
            "I3": 3,
            "J3": 3,
            "K3": 3,
            "L3": 3,
            "M3": 3,
            "A4": 2,
            "B4": 3,
            "C4": 3,
            "D4": 3,
            "E4": 3,
            "F4": 3,
            "G4": 3,
            "H4": 3,
            "I4": 3,
            "J4": 3,
            "K4": 3,
            "L4": 3,
            "M4": 3,
            "A5": 81,
            "B5": 82,
            "C5": 82,
            "D5": 82,
            "E5": 82,
            "F5": 82,
            "G5": 82,
            "H5": 82,
            "I5": 82,
            "J5": 82,
            "K5": 82,
            "L5": 82,
            "M5": 82,
            "A6": 2,
            "B6": 3,
            "C6": 3,
            "D6": 3,
            "E6": 3,
            "F6": 3,
            "G6": 3,
            "H6": 3,
            "I6": 3,
            "J6": 3,
            "K6": 3,
            "L6": 3,
            "M6": 3,
            "A7": 2,
            "B7": 3,
            "C7": 3,
            "D7": 3,
            "E7": 3,
            "F7": 3,
            "G7": 3,
            "H7": 3,
            "I7": 3,
            "J7": 3,
            "K7": 3,
            "L7": 3,
            "M7": 3,
            "A8": 83,
            "B8": 84,
            "C8": 84,
            "D8": 84,
            "E8": 84,
            "F8": 84,
            "G8": 84,
            "H8": 84,
            "I8": 84,
            "J8": 84,
            "K8": 84,
            "L8": 84,
            "M8": 84,
            "A9": 85,
            "B9": 86,
            "C9": 86,
            "D9": 86,
            "E9": 86,
            "F9": 86,
            "G9": 86,
            "H9": 86,
            "I9": 86,
            "J9": 86,
            "K9": 86,
            "L9": 86,
            "M9": 86,
            "A10": 2,
            "B10": 3,
            "C10": 3,
            "D10": 3,
            "E10": 3,
            "F10": 3,
            "G10": 3,
            "H10": 3,
            "I10": 3,
            "J10": 3,
            "K10": 3,
            "L10": 3,
            "M10": 3,
            "A11": 2,
            "B11": 3,
            "C11": 3,
            "D11": 3,
            "E11": 3,
            "F11": 3,
            "G11": 3,
            "H11": 3,
            "I11": 3,
            "J11": 3,
            "K11": 3,
            "L11": 3,
            "M11": 3,
            "A12": 2,
            "B12": 3,
            "C12": 3,
            "D12": 3,
            "E12": 3,
            "F12": 3,
            "G12": 3,
            "H12": 3,
            "I12": 3,
            "J12": 3,
            "K12": 3,
            "L12": 3,
            "M12": 3,
            "A13": 2,
            "B13": 3,
            "C13": 3,
            "D13": 3,
            "E13": 3,
            "F13": 3,
            "G13": 3,
            "H13": 3,
            "I13": 3,
            "J13": 3,
            "K13": 3,
            "L13": 3,
            "M13": 3,
            "A14": 2,
            "B14": 3,
            "C14": 3,
            "D14": 3,
            "E14": 3,
            "F14": 3,
            "G14": 3,
            "H14": 3,
            "I14": 3,
            "J14": 3,
            "K14": 3,
            "L14": 3,
            "M14": 3,
            "A15": 2,
            "B15": 3,
            "C15": 3,
            "D15": 3,
            "E15": 3,
            "F15": 3,
            "G15": 3,
            "H15": 3,
            "I15": 3,
            "J15": 3,
            "K15": 3,
            "L15": 3,
            "M15": 3,
            "A16": 99,
            "B16": 100,
            "C16": 100,
            "D16": 100,
            "E16": 100,
            "F16": 100,
            "G16": 100,
            "H16": 100,
            "I16": 100,
            "J16": 100,
            "K16": 100,
            "L16": 100,
            "M16": 100,
            "A17": 79,
            "B17": 80,
            "C17": 80,
            "D17": 80,
            "E17": 80,
            "F17": 80,
            "G17": 80,
            "H17": 80,
            "I17": 80,
            "J17": 80,
            "K17": 80,
            "L17": 80,
            "M17": 80,
            "A18": 2,
            "B18": 3,
            "C18": 3,
            "D18": 3,
            "E18": 3,
            "F18": 3,
            "G18": 3,
            "H18": 3,
            "I18": 3,
            "J18": 3,
            "K18": 3,
            "L18": 3,
            "M18": 3,
            "A19": 2,
            "B19": 3,
            "C19": 3,
            "D19": 3,
            "E19": 3,
            "F19": 3,
            "G19": 3,
            "H19": 3,
            "I19": 3,
            "J19": 3,
            "K19": 3,
            "L19": 3,
            "M19": 3,
            "A20": 2,
            "B20": 3,
            "C20": 3,
            "D20": 3,
            "E20": 3,
            "F20": 3,
            "G20": 3,
            "H20": 3,
            "I20": 3,
            "J20": 3,
            "K20": 3,
            "L20": 3,
            "M20": 3,
            "A21": 85,
            "B21": 86,
            "C21": 86,
            "D21": 86,
            "E21": 86,
            "F21": 86,
            "G21": 86,
            "H21": 86,
            "I21": 86,
            "J21": 86,
            "K21": 86,
            "L21": 86,
            "M21": 86,
            "A22": 2,
            "B22": 3,
            "C22": 3,
            "D22": 3,
            "E22": 3,
            "F22": 3,
            "G22": 3,
            "H22": 3,
            "I22": 3,
            "J22": 3,
            "K22": 3,
            "L22": 3,
            "M22": 3,
            "A23": 91,
            "B23": 92,
            "C23": 92,
            "D23": 92,
            "E23": 92,
            "F23": 92,
            "G23": 92,
            "H23": 92,
            "I23": 92,
            "J23": 92,
            "K23": 92,
            "L23": 92,
            "M23": 92
        },
        "textOverflow": true,
        "stripHTML": false,
        "defaultColAlign": "left",
        "worksheetName": "Sheet1",
        "defaultColWidth": 66,
        "tableOverflow": true,
        "tableWidth": 1300,
        "tableHeight": 620,
        "resize": "both",
        "minDimensions": [13, 25],
        "media": [
            {
            "id": "33ff7359-81bd-4b71-a99e-1491674ca74f",
            "type": "chart",
            "options": {
                "orientation": false,
                "range": "Sheet1!B1:M5",
                "headers": false,
                "title": {
                "text": "Gross Sales",
                "font": { "size": 19, "color": "#595959" }
                },
                "labels": 0,
                "datasets": [4],
                "series": [{ "color": "#f07818" }],
                "axis": {
                "base": {
                    "grid": { "display": false },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                },
                "side": {
                    "grid": { "width": 1, "color": "#D9D9D9" },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                }
                },
                "type": "column",
                "legend": { "display": false }
            },
            "cellAnchor": "A25",
            "left": 4,
            "top": 2,
            "width": 488,
            "height": 372,
            "zIndex": 3
            },
            {
            "id": "228b778f-ef36-432c-b79d-96897eca5870",
            "type": "chart",
            "options": {
                "orientation": false,
                "range": "Sheet1!B1:M23",
                "headers": false,
                "title": {
                "text": "Net Income by Month",
                "font": { "size": 19, "color": "#595959" }
                },
                "labels": 0,
                "datasets": [22],
                "series": [
                {
                    "drawNullValues": false,
                    "borderColor": "#78c0a8",
                    "line": { "width": 1 },
                    "color": "#78c0a8",
                    "point": { "style": false }
                }
                ],
                "axis": {
                "base": {
                    "grid": { "display": false },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                },
                "side": {
                    "grid": { "width": 1, "color": "#D9D9D9" },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                }
                },
                "type": "line",
                "legend": { "display": false }
            },
            "cellAnchor": "D25",
            "left": 76,
            "top": 4,
            "width": 488,
            "height": 372,
            "zIndex": 3,
            "rotate": 0
            },
            {
            "id": "c535c6b7-90fe-4c19-a006-c3fc0c22a282",
            "type": "chart",
            "options": {
                "orientation": false,
                "range": "Sheet1!A1:M15",
                "headers": true,
                "title": {
                "text": "Operating Expenses Breakdown by Month",
                "font": { "size": 19, "color": "#595959" }
                },
                "labels": 0,
                "datasets": [9, 10, 11, 12, 13, 14],
                "series": [
                { "color": "#f0a830" },
                { "color": "#f07818" },
                { "color": "#78c0a8" },
                { "color": "#fcebb6" },
                { "color": "#5e412f" },
                { "color": "#276A7C" }
                ],
                "axis": {
                "base": {
                    "grid": { "display": false },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" }
                },
                "side": {
                    "grid": { "width": 1, "color": "#D9D9D9" },
                    "ticks": { "display": false },
                    "labels": { "size": 12, "color": "#595959" },
                    "min": 200000,
                    "forceTheLimits": true
                }
                },
                "type": "stacked-column",
                "legend": {
                "display": true,
                "position": "right",
                "labels": { "font": { "size": 12, "color": "#595959" } }
                }
            },
            "cellAnchor": "I25",
            "left": 11,
            "top": 2,
            "width": 556,
            "height": 372,
            "zIndex": 3
            }
        ],
        "worksheetId": "056b47d0-03f7-4ae2-b3c2-a4ceaa59c1b2",
        "meta": {},
        "comments": {},
        "cache": {},
        "mergeCells": {}
        }
    ],
    "bar": true,
    "toolbar": true,
    "validations": []
    };
  },
};
</script>
```
```angularjs
import { Component, ElementRef, ViewChild } from '@angular/core';
import jspreadsheet from 'jspreadsheet';
import charts from '@jspreadsheet/charts';
import formula from '@jspreadsheet/formula-pro';

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense(
  'Y2NmYzdmNDQ4NGIwYjBiNTQ5MjAwYTgzYTg4MzI1NGQ2Y2Y5MTc0OTYwM2ZiZDkwMTE4YWI4NDk1YzIxNzdiMWVmN2M3OWJkMDM5NGJiODMxNDUwYzAxMzU5ZDc1ZTk0OTcxM2Y5NzUyZTJhYWUzZTFkMzdiODViZDM1YTIyMzIsZXlKamJHbGxiblJKWkNJNklpSXNJbTVoYldVaU9pSktjM0J5WldGa2MyaGxaWFFpTENKa1lYUmxJam94TnpVeU56RTJPVFF4TENKa2IyMWhhVzRpT2xzaWFuTndjbVZoWkhOb1pXVjBMbU52YlNJc0ltTnZaR1Z6WVc1a1ltOTRMbWx2SWl3aWFuTm9aV3hzTG01bGRDSXNJbU56WWk1aGNIQWlMQ0p6ZEdGamEySnNhWFI2TG1sdklpd2lkMlZpWTI5dWRHRnBibVZ5TG1sdklpd2lkMlZpSWl3aWJHOWpZV3hvYjNOMElsMHNJbkJzWVc0aU9pSXpOQ0lzSW5OamIzQmxJanBiSW5ZM0lpd2lkamdpTENKMk9TSXNJbll4TUNJc0luWXhNU0lzSW1Ob1lYSjBjeUlzSW1admNtMXpJaXdpWm05eWJYVnNZU0lzSW5CaGNuTmxjaUlzSW5KbGJtUmxjaUlzSW1OdmJXMWxiblJ6SWl3aWFXMXdiM0owWlhJaUxDSmlZWElpTENKMllXeHBaR0YwYVc5dWN5SXNJbk5sWVhKamFDSXNJbkJ5YVc1MElpd2ljMmhsWlhSeklpd2lZMnhwWlc1MElpd2ljMlZ5ZG1WeUlpd2ljMmhoY0dWeklpd2labTl5YldGMElsMHNJbVJsYlc4aU9uUnlkV1Y5'
);

jspreadsheet.setExtensions({ formula, charts });

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<div #spreadsheet></div>`,
})
export class AppComponent {
  @ViewChild('spreadsheet', { static: true }) spreadsheet!: ElementRef;

  ngAfterViewInit() {
    jspreadsheet(this.spreadsheet.nativeElement, {
      style: [
        'background-color: #C4BD97;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-left: 1px solid #000000;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color: #C4BD97;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-right: 1px solid #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;',
        'font-size: 15px;font-family: Open sans;color: #000000;',
        'background-color: #EEECE1;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color: #EEECE1;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color: #EEECE1;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;',
        'background-color: #EEECE1;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;',
        'background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;',
        'background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;',
        'background-color: #948A54;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-bottom: 1px solid #000000;',
        'background-color: #948A54;font-size: 15px;font-family: Open sans;color: #000000;border-bottom: 1px solid #000000;',
        'background-color: #7F7F7F;font-size: 15px;font-weight: bold;font-family: Open sans;color: #000000;text-align: center;vertical-align: top;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color: #7F7F7F;font-size: 15px;font-family: Open sans;color: #000000;border-top: 1px solid #000000;border-bottom: 1px solid #000000;',
        'background-color:#c9c987;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#c9c987;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#c37c57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#c37c57;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#c17a57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#c17a57;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000',
        'background-color:#c17a57;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-bottom:1px solid #000000',
        'background-color:#c17a57;font-size:15px;font-family:Open sans;color:#000000;border-bottom:1px solid #000000',
        'background-color:#d1a764;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#d1a764;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000',
        'background-color:#d1a764;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#d1a764;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#ffebee;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#ffebee;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #000000;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid black;border-top:1px solid black;border-bottom:1px solid black',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid black;border-top:1px solid black;border-bottom:1px solid black;border-left:1px solid black',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350',
        'background-color:#e53935;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350',
        'background-color:#d84315;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#d84315;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#f4511e;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#f4511e;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#ff8a65;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#ff8a65;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#ff9800;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#ff9800;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#f57c00;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#f57c00;font-size:15px;font-family:Open sans;color:#f4fdff;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#f57c00;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top',
        'background-color:#f57c00;font-size:15px;font-family:Open sans;color:#f4fdff',
        'background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top',
        'background-color:#212121;font-size:15px;font-family:Open sans;color:#f4fdff',
        'background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#212121;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000',
        'background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-bottom:1px solid #000000',
        'background-color:#212121;font-size:15px;font-family:Open sans;color:#000000;border-bottom:1px solid #000000',
        'background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#212121;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000',
        'background-color:#212121;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000',
        'background-color:#212121;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000',
        'background-color:#78909c;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#78909c;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000',
        'background-color:#5d4037;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#5d4037;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000',
        'background-color:#b71c1c;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350',
        'background-color:#b71c1c;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350',
        'background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-left:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350',
        'background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top;border-right:1px solid #ef5350;border-top:1px solid #ef5350;border-bottom:1px solid #ef5350;border-left:1px solid #ef5350',
        'background-color:#009688;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top',
        'background-color:#4dd0e1;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top',
        'background-color:#f17918;font-size:15px;font-weight:bold;font-family:Open sans;color:#fafdff;text-align:center;vertical-align:top',
        'background-color:#21f821;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#21f821;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000',
        'background-color:#21f821;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000',
        'background-color:#21f821;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000',
        'background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-top:1px solid #000000',
        'background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #000000',
        'background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #000000',
        'background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#f4fdff;text-align:center;vertical-align:top',
        'background-color:#f0a731;font-size:15px;font-family:Open sans;color:#f4fdff',
        'background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000',
        'background-color:#fbebb7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#fbebb7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#f7fffe;text-align:center;vertical-align:top;border-top:1px solid #000000',
        'background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#f7fffe;border-top:1px solid #000000',
        'background-color:#fbebb7;font-size:15px;font-weight:bold;font-family:Open sans;color:#f7fffe;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#fbebb7;font-size:15px;font-family:Open sans;color:#f7fffe;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#77c1a7;font-size:15px;font-weight:bold;font-family:Open sans;color:#000000;text-align:center;vertical-align:top;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#77c1a7;font-size:15px;font-family:Open sans;color:#000000;border-top:1px solid #000000;border-bottom:1px solid #000000',
        'background-color:#77c1a7',
        'background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #ef5350',
        'background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #ef5350',
        'background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #020018;border-top:1px solid #020018;border-left:1px solid #020018',
        'background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018;border-top:1px solid #020018;border-left:1px solid #020018',
        'background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018;border-top:1px solid #020018;border-right:1px solid #020018;border-left:1px solid #020018',
        'background-color:#f0a731;font-size:15px;font-weight:bold;font-family:Open sans;color:#fdfffe;text-align:center;vertical-align:top;border-bottom:1px solid #020018',
        'background-color:#f0a731;font-size:15px;font-family:Open sans;color:#fdfffe;border-bottom:1px solid #020018',
      ],
      worksheets: [
        {
          data: [
            [
              '',
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
            [
              'Revenue - Product',
              459301,
              421849,
              454942,
              485108,
              481892,
              477166,
              447446,
              447714,
              447719,
              416951,
              482545,
              479651,
            ],
            [
              'Revenue - Services',
              804212,
              810103,
              761531,
              798971,
              847777,
              849565,
              769154,
              776036,
              816283,
              798603,
              779462,
              792224,
            ],
            [
              'Revenue - Other',
              429849,
              351896,
              422604,
              432253,
              391601,
              441223,
              427618,
              419093,
              444278,
              428409,
              380026,
              361942,
            ],
            [
              'Gross Sales',
              '=SUM(B2:B4)',
              '=SUM(C2:C4)',
              '=SUM(D2:D4)',
              '=SUM(E2:E4)',
              '=SUM(F2:F4)',
              '=SUM(G2:G4)',
              '=SUM(H2:H4)',
              '=SUM(I2:I4)',
              '=SUM(J2:J4)',
              '=SUM(K2:K4)',
              '=SUM(L2:L4)',
              '=SUM(M2:M4)',
            ],
            [
              'Cost of Goods Sold',
              101443,
              116772,
              102418,
              101755,
              106734,
              114183,
              117243,
              105868,
              110807,
              110781,
              116224,
              103729,
            ],
            [
              'Other Direct Charges',
              46213,
              49227,
              49568,
              48373,
              48350,
              46444,
              42509,
              44390,
              43281,
              49472,
              42179,
              41532,
            ],
            [
              'Cost of Sales',
              '=SUM(B6:B7)',
              '=SUM(C6:C7)',
              '=SUM(D6:D7)',
              '=SUM(E6:E7)',
              '=SUM(F6:F7)',
              '=SUM(G6:G7)',
              '=SUM(H6:H7)',
              '=SUM(I6:I7)',
              '=SUM(J6:J7)',
              '=SUM(K6:K7)',
              '=SUM(L6:L7)',
              '=SUM(M6:M7)',
            ],
            [
              'Gross Margin',
              1545706,
              1417849,
              1487091,
              1566204,
              1566186,
              1607327,
              1484466,
              1492585,
              1554192,
              1483710,
              1483630,
              1488556,
            ],
            [
              'Payroll',
              255222,
              270347,
              257795,
              275535,
              263382,
              255333,
              269035,
              279715,
              259117,
              260534,
              263517,
              275924,
            ],
            [
              'General and Administrative',
              25812,
              29369,
              32788,
              29175,
              29906,
              29375,
              25824,
              33117,
              29412,
              28372,
              28560,
              28001,
            ],
            [
              'Travel',
              24346,
              21636,
              22327,
              24345,
              23383,
              23840,
              24941,
              22601,
              23889,
              22471,
              23944,
              21829,
            ],
            [
              'Marketing',
              10041,
              10039,
              13024,
              11738,
              10270,
              14058,
              11243,
              10032,
              11598,
              12913,
              10295,
              13882,
            ],
            [
              'Outsourcing',
              10891,
              8521,
              11256,
              8159,
              8506,
              11654,
              11647,
              9357,
              11714,
              11179,
              9643,
              9564,
            ],
            [
              'Utilities',
              9416,
              8945,
              9000,
              9273,
              9686,
              9438,
              9242,
              8165,
              9789,
              8065,
              9089,
              9591,
            ],
            [
              'Operating Expenses',
              '=SUM(B10:B15)',
              '=SUM(C10:C15)',
              '=SUM(D10:D15)',
              '=SUM(E10:E15)',
              '=SUM(F10:F15)',
              '=SUM(G10:G15)',
              '=SUM(H10:H15)',
              '=SUM(I10:I15)',
              '=SUM(J10:J15)',
              '=SUM(K10:K15)',
              '=SUM(L10:L15)',
              '=SUM(M10:M15)',
            ],
            [
              'EBITDA',
              '=B9-B16',
              '=C9-C16',
              '=D9-D16',
              '=E9-E16',
              '=F9-F16',
              '=G9-G16',
              '=H9-H16',
              '=I9-I16',
              '=J9-J16',
              '=K9-K16',
              '=L9-L16',
              '=M9-M16',
            ],
            [
              'Interest Expense',
              1281,
              948,
              1443,
              992,
              1400,
              999,
              821,
              977,
              1324,
              1317,
              1004,
              1007,
            ],
            [
              'Interest Income',
              1026,
              1477,
              1004,
              1317,
              1189,
              1120,
              1214,
              1480,
              1404,
              1319,
              1164,
              1253,
            ],
            [
              'Depreciation and Amortization',
              659,
              543,
              734,
              718,
              543,
              663,
              536,
              641,
              685,
              552,
              793,
              509,
            ],
            [
              'Earnings Before Tax',
              '=B17-SUM(B18:B20)',
              '=C17-SUM(C18:C20)',
              '=D17-SUM(D18:D20)',
              '=E17-SUM(E18:E20)',
              '=F17-SUM(F18:F20)',
              '=G17-SUM(G18:G20)',
              '=H17-SUM(H18:H20)',
              '=I17-SUM(I18:I20)',
              '=J17-SUM(J18:J20)',
              '=K17-SUM(K18:K20)',
              '=L17-SUM(L18:L20)',
              '=M17-SUM(M18:M20)',
            ],
            [
              'Taxes',
              205540,
              181726,
              193753,
              205289,
              207450,
              214724,
              192506,
              192008,
              205371,
              193736,
              193451,
              192015,
            ],
            [
              'Net Income',
              1003524,
              887252,
              945975,
              1002297,
              1012849,
              1048363,
              939885,
              937452,
              1002697,
              945890,
              944498,
              937487,
            ],
          ],
          columns: [
            { width: 205, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
            { width: 113, type: 'text', align: 'left' },
          ],
          rows: [
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 30 },
            { height: 29 },
            { height: 29 },
          ],
          cells: {
            B2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M2: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M3: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M4: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M5: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M6: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M7: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M8: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M9: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M10: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M11: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M12: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M13: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M14: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M15: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M16: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M17: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M18: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M19: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M20: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M21: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M22: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            B23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            C23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            D23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            E23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            F23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            G23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            H23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            I23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            J23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            K23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            L23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
            M23: {
              format:
                '_-[$$-409]* #,##0.00_ ;_-[$$-409]* -#,##0.00 ;_-[$$-409]* -??_ ;_-@_ ',
            },
          },
          style: {
            A1: 72,
            B1: 72,
            C1: 72,
            D1: 72,
            E1: 72,
            F1: 72,
            G1: 72,
            H1: 72,
            I1: 72,
            J1: 72,
            K1: 72,
            L1: 72,
            M1: 72,
            A2: 2,
            B2: 3,
            C2: 3,
            D2: 3,
            E2: 3,
            F2: 3,
            G2: 3,
            H2: 3,
            I2: 3,
            J2: 3,
            K2: 3,
            L2: 3,
            M2: 3,
            A3: 2,
            B3: 3,
            C3: 3,
            D3: 3,
            E3: 3,
            F3: 3,
            G3: 3,
            H3: 3,
            I3: 3,
            J3: 3,
            K3: 3,
            L3: 3,
            M3: 3,
            A4: 2,
            B4: 3,
            C4: 3,
            D4: 3,
            E4: 3,
            F4: 3,
            G4: 3,
            H4: 3,
            I4: 3,
            J4: 3,
            K4: 3,
            L4: 3,
            M4: 3,
            A5: 81,
            B5: 82,
            C5: 82,
            D5: 82,
            E5: 82,
            F5: 82,
            G5: 82,
            H5: 82,
            I5: 82,
            J5: 82,
            K5: 82,
            L5: 82,
            M5: 82,
            A6: 2,
            B6: 3,
            C6: 3,
            D6: 3,
            E6: 3,
            F6: 3,
            G6: 3,
            H6: 3,
            I6: 3,
            J6: 3,
            K6: 3,
            L6: 3,
            M6: 3,
            A7: 2,
            B7: 3,
            C7: 3,
            D7: 3,
            E7: 3,
            F7: 3,
            G7: 3,
            H7: 3,
            I7: 3,
            J7: 3,
            K7: 3,
            L7: 3,
            M7: 3,
            A8: 83,
            B8: 84,
            C8: 84,
            D8: 84,
            E8: 84,
            F8: 84,
            G8: 84,
            H8: 84,
            I8: 84,
            J8: 84,
            K8: 84,
            L8: 84,
            M8: 84,
            A9: 85,
            B9: 86,
            C9: 86,
            D9: 86,
            E9: 86,
            F9: 86,
            G9: 86,
            H9: 86,
            I9: 86,
            J9: 86,
            K9: 86,
            L9: 86,
            M9: 86,
            A10: 2,
            B10: 3,
            C10: 3,
            D10: 3,
            E10: 3,
            F10: 3,
            G10: 3,
            H10: 3,
            I10: 3,
            J10: 3,
            K10: 3,
            L10: 3,
            M10: 3,
            A11: 2,
            B11: 3,
            C11: 3,
            D11: 3,
            E11: 3,
            F11: 3,
            G11: 3,
            H11: 3,
            I11: 3,
            J11: 3,
            K11: 3,
            L11: 3,
            M11: 3,
            A12: 2,
            B12: 3,
            C12: 3,
            D12: 3,
            E12: 3,
            F12: 3,
            G12: 3,
            H12: 3,
            I12: 3,
            J12: 3,
            K12: 3,
            L12: 3,
            M12: 3,
            A13: 2,
            B13: 3,
            C13: 3,
            D13: 3,
            E13: 3,
            F13: 3,
            G13: 3,
            H13: 3,
            I13: 3,
            J13: 3,
            K13: 3,
            L13: 3,
            M13: 3,
            A14: 2,
            B14: 3,
            C14: 3,
            D14: 3,
            E14: 3,
            F14: 3,
            G14: 3,
            H14: 3,
            I14: 3,
            J14: 3,
            K14: 3,
            L14: 3,
            M14: 3,
            A15: 2,
            B15: 3,
            C15: 3,
            D15: 3,
            E15: 3,
            F15: 3,
            G15: 3,
            H15: 3,
            I15: 3,
            J15: 3,
            K15: 3,
            L15: 3,
            M15: 3,
            A16: 99,
            B16: 100,
            C16: 100,
            D16: 100,
            E16: 100,
            F16: 100,
            G16: 100,
            H16: 100,
            I16: 100,
            J16: 100,
            K16: 100,
            L16: 100,
            M16: 100,
            A17: 79,
            B17: 80,
            C17: 80,
            D17: 80,
            E17: 80,
            F17: 80,
            G17: 80,
            H17: 80,
            I17: 80,
            J17: 80,
            K17: 80,
            L17: 80,
            M17: 80,
            A18: 2,
            B18: 3,
            C18: 3,
            D18: 3,
            E18: 3,
            F18: 3,
            G18: 3,
            H18: 3,
            I18: 3,
            J18: 3,
            K18: 3,
            L18: 3,
            M18: 3,
            A19: 2,
            B19: 3,
            C19: 3,
            D19: 3,
            E19: 3,
            F19: 3,
            G19: 3,
            H19: 3,
            I19: 3,
            J19: 3,
            K19: 3,
            L19: 3,
            M19: 3,
            A20: 2,
            B20: 3,
            C20: 3,
            D20: 3,
            E20: 3,
            F20: 3,
            G20: 3,
            H20: 3,
            I20: 3,
            J20: 3,
            K20: 3,
            L20: 3,
            M20: 3,
            A21: 85,
            B21: 86,
            C21: 86,
            D21: 86,
            E21: 86,
            F21: 86,
            G21: 86,
            H21: 86,
            I21: 86,
            J21: 86,
            K21: 86,
            L21: 86,
            M21: 86,
            A22: 2,
            B22: 3,
            C22: 3,
            D22: 3,
            E22: 3,
            F22: 3,
            G22: 3,
            H22: 3,
            I22: 3,
            J22: 3,
            K22: 3,
            L22: 3,
            M22: 3,
            A23: 91,
            B23: 92,
            C23: 92,
            D23: 92,
            E23: 92,
            F23: 92,
            G23: 92,
            H23: 92,
            I23: 92,
            J23: 92,
            K23: 92,
            L23: 92,
            M23: 92,
          },
          textOverflow: true,
          defaultColAlign: 'left',
          worksheetName: 'Sheet1',
          defaultColWidth: 66,
          tableOverflow: true,
          tableWidth: 1000,
          tableHeight: 620,
          resize: 'both',
          minDimensions: [13, 25],
          media: [
            {
              id: '33ff7359-81bd-4b71-a99e-1491674ca74f',
              type: 'chart',
              options: {
                orientation: 0,
                range: 'Sheet1!B1:M5',
                headers: false,
                title: {
                  text: 'Gross Sales',
                  font: { size: 19 },
                },
                labels: 0,
                datasets: [4],
                series: [{ color: '#f07818' }],
                type: 'column',
                legend: { display: false },
              },
              cellAnchor: 'A25',
              left: 4,
              top: 2,
              width: 488,
              height: 372,
              zIndex: 3,
            },
            {
              id: '228b778f-ef36-432c-b79d-96897eca5870',
              type: 'chart',
              options: {
                orientation: 0,
                range: 'Sheet1!B1:M23',
                headers: false,
                title: {
                  text: 'Net Income by Month',
                  font: { size: 19 },
                },
                labels: 0,
                datasets: [22],
                series: [
                  {
                    borderColor: '#78c0a8',
                    color: '#78c0a8',
                  },
                ],
                type: 'line',
                legend: { display: false },
              },
              cellAnchor: 'D25',
              left: 76,
              top: 4,
              width: 488,
              height: 372,
              zIndex: 3,
            },
            {
              id: 'c535c6b7-90fe-4c19-a006-c3fc0c22a282',
              type: 'chart',
              options: {
                orientation: 0,
                range: 'Sheet1!A1:M15',
                headers: true,
                title: {
                  text: 'Operating Expenses Breakdown by Month',
                },
                labels: 0,
                datasets: [9, 10, 11, 12, 13, 14],
                series: [
                  { color: '#f0a830' },
                  { color: '#f07818' },
                  { color: '#78c0a8' },
                  { color: '#fcebb6' },
                  { color: '#5e412f' },
                  { color: '#276A7C' },
                ],
                type: 'stackedColumn',
                legend: {
                  display: true,
                  position: 'right',
                },
              },
              cellAnchor: 'I25',
              left: 11,
              top: 2,
              width: 556,
              height: 372,
              zIndex: 3,
            },
          ],
          worksheetId: '056b47d0-03f7-4ae2-b3c2-a4ceaa59c1b2',
          meta: {},
          comments: {},
          cache: {},
          mergeCells: {},
        },
      ],
      bar: true,
      toolbar: true,
      validations: [],
    });
  }
}
```

</div>
