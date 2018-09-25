export function arrowHandler() {
    const arrow = document.querySelector(".page-intro__arrow");

    if (arrow) {
        arrow.addEventListener("click", (event) => {
            window.scrollTo({
                "behavior": "smooth",
                "left": 0,
                "top": window.innerHeight - 60
            });

        });
    }
}

//.page-intro__arrow;
