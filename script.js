//Carrosel das imagens ambiente
// Lista de imagens
const imagens = [
    "Imagens/ambiente-um.png",
    "Imagens/ambiente-dois.png",
    "Imagens/ambiente-tres.png",
    "Imagens/ambiente-quatro.png"
];

// Pega elementos do HTML
const imagem = document.getElementById("carrosel-img");
const btnProximo = document.getElementById("btn-ir");
const btnVoltar = document.getElementById("btn-voltar");

let indice = 0;

// Função para atualizar imagem
function atualizarImagem() {
    imagem.src = imagens[indice];
}

// Próxima imagem
function proximaImagem() {
    indice++;
    if (indice >= imagens.length) {
        indice = 0;
    }
    atualizarImagem();
}

// Imagem anterior
function imagemAnterior() {
    indice--;
    if (indice < 0) {
        indice = imagens.length - 1;
    }
    atualizarImagem();
}


// Eventos dos botões
btnProximo.addEventListener("click", proximaImagem);
btnVoltar.addEventListener("click", imagemAnterior);

// Troca automática a cada 3 segundos
setInterval(proximaImagem, 5000);



//Carrosel dos comentários fedbacks
const feedbacks = document.querySelectorAll(".feedback-card");
const btnProximoFeedback = document.getElementById("btn-proximo-feedback");
const btnVoltarFeedback = document.getElementById("btn-voltar-feedback");

let indiceFeedback = 0;

function atualizarFeedback() {
    feedbacks.forEach(card => {
        card.classList.remove("ativo");
    });

    feedbacks[indiceFeedback].classList.add("ativo");
}

function proximoFeedback() {
    indiceFeedback++;
    if (indiceFeedback >= feedbacks.length) {
        indiceFeedback = 0;
    }
    atualizarFeedback();
}

function feedbackAnterior() {
    indiceFeedback--;
    if (indiceFeedback < 0) {
        indiceFeedback = feedbacks.length - 1;
    }
    atualizarFeedback();
}

// 👇 ESSA LINHA FAZ O PRIMEIRO APARECER AO CARREGAR
atualizarFeedback();

btnProximoFeedback.addEventListener("click", proximoFeedback);
btnVoltarFeedback.addEventListener("click", feedbackAnterior);

setInterval(proximoFeedback, 5000);

let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnmenu.addEventListener('click',()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('abrir-menu')
})