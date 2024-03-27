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
        imagemLink: 'https://media.licdn.com/dms/image/C4D0BAQHWKVQwjoGb0g/company-logo_200_200/0/1676036117278/novosnegciostic_logo?e=1714003200&v=beta&t=uW3b6wdyNzW7EhlsfTfP57bLEzGlZReoSkEUfKefQqo',
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
        atuacao: 'Atuo na manutenção do Sistema de Processos Automatizados, participando diretamente com o cliente no processo de analise e uso do sistema, como a Procuradoria Geral do Estado do Maranhão'
    }
];

function criarCard(card) {
    return `
        <div class="card m-2" style="max-width: 40rem; margin-left: auto; margin-right: auto; width: calc(100% - 40px);">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${card.imagemLink}" class="img-fluid rounded-start p-3" style="width: 12em; height: 12em;">
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