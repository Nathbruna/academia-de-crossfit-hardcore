// Selecionando os elementos do HTML
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

// console.log(btnMenu);
// console.log(menu);

function menuMobile(){
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}
btnMenu.addEventListener('click',menuMobile);

function fecharMenu(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');

}
menu.addEventListener('click',fecharMenu);
