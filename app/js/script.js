const menu = document.getElementById('burgermenu');
const mobileMenu = document.getElementById('mobilemenu');

menu.addEventListener('click', function() {

    if(menu.src.substr(menu.src.indexOf("/images/icon-hamburger.svg")) == "/images/icon-hamburger.svg") {
        menu.src = "/images/icon-close.svg"
        let classes = mobileMenu.className
        mobileMenu.className = classes.replace('hidden', '')
    } else {
        menu.src = "/images/icon-hamburger.svg"
        mobileMenu.className += 'hidden'
    }
});
