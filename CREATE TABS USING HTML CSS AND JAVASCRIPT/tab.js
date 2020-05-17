const btns = document.getElementsByClassName('btn');
const panels = document.getElementsByClassName('panel');
const indicator = document.getElementById('indicator');

function tab(btn, panel) {
    for (let i = 0; i < panels.length; i++) {
        if (i === panel) {
            panels[panel].style.display = 'block';
        } else {
            panels[i].style.display = 'none';
        }
    }
    indicator.style.left = String(btn * 33) + "%";
}
