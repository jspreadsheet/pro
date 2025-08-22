const hidden = function() {
    const methods = {};

    methods.createCell = function(cell, value) {
        if (cell) {
            cell.textContent = value;
        }
    }

    methods.updateCell = methods.createCell;

    methods.openEditor = function() {
        return false;
    }

    methods.closeEditor = function() {
        return false;
    }

    return methods;
}();