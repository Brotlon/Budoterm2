const burgerBtn = document.querySelector('.navbar__burger-btn')
const mobileNav = document.querySelector('.navbar__links')
const navLogo = document.querySelector('.navbar__logo')
const navLinks = document.querySelectorAll('.navbar__list-item')


const backgroundImages = document.querySelectorAll('.aboutus__img-bg')
const arrowLeft = document.querySelector('.aboutus__gallery-pictures__arrow--left')
const arrowRight = document.querySelector('.aboutus__gallery-pictures__arrow--right')

let autoplayGallery


const footerYear = document.querySelector('.footer__year')





const handleMobileNav = () => {
    mobileNav.classList.toggle('show-nav')
}

const closeMobileNav = () => {
    mobileNav.classList.remove('show-nav')
}

const checkClick = e => {
    if (!e.target.hasAttribute('data-nav')) {
        closeMobileNav()
    }
}


const removeVisibleClass = () => {
    backgroundImages.forEach(bg => bg.classList.remove('visible'))
}

const previousPicture = () => {
    for (let i = 0; i < backgroundImages.length; i++) {

        if (backgroundImages[i].classList.contains('visible')) {

            if (i == 0) {
                removeVisibleClass()
                i = (backgroundImages.length - 1)
                backgroundImages[i].classList.add('visible')
            } else if (i != 0 && i < (backgroundImages.length)) {
                removeVisibleClass()
                i--
                backgroundImages[i].classList.add('visible')
            }

        }

        clearInterval(autoplayGallery)
        startGalleryAutoplay()

    }
}

const nextPicture = () => {
    for (let i = 0; i < backgroundImages.length; i++) {

        if (backgroundImages[i].classList.contains('visible')) {

            if (i < (backgroundImages.length - 1)) {
                removeVisibleClass()
                i++
                backgroundImages[i].classList.add('visible')
            } else if (i == (backgroundImages.length - 1)) {
                removeVisibleClass()
                i = 0
                backgroundImages[i].classList.add('visible')
            }
        }

        clearInterval(autoplayGallery)
        startGalleryAutoplay()

    }
}

const startGalleryAutoplay = () => {
    autoplayGallery = setInterval(() => {

        for (let i = 0; i < backgroundImages.length; i++) {

            if (backgroundImages[i].classList.contains('visible')) {

                if (i < (backgroundImages.length - 1)) {
                    removeVisibleClass()
                    i++
                    backgroundImages[i].classList.add('visible')
                } else if (i == (backgroundImages.length - 1)) {
                    removeVisibleClass()
                    i = 0
                    backgroundImages[i].classList.add('visible')
                }

            }

        }

    }, 4000);
}


const handleFooterYear = () => {
    const currentYear = new Date().getFullYear()
    footerYear.textContent = currentYear
}





burgerBtn.addEventListener('click', handleMobileNav)
navLogo.addEventListener('click', closeMobileNav)
navLinks.forEach(item => item.addEventListener('click', closeMobileNav))
document.addEventListener('click', checkClick)

startGalleryAutoplay()
arrowLeft.addEventListener('click', previousPicture)
arrowRight.addEventListener('click', nextPicture)

handleFooterYear()