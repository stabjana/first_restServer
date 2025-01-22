'use strict';

(function () {
    let method = 'GET';
    let urifield;
    let jsonarea;
    let resultarea;

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        urifield = document.getElementById('urifield');
        jsonarea == document.getElementById('jsonarea');
        resultarea == document.getElementById('resultarea');

        document.getElementById('submit').addEventListener('click', send);

        document.getElementById('methods').addEventListener('change', choose);

        clearSelections();
        urifield.value = 'http//localhost:3000/api/'
    }

})();