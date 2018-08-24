/**
 * Helper que carrega os dados da internet
 */

class LoadApiHelper {

    constructor(urlApi) {

        //erro caso nao seja passado uma url  para o carregamento dos dados
        if (!urlApi) {
            throw new Error("É necessário fornecer uma URL válida para o carregamento dos Dados.");
        }

        this._urlApi = urlApi;
        this._requisitaDadosDoServidor();
    }

    _requisitaDadosDoServidor() {

        // objeto AJAX
        let xhr = new XMLHttpRequest();
        let text = '';
        // abre uma requisiçao do tipo GET para o servidor
        xhr.open('GET', this._urlApi);

        // arrow function -> callback de verificaçao de estado
        xhr.onreadystatechange = () => {
            // verifica se o estado da requisiçao esta pronto
            // 4 >>  requisiçao concluida e a resposta esta pronta
            if (xhr.readyState == 4) {

                // verifica se o status da resposta eh 200 ok!
                if (xhr.status == 200) {

                    // executa a requisiçao
                    //// praticamente eh aqui que a brincadeira inicia! =)
                    new ExecuteResponseHelper(xhr.responseText);

                } else {
                    console.log("Nao foi possivel obter os dados do servidor. Error Code: " + xhr.status);
                }
            }
        };

        xhr.send();
    }
}
