let buttonlabel = document.getElementById('btnlabel');

function validate() {
    if (document.getElementById('btncheck').checked) {

        buttonlabel.classList.add("filled");
        buttonlabel.innerHTML = "<span>Following</span>"
    } else {
        buttonlabel.classList.remove("filled");
        buttonlabel.innerHTML = "<span>Follow</span>"

    }
}