const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(sec => {

        const top = window.scrollY;
        const offset = sec.offsetTop - 250;

        if (top > offset) {

            sec.classList.add("active");

        }

    });

});

sections.forEach(sec => {

    sec.classList.add("reveal");

});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
};

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});

