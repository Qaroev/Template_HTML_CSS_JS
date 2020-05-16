const bar = document.querySelector('.bar');
const counter = document.querySelector('.counter');
const succes = document.querySelector('.succes');
let width = 1;


function progress() {

    setInterval(function () {

        if (width >= 100) {
            succes.innerHTML = "Download succes";
            clearInterval(download);

        } else {
            width++;
            bar.style.width = width + "%";
            counter.innerHTML = width + '%';
        }
    }, 20);

}
