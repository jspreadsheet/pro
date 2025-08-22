title: International settings
keywords: Jspreadsheet, data grid, javascript, excel-like, spreadsheet, documentation, international settings, translations
description: Jspreadsheet Pro translations and international settings.



# International settings

From version 8 on, the Jspreadsheet input editor brings a much better user experience, including compatibility with the IME. This means languages that required composite entries will work fine when the user triggers the editor using the keyboard. 

## Translations

From jSuites v4.7 on, you can set the dictionary object to translate all jSuites, LemonadeJS, and Jspreadsheet components and plugins with a single centralize definition. The new translations decouple the dictionary from the Jspreadsheet configuration. The dictionary object, as shown below, is represented by a key and value, where the key is case sensitive. When a related translation is not provided in the dictionary, the English text will be the default.  

### Example

Translate all text in the spreadsheet to Portuguese. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    worksheets: [
        { minDimensions: [10,10] }, // Worksheet 1
        { minDimensions: [10,10] }, // Worksheet 2
    ],
});

// From jSuites v4.7 you can set the dictionary to translate all
// jSuites, LemonadeJS and jSpreasheet components and plugins.

jSuites.setDictionary({
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
 Other language contributions at <https://github.com/jspreadsheet/translations>  

## Calendar

The calendar brings some international definitions as shown below. 

```html
<html>
<script src="https://jspreadsheet.com/v8/jspreadsheet.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v8/jspreadsheet.css" type="text/css" />
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

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
 
