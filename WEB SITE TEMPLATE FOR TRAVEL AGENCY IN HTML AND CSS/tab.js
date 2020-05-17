const tabButtons = document.getElementsByClassName("btn");
const tabPanels = document.getElementsByClassName("tab-content");
const btn = tabButtons.item;

function showPanel(panelindex, btnindex) {

    for (let i = 0; i < tabPanels.length; i++) {

        if (i == panelindex) {
            tabPanels[panelindex].style.display = "block";
        } else {
            tabPanels[i].style.display = "none";
        }
    }

    for (let i = 0; i < tabButtons.length; i++) {

        if (i == btnindex) {
            tabButtons[btnindex].classList.add("active");
        } else {
            tabButtons[i].classList.remove("active");
        }
    }


}
