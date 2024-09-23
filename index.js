const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("closeMobileNav");
const mobileBar = document.getElementById("navBarMobile");
const home = document.getElementById("home");
const heroWomen = document.getElementById("textbox");
const heroTextBox2 = document.getElementById("textbox2");

// Show Navigation bar
let showMobileBar = gsap.from(mobileBar, {
    duration: 0.5,
    x: '-20%', 
    opacity: 0, 
    ease: "expo.inOut",
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


// Fade in for HeroPage items
gsap.from(heroWomen, {
    x: "-10%",
    opacity: 0,
    duration: 1,
    ease: "expo.in"
})

gsap.from(heroTextBox2, {
    x: "18%",
    opacity: 0,
    duration: 1,
    ease: "expo.in"
})

