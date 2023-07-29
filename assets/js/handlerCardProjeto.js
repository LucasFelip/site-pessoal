const cards = [
    {
        classes: 'article-wrapper col-4 mx-2',
        imagem: '/assets/img/curriculum.jpg',
        titulo: 'Curriculum',
        githubLink: 'https://github.com/LucasFelip/site-pessoal',
        icone: 'bi bi-arrow-right',
        descricao: 'Site currículo que apresenta informações relevantes sobre minha trajetória profissional e projetos.',
        tipos: ['HTML', 'CSS', 'JS', 'Bootstrap']
    },
    {
        classes: 'article-wrapper col-4 mx-2',
        imagem: '/assets/img/burguer.jpg',
        titulo: 'Hamburger',
        githubLink: 'https://github.com/LucasFelip/API-hambugueria',
        icone: 'bi bi-arrow-right',
        descricao: 'API desenvolvida para auxiliar o gerenciamento de hamburgueria com operações basicas de funcionamento.',
        tipos: ['Java', 'Spring', 'MySQL']
    },
    {
        classes: 'article-wrapper col-4 mx-2',
        imagem: '/assets/img/spotify.jpg',
        titulo: 'ListMusic',
        githubLink: '#',
        icone: 'bi bi-arrow-right',
        descricao: 'Projeto de interface para a listagem e detalhes de dados para o usuário, dados da API do Spotify.',
        tipos: ['Swift']
    },
    {
        classes: 'article-wrapper col-4 mx-2',
        imagem: '/assets/img/sellers.jpg',
        titulo: 'Vendedores',
        githubLink: 'https://github.com/LucasFelip/projeto-sds3',
        icone: 'bi bi-arrow-right',
        descricao: 'Sistema relatório de dados de vendas de funcionários com uma interface em React e uma API Spring.',
        tipos: ['Java', 'Spring', 'React']
    },
    {
        classes: 'article-wrapper col-4 mx-2',
        imagem: '/assets/img/recomenda_jogos.jpg',
        titulo: 'ListJogos',
        githubLink: 'https://github.com/LucasFelip/sistemaDeRecomendacaoJogos',
        icone: 'bi bi-arrow-right',
        descricao: 'Sistema que recomenda jogos com base no parâmetro IMDB e com parâmetros solicitados pelo usuário.',
        tipos: ['Python']
    },
    {
        classes: 'article-wrapper col-4 mx-2',
        imagem: '/assets/img/redes_computadores.jpg',
        titulo: 'Redes',
        githubLink: 'https://github.com/LucasFelip/AmbienteRedesComputadores',
        icone: 'bi bi-arrow-right',
        descricao: 'Ambiente de redes de computadores focando no desenvolvimento de rede com servidores e PC\'s.',
        tipos: ['Redes de computadores', 'Cisco']
    }
];

function criarCard(card) {
    return `
    <article class="article-wrapper col-4 mx-2">
      <img class="rounded-lg container-project" src="${card.imagem}">
      <div class="project-info">
        <div class="flex-pr">
          <div class="project-title text-nowrap">${card.titulo}</div>
          <a href="${card.githubLink}" class="btn btn-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="${card.icone}" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </a>
        </div>
        <p class="text-dark">${card.descricao}</p>
        <div class="types">
          ${card.tipos.map(tipo => `<span class="project-type">${tipo}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

const cardContainer = document.getElementById('projetosContainer');

cards.forEach(card => {
    const cardHTML = criarCard(card);
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
});
