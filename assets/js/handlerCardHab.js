const cardsHabs = [
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        nome: "Python"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        nome: "Java"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        nome: "Jira"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        nome: "Swift"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        nome: "Bootstrap"
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
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        nome: "Git"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        nome: "GitHub"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        nome: "MySQL"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        nome: "VSCode"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        nome: "Spring"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
        nome: "IntelliJ"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
        nome: "Premiere"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        nome: "MongoDB"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        nome: "Figma"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        nome: "C"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        nome: "GitLab"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        nome: "Firebase"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        nome: "Adobre Xd"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg",
        nome: "Eclipse"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        nome: "AWS"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        nome: "Javascript"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        nome: "Docker"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
        nome: "Netlify"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        nome: "Postman"
    },
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg",
        nome: "Tomcat"
    }
];

function criarCard(card) {
    return `
        <div class="card col-3 col-sm-1 m-1 handlerCardHab-exclusive">
            <img src="${card.imagemLink}" />
            <p class="text-blank fw-bolder">${card.nome}</p>
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
