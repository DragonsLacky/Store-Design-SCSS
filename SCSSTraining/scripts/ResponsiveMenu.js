function Responsive() {
    var x = document.getElementById("menu");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}
