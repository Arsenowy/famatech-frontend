function darkMode() {
    document.documentElement.style.setProperty("--color-darkmode", "#222");
    document.documentElement.style.setProperty("--color-darkmode-lite", "#333");
    document.documentElement.style.setProperty("--color-dark", "#CCC");
    document.documentElement.style.setProperty("--color-black", "#fff");
    document.documentElement.style.setProperty("--color-grey", "#fff");
    document.querySelector(".nav__logo--img").src="src/images/logo-bookmark-white.png";
}

function lightmode() {
    document.documentElement.style.setProperty("--color-darkmode", "#fff");
    document.documentElement.style.setProperty("--color-darkmode-lite", "#fff");
    document.documentElement.style.setProperty("--color-dark", "#333");
    document.documentElement.style.setProperty("--color-black", "#000");
    document.documentElement.style.setProperty("--color-grey", "#777");
    document.querySelector(".nav__logo--img").src="src/images/logo-bookmark.png";
}

var toggleButton = document.querySelector("#switch-sm");
// if (toggleButton.checked == true) {
//     darkMode();
// }

var t = false;
toggleButton.addEventListener('click', e => {
    setTimeout(() => {
        t == false ? darkMode() : lightmode();
        t = !t;
    }, 125);
});


// /////////////////////////////
// var box = document.body;

// function fadeOutIn(elem, speed ) {

//     if (!elem.style.filter(brightness)) {
//         elem.style.filter(brightness) = 1;
//     } // end if

//     var outInterval = setInterval(function() {
//         elem.style.filter(brightness) -= 0.02;
//         if (elem.style.filter(brightness) <= 0) {
//             clearInterval(outInterval);
//             var inInterval = setInterval(function() {
//                 elem.style.filter(brightness) = Number(elem.style.filter(brightness))+0.02;
//                 if (elem.style.filter(brightness) >= 1)
//                     clearInterval(inInterval);
//             }, speed/50 );
//         } // end if
//     }, speed/50 );

// } // end fadeOut()
