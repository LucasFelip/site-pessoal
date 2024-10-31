const cardsHabs = [
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        nome: "JavaScript"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        nome: "Java"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        nome: "Spring Boot"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        nome: "Git"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        nome: "GitHub"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        nome: "GitLab"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        nome: "MySQL"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        nome: "PostgreSQL"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        nome: "MongoDB"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        nome: "Docker"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        nome: "Bootstrap"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
        nome: "Netlify"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        nome: "Firebase"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        nome: "Jira"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        nome: "AWS"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        nome: "VSCode"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        nome: "Swift"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
        nome: "Xcode"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        nome: "Flutter"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
        nome: "Eclipse"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        nome: "Postman"
    },
];

function criarCard(card) {
    return `
        <div class="col-3 col-sm-1 m-1 handlerCardHab-exclusive">
            <img src="${card.imagemLink}" />
        </div>
    `;
}

const cardHabContainer = document.getElementById('habilidadesContainer');

cardsHabs.forEach(cardsHabs => {
    const cardHTML = criarCard(cardsHabs);
    cardHabContainer.insertAdjacentHTML('beforeend', cardHTML);
});

function adjustResponsiveness() {
    const windowWidth = window.innerWidth;
    const cards = document.querySelectorAll('.handlerCardHab-exclusive .card');

    cards.forEach(card => {
        const img = card.querySelector('img');
        const p = card.querySelector('p');

        img.classList.remove('img-responsive');
        p.classList.remove('hidden');

        // Adiciona classes com base na largura da tela
        if (windowWidth < 768) {
            img.classList.add('img-responsive');
            p.classList.add('hidden');
        } else if (windowWidth < 1024) {
            img.classList.add('img-responsive');
        }
    });
}

adjustResponsiveness();

window.addEventListener('resize', adjustResponsiveness);
