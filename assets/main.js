let slideIndex = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slideInterval = 10000;

let timer;

function renderSlide(index) {
    if (!slides.length || !dots.length) {
        return;
    }

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

function nextSlide() {
    if (!slides.length) {
        return;
    }

    slideIndex = (slideIndex + 1) % slides.length;
    renderSlide(slideIndex);
}

function currentSlide(index) {
    if (!slides.length) {
        return;
    }

    slideIndex = index;
    renderSlide(slideIndex);
    restartTimer();
}

function restartTimer() {
    clearInterval(timer);

    if (slides.length > 1) {
        timer = setInterval(nextSlide, slideInterval);
    }
}

if (slides.length && dots.length) {
    renderSlide(slideIndex);

    if (slides.length > 1) {
        timer = setInterval(nextSlide, slideInterval);
    }
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
        const id = this.getAttribute("href");
        const target = document.querySelector(id);

        if (!target) {
            return;
        }

        e.preventDefault();

        window.scrollTo({
            top: target.offsetTop - 78,
            behavior: "smooth"
        });

        history.pushState(null, "", id);
    });
});

document.querySelectorAll(".js-brand-split").forEach((el) => {
    const text = (el.textContent || "").trim();

    if (text.length <= 4) {
        return;
    }

    const head = text.slice(0, 4);
    const tail = text.slice(4);

    el.innerHTML = `
        <span class="brand-part-head">${head}</span><span class="brand-part-tail">${tail}</span>
    `;
});

window.currentSlide = currentSlide;
