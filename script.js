function darkMode() {

    const pagina = document.body

    pagina.classList.toggle("dark-mode")
    const botao = document.querySelector("button")
    const isDarkMode = document.body.classList.contains("dark-mode");
}

function validaFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.getElementsByClassName("senha").value;

    //Validação de campo vazio 
    if (nome == '' || email == '' || senha == '') {
        alert("Preencha os cmapos vazios ")
    }
}