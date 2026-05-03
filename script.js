// ===== LISTA DE SLIDES (imagem + link) =====
const slides = [
    {
        img: "Imagens-localização-ambiente/1ambiente-um.png",
        link: "https://maps.app.goo.gl/osgEGS7ZrdpuK2oD7"
    }, 
    {
        img: "Imagens-localização-ambiente/2ambiente-dois.png",
        link: "https://maps.app.goo.gl/osgEGS7ZrdpuK2oD7"
    },
    {
        img: "Imagens-localização-ambiente/3ambiente-tres.png",
        link: ""
    },
    {
        img: "Imagens-localização-ambiente/4ambiente-quatro.png",
        link: ""
    },
    {
        img: "Imagens-localização-ambiente/5ambiente-cinco.png", 
        link: ""
    },
    {
        img: "Imagens-localização-ambiente/6ambiente-seis.png",
        link: ""
    }
];

// ===== ELEMENTOS DO HTML =====
const imagem = document.getElementById("carrosel-img");
const link = document.getElementById("carrosel-link");
const btnProximo = document.getElementById("btn-ir");
const btnVoltar = document.getElementById("btn-voltar");
const container = document.querySelector(".carrossel-galeria");

// ===== CONTROLE =====
let indice = 0;
let intervalo;

// ===== FUNÇÃO PRINCIPAL =====
function atualizarImagem() {
    imagem.src = slides[indice].img;

    if (slides[indice].link !== "") {
        link.href = slides[indice].link;
        link.target = "_blank";
    } else {
        link.removeAttribute("href"); // desativa clique
    }
}

// ===== PRÓXIMA IMAGEM =====
function proximaImagem() {
    indice = (indice + 1) % slides.length;
    atualizarImagem();
}

// ===== IMAGEM ANTERIOR =====
function imagemAnterior() {
    indice = (indice - 1 + slides.length) % slides.length;
    atualizarImagem();
}

// ===== AUTOPLAY =====
function iniciarAutoPlay() {
    intervalo = setInterval(proximaImagem, 5000); // 5 segundos
}

// ===== RESET AUTOPLAY (quando clicar) =====
function resetAutoPlay() {
    clearInterval(intervalo);
    iniciarAutoPlay();
}

// ===== EVENTOS DOS BOTÕES =====
btnProximo.addEventListener("click", () => {
    proximaImagem();
    resetAutoPlay();
});

btnVoltar.addEventListener("click", () => {
    imagemAnterior();
    resetAutoPlay();
});

// ===== PAUSAR AO PASSAR O MOUSE =====
container.addEventListener("mouseenter", () => {
    clearInterval(intervalo);
});

container.addEventListener("mouseleave", () => {
    function iniciarAutoPlay() {
    clearInterval(intervalo); // 🔥 impede duplicação
    intervalo = setInterval(proximaImagem, 5000);
}
});

// ===== INICIAR =====
atualizarImagem();
iniciarAutoPlay();

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