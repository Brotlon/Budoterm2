const burgerBtn = document.querySelector('.navbar__burger-btn')
const mobileNav = document.querySelector('.navbar__links')
const navLogo = document.querySelector('.navbar__logo')
const navLinks = document.querySelectorAll('.navbar__list-item')

const footerYear = document.querySelector('.footer__year')




const handleMobileNav = () => {
    mobileNav.classList.toggle('show-nav')
}

const closeMobileNav = () => {
    mobileNav.classList.remove('show-nav')
}

const checkClick = e => {
    if (!e.target.hasAttribute('data-nav'))
    {
        closeMobileNav()
    }
}


const handleFooterYear = () => {
    const currentYear = new Date().getFullYear()
    footerYear.textContent = currentYear
}





burgerBtn.addEventListener('click', handleMobileNav)
navLogo.addEventListener('click', closeMobileNav)
navLinks.forEach(item => item.addEventListener('click', closeMobileNav))
document.addEventListener('click', checkClick)
handleFooterYear()