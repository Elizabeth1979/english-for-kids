let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById('menu');
menuBtn.addEventListener('click', toggleMenu);


function toggleMenu(e) {
    menu.classList.toggle('open');
    let menuBtnExpanded = menuBtn.getAttribute('aria-expanded');
    if(menuBtnExpanded === "false") {
        menuBtn.setAttribute('aria-expanded', 'true');
    } else {
        menuBtn.setAttribute('aria-expanded', 'false')
    }
}