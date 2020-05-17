const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("stick")
    } else {
        navbar.classList.remove("stick");
    }
}

window.onscroll = function () {
    myFunction()
};
