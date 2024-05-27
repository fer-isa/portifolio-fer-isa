const $form = document.querySelector("#form");
const inputs = document.querySelectorAll("#form input");
const input = document.querySelectorAll("#form textarea");

const expressoes = {
    nome: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    assunto: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
    mensagem: /^[a-zA-ZÀ-ÿ0-9\s]{1,200}$/,
};

const campos = {
    nome: false,
    email: false,
    assunto: false,
    mensagem: false,
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nome":
            validarCampo(expressoes.nome, e.target, "nome");
            break;
        case "email":
            validarCampo(expressoes.email, e.target, "email");
            break;
        case "assunto":
            validarCampo(expressoes.assunto, e.target, "assunto");
            break;
        case "mensagem":
            textArea(expressoes.mensagem, e.target, "mensagem");
            break;
    }
};

const validarCampo = (expressoes, input, campo) => {
    if (expressoes.test(input.value)) {
        document.getElementById(`input_${campo}`).classList.remove("incorreto");
        document.getElementById(`input_${campo}`).classList.add("correto");
        document
            .querySelector(`#input_${campo} i`)
            .classList.remove("fa-times-circle");
        document
            .querySelector(`#input_${campo} i`)
            .classList.add("fa-check-circle");

        campos[campo] = true;
    } else {
        document.getElementById(`input_${campo}`).classList.add("incorreto");
        document.getElementById(`input_${campo}`).classList.remove("correto");
        document
            .querySelector(`#input_${campo} i`)
            .classList.add("fa-times-circle");
        document
            .querySelector(`#input_${campo} i`)
            .classList.remove("fa-check-circle");
        campos[campo] = false;
    }
};


inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});


const textArea = (expressoes, textarea, campo) => {
    if (expresion.test(textarea.value)) {
        document.getElementById(`input_${campo}`).classList.remove("incorreto");
        document.getElementById(`input_${campo}`).classList.add("correto");
        document
            .querySelector(`#input_${campo} i`)
            .classList.remove("fa-times-circle");
        document
            .querySelector(`#input_${campo} i`)
            .classList.add("fa-check-circle");

        campos[campo] = true;
    } else {
        document.getElementById(`input_${campo}`).classList.add("incorreto");
        document.getElementById(`input_${campo}`).classList.remove("correto");
        document
            .querySelector(`#input_${campo} i`)
            .classList.add("fa-times-circle");
        document
            .querySelector(`#input_${campo} i`)
            .classList.remove("fa-check-circle");
        campos[campo] = false;
    }
};
input.forEach((textarea) => {
    textarea.addEventListener("keyup", validarFormulario);
    textarea.addEventListener("blur", validarFormulario);
});

const $enviar = document.querySelector("#enviar");

$form.addEventListener("submit", enviaremail);

function enviaremail(e) {
    e.preventDefault();
    if (
        campos.nome &&
        campos.email &&
        campos.assunto &&
        campos.mensagem
    ) {
        const form = new FormData(this);
        form.get("nome");
        form.get("email");
        form.get("assunto");
        form.get("mensagem");

        $enviar.setAttribute(
            "href",
            `mailto:fernandaisa111@gmail.com.com?subject=Nome:${form.get("nome")},E-mail: ${form.get("email"
            )},Assunto: ${form.get("assunto")},&body=${form.get("mensagem")}`
        );
        $enviar.click();
    }
}

console.log ("foi");