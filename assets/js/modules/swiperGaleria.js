export default

function swiperGaleria() {
    const swipergallery = new Swiper(".swiper__container-gallery", config.propsGallery)
    //previne click galeria no mobile
    const hero = document.querySelector(".gallery__hero")

    hero.addEventListener("touchstart", prevent)
    hero.addEventListener("touchend", enable)

    function prevent() {
        swipergallery.enabled = false
    }

    function enable() {
        swipergallery.enabled = true
    }

}