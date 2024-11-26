//VARIAVEIS

const form = document.querySelector(".login-form");
const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");

//FUNÇÃO PARA ACIONAR O BOTÃO JOGO 

const validateInput = ({target}) => {

   if (target.value.length > 2) {
    button.removeAttribute('disabled') ;
    return;
   }

   button.setAttribute("disabled", "")
};

//FUNÇÃO PARA GUARDAR O NOME DO JOGADOR

const handleSubmit= (event) => {

    event.preventDefault();

//SALVAR A CHAVE PLAYER NO LOCALSTORAGE
    localStorage.setItem("player", input.value);

//ELE DIRECIONA PARA NOVA PAGINA DO GAME
    window.location = "pages/game.html";

};

input.addEventListener("input", validateInput);

form.addEventListener("submit", handleSubmit);
