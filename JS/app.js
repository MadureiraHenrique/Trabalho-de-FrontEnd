document.addEventListener("DOMContentLoaded", () => {
  function carregarConteudo(id, caminhoConteudo) {
    const element = document.getElementById(id);
    if (element) {
      fetch(caminhoConteudo)
        .then((resposta) => resposta.text())
        .then((conteudoDoHTML) => {
          element.innerHTML = conteudoDoHTML;
        })
        .catch((error) => {
          console.error(
            `Erro ao carregar o contéudo pae, da uma olhada nessa parada ai, pq nem eu sei resolver, o erro é um tal de ${caminhoConteudo}`,
            error);
          element.innerHTML = `<p style="color: red;">O Contéudo não pode ser carregado. Tente novamente mais tarde ;D</p>`;
        });
    }
  }

  carregarConteudo("antonio", "/conteudo/antonio.html");

  const linksNav = document.querySelectorAll("nav a");

  linksNav.forEach((link) => {
    link.addEventListener("click", (evento) => {
      evento.preventDefault();

      const idAlvo = evento.target.getAttribute("href").substring(1);
      const caminhoAlvo = `/conteudo/${idAlvo}.html`;

      const todasAsSecoes = document.querySelectorAll("article");
      todasAsSecoes.forEach((secao) => {
        secao.innerHTML = "";
      });

      carregarConteudo(idAlvo, caminhoAlvo);
    });
  });
});
