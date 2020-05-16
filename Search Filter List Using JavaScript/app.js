function filter() {

    let filterValue, input, ul, li, a, i;
    input = document.getElementById("search");
    filterValue = input.value.toUpperCase();
    ul = document.getElementById("Menu");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
