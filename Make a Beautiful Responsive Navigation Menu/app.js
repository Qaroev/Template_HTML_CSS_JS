const menu = document.querySelector('.Menu');

function ToggleMenu() {
    if (menu.classList.contains('full')) {
        menu.classList.remove('full');
    } else {
        menu.classList.add('full');
    }
}
