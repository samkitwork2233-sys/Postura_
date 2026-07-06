// ===============================
// POSTURA WEBSITE SCRIPT
// ===============================

// Scroll Progress Bar
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    const progressBar = document.querySelector(".progress-bar");

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }
});

// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

    const stats = document.querySelector(".stats");

    if (!stats || counterStarted) return;

    const statsTop = stats.getBoundingClientRect().top;

    if (statsTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.getAttribute("data-target"));

            let current = 0;

            const increment = Math.ceil(target / 80);

            function updateCounter() {

                current += increment;

                if (current < target) {

                    counter.innerText = current;

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounters);

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ===============================
// Smooth Navigation Highlight
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});

// ===============================
// Hero Button Hover Effect
// ===============================

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});

// ===============================
// Console Welcome Message
// ===============================

console.log("%cPOSTURA", "font-size:28px;font-weight:bold;color:#2563eb;");
console.log("Welcome to the Postura Website.");
