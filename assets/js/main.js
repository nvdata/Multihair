// import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// import * as carouselClick from './modules/carousel-change.js';
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
// import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos
import menu from './modules/menu.js'; //js do menu
// import zoomFont from './modules/zoomFont.js'; //js do menu
// import linkDentroLink from './modules/a-dentro-a.js'; //js do menu
// import initAccordion from "./modules/accordion.js"


// linkDentroLink()
menu();
// zoomFont()
// linkDentroLink()

const mediaQuebra = window.matchMedia('(max-width: 1024px)').matches

// ★ PAGES ★ 
const pageHome = new Dom().el("#page__home");
const pageContato = new Dom().el("#page__contato");


if (pageHome) { // ★ HOME 
    new Dom().bodyClass("body__home")

}

if (pageHome) { // ★ HOME 
    new Dom().bodyClass("body__contato")

}

