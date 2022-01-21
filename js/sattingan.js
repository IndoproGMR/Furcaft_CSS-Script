function applyTheme(theme) {
    document.body.classList.remove("theme-auto","theme-light","theme-dark");
    document.body.classList.add('theme-'+theme);

    var autoc = document.getElementById("autoc");
    var lightc = document.getElementById("lightc");
    var darkc = document.getElementById("darkc");

    if (theme == 'light') {
        lightc.classList.remove('lang-off');

        darkc.classList.add('lang-off');
        autoc.classList.add('lang-off');
    }
    if (theme == 'dark') {
        darkc.classList.remove('lang-off');

        lightc.classList.add('lang-off');
        autoc.classList.add('lang-off');
    }
    if (theme == 'auto') {
        autoc.classList.remove('lang-off');

        lightc.classList.add('lang-off');
        darkc.classList.add('lang-off');
    }
}
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
    // console.log(localStorage.getItem("theme"));
    applyTheme(themeName);
}

/////////////////////////

function applyDevice(device) {
    var nor = document.getElementById("nor");
    var low = document.getElementById("low");
    var imaget = document.getElementById("imaget");    
    if (device == 'low') {
        imaget.classList.remove('imaget-normal');
        imaget.classList.add('imagat-low');

        low.classList.remove('lang-off');
        nor.classList.add('lang-off');
    } if (device == 'normal') {
        imaget.classList.remove('imagat-low');
        imaget.classList.add('imaget-normal');

        nor.classList.remove('lang-off');
        low.classList.add('lang-off');
    }
}
function setDevice(device) { 
    localStorage.setItem("device", device);
    document.documentElement.className = device;
    // console.log(localStorage.getItem("device"));
    applyDevice(device);
}

////////////////////////

function applyLang(lang) {
    var dokuen = document.getElementById("lang-en");
    var dokuid = document.getElementById("lang-id");
    var langcen = document.getElementById("langc-en");
    var langcid = document.getElementById("langc-id");
    if (lang == 'en') {
        dokuen.classList.remove('lang-off');
        dokuen.classList.add('lang-aktif');
        langcen.classList.remove('lang-off');

        dokuid.classList.add('lang-off');
        langcid.classList.add('lang-off');
    } if (lang == 'id') {
        dokuid.classList.remove('lang-off');
        dokuid.classList.add('lang-aktif');
        langcen.classList.add('lang-off');

        dokuen.classList.add('lang-off');
        langcid.classList.remove('lang-off');
    }    
}
function setLang(lang) {
    localStorage.setItem("lang", lang);
    document.documentElement.className = lang;
    // console.log(localStorage.getItem("lang"));
    applyLang(lang);
}

/////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    var theme = localStorage.getItem("theme");
    var lang = localStorage.getItem("lang");
    var device = localStorage.getItem("device");
    if (lang) {
        applyLang(lang);
    } else { 
        applyLang("id");
    }
    if (theme) {
        applyTheme(theme);
    } else {
        applyTheme("auto");
    }
    if (device) {
        applyDevice(device);
    } else {
        applyDevice("normal");
    }
});