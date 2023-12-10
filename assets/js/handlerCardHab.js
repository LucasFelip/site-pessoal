const cards = [
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
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        nome: "PostgreSQL"
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
    }
    ,
    {
        imagemLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
        nome: "Adobre Xd"
    }
];

function criarCard(card) {
    return `
    	<div class="card col-md-12 my-2">
    		<img src="${card.imagemLink}" />
    		<p class="py-1 text-black fw-bolder">${card.nome}</p>
		</div>
    `;
}

const cardContainer = document.getElementById('habilidadesContainer');

cards.forEach(card => {
    const cardHTML = criarCard(card);
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
});