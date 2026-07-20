class SiteForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
            `<div class="form-container">
                <div class="form-content">
                    <div class="form-header">
                        <h2>Contrato Pactual</h2>
                        <p>Preencha o formulário para firmar o pacto</p>
                    </div>
                    <form action="" id="loginForm" method="POST">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" id="name" class="email" placeholder="Seu nome" required>
                        </div>
                        <div class="form-group">
                            <label for="last-name">Sobrenome</label>
                            <input type="text" id="last-name" class="email" placeholder="Seu sobrenome" required>
                        </div>
                        <div class="form-group">
                            <label for="race">Raça</label>
                            <select id="race" name="race">
                                <option value="" disabled selected hidden>Selecione uma opção</option>
                                <option value="bde">Blood Elf</option>
                                <option value="did">Dark Iron Dwarf</option>
                                <option value="dcy">Dracthyr</option>
                                <option value="dra">Draenei</option>
                                <option value="dwa">Dwarf</option>
                                <option value="ear">Earthen</option>
                                <option value="gob">Goblin</option>
                                <option value="gno">Gnome</option>
                                <option value="har">Haranir</option>
                                <option value="hmt">Highmountain Tauren</option>
                                <option value="hum">Human</option>
                                <option value="klt">Kul Tiran</option>
                                <option value="lfd">Lightforged Draenei</option>
                                <option value="mho">Mag'har Orc</option>
                                <option value="mec">Mechagnome</option>
                                <option value="nbe">Nightborne</option>
                                <option value="nte">Night Elf</option>
                                <option value="orc">Orc</option>
                                <option value="pan">Pandaren</option>
                                <option value="tau">Tauren</option>
                                <option value="tro">Troll</option>
                                <option value="und">Undead</option>
                                <option value="vde">Void Elf</option>
                                <option value="vul">Vulpera</option>
                                <option value="wor">Worgen</option>
                                <option value="zand">Zandalari Troll</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="address">Endereço</label>
                            <input type="text" id="address" class="email" placeholder=" Ex.: tenda nº7 Vale dos Espiritos, Orgrimmar - Durotar" required>
                        </div>
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" class="email" placeholder="seu@email.com" required>
                        </div>
                        <div class="form-group">
                            <label for="password" class="password" placeholder="Digite sua senha" required>
                        </div>
                        <div class="form-group">
                            <label for="confirm-password">Confirmar Senha</label>
                            <input type="password" id="confirm-password" class="password" placeholder="Digite sua senha" required>
                        </div>
                        <p>Ao se render a Chamada da Senhora Sombria, você concorda com nossos <a href="#terms">Termos e Política de Privacidade</a>.</p>
                        <button type="submit" class="btn-submit">Se render</button>
                    </form>
                </div>
            </div>`;
    }
}

customElements.define('site-form', SiteForm)