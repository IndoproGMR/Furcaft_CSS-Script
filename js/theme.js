

//id="thame"



function applyTheme(theme) {
    var thame = document.getElementById("thame");

    // document.body.classList.remove("theme-auto","theme-light","theme-dark");
    // document.body.classList.add('theme-' + theme);
    // thame.classList.remove("theme-auto");
    // thame.classList.add('theme-' + theme);

    if (theme == 'light') {
        thame.classList.remove('theme-auto');
        thame.classList.add('theme-light');
        thame.classList.remove('theme-dark');
    }
    if (theme == 'dark') { 
        thame.classList.remove('theme-auto');
        thame.classList.add('theme-dark');
        thame.classList.remove('theme-light');
    }

}
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
    // console.log(localStorage.getItem("theme"));
    applyTheme(themeName);
}

document.addEventListener("DOMContentLoaded", () => {
    var theme = localStorage.getItem("theme");

    if (theme) {
        applyTheme(theme);
    } else {
        applyTheme("auto");
    }
});