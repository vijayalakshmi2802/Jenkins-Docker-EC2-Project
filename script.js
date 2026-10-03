/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation");
    }
});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .stat-card, .automation-card, .check-list div, .architecture-node"
);


const observer = new IntersectionObserver(
    (entries, observerInstance) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observerInstance.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================================
   PIPELINE STATUS ANIMATION
========================================================= */

const pipelineSteps = document.querySelectorAll(
    ".pipeline-step"
);

let currentStep = 0;


function animatePipeline() {

    pipelineSteps.forEach((step) => {
        step.classList.remove("active-step");
    });

    if (pipelineSteps.length > 0) {

        pipelineSteps[currentStep].classList.add(
            "active-step"
        );

        currentStep++;

        if (currentStep >= pipelineSteps.length) {
            currentStep = 0;
        }

    }

}


setInterval(animatePipeline, 1800);

animatePipeline();


/* =========================================================
   SMOOTH SCROLL OFFSET
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {
            return;
        }

        event.preventDefault();

        const target = document.querySelector(targetId);

        const navbarHeight = 72;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll(
    "main section[id]"
);


const navigationLinks = document.querySelectorAll(
    "#navMenu a"
);


const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navigationLinks.forEach((link) => {
                    link.classList.remove("nav-active");
                });

                const activeLink =
                    document.querySelector(
                        `#navMenu a[href="#${entry.target.id}"]`
                    );

                if (activeLink) {
                    activeLink.classList.add("nav-active");
                }

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});


/* =========================================================
   TERMINAL TYPE EFFECT
========================================================= */

const terminalSuccess =
    document.querySelector(".terminal-success");


if (terminalSuccess) {

    terminalSuccess.style.opacity = "0";

    setTimeout(() => {

        terminalSuccess.style.transition =
            "opacity 0.8s ease";

        terminalSuccess.style.opacity = "1";

    }, 1400);

}


/* =========================================================
   ADD DYNAMIC CSS CLASSES
========================================================= */

const dynamicStyle = document.createElement("style");

dynamicStyle.textContent = `

    .reveal {
        opacity: 0;
        transform: translateY(18px);
        transition:
            opacity 0.6s ease,
            transform 0.6s ease;
    }

    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .active-step .pipeline-icon {
        border-color: rgba(66, 211, 146, 0.5);
        background: rgba(66, 211, 146, 0.08);
        color: #42d392;
        box-shadow: 0 0 20px rgba(66, 211, 146, 0.08);
    }

    .nav-active {
        color: #4da3ff !important;
    }

`;

document.head.appendChild(dynamicStyle);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cVijayalakshmi | Cloud & DevOps Engineer",
    "color:#4da3ff;font-size:16px;font-weight:bold;"
);

console.log(
    "%cGitHub → Jenkins → Docker → AWS EC2",
    "color:#42d392;font-size:12px;"
);
