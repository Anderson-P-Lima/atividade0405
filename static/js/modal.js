class SiteModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<div id="loginModal" class="modal-overlay" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
                <div id="modalBox" class="modal-content">
                    <button id="closeLogin" class="modal-close" aria-label="Fechar modal">&times;</button>
                    <div class="modal-header">
                        <h2 id="modal-title">Bem vindo de volta</h2>
                        <p id="modal-desc">Acesse sua conta para continuar</p>
                    </div>
                    <form action="" id="loginForm">
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" class="email" placeholder="seu@email.com" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Senha</label>
                            <input type="password" id="password" class="password" placeholder="Digite sua senha" required>
                        </div>
                        <button type="submit" class="btn-submit">Entrar</button>
                    </form>
                    <div class="modal-footer">
                        <a href="#">Esqueci minha conta</a>
                        <span>Não tem conta? <a href="/template/register.html">Cadastre-se</a></span>
                    </div>
                </div>
            </div>`;
        const modal = this.querySelector('#loginModal');
        const closeBtn = this.querySelector('#closeLogin');
        const modalBox = this.querySelector('#modalBox');
        const emailInput = this.querySelector('#email');

        const openLogin = document.getElementById('openLogin');
        if (!openLogin) return;

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        let previousActiveElement = null;

        const getFocusableElements = () =>
            modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

        const openModal = () => {
            previousActiveElement = document.activeElement;
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = scrollbarWidth + 'px';

            if (emailInput) emailInput.focus();

            document.addEventListener('keydown', handleKeyDown);
        };

        const closeModal = () => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
            document.removeEventListener('keydown', handleKeyDown);

            if (previousActiveElement) {
                previousActiveElement.focus();
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                return;
            }

            if (e.key === 'Tab') {
                const focusable = Array.from(getFocusableElements());
                if (focusable.length === 0) return;

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        openLogin.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        modalBox.addEventListener('click', (e) => e.stopPropagation());
    }
}

customElements.define('site-modal', SiteModal)