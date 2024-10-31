const todosProjetos  = [
    {
        titulo: 'Curriculum',
        githubLink: 'https://github.com/LucasFelip/site-pessoal',
        descricao: 'Site currículo que apresenta informações relevantes sobre minha trajetória profissional e projetos.',
        tipos: ['HTML', 'CSS', 'JS', 'Bootstrap'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Hamburger',
        githubLink: 'https://github.com/LucasFelip/API-hambugueria',
        descricao: 'API desenvolvida para auxiliar o gerenciamento de hamburgueria com operações basicas de funcionamento.',
        tipos: ['Java', 'Spring', 'MySQL'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Top Musics',
        githubLink: 'https://github.com/LucasFelip/TopMusic',
        descricao: 'Projeto de interface para a listagem e detalhes de dados para o usuário, dados da API do Spotify.',
        tipos: ['Swift', 'UIKit'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Vendedores',
        githubLink: 'https://github.com/LucasFelip/projeto-sds3',
        descricao: 'Sistema relatório de dados de vendas de funcionários com uma interface em React e uma API Spring.',
        tipos: ['Java', 'Spring', 'React'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'ListJogos',
        githubLink: 'https://github.com/LucasFelip/sistemaDeRecomendacaoJogos',
        descricao: 'Sistema que recomenda jogos com base no parâmetro IMDB e com parâmetros solicitados pelo usuário.',
        tipos: ['Python', 'Analysts'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Redes',
        githubLink: 'https://github.com/LucasFelip/AmbienteRedesComputadores',
        descricao: 'Ambiente de redes de computadores focando no desenvolvimento de rede com servidores e PC\'s.',
        tipos: ['Redes de computadores', 'Cisco'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'iMobility',
        githubLink: 'https://github.com/LucasFelip/iMobility',
        descricao: 'Aplicativo iOS para registro de problemas em vias públicas e análise de ocorrências.',
        tipos: ['Swift', 'SwiftUI', 'MapKIT'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Ponto Eletrônico',
        githubLink: 'https://github.com/LucasFelip/pontoEletronico',
        descricao: 'Sistema de ponto eletrônico para cálculo de horas extras e atrasos, com base nas horas de trabalho e na marcação',
        tipos: ['Java', 'Spring', 'JS', 'Bootstrap'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Gestão Financeira',
        githubLink: 'https://github.com/LucasFelip/gestao',
        descricao: 'Sistema de Gestão Financeira para controle de gastos e ganhos para cada usuário logado, para planejamento financeiro',
        tipos: ['Java', 'Spring', 'JS', 'MySQL'],
        tipoProjeto: 'Pessoal'
    },
    {
        titulo: 'Aplicativo de Transporte Vai de Ferry',
        descricao: 'Desenvolvimento do backend para aplicativo que fornece informações de transporte ferroviário e aquático.',
        tipos: ['Java', 'Spring Boot', 'PostgreSQL'],
        tipoProjeto: 'Acadêmico'
    },
    {
        titulo: 'Tabuleiro BD - Jogo Educacional',
        descricao: 'Assistência técnica no desenvolvimento de um jogo para ensino de banco de dados, com gamificação.',
        tipos: ['Gamificação', 'Banco de Dados'],
        tipoProjeto: 'Acadêmico'
    },
    {
        titulo: 'Aplicativo Educativo sobre Segurança da Informação',
        descricao: 'Aplicativo interativo para ensino de segurança da informação com jogos educativos.',
        tipos: ['Segurança', 'Educação', 'Desenvolvimento'],
        tipoProjeto: 'Acadêmico'
    }
];

const INITIAL_PROJECTS_TO_SHOW = 3; // Quantidade inicial de projetos exibidos
let projectsDisplayed = INITIAL_PROJECTS_TO_SHOW; // Quantidade de projetos atualmente exibidos

// Função para criar o card de cada projeto
function criarCardProjeto(card) {
    return `
    <article class="project-card">
      <header class="project-card__header">
        <div class="project-card__title">
          <h3>${card.titulo}</h3>
        </div>
        <span class="badge-info">${card.tipoProjeto}</span>
      </header>
      <p class="project-card__description">${card.descricao}</p>
      <footer>
        <div class="project-card__types">
            ${card.tipos.map(tipo => `<span class="project-type">${tipo}</span>`).join('')}
        </div>
        ${card.githubLink ? `<a href="${card.githubLink}" class="project-card__button" target="_blank">Ver mais</a>` : ''}
      </footer>
    </article>
  `;
}

// Função para exibir projetos
function renderProjects() {
    const projetosContainer = document.getElementById('projetosContainer');
    projetosContainer.innerHTML = ''; // Limpa o container

    todosProjetos.slice(0, projectsDisplayed).forEach((card, index) => {
        const cardHTML = criarCardProjeto(card);
        projetosContainer.insertAdjacentHTML('beforeend', cardHTML);

        // Adiciona a classe 'show' para animação
        setTimeout(() => {
            const lastProject = projetosContainer.lastElementChild;
            lastProject.classList.add('show');
        }, index * 100); // Diferencia o tempo para cada card
    });

    // Mostrar ou esconder o botão "Exibir mais projetos"
    const loadMoreButton = document.getElementById('loadMoreButton');
    loadMoreButton.style.display = projectsDisplayed >= todosProjetos.length ? 'none' : 'inline-block';
}

// Função para carregar mais projetos ao clicar no botão
function loadMoreProjects() {
    projectsDisplayed += 3; // Adiciona mais 3 projetos a cada clique
    renderProjects();
}

// Evento de clique para o botão "Exibir mais projetos"
document.getElementById('loadMoreButton').addEventListener('click', loadMoreProjects);

// Renderiza os projetos iniciais ao carregar a página
renderProjects();
