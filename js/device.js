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

document.addEventListener("DOMContentLoaded", () => {
    var device = localStorage.getItem("device");

    if (device) {
        applyDevice(device);
    } else {
        applyDevice("normal");
    }
});