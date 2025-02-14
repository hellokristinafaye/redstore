var MenuItems = document.getElementById("MenuItems");

MenuItems.style.display = 'none';

function menutoggle() {
    if (MenuItems.style.display == 'none') {
        MenuItems.style.display = 'block';
    } else {
        MenuItems.style.display = 'none';
    }
}