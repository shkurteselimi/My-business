const elements = document.querySelectorAll(".info-card, .service-card");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const trigger = window.innerHeight / 1.2;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
});

document.addEventListener("scroll", () => {
    elements.forEach(el => {
        if (el.classList.contains("show")) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

