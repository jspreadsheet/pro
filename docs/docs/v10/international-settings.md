title: International Settings and Configurations on Jspreadsheet Version 10
keywords: Jspreadsheet, data grid, javascript, excel-like, spreadsheet, documentation, international settings, translations, currency, locale, localization, language support, regional settings, date format, number format, currency format, internationalization, multi-language support
description: Learn how to configure international settings in Jspreadsheet for enhanced language support, translations, currency settings, and more.

# International settings

The input editor enhances the user experience by seamlessly supporting Input Method Editor (IME) compatibility. It enables smooth handling of languages that require composite entries when the editor is triggered using the keyboard. 

> **Translations**  In jSuites v4.7, a new dictionary object was introduced to facilitate centralized translation of all jSuites, LemonadeJS, and Jspreadsheet components and plugins. This dictionary utilizes key-value pairs, where English is the default return in the absence of a specific translation. 

 

## Translations

### Translate the data grid interface

Translate all text in the spreadsheet to Portuguese. 





```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [10,10] }, // Worksheet 1
        { minDimensions: [10,10] }, // Worksheet 2
    ],
});

// Translate the spreadsheet
jspreadsheet.setDictionary({
    'Show': 'Mostrar',
    'Search': 'Buscar',
    'entries': ' entradas',
    'Column name': 'Nome da coluna',
    'Change column type': 'Mudar tipo de coluna',
    'Insert a new column before': 'Inserir uma coluna antes',
    'Insert a new column after': 'Inserior uma coluna depois',
    'Delete selected columns': 'Apagar colunas selecionadas',
    'Rename this column': 'Renonear essa coluna',
    'Order ascending': 'Ordenar ascendente',
    'Order descending': 'Ordenar descendente',
    'Insert a new row before': 'Inserir uma nova linha antes',
    'Insert a new row after': 'Inserir uma nova linha depois',
    'Delete selected rows': 'Apagar linhas selecionadas',
    'Edit comments': 'Editar comentários',
    'Add comments': 'Adicionar comentários',
    'Comments': 'Comentários',
    'Clear comments': 'Apagar comentários',
    'Copy': 'Copiar',
    'Paste': 'Colar',
    'Save as': 'Salvar como',
    'About': 'Sobre',
    'Are you sure?': 'Tenha certeza:',
    'This action will destroy any existing merged cells. Are you sure?':
        'Essa ação irá desturir as celulas mescladas existentes. Tem certeza?',
    'Invalid merged properties': 'Propriedades de mesclagem inválidas',
    'No cell selected': 'Nenhuma celula selecionada',
    'Rename this worksheet': 'Renomear essa planilha',
    'Delete this worksheet': 'Apagar essa planilha',
    'It was not possible to rename worksheet due conflict name':
        'Não foi possível renomear essa planilha devido a um conflito de nomes',
    'Cut': 'Cortar',
    'Hide': 'Esconder',
    'Unhide': 'Mostrar',
    'Select All': 'Selecionar tudo',
    'Blanks': 'Brancos',
    'Add current selection to filter': 'Adicionar seleção atual ao filtro',
    'Rename this cell': 'Renomear celula',
    // Calendar text
    'Jan': 'Jan',
    'Feb': 'Fev',
    'Mar': 'Mar',
    'Apr': 'Abr',
    'May': 'Mai',
    'Jun': 'Jun',
    'Jul': 'Jul',
    'Aug': 'Ago',
    'Sep': 'Set',
    'Oct': 'Out',
    'Nov': 'Nov',
    'Dec': 'Dez',
    'January': 'Janeiro',
    'February': 'Fevereiro',
    'March': 'Março',
    'April': 'Abril',
    'May': 'Maio',
    'June': 'Junho',
    'July': 'Julho',
    'August': 'Agosto',
    'September': 'Setembro',
    'October': 'Outubro',
    'November': 'Novembro',
    'December': 'Dezembro',
    'Sunday': 'Domingo',
    'Monday': 'Segunda',
    'Tuesday': 'Terca',
    'Wednesday': 'Quarta',
    'Thursday': 'Quinta',
    'Friday': 'Sexta',
    'Saturday': 'Sabado',
    'Done': 'Feito',
    'Reset': 'Apagar',
    'Update': 'Atualizar',
});
</script>
</html>
```

