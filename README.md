# Projeto de Currículo Web

Este projeto é um site pessoal que funciona como um currículo online de Lucas Ferreira, desenvolvedor Java Backend Jr. O objetivo é apresentar de forma visual e interativa informações relevantes sobre a trajetória profissional, habilidades, projetos e experiência de Lucas Ferreira.

## Estrutura do Site:

### 1. Sobre Mim
Esta seção apresenta uma introdução sobre Lucas Ferreira, incluindo sua formação acadêmica e sua motivação como desenvolvedor. Lucas é apaixonado por tecnologia e desenvolvimento, sempre em busca de aprimorar suas habilidades em Java e aprender novas tecnologias.

### 2. Habilidades
Uma lista de habilidades e tecnologias que Lucas teve a oportunidade de trabalhar e aprimorar. A lista inclui, mas não se limita a:
- Linguagens de programação: Java, Python, Swift, C, Dart, JavaScript
- Ferramentas de desenvolvimento: Git, GitHub, GitLab, Jira, Xcode, VSCode, IntelliJ
- Frameworks: Spring Boot, Flutter, Bootstrap
- Banco de dados: MySQL, MongoDB, Firebase
- Outras tecnologias: Docker, AWS, Netlify, Postman

Essas habilidades são exibidas com ícones, proporcionando uma visualização intuitiva das competências.

### 3. Projetos
Nesta seção, você encontrará uma seleção de projetos desenvolvidos por Lucas, com uma breve descrição e links para os repositórios no GitHub. Alguns dos projetos destacados incluem:
- **Curriculum**: Site pessoal que apresenta informações sobre a trajetória profissional e projetos desenvolvidos.
- **Hamburger API**: API para gerenciamento de uma hamburgueria.
- **Top Musics**: Interface para listagem e detalhes de músicas, utilizando dados da API do Spotify.
- **Vendedores**: Sistema para relatório de dados de vendas, com frontend em React e API Spring.
- **ListJogos**: Sistema de recomendação de jogos com base no IMDB.
- **iMobility**: Aplicativo iOS para registro de problemas em vias públicas.
- **Ponto Eletrônico**: Sistema de controle de ponto eletrônico.

Cada projeto inclui tecnologias utilizadas, como Java, Spring, HTML, CSS, entre outras.

### 4. Experiências
Detalhes sobre a trajetória profissional de Lucas, incluindo estágios e trabalhos como suporte de TI e desenvolvedor. As principais experiências incluem:
- **Coreplan Gestão Tecnologia e Serviços LTDA**: Suporte de TI, focado na manutenção do Sistema de Processos Automatizados e na interação com a Procuradoria Geral do Estado do Maranhão.
- **Tribunal de Justiça do Maranhão (TJMA)**: Estágio no desenvolvimento do sistema SAPRE, utilizando Java EE 11, e integrações com PJe.
- **Junta Comercial do Estado do Maranhão (JUCEMA)**: Estágio focado em migração de banco de dados e manutenção de sistemas legados em Java.


## Tecnologias Utilizadas

- **HTML, CSS, JavaScript**: Linguagens básicas para construção e estilização do site.
- **Bootstrap**: Utilizado para estilização dos elementos e responsividade.
- **Spring Boot**: Utilizado em APIs de alguns dos projetos destacados.
- **ScrollReveal**: Utilizado para adicionar efeitos de revelação de elementos ao rolar a página.

## Arquitetura do Projeto:

### CSS
O projeto utiliza arquivos CSS separados para modularidade e organização:
- `base.css`: Define o estilo base para a página, incluindo o uso da fonte 'Poppins'.
- `cardHab.css`, `cardProjeto.css`, `cardExp.css`: Estilos específicos para seções do site, como habilidades, projetos e experiências.
- `footer.css`, `navbar.css`: Estilos para o rodapé e a barra de navegação.

### JavaScript
Scripts JavaScript foram utilizados para dinamizar o conteúdo do site:
- `handlerCardExp.js`, `handlerCardHab.js`, `handlerCardProjeto.js`: Scripts que geram cards dinamicamente para cada seção.
- `imports.js`: Carrega e adiciona os scripts e CSS necessários ao documento.
- `IncludeComponent.js`: Faz a inclusão de partes do HTML de forma modular, como a barra de navegação e o rodapé.
- `RevealItens.js`: Implementa animações de revelação de elementos ao rolar a página.

### HTML
O projeto é estruturado com diversos arquivos HTML para melhor modularidade:
- `index.html`: Página principal que redireciona para `main.html`.
- `main.html`: Contém o conteúdo principal do site, incluindo seções de habilidades, projetos e experiências.
- `navbar.html`, `footerContatos.html`: Partes modulares da página que são incluídas no `main.html`.

## Como Executar Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/LucasFelip/site-pessoal.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd site-pessoal
   ```

3. Abra o arquivo `index.html` em seu navegador para visualizar o currículo.

## Contato

<div align-items="center">
        <a href="https://www.twitch.tv/luckylusca">
            <img src="https://img.shields.io/badge/Twitch-5946b2?style=for-the-badge&logo=twitch&logoColor=white"></a>
        <a href="mailto:lucasfelipereis@hotmail.com">
            <img class="my-1" src="https://img.shields.io/badge/Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white"></a>
        <a href="mailto:luscafreis@gmail.com">
            <img class="my-1" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
        <a href="https://www.linkedin.com/in/lucas-reis-5247b1221/">
            <img class="my-1" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
        <a href="https://github.com/LucasFelip">
            <img class="my-1" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
        <a href="https://discord.com/channels/@luckylusca">
            <img class="my-1" src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"></a>
    </div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ae26dbf5-26f8-4c1a-bbd2-8183fad61d42/deploy-status)](https://app.netlify.com/sites/lucasfelipe/deploys)