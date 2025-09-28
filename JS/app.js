document.addEventListener("DOMContentLoaded", () => {
  const linksNav = document.querySelectorAll("nav a");
  const todasAsSecoes = document.querySelectorAll("article");
  const cabecalho = document.getElementById("cabecalho");

  // Aqui carrega e exibe o conteúdo pae!
  function carregarEExibirConteudo(idAlvo, caminhoConteudo) {
    const secaoAlvo = document.querySelector(idAlvo);

    if (secaoAlvo) {
      todasAsSecoes.forEach((secao) => {
        secao.innerHTML = "";
      });

      fetch(caminhoConteudo)
        .then((resp) => resp.text())
        .then((html) => {
          secaoAlvo.innerHTML = html;

          if (idAlvo === "#carlos") {
            adicionarInteratividadeCarlos(secaoAlvo);
          }
        })
        // Famosa Programação Defensiva.
        .catch((erro) => {
          console.error(`Erro ao carregar -> ${caminhoConteudo}:`, erro);
          secaoAlvo.innerHTML = `<p style="color: red; text-align: center;">Não foi possível carregar o conteúdo pae.</p>`;
        });
    }
  }

  // Animação que não sei explicar tão bem.
  function adicionarInteratividadeCarlos(secaoCarlos) {
    const botoes = secaoCarlos.querySelectorAll("#saiba-mais");
    const detalhes = secaoCarlos.querySelectorAll(".conteudo-detalhe");

    // Esconde todos os detalhes por padrão quando a seção Carlos é carregada.
    detalhes.forEach((div) => {
      div.style.display = "none";
    });

    // Isso aqui, garante que só teem um ouvinte.
    botoes.forEach((botao) => {
      botao.removeEventListener("click", lidarComDetalhe);
      botao.addEventListener("click", lidarComDetalhe);
    });

    // Essa é a parte principal em que, 
    // faz a animação de abrir e fechar.
    function lidarComDetalhe(evento) {
      const botaoClicado = evento.target;
      const idDetalhe = botaoClicado.dataset.alvo;
      const divDetalhe = secaoCarlos.querySelector(`#${idDetalhe}`);

      if (divDetalhe) {
        if (
          divDetalhe.style.display === "none" ||
          divDetalhe.style.display === ""
        ) {
          divDetalhe.style.display = "block"; // ON
          botaoClicado.textContent = "Menos Detalhes";
        } else {
          divDetalhe.style.display = "none"; // OFF
          botaoClicado.textContent = "Saiba Mais";
        }
      }
    }
  }

  // Não apague ou não altere nada abaixo, 
  // pelo amor de Deus com D Maiusculo, 
  // se não eu lhe encho de murro!!!
  linksNav.forEach((link) => {
    link.addEventListener("click", (evento) => {
      evento.preventDefault();
      const idAlvo = link.getAttribute("href");
      const nomeArquivo = idAlvo.substring(1);
      const caminhoConteudo = `/Conteudo/${nomeArquivo}.html`;
      carregarEExibirConteudo(idAlvo, caminhoConteudo);
    });
  });

  // O primeiro contéudo a carregar é esse aqui!
  carregarEExibirConteudo("#glauber", "/Conteudo/glauber.html");
});
