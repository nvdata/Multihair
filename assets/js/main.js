// import vemBootstrap from './modules/botstrapimport.js';
// import * as animacao from './modules/animation.js';
// import * as carouselClick from './modules/carousel-change.js';
// import linkDentroLink from './modules/a-dentro-a.js'; //js do menu

import initAccordion from "./modules/accordion.js"
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos
import menu from './modules/menu.js'; //js do menu
import popUpCart from './modules/popup-cart.js'; //Popup
import initDropdownMenu from './modules/dropdown-menu.js'; //Dropdown
import swiperGaleria from './modules/swiperGaleria.js'; // galeria d edetalhes


menu();
initDropdownMenu()
popUpCart()



// ★ PAGES ★ 
const pageHome = new Dom().el("#page__home");
const pageContato = new Dom().el("#page__contato");
const pageSobre = new Dom().el("#page__quem__somos");
const pageProdutosNovos = new Dom().el("#page__produtos-novos");
const pageProdutoDetail = new Dom().el("#page__produto-detail");
const pageCarrinho = new Dom().el("#page__carrinho");

//media
const mediaQuebra = window.matchMedia('(max-width: 1024px)').matches


//  * escopo 
//===========================================================
if (pageHome) { // ★ HOME 
    new Dom().bodyClass("body__home")
    new Swiper(".depo__carousel", config.propsDepo)

    if (mediaQuebra) //se mobile
    {
        new Swiper(".produtos__container", config.props)
        new Swiper(".produtos__container-2", config.props)
    }

} else if (pageContato) { // ★ Contato
    new Dom().bodyClass("body__contato");

} else if (pageSobre) { // ★ Quem somos
    new Dom().bodyClass("body__quem__somos");

} else if (pageProdutosNovos) { // ★ Novos Produtos
    new Dom().bodyClass("body__produtos-novos");

    //se mobile
    if (mediaQuebra) {
        new Swiper(".produtos__container", config.props)
    }

} else if (pageProdutoDetail) { // ★ Detalhes do Produto
    new Dom().bodyClass("body__produto-detail");
    new Swiper(".produtos__container", config.propsDepo)

    // accordeon
    initAccordion()

    //swiper co previne click do mobile
    swiperGaleria()
} else if (pageCarrinho) {
    new Dom().bodyClass("body__carrinho");

}

