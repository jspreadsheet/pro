title: How to translate the default messages from Jspreadsheet
keywords: Jspreadsheet, spreadsheet, javascript, javascript table, translate, translations
description: How to translate default messages from Jspreadsheet.



# Jspreadsheet internationalization

How to update the default texts from Jspreadsheet.

```html
<html>
<script src="https://jspreadsheet.com/v5/jspreadsheet.js"></script>
<script src="https://jsuites.net/v5/jsuites.js"></script>
<link rel="stylesheet" href="https://jspreadsheet.com/v4//jspreadsheet.css" type="text/css" />
<link rel="stylesheet" href="https://jsuites.net/v5/jsuites.css" type="text/css" />

<div id="spreadsheet"></div>

<script>
jspreadsheet(document.getElementById('spreadsheet'), {
    data:data,
    columns:[
        { type:'text', width:300 },
        { type:'text', width:100 },
        { type:'text', width:100 },
        { type:'calendar', width:100 },
    ],
    text:{
        noRecordsFound:'Nenhum registro encontrado',
        showingPage:'Mostrando página {0} de {1} entradas',
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
        editComments:'Editar comentários',
        addComments:'Adicionar comentários',
        comments:'Comentários',
        clearComments:'Limpar comentários',
        copy:'Copiar ...',
        paste:'Colar ...',
        saveAs:'Salvar como ...',
        about:'Sobre',
        areYouSureToDeleteTheSelectedRows:'Tem certeza de excluir as linhas selecionadas?',
        areYouSureToDeleteTheSelectedColumns:'Tem certeza de excluir as colunas selecionadas?',
        thisActionWillDestroyAnyExistingMergedCellsAreYouSure:'Esta ação irá destruir todas as células mescladas existentes. Você tem certeza?',
        thisActionWillClearYourSearchResultsAreYouSure:'Esta ação limpará seus resultados de pesquisa. Você tem certeza?',
        thereIsAConflictWithAnotherMergedCell:'Há um conflito com outra célula mesclada',
        invalidMergeProperties:'Propriedades mescladas inválidas',
        cellAlreadyMerged:'Cell já mesclado',
        noCellsSelected:'Nenhuma célula selecionada',
            renameThisWorksheet: 'Renomear essa tabela',
            deleteThisWorksheet: 'Deletar essa tabela',
            areYouSureDeleteThisWorksheet: 'Tem certeza que deseja apagar essa tabela?',
    },
    license: '39130-64ebc-bd98e-26bc4',
});
</script>
</html>
```
 