```jsx
import React, {useRef, useEffect} from "content/docs/v10/react";
import {Spreadsheet, Worksheet, jspreadsheet} from "@jspreadsheet/react";

const license = '###license###';

export default function App() {

    const spreadsheet = useRef();

    useEffect(() => {
        // Translate the spreadsheet
        jspreadsheet.setDictionary({
            'Show': 'Mostrar',
            'Search': 'Buscar',
            'entries': ' entradas',
            'Column name': 'Nome da coluna',
            'Change column type': 'Mudar tipo de coluna',
            'Insert a new column before': 'Inserir uma coluna antes',
            'Insert a new column after': 'Inserior uma coluna depois',
            'Delete selected columns': 'Apagar colunas selecionadas',
            'Rename this column': 'Renonear essa coluna',
            'Order ascending': 'Ordenar ascendente',
            'Order descending': 'Ordenar descendente',
            'Insert a new row before': 'Inserir uma nova linha antes',
            'Insert a new row after': 'Inserir uma nova linha depois',
            'Delete selected rows': 'Apagar linhas selecionadas',
            'Edit comments': 'Editar comentários',
            'Add comments': 'Adicionar comentários',
            'Comments': 'Comentários',
            'Clear comments': 'Apagar comentários',
            'Copy': 'Copiar',
            'Paste': 'Colar',
            'Save as': 'Salvar como',
            'About': 'Sobre',
            'Are you sure?': 'Tenha certeza:',
            'This action will destroy any existing merged cells. Are you sure?':
                'Essa ação irá desturir as celulas mescladas existentes. Tem certeza?',
            'Invalid merged properties': 'Propriedades de mesclagem inválidas',
            'No cell selected': 'Nenhuma celula selecionada',
            'Rename this worksheet': 'Renomear essa planilha',
            'Delete this worksheet': 'Apagar essa planilha',
            'It was not possible to rename worksheet due conflict name':
                'Não foi possível renomear essa planilha devido a um conflito de nomes',
            'Cut': 'Cortar',
            'Hide': 'Esconder',
            'Unhide': 'Mostrar',
            'Select All': 'Selecionar tudo',
            'Blanks': 'Brancos',
            'Add current selection to filter': 'Adicionar seleção atual ao filtro',
            'Rename this cell': 'Renomear celula',
            // Calendar text
            'Jan': 'Jan',
            'Feb': 'Fev',
            'Mar': 'Mar',
            'Apr': 'Abr',
            'May': 'Mai',
            'Jun': 'Jun',
            'Jul': 'Jul',
            'Aug': 'Ago',
            'Sep': 'Set',
            'Oct': 'Out',
            'Nov': 'Nov',
            'Dec': 'Dez',
            'January': 'Janeiro',
            'February': 'Fevereiro',
            'March': 'Março',
            'April': 'Abril',
            'May': 'Maio',
            'June': 'Junho',
            'July': 'Julho',
            'August': 'Agosto',
            'September': 'Setembro',
            'October': 'Outubro',
            'November': 'Novembro',
            'December': 'Dezembro',
            'Sunday': 'Domingo',
            'Monday': 'Segunda',
            'Tuesday': 'Terca',
            'Wednesday': 'Quarta',
            'Thursday': 'Quinta',
            'Friday': 'Sexta',
            'Saturday': 'Sabado',
            'Done': 'Feito',
            'Reset': 'Apagar',
            'Update': 'Atualizar',
        });
    }, [spreadsheet])

    return (
        <Spreadsheet ref={spreadsheet} license={license}>
            <Worksheet minDimensions={[10, 10]}/>
            <Worksheet minDimensions={[10, 10]}/>
        </Spreadsheet>
    );
};
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license">
        <Worksheet :minDimensions="[10,10]" />
        <Worksheet :minDimensions="[10,10]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    mounted() {
        // Translate the spreadsheet
        jspreadsheet.setDictionary({
            'Show': 'Mostrar',
            'Search': 'Buscar',
            'entries': ' entradas',
            'Column name': 'Nome da coluna',
            'Change column type': 'Mudar tipo de coluna',
            'Insert a new column before': 'Inserir uma coluna antes',
            'Insert a new column after': 'Inserior uma coluna depois',
            'Delete selected columns': 'Apagar colunas selecionadas',
            'Rename this column': 'Renonear essa coluna',
            'Order ascending': 'Ordenar ascendente',
            'Order descending': 'Ordenar descendente',
            'Insert a new row before': 'Inserir uma nova linha antes',
            'Insert a new row after': 'Inserir uma nova linha depois',
            'Delete selected rows': 'Apagar linhas selecionadas',
            'Edit comments': 'Editar comentários',
            'Add comments': 'Adicionar comentários',
            'Comments': 'Comentários',
            'Clear comments': 'Apagar comentários',
            'Copy': 'Copiar',
            'Paste': 'Colar',
            'Save as': 'Salvar como',
            'About': 'Sobre',
            'Are you sure?': 'Tenha certeza:',
            'This action will destroy any existing merged cells. Are you sure?':
                'Essa ação irá desturir as celulas mescladas existentes. Tem certeza?',
            'Invalid merged properties': 'Propriedades de mesclagem inválidas',
            'No cell selected': 'Nenhuma celula selecionada',
            'Rename this worksheet': 'Renomear essa planilha',
            'Delete this worksheet': 'Apagar essa planilha',
            'It was not possible to rename worksheet due conflict name':
                'Não foi possível renomear essa planilha devido a um conflito de nomes',
            'Cut': 'Cortar',
            'Hide': 'Esconder',
            'Unhide': 'Mostrar',
            'Select All': 'Selecionar tudo',
            'Blanks': 'Brancos',
            'Add current selection to filter': 'Adicionar seleção atual ao filtro',
            'Rename this cell': 'Renomear celula',
            // Calendar text
            'Jan': 'Jan',
            'Feb': 'Fev',
            'Mar': 'Mar',
            'Apr': 'Abr',
            'May': 'Mai',
            'Jun': 'Jun',
            'Jul': 'Jul',
            'Aug': 'Ago',
            'Sep': 'Set',
            'Oct': 'Out',
            'Nov': 'Nov',
            'Dec': 'Dez',
            'January': 'Janeiro',
            'February': 'Fevereiro',
            'March': 'Março',
            'April': 'Abril',
            'June': 'Junho',
            'July': 'Julho',
            'August': 'Agosto',
            'September': 'Setembro',
            'October': 'Outubro',
            'November': 'Novembro',
            'December': 'Dezembro',
            'Sunday': 'Domingo',
            'Monday': 'Segunda',
            'Tuesday': 'Terca',
            'Wednesday': 'Quarta',
            'Thursday': 'Quinta',
            'Friday': 'Sexta',
            'Saturday': 'Sabado',
            'Done': 'Feito',
            'Reset': 'Apagar',
            'Update': 'Atualizar',
        });
    },
    data() {
        return {
            // License
            license: license,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                { minDimensions: [6,6] }, // Worksheet 1
                { minDimensions: [6,6] }, // Worksheet 2
            ],
        });

        // Translate the spreadsheet
        jspreadsheet.setDictionary({
            'Show': 'Mostrar',
            'Search': 'Buscar',
            'entries': ' entradas',
            'Column name': 'Nome da coluna',
            'Change column type': 'Mudar tipo de coluna',
            'Insert a new column before': 'Inserir uma coluna antes',
            'Insert a new column after': 'Inserior uma coluna depois',
            'Delete selected columns': 'Apagar colunas selecionadas',
            'Rename this column': 'Renonear essa coluna',
            'Order ascending': 'Ordenar ascendente',
            'Order descending': 'Ordenar descendente',
            'Insert a new row before': 'Inserir uma nova linha antes',
            'Insert a new row after': 'Inserir uma nova linha depois',
            'Delete selected rows': 'Apagar linhas selecionadas',
            'Edit comments': 'Editar comentários',
            'Add comments': 'Adicionar comentários',
            'Comments': 'Comentários',
            'Clear comments': 'Apagar comentários',
            'Copy': 'Copiar',
            'Paste': 'Colar',
            'Save as': 'Salvar como',
            'About': 'Sobre',
            'Are you sure?': 'Tenha certeza:',
            'This action will destroy any existing merged cells. Are you sure?':
                'Essa ação irá desturir as celulas mescladas existentes. Tem certeza?',
            'Invalid merged properties': 'Propriedades de mesclagem inválidas',
            'No cell selected': 'Nenhuma celula selecionada',
            'Rename this worksheet': 'Renomear essa planilha',
            'Delete this worksheet': 'Apagar essa planilha',
            'It was not possible to rename worksheet due conflict name':
                'Não foi possível renomear essa planilha devido a um conflito de nomes',
            'Cut': 'Cortar',
            'Hide': 'Esconder',
            'Unhide': 'Mostrar',
            'Select All': 'Selecionar tudo',
            'Blanks': 'Brancos',
            'Add current selection to filter': 'Adicionar seleção atual ao filtro',
            'Rename this cell': 'Renomear celula',
            // Calendar text
            'Jan': 'Jan',
            'Feb': 'Fev',
            'Mar': 'Mar',
            'Apr': 'Abr',
            'May': 'Mai',
            'Jun': 'Jun',
            'Jul': 'Jul',
            'Aug': 'Ago',
            'Sep': 'Set',
            'Oct': 'Out',
            'Nov': 'Nov',
            'Dec': 'Dez',
            'January': 'Janeiro',
            'February': 'Fevereiro',
            'March': 'Março',
            'April': 'Abril',
            'May': 'Maio',
            'June': 'Junho',
            'July': 'Julho',
            'August': 'Agosto',
            'September': 'Setembro',
            'October': 'Outubro',
            'November': 'Novembro',
            'December': 'Dezembro',
            'Sunday': 'Domingo',
            'Monday': 'Segunda',
            'Tuesday': 'Terca',
            'Wednesday': 'Quarta',
            'Thursday': 'Quinta',
            'Friday': 'Sexta',
            'Saturday': 'Sabado',
            'Done': 'Feito',
            'Reset': 'Apagar',
            'Update': 'Atualizar',
        });
    }
}
```

