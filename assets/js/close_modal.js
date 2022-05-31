let modal = document.querySelector('.burger_menu__ul');

function CloseModal() {
    if (modal.style.display != 'none') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}