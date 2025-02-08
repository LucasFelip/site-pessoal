const cards = [
    {
        imagemLink: 'https://media.licdn.com/dms/image/D4D03AQF0xdN7Q2XS4Q/profile-displayphoto-shrink_800_800/0/1673450964826?e=2147483647&v=beta&t=ywL6nJJDaY8xzCI8Sfrorqw0_TCuyjO8rE6BrfXp4wI',
        instituicao: 'Coreplan Gestão Tecnologia e Serviços',
        localizacao: 'Fortaleza, CE',
        inicioMes: 'Novembro',
        inicioAno: '2023',
        terminoMes: 'Atualmente',
        terminoAno: '',
        cargo: 'Analista de Suporte de TI',
        atuacao: 'Atuo na manutenção do Sistema de Processos Automatizados (SPA), prestando suporte técnico especializado para procuradorias estaduais e municipais (PGE e PGM) e participando do processo de análise e uso do sistema junto ao cliente.',
        link: 'https://www.coreplan.com.br/'
    },
    {
        imagemLink: 'https://www.tjma.jus.br/imagens/logo_share.png',
        instituicao: 'Tribunal de Justiça do Maranhão',
        localizacao: 'São Luís, MA',
        inicioMes: 'Agosto',
        inicioAno: '2022',
        terminoMes: 'Novembro',
        terminoAno: '2023',
        cargo: 'Estagiário de Desenvolvimento de Software',
        atuacao: 'Participei do desenvolvimento e manutenção do sistema SAPRE, focado na gestão de precatórios. Contribuí para o gerenciamento de demandas, organização da equipe via metodologias ágeis (Scrum), e auxiliei na análise de código e resolução de bugs.',
        link: 'https://www.tjma.jus.br/'
    },
    {
        imagemLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqmXO8nCMqO8lMGqTnKM_7vgims6zAf9fEvVWRJw&s',
        instituicao: 'Junta Comercial do Estado do Maranhão',
        localizacao: 'São Luís, MA',
        inicioMes: 'Outubro',
        inicioAno: '2021',
        terminoMes: 'Agosto',
        terminoAno: '2022',
        cargo: 'Estagiário de Desenvolvimento de Software',
        atuacao: 'Atuei na migração do banco de dados do sistema de Consulta Empresarial, transferindo dados do banco PL/SQL  para o banco Apache Pinot, e posteriormente para o MongoDB, visando melhorar a performance e os resultados das consultas.',
        link: 'https://www.jucema.ma.gov.br/'
    },
];

const orderedCards = cards.sort((a, b) => {
    const dateA = new Date(a.terminoAno || new Date().getFullYear(), a.terminoMes === "Atualmente" ? 11 : new Date(Date.parse(a.inicioMes + " 1, " + a.inicioAno)).getMonth());
    const dateB = new Date(b.terminoAno || new Date().getFullYear(), b.terminoMes === "Atualmente" ? 11 : new Date(Date.parse(b.inicioMes + " 1, " + b.inicioAno)).getMonth());
    return dateB - dateA;
});

function criarCard(card) {
    const termino = card.terminoAno ? `${card.terminoMes} de ${card.terminoAno}` : 'Atualmente';

    return `
    <div class="card experience-card">
      <div class="experience-header d-flex align-items-center">
          <img src="${card.imagemLink}" alt="${card.instituicao}" class="experience-img">
          <div class="experience-info">
              <h5 class="experience-title">${card.instituicao} - ${card.cargo}</h5>
              <p class="experience-location">${card.localizacao}</p>
          </div>
      </div>
      <div class="experience-body">
          <p class="experience-description">${card.atuacao}</p>
          <div class="experience-dates">
              <span class="badge badge-start">${card.inicioMes} de ${card.inicioAno}</span>
              <span class="badge badge-end">${termino}</span>
          </div>
          ${card.link ? `<a href="${card.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-link">Conheça</a>` : ''}
      </div>
    </div>
  `;
}

const cardContainer = document.getElementById('experienciaContainer');
orderedCards.forEach(card => {
    const cardHTML = criarCard(card);
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
});