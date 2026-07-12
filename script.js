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