class ItensSlideView {

    constructor(arrayDeItens, elemento) {

        let $ = document.querySelector.bind(document);

        this._elemento = $(elemento);
        this._arrItens = arrayDeItens;
        this._render();
    }

    _template() {

        // recebe a concatenaçao dos itens do slide
        let strItens = '';

        // executa uma arrow function para cada item do array
        this._arrItens.map((item) => {
            strItens += `
            <li class="first" style="width: 5%;">
                <div class="produto-container">
                    <a class="link url" title="${item.name}" href="${item.detailUrl}">
                        <span class="produto-imagem">
                            <img src="${item.imageName}" alt="${item.name}" width="292" height="292">
                        </span>
                        <strong class="name">${item.name}</strong>

                        <span class="produtos-pagamento">

                            <span class="pagamento-de">
                                De: ${item.oldPrice}
                            </span>

                            <span class=pagamento-por>
                                Por: ${item.price}
                            </span>
                            <span class="pagamento-parcelamento">
                                ${item.productInfo.paymentConditions}
                            </span>
                        </span>
                    </a>
                </div>

            </li>
            `;
        });


        return strItens;
    }

    _render() {

        this._elemento.innerHTML = this._template();
    }
}