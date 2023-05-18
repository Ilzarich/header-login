const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.onclick = () => {
    wrapper.classList.add('active'); // Добавляем класс active
};

loginLink.onclick = () => {
    wrapper.classList.remove('active'); // Удаляем класс active
};

btnPopup.onclick = () => {
    wrapper.classList.add('active-popup'); // Добавляем класс active-popup
};

iconClose.onclick = () => {
    wrapper.classList.remove('active-popup'); // Добавляем класс active-popup
    
};