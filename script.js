
const btn = document.getElementById("toggleBtn");
const body = document.body;

btn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        btn.textContent = "🌑";
    } else {
        btn.textContent = "🔆";
    }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list ul li a");

window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    this.reset();
});