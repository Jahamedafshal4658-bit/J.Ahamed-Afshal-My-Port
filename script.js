/*=========================================================
                PORTFOLIO JAVASCRIPT
                Part 1
=========================================================*/

"use strict";

/*=========================================================
                    SELECT ELEMENTS
=========================================================*/

const menu = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");

const scrollTopBtn = document.getElementById("scrollTop");

/*=========================================================
                    MOBILE MENU
=========================================================*/

if(menu){

    menu.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        const icon = menu.querySelector("i");

        if(navLinks.classList.contains("active")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        }else{

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}

/*=========================================================
                CLOSE MENU AFTER CLICK
=========================================================*/

navItems.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        const icon = menu.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

/*=========================================================
                STICKY NAVBAR
=========================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(10,15,30,.85)";
        navbar.style.backdropFilter="blur(25px)";
        navbar.style.boxShadow="0 8px 30px rgba(0,0,0,.35)";

    }else{

        navbar.style.background="rgba(255,255,255,.06)";
        navbar.style.boxShadow="none";

    }

});

/*=========================================================
                SCROLL TO TOP
=========================================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================================
                ACTIVE NAVIGATION
=========================================================*/

const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.offsetHeight;

        if(window.scrollY>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/*=========================================================
                SMOOTH SCROLL
=========================================================*/

navItems.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================================
                BUTTON SCROLL
=========================================================*/

document.querySelectorAll(".btn").forEach(button=>{

    const href=button.getAttribute("href");

    if(href && href.startsWith("#")){

        button.addEventListener("click",(e)=>{

            e.preventDefault();

            const target=document.querySelector(href);

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    }

});

/*=========================================================
                END OF PART 1
=========================================================*/
/*=========================================================
                PART 2
                ANIMATIONS & EFFECTS
=========================================================*/

/* Fade animation when elements become visible */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("fade-in");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
`
.section-title,
.glass-card,
.project-card,
.skill-category,
.certificate-card,
.contact-info,
.contact-form
`
).forEach(el=>{

    observer.observe(el);

});


/*=========================================================
                PROFILE IMAGE TILT
=========================================================*/

const profile=document.querySelector(".profile-card");

if(profile){

profile.addEventListener("mousemove",(e)=>{

const rect=profile.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/20);

const rotateX=((rect.height/2-y)/20);

profile.style.transform=
`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="rotateX(0) rotateY(0)";

});

}


/*=========================================================
                BUTTON RIPPLE
=========================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";

ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*=========================================================
                CURRENT YEAR
=========================================================*/

const year=document.querySelector(".copyright");

if(year){

year.innerHTML=
`© ${new Date().getFullYear()} Afshal. All Rights Reserved.`;

}
/*=========================================================
                PART 3
        FINAL EFFECTS & OPTIMIZATION
=========================================================*/

"use strict";

/*=========================================================
                PRELOADER (OPTIONAL)
=========================================================*/

const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {

    if (preloader) {

        preloader.classList.add("hide");

        setTimeout(() => {

            preloader.remove();

        }, 600);

    }

});

/*=========================================================
            REVEAL ELEMENTS ON SCROLL
=========================================================*/

const revealElements = document.querySelectorAll(
".about-content,.timeline-card,.skill-category,.project-card,.certificate-card,.contact-info,.contact-form"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-in");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((el) => {

    revealObserver.observe(el);

});

/*=========================================================
            PARALLAX BACKGROUND
=========================================================*/

window.addEventListener("scroll", () => {

    const value = window.scrollY;

    document.body.style.backgroundPositionY = value * 0.15 + "px";

});

/*=========================================================
            IMAGE HOVER EFFECT
=========================================================*/

const images = document.querySelectorAll("img");

images.forEach((img) => {

    img.addEventListener("mouseenter", () => {

        img.style.transition = "0.4s";

        img.style.transform = "scale(1.03)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

/*=========================================================
            DISABLE RIGHT CLICK
=========================================================*/

document.addEventListener("contextmenu", (e) => {

    e.preventDefault();

});

/*=========================================================
            KEYBOARD SHORTCUT
=========================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Home") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

});

/*=========================================================
            PERFORMANCE
=========================================================*/

window.addEventListener("resize", () => {

    document.body.classList.remove("menu-open");

});

/*=========================================================
            CONSOLE MESSAGE
=========================================================*/

console.log("%cWelcome to Afshal Portfolio 🚀",
"color:#00e5ff;font-size:20px;font-weight:bold;");

console.log("%cDesigned with HTML • CSS • JavaScript",
"color:#ffffff;font-size:14px;");

/*=========================================================
                END OF SCRIPT
=========================================================*/