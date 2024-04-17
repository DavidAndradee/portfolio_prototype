// REGRAS DE NEGOCIO DOS CAMPOS
/*
O campo do nome não deve ficar em branco ou vazio.
Deve conter no máximo 50 caracteres.
Mostrar mensagem de erro específica quando qualquer uma dessas condições não for atendid

O campo do e-mail não deve ficar em branco ou vazio.
Deve estar em formato de e-mail contendo o caractere especial @ seguido p13or um domínio ou provedor seguido por um ponto (.)
Exemplo: text@texto.com

O campo Assunto não deve ficar em branco ou vazio.
Deve conter no máximo 50 caracteres.

O campo da mensagem não deve ficar em branco ou vazio.
Deve conter no máximo 300 caracteres.*/


const campos = document.querySelectorAll('.entrada');
const bntEnviar = document.getElementById('bnt-enviar');

document.addEventListener("DOMContentLoaded", function () {
    campos.forEach(function (campo) {
        campo.addEventListener('input', function () {
            verificarCampos();
        });
    });

    document.getElementById("form-cnt").addEventListener("submit", function (event) {
        alert('⚠️⚠️⚠️⚠️⚠️⚠️⚠️   ALGO DEU ERRADO   ⚠️⚠️⚠️⚠️⚠️⚠️⚠️ Sua solicitação de contato não foi enviada. Entre em contato através do email davidandrade.sec@gmail.com');
    });
});

function verificarCampos() {
    let camposPreenchidos = true;
    campos.forEach(function (campo) {
        if (campo.value.trim() === '') {
            camposPreenchidos = false;
        }
    });

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValido = email.match(emailRegex);

    if (camposPreenchidos && emailValido) {
        bntEnviar.removeAttribute('disabled');
        return true;
    } else {
        bntEnviar.setAttribute('disabled', 'disabled');
        return false;
    }
}





