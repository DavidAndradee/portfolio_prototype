function validacao() {

    // O campo do nome não deve ficar em branco ou vazio.
    // Deve conter no máximo 50 caracteres.
    // Mostrar mensagem de erro específica quando qualquer uma dessas condições não for atendida

    document.getElementById("form-cnt").addEventListener("submit", function (event) {
        var nomeInput = document.getElementById("nome");
        var nome = nomeInput.value.trim();
        var msgInvNome = document.getElementById("mensagemNome")

        if (nome === "") {
            alert("Por favor, digite seu nome.");
            event.preventDefault(); // Impede o envio do formulário se a validação falhar
        }
    });

    // O campo do e-mail não deve ficar em branco ou vazio.
    // Deve estar em formato de e-mail contendo o caractere especial @ seguido p13or um domínio ou provedor seguido por um ponto (.)
    // Exemplo: text@texto.com

    document.getElementById('form-cnt').addEventListener("submit", function (event) {
        var emailInput = document.getElementById("email");
        var email = emailInput.value.trim();

        if (email === "") {
            alert("Por favor, digite uma email.");
            event.preventDefault();
        } if (validarEmail(email)) {
            console.log("email valido");
        } else{
            console.log("email inválido");
        }

    });

    // O campo Assunto não deve ficar em branco ou vazio.
    // Deve conter no máximo 50 caracteres.

    document.getElementById('form-cnt').addEventListener("submit", function (event) {
        var assuntoInput = document.getElementById("assunto");
        var assunto = assuntoInput.value.trim();

        if (assunto === "") {
            alert("Por favor, digite uma assunto.");
            event.preventDefault();
        }

    });

    // O campo da mensagem não deve ficar em branco ou vazio.
    // Deve conter no máximo 300 caracteres.

    document.getElementById('form-cnt').addEventListener("submit", function (event) {
        var msgInput = document.getElementById("mensagem-text");
        var msg = msgInput.value.trim();

        if (msg.value === "") {
            alert("Por favor, digite uma mensagem.");
            event.preventDefault();
        }
    });

    function validarEmail(email) {
        // Expressão regular para validar um endereço de e-mail
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

}


