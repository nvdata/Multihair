import outSideClick from "./outSideClick.js"


export default

function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu => {

        ['touchstart', 'click', "mouseenter", "mouseleave"].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);

        });



    });

    function handleClick(event) {
        event.preventDefault(); //retirar se tiver click no item
        this.classList.add('active');

        // outside click pode ser reaproveitado para outros eventos de bubble

        outSideClick(this, ['touchstart', 'click', "mouseenter", "mouseleave"], () => { //ativa o outside click com os eventos 
            this.classList.remove("active")
        })
    };


}