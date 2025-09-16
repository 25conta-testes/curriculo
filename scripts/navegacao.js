
function carregarPagina(url) {
    return fetch(url)
        .then(resposta => {
            if (!resposta.ok) throw new Error("Erro ao carregar " + url);
            return resposta.text();
        });
}

let curriculoHTML = "";
let projetosHTML = "";
let mainHTML = ""

carregarPagina("pages/curriculo.html").then(html => curriculoHTML = html );
carregarPagina("pages/projetos.html").then(html => projetosHTML = html );
carregarPagina("pages/main.html").then(html => mainHTML = html );


const PAGES = {
    MAIN: 0,
    CURRICULO: 1,
    PROJETOS: 2
}


const MAIN = document.querySelector("#main");

const main_page = document.querySelector("#main-page")
const curriculo_page = document.querySelector("#curriculo-page");
const projetos_page = document.querySelector("#projetos-page");

let atual_page = PAGES.MAIN;

main_page.addEventListener("click", () => {
    if ( atual_page != PAGES.MAIN ) { 
        MAIN.innerHTML = mainHTML;
        atual_page = PAGES.MAIN;
    }
})

curriculo_page.addEventListener("click", () => {
    if( atual_page != PAGES.CURRICULO ) {
        MAIN.innerHTML = curriculoHTML;
        atual_page = PAGES.CURRICULO;
    }
})

projetos_page.addEventListener("click", () => {
    if( atual_page != PAGES.PROJETOS ) {
        MAIN.innerHTML = projetosHTML;
        atual_page = PAGES.PROJETOS;
    }
})




