var app;

(function (app) {
    'use strict';

    /**
     * Initialize DOM elements references.
     */
    app.initialize = function () {

        this.pieces = [];
        this.piecesListUL = document.querySelector("#pieces-list");
        this.pieceTemplate = document.querySelector("#piece-template");
    };

    /**
     * Clear pieces list.
     */
    app.clearPieces = function() {

        // TODO: implement
    };

    /**
     * Add piece to list.
     * @param {*} piece 
     */
    app.addPiece = function(piece) {

        // TODO: implement
    };

    /**
     * Remove piece from list.
     * @param {*} pieceId 
     */
    app.removePiece = function(pieceId) {

        // TODO: implement
    };

})(app || (app = {}));
