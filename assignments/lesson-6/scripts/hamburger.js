function hamburger() {
    var x = document.getElementById("important");
    if (x.className == "nav") {
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}