const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".slider-dot");
let currentSlide = 0;

function showSlide(index) {
    testimonials.forEach((testimonial) => testimonial.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
    showSlide(index);
    });
});

// Auto-rotacionar depoimentos
setInterval(() => {
    let nextSlide = (currentSlide + 1) % testimonials.length;
    showSlide(nextSlide);
}, 5000);

// Formulário de Contato
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

  // Simular envio do formulário
    const name = document.getElementById("name").value;
    alert(
    `Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.`
    );

  // Limpar formulário
    contactForm.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
        });
    }
    });
});
