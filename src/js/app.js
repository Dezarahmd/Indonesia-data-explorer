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

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});