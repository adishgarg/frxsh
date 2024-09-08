const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("closeMobileNav");
const mobileBar = document.getElementById("navBarMobile");

let showMobileBar = gsap.from(mobileBar, {
    duration: 1,
    x: '-20%', 
    opacity: 0, 
    ease: "powe4.out",
    paused: true,
    onStart: () => { mobileBar.style.display = "block"; },
    onReverseComplete: () => { mobileBar.style.display = "none"; }
});

menuButton.addEventListener("click", () => {
    showMobileBar.play();
});

closeButton.addEventListener("click", () => {
    showMobileBar.reverse();
});

// alert(window.innerWidth);

if (window.innerWidth <= 768) {
    console.log(window.innerWidth);
}

