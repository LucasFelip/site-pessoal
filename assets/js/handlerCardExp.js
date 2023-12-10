const cards = [
    {
        imagemLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqmXO8nCMqO8lMGqTnKM_7vgims6zAf9fEvVWRJw&s',
        instituicao: 'JUCEMA',
        inicioMes: 'Outubro',
        inicioAno: '2021',
        terminoMes: 'Agosto',
        terminoAno: '2022',
        cargo: 'Estagiário',
        atuacao: 'Atuei no projeto de migração de dados do Consulta empresarial. O projeto consistiu em migrar o dados para melhorar performance e resultados, com base nas informações presentes no banco.'
    },
    {
        imagemLink: 'https://www.tjma.jus.br/imagens/logo_share.png',
        instituicao: 'TJMA',
        inicioMes: 'Agosto',
        inicioAno: '2022',
        terminoMes: 'Novembro',
        terminoAno: '2023',
        cargo: 'Estagiário',
        atuacao: "Atuei no sistema SAPRE do TJMA, sistema de precatórios. Ajudei no gerenciamento de demandas para melhorar organização, além de auxiliar nas análise de código e resolução de bugs"
    },
    {
        imagemLink: 'data:image/jpeg;base64,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',
        instituicao: 'NNT',
        inicioMes: 'Março',
        inicioAno: '2023',
        terminoMes: 'Dezembro',
        terminoAno: '2023',
        cargo: 'Estudante',
        atuacao: 'Atuei na criação do Projeto iMobility, projeto faz parte de um grupo de projetos de inovação, do Novos Negócios em TIC do IFCE, protagonizado por estudantes do ensino médio e superior'
    },
    {
        imagemLink: 'https://media.licdn.com/dms/image/D4D03AQF0xdN7Q2XS4Q/profile-displayphoto-shrink_800_800/0/1673450964826?e=2147483647&v=beta&t=ywL6nJJDaY8xzCI8Sfrorqw0_TCuyjO8rE6BrfXp4wI',
        instituicao: 'Coreplan',
        inicioMes: 'Novembro',
        inicioAno: '2023',
        terminoMes: '',
        terminoAno: '',
        cargo: 'Suporte de TI',
        atuacao: 'Atuei na manutenção do Sistema de Processos Automatizados, participando diretamente com o cliente no processo de analise e uso do sistema, como a Procuradoria Geral do Estado do Maranhão'
    }
];

function criarCard(card) {
    return `
        <div class="card m-2" style="max-width: 40rem;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${card.imagemLink}" class="img-fluid rounded-start p-3">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${card.instituicao} - ${card.cargo}</h5>
                <p class="card-text">${card.atuacao}</p>
                <div class="bottom">
                    <p class="badge bg-primary">${card.inicioMes} de ${card.inicioAno}</p>
                    <p class="badge bg-primary">${card.terminoMes} de ${card.terminoAno}</p>                
                </div>
              </div>
            </div>
          </div>
        </div>
    `;
}

const cardContainer = document.getElementById('experienciaContainer');

cards.forEach(card => {
    const cardHTML = criarCard(card);
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
});