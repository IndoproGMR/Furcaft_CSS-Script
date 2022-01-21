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

document.addEventListener("DOMContentLoaded", () => {
    var lang = localStorage.getItem("lang");
    if (lang) {
        applyLang(lang);
    } else { 
        applyLang("id");
    }

});