/* =========================================
   LE HUU DUC | PORTFOLIO
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       LOADING SCREEN
    ========================================= */

    const loader = document.getElementById("loader");

    if (loader) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                loader.classList.add("hidden");

            }, 500);

        });

    }


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("active");

        });


        navMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

            });

        });

    }


    /* =========================================
       NAVIGATION
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================================
       TYPING EFFECT
    ========================================= */

    const typingElement = document.getElementById("typing");

    if (typingElement) {

        const texts = [
            "Junior Software Developer",
            "Embedded Systems Enthusiast",
            "C++ Developer",
            "Web Developer"
        ];

        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentText = texts[textIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentText.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentText.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;

                }

            } else {

                typingElement.textContent =
                    currentText.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    textIndex =
                        (textIndex + 1) % texts.length;

                }

            }

            setTimeout(
                typeEffect,
                deleting ? 50 : 90
            );

        }

        typeEffect();

    }


    /* =========================================
       COUNTERS
    ========================================= */

    const counters =
        document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target =
            Number(counter.dataset.target);

        let current = 0;

        const duration = 1200;

        const increment =
            target / (duration / 30);

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.textContent = target;

                return;

            }

            counter.textContent =
                Math.floor(current);

            requestAnimationFrame(updateCounter);

        }

        updateCounter();

    });


    /* =========================================
       SKILL BARS
    ========================================= */

    const skillProgress =
        document.querySelectorAll(".skill-progress");

    skillProgress.forEach(bar => {

        const width =
            bar.dataset.width;

        if (width) {

            setTimeout(() => {

                bar.style.width = width;

            }, 500);

        }

    });


    /* =========================================
       BACK TO TOP
    ========================================= */

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       PROJECT CARDS
       CLICK CARD → GITHUB
    ========================================= */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        const sourceLink =
            card.querySelector(".project-link");

        if (!sourceLink) {
            return;
        }

        card.addEventListener("click", (event) => {

            /*
             * Nếu người dùng bấm trực tiếp
             * vào Source Code thì để link hoạt động bình thường.
             */

            if (
                event.target.closest(".project-link")
            ) {
                return;
            }

            const url =
                sourceLink.getAttribute("href");

            if (
                url &&
                url !== "#"
            ) {

                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }

        });

        /*
         * Cho người dùng biết card có thể click
         */

        card.style.cursor = "pointer";

    });


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    });

});