/*==========================================
    PORTFOLIO JAVASCRIPT
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
        Typing Effect
    =========================*/

    const typingElement = document.getElementById("typing");

    const words = [
        "Junior Software Developer",
        "Embedded Systems Developer",
        "C++ Programmer",
        "Python Learner",
        "AI Enthusiast"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;

            }

        }

        else {

            typingElement.textContent =
                currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length)
                    wordIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 40 : 90);

    }

    typeEffect();


    /*=========================
        Sticky Navbar
    =========================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        }

        else {

            header.classList.remove("sticky");

        }

    });


    /*=========================
        Scroll Reveal
    =========================*/

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .2

    });

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });


    /*=========================
        Mobile Menu
    =========================*/

    const menuBtn = document.querySelector(".menu-btn");

    const navMenu = document.querySelector(".nav-menu");

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });


    /*=========================
        Active Navigation
    =========================*/

    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});
/*=========================
Loading Screen
=========================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    loader.style.opacity="0";

    setTimeout(()=>{

        loader.style.display="none";

    },700);

});


/*=========================
Mouse Glow
=========================*/

const glow=document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});


/*=========================
Back To Top
=========================*/

const back=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        back.style.display="block";

    }

    else{

        back.style.display="none";

    }

});

back.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================
Animated Counter
=========================*/

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

    const target=+counter.dataset.target;

    let current=0;

    const update=()=>{

        current+=Math.ceil(target/80);

        if(current>target){

            current=target;

        }

        counter.innerText=current;

        if(current<target){

            requestAnimationFrame(update);

        }

    };

    update();

});


/*=========================
Hero Parallax
=========================*/

const hero=document.querySelector("#hero");

hero.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.pageX)/35;

    const y=(window.innerHeight/2-e.pageY)/35;

    document.querySelector(".avatar").style.transform=

    `translate(${x}px,${y}px)`;

});