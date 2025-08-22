title: How to translate the default messages from Jspreadsheet
keywords: Jspreadsheet, Jexcel, spreadsheet, javascript, javascript table, translate, translations
description: How to translate default messages from Jspreadsheet.


# Translations

Customize the default spreadsheet texts from jspreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v7/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v7/jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
let data = [
    ['BR', 'Cheese', 1],
    ['CA', 'Apples', 0],
    ['US', 'Carrots', 1],
    ['GB', 'Oranges', 0],
];

jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns:[
        { type:'text', width:100 },
        { type:'text', width:100 },
        { type:'text', width:100 },
    ],
    text:{
        noRecordsFound:'Nenhum registro encontrado',
        showingPage:'Mostrando pÃ¡gina {0} de {1} entradas',
        show:'Show',
        entries:'entradas',
        insertANewColumnBefore:'Inserir uma nova coluna antes de',
        insertANewColumnAfter:'Inserir uma nova coluna depois de',
        deleteSelectedColumns:'Excluir colunas selecionadas',
        renameThisColumn:'Renomear esta coluna',
        orderAscending:'ordem ascendente',
        orderDescending:'Order decrescente',
        insertANewRowBefore:'Inserir uma nova linha antes de',
        insertANewRowAfter:'Inserir uma nova linha depois de',
        deleteSelectedRows:'Excluir linhas selecionadas',
        editComments:'Editar comentÃ¡rios',
        addComments:'Adicionar comentÃ¡rios',
        comments:'ComentÃ¡rios',
        clearComments:'Limpar comentÃ¡rios',
        copy:'Copiar ...',
        paste:'Colar ...',
        saveAs:'Salvar como ...',
        about:'Sobre',
        areYouSureToDeleteTheSelectedRows:'Tem certeza de excluir as linhas selecionadas?',
        areYouSureToDeleteTheSelectedColumns:'Tem certeza de excluir as colunas selecionadas?',
        thisActionWillDestroyAnyExistingMergedCellsAreYouSure:'Esta aÃ§Ã£o irÃ¡ destruir todas as cÃ©lulas mescladas existentes. VocÃª tem certeza?',
        thisActionWillClearYourSearchResultsAreYouSure:'Esta aÃ§Ã£o limparÃ¡ seus resultados de pesquisa. VocÃª tem certeza?',
        thereIsAConflictWithAnotherMergedCell:'HÃ¡ um conflito com outra cÃ©lula mesclada',
        invalidMergeProperties:'Propriedades mescladas invÃ¡lidas',
        cellAlreadyMerged:'Cell jÃ¡ mesclado',
        noCellsSelected:'Nenhuma cÃ©lula selecionada',
            renameThisWorksheet: 'Renomear essa tabela',
            deleteThisWorksheet: 'Deletar essa tabela',
            areYouSureDeleteThisWorksheet: 'Tem certeza que deseja apagar essa tabela?',
    },
    license: '###license###',
});
</script>
</html>
```
 
