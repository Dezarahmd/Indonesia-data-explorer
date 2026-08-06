const header = document.querySelector(".header");

let isScrolled = false;

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (!isScrolled && scrollY > 80) {
        header.classList.add("scrolled");
        isScrolled = true;
    }

    if (isScrolled && scrollY < 30) {
        header.classList.remove("scrolled");
        isScrolled = false;
    }
});