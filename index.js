const menuButton = document.getElementById("menu");
const closeButton = document.getElementById("closeMobileNav");
const mobileBar = document.getElementById("navBarMobile");
const home = document.getElementById("home");
const cart = document.getElementById("cart");
const cartButton = document.getElementsByClassName("cart-button");
const closeCart = document.getElementById("close-cart");

const heroWomen = document.getElementById("womenImage");
const heroTextBox2 = document.getElementById("textbox2");
const logo = document.getElementById("logo");
const appearLater = document.getElementsByClassName("appearLater");

const cartItemImages = document.getElementsByClassName("cImage");
const cartItemData = document.getElementsByClassName("cData");
const cartRemoveData = document.getElementsByClassName("cRemove");

for (var i = 0; i < cartRemoveData.length; i++) {
  (function(i) {
    cartRemoveData[i].addEventListener("click", () => {
      cartItemData[i].style.display = "none";
      cartItemImages[i].style.display = "none";
    });
  })(i);
}

// Show Navigation bar
if (mobileBar) {
    let showMobileBar = gsap.from(mobileBar, {
        duration: 0.5,
        x: '-20%', 
        opacity: 0, 
        ease: "expo.inOut",
        paused: true,
        onStart: () => { mobileBar.style.display = "block"; },
        onReverseComplete: () => { mobileBar.style.display = "none"; }
    });

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            showMobileBar.play();
        });
    }

    if (closeButton) {
        closeButton.addEventListener("click", () => {
            showMobileBar.reverse();
        });
    }
}

if (cart) {
    let showCartMenu = gsap.from(cart, {
        duration: 0.2,
        x: '100%', 
        opacity: 0, 
        ease: "power2.inOut",
        paused: true,
        onStart: () => { cart.style.display = "flex"; },
        onReverseComplete: () => { cart.style.display = "none"; }
    });

    for (var i = 0; i < cartButton.length; i++ ) {
        cartButton[i].addEventListener("click", () => {
            showCartMenu.play();
        });
    }

    if (closeCart) {
        closeCart.addEventListener("click", () => {
            showCartMenu.reverse();
        });
    }
}

// Fade in for HeroPage items
if (heroWomen) {
    gsap.from(heroWomen, {
        x: "-200%",
        opacity: 0,
        duration: 1,
        delay:0,
        ease: "none"
    });
}

if (heroTextBox2) {
    gsap.from(heroTextBox2, {
        x: "18%",
        opacity: 0,
        duration: 1,
        delay:0,
        ease: "none"
    });
}

if (logo) {
    gsap.from(logo, {
        y: "-20%",
        opacity: 0,
        duration: 1,
        delay:0,
        ease: "none"
    });
}

if (appearLater.length > 0) {
    gsap.from(appearLater, {
        y: "20%",
        opacity: 0,
        duration: 0.5,
        delay:0.5,
        ease: "none"
    });
}