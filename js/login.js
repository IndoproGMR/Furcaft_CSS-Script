//=============================================
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//=============================================
function shwpass() {
    var x = document.getElementById("mypasslo");
    spass(x);
    var x = document.getElementById("mypassre");
    spass(x);
    var x = document.getElementById("mypassre1");
    spass(x);
}
const spass = function (x){
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
//=============================================

//=============================================
const logreg = window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//=============================================
