export function navHandler() {
    const links = document.querySelectorAll(".navbar__item-main");

    const submenu = document.querySelector(".navbar__sub");
    for (let i = 0; i < links.length; i++) {
        if (links[i].children.length > 1) {
            links[i].addEventListener("mouseenter", handleMouseEnter);
            //            submenu.addEventListener("mouseenter", handleMouseEnter);
            links[i].addEventListener("mouseleave", handleMouseLeave);
            //            submenu.addEventListener("mouseleave", handleMouseLeave);
        }
    }

    function handleMouseEnter() {
        submenu.style.display = "block";
        submenu.classList.remove("fadeOut");
        submenu.classList.add("fadeIn");
        removeHandlerLeave();
        window.clearTimeout(window.timeOutid);
    }

    function handleMouseLeave() {
        window.timeOutid = setTimeout(function () {
            //            submenu.style.display = "none";
            //            submenu.style.display = "none";
            submenu.addEventListener("animationend", handleAnimationEnd)
            submenu.classList.remove("fadeIn");
            submenu.classList.add("fadeOut");
        }, 300);
    }

    function handleAnimationEnd() {
        submenu.style.display = "none";
    }

    function removeHandlerEnter() {
        submenu.removeEventListener("animationend", handleMouseEnter, true);
    }

    function removeHandlerLeave() {
        submenu.removeEventListener("animationend", handleAnimationEnd);
    }
}
