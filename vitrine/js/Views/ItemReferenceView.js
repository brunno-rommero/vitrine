class ItemReferenceView {

    constructor(objetoReferencia, elemento) {

        let $ = document.querySelector.bind(document);

        this._elemento = $(elemento);
        this._json = objetoReferencia;
        this._render();
    }

    _template() {

        let templateString = `
        <div class="produto-container">
            <a class="link url" title="${this._json.name}" href="${this._json.detailUrl}">
                <span class="produto-imagem">
                    <img src="${this._json.imageName}" alt="${this._json.name}" width="292" height="292">
                </span>
                <strong class="name">${this._json.name}</strong>

                <span class="produtos-pagamento">

                    <span class="pagamento-de">De: ${this._json.oldPrice}</span>

                    <span class=pagamento-por>Por: ${this._json.price}</span>
                    <span class="pagamento-parcelamento">
                        ${this._json.productInfo.paymentConditions}
                    </span>
                </span>

            </a>
        </div>
        `;

        return templateString;
    }

    _render() {

        this._elemento.innerHTML = this._template();
    }
}