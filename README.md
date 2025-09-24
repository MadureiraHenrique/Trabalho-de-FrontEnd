Coda Fofos - Trabalho de Programação Front End

Este projeto é uma aplicação web de página única (Single Page Application - SPA) desenvolvida como parte da avaliação (AV1) da disciplina de Programação Front End do curso de Engenharia de Software. O objetivo principal é explorar e aplicar conceitos fundamentais de Interface Humano-Computador (IHC) e Experiência do Usuário (UX). 

🎯 Objetivo do Trabalho

O projeto visa consolidar o aprendizado em IHC através da aplicação prática dos seguintes tópicos: 

    Evolução das Interfaces: Análise de diferentes tipos de interfaces (Desktop, Games, Web, Mobile) e a aplicação do conceito de affordance. 

Conceitos de IHC: Discussão sobre Experiência do Usuário (UX) e as etapas de planejamento e avaliação de interfaces. 

Design e Prototipagem: Criação da arquitetura da informação, desenvolvimento de wireframes, um protótipo funcional e o design final da interface. 

O resultado é um protótipo funcional que agrega o conteúdo desenvolvido individualmente por cada membro da equipe em uma única página coesa. 

🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias fundamentais do desenvolvimento web:

    HTML5: Para a estruturação semântica do conteúdo.

    CSS3: Para a estilização e design da interface, com classes específicas para cada componente.

    JavaScript (Vanilla): Para a manipulação do DOM, interatividade e carregamento dinâmico do conteúdo dos componentes sem a necessidade de recarregar a página.

📂 Estrutura do Projeto

O projeto está organizado de forma modular para facilitar o desenvolvimento colaborativo. Cada membro da equipe trabalha em seu próprio arquivo HTML (componente), que é carregado dinamicamente na página principal.

/
├── CSS/
│   └── style.css         # Folha de estilo principal e compartilhada
├── Images/
│   ├── logoDoSite.png
│   └── ...               # Outras imagens utilizadas nos componentes
├── JS/
│   └── app.js            # Lógica para carregamento dinâmico do conteúdo
├── conteudo/
│   ├── antonio.html      # Componente do Antonio
│   ├── carlos.html
│   ├── elisa.html
│   ├── glauber.html
│   ├── rafael.html
│   ├── reynan.html
│   ├── robson.html
│   └── victoria.html     # ... e assim por diante para cada membro
│
└── index.html            # A página principal que carrega todos os componentes

Como Funciona?

    O index.html serve como a base da aplicação. Ele contém o cabeçalho, a navegação principal e uma série de <article> vazios, cada um com um id correspondente ao nome de um membro da equipe.

    O arquivo app.js é responsável por interceptar os cliques nos links de navegação.

    Ao clicar em um link (ex: "Glauber"), o JavaScript previne o comportamento padrão do navegador, identifica o id do alvo (glauber), e busca o arquivo correspondente (/conteudo/glauber.html).

    O conteúdo do arquivo é então injetado dinamicamente dentro do <article id="glauber"> na página principal, criando a experiência de uma Single Page Application.

👨‍💻 Equipe e Contribuições

Este projeto foi desenvolvido pela equipe "Coda Fofos", com cada membro responsável por desenvolver um componente sobre um tópico específico de IHC:

    Antônio: Planejamento e Avaliação

    Carlos: Design UX

    Elisa: Engenharia de Usabilidade

    Glauber: Tipos de Interfaces

    Rafael: Engenharia Cognitiva e de Software

    Reynan: Arquitetura de Informação

    Robson: Tipos de Interface e Qualidade

    Victoria: Interação e affordance

⚙️ Como Executar o Projeto

Como este projeto utiliza apenas tecnologias front-end, você não precisa de um servidor complexo. Siga os passos abaixo:

    Clone este repositório para a sua máquina local.

    Abra o arquivo index.html em seu navegador de preferência (Google Chrome, Firefox, etc.).

    Navegue pelos diferentes conteúdos utilizando o menu no topo da página.

