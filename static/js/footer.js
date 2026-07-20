class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<footer>
            <div class="container-footer">
                <div class="contact-info">
                    <ul>
                        <li><span class="material-symbols-outlined" aria-hidden="true">distance</span><span>Boticarium, Cidade Baixa - Tirisfal</span></li>
                        <li><span class="material-symbols-outlined" aria-hidden="true">call</span><span>(66) 6-0001-0322</span></li>
                        <li><span class="material-symbols-outlined" aria-hidden="true">email</span>
                            <span><a href="mailto:email@email.com">forsylvanas@darkrangers.com</a></span>   
                        </li>
                    </ul>
                </div>
                <div class="contact-info">
                    <h4>Sobre</h4>
                    <ul class="info">
                        <li><a href="/index.html">Principal</a></li>
                        <li><a href="">Serviços</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </div>
            </div>
            <div class="about">
                <p class="copyright">©2026 Blizzard Entertainment, Inc. 
                    Todas as marcas registradas mencionadas são de propriedade de seus 
                    respectivos donos.
                </p>
                <br>
                <p id="terms" class="terms">
                    <em>
                        <strong>Termos do Pacto de Salvação:</strong>
                        A participação na Era da Rainha e o ato de rendição total constituem 
                        uma doação irrevogável e definitiva de sua vida física e espiritual 
                        para o propósito singular de libertação da Rainha Sylvanas Windrunner 
                        da Gorja. Não há garantias explícitas de salvação espiritual, beleza 
                        eterna, prosperidade financeira ou outros benefícios. O culto e suas 
                        entidades associadas não se responsabilizam por danos espirituais, 
                        corrupção da alma, reencarnação indesejada e/ou outros efeitos colaterais. 
                        Todos os bens materiais restantes serão confiscados. Ao aceitar este 
                        pacto, você concorda com a rendição total sob as leis de Azeroth e sob 
                        a supervisão da Gorja. Para dúvidas, entre em contato com seu recrutador.
                    </em>
                </p>
            </div>
        </footer>`
    }
}

customElements.define('site-footer', SiteFooter)