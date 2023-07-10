const botaoMudaPag = document.getElementById("botao-pag-um");
//Criando a classe para usar o botao pra mudar o tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
//Criando a classe body pra receber o novo tema
const body = document.querySelector("body");
//Criando a classe da imagem pra poder mudar de sol para lua e vice-versa
const imagemBotaoTrocadeTema = document.querySelector(".imagem-botao");
//Quando clicar no botao, fazer a arrowfunction para mudar os temas.
botaoAlterarTema.addEventListener("click", () => {
    const mododarkEstaAtivo = body.classList.contains("modo-dark");
    //Toggle para remover/adicionar a classe modo-dark de forma que acontece sempre que clicar.
    body.classList.toggle("modo-dark");

    if (mododarkEstaAtivo) {

        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {

        imagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

//Botao para ir do fim da pagina para o topo
const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function (event) {
    if (this.window.scrollY == 0) {

        botao.classList.remove("visible");
        
    } else {

        botao.classList.add("visible");
    }
})