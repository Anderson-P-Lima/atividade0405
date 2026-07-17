class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
            <header role="banner">
                <div class="container-header">
                    <span class="header-project-name">A chamada da Senhora Sombria</span>
                    <div class="header-logo">
                        <a href="#"><img src="/src/Sylvanas_Crest.png" alt="Brasão da Senhora Sombria" class="logo"></a>
                    </div>
                    <div class="header-buttons">
                        <div class="lang-dropdown">
                            <button onclick="toggleLangMenu()" class="lang-btn">
                                <span class="material-symbols-outlined">language</span>
                            </button>
                            <div id="langMenu" class="lang-content">
                                <a href="?lang=en" lang="en">English</a>
                                <a href="?lang=pt-BR" lang="pt">Português</a>
                                <a href="?lang=fr" lang="fr">Français</a>
                                <a href="?lang=cn" lang="zh-CN">官话</a>
                            </div>
                        </div>
                        <div class="header-auth">
                            <button id="openLogin" class="btn-login" aria-label="Login">Entrar</button>
                        </div>
                    </div>
                </div>
            </header>`
    }
}

customElements.define('site-header', SiteHeader)