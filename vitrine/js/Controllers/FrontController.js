class FrontController {

    constructor(objetoJSON) {

        this._json = objetoJSON;
        this._run();
        
        this._sliderController;
    }

    _run() {

        new ItemReferenceController(this._json);
        new ItensSlideController(this._json);
        this._sliderController = new SliderController('.content-slider ul', this._json.data.widget.size);
    }
    
    getInstanceOfSliderController() {
        return this._sliderController;
    }
}