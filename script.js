function openNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function closeNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav responsive") {
        x.className = "nav";
    }
}