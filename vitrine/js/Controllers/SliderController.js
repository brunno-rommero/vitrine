/**
 * Controller do Slide
 */

class SliderController {

    constructor(slideContainer, totalDeprodutos = 0) {
        let $ = document.querySelector.bind(document);
        let totalDeprodutosVisiveis = 3;
        this._tamanhoContainerProduto = $('.produtos li').clientWidth;

        this._slideContainer = $(slideContainer);

        // este atributo guarda o tamanho total do container, que sera calculado
        // de acordo com a quantidade de produtos da lista
        this._tamanhoContainerSlideProdutos = this._tamanhoContainerProduto * (totalDeprodutos - totalDeprodutosVisiveis);
        // guarda a posiçao atual dos slides
        this._movimentacao = 0;

    }

    nextSlide() {
        if (this._movimentacao > (this._tamanhoContainerSlideProdutos - (this._tamanhoContainerSlideProdutos * 2))) {
            this._movimentacao -= this._tamanhoContainerProduto;
            this._slideContainer.style.marginLeft = this._movimentacao + 'px';
        }
    }

    previousSlide() {
        if (this._movimentacao < 0) {
            this._movimentacao += this._tamanhoContainerProduto;
            this._slideContainer.style.marginLeft = this._movimentacao + 'px';
        }
    }

}
