export function runTestimonialsSlider() {
    const testimonialsList = document.getElementsByClassName("testimonials-item");
    const controlList = document.getElementsByClassName("testimonials-control");

    function setDefault() {



        const ul = document.createElement("ul");

        for (let i = 1; i <= testimonialsList.length; i++) {
            ul.innerHTML += "<li class='testimonials-control__button' data-target=" + i + "><i class='far fa-circle'></i></li>";
        }

        ul.firstChild.classList.add("active");
        controlList[0].appendChild(ul);
    }

    function setControls() {
        const buttons = document.getElementsByClassName("testimonials-control__button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                for (let j = 0; j < testimonialsList.length; j++) {
                    testimonialsList[j].classList.remove("show");
                    testimonialsList[j].classList.add("hide");
                }

                testimonialsList[parseInt(this.dataset.target) - 1].classList.remove("hide");
                testimonialsList[parseInt(this.dataset.target) - 1].classList.add("show");
            })
        }
    }

    setDefault();
    setControls();
}
