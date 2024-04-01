let flcFlixLogo = document.querySelector("img");

flcFlixLogo.addEventListener("click", function () {
    let flcFlixSrc = flcFlixLogo.getAttribute("src");
    if (flcFlixSrc === "img/FLC-Flix_3-logo_v2.png") {
        flcFlixLogo.setAttribute("src", "img/FLC-Flix_3-modern-logo_v1.png");
    } else {
        flcFlixLogo.setAttribute("src", "FLC-Flix_3-logo_v2.png");
    }
    if (flcFlixSrc === "img/FLC-Flix_3-modern-logo_v1.png") {
        flcFlixLogo.setAttribute("src", "img/FLC-Flix_3-logo_v2.png");
    } else {
        flcFlixLogo.setAttribute("src", "img/FLC-Flix_3-modern-logo_v1.png");
    }
});