const listaDePDFs = [
    {
        pdf: "Capacitação_em_Routing_e_Switching.pdf",
        nome: "Capacitação em Routing e Switching"
    },
    {
        pdf: "Hackthon.pdf",
        nome: "Universo IFMA - Hackthon"
    },
    {
        pdf: "Java COMPLETO 2023 Programação Orientada a Objetos +Projetos.pdf",
        nome: "Java POO - 2023"
    },
    {
        pdf: "Java_2022_COMPLETO_D_ Zero_ao_Profissional_Projetos.pdf",
        nome: "Java POO - 2022"
    },
    {
        pdf: "Jogos_3D_com_Unity__modo_multiplayer.pdf",
        nome: "Jogos com Unity"
    },
    {
        pdf: "Organização de Equipes ageis__os papeis existentes em uma equipe.pdf",
        nome: "Organização de Equipes ágeis - os papeis existentes em uma equipe"
    },
    {
        pdf: "Project_Development_Using_JAVA_for_Beginners.pdf",
        nome: "Java for Beginners"
    },
    {
        pdf: "scrum__agilidade_em_seu_projeto.pdf",
        nome: "Scrum - Agilidade em seu projeto"
    },
    {
        pdf: "Semana_Spring_React.pdf",
        nome: "Semana Spring React"
    }
];

function criarCardPDF(pdf) {
    return `
    <div class="col-lg-4 col-md-6 col-12 mb-4">
        <div class="card h-100">
            <embed src="/assets/documentos/diplomas/${pdf.pdf}" type="application/pdf" width="100%" height="auto" class="card-img-top" />
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${pdf.nome}</h5>
                <p class="card-text">Este certificado é uma comprovação de conclusão e participação.</p>
                <div class="mt-auto">
                    <a href="/assets/documentos/diplomas/${pdf.pdf}" class="btn btn-primary" target="_blank">Abrir</a>
                </div>
            </div>
        </div>
    </div>
    `;
}

const certificadosContainer = document.getElementById('certificadosContainer');

listaDePDFs.forEach(pdf => {
    const cardHTML = criarCardPDF(pdf);
    certificadosContainer.insertAdjacentHTML('beforeend', cardHTML);
});
