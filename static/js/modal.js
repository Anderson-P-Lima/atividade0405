class SiteModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<div id="loginModal" class="modal-overlay" aria-hidden="true">
                <div id="modalBox" class="modal-content">
                    <button id="closeLogin" class="modal-close" aria-label="Fechar modal">&times;</button>
                    <div class="modal-header">
                        <h2>Bem vindo de volta</h2>
                        <p>Acesse sua conta para continuar</p>
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
        const openLogin = document.getElementById('openLogin');
        const closeLogin = document.getElementById('closeLogin');
        const modal = document.getElementById('loginModal');
        const modalBox = document.getElementById('modalBox');

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        function openModal() {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = scrollbarWidth + 'px';
        }

        function closeModal() {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '';
        }

        openLogin.addEventListener('click', openModal);
        closeLogin.addEventListener('click', closeModal);
        modal.addEventListener('click', closeModal);
        modalBox.addEventListener('click', (e) => e.stopPropagation());    
    }
}

customElements.define('site-modal', SiteModal)