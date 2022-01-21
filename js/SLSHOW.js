//========================================
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//========================================
var count = 0;
function klik() {
  // var count = localStorage.getItem("count");
  var count = sessionStorage.getItem("count");

  //document.getElementById("backa").innerHTML = count;
  if (count == 666) {
    document.getElementById("back").innerHTML = "SS n share to discord";
  }
  else if (count == 69) {
    document.getElementById("back").innerHTML = "nice";
  }
  else if (count > 8) {
    document.getElementById("back").innerHTML = "stop";
  }
  else if (count > 3) {
    document.getElementById("back").innerHTML = "Hello There";
  }
  count++;
  // localStorage.setItem("count", count);
  sessionStorage.setItem("count", count);

}