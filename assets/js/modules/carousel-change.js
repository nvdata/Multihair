export function carouselMuda() {

    const clickItems = document.querySelectorAll(".action__container div")
    const actionContainer = document.querySelector(".action__container")


    function trocaCarousel(event) {

        let item = event.target.parentNode

        if (event.target.parentNode === actionContainer) {
            item = event.target
        }
        let datasetClick = item.dataset.action


        console.log(datasetClick);

        const carouseis = document.querySelectorAll(".carousel__lojas")



        carouseis.forEach((i) => {

            i.style.display = "none";
            let dataset = i.dataset.action

            if (dataset == datasetClick) {
                i.style.display = "block";

                console.log(i);

            }

        })
        clickItems.forEach((cada) => {
            cada.classList.remove("active")
            item.classList.add("active")
        })


    }

    clickItems.forEach((i) => {
        i.addEventListener("click", trocaCarousel)

    })
}