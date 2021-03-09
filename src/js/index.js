function darkMode() {
    document.documentElement.style.setProperty("--color-darkmode", "#222");
    document.documentElement.style.setProperty("--color-darkmode-lite", "#333");
    document.documentElement.style.setProperty("--color-darkmode-light", "#444");
    document.documentElement.style.setProperty("--color-dark", "#CCC");
    document.documentElement.style.setProperty("--color-black", "#fff");
    document.documentElement.style.setProperty("--color-grey", "#fff");
    document.querySelector(".nav__logo--img").src = "src/images/logo-bookmark-white.png";
}

function lightmode() {
    document.documentElement.style.setProperty("--color-darkmode", "#fff");
    document.documentElement.style.setProperty("--color-darkmode-lite", "#fff");
    document.documentElement.style.setProperty("--color-darkmode-light", "#fff");
    document.documentElement.style.setProperty("--color-dark", "#333");
    document.documentElement.style.setProperty("--color-black", "#000");
    document.documentElement.style.setProperty("--color-grey", "#777");
    document.querySelector(".nav__logo--img").src="src/images/logo-bookmark.png";
}
//dark mode button
var toggleButton = document.querySelector("#switch-sm");

//change modal close buttons
function changeCloseButton() {
    modals = document.querySelectorAll(".btn__close");
    modals.forEach(el => {
        el.classList.toggle('btn__light');
        el.classList.toggle('btn__dark');
    });
}

// boolean t - 1: darkmode active, 0: lightmode active
var t = false;
toggleButton.addEventListener('click', e => {
    setTimeout(() => {
        t == false ? darkMode() : lightmode();
        t = !t;
        changeCloseButton();
    }, 125);
});
