class ItemReferenceController {
    
    constructor(objetoJSON) {
        
        this._json = objetoJSON;
        this._carregaItemDeRefencia();
    }
    
    _carregaItemDeRefencia() {
        new ItemReferenceView(this._json.data.reference.item, '#produtoReferenciaView');
    }
}