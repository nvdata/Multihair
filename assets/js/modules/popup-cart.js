export default
//necessario elemento .js-cart-popup e .popup__cart-wrapper
function popUpCart() {

    const popUp = document.querySelector('.popup__cart-wrapper'); //
    const carrinhoMenu = document.querySelector('.js-cart-popup');

    if (popUp) {

        const botaoComprar = document.querySelectorAll(".produtos__card .produtos__desc-action")
        botaoComprar.forEach(i => i.addEventListener("click", mostraPopUp))
        // carrinhoMenu.addEventListener('click', mostraPopUp); //click para mostrar o popup
        popUp.addEventListener("mouseenter", clear)
        popUp.addEventListener("mouseleave", invocation)

        var initial;

        //faz ele desaparecer
        function invocation() {
            initial = window.setTimeout(
                function () {
                    popUp.setAttribute(
                        "style",
                        "animation: voltaRedonda 250ms both ease-in;"
                    );

                    setTimeout(() => {
                        document.body.classList.remove('popup__open');
                        popUp.removeAttribute("style", "animation");
                    }, 200);

                }, 800);
        }

        function mostraPopUp() {
            clearTimeout(initial)
            document.body.classList.add('popup__open');
            invocation();
        }

        function clear() {
            clearTimeout(initial)
        }
    }
}