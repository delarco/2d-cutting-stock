'use strict';

class App {

    /**
     * Initialize DOM elements references and bind events.
     */
    initialize() {

        this.pieces = [];
        this.piecesListUL = document.querySelector("#pieces-list");
        this.pieceTemplate = document.querySelector("#piece-template");

        this.widthInput = document.querySelector("#width-input");
        this.heightInput = document.querySelector("#height-input");
        this.addButton = document.querySelector("button.add-button");

        this.widthInput.addEventListener("keypress", this.onDimensionsKeypress);
        this.heightInput.addEventListener("keypress", this.onDimensionsKeypress);
        this.addButton.addEventListener("click", () => this.onAddPieceButtonClick());
    }

    /**
     * Clear pieces list.
     */
    clearPieces() {

        this.pieces = [];
        this.piecesListUL.innerHTML = '';
    }

    /**
     * Add piece to list.
     * @param {*} piece 
     */
    addPiece(piece) {

        piece.id = this.pieces.length + 1;
        this.pieces.push(piece);

        // add new LI element
        const newPiece = this.pieceTemplate.content.cloneNode(true);
        newPiece.querySelector("li").setAttribute("piece-id", piece.id);
        newPiece.querySelector(".piece-id").innerText = `#${piece.id}`;
        newPiece.querySelector("label").innerText = `${piece.width}mm x ${piece.height}mm`;
        newPiece.querySelector(".remove-button").addEventListener("click", () => this.removePiece(piece.id));
        this.piecesListUL.appendChild(newPiece);
    }

    /**
     * Remove piece from list.
     * @param {*} pieceId 
     */
    removePiece(pieceId) {

        // remove piece from list
        this.pieces = this.pieces.filter(piece => piece.id != pieceId);

        // update pieces id
        this.pieces.filter(piece => piece.id > pieceId).forEach(piece => piece.id--);

        // remove element
        const pieceElement = this.piecesListUL.querySelector(`li[piece-id="${pieceId}"]`);
        this.piecesListUL.removeChild(pieceElement);

        // update elements id
        Array.from(this.piecesListUL.querySelectorAll("li")).forEach(li => {

            const id = li.getAttribute("piece-id");

            if (id > pieceId) {
                li.setAttribute("piece-id", id - 1);
                li.querySelector(".piece-id").innerText = `#${id - 1}`;
            }
        });
    }

    /**
     * Dimensions input accepts only numbers.
     * @param {*} ev 
     */
    onDimensionsKeypress(ev) {

        // TODO: handle paste

        const regex = /[0-9]|\./;

        if (!regex.test(ev.key)) {

            ev.returnValue = false;
            if (ev.preventDefault) ev.preventDefault();
        }
    }

    /**
     * Add piece button click event.
     */
    onAddPieceButtonClick() {

        const width = parseInt(this.widthInput.value);
        const height = parseInt(this.heightInput.value);

        if(!width || !height) return;

        const piece = new Piece(null, width, height);
        this.addPiece(piece);
    }
}

var app = new App();
