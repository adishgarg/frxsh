alert("Your passwords are currently visible to us, this site is in testing mode.")

const signIn = document.getElementById("signIn");
const image = document.getElementById('coolGuy')

signIn.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (userExists(email)) {
        if (logUser(email, password)) {
            alert("Logged in Successfully ");
        } else {
            alert("password was wrong");
        }
    } else {
        alert("User doesnt exsists");
    }

})

gsap.from(image, {
    x: "200%",
    opacity: 0,
    duration: 1,
    delay:0,
    ease: "power2.out"
})