Other language contributions at <https://github.com/jspreadsheet/translations>  

### Translate the formula names

From Formula Premium 2+, you can translate formula names and define the method arguments separator. 

{.ignore}
```html
<html>
<script src="https://cdn.jsdelivr.net/npm/@jspreadsheet/formula-pro/dist/index.min.js"></script>
<script>
// Translate the formula names
let translate = {
    NOW: "AGORA",
    RAND: "ALEATÓRIO",
    RANDBETWEEN: "ALEATÓRIOENTRE",
    YEAR: "ANO",
    AREAS: "ÁREAS",
    ROUND: "ARRED",
    FLOOR: "ARREDMULTB",
    ROUNDDOWN: "ARREDONDAR.PARA.BAIXO",
    ROUNDUP: "ARREDONDAR.PARA.CIMA",
    TRIM: "ARRUMAR",
    ASINH: "ASENH",
    ASIN: "ASEN",
    AVERAGEIF: "MÉDIASE",
    DB: "BD",
    DCOUNT: "BDCONTAR",
    DCOUNTA: "BDCONTARA",
    DDB: "BDD",
    DSTDEVP: "BDDESVPA",
    DSTDEV: "BDEST",
    DGET: "BDEXTRAIR",
    DMAX: "BDMÁX",
    DAVERAGE: "BDMÉDIA",
    DMIN: "BDMÍN",
    DPRODUCT: "BDMULTIPL",
    DSUM: "BDSOMA",
    VDB: "BDV",
    DVAR: "BDVAREST",
    DVARP: "BDVARP",
    BETAINV: "BETA.ACUM.INV",
    BIN2DEC: "BINADEC",
    BIN2HEX: "BINAHEX",
    BIN2OCT: "BINAOCT",
    CHAR: "CARACT",
    CELL: "CÉL",
    CODE: "CÓDIGO",
    COLUMN: "COL",
    COLUMNS: "COLS",
    COMPLEX: "COMPLEXO",
    CONCATENATE: "CONCATENAR",
    COUNTIF: "CONT.SE",
    COUNTIFS: "CONT.SES",
    COUNTA: "CONT.VALORES",
    COUNT: "CONTAR",
    COUNTBLANK: "CONTAR.VAZIO",
    CONVERT: "CONVERTER",
    MATCH: "CORRESP",
    GROWTH: "CRESCIMENTO",
    CRITBINOM: "CRIT.BINOM",
    COUPPCD: "CUPDATAANT",
    COUPNCD: "CUPDATAPRÓX",
    COUPDAYS: "CUPDIAS",
    COUPDAYSBS: "CUPDIASINLIQ",
    COUPDAYSNC: "CUPDIASPRÓX",
    COUPNUM: "CUPNÚM",
    KURT: "CURT",
    DATE: "DATA",
    DATEVALUE: "DATA.VALOR",
    DATEVALUE: "DATA.VALOR",
    EDATE: "DATAM",
    DEC2BIN: "DECABIN",
    DEC2HEX: "DECAHEX",
    DEC2OCT: "DECAOCT",
    FIXED: "DEF.NÚM.DEC",
    GESTEP: "DEGRAU",
    DISC: "DESC",
    OFFSET: "DESLOC",
    AVEDEV: "DESV.MÉDIO",
    STDEV: "DESVPAD",
    STDEVA: "DESVPADA",
    STDEVP: "DESVPADP",
    STDEVPA: "DESVPADPA",
    DEVSQ: "DESVQ",
    DAY: "DIA",
    WEEKDAY: "DIA.DA.SEMANA",
    DAYS360: "DIAS360",
    WORKDAY: "DIATRABALHO",
    NETWORKDAYS: "DIATRABALHOTOTAL",
    RIGHT: "DIREITA",
    NEGBINOMDIST: "DIST.BIN.NEG",
    HYPGEOMDIST: "DIST.HIPERGEOM",
    LOGNORMDIST: "DIST.LOGNORMAL",
    NORMDIST: "DIST.NORM",
    NORMSDIST: "DIST.NORMP",
    CHIDIST: "DIST.QUI",
    BETADIST: "DISTBETA",
    EXPONDIST: "DISTEXPON",
    FDIST: "DISTF",
    GAMMADIST: "DISTGAMA",
    ABSSKEW: "DISTORÇÃO",
    BINOMDIST: "DISTRBINOM",
    TDIST: "DISTT",
    SLN: "DPD",
    DURATION: "DURAÇÃO",
    AND: "E",
    AND: "E",
    ISNA: "É.NÃO.DISP",
    ISNONTEXT: "É.NÃO.TEXTO",
    ISBLANK: "ÉCÉL.VAZIA",
    ISERR: "ÉERRO",
    ISERROR: "ÉERROS",
    EFFECT: "EFETIVA",
    ISODD: "ÉIMPAR",
    ISLOGICAL: "ÉLÓGICO",
    ADDRESS: "ENDEREÇO",
    ISNUMBER: "ÉNÚM",
    STEYX: "EPADYX",
    ISEVEN: "ÉPAR",
    ISPMT: "ÉPGTO",
    ISREF: "ÉREF",
    CHOOSE: "ESCOLHER",
    LEFT: "ESQUERDA",
    ISTEXT: "ÉTEXTO",
    EXACT: "EXATO",
    MID: "EXT.TEXTO",
    FALSO: "FALSO",
    FACTDOUBLE: "FATDUPLO",
    FACT: "FATORIAL",
    EOMONTH: "FIMMÊS",
    PHONETIC: "FONÉTICA",
    YEARFRAC: "FRAÇÃOANO",
    FREQUENCY: "FREQUÊNCIA",
    ERF: "FUNERRO",
    ERFC: "FUNERROCOMPL",
    DEGREES: "GRAUS",
    HEX2BIN: "HEXABIN",
    HEX2DEC: "HEXADEC",
    HEX2OCT: "HEXAOCT",
    HYPERLINK: "HIPERLINK",
    TODAY: "HOJE",
    HOUR: "HORA",
    IMAGINARY: "IMAGINÁRIO",
    IMARGUMENT: "IMARG",
    IMCONJUGATE: "IMCONJ",
    ODD: "ÍMPAR",
    IMPOWER: "IMPOT",
    IMPRODUCT: "IMPROD",
    IMSQRT: "IMRAIZ",
    IMSIN: "IMSENO",
    IMSUM: "IMSOMA",
    IMSUB: "IMSUBTR",
    SLOPE: "INCLINAÇÃO",
    INDEX: "ÍNDICE",
    INDIRECT: "INDIRETO",
    GETPIVOTDATA: "INFODADOSTABELADINÂMICA",
    INFO: "INFORMAÇÃO",
    CONFIDENCE: "INT.CONFIANÇA",
    INTERCEPT: "INTERCEPÇÃO",
    NORMINV: "INV.NORM",
    NORMSINV: "INV.NORMP",
    CHIINV: "INV.QUI",
    FINV: "INVF",
    GAMMAINV: "INVGAMA",
    LOGINV: "INVLOG",
    TINV: "INVT",
    IPMT: "IPGTO",
    ACCRINT: "JUROSACUM",
    ACCRINTM: "JUROSACUMV",
    ROW: "LIN",
    ROWS: "LINS",
    GAMMALN: "LNGAMA",
    FIND: "LOCALIZAR",
    YIELD: "LUCRO",
    YIELDDISC: "LUCRODESC",
    ODDFYIELD: "LUCROPRIMINC",
    ODDLYIELD: "LUCROÚLTINC",
    YIELDMAT: "LUCROVENC",
    LARGE: "MAIOR",
    UPPER: "MAIÚSCULA",
    MROUND: "MARRED",
    MDETERM: "MATRIZ.DETERM",
    MINVERSE: "MATRIZ.INVERSO",
    MMULT: "MATRIZ.MULT",
    MAX: "MÁXIMO",
    MAXA: "MÁXIMOA",
    GCD: "MDC",
    MDURATION: "MDURAÇÃO",
    MEDIAN: "MED",
    AVERAGE: "MÉDIA",
    GEOMEAN: "MÉDIA.GEOMÉTRICA",
    HARMEAN: "MÉDIA.HARMÔNICA",
    TRIMMEAN: "MÉDIA.INTERNA",
    AVERAGEA: "MÉDIAA",
    AVERAGEIF: "MÉDIASE",
    AVERAGEIFS: "MÉDIASES",
    SMALL: "MENOR",
    MONTH: "MÊS",
    MIN: "MÍNIMO",
    MINA: "MÍNIMOA",
    LOWER: "MINÚSCULA",
    MINUTE: "MINUTO",
    LCM: "MMC",
    MODE: "MODO",
    DOLLAR: "MOEDA",
    DOLLARDE: "MOEDADEC",
    DOLLARFR: "MOEDAFRA",
    MIRR: "MTIR",
    REPLACE: "MUDAR",
    PRODUCT: "MULT",
    NOT: "NÃO",
    NA: "NÃO.DISP",
    LEN: "NÚM.CARACT",
    WEEKNUM: "NÚMSEMANA",
    OCT2BIN: "OCTABIN",
    OCT2DEC: "OCTADEC",
    OCT2HEX: "OCTAHEX",
    RANK: "ORDEM",
    PERCENTRANK: "ORDEM.PORCENTUAL",
    TBILLEQ: "OTN",
    TBILLYIELD: "OTNLUCRO",
    TBILLPRICE: "OTNVALOR",
    OR: "OU",
    STANDARDIZE: "PADRONIZAR",
    EVEN: "PAR",
    PERCENTILE: "PERCENTIL",
    PMT: "PGTO",
    CUMPRINC: "PGTOCAPACUM",
    CUMIPMT: "PGTOJURACUM",
    POWER: "POTÊNCIA",
    PPMT: "PPGTO",
    PRICE: "PREÇO",
    PRICEDISC: "PREÇODESC",
    ODDFPRICE: "PREÇOPRIMINC",
    ODDLPRICE: "PREÇOÚLTINC",
    PRICEMAT: "PREÇOVENC",
    FORECAST: "PREVISÃO",
    PROPER: "PRI.MAIÚSCULA",
    LOOKUP: "PROC",
    HLOOKUP: "PROCH",
    SEARCH: "PROCURAR",
    VLOOKUP: "PROCV",
    LINEST: "PROJ.LIN",
    LOGEST: "PROJ.LOG",
    QUARTILE: "QUARTIL",
    QUOTIENT: "QUOCIENTE",
    RADIANS: "RADIANOS",
    SQRT: "RAIZ",
    SQRTPI: "RAIZPI",
    RECEIVED: "RECEBER",
    ROMAN: "ROMANO",
    RSQ: "RQUAD",
    SYD: "SDA",
    IF: "SE",
    IFERROR: "SEERRO",
    SECOND: "SEGUNDO",
    SIN: "SEN",
    SINH: "SENH",
    SIGN: "SINAL",
    SUM: "SOMA",
    SUMSQ: "SOMAQUAD",
    SUMPRODUCT: "SOMARPRODUTO",
    SUMIF: "SOMASE",
    SERIESSUM: "SOMASEQÜÊNCIA",
    SUMIFS: "SOMASES",
    SUMX2MY2: "SOMAX2DY2",
    SUMX2PY2: "SOMAX2SY2",
    SUMXMY2: "SOMAXMY2",
    REPLACE: "SUBSTITUIR",
    RATE: "TAXA",
    INTRATE: "TAXAJUROS",
    TIME: "TEMPO",
    TREND: "TENDÊNCIA",
    CHITEST: "TESTE.QUI",
    FTEST: "TESTEF",
    TTEST: "TESTET",
    ZTEST: "TESTEZ",
    CEILING: "TETO",
    TEXT: "TEXTO",
    TYPE: "TIPO",
    IRR: "TIR",
    CLEAN: "TIRAR",
    TRANSPOSE: "TRANSPOR",
    TRUNC: "TRUNCAR",
    VALUE: "VALOR",
    TIMEVALUE: "VALOR.TEMPO",
    VERDADEIRO: "VERDADEIRO",
    FV: "VF",
    FVSCHEDULE: "VFPLANO",
    PV: "VP",
    NPV: "VPL",
    XIRR: "XTIR",
    XNPV: "XVPL",
}

let keys = Object.keys(translate)
keys.forEach(function(v){
    formula[translate[v]] = formula[v];
});
// Activate the precision adjust
formula.adjustPrecision = true;
// By default method arguments are separated by comma. But you can change that using:
formula.divisor = ';';
// Run the formula
formula("SOMA(1;2;3)"); // result = 6
</script>
</html>
```
  

