```javascript
// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===============================
// ANIMATION SAAT SCROLL
// ===============================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// ===============================
// TOMBOL LIHAT PORTOFOLIO
// ===============================
const portfolioButton = document.querySelector(
    'a[href="#portfolio"]'
);

if (portfolioButton) {
    portfolioButton.addEventListener("click", () => {
        const portfolio = document.querySelector("#portfolio");

        if (portfolio) {
            portfolio.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}


// ===============================
// TOMBOL HUBUNGI SAYA
// ===============================
const contactButton = document.querySelector(
    'a[href="#contact"]'
);

if (contactButton) {
    contactButton.addEventListener("click", () => {
        const contact = document.querySelector("#contact");

        if (contact) {
            contact.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}


// ===============================
// EFEK KARTU PORTOFOLIO
// ===============================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});


// ===============================
// TAHUN OTOMATIS
// ===============================
const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
```
