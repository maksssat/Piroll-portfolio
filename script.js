function openNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
    // var y = document.getElementById("header");
    // if (y.className === "header") {
    //   y.className += " responsive";
    // } else {
    //   y.className = "header";
    // }
}

function closeNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav responsive") {
        x.className = "nav";
    }
    // var y = document.getElementById("header");
    // if (y.className === "header responsive") {
    //   y.className = "header";
    // }
}