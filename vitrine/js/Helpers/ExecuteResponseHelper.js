class ExecuteResponseHelper {

    constructor(text) {

        if (!text) {
            throw new Error("Nao houve resposta do servidor");
        }

        // executa o texto obtido como resposta do servidor
        eval(text);
    }
}


