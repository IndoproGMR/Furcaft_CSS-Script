

function search() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue,myform,filter2, h3, h4,ha3, ha4, br,br2;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    ha3 = document.getElementById('myUL')
    h3 = ha3.getElementsByTagName('h3');
  
    ha4 = document.getElementById('myUL')
    h4 = ha4.getElementsByTagName('h4');

    br2 = document.getElementById('myUL')
    br = br2.getElementsByTagName('br');
  
  
  
  
    //Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  
    for (i = 0; i < h3.length; i++) {
      a = h3[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        h3[i].style.display = "";
      } else {
        h3[i].style.display = "none";
      }
    }
  
    for (i = 0; i < h4.length; i++) {
      a = h4[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        h4[i].style.display = "";
      } else {
        h4[i].style.display = "none";
      }
    }

    for (i = 0; i < br.length; i++) {
        a = br[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          br[i].style.display = "";
        } else {
          br[i].style.display = "none";
        }
      }
  
  }