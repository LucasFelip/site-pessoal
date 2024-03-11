const cards = [
    {
        imagem: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VycmljdWx1bXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        titulo: 'Curriculum',
        githubLink: 'https://github.com/LucasFelip/site-pessoal',
        descricao: 'Site currículo que apresenta informações relevantes sobre minha trajetória profissional e projetos.',
        tipos: ['HTML', 'CSS', 'JS', 'Bootstrap']
    },
    {
        
        imagem: 'https://plus.unsplash.com/premium_photo-1684923610122-028894099cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        titulo: 'Hamburger',
        githubLink: 'https://github.com/LucasFelip/API-hambugueria',
        descricao: 'API desenvolvida para auxiliar o gerenciamento de hamburgueria com operações basicas de funcionamento.',
        tipos: ['Java', 'Spring', 'MySQL']
    },
    {
        imagem: 'https://images.unsplash.com/photo-1532354058425-ba7ccc7e4a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvdGlmeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        titulo: 'Top Musics',
        githubLink: 'https://github.com/LucasFelip/TopMusic',
        descricao: 'Projeto de interface para a listagem e detalhes de dados para o usuário, dados da API do Spotify.',
        tipos: ['Swift', 'UIKit']
    },
    {
        imagem: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        titulo: 'Vendedores',
        githubLink: 'https://github.com/LucasFelip/projeto-sds3',
        descricao: 'Sistema relatório de dados de vendas de funcionários com uma interface em React e uma API Spring.',
        tipos: ['Java', 'Spring', 'React']
    },
    {
        imagem: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        titulo: 'ListJogos',
        githubLink: 'https://github.com/LucasFelip/sistemaDeRecomendacaoJogos',
        descricao: 'Sistema que recomenda jogos com base no parâmetro IMDB e com parâmetros solicitados pelo usuário.',
        tipos: ['Python', 'Analysts']
    },
    {
        imagem: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80',
        titulo: 'Redes',
        githubLink: 'https://github.com/LucasFelip/AmbienteRedesComputadores',
        descricao: 'Ambiente de redes de computadores focando no desenvolvimento de rede com servidores e PC\'s.',
        tipos: ['Redes de computadores', 'Cisco']
    },
    {
        imagem: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVyYmFubyUyMCU3Q3xlbnwwfDB8MHx8fDA%3D',
        titulo: 'iMobility',
        githubLink: 'https://github.com/LucasFelip/iMobility',
        descricao: 'Aplicativo iOS para registro de problemas em vias públicas e análise de ocorrências.',
        tipos: ['Swift', 'SwiftUI', 'MapKIT']
    },
    {
        imagem: 'https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo: 'Ponto Eletrônico',
        githubLink: 'https://github.com/LucasFelip/pontoEletronico',
        descricao: 'Sistema de ponto eletrônico para cálculo de horas extras e atrasos, com base nas horas de trabalho e na marcação',
        tipos: ['Java', 'Spring', 'JS', 'Bootstrap']
    },
    {
        imagem: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        titulo: 'Gestão Financeira',
        githubLink: 'https://github.com/LucasFelip/gestao',
        descricao: 'Sistema de Gestão Financeira para controle de gastos e ganhos para cada usuário logado, para planejamento financeiro',
        tipos: ['Java', 'Spring', 'JS', 'MySQL']
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
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
