// O campo do nome não deve ficar em branco ou vazio.
// Deve conter no máximo 50 caracteres.
// Mostrar mensagem de erro específica quando qualquer uma dessas condições não for atendida

document.getElementById("form-cnt").addEventListener("submit", function(event) {
    var nomeInput = document.getElementById("nome");
    var nome = nomeInput.value.trim();
    var msgInvNome = document.getElementById("mensagemNome")

    if (nome === "") {
        alert("Por favor, digite seu nome.");
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    } 
});

// O campo do e-mail não deve ficar em branco ou vazio.
// Deve estar em formato de e-mail contendo o caractere especial @ seguido por um domínio ou provedor seguido por um ponto (.)
// Exemplo: text@texto.com

document.getElementById('form-cnt').addEventListener("submit", function(event){
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();

    if (email === "") {
        alert("Por favor, digite uma email.");
        event.preventDefault();
    }
});