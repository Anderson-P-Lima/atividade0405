const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');
const modal = document.getElementById('loginModal');

openLogin.addEventListener('click', () => {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
})

closeLogin.addEventListener('click', () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
})