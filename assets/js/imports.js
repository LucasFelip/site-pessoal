// Função para adicionar os imports padrão
function addDefaultImports() {
    // IncludeComponent.js
    const includeComponentScript = document.createElement("script");
    includeComponentScript.src = "/assets/js/IncludeComponent.js";
    document.head.appendChild(includeComponentScript);

    // Bootstrap CSS
    const bootstrapCssLink = document.createElement("link");
    bootstrapCssLink.rel = "stylesheet";
    bootstrapCssLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapCssLink);

    // Popper.js
    const popperScript = document.createElement("script");
    popperScript.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js";
    document.head.appendChild(popperScript);

    // Bootstrap JS
    const bootstrapJsScript = document.createElement("script");
    bootstrapJsScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";
    document.head.appendChild(bootstrapJsScript);

    // Favicon
    const faviconLink = document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.href = "/assets/img/icon-avatar.svg";
    document.head.appendChild(faviconLink);

    // Base CSS
    const baseCssLink = document.createElement("link");
    baseCssLink.rel = "stylesheet";
    baseCssLink.href = "/assets/css/base.css";
    document.head.appendChild(baseCssLink);
}

// Chamar a função para adicionar os imports padrão
addDefaultImports();
