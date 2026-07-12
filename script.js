/* ==========================================
   VOCALVISTA PREMIUM JAVASCRIPT
========================================== */

/* ==============================
   MOBILE MENU
============================== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.right = "20px";
        nav.style.background = "rgba(5,8,22,0.95)";
        nav.style.padding = "20px";
        nav.style.borderRadius = "15px";
        nav.style.gap = "20px";
        nav.style.boxShadow = "0 0 20px rgba(59,130,246,.4)";
    }

});

/* ==============================
   SCROLL REVEAL ANIMATION
============================== */

function revealSections() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

/* ==============================
   COUPON SYSTEM
============================== */

/*
 Easy to add more coupon codes.
 Just add another line:

 "NEWCODE": 30,

*/

const coupons = {

    "WELCOME10": 10,
    "VOCAL20": 20,
    "STUDENT25": 25,
    "YOUTUBE30": 30,
    "VIP50": 50

};

function applyCoupon() {

    const input = document
        .getElementById("couponInput")
        .value
        .trim()
        .toUpperCase();

    const message = document.getElementById("couponMessage");

    if (coupons[input]) {

        message.style.color = "#22c55e";

        message.innerHTML =
        `🎉 Coupon Applied Successfully!<br>
        You received <b>${coupons[input]}% OFF</b>.`;

    }

    else {

        message.style.color = "#ef4444";

        message.innerHTML =
        "❌ Invalid Coupon Code.";

    }

}

/* ==============================
   SMOOTH NAVIGATION
============================== */

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

        if(window.innerWidth < 900){

            nav.style.display="none";

        }

    });

});

/* ==============================
   HEADER SHADOW
============================== */

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 0 25px rgba(59,130,246,.35)";

}

else{

header.style.boxShadow="none";

}

});

/* ==============================
   HERO BUTTON RIPPLE EFFECT
============================== */

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

console.log("✅ VocalVista Website Loaded Successfully");
