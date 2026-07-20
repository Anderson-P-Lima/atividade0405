class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
            <header>
                <div class="container-header">
                    <span class="header-project-name">A chamada da Senhora Sombria</span>
                    <div class="header-logo">
                        <a href="#"><img src="/src/Sylvanas_Crest.png" alt="Brasão da Senhora Sombria" class="logo"></a>
                    </div>
                    <div class="header-buttons">
                        <div class="lang-dropdown">
                            <button onclick="toggleLangMenu()" id="langButton" class="lang-btn" aria-expanded="false" aria-haspopup="menu">
                                <span class="material-symbols-outlined" aria-hidden="true">language</span>
                                <span class="sr-only">Selecionar idioma</span>
                            </button>
                            <div id="langMenu" class="lang-content" role="menu" aria-labelledby="langButton">
                                <a href="?lang=en" lang="en" role="menuitem" tabindex="-1">English</a>
                                <a href="?lang=pt-BR" lang="pt" role="menuitem" tabindex="-1">Português</a>
                                <a href="?lang=fr" lang="fr" role="menuitem" tabindex="-1">Français</a>
                                <a href="?lang=cn" lang="zh-CN" role="menuitem" tabindex="-1">官话</a>
                            </div>
                        </div>
                        <div class="header-auth">
                            <button id="openLogin" class="btn-login">Entrar</button>
                        </div>
                    </div>
                </div>
            </header>`
            const langBtn = this.querySelector('#langButton');
    const langMenu = this.querySelector('#langMenu');
    const menuItems = langMenu.querySelectorAll('[role="menuitem"]');
    let currentIndex = -1;

    const openMenu = () => {
      langBtn.setAttribute('aria-expanded', 'true');
      langMenu.style.display = 'block';

      currentIndex = 0;
      menuItems[currentIndex].focus();
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleEscape);
    };

    const closeMenu = () => {
      langBtn.setAttribute('aria-expanded', 'false');
      langMenu.style.display = 'none';
      currentIndex = -1;
      langBtn.focus();
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };

    const handleOutsideClick = (e) => {
      if (!langMenu.contains(e.target) && e.target !== langBtn) {
        closeMenu();
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = langBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    langMenu.addEventListener('keydown', (e) => {
      const items = Array.from(menuItems);
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          currentIndex = (currentIndex + 1) % items.length;
          items[currentIndex].focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          currentIndex = (currentIndex - 1 + items.length) % items.length;
          items[currentIndex].focus();
          break;
        case 'Home':
          e.preventDefault();
          currentIndex = 0;
          items[0].focus();
          break;
        case 'End':
          e.preventDefault();
          currentIndex = items.length - 1;
          items[currentIndex].focus();
          break;
        case 'Escape':
          e.preventDefault();
          closeMenu();
          break;
        case 'Tab':

          closeMenu();
          break;
      }
    });


    langBtn.addEventListener('click', (e) => e.stopPropagation());


    langMenu.style.display = 'none';

    }
}

customElements.define('site-header', SiteHeader)