## Calendar settings

The calendar brings some international definitions as shown below. 





```html
<html>
<script src="https://jspreadsheet.com/v10/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v10/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons" />

<div id="spreadsheet"></div>

<script>
let calendarOptions = {
    // Define the letter that represent the weekdays
    weekdays_short: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    // The week starts in which day?
    startingDay: '1', // Starts on Monday
    // Format
    format: 'YYYY-Mon-DD',
};

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create the spreadsheet
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [10,10] }, // Worksheet 1
        { minDimensions: [10,10] }, // Worksheet 2
    ],
    columns: [{
        type: 'calendar',
        options: calendarOptions,
    }]
});
</script>
</html>
```
```jsx
import React, { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet/react";

const license = '###license###'

const calendarOptions = {
    // Define the letter that represent the weekdays
    weekdays_short: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    // The week starts in which day?
    startingDay: '1', // Starts on Monday
    // Format
    format: 'YYYY-Mon-DD',
};

const columns = [{
    type: 'calendar',
    options: calendarOptions,
}]

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef();

    // Render data grid component
    return (
        <Spreadsheet ref={spreadsheet} license={license} columns={columns}>
            <Worksheet minDimension={[10, 10]}/>
            <Worksheet minDimension={[10, 10]}/>
        </Spreadsheet>
    );
}
```
```vue
<template>
    <Spreadsheet ref="spreadsheet" :license="license" :columns="columns">
        <Worksheet :minDimensions="[6, 6]" />
        <Worksheet :minDimensions="[6, 6]" />
    </Spreadsheet>
</template>

<script>
import { Spreadsheet, Worksheet, jspreadsheet } from "@jspreadsheet/vue";
import "jsuites/dist/jsuites.css";
import "jspreadsheet/dist/jspreadsheet.css";

const license = '###license###';

const calendarOptions = {
    // Define the letter that represent the weekdays
    weekdays_short: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    // The week starts in which day?
    startingDay: '1', // Starts on Monday
    // Format
    format: 'YYYY-Mon-DD',
};

const columns = [{
    type: 'calendar',
    options: calendarOptions,
}]

export default {
    components: {
        Spreadsheet,
        Worksheet,
    },
    mounted() {

    },
    data() {
        return {
            // License
            license: license,
            columns: columns,
        };
    }
}
</script>
```
```angularjs
import { Component, ViewChild, ElementRef } from "@angular/core";
import jspreadsheet from "jspreadsheet";

import "jspreadsheet/dist/jspreadsheet.css"
import "jsuites/dist/jsuites.css"

// Set your JSS license key (The following key only works for one day)
jspreadsheet.setLicense('###license###');

// Create component
@Component({
    standalone: true,
    selector: "app-root",
    template: `<div #spreadsheet></div>`,
})
export class AppComponent {
    @ViewChild("spreadsheet") spreadsheet: ElementRef;
    // Worksheets
    worksheets: jspreadsheet.worksheetInstance[];
    // Create a new data grid
    ngAfterViewInit() {
        const calendarOptions = {
            // Define the letter that represent the weekdays
            weekdays_short: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            // The week starts in which day?
            startingDay: '1', // Starts on Monday
            // Format
            format: 'YYYY-Mon-DD',
        };

        const columns = [{
            type: 'calendar',
            options: calendarOptions,
        }]

        // Create spreadsheet
        this.worksheets = jspreadsheet(this.spreadsheet.nativeElement, {
            worksheets: [
                { minDimensions: [6, 6] }, // Worksheet 1
                { minDimensions: [6, 6] }, // Worksheet 2
            ],
            columns: columns
        });
    }
}
```
 

