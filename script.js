
function scrollFunction() {
    var button = document.getElementById("go-to-top");
    if (window.scrollY > 600) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}


window.onscroll = scrollFunction;


function toTheTop() {
    window.scrollTo(0, 0) // x-index, y-index
}