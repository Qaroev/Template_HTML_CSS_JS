const countToDate = new Date("Jun 20, 2020 20:44:30").getTime();
const x = setInterval(function () {
    const currentDate = new Date().getTime();
    const distance = countToDate - currentDate;
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.floor((distance % (1000 * 60)) / (1000));
    document.getElementById('date').innerHTML = day + " Days, " + hours + " Hours, " + min + " Minuts, " + sec + " Seconds ";
}, 1000);
