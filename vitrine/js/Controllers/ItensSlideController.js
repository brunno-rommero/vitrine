class ItensSlideController {
    
    constructor(objetoJSON) {
        
        this._json = objetoJSON;
        this._carregaItensDoSlide();
    }
    
    _carregaItensDoSlide() {
        new ItensSlideView(this._json.data.recommendation, '#contentSliderView ul.produtos');
    }
}