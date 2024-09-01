const campos = document.querySelectorAll('.entrada');
const bntEnviar = document.getElementById('bnt-enviar');

document.addEventListener("DOMContentLoaded", function () {
    campos.forEach(function (campo) {
        campo.addEventListener('input', function () {
            verificarCampos();
        });
    });

    document.getElementById("form-cnt").addEventListener("submit", function (event) {
        alert('⚠️ALGO DEU ERRADO⚠️ \nSua solicitação de contato não foi enviada. \nEntre em contato através do email davidandrade.sec@gmail.com');
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





