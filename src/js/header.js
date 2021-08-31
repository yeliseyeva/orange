const refs = {
   menuBtn: document.querySelector('.menu-btn'), 
   iconBurger: document.querySelector('.icon-burger'),
   iconClose: document.querySelector('.icon-close'),
   navMenu: document.querySelector('.nav-menu')
}

refs.menuBtn.addEventListener('click', clickOnMenuBtn)

function clickOnMenuBtn (e) {
    e.preventDefault()
    refs.iconBurger.classList.toggle('is-hidden')
    refs.navMenu.classList.toggle('is-hidden')
    refs.iconClose.classList.toggle('is-hidden')
}

console.log(refs.mobileMenu.classList.contains('is-hidden'))