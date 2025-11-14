// Trigger animation when elements enter viewport
const animatedElements = document.querySelectorAll('.slide-up, .fade-in');

function showAnimation() {
    animatedElements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 50) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showAnimation);
window.addEventListener("load", showAnimation